
import &quot;https://deno.land/x/xhr@0.1.0/mod.ts&quot;;
import { serve } from &quot;https://deno.land/std@0.190.0/http/server.ts&quot;;

const openAIApiKey = Deno.env.get(&quot;OPENAI_API_KEY&quot;);

const corsHeaders = {
  &quot;Access-Control-Allow-Origin&quot;: &quot;*&quot;,
  &quot;Access-Control-Allow-Headers&quot;: &quot;authorization, x-client-info, apikey, content-type&quot;};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === &quot;OPTIONS&quot;) {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Get personalization request data
    const { 
      emailType, 
      userData, 
      activityData,
      template = {} 
    } = await req.json();
    
    if (!emailType || !userData) {
      throw new Error(&quot;Missing required parameters: emailType and userData&quot;);
    }
    
    // Create a prompt based on the email type and user data
    let systemPrompt = &quot;You are an AI assistant that creates personalized email content for a marketplace platform called Zion AI that connects AI professionals with clients. Create content that is friendly, professional, and encouraging.&quot;;
    let userPrompt = "&quot;;
    
    // Subject line context
    let subjectContext = "&quot;;
    
    switch (emailType) {
      case &quot;welcome_series&quot;:
        userPrompt = `Create a welcome email for a new ${userData.userType === &quot;talent&quot; ? &quot;talent/professional&quot; : &quot;client/employer&quot;} named ${userData.firstName}. The email should introduce them to the platform and guide them through their next steps.`;
        break;
        
      case &quot;inactivity_reminder&quot;:
        userPrompt = `Create a re-engagement email for a ${userData.userType === &quot;talent&quot; ? &quot;talent/professional&quot; : &quot;client/employer&quot;} named ${userData.firstName} who has been inactive for ${activityData.daysInactive} days. They haven't completed their ${activityData.incompleteAction}.`;
        subjectContext = &quot;Make the subject line attention-grabbing but not pushy, focusing on the benefits of returning to the platform.&quot;;
        break;
        
      case &quot;job_application&quot;:
        userPrompt = `Create an email encouraging a talent named ${userData.firstName} who hasn't applied to any jobs yet. Their skills are: ${userData.skills ? userData.skills.join(&quot;, &quot;) : &quot;AI-related skills&quot;}. Encourage them to complete their profile and apply to relevant positions.`;
        subjectContext = &quot;Create a subject line that emphasizes opportunity and personal growth.&quot;;
        break;
        
      case &quot;profile_completion&quot;:
        userPrompt = `Create an email for ${userData.firstName} reminding them to complete their profile. They have completed ${userData.profileCompletion || 0}% of their profile. Focus on how a complete profile increases visibility.`;
        subjectContext = &quot;Create a short, motivational subject line about profile completion.&quot;;
        break;
        
      default:
        userPrompt = `Create a re-engagement email for a user named ${userData.firstName} who has been inactive on the Zion AI Marketplace platform. Encourage them to return and continue using the platform.`;
    }
    
    // Add subject line request to the prompt
    userPrompt += `\n\n${subjectContext || &quot;Create an engaging subject line for this email.&quot;}\n\nRespond with JSON in this format only: { &quot;subject&quot;: &quot;The subject line&quot;, &quot;greeting&quot;: &quot;Personalized greeting&quot;, &quot;mainContent&quot;: [&quot;paragraph1&quot;, &quot;paragraph2&quot;], &quot;callToAction&quot;: &quot;Text for the CTA button&quot;, &quot;signature&quot;: &quot;Email signature text&quot; }`;

    // Call OpenAI API to generate personalized content
    const response = await fetch(&quot;https://api.openai.com/v1/chat/completions&quot;, {
      method: &quot;POST&quot;,
      headers: {
        &quot;Authorization&quot;: `Bearer ${openAIApiKey}`,
        &quot;Content-Type&quot;: &quot;application/json&quot;},
      body: JSON.stringify({
        model: &quot;gpt-4o-mini&quot;,
        messages: [
          { role: &quot;system&quot;, content: systemPrompt },
          { role: &quot;user&quot;, content: userPrompt }
        ],
        temperature: 0.7})});

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`OpenAI API error: ${JSON.stringify(errorData)}`);
    }

    const data = await response.json();
    const generatedContentText = data.choices[0].message.content;
    
    // Parse the JSON response from OpenAI
    let generatedContent;
    try {
      generatedContent = JSON.parse(generatedContentText);
    } catch (e) {
      console.error(&quot;Failed to parse GPT response as JSON:&quot;, e);
      // console.log(&quot;Raw response:&quot;, generatedContentText);
      // Try to extract JSON using regex as fallback
      const jsonMatch = generatedContentText.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        try {
          generatedContent = JSON.parse(jsonMatch[0]);
        } catch (e2) {
          throw new Error(&quot;Could not parse the generated content as JSON&quot;);
        }
      } else {
        throw new Error(&quot;Could not extract JSON from the generated content&quot;);
      }
    }

    // Apply the generated content to the template or return it directly
    return new Response(JSON.stringify(generatedContent), {
      headers: { ...corsHeaders, &quot;Content-Type&quot;: &quot;application/json&quot; }});
  } catch (error) {
    console.error(&quot;Error in personalize-email function:&quot;, error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, &quot;Content-Type&quot;: &quot;application/json&quot; }});
  }
});
