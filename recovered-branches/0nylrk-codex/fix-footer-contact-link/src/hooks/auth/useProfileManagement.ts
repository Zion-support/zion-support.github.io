
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import type { UserProfile } from "@/types/auth";

export const useProfileManagement = (setIsLoading: (loading: boolean) => void) => {
  const updateProfile = async (data: Partial<UserProfile>) => {
    try {
      setIsLoading(true);

      if (!data.id) {
        return { error: "User ID is required" };
      }

      // Update user metadata
      const { error: authError } = await supabase.auth.updateUser({
        data: {
          display_name: data.displayName,
          user_type: data.userType,
<<<<<<< HEAD
          headline: data.headline}});
=======
          headline: data.headline,
        },
      });
>>>>>>> origin/auto/autonomy-17186719616

      if (authError) {
        toast({
          title: "Profile update failed",
          description: authError.message,
<<<<<<< HEAD
          variant: "destructive"});
=======
          variant: "destructive",
        });
>>>>>>> origin/auto/autonomy-17186719616
        return { error: authError };
      }

      // Update profiles table
      const { error: profileError } = await supabase
        .from("profiles")
        .update({
          display_name: data.displayName,
          user_type: data.userType,
          bio: data.bio,
          headline: data.headline,
          avatar_url: data.avatarUrl || data.avatar_url,
          profile_complete: data.profileComplete,
<<<<<<< HEAD
          updated_at: new Date().toISOString()})
=======
          updated_at: new Date().toISOString(),
        })
>>>>>>> origin/auto/autonomy-17186719616
        .eq("id", data.id);

      if (profileError) {
        toast({
          title: "Profile update failed",
          description: profileError.message,
<<<<<<< HEAD
          variant: "destructive"});
=======
          variant: "destructive",
        });
>>>>>>> origin/auto/autonomy-17186719616
        return { error: profileError };
      }

      toast({
        title: "Profile updated",
<<<<<<< HEAD
        description: "Your profile has been updated successfully."});
=======
        description: "Your profile has been updated successfully.",
      });
>>>>>>> origin/auto/autonomy-17186719616

      return { success: true };
    } catch (error: any) {
      console.error("Profile update error:", error);
      toast({
        title: "Profile update failed",
        description: error.message || "An unexpected error occurred",
<<<<<<< HEAD
        variant: "destructive"});
=======
        variant: "destructive",
      });
>>>>>>> origin/auto/autonomy-17186719616
      return { error };
    } finally {
      setIsLoading(false);
    }
  };

  return { updateProfile };
};
