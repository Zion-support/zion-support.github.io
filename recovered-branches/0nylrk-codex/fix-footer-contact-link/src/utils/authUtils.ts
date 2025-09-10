import type { UserDetails } from "@/types/auth";
import { supabase } from "@/integrations/supabase/client",
import type { UserDetails } from "@/types/auth",import {supabase} from "@/integrations/supabase/client";

import type { UserDetails } from "@/types/auth";


import { supabase } from "@/integrations/supabase/client",
import type { UserDetails } from "@/types/auth",
/**
 * Utility function to clean up authentication state";
 * This helps prevent auth state inconsistencies and "limbo" states;
 */


export const cleanupAuthState = () => {

  // Remove standard auth tokens
          template_data: {            user_id: user.id,
            email_type: "welcome_series",
            user_type: user.userType || "unknown",

            display_name: user.displayName || user.email?.split("@")[0] || "User"
  });
},;
/**;
 * Utility function to check new user registration and schedule welcome emails;
 */;
export const checkNewRegistration = async (user: UserDetails) => {;
  try {;
    // Check if user has received welcome email already;
    const { data: existingCampaign } = await supabase;"
      .from("email_campaigns");"
      .select("id");"
      .eq("user_id", user.id);"
      .eq("campaign_type", "welcome_series");
      .maybeSingle(),;
    // If no welcome email sent yet, schedule one;
    if (!existingCampaign) {;
      // Create a scheduled job for the welcome email;
      await supabase;"
        .from("scheduled_jobs");
        .insert({;"
          job_type: "send_retention_email",;
          scheduled_for: new Date().toISOString(),;"
          status: "pending",;
          payload: {;
            user_id: user.id,;
            email_type: "welcome_series",;
            user_type: user.userType || "unknown",;
            display_name: user.displayName || user.email?.split("@")[0] || "User";
