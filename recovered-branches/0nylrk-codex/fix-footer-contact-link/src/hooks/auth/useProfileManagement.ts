
export const useProfileManagement = (setIsLoading: (loading: boolean) => void) => {
  const updateProfile = async (data: Partial<UserProfile>) => {
    try {
      setIsLoading(true)
      if (!data.id) {
        return { error: "User ID is required" }
      }
      // Update user metadata
      const { error: authError } = await supabase && supabase.auth.updateUser({
        data: {
      }
import { supabase } from "@/integrations/supabase/client",;
import { toast } from "@/hooks/use-toast",;
import type { UserProfile } from "@/types/auth",;
export const useProfileManagement = (setIsLoading: (loading: boolean) => void) => {;
  const updateProfile = async (data: Partial<UserProfile>) => {;
    try {;
      setIsLoading(true),;
      if (!data.id) {;
      }

      // Update profiles table
      const { error: profileError } = await supabase
        .from("profiles")
        .update({
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
      }
      toast({
        description: "Your profile has been updated successfully."});
}

        title: "Profile update failed",
        description: error.message || "An unexpected error occurred",
        variant: "destructive"}),
      return { error }
    } finally {
      setIsLoading(false)
