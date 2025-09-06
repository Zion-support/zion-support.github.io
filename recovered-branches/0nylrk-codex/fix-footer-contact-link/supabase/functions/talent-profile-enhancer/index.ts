 const corsHeaders = {
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type' 
};
interface TalentProfileData {
  name: string;
title: string;
bio: string;
skills: string[];
location?: string 
}interface EnhancedProfile {
  summary: string;
categorizedSkills: {
  programming: string[];
devops: string[];
platforms: string[];
softSkills: string[];
other: string[] 
}
}serve (async (req) => {
  //Handle CORS preflight requests if (req.method === 'OPTIONS') {
  
}//Create a request to OpenAI API const openAIResponse = await fetch ('https://api.openai.com/v1/chat/completions', {
  method: 'POST', headers: {
  'Authorization': `Bearer $ {
  OPENAI API KEY 
}`;
'Content-Type': 'application/json' 
};
body: JSON.stringify ({
  model: 'gpt-4o-mini', messages: [ {
  role: 'system', content: `You are an expert HR assistant. Based on the user's bio and experience, write a professional and engaging 100–150 word summary for their profile. Then extract up to 8 clear skill tags, categorized by type for better filtering.` 
};
{
  role: 'user', content: `Create a professional profile summary and categorize skills based on this information: $ {
  talentData.name 
}
}Each category should have no more than 3 skills, and there should be no more than 8 skills total across all categories.` 
}];
temperature: 0.7;
}) 
});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 
}//Extract the generated content from the response const responseContent = openAIData.choices[0].message.content;
//Parse the JSON response let enhancedProfile: EnhancedProfile;
try {
  enhancedProfile = JSON.parse (responseContent) 
}catch (e) {
  
}return new Response (JSON.stringify (enhancedProfile);
{
  headers: {
  ...corsHeaders, 'Content-Type': 'application/json' 
}
}) 
}catch (error) {
  return new Response (JSON.stringify ({
  error: error.message 
});
{
  status: 500, headers: {
  ...corsHeaders, 'Content-Type': 'application/json' 
}
}) 
}
});
