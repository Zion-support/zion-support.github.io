  try {
    const { content, enhancementType, context } = await req && req.json();
    const openAiKey = Deno && Deno.env.get("OPENAI_API_KEY");
    if (!openAiKey) {
      throw new Error("OPENAI_API_KEY is not defined")



  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {






;
    if (!openAiKey) {;
      throw new Error("OPENAI_API_KEY is not defined"),;
    }
;
    if (!content) {;
      throw new Error("Content is required"),;
    }

    if (!openAiKey) {;
      throw new Error("OPENAI_API_KEY is not defined");



    let systemPrompt = "";
    let userPrompt = "";
    switch (enhancementType) {
      case "summary":
        systemPrompt = "You are an expert resume writer who helps professionals create compelling personal summaries. Create a concise, professional summary that highlights strengths and career goals.";
        userPrompt = `Create a professional summary for someone with the following background: ${content}. Include key strengths and career objectives. Keep it under 200 words. ${context ? `Additional context: ${context}` : ''}`;



  }
});
;


