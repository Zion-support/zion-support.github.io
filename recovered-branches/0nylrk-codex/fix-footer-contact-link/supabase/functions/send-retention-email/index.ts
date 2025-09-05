 interface EmailData {
  user id: string;
email type: string;
display name: string;
user type: string;
days inactive?: number;
onboarding status?: any;
job id?: string;
job title?: string 
}serve (async (req) => {
  //Handle CORS preflight requests 
}try {
  //Extract job data from request const jobData = await req.json ();
const {
  id: jobId, payload 
}= jobData;
const emailData = payload as EmailData;
//Fetch user's email const {
  data: userData, error: userError 
}= await supabase .from ("profiles") .select ("id, display name, avatar url, user type") .eq ("id", emailData.user id) .single ();
}//Generate email content based on email type const {
  subject, html 
}= await generateEmail (emailData, userData);
//Send email via Resend const emailResponse = await resend.emails.send ({
  from: "Zion AI Marketplace <notifications@zion.ai>";
to: userEmail;
subject: subject;
html: html 
});
if (emailResponse.error) {
  throw new Error (`Failed to send email: $ {
  emailResponse.error.message 
}`) 
}//Update job status await supabase //Update email campaign record await supabase .from ("email campaigns") .update ({
  status: "sent";
sent at: new Date () .toISOString () 
}) .eq ("user id", emailData.user id) .eq ("campaign type", emailData.email type);
success: false;
error: error.message 
});
{
  headers: {
  ...corsHeaders;
"Content-Type" : "application/json" 
};
}) 
}
});
if (email type === "welcome series") {
  //Customize based on user type if (user type === "jobSeeker" || user type === "creator") {
  subject: `Welcome to Zion AI Marketplace, $ {
  firstName 
}!`;
html: `<h2>Welcome to Zion AI Marketplace!</h2> <p>Hi $ {
  firstName 
}, </p> <p>We're excited to have you join our community of talented AI professionals.</p> <p>Here's what to do next to get started: </p> <ol> <li>Complete your profile to help clients find you</li> <li>Add your skills and expertise</li> <li>Set your availability preferences</li> <li>Browse available jobs and start applying</li> </ol> subject: `Welcome to Zion AI Marketplace, $ {
  firstName 
}!`;
html: ` <h2>Welcome to Zion AI Marketplace!</h2> <p>Hi $ {
  firstName 
}, </p> <p>We're excited to have you join our community of innovative businesses and entrepreneurs.</p> <p>Here's what to do next to get started: </p> <ol> <li>Complete your company profile</li> <li>Post your first job or project</li> <li>Browse talent profiles in our directory</li> <li>Connect with AI professionals that match your needs</li> </ol> 
}
}if (user type === "jobSeeker" || user type === "creator") {
  if (!onboarding.profile completed) {
  
}
}else {
  //For clients if (!onboarding.job posted) {
  
}
}
}return {
  subject: `$ {
  firstName 
}, one quick step to unlock more opportunities`;
html: `jobSeeker"|| user type === " creator") {
  subject: `New projects waiting for your expertise, $ {
  firstName 
}`;
html: ` <h2>New opportunities waiting for you!</h2> <p>Hi $ {
  firstName 
}, </p> <p>We've seen new AI projects posted in your area of expertise this week.</p> <p>Complete your profile this week and unlock premium visibility to stand out to clients looking for talent like you.</p> </div> <p>The Zion AI Marketplace Team</p> </div> ` 
}
}else {
  //For clients subject: `Zion's top AI talent this week — don't miss out, $ {
  firstName 
}`;
html: ` <h2>This week's top AI talent</h2> <p>Hi $ {
  firstName 
}, </p> <p>We've added new exceptional AI professionals to our talent pool this week who might be perfect for your projects.</p> <p>Post a job this week and get featured in our newsletter sent to all our talent.</p> 
}
}return {
  subject: `$ {
  firstName 
}, we miss you! Special offer inside`;
html: `</div> <p>The Zion AI Marketplace Team</p> </div> ` 
}
}else {
  //For clients subject: `$ {
  firstName 
}, exclusive hiring discount inside`;
html: ` 
}
}return {
  subject: `Boost your profile visibility, $ {
  firstName 
}`;
html: ` <h2>Boost your profile visibility</h2> <ul> <li>Add more details to your skills and experience</li> <li>Upload samples of your work to your portfolio</li> <li>Make sure your availability is up to date</li> <li>Adjust your rate if needed to be more competitive</li> </ul> </div> <p>The Zion AI Marketplace Team</p> </div> ` 
};
return {
  subject: `Tips to find the perfect talent for " $ {
  emailData.job title 
}"`;
html: ` "> <a href="$ {
  supabaseUrl 
}/dashboard/jobs/$ {
  emailData.job id 
}" style="background-color: #9b87f5;
color: white;
padding: 12px 20px;
text-decoration: none;
border-radius: 4px;
">Update Job Post</a> >>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13 </div> <p>The Zion AI Marketplace Team</p> </div> ` 
}
}//Default generic email return {
  subject: `$ {
  firstName 
}, we miss you at Zion AI Marketplace`;
html: ` <h2>We've missed you!</h2> <p>Hi $ {
  firstName 
}, </p> <p>We noticed you haven't been active on Zion AI Marketplace recently.</p> 
}
}