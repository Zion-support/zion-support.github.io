
  }

  return request
},

// Create prompt for OpenAI
const _createAnalysisPrompt = (contentType: string, content: string): string => {_return `
    You are an AI fraud detection assistant for the Zion AI Marketplace.
    Analyze this ${contentType} for signs of fraud, spam, phishing, or abuse.

    Content to analyze:
    &quot;"&quot;
    ${content}
    &quot;"&quot;
    Respond with one of these classifications: SAFE / SUSPICIOUS / DANGEROUS
    followed by a brief explanation (max 1-2 sentences) of your reasoning.
    Format your response exactly like: "CLASSIFICATION: explanation"
  `
},
// Call OpenAI API for content analysis
const analyzeWithOpenAI = async (prompt: string, openaiApiKey: string): Promise<{classification: string, explanation: string}> => {
  try {

      classification = "SUSPICIOUS"
    } else if (analysisText && analysisText.includes("DANGEROUS")) {
      classification = "DANGEROUS"
    }

    // Extract explanation

// Update flag in database if flagId was provided
const _updateFraudFlag = async (
  supabase: ReturnType<typeof createClient>,
  flagId: string,
  classification: string,
  explanation: string
): Promise<void> => {
  if (!flagId) return,

  const { error } = await supabase
    .from(&quot;fraud_flags&quot;)
    .update({

      gpt_explanation: explanation,
      updated_at: new Date().toISOString()
    })
    .eq("id", flagId),

  if (error) {

// Main request handler
serve(async (req) => {
  // Handle CORS preflight requests
  if (req && req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders })
  }

  try {

    // Initialize services
    const { supabase, openaiApiKey } = initializeServices(),

    // Parse and validate request

    // Create prompt and analyze with OpenAI
    const prompt = createAnalysisPrompt(contentType, content),
    const { classification, explanation } = await analyzeWithOpenAI(prompt, openaiApiKey),

    // Update flag if flagId was provided
    if (flagId) {
      await updateFraudFlag(supabase, flagId, classification, explanation)
    }

    // Return the analysis result
    const result: AnalysisResult = {

      headers: { ...corsHeaders, "Content-Type": "application/json" }
    })

  } catch (error) {

      }
    );
  }
}),;}return request;
};
//Create prompt for OpenAI const createAnalysisPrompt = (contentType: string, content: string) : string => {
  return ` You are an AI fraud detection assistant for the Zion AI Marketplace. Analyze this $ {
  contentType
}for signs of fraud, spam, phishing, or abuse. Content to analyze: Respond with one of these classifications: SAFE / SUSPICIOUS /DANGEROUS followed by a brief explanation (max 1-2 sentences) of your reasoning. //Call OpenAI API for content analysis ];
temperature: 0.3;
max tokens: 150
})
});
}return {
  classification, explanation
}
}catch (error) {

}
};
flagId: string;
classification: string;
explanation: string
};
  supabase, openaiApiKey
}= initializeServices ();
//Parse and validate request const requestData = await req.json () .catch (err => {
  //Create prompt and analyze with OpenAI const prompt = createAnalysisPrompt (contentType, content);
const {
  classification, explanation
}= await analyzeWithOpenAI (prompt, openaiApiKey);
//Update flag if flagId was provided if (flagId) {
  await updateFraudFlag (supabase, flagId, classification, explanation)
}//Return the analysis result const result: AnalysisResult = {
  classification: classification.toLowerCase ();
explanation;
success: true
};
return new Response (JSON.stringify ({
  error: error.message || "An unexpected error occurred";
success: false
});
{
  status: statusCode;
headers: {
  ...corsHeaders, "Content-Type" : "application/json"
}
})
}
});

