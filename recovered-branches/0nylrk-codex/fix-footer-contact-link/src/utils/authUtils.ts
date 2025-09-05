
<<<<<<< HEAD
<<<<<<< HEAD
import { supabase } from "@/integrations/supabase/client",
import type { UserDetails } from "@/types/auth",
=======
import { supabase } from &quot;@/integrations/supabase/client&quot;;
import type { UserDetails } from &quot;@/types/auth&quot;;
=======
import type {_UserDetails} from "@/types/auth";
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
/**
 * Utility function to clean up authentication state
 * This helps prevent auth state inconsistencies and &quot;limbo&quot; states
 */
<<<<<<< HEAD
export const cleanupAuthState = () => {
  // Remove standard auth tokens
  localStorage.removeItem('supabase.auth.token'),
=======
export const _cleanupAuthState = () => {_// Remove standard auth tokens
  localStorage.removeItem('supabase.auth.token');
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  // Remove all Supabase auth keys from localStorage
  Object.keys(localStorage).forEach(_(key) => {
    if (key.startsWith('supabase.auth.') || key.includes('sb-')) {
<<<<<<< HEAD
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
=======
      localStorage.removeItem(key);}
  });
  
  // Remove from sessionStorage if in use
  Object.keys(sessionStorage || {}).forEach(_(key) => {_if (key.startsWith('supabase.auth.') || key.includes('sb-')) {
      sessionStorage.removeItem(key);}
  });
};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

/**
 * Utility function to check new user registration and schedule welcome emails
 */
export const _checkNewRegistration = async (_user: UserDetails) => {_try {
    // Check if user has received welcome email already
<<<<<<< HEAD
    const { data: existingCampaign } = await supabase
<<<<<<< HEAD
=======
    const { data: existingCampaign} = await supabase
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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
    if (!existingCampaign) {_// Create a scheduled job for the welcome email
      await supabase
        .from(&quot;scheduled_jobs&quot;)
        .insert({
<<<<<<< HEAD
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
=======
          job_type: "send_retention_email", _scheduled_for: new Date().toISOString(), _status: "pending", _payload: {
            user_id: user.id, _email_type: "welcome_series", _user_type: user.userType || "unknown", _display_name: user.displayName || user.email?.split("@")[0] || "User"}
        });
        
      // Create entry in email_campaigns table
      await supabase
        .from("email_campaigns")
        .insert({_user_id: user.id, _campaign_type: "welcome_series", _template_name: "welcome_email", _template_data: {
            user_id: user.id, _email_type: "welcome_series", _user_type: user.userType || "unknown", _display_name: user.displayName || user.email?.split("@")[0] || "User"}
        });
    }
  } catch (error) {}
};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
