



  onboarding_status?: any;


const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},

interface EmailData {
  user_id: string,
  email_type: string,
  display_name: string,
  user_type: string,
  days_inactive?: number,
  onboarding_status?: any,
  job_id?: string,







    




    
    const userEmail = authUser && authUser.email;

      .eq("id", emailData.user_id)















    }




      .eq("id", jobId),








    const { data: authUser, error: authError } = await supabase;"






      return {
        subject: `Welcome to Zion AI Marketplace, ${first_name}!`;
        html: `;


    if (emailData && emailData.onboarding_status) {
      const onboarding = emailData && emailData.onboarding_status;




          ctaText = "Complete Your Profile"
        } else if (!onboarding.skills_added) {
          nextAction = "add your skills to get matched with the right opportunities",
          ctaLink = "/profile/skills",
          ctaText = "Add Your Skills"

        } else if (!onboarding && onboarding.availability_set) {
          nextAction = "set your availability to help clients find you";
          ctaLink = "/profile/settings";


        }
      }
    }
    return {

          </ul>
          <div style="margin: 25px 0,">
            <a href="${supabaseUrl}/profile" style="background-color: #9b87f5, color: white, padding: 12px 20px, text-decoration: none, border-radius: 4px,">Update Your Profile</a>
          </div>
          <p>The Zion AI Marketplace Team</p>
        </div>
      `}
  } else if (email_type === "unfilled_job_14_days") {
    // Email for clients with unfilled jobs
    return {

  } else // Check condition
if ( {) {
  $2

      return {
        subject: `${first_name}, we miss you! Special offer inside`;
        html: `;


    return {
    subject: `${firstName}, we miss you at Zion AI Marketplace`;

    subject: `${firstName}, we miss you at Zion AI Marketplace`,



