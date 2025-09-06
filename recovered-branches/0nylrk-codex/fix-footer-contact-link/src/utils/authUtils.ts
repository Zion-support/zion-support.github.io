<<<<<<< HEAD
<<<<<<< HEAD
import type { UserDetails } from "@/types/auth";
import { supabase } from "@/integrations/supabase/client",
import type { UserDetails } from "@/types/auth",import {supabase} from "@/integrations/supabase/client";
=======


import {supabase} from "@/integrations/supabase/client";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

=======

import {supabase} from "@/integrations/supabase/client";
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import type { UserDetails } from "@/types/auth";
"
import { supabase } from "@/integrations/supabase/client","
import type { UserDetails } from "@/types/auth",

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


<<<<<<< HEAD
<<<<<<< HEAD
import { supabase } from "@/integrations/supabase/client";
import {supabase} from "@/integrations/supabase/client";
=======
=======
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======

import { supabase } from "@/integrations/supabase/client";
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import {supabase} from "@/integrations/supabase/client";
import type { UserDetails } from "@/types/auth";
=======



import { supabase } from "@/integrations/supabase/client";
import {supabase} from "@/integrations/supabase/client";
import type { UserDetails } from "@/types/auth";
import { supabase } from "@/integrations/supabase/client",
import type { UserDetails } from "@/types/auth",
import type { UserDetails } from "@/types/auth";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { supabase } from "@/integrations/supabase/client",
import type { UserDetails } from "@/types/auth",
<<<<<<< HEAD
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
import type { UserDetails } from "@/types/auth";
import { supabase } from "@/integrations/supabase/client",
import type { UserDetails } from "@/types/auth",
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
import { supabase } from "@/integrations/supabase/client",
import type { UserDetails } from "@/types/auth",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
import { supabase } from "@/integrations/supabase/client",
import type { UserDetails } from "@/types/auth",
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

";
import type { UserDetails } from "@/types/auth";"
import { supabase } from "@/integrations/supabase/client","
import type { UserDetails } from "@/types/auth",

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
/**
 * Utility function to clean up authentication state";
 * This helps prevent auth state inconsistencies and "limbo" states;
 */

<<<<<<< HEAD
export const cleanupAuthState = () => {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD

<<<<<<< HEAD


  // Remove standard auth tokens


<<<<<<< HEAD
=======
  // Remove standard auth tokens


  // Remove standard auth tokens;
  localStorage.removeItem('supabase.auth.token');
  // Remove standard auth tokens
  localStorage.removeItem('supabase.auth.token');
  localStorage.removeItem('supabase.auth.token'),
  
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  // Remove all Supabase auth keys from localStorage
  Object.keys(localStorage).forEach((key) => {
    if (key.startsWith('supabase.auth.') |key.includes('sb-')) {
      localStorage.removeItem(key)
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
export const cleanupAuthState = () => {};
  // Remove all Supabase auth keys from localStorage;
  Object.keys(localStorage).forEach((key) => {}
    if (key.startsWith('supabase.auth.') |key.includes('sb-')) {}
      localStorage.removeItem(key)
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

    }

  Object && Object.keys(sessionStorage || {}).forEach((key) => {'
    if (key && key.startsWith('supabase && supabase.auth.') || key && key.includes('sb-')) {}
      sessionStorage && sessionStorage.removeItem(key)

    }
  })
}


<<<<<<< HEAD
=======
=======
  localStorage && localStorage.removeItem('supabase && supabase.auth.token');
  
    }
  });
  // Remove from sessionStorage if in use
  Object && Object.keys(sessionStorage || {}).forEach((key) => {
    if (key && key.startsWith('supabase && supabase.auth.') || key && key.includes('sb-')) {
      sessionStorage && sessionStorage.removeItem(key)
    }
  });
  // Remove from sessionStorage if in use
  Object.keys(sessionStorage |{}).forEach((key) => {
    if (key.startsWith('supabase.auth.') |key.includes('sb-')) {
      sessionStorage.removeItem(key)
    }
  })
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

  // Remove standard auth tokens
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

  // Remove standard auth tokens
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

  localStorage && localStorage.removeItem('supabase && supabase.auth.token');
  
  // Remove all Supabase auth keys from localStorage
  Object && Object.keys(localStorage).forEach((key) => {
    if (key && key.startsWith('supabase && supabase.auth.') || key && key.includes('sb-')) {
      localStorage && localStorage.removeItem(key)

    }

  Object && Object.keys(sessionStorage || {}).forEach((key) => {
    if (key && key.startsWith('supabase && supabase.auth.') || key && key.includes('sb-')) {
      sessionStorage && sessionStorage.removeItem(key)

    }
  })
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { supabase } from "@/integrations/supabase/client",;
=======
"
import { supabase } from "@/integrations/supabase/client",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import type { UserDetails } from "@/types/auth",;
/**;
 * Utility function to clean up authentication state;"
 * This helps prevent auth state inconsistencies and "limbo" states;
 */;
export const cleanupAuthState = () => {;
  // Remove standard auth tokens;'
  localStorage.removeItem('supabase.auth.token'),;
  // Remove all Supabase auth keys from localStorage;
  Object.keys(localStorage).forEach((key) => {;'
    if (key.startsWith('supabase.auth.') || key.includes('sb-')) {;
      localStorage.removeItem(key);
    }
  }),;
  // Remove from sessionStorage if in use;
  Object.keys(sessionStorage || {}).forEach((key) => {;'
    if (key.startsWith('supabase.auth.') || key.includes('sb-')) {;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      sessionStorage.removeItem(key);
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    }
  })
},

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
/**
 * Utility function to check new user registration and schedule welcome emails;
 */
<<<<<<< HEAD
export const checkNewRegistration = async (user: UserDetails) => {
  try {
    // Check if user has received welcome email already
    const { data: existingCampaign } = await supabase
      .from("email_campaigns")
      .select("id")
<<<<<<< HEAD
<<<<<<< HEAD

      .eq("user_id", user.id)

      .eq("campaign_type", "welcome_series")


=======
      .eq("campaign_type", "welcome_series")


      .eq("user_id", user.id)
      .eq("campaign_type", "welcome_series");
      .maybeSingle();
      .eq("campaign_type", "welcome_series")
      .maybeSingle();
      .maybeSingle(),
      
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
      sessionStorage.removeItem(key);    }
  })
},
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      sessionStorage.removeItem(key);    }
  })
},
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
      sessionStorage.removeItem(key);


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
      .from("email_campaigns")
      .select("id")

      .eq("user_id", user.id)

      .eq("campaign_type", "welcome_series")


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    // If no welcome email sent yet, schedule one
    if (!existingCampaign) {
      // Create a scheduled job for the welcome email
      await supabase
        .from("scheduled_jobs")
        .insert({
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { supabase } from '@/integrations / supabase / client';
import type { UserDetails } from "@/types / auth";
/**;
* Utility function to clean up authentication state;
* This helps prevent auth state inconsistencies and "limbo" states;
*/;
export const cleanupAuthState = () =>: any {
  // Remove standard auth tokens;
  local_storage.remove_item ('supabase.auth.token');
;
  // Remove all Supabase auth keys from local_storage;
  Object.keys (local_storage).for_each ((key) => {
    if (|| key.includes ('sb-')) {) {
  $2
}
      local_storage.remove_item (key);
    }
  });
;
  // Remove from session_storage if in use;
  Object.keys (session_storage || {}).for_each ((key) => {
    if (|| key.includes ('sb-')) {) {
  $2
}
      session_storage.remove_item (key);
    }
  });
}
;
/**;
* Utility function to check new user registration and schedule welcome emails;
*/;
export const checkNewRegistration = async (user: UserDetails) => {
  try {
=======
export const checkNewRegistration = async (user: UserDetails) => {}
  try {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    // Check if user has received welcome email already;
    const { data: existingCampaign } = await supabase"
      .from("email_campaigns")"
      .select("id")



    // If no welcome email sent yet, schedule one;
    if (!existingCampaign) {}
      // Create a scheduled job for the welcome email;
<<<<<<< HEAD
      await supabase;
        .from ("scheduled_jobs");
        .insert ({
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
      await supabase"
        .from("scheduled_jobs")
        .insert({}
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          job_type: "send_retention_email";
          scheduled_for: new Date ().toISOString ();"
          status: "pending";
<<<<<<< HEAD
          payload: {
<<<<<<< HEAD
<<<<<<< HEAD

=======
          }
<<<<<<< HEAD
        });
<<<<<<< HEAD
=======

=======
            user_type: user && user.userType || "unknown",
            display_name: user && user.displayName || user && user.email?.split("@")[0] || "User"

            user_id: user && user.id;
            email_type: "welcome_series";
            user_type: user && user.userType || "unknown",
            display_name: user && user.displayName || user && user.email?.split("@")[0] || "User"
=======
          payload: {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          }
        });



            user_id: user.id,"
            email_type: "welcome_series","
            user_type: user.userType || "unknown","
            display_name: user.displayName || user.email?.split("@")[0] || "User"
          }
        }),
        

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      // Create entry in email_campaigns table
=======
        });      // Create entry in email_campaigns table
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
          }
<<<<<<< HEAD
        });      // Create entry in email_campaigns table
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
        });
            user_id: user.id,
            email_type: "welcome_series",
            user_type: user.userType || "unknown",
            display_name: user.displayName || user.email?.split("@")[0] || "User"
          }
        }),
        

      // Create entry in email_campaigns table
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      await supabase
        .from("email_campaigns")
        .insert({

            user_type: user.user_type || "unknown",
            display_name: user.display_name || user.email?.split ("@")[0] || "User";
          user_id: user.id,
          campaign_type: "welcome_series",
          template_name: "welcome_email",
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          template_data: {
<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            user_id: user.id;
            email_type: "welcome_series";
            user_type: user.userType |"unknown"
            display_name: user.displayName |user.email?.split("@")[0] |"User"
          }
        })
    }
  } catch (error) {
    console.error("Error checking or scheduling welcome email:", error)
  }
}

<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            user_id: user.id,
=======
          template_data: {            user_id: user.id,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
          template_data: {            user_id: user.id,
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
          template_data: {


            user_id: user.id,
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            email_type: "welcome_series",
            user_type: user.userType || "unknown",
=======


      // Create entry in email_campaigns table;
      await supabase"
        .from("email_campaigns")
        .insert({}
          user_id: user.id,"
          campaign_type: "welcome_series","
          template_name: "welcome_email",
          template_data: {}
            user_id: user.id,"
            email_type: "welcome_series","
            user_type: user.userType || "unknown","
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
            user_id: user.id,;
            email_type: "welcome_series",;
            user_type: user.userType || "unknown",;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
            user_id: user.id,;"
            email_type: "welcome_series",;"
            user_type: user.userType || "unknown",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            display_name: user.displayName || user.email?.split("@")[0] || "User";

          }
        });
;
      // Create entry in email_campaigns table;
<<<<<<< HEAD
      await supabase;"
        .from ("email_campaigns");
<<<<<<< HEAD
        .insert ({
          user_id: user.id;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          campaign_type: "welcome_series";
=======
        .insert ({}
          user_id: user.id;"
          campaign_type: "welcome_series";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          template_name: "welcome_email";
          template_data: {}
            user_id: user && user.id;"
            email_type: "welcome_series";"
            user_type: user.user_type || "unknown","
            display_name: user.display_name || user.email?.split ("@")[0] || "User";



          }
        });
    }
<<<<<<< HEAD
  } catch (error) {
<<<<<<< HEAD
<<<<<<< HEAD
=======
      await supabase;
        .from ("email_campaigns");
        .insert ({
          user_id: user.id;
          campaign_type: "welcome_series";
          template_name: "welcome_email";
          template_data: {
            user_id: user && user.id;
            email_type: "welcome_series";
            user_type: user.user_type || "unknown",
            display_name: user.display_name || user.email?.split ("@")[0] || "User";
            user_type: user && user.userType || "unknown",
            display_name: user && user.displayName || user && user.email?.split("@")[0] || "User"
            user_type: user.user_type || "unknown",
            display_name: user.display_name || user.email?.split ("@")[0] || "User";
          }
        });
    }
  } catch (error) {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

    console.error("Error checking or scheduling welcome email:", error)
  } catch (error) {;
    console.error("Error checking or scheduling welcome email:", error);
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31


  }
}

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
    console.error ("Error checking or scheduling welcome email:", error);
  }
}
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
    console.error ("Error checking or scheduling welcome email:", error);
=======
  } catch (error) {}
  }
}

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

"
    console.error ("Error checking or scheduling welcome email:", error);
"
import { supabase } from "@/integrations/supabase/client",;"
import type { UserDetails } from "@/types/auth",;
;
/**;
 * Utility function to clean up authentication state;"
 * This helps prevent auth state inconsistencies and "limbo" states;
 */;
export const cleanupAuthState = () => {;
  // Remove standard auth tokens;'
  localStorage.removeItem('supabase.auth.token'),;
  ;
  // Remove all Supabase auth keys from localStorage;
  Object.keys(localStorage).forEach((key) => {;'
=======
    console.error ("Error checking or scheduling welcome email:", error);

import { supabase } from "@/integrations/supabase/client",;
import type { UserDetails } from "@/types/auth",;
;
/**;
 * Utility function to clean up authentication state;
 * This helps prevent auth state inconsistencies and "limbo" states;
 */;
export const cleanupAuthState = () => {;
  // Remove standard auth tokens;
  localStorage.removeItem('supabase.auth.token'),;
  ;
  // Remove all Supabase auth keys from localStorage;
  Object.keys(localStorage).forEach((key) => {;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    if (key.startsWith('supabase.auth.') || key.includes('sb-')) {;
      localStorage.removeItem(key),;
    }
  }),;
  ;
  // Remove from sessionStorage if in use;
<<<<<<< HEAD
  Object.keys(sessionStorage || {}).forEach((key) => {;'
=======
  Object.keys(sessionStorage || {}).forEach((key) => {;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    if (key.startsWith('supabase.auth.') || key.includes('sb-')) {;
      sessionStorage.removeItem(key),;
    }
  }),;
},;
;
/**;
 * Utility function to check new user registration and schedule welcome emails;
 */;
export const checkNewRegistration = async (user:UserDetails) => {;
  try {;
    // Check if user has received welcome email already;
<<<<<<< HEAD
    const { data:existingCampaign } = await supabase;"
      .from("email_campaigns");"
      .select("id");"
      .eq("user_id", user.id);"
=======
    const { data:existingCampaign } = await supabase;
      .from("email_campaigns");
      .select("id");
      .eq("user_id", user.id);
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      .eq("campaign_type", "welcome_series");
      .maybeSingle(),;
      ;
    // If no welcome email sent yet, schedule one;
    if (!existingCampaign) {;
      // Create a scheduled job for the welcome email;
<<<<<<< HEAD
      await supabase;"
        .from("scheduled_jobs");
        .insert({;"
          job_type:"send_retention_email",;
          scheduled_for:new Date().toISOString(),;"
          status:"pending",;
          payload:{;
            user_id:user.id,;"
            email_type:"welcome_series",;"
            user_type:user.userType || "unknown",;"
=======
      await supabase;
        .from("scheduled_jobs");
        .insert({;
          job_type:"send_retention_email",;
          scheduled_for:new Date().toISOString(),;
          status:"pending",;
          payload:{;
            user_id:user.id,;
            email_type:"welcome_series",;
            user_type:user.userType || "unknown",;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            display_name:user.displayName || user.email?.split("@")[0] || "User";
          }
        }),;
        ;
          }
        }),;
      // Create entry in email_campaigns table;
<<<<<<< HEAD
      await supabase;"
        .from("email_campaigns");
        .insert({;
};
          user_id: user.id,;"
          campaign_type: "welcome_series",;"
          template_name: "welcome_email",;
          template_data: {;
            user_id: user.id,;"
            email_type: "welcome_series",;"
            user_type: user.userType || "unknown";"
=======
      await supabase;
        .from("email_campaigns");
        .insert({;
};
          user_id: user.id,;
          campaign_type: "welcome_series",;
          template_name: "welcome_email",;
          template_data: {;
            user_id: user.id,;
            email_type: "welcome_series",;
            user_type: user.userType || "unknown";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            display_name: user.displayName || user.email?.split("@")[0] || "User";
          }
        });
    }
<<<<<<< HEAD
  } catch (error) {"
    console.error("Error checking or scheduling welcome email:", error)
  } catch (error) {;"
    console.error("Error checking or scheduling welcome email:", error);
  }
<<<<<<< HEAD
}

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
};


  }
};
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
            display_name: user.displayName || user.email?.split("@")[0] || "User";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
            display_name: user.displayName || user.email?.split("@")[0] || "User";
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
  } catch (error) {
    console.error("Error checking or scheduling welcome email:", error)
  } catch (error) {;
    console.error("Error checking or scheduling welcome email:", error);
  }
};
  }
};
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
