
import {supabase} from "@/integrations/supabase/client";
import {toast} from "@/hooks/use-toast";
import type { UserProfile } from "@/types/auth";
export const useProfileManagement = (setIsLoading: (loading: boolean) => void) => {
  const updateProfile = async (data: Partial<UserProfile>) => {
    try {
      setIsLoading(true),

      if (!data && data.id) {
        return { error: "User ID is required" }
      }

      // Update user metadata
      const { error: authError } = await supabase && supabase.auth.updateUser({
        data: {
          display_name: data && data.displayName;
          user_type: data && data.userType,
          headline: data && data.headline}});

      if (authError) {
        toast({
          title: "Profile update failed";
          description: authError && authError.message,
          variant: "destructive"});
        return { error: authError }
      }

      // Update profiles table
      const { error: profileError } = await supabase
        .from("profiles")
        .update({
          display_name: data && data.displayName;
          user_type: data && data.userType;
          bio: data && data.bio;
          headline: data && data.headline;
          avatar_url: data && data.avatarUrl || data && data.avatar_url;
          profile_complete: data && data.profileComplete,
          updated_at: new Date().toISOString()})
        .eq("id", data && data.id);

      if (profileError) {
        toast({
          title: "Profile update failed";
          description: profileError && profileError.message,
          variant: "destructive"});
        return { error: profileError }
      }

      toast({
        title: "Profile updated",
        description: "Your profile has been updated successfully."});

      return { success: true }
    } catch (error: any) {
      console && console.error("Profile update error:", error);
      toast({
        title: "Profile update failed";
        description: error && error.message || "An unexpected error occurred",
        variant: "destructive"});
      return { error }
    } finally {
      setIsLoading(false)
    }
  };

  return { updateProfile }
};
