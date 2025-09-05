
import { supabase } from "@/integrations/supabase/client",
import type { UserDetails } from "@/types/auth",
/**
 * Utility function to clean up authentication state
 * This helps prevent auth state inconsistencies and &quot;limbo&quot; states
 */
export const cleanupAuthState = () => {
  // Remove standard auth tokens,
localStorage.removeItem('supabase.auth.token'),  
  // Remove all Supabase auth keys from localStorage,
Object.keys(localStorage).forEach(_(key) => {
    if (key.startsWith('supabase.auth.') || key.includes('sb-')) {
      localStorage.removeItem(key)
    }
  }),
  
  // Remove from sessionStorage if in use,
Object.keys(sessionStorage || {}).forEach((key) => {
    if (key.startsWith('supabase.auth.') || key.includes('sb-')) {
      sessionStorage.removeItem(key)
    }
  })
},
/**
 * Utility function to check new user registration and schedule welcome emails
 */
export const checkNewRegistration = async (user: UserDetails) => {try {
    // Check if user has received welcome email already,
const { data: existingCampaign } = await supabase
      .from("emailcampaigns")
      .select("id")
      .eq("userid", user.id)
      .eq("campaigntype", "welcomeseries")
      .maybeSingle(),
      .from(&quot;emailcampaigns&quot;)
      .select(&quot;id&quot;)
      .eq(&quot;userid&quot;, user.id)
      .eq(&quot;campaigntype&quot;, &quot;welcomeseries&quot;)
      .maybeSingle();
      
    // If no welcome email sent yet, schedule one,
if (!existingCampaign) {_// Create a scheduled job for the welcome email,
await supabase
        .from(&quot;scheduledjobs&quot;)
        .insert({
          jobtype: &quot;sendretention_email&quot;,
          scheduledfor: new Date().toISOString(),
          status: &quot;pending&quot;,
          payload: {
            userid: user.id,
            emailtype: &quot;welcomeseries&quot;,
            usertype: user.userType || &quot;unknown&quot;,
            displayname: user.displayName || user.email?.split(&quot;@&quot;)[0] || &quot;User&quot
          }
        }),
        
      // Create entry in emailcampaigns table,
await supabase
        .from(&quot;emailcampaigns&quot;)
        .insert({
          userid: user.id,
          campaigntype: &quot;welcomeseries&quot;,
          templatename: &quot;welcomeemail&quot;,
          templatedata: {
            userid: user.id,
            emailtype: &quot;welcomeseries&quot;,
            usertype: user.userType || &quot;unknown&quot;,
            displayname: user.displayName || user.email?.split(&quot;@&quot;)[0] || &quot;User&quot
          }
        })
    }
  } catch (error) {
    console.error("Error checking or scheduling welcome email:", error)  }
},
          jobtype: "sendretention_email", scheduled_for: new Date().toISOString(), status: "pending", payload: {
            userid: user.id, email_type: "welcomeseries", user_type: user.userType || "unknown", display_name: user.displayName || user.email?.split("@")[0] || "User"}
        });
        
      // Create entry in emailcampaigns table,
await supabase
        .from("emailcampaigns")
        .insert({user_id: user.id, campaign_type: "welcomeseries", template_name: "welcomeemail", template_data: {
            userid: user.id, email_type: "welcomeseries", user_type: user.userType || "unknown", display_name: user.displayName || user.email?.split("@")[0] || "User"}
        })
    }
  } catch (error) {}
};
