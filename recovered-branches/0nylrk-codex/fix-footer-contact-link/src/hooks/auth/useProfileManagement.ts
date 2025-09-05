
import type {_UserProfile} from "@/types/auth";

export const _useProfileManagement = (_setIsLoading: (loading: boolean) => void) => {_const _updateProfile = async (_data: Partial<UserProfile>) => {
    try {
      setIsLoading(true);

      if (!data.id) {
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
