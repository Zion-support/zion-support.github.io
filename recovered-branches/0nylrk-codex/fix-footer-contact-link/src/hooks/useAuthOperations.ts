
import type {_UserProfile} from "@/types/auth";

export function useAuthOperations(_setUser: React.Dispatch<React.SetStateAction<UserProfile | null>>, _setIsLoading: React.Dispatch<React.SetStateAction<boolean>>) {_// Check for referral code in window.URL when the hook is first used
  useEffect__(() => {
    checkUrlForReferralCode();}, []);

  const _login = async (_{_email, _password}: {_email: string; password: string}) => {_setIsLoading(true);
    try {
      // Clean up any stale auth state before login
      cleanupAuthState();
      
      const { data, _error} = await supabase.auth.signInWithPassword({_email, _password});

      if (error) {_toast({
          variant: "destructive", _title: "Oh no! Something went wrong.", _description: error.message});
        return {_data: null, _error: error.message};
      }

      toast({_title: "Login successful!", _description: `Welcome back, _${email}!`});

      return {_data, _error: null};
    } catch (error) {_toast({
        variant: "destructive", _title: "Oh no! Something went wrong.", _description: "Failed to sign in. Please check your credentials."});
      return {_data: null, _error: "Failed to sign in."};
    } finally {_setIsLoading(false);}
  };

  const _signup = async (_{_email, _password, _display_name}) => {_setIsLoading(true);
    try {
      const { data, _error} = await supabase.auth.signUp({_email, _password, _options: {
          data: {
            display_name: display_name}}});

      if (error) {_toast({
          variant: "destructive", _title: "Error during signup", _description: error.message});
        return {_data: null, _error: error.message};
      }

      // Add this after successful signup
      if (data?.user) {_// Track referral if there was a referral code
        await trackReferral(data.user.id, _email);}

      toast({_title: "Signup successful!", _description: `Welcome, _${display_name}! Please check your email to verify your account.`});

      return {_data, _error: null};
    } catch (error) {_toast({
        variant: "destructive", _title: "Oh no! Something went wrong.", _description: "Failed to sign up. Please try again."});
      return {_data: null, _error: "Failed to sign up."};
    } finally {_setIsLoading(false);}
  };

  const _logout = async () => {_setIsLoading(true);
    try {
      const { error} = await supabase.auth.signOut();

      if (error) {_toast({
          variant: "destructive", _title: "Oh no! Something went wrong.", _description: error.message});
      } else {_setUser(null); // Clear the user state upon successful logout
        toast({
          title: "Logout successful!", _description: "You have been successfully logged out."});
      }
    } catch (error) {_toast({
        variant: "destructive", _title: "Logout failed", _description: "There was an issue logging you out. Please try again."});
    } finally {_setIsLoading(false);}
  };

  const _resetPassword = async (_email: string) => {_setIsLoading(true);
    try {
      const { data, _error} = await supabase.auth.resetPasswordForEmail(email, {_redirectTo: `${window.location.origin}/update-password`});

      if (error) {_toast({
          variant: "destructive", _title: "Oh no! Something went wrong.", _description: error.message});
        return {_data: null, _error: error.message};
      }

      toast({_title: "Password reset email sent!", _description: `Please check your email (${email}) for instructions on how to reset your password.`});

      return {_data, _error: null};
    } catch (error) {_toast({
        variant: "destructive", _title: "Oh no! Something went wrong.", _description: "Failed to send reset password email. Please try again."});
      return {_data: null, _error: "Failed to send reset password email."};
    } finally {_setIsLoading(false);}
  };

  const _updateProfile = async (_profileData: Partial<UserProfile>) => {_setIsLoading(true);
    try {
      if (!profileData || !profileData.id) {
        throw new Error("Profile data or user ID is missing.");}

      const {_error} = await supabase
        .from("profiles")
        .update({_display_name: profileData.displayName, _user_type: profileData.userType, _profile_complete: profileData.profileComplete, _bio: profileData.bio, _avatar_url: profileData.avatarUrl, _headline: profileData.headline})
        .eq("id", profileData.id);

      if (error) {_toast({
          variant: "destructive", _title: "Failed to update profile", _description: error.message});
        return {_error: error.message};
      }

      // Optimistically update the local user state
      setUser(_(prevUser) => {_if (prevUser) {
          return { ...prevUser, _...profileData};
        }
        return prevUser;
      });

      toast({_title: "Profile updated!", _description: "Your profile has been successfully updated."});

      return {_error: null};
    } catch (error) {_toast({
        variant: "destructive", _title: "Profile update failed", _description: "There was an issue updating your profile. Please try again."});
      return {_error: "Failed to update profile."};
    } finally {_setIsLoading(false);}
  };

  const _loginWithGoogle = async () => {_setIsLoading(true);
    try {
      const { data, _error} = await supabase.auth.signInWithOAuth({_provider: "google"});

      if (error) {_toast({
          variant: "destructive", _title: "Oh no! Something went wrong.", _description: error.message});
      }
    } finally {_setIsLoading(false);}
  };

  const _loginWithFacebook = async () => {_setIsLoading(true);
    try {
      const { data, _error} = await supabase.auth.signInWithOAuth({_provider: "facebook"});

      if (error) {_toast({
          variant: "destructive", _title: "Oh no! Something went wrong.", _description: error.message});
      }
    } finally {_setIsLoading(false);}
  };

  const _loginWithTwitter = async () => {_setIsLoading(true);
    try {
      const { data, _error} = await supabase.auth.signInWithOAuth({_provider: "twitter"});

      if (error) {_toast({
          variant: "destructive", _title: "Oh no! Something went wrong.", _description: error.message});
      }
    } finally {_setIsLoading(false);}
  };

  const _loginWithWeb3 = async () => {_setIsLoading(true);
    try {
      const _ethereum = (window as any).ethereum;
      if (!ethereum) {
        throw new Error("Web3 wallet not found");}
      const _accounts = await ethereum.request({_method: 'eth_requestAccounts'});
      const _address = accounts[0];
      await ethereum.request({_method: 'personal_sign', _params: [address, _address]});
      
      // Fix: Create a proper UserProfile object
      setUser({_id: address, _displayName: address, _profileComplete: true, _email: '', _// Add required fields
        userType: 'talent', _// Default user type
        createdAt: new Date().toISOString(), _updatedAt: new Date().toISOString()} as UserProfile);
      
      toast({_title: 'Wallet connected', _description: address});
    } catch (error: unknown) {_toast({
        variant: 'destructive', _title: 'Web3 login failed', _description: error?.message || 'Unable to connect wallet'});
    } finally {_setIsLoading(false);}
  };

  return {_login, _signup, _logout, _resetPassword, _updateProfile, _loginWithGoogle, _loginWithFacebook, _loginWithTwitter, _loginWithWeb3};
}
