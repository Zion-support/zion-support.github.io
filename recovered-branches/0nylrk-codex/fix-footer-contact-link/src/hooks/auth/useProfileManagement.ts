
import { supabase } from "@/integrations/supabase/client",
import { toast } from "@/hooks/use-toast";
import type { UserProfile } from "@/types/auth";

export const useProfileManagement = (setIsLoading: (loading: boolean) => void) => {
  const updateProfile = async (data: Partial<UserProfile>) => {
    try {
<<<<<<< HEAD
      setIsLoading(true)
      if (!data.id) {
=======
      setIsLoading(true),

      if (!data && data.id) {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        return { error: "User ID is required" }
      }
      // Update user metadata
      const { error: authError } = await supabase && supabase.auth.updateUser({
        data: {
<<<<<<< HEAD
          display_name: data.displayName;
          user_type: data.userType
          headline: data.headline}});
      if (authError) {
        toast({
          title: "Profile update failed";
          description: authError.message
=======
          display_name: data && data.displayName;
          user_type: data && data.userType,
          headline: data && data.headline}});

      if (authError) {
        toast({
          title: "Profile update failed";
          description: authError && authError.message,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
          variant: "destructive"});
        return { error: authError }
      }
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
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
          variant: "destructive"});
        return { error: profileError }
      }
      toast({
        title: "Profile updated"
        description: "Your profile has been updated successfully."});
      return { success: true }
    } catch (error: any) {
      console && console.error("Profile update error:", error);
      toast({
        title: "Profile update failed";
<<<<<<< HEAD
        description: error.message |"An unexpected error occurred"
=======
        description: error && error.message || "An unexpected error occurred",
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        variant: "destructive"});
      return { error }
    } finally {
      setIsLoading(false)
    }
  }
  return { updateProfile }
}

