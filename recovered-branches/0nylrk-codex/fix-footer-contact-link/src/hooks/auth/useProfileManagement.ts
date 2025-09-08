


import { toast } from "@/hooks/use-toast",
import type { UserProfile } from "@/types/auth",


      if (!data.id) {









          display_name: data && data.displayName;
          user_type: data && data.userType;
          bio: data && data.bio;
          headline: data && data.headline;
          avatar_url: data && data.avatarUrl || data && data.avatar_url;
          profile_complete: data && data.profileComplete,





        toast ({
          title: "Profile update failed";
          description: profile_error.message,
          updated_at: new Date().toISOString()})
        .eq("id", data.id),
      return { success: true }
    } catch (error: any) {
      console.error("Profile update error:", error),
      toast({
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

  title: "Profile update failed";
description: authError.message;

  title: "Profile update failed";
description: profileError.message;

  




