 const supabase = createClient (supabaseUrl, supabaseServiceKey);
const corsHeaders = {
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type' 
};
interface Service {
  id: string;
title: string;
category: string 
}interface QuoteDetails {
  description: string;
email: string;
budget: string;
timeframe: string;
startDate?: string;
endDate?: string 
}interface RequestBody {
  service: Service | null;
quoteDetails: QuoteDetails 
}//Handle CORS preflight requests if (req.method === 'OPTIONS') {
  //Continue without user identity 
}//Generate a summary and tags using OpenAI let aiAnalysis = null;
try {
  if (openAIApiKey) {
  const openAIResponse = await fetch ('https: //api.openai.com/v1/chat/completions', {
  method: 'POST';
headers: {
  openAIApiKey 
}`;
'Content-Type': 'application/json' 
};
body: JSON.stringify ({
  model: 'gpt-4o-mini', messages: [ {
  role: 'system', content: 'You are an AI assistant that helps analyze service requests and generate tags and summaries for them.' 
};
{
  role: 'user', content: `Analyze this service request and provide: 1. A concise summary (max 100 words) 2. 3-5 relevant tags for categorization 3. An estimated complexity level (Low, Medium, High) Service: $ {
  service?.title || 'Custom Service' 
}Category: $ {
  service?.category || 'N/A' 
}Description: $ {
  quoteDetails.description 
}Budget Range: $ {
  quoteDetails.budget 
}Timeframe: $ {
  quoteDetails.timeframe 
}Start Date: $ {
  quoteDetails.startDate || 'Not specified' 
}End Date: $ {
  quoteDetails.endDate || 'Not specified' 
}` 
}];
temperature: 0.5 
}) 
});
// Continue without AI analysis 
}data, error 
}= await supabase .from ('service quotes') .insert ([ {
  user id: userId, service id: service?.id, service title: service?.title || 'Custom Service', service category: service?.category, description: quoteDetails.description, email: quoteDetails.email, budget: quoteDetails.budget, timeframe: quoteDetails.timeframe, start date: quoteDetails.startDate, end date: quoteDetails.endDate, ai analysis: aiAnalysis, status: 'pending' 
}]) .select ();
if (error) throw error;
}
});
