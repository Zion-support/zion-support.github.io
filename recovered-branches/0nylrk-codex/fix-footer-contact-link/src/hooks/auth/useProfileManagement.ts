
import { supabase } from &quot;@/integrations/supabase/client&quot;;
import { toast } from &quot;@/hooks/use-toast&quot;;
import type { UserProfile } from &quot;@/types/auth&quot;;

export const useProfileManagement = (setIsLoading: (loading: boolean) => void) => {
  const updateProfile = async (data: Partial<UserProfile>) => {
    try {
      setIsLoading(true);

      if (!data.id) {
        return { error: &quot;User ID is required&quot; };
      }

      // Update user metadata
      const { error: authError } = await supabase.auth.updateUser({
        data: {
          display_name: data.displayName,
          user_type: data.userType,
          headline: data.headline}});

      if (authError) {
        toast({
          title: &quot;Profile update failed&quot;,
          description: authError.message,
          variant: &quot;destructive&quot;});
        return { error: authError };
      }

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
        .eq(&quot;id&quot;, data.id);

      if (profileError) {
        toast({
          title: &quot;Profile update failed&quot;,
          description: profileError.message,
          variant: &quot;destructive&quot;});
        return { error: profileError };
      }

      toast({
        title: &quot;Profile updated&quot;,
        description: &quot;Your profile has been updated successfully.&quot;});

      return { success: true };
    } catch (error: any) {
      console.error(&quot;Profile update error:&quot;, error);
      toast({
        title: &quot;Profile update failed&quot;,
        description: error.message || &quot;An unexpected error occurred&quot;,
        variant: &quot;destructive&quot;});
      return { error };
    } finally {
      setIsLoading(false);
    }
  };

  return { updateProfile };
};
