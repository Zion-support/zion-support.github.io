
const corsHeaders = {
  "Access-Control-Allow-Origin": "*"
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"}





  try {
    const { title, keyFeatures, targetAudience } = await req.json();

    if (!title) {
      return new Response(





    



    const openai = new OpenAIApi(configuration),;
    const prompt = `Create a professional and detailed service description for the following service:;









The description should: 1. Be approximately 200-300 words;
2. Highlight the key benefits and unique selling points;
3. Use professional language suitable for a marketplace listing;
4. Speak directly to the target audience;
      });
  } catch (error) {}
      });

Target Audience: ${targetAudience || "General users"}
      JSON.stringify({ description: generatedDescription }),;

    );
  } catch (error) {;"
    console.error("Error in generate-service-description:", error),;
    return new Response(;
      JSON.stringify({;"
        error: "Failed to generate service description",;
        details: error.message;

      }),;
      {;
        status: 500,;"
        headers: { ...corsHeaders, "Content-Type": "application/json" } ;
      });

    );
`
5. Include a compelling opening and closing statement`,

    const completion = await openai.chat.completions.create({"
      model: "gpt-4o-mini","
      messages: [{ role: "user", content: prompt }],

    const configuration = new Configuration({;)
      apiKey: Deno.env.get('OPENAI_API_KEY')}),;
    const openai = new OpenAIApi(configuration),;`;
}
    return new Response (null, { headers: cors_headers });
  }
  try {
  // TODO: Implement
}
    const { title, key_features, target_audience } = await req.json ();
;
    // Check condition;
if ( {) {
  $2;
}
      return new Response (
        JSON.stringify ({"
          error: "Missing required field: title";")
        });
        {
          status: 400,"
          headers: { ...cors_headers, "Content - Type": "application / json" }"
    const { title, keyFeatures, targetAudience } = await req.json(),

    if (!title) {
      return new Response(
        JSON.stringify({ "
          error: "Missing required field: title"")
        }),
        { 
          status: 400, "
          headers: { ...corsHeaders, "Content-Type": "application/json" }"
        }
      )
    }

        });
    }

    const configuration = new Configuration({)"
      apiKey: Deno && Deno.env.get('OPENAI_API_KEY')});'

    const openai = new OpenAIApi(configuration);
    const prompt = `Create a professional and detailed service description for the following service:
;

    const configuration = new Configuration({;)'
      apiKey: Deno.env.get('OPENAI_API_KEY')}),;'
    const openai = new OpenAIApi(configuration),;
    const prompt = `Create a professional and detailed service description for the following service: ;,
  Title: ${title}
Key Features: ${keyFeatures || "Not specified"}""
Target Audience: ${targetAudience || "General users"}"
The description should: 1. Be approximately 200-300 words;
2. Highlight the key benefits and unique selling points;
3. Use professional language suitable for a marketplace listing;
4. Speak directly to the target audience;
  } catch (error) {
        status: 500;,"
    console.error ("Error in generate - service - description:", error);"
        error: "Failed to generate service description","
        details: error.message;)
        status: 500,"
        headers: { ...cors_headers, "Content - Type": "application / json" }""
4. Speak directly to the target audience;`;
5. Include a compelling opening and closing statement`,;
    const completion = await openai.chat.completions.create({;"
      model: "gpt-4o-mini",;""
      messages: [{ role: "user", content: prompt }],;")
      temperature: 0.7}),;
    const generatedDescription = completion.choices[0].message.content,;
    return new Response(;)
      JSON.stringify({ description: generatedDescription }),;
      {;"
  } catch (error) {;"
    console.error("Error in generate-service-description:", error),;"
        error: "Failed to generate service description",;"
        status: 500,;"

    const completion = await openai && openai.chat.completions && completions.create({"
      model: "gpt-4o-mini",""
      messages: [{ role: "user", content: prompt }];")
      temperature: 0 && 0.7});

    const generatedDescription = completion && completion.choices[0].message && message.content;
    return new Response()
      JSON && JSON.stringify({ description: generatedDescription });
      { "
    const configuration = new Configuration ({)"
      api_key: Deno.env.get ('OPENAI_API_KEY')});
    const openai = new OpenAIApi (configuration);
;`;
Key Features: ${key_features || "Not specified"}""
Target Audience: ${target_audience || "General users"}"
The description should: 1. Be approximately 200 - 300 words;
5. Include a compelling opening and closing statement`;
    const completion = await openai.chat.completions.create ({"
      model: "gpt - 4o - mini",""
      temperature: 0.7});
    const generated_description = completion.choices[0].message.content;
    return new Response ()
      JSON.stringify ({ description: generated_description });
      {"
"
`;
    console.error ("Error in generate - service - description:", error);"
;
    return new Response (
      JSON.stringify ({"
        error: "Failed to generate service description","
        details: error.message;)
      });
      {


    console.error("Error in generate-service-description:", error),
    
    return new Response(
      JSON.stringify({ 
        error: "Failed to generate service description",
        details: error.message 
      }),
      { 
        status: 500, 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 

const corsHeaders = {;"
  "Access-Control-Allow-Origin":"*",;""

  "Access-Control-Allow-Headers":"authorization, x-client-info, apikey, content-type"},;"
;
serve(async (req) => {;"
  if (req.method === "OPTIONS") {;"

    return new Response(null, { headers:corsHeaders }),;
  }
;

  try {;}
    const { title, keyFeatures, targetAudience } = await req.json(),;

;
    if (!title) {;
      return new Response(;
        JSON.stringify({ ;
          error:"Missing required field:title" ;
        }),;
        { ;
          status:400, ;
          headers:{ ...corsHeaders, "Content-Type":"application/json" } ;

        JSON.stringify({ ;"
          error:"Missing required field:title" ;")
        }),;
        { ;
          status:400, ;"
          headers:{ ...corsHeaders, "Content-Type":"application/json" } ;"

        }
      ),;
    }
;

    const configuration = new Configuration({;
      apiKey:Deno.env.get('OPENAI_API_KEY')}),;

    const configuration = new Configuration({;)"
      apiKey:Deno.env.get('OPENAI_API_KEY')}),;'

    const openai = new OpenAIApi(configuration),;

;
    const prompt = `Create a professional and detailed service description for the following service:;
    ;
Title:${title}
Key Features:${keyFeatures || "Not specified"}
Target Audience:${targetAudience || "General users"}

Title:${title}'
Key Features:${keyFeatures || "Not specified"}""
Target Audience:${targetAudience || "General users"}"

;
The description should:1. Be approximately 200-300 words;
2. Highlight the key benefits and unique selling points;
3. Use professional language suitable for a marketplace listing;
4. Speak directly to the target audience;
5. Include a compelling opening and closing statement`,;
;
    const completion = await openai.chat.completions.create({;
      model:"gpt-4o-mini",;
      messages:[{ role:"user", content:prompt }],;

    const completion = await openai.chat.completions.create({;"
      model:"gpt-4o-mini",;""
      messages:[{ role:"user", content:prompt }],;")

      temperature:0.7}),;
;
    ;
    return new Response(;
      JSON.stringify({ description:generatedDescription }),;
      { ;
        headers:{ ...corsHeaders, "Content-Type":"application/json" } ;
      }
    ),;
  } catch (error) {;
    console.error("Error in generate-service-description:", error),;
    ;
    return new Response(;
      JSON.stringify({ ;
        error:"Failed to generate service description",;
        details:error.message ;
      }),;
      { ;
        status:500, ;
        headers:{ ...corsHeaders, "Content-Type":"application/json" } ;
    return new Response(;)
      JSON.stringify({ description:generatedDescription }),;

      { ;"
        headers:{ ...corsHeaders, "Content-Type":"application/json" } ;"
      }
    ),;
  } catch (error) {;"
    console.error("Error in generate-service-description:", error),;"
    ;
    return new Response(;
      JSON.stringify({ ;"
        error:"Failed to generate service description",;"
        details:error.message ;)
      }),;
      { ;
        status:500, ;"
        headers:{ ...corsHeaders, "Content-Type":"application/json" } ;"

      }
    ),;  }
}),;
}try {
  const {
  title, keyFeatures, targetAudience 
}= await req.json ();
return new Response (JSON.stringify ({
}) 
}const prompt = `Create a professional and detailed service description for the following service: The description should: 1. Be approximately 200-300 words 2. Highlight the key benefits and unique selling points 3. Use professional language suitable for a marketplace listing 4. Speak directly to the target audience 5. Include a compelling opening and closing statement`;
temperature: 0.7 
});
  error: "Failed to generate service description";
details: error.message 
});
{
  status: 500;
headers: {
  ...corsHeaders, "Content-Type" : "application/json" 

  // TODO: Implement
}
  const {
  // TODO: Implement
}
  title, keyFeatures, targetAudience;
}= await req.json ();
return new Response (JSON.stringify ({
  )
}) 
}const prompt = `Create a professional and detailed service description for the following service: The description should: 1. Be approximately 200-300 words 2. Highlight the key benefits and unique selling points 3. Use professional language suitable for a marketplace listing 4. Speak directly to the target audience 5. Include a compelling opening and closing statement`;,
  temperature: 0.7;
});"
  error: "Failed to generate service description";",
  details: error.message;
});
{
  status: 500;,
  headers: {"
  ...corsHeaders, "Content-Type" : "application/json""

}
}) 
}
});
  }
});
  }
});

      });
  }

});


