
<<<<<<< HEAD
import {supabase} from "@/integrations/supabase/client";
import {toast} from "@/hooks/use-toast";
import type { UserProfile } from "@/types/auth";
=======
import { supabase } from "@/integrations/supabase/client",
<<<<<<< HEAD
import { toast } from "@/hooks/use-toast";
import type { UserProfile } from "@/types/auth";

=======
import { toast } from "@/hooks/use-toast",
import type { UserProfile } from "@/types/auth",
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
export const useProfileManagement = (setIsLoading: (loading: boolean) => void) => {
  const updateProfile = async (data: Partial<UserProfile>) => {
    try {
      setIsLoading(true)
      if (!data.id) {
<<<<<<< HEAD
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
=======
import { supabase } from "@/integrations/supabase/client",;
import { toast } from "@/hooks/use-toast",;
import type { UserProfile } from "@/types/auth",;
export const useProfileManagement = (setIsLoading: (loading: boolean) => void) => {;
  const updateProfile = async (data: Partial<UserProfile>) => {;
    try {;
      setIsLoading(true),;
      if (!data.id) {;
      }
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      // Update profiles table
      const { error: profileError } = await supabase
        .from("profiles")
        .update({
<<<<<<< HEAD
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
=======
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
          title: "Profile update failed",
          description: profileError.message,
          variant: "destructive"}),
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
        return { error: profileError }
      }
      toast({
<<<<<<< HEAD
        title: "Profile updated"
        description: "Your profile has been updated successfully."});
=======
        title: "Profile updated",
        description: "Your profile has been updated successfully."}),

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      return { success: true }
    } catch (error: any) {
      console.error("Profile update error:", error),
      toast({
<<<<<<< HEAD
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

=======
        title: "Profile update failed",
        description: error.message || "An unexpected error occurred",
        variant: "destructive"}),
      return { error }
    } finally {
      setIsLoading(false)
<<<<<<< HEAD
    }
  };

=======
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
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  return { updateProfile }
};
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
