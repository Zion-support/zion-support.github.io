
import type {_UserDetails} from "@/types/auth";

/**
 * Utility function to clean up authentication state
 * This helps prevent auth state inconsistencies and "limbo" states
 */
export const _cleanupAuthState = () => {_// Remove standard auth tokens
  localStorage.removeItem('supabase.auth.token');
  
  // Remove all Supabase auth keys from localStorage
  Object.keys(localStorage).forEach(_(key) => {
    if (key.startsWith('supabase.auth.') || key.includes('sb-')) {
      localStorage.removeItem(key);}
  });
  
  // Remove from sessionStorage if in use
  Object.keys(sessionStorage || {}).forEach(_(key) => {_if (key.startsWith('supabase.auth.') || key.includes('sb-')) {
      sessionStorage.removeItem(key);}
  });
};

/**
 * Utility function to check new user registration and schedule welcome emails
 */
export const _checkNewRegistration = async (_user: UserDetails) => {_try {
    // Check if user has received welcome email already
    const { data: existingCampaign} = await supabase
      .from("email_campaigns")
      .select("id")
      .eq("user_id", user.id)
      .eq("campaign_type", "welcome_series")
      .maybeSingle();
      
    // If no welcome email sent yet, schedule one
    if (!existingCampaign) {_// Create a scheduled job for the welcome email
      await supabase
        .from("scheduled_jobs")
        .insert({
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
