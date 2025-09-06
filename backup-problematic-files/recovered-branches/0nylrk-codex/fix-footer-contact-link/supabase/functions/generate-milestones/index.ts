
  }
}),; const corsHeaders = {
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'
};
//Handle CORS preflight requests if (req.method === 'OPTIONS') {
  //Create prompt for OpenAI const prompt = `You are an expert project manager who specializes in breaking down projects into clear milestones. Based on the following project details: Generate a logical, phased milestone breakdown with 3-7 milestones that would be appropriate for this project. Include realistic due dates, estimated hours of effort, and clear deliverable descriptions. Each milestone should have: 1. Title: A concise title 2. Description: A clear description of deliverables 3. Due Date: A specific date within the project timeline 4. Estimated Hours: Reasonable effort estimate Format the response as a valid JSON array of milestone objects with these fields: "title", "description", "dueDate", "estimatedHours" Ensure your response is ONLY the JSON array with no additional text. `;
// Call OpenAI API
}
});

