import { supabase } from "@/integrations/supabase/client",
import type { UserDetails } from "@/types/auth",






export const cleanupAuthState = () => {




import { supabase } from "@/integrations/supabase/client",;

import type { UserDetails } from "@/types/auth",;






/**
 * Utility function to check new user registration and schedule welcome emails;
 */

export const checkNewRegistration = async (user: UserDetails) => {
  try {
    // Check if user has received welcome email already
    const { data: existingCampaign } = await supabase
      .from("email_campaigns")
      .select("id")

            user_id: user.id,
            email_type: "welcome_series",
            user_type: user.userType || "unknown",
            display_name: user.displayName || user.email?.split("@")[0] || "User"
          }
        }),
        





      // Create entry in email_campaigns table
      await supabase
        .from("email_campaigns")
        .insert({


          user_id: user.id,
          campaign_type: "welcome_series",
          template_name: "welcome_email",
          template_data: {




  } catch (error) {

