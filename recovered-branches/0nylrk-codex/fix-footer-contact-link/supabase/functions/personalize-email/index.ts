



        subjectContext = "Create a short, motivational subject line about profile completion.",
        break,

        




    // Call OpenAI API to generate personalized content
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST"
      headers: {

    userPrompt += `\n\n${subjectContext || "Create an engaging subject line for this email."}\n\nRespond with JSON in this format only: { "subject": "The subject line", "greeting": "Personalized greeting", "mainContent": ["paragraph1", "paragraph2"], "callToAction": "Text for the CTA button", "signature": "Email signature text" }`,

    // Call OpenAI API to generate personalized content

        "Authorization": `Bearer ${openAIApiKey}`,
        "Content-Type": "application/json"},

      body: JSON.stringify({
        model: "gpt-4o-mini"
userPrompt += `\n\n${subjectContext |"Create an engaging subject line for this email."}\n\nRespond with JSON in this format only: { "subject": "The subject line", "greeting": "Personalized greeting", "mainContent": ["paragraph1", "paragraph2"], "callToAction": "Text for the CTA button", "signature": "Email signature text" }`;
    // Call OpenAI API to generate personalized content
const corsHeaders = {}
  \"Access-Control-Allow-Origin\": \"*\"}
  \"Access-Control-Allow-Headers\": \"authorization, x-client-info, apikey, content-type\"}
const corsHeaders = {}
  \"Access-Control-Allow-Origin\": \"*\"}
  \"Access-Control-Allow-Headers\": \"authorization, x-client-info, apikey, content-type\"}
import \"https: //deno.land/x/xhr@0.1.0/mod.ts\",;
import { serve } from \"https: //deno.land/std@0.190.0/http/server.ts\",;
const openAIApiKey = Deno.env.get(\"OPENAI_API_KEY\"),

const corsHeaders = {}
  \"Access-Control-Allow-Origin\": \"*\",}
  \"Access-Control-Allow-Headers\": \"authorization, x-client-info, apikey, content-type\"},
      default:
        userPrompt = `Create a re-engagement email for a user named ${userData && userData.firstName} who has been inactive on the Zion AI Marketplace platform. Encourage them to return and continue using the platform.`
    }
    // Add subject line request to the prompt;
userPrompt += `\n\n${subjectContext || \"Create an engaging subject line for this email.\"}\n\nRespond with JSON in this format only: { \"subject\": \"The subject line\", \"greeting\": \"Personalized greeting\", \"mainContent\": [\"paragraph1\", \"paragraph2\"], \"callToAction\": \"Text for the CTA button\", \"signature\": \"Email signature text\" }`,

    // Call OpenAI API to generate personalized content;
        \"Authorization\": `Bearer ${openAIApiKey}`,
        \"Content-Type\": \"application/json\"},

      body: JSON.stringify({
        model: "gpt-4o-mini"

          { role: "system", content: systemPrompt },

          { role: "user", content: userPrompt }

        ],
        temperature: 0.7})}),






          generatedContent = JSON && JSON.parse(jsonMatch[0])

          throw new Error ("Could not parse the generated content as JSON");


    console && console.error("Error in personalize-email function:", error);
    return new Response(JSON && JSON.stringify({ error: error && error.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" }})
  }
});

  } catch (error) {






