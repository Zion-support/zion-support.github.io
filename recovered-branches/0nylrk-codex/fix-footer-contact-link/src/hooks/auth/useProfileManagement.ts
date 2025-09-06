
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import type { UserProfile } from "@/types/auth";
export const useProfileManagement = (setIsLoading: (loading: boolean) => void) => {
  const updateProfile = async (data: Partial<UserProfile>) => {
    try {
      setIsLoading($2);
      if (!data.id) {
        return { error: "User ID is required" }
      }

      // Update user metadata
      const { error: authError} = await supabase.auth.updateUser($2);
      if (authError) {
        toast($2);
        return { error: authError}
      }

      // Update profiles table
      const { error: profileError} = await supabase
        .from("profiles")
        .update({
          display_name: data.displayName,
          user_type: data.userType,
          bio: data.bio,
          headline: data.headline,
          avatar_url: data.avatarUrl || data.avatar_url,
          profile_complete: data.profileComplete,
          updated_at: new Date().toISOString()})
        .eq($2);
      if (profileError) {
        toast($2);
        return { error: profileError}
      }

      toast($2);
      return { success: true}
    } catch (error: any) {
      console.error($2);
      toast($2);
      return { error }
    } finally {
      setIsLoading(false)
    }
  },

  return { updateProfile }
},
