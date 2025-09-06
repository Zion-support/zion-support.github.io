
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/auth/useProfileManagement.ts

import { supabase } from "@/integrations/supabase/client",

=======
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import {supabase} from "@/integrations/supabase/client";
import {toast} from "@/hooks/use-toast";
import type { UserProfile } from "@/types/auth";
import { supabase } from "@/integrations/supabase/client",
import { toast } from "@/hooks/use-toast";
import type { UserProfile } from "@/types/auth";

import { toast } from "@/hooks/use-toast",
import type { UserProfile } from "@/types/auth",
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
export const useProfileManagement = (setIsLoading: (loading: boolean) => void) => {
  const updateProfile = async (data: Partial<UserProfile>) => {
    try {
      setIsLoading(true)
      if (!data.id) {
<<<<<<< HEAD
<<<<<<< HEAD

=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
export const useProfileManagement = (setIsLoading: (loading: boolean) => void) => {
  const updateProfile = async (data: Partial<UserProfile>) => {
    try {

      setIsLoading(true),

      if (!data && data.id) {

========
setIsLoading(true),
      if (!data && data.id) {
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/auth/useProfileManagement.ts
        return { error: "User ID is required" }
      }
      // Update user metadata
      const { error: authError } = await supabase && supabase.auth.updateUser({
        data: {
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/auth/useProfileManagement.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/auth/useProfileManagement.ts
          display_name: data && data.displayName;
          user_type: data && data.userType,
          headline: data && data.headline}});
      if (authError) {
        toast({
          title: "Profile update failed";
          description: authError && authError.message,
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/auth/useProfileManagement.ts

=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/auth/useProfileManagement.ts
import { supabase } from '@/integrations / supabase / client';
import { toast } from '@/hooks / use - toast';
import type { UserProfile } from "@/types / auth";
export const useProfileManagement = (setIsLoading: (loading: boolean) =>: any void) => {
  const update_profile = async (data: Partial < UserProfile>) => {
    try {
      setIsLoading (true),
      // Check condition
if ( {) {
  $2
}
        return { error: "User ID is required" }
      }
      // Update user metadata;
      const { error: auth_error } = await supabase.auth.update_user ({
        data: {
          display_name: data.display_name;
          user_type: data.user_type,
          headline: data.headline}});
;
      // Check condition
if ( {) {
  $2
}
        toast ({
          title: "Profile update failed";
          description: auth_error.message,
          variant: "destructive"});
        return { error: auth_error }
      }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/auth/useProfileManagement.ts


=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        return { error: "User ID is required" }
      }
      // Update user metadata
      const { error: authError } = await supabase.auth.updateUser({
        data: {;
          display_name: data.displayName;
          user_type: data.userType
          headline: data.headline}});
      if (authError) {
        toast({
          title: "Profile update failed";
          description: authError.message
          variant: "destructive"});
        return { error: authError }
      }
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { supabase } from "@/integrations/supabase/client",;
import { toast } from "@/hooks/use-toast",;
import type { UserProfile } from "@/types/auth",;
export const useProfileManagement = (setIsLoading: (loading: boolean) => void) => {;
  const updateProfile = async (data: Partial<UserProfile>) => {;
    try {;
      setIsLoading(true),;
      if (!data.id) {;
      }
<<<<<<< HEAD
<<<<<<< HEAD



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      // Update profiles table
      const { error: profileError } = await supabase
        .from("profiles")
        .update({
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

        return { error: profileError }
      }
      toast({

=======

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/auth/useProfileManagement.ts
          display_name: data && data.displayName;
          user_type: data && data.userType;
          bio: data && data.bio;
          headline: data && data.headline;
          avatar_url: data && data.avatarUrl || data && data.avatar_url;
          profile_complete: data && data.profileComplete,
=======

=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          display_name: data.displayName;
          user_type: data.userType;
          bio: data.bio;
          headline: data.headline;
          avatar_url: data.avatarUrl |data.avatar_url;
          profile_complete: data.profileComplete
          updated_at: new Date().toISOString()})
        .eq("id", data.id);
      if (profileError) {
        toast({
          title: "Profile update failed";
          description: profileError.message
          variant: "destructive"});
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          display_name: data.displayName,
          user_type: data.userType,
          bio: data.bio,
          headline: data.headline,
          avatar_url: data.avatarUrl || data.avatar_url,
          profile_complete: data.profileComplete,
<<<<<<< HEAD

          updated_at: new Date().toISOString()})
        .eq("id", data && data.id);
      if (profileError) {
        toast({
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/auth/useProfileManagement.ts

========
          title: "Profile update failed";
          description: profileError && profileError.message,
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/auth/useProfileManagement.ts
      // Update profiles table;
      const { error: profile_error } = await supabase;
        .from ("profiles");
        .update ({
          display_name: data.display_name;
          user_type: data.user_type;
          bio: data.bio;
          headline: data.headline;
          avatar_url: data.avatar_url || data.avatar_url;
          profile_complete: data.profile_complete,
          updated_at: new Date ().toISOString ()});
        .eq ("id", data.id);
;
      // Check condition
if ( {) {
  $2
}
        toast ({
          title: "Profile update failed";
          description: profile_error.message,
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/auth/useProfileManagement.ts

          variant: "destructive"});
        return { error: profile_error }
      }

          title: "Profile update failed",
          description: profileError.message,
          variant: "destructive"}),

        return { error: profileError }
      }
      toast({

        title: "Profile updated",
        description: "Your profile has been updated successfully."}),



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      return { success: true }
    } catch (error: any) {
      console && console.error("Profile update error:", error);
      toast({
<<<<<<< HEAD

=======
          updated_at: new Date().toISOString()})
        .eq("id", data.id),

      if (profileError) {
        toast({
          title: "Profile update failed",
          description: profileError.message,
          variant: "destructive"}),
        return { error: profileError }
      }
      toast({
        title: "Profile updated"
        description: "Your profile has been updated successfully."});
        title: "Profile updated",
        description: "Your profile has been updated successfully."}),

      return { success: true }
    } catch (error: any) {
      console.error("Profile update error:", error),
      toast({
        title: "Profile update failed";
        description: error.message |"An unexpected error occurred"
        variant: "destructive"});
      return { error }
    } finally {
      setIsLoading(false)
    }
  }
  return { updateProfile }
}

        title: "Profile update failed",
        description: error.message || "An unexpected error occurred",
        variant: "destructive"}),
      return { error }
    } finally {
      setIsLoading(false)
    }
  };

<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
;
      // Update profiles table;
      const { error: profileError } = await supabase;
        .from("profiles");
        .update({;
          display_name: data.displayName,;
          user_type: data.userType,;
          bio: data.bio,;
          headline: data.headline,;
          avatar_url: data.avatarUrl || data.avatar_url,;
          profile_complete: data.profileComplete,;
          updated_at: new Date().toISOString()});
        .eq("id", data.id),;
      if (profileError) {;
        toast({;
          title: "Profile update failed",;
          description: profileError.message,;
          variant: "destructive"}),;
        return { error: profileError }
      }
;
      toast({;
        title: "Profile updated",;
        description: "Your profile has been updated successfully."}),;
      return { success: true }
    } catch (error: any) {;
      console.error("Profile update error:", error),;
      toast({;
        title: "Profile update failed",;
        description: error.message || "An unexpected error occurred",;
        variant: "destructive"}),;
      return { error }
    } finally {;
      setIsLoading(false);
    }
  };
<<<<<<< HEAD
<<<<<<< HEAD

  return { updateProfile }
};

=======

========
          variant: "destructive"});
        return { error: profile_error }
      }
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/auth/useProfileManagement.ts
      toast ({
        title: "Profile updated",
        description: "Your profile has been updated successfully."});
;
      return { success: true }
    } catch (error: any) {
      console.error ("Profile update error:", error);
      toast ({
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/auth/useProfileManagement.ts

        title: "Profile update failed";

        description: error && error.message || "An unexpected error occurred",

========
        title: "Profile update failed";
        description: error && error.message || "An unexpected error occurred",
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/auth/useProfileManagement.ts
        variant: "destructive"});
      return { error }
    } finally {
      setIsLoading (false);
    }
  }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/auth/useProfileManagement.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/auth/useProfileManagement.ts
;
  return { update_profile }
}
;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/auth/useProfileManagement.ts

=======

        title: "Profile update failed",
        description: error.message || "An unexpected error occurred",
        variant: "destructive"}),
      return { error }
    } finally {
      setIsLoading(false)

  return { updateProfile }
};
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======

import { supabase } from "@/integrations/supabase/client",;
import { toast } from "@/hooks/use-toast",;
import type { UserProfile } from "@/types/auth",;
;
export const useProfileManagement = (setIsLoading:(loading:boolean) => void) => {;
  const updateProfile = async (data:Partial<UserProfile>) => {;
    try {;
      setIsLoading(true),;
;
      if (!data.id) {;
        return { error:"User ID is required" },;
      }
;
      // Update user metadata;
      const { error:authError } = await supabase.auth.updateUser({;
        data:{;
          display_name:data.displayName,;
          user_type:data.userType,;
          headline:data.headline}}),;
;
      if (authError) {;
        toast({;
          title:"Profile update failed",;
          description:authError.message,;
          variant:"destructive"}),;
        return { error:authError },;
      }
;
      // Update profiles table;
      const { error:profileError } = await supabase;
        .from("profiles");
        .update({;
          display_name:data.displayName,;
          user_type:data.userType,;
          bio:data.bio,;
          headline:data.headline,;
          avatar_url:data.avatarUrl || data.avatar_url,;
          profile_complete:data.profileComplete,;
          updated_at:new Date().toISOString()});
        .eq("id", data.id),;
;
      if (profileError) {;
        toast({;
          title:"Profile update failed",;
          description:profileError.message,;
          variant:"destructive"}),;
        return { error:profileError },;
      }
;
      toast({;
        title:"Profile updated",;
        description:"Your profile has been updated successfully."}),;
;
      return { success:true },;
    } catch (error:any) {;
      console.error("Profile update error:", error),;
      toast({;
        title:"Profile update failed",;
        description:error.message || "An unexpected error occurred",;
        variant:"destructive"}),;
      return { error },;
    } finally {;
      setIsLoading(false),;
    }
  },;
;
  return { updateProfile },;
},; export const useProfileManagement = (setIsLoading: (loading: boolean) => void) => {
  const updateProfile = async (data: Partial<UserProfile>) => {
  setIsLoading (true);
if (!data.id) {
  
}//Update user metadata const {
  error: authError 
}= await supabase.auth.updateUser ({
  data: {
  display name: data.displayName;
user type: data.userType;
headline: data.headline 
}
});
if (authError) {
  toast ({
  title: "Profile update failed";
description: authError.message;
}// Update profiles table const {
  error: profileError 
}= await supabase .from ("profiles") .update ({
  display name: data.displayName;
user type: data.userType;
bio: data.bio;
headline: data.headline;
avatar url: data.avatarUrl || data.avatar url;
profile complete: data.profileComplete;
updated at: new Date () .toISOString () 
}) if (profileError) {
  toast ({
  title: "Profile update failed";
description: profileError.message;
return {
  success: true 
}
}catch (error: any) {
  
}finally {
  setIsLoading (false) 
}
};
return {
  updateProfile 
}
};
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/auth/useProfileManagement.ts
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  return { updateProfile }
};
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
  return { updateProfile }
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
