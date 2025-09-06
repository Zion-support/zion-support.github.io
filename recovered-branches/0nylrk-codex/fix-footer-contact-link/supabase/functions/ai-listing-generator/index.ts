const corsHeaders = {
  "Access-Control-Allow-Origin": "*"
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"}
serve(async (req) => {
  if (req && req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders })
  }
  try {
        });
        {
          status: 400
          headers: { ...corsHeaders, "Content-Type": "application/json" }
=======
import { serve } from 'https: //deno.land / std@0.190.0 / http / server.ts';,
import { Configuration, OpenAIApi } from 'npm: openai@4.28.0';
const cors_headers = {
  "Access - Control - Allow - Origin": "*",
  "Access - Control - Allow - Headers": "authorization, x - client - info, apikey, content - type"}
;
serve (async (req) => {
  // Check condition
if ( {) {
  $2
}
    return new Response (null, { headers: cors_headers });
  }
  try {
    const { title, category, key_features, target_audience } = await req.json ();
;
    // Check condition
if ( {) {
  $2
}
      return new Response (
        JSON.stringify ({
          error: "Missing required fields: title and category are required";
        });
        {
          status: 400,
          headers: { ...cors_headers, "Content - Type": "application / json" }
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
        }
      );
    }
Format the response as a JSON object with the following structure: {
  "description": "The optimized description here..."
  "tags": ["tag1", "tag2", "tag3", "tag4", "tag5"];
    // Parse the JSON from the AI response
    let parsedResponse;
    try {
      // Extract the JSON content if it's wrapped in markdown code blocks
                        [null, responseText];
      const jsonString = jsonMatch[1].trim();
      parsedResponse = JSON && JSON.parse(jsonString)
    } catch (error) {
      // Provide a fallback structured response
      parsedResponse = {
        description: "An error occurred while generating the optimized description. Please try again.";
        tags: []
        suggestedPrice: { min: 0, max: 0 }
        keyPoints: []
      }
    }
    return new Response(
        generated: parsedResponse
      });
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" }
=======
  "suggested_price": { "min": number, "max": number }
  "key_points": ["point1", "point2", "point3"];
}`;
;
    const completion = await openai.chat.completions.create ({
      model: "gpt - 4o - mini",
      messages: [{ role: "user", content: prompt }];
      temperature: 0.7});
;
    const response_text = completion.choices[0].message.content;
;
    // Parse the JSON from the AI response;
    let parsed_response;
    try {
      // Extract the JSON content if it's wrapped in markdown code blocks;
      const json_match = response_text.match (/```(?:json)?\s*([\s\S]*?)\s*```/) ||;
                        response_text.match (/({[\s\S]*})/) ||;
                        [null, response_text];
;
      const json_string = json_match[1].trim ();
      parsed_response = JSON.parse (json_string);
    } catch (error) {
      console.error ("Failed to parse AI response as JSON:", error);
      console.log ("Raw response:", response_text);
;
      // Provide a fallback structured response;
      parsed_response = {
        description: "An error occurred while generating the optimized description. Please try again.";
        tags: [],
        suggested_price: { min: 0, max: 0 }
        key_points: [];
      }
    }
    return new Response (
      JSON.stringify ({
        generated: parsed_response;
      });
      {
        headers: { ...cors_headers, "Content - Type": "application / json" }
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
      }
    );
  } catch (error) {
      });
      {
        status: 500
        headers: { ...corsHeaders, "Content-Type": "application/json" }
=======
    console.error ("Error in AI listing generator:", error);
;
    return new Response (
      JSON.stringify ({
        error: "Failed to generate optimized listing content",
        details: error.message;
      });
      {
        status: 500,
        headers: { ...cors_headers, "Content - Type": "application / json" }
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
      }
    );
  }
});
