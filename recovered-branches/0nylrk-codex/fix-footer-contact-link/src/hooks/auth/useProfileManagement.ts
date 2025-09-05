
<<<<<<< HEAD
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
},;
=======
import { supabase } from "@/integrations/supabase/client",
import { toast } from "@/hooks/use-toast",
import type { UserProfile } from "@/types/auth",export const useProfileManagement = (setIsLoading: (loading: boolean) => void) => {
  const updateProfile = async (data: Partial<UserProfile>) => {
import type {_UserProfile} from "@/types/auth";

export const _useProfileManagement = (_setIsLoading: (loading: boolean) => void) => {_const _updateProfile = async (_data: Partial<UserProfile>) => {
    try {
      setIsLoading(true),

      if (!data.id) {
        return { error: "User ID is required" }      }

      // Update user metadata
      const { error: authError } = await supabase.auth.updateUser({
        data: {
          display_name: data.displayName,
          user_type: data.userType,
          headline: data.headline}}),

      if (authError) {
        toast({
          title: &quot;Profile update failed&quot;,
          description: authError.message,
          variant: "destructive"}),
        return { error: authError }      }

      // Update profiles table
      const { error: profileError } = await supabase
        .from(&quot;profiles&quot;)
        .update({
          display_name: data.displayName,
          user_type: data.userType,
          bio: data.bio,
          headline: data.headline,
          avatar_url: data.avatarUrl || data.avatar_url,
          profile_complete: data.profileComplete,
          updated_at: new Date().toISOString()})
        .eq("id", data.id),
      if (profileError) {
        toast({
          title: &quot;Profile update failed&quot;,
          description: profileError.message,
          variant: "destructive"}),
        return { error: profileError }
      }

      toast({
        title: "Profile updated",
        description: "Your profile has been updated successfully."}),
      return { success: true }
    } catch (error: any) {
      console.error("Profile update error:", error),
      toast({
        title: "Profile update failed",
        description: error.message || "An unexpected error occurred",
        variant: "destructive"}),
      return { error }    } finally {
      setIsLoading(false)
    }
  },

  return { updateProfile }
},
        return { error: "User ID is required"};
      }

      // Update user metadata
      const {_error: authError} = await supabase.auth.updateUser({_data: {
          display_name: data.displayName, _user_type: data.userType, _headline: data.headline}});

      if (authError) {_toast({
          title: "Profile update failed", _description: authError.message, _variant: "destructive"});
        return {_error: authError};
      }

      // Update profiles table
      const {_error: profileError} = await supabase
        .from("profiles")
        .update({_display_name: data.displayName, _user_type: data.userType, _bio: data.bio, _headline: data.headline, _avatar_url: data.avatarUrl || data.avatar_url, _profile_complete: data.profileComplete, _updated_at: new Date().toISOString()})
        .eq("id", data.id);

      if (profileError) {_toast({
          title: "Profile update failed", _description: profileError.message, _variant: "destructive"});
        return {_error: profileError};
      }

      toast({_title: "Profile updated", _description: "Your profile has been updated successfully."});

      return {_success: true};
    } catch (error: unknown) {_toast({
        title: "Profile update failed", _description: error.message || "An unexpected error occurred", _variant: "destructive"});
      return {_error};
    } finally {_setIsLoading(false);}
  };

  return {_updateProfile};
};
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
