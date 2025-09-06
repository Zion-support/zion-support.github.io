 https://api.openai.com/v1/chat/completions", {
  method: " POST";
headers: {
  " Content-Type": " application/json";
" Authorization": `Bearer $ {
  openAiApiKey 
}` 
};
body: JSON.stringify ({
  model: " gpt-4o-mini";
messages: [ {
  
};
{
  role: " user";
content: skillsString 
}temperature: 0.3 
}) 
});
return normalizedSkills;
}catch (error) {
  //If AI normalization fails, return the original skills return skills;
}
}/** * Uses AI to find the best talent matches for a job * @param jobDetails The job details to match against * @param talents Array of talent profiles * @returns Array of matches with scores and reasons */export async function findBestMatches (jobDetails: unknown, talents: TalentProfile[]) : Promise<MatchResult[]> {
  try {
  //Convert job details to string format for AI prompt const jobDetailsText = `Job Title: $ {
  jobDetails.title 
}`;
}) .join (" \n\n");
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 //Send request to OpenAI for matching 1. The talent ID 2. A match score from 0-100 3. A list of matched skills 4. A brief reason for the match (2-3 sentences) Return your response in JSON format only, with no additional text: [ {
  
}) 
});
}//Parse the AI response const aiResponse = JSON.parse (data.choices[0].message.content);
//Check if the response is in the expected format if (!Array.isArray (aiResponse) ) {
  
}return aiResponse;
}catch (error) {
  //If AI matching fails, perform a basic skill matching return performBasicSkillMatching (jobDetails, talents) 
}
}/** * Fallback method that uses basic string matching to find talent matches * @param jobDetails The job to match * @param talents Array of talent profiles * @returns Array of matches with scores */ 
}