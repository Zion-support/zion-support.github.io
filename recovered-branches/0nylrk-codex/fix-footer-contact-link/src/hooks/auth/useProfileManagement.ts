
<<<<<<< HEAD
<<<<<<< HEAD
import { supabase } from "@/integrations/supabase/client",
import { toast } from "@/hooks/use-toast",
import type { UserProfile } from "@/types/auth",
=======
import { supabase } from &quot;@/integrations/supabase/client&quot;;
import { toast } from &quot;@/hooks/use-toast&quot;;
import type { UserProfile } from &quot;@/types/auth&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export const useProfileManagement = (setIsLoading: (loading: boolean) => void) => {
  const updateProfile = async (data: Partial<UserProfile>) => {
    try {
      setIsLoading(true),

      if (!data.id) {
<<<<<<< HEAD
=======
import { supabase } from "@/integrations/supabase/client",;
import { toast } from "@/hooks/use-toast",;
import type { UserProfile } from "@/types/auth",;
export const useProfileManagement = (setIsLoading: (loading: boolean) => void) => {;
  const updateProfile = async (data: Partial<UserProfile>) => {;
    try {;
      setIsLoading(true),;
      if (!data.id) {;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
        return { error: "User ID is required" }
=======
        return { error: &quot;User ID is required&quot; };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      }
<<<<<<< HEAD

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
<<<<<<< HEAD
          variant: "destructive"}),
=======
;
      // Update user metadata;
      const { error: authError } = await supabase.auth.updateUser({;
        data: {;
          display_name: data.displayName,;
          user_type: data.userType,;
          headline: data.headline}}),;
      if (authError) {;
        toast({;
          title: "Profile update failed",;
          description: authError.message,;
          variant: "destructive"}),;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
        return { error: authError }
=======
          variant: &quot;destructive&quot;});
        return { error: authError };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      }
<<<<<<< HEAD

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
<<<<<<< HEAD
        .eq("id", data.id),
=======
        .eq(&quot;id&quot;, data.id);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

      if (profileError) {
        toast({
          title: &quot;Profile update failed&quot;,
          description: profileError.message,
<<<<<<< HEAD
          variant: "destructive"}),
        return { error: profileError }
      }

      toast({
        title: "Profile updated",
        description: "Your profile has been updated successfully."}),
=======
          variant: &quot;destructive&quot;});
        return { error: profileError };
      }

      toast({
        title: &quot;Profile updated&quot;,
        description: &quot;Your profile has been updated successfully.&quot;});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

      return { success: true }
    } catch (error: any) {
<<<<<<< HEAD
      console.error("Profile update error:", error),
      toast({
        title: "Profile update failed",
        description: error.message || "An unexpected error occurred",
        variant: "destructive"}),
      return { error }
=======
      console.error(&quot;Profile update error:&quot;, error);
      toast({
        title: &quot;Profile update failed&quot;,
        description: error.message || &quot;An unexpected error occurred&quot;,
        variant: &quot;destructive&quot;});
      return { error };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    } finally {
      setIsLoading(false)
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
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
    }
  };
  return { updateProfile }
};