 
}try {
  const {
  title, category, keyFeatures, targetAudience 
}= await req.json ();
return new Response (JSON.stringify ({
  
}) 
}const prompt = `Generate an optimized marketplace listing for the following product: Please create: 1. A compelling, SEO-friendly description (100-150 words) that highlights benefits and use cases 2. A list of 5-7 relevant tags for the listing 3. A suggested price range based on the category and features 4. A bulleted list of 3-5 key selling points Format the response as a JSON object with the following structure: "keyPoints": ["point1", "point2", "point3"] 
}`;
const responseText = completion.choices[0].message.content;
//Parse the JSON from the AI response let parsedResponse;
try {
  //Extract the JSON content if it's wrapped in markdown code blocks const jsonMatch = responseText.match (/``` (?:json) ?\s* ([\s\S]*?) \s*```/) || [\s\S]* 
}) /) || [null, responseText];
//Provide a fallback structured response parsedResponse = {
  description: "An error occurred while generating the optimized description. Please try again.";
tags: [];
suggestedPrice: {
  min: 0, max: 0 
};
}
}return new Response (return new Response (JSON.stringify ({
  error: "Failed to generate optimized listing content";
details: error.message 
});
{
  status: 500;
headers: {
  ...corsHeaders, "Content-Type" : "application/json" 
}
}) 
}
});
