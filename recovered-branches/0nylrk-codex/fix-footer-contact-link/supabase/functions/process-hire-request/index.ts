 interface HireRequest {
  talent: {
  id: string;
full name: string;
professional title: string;
email?: string 
};
requester: {
  name: string;
email: string;
id?: string 
};
project: {
  overview: string;
timeline: string;
budgetMin: number;
budgetMax: number 
}
}interface EnhancedContent {
  summary: string;
projectType: string 
}serve (async (req) => {
  //Handle CORS preflight requests 
}try {
  const supabase = createClient ();
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 //1. Optional: Enhance content with AI let enhancedContent: EnhancedContent | null = null;
if (openAiKey) {
  try {
  const configuration = new Configuration ({
  apiKey: openAiKey 
});
const openai = new OpenAIApi (configuration);
const prompt = `Project Overview: "$ {
  project.overview 
}" AI Development", " Cloud Migration", " Web Design", etc.) Format your response as JSON: try {
  //Extract JSON from the response const jsonMatch = responseText.match (/\ {
  [\s\S]*\ 
}/);
if (jsonMatch) {
  //Continue without enhanced content 
}
}//2. Store the request in the database const {
  data: requestRecord, error: requestError 
}= await supabase .from ('hire requests') .insert ([ {
  talent id: talent.id, requester id: requester.id || null, //May be null if user is not authenticated requester name: requester.name, requester email: requester.email, project overview: project.overview, project summary: enhancedContent?.summary || null, project type: enhancedContent?.projectType || null, timeline: project.timeline, budget min: project.budgetMin, budget max: project.budgetMax, budget display: budgetDisplay, status: 'new', expiry date: new Date (Date.now () + 30 * 24 * 60 * 60 * 1000), //30 days from now 
}]) .select ();
}//3. Create notification for the admin //Fetch admin users const {
  data: adminUsers, error: adminError 
}= await supabase .from ('profiles') .select ('id') .eq ('user typeadmin') .limit (1);
}//Create notification for admin (if any found) const adminNotificationContent = {
  title: `New hiring request for $ {
  talent.full name 
}`;
related id: requestRecord[0].id 
};
}
}//4. Send email notification to talent if (talent.email) {
  //In a real implementation, this would call your email sending function const emailResponse = await supabase.functions.invoke ('send-email', {
  body: {
  to: talent.email, subject: `New Project Request from $ {
  requester.name 
}`, html: ` <h1>You've Received a New Project Request</h1> <p>Hello $ {
  talent.full name 
}, </p> <p>You have received a new project request from $ {
  requester.name 
}($ {
  requester.email 
}) .</p> <h2>Project Details</h2> <p><strong>Budget:</strong> $ {
  budgetDisplay 
}</p> <p><strong>Timeline:</strong> $ {
  project.timeline 
}</p> <p><strong>Overview:</strong></p> <p>$ {
  project.overview 
}</p> $ {
  enhancedContent?.summary ? `<p><strong>Summary:</strong> $ {
  enhancedContent.summary 
}</p>` : '' 
}$ {
  enhancedContent?.projectType ? `<p><strong>Project Type:</strong> $ {
  enhancedContent.projectType 
}</p>` : '' 
}<p>Please log in to your Zion AI Marketplace account to respond to this request.</p> <p>Best regards, <br>The Zion AI Marketplace Team</p> ` 
}
});
}return new Response (JSON.stringify ({
  success: true;
message: " Hire request processed successfully";
request id: requestRecord[0].id 
});
{
  headers: {
  ...corsHeaders, " Content-Type": " application/json" 
};
status: 200 
}) 
}catch (error) {
  return new Response (JSON.stringify ({
  success: false;
message: " Failed to process hire request";
error: error.message 
});
{
  headers: {
  ...corsHeaders, " Content-Type": " application/json" 
};
}) 
}
});
