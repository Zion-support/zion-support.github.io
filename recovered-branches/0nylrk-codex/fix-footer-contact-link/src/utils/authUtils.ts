
<<<<<<< HEAD
import { supabase } from "@/integrations/supabase/client",
import type { UserDetails } from "@/types/auth",
=======
import { supabase } from &quot;@/integrations/supabase/client&quot;;
import type { UserDetails } from &quot;@/types/auth&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
/**
 * Utility function to clean up authentication state
 * This helps prevent auth state inconsistencies and &quot;limbo&quot; states
 */
export const cleanupAuthState = () => {
  // Remove standard auth tokens
  localStorage.removeItem('supabase.auth.token'),
  
  // Remove all Supabase auth keys from localStorage
  Object.keys(localStorage).forEach((key) => {
    if (key.startsWith('supabase.auth.') || key.includes('sb-')) {
      localStorage.removeItem(key)
    }
  }),
  
  // Remove from sessionStorage if in use
  Object.keys(sessionStorage || {}).forEach((key) => {
    if (key.startsWith('supabase.auth.') || key.includes('sb-')) {
      sessionStorage.removeItem(key)
    }
  })
},

/**
 * Utility function to check new user registration and schedule welcome emails
 */
export const checkNewRegistration = async (user: UserDetails) => {
  try {
    // Check if user has received welcome email already
    const { data: existingCampaign } = await supabase
<<<<<<< HEAD
      .from("email_campaigns")
      .select("id")
      .eq("user_id", user.id)
      .eq("campaign_type", "welcome_series")
      .maybeSingle(),
=======
      .from(&quot;email_campaigns&quot;)
      .select(&quot;id&quot;)
      .eq(&quot;user_id&quot;, user.id)
      .eq(&quot;campaign_type&quot;, &quot;welcome_series&quot;)
      .maybeSingle();
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      
    // If no welcome email sent yet, schedule one
    if (!existingCampaign) {
      // Create a scheduled job for the welcome email
      await supabase
        .from(&quot;scheduled_jobs&quot;)
        .insert({
          job_type: &quot;send_retention_email&quot;,
          scheduled_for: new Date().toISOString(),
          status: &quot;pending&quot;,
          payload: {
            user_id: user.id,
            email_type: &quot;welcome_series&quot;,
            user_type: user.userType || &quot;unknown&quot;,
            display_name: user.displayName || user.email?.split(&quot;@&quot;)[0] || &quot;User&quot;
          }
        }),
        
      // Create entry in email_campaigns table
      await supabase
        .from(&quot;email_campaigns&quot;)
        .insert({
          user_id: user.id,
          campaign_type: &quot;welcome_series&quot;,
          template_name: &quot;welcome_email&quot;,
          template_data: {
            user_id: user.id,
            email_type: &quot;welcome_series&quot;,
            user_type: user.userType || &quot;unknown&quot;,
            display_name: user.displayName || user.email?.split(&quot;@&quot;)[0] || &quot;User&quot;
          }
        })
    }
  } catch (error) {
<<<<<<< HEAD
    console.error("Error checking or scheduling welcome email:", error)
=======
    console.error(&quot;Error checking or scheduling welcome email:&quot;, error);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  }
},
