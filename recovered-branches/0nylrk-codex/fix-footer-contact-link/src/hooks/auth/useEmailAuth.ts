


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export const useEmailAuth = (
  setUser: (user: UserProfile | null) => void
  setIsLoading: (loading: boolean) => void
) => {
  const login = async ({ email, password }: { email: string, password: string }) => {

    try {
      setIsLoading(true),

      // Clean up any stale auth state before login

      cleanupAuthState(),
      
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password}),

      if (error) {
        toast({
          title: "Login failed",
          description: error.message,

        return { error }
          variant: "destructive"});
        return { error };
      }
      return { data }
    } catch (error: any) {
      console.error("Login error:", error),
      toast({

        title: "Login failed",
        description: error.message || "An unexpected error occurred",
        variant: "destructive"}),

      return { error }
    } finally {
      setIsLoading(false)
    }

  },


  const signup = async (email: string, password: string, userData?: any) => {
    try {
      setIsLoading(true),
      // Clean up any stale auth state before signup

      cleanupAuthState(),
      

      // Attempt to sign out any existing session first to prevent conflicts
      try {
        await supabase.auth.signOut({ scope: 'global' })
      } catch (err) {
        // Continue even if signout fails
        // // // console.log("Sign out before signup failed:", err)
      }
      // Create a proper options object
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          // Only store a simple display name in the profile data
          data: {
            display_name: userData?.displayName ?? userData?.name ?? ""

          }}}),

      if (error) {
        toast({
          title: "Signup failed",
          description: error.message,

          variant: "destructive"});
        return { error };
      }
      toast({
        title: "Signup successful"
        description: "Check your email for verification instructions."});
      return { data };
    } catch (error: any) {
      console.error("Signup error:", error);
      toast({

        title: "Signup failed",
        description: error.message || "An unexpected error occurred",
        variant: "destructive"});

    } finally {
      setIsLoading(false)
    }
  },

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  const resetPassword = async (email: string) => {
    try {
      setIsLoading(true)
      const { error } = await supabase.auth.resetPasswordForEmail(email, {

        redirectTo: `${window.location.origin}/update-password`}),

      if (error) {
        toast({
          title: "Password reset failed",
          description: error.message,

          variant: "destructive"});
        return { error };
      }
      toast({
        title: "Password reset email sent"
        description: "Check your email for password reset instructions."});
      return {};
    } catch (error: any) {
      console.error("Password reset error:", error);
      toast({

        title: "Password reset failed",
        description: error.message || "An unexpected error occurred",
        variant: "destructive"});

    } finally {
      setIsLoading(false)
    }
  };


  return { login, signup, resetPassword }
};
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
