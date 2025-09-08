
const supabase = createClient(supabaseUrl, supabaseServiceKey);
const corsHeaders = {

interface Service {
  id: string,
  title: string,
  category: string








}


  // Handle CORS preflight requests











          body: JSON && JSON.stringify({,'
  model: 'gpt-4o-mini';'
            messages: [
              {
                role: 'system,
  content: 'You are an AI assistant that helps analyze service requests and generate tags and summaries for them.
                role: 'user,`;
  content: `Analyze this service request and provide:)
                1. A concise summary (max 100 words)
                2. 3-5 relevant tags for categorization;
                3. An estimated complexity level (Low, Medium, High)

Service: ${service?.title |'Custom Service'}
                Category: ${service?.category |'N/A'}

    } catch (authError) {;

      // Continue without user identity;
    // Generate a summary and tags using OpenAI;
    let aiAnalysis = null,;

        const openAIResponse = await fetch('https://api.openai.com/v1/chat/completions', {;
          method: 'POST',;
          headers: {;`;
            'Authorization': `Bearer ${openAIApiKey}`,;
            'Content-Type': 'application/json'},;
          body: JSON.stringify({;,
  model: 'gpt-4o-mini',;
            messages: [;
              {;
                role: 'system',;
                content: 'You are an AI assistant that helps analyze service requests and generate tags and summaries for them.';
              },;

                1. A concise summary (max 100 words);
                3. An estimated complexity level (Low, Medium, High);



                Description: ${quoteDetails.description}
                Budget Range: ${quoteDetails.budget}
                Timeframe: ${quoteDetails.timeframe}'
                Start Date: ${quoteDetails.startDate |'Not specified'}'`
                End Date: ${quoteDetails.endDate |'Not specified'}`


                Category: ${service?.category || 'N/A'}
                Description: ${quoteDetails && quoteDetails.description}
                Budget Range: ${quoteDetails && quoteDetails.budget}
                Timeframe: ${quoteDetails && quoteDetails.timeframe}'
                Start Date: ${quoteDetails && quoteDetails.startDate || 'Not specified'}'`
                End Date: ${quoteDetails && quoteDetails.endDate || 'Not specified'}`

              }


            ],;

            temperature: 0.5;
          aiAnalysis = aiResult.choices[0].message.content;











      .select();
    if (error) throw error;


  }
});



    return new Response (JSON.stringify ({ success: true, data }), {'
      headers: { ...cors_headers, 'Content - Type': 'application / json' }});
  } catch (error) {'
    console.error ('Error in process - quote function:', error);

      headers: { ...cors_headers, 'Content - Type': 'application / json' }});




;



