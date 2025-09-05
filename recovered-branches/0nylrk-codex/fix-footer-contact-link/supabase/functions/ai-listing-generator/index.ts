

const _corsHeaders = {_"Access-Control-Allow-Origin": "*", _"Access-Control-Allow-Headers": "authorization, _x-client-info, _apikey, _content-type"};

serve(_async (req) => {_if (req.method === "OPTIONS") {
    return new Response(null, _{ headers: corsHeaders});
  }

  try {_const { title, _category, _keyFeatures, _targetAudience} = await req.json();

    if (!title || !category) {_return new Response(
        JSON.stringify({ 
          error: "Missing required fields: title and category are required"}),
        {_status: 400, _headers: { ...corsHeaders, _"Content-Type": "application/json"} 
        }
      );
    }

    const _configuration = new Configuration({_apiKey: Deno.env.get('OPENAI_API_KEY')});
    const _openai = new OpenAIApi(configuration);

    const _prompt = `Generate an optimized marketplace listing for the following product:
    
Title: ${_title}
Category: ${_category}
Key Features: ${_keyFeatures || "Not specified"}
Target Audience: ${_targetAudience || "General users"}

Please create:
1. A compelling, SEO-friendly description (100-150 words) that highlights benefits and use cases
2. A list of 5-7 relevant tags for the listing
3. A suggested price range based on the category and features
4. A bulleted list of 3-5 key selling points

Format the response as a JSON object with the following structure:
{_"description": "The optimized description here...", _"tags": ["tag1", _"tag2", _"tag3", _"tag4", _"tag5"], _"suggestedPrice": { "min": number, _"max": number},
  "keyPoints": ["point1", "point2", "point3"]
}`;

    const _completion = await openai.chat.completions.create({_model: "gpt-4o-mini", _messages: [{ role: "user", _content: prompt}],
      temperature: 0.7});

    const _responseText = completion.choices[0].message.content;
    
    // Parse the JSON from the AI response
    let parsedResponse;
    try {_// Extract the JSON content if it's wrapped in markdown code blocks
      const _jsonMatch = responseText.match(/```(?:json)?\s*([\s\S]*?)\s*```/) || 
                        responseText.match(/({[\s\S]*})/) ||
                        [null, responseText];
      
      const _jsonString = jsonMatch[1].trim();
      parsedResponse = JSON.parse(jsonString);
    } catch (error) {_// Provide a fallback structured response
      parsedResponse = {
        description: "An error occurred while generating the optimized description. Please try again.", _tags: [], _suggestedPrice: { min: 0, _max: 0},
        keyPoints: []
      };
    }

    return new Response(
      JSON.stringify({_generated: parsedResponse}),
      {_headers: { ...corsHeaders, _"Content-Type": "application/json"} 
      }
    );
  } catch (error) {_return new Response(
      JSON.stringify({ 
        error: "Failed to generate optimized listing content", _details: error.message}),
      {_status: 500, _headers: { ...corsHeaders, _"Content-Type": "application/json"} 
      }
    );
  }
});
