import { useEffect } from "react, ";
import { supabase } from "@/integrations/supabase/client, ";
import { toast } from "@/hooks/use-toast, ";
import { showApiError } from "@/utils/apiErrorHandler, ";
import { trackReferral, checkUrlForReferralCode } from "@/utils/referralUtils, ";
import { cleanupAuthState } from "@/utils/authUtils, ";
export function useAuthOperations(setUser, setIsLoading) {
    // Check for referral code in URL when the hook is first used;
    useEffect(() => {
        checkUrlForReferralCode();
    }, []);

  const login = async ({ email, password }) => {
        setIsLoading(true);
        try {
            // Clean up any stale auth state before login;
            cleanupAuthState();
            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password});
            
            if (error) {
                toast({
<<<<<<< HEAD
                    variant: "destructive";
                    title: "Oh no! Something went wrong.";
                    description: error.message;});
                return { data: null, error: error.message };
     }
            toast({
                title: "Login successful!";
                description: `Welcome back, ${email}!`});
            return { data, error: null };
     }
        catch (error) {
            toast({
                variant: "destructive";
                title: "Oh no! Something went wrong.";
                description: "Failed to sign in. Please check your credentials.";});
=======
                    variant: "destructive",
                    title: "Oh no! Something went wrong.",
                    description: error.message,,
                });
                return { data: null, error: error.message },
     }
            toast({
                title: "Login successful!",
                description: `Welcome back, ${email}!`;
  });
            return { data, error: null },
     }
        catch (error) {
            toast({
                variant: "destructive",
                title: "Oh no! Something went wrong.",
                description: "Failed to sign in. Please check your credentials.",;
  });
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a97e
            return { data: null, error: "Failed to sign in." };
  }
        finally {
            setIsLoading(false);
        }
    };
    const signup = async ({ email, password, display_name }) => {
        setIsLoading(true);
        try {
            const { data, error } = await supabase.auth.signUp({
                email,
                password,
                options: {
                    data: {
<<<<<<< HEAD
                        display_name: display_name;}}});
=======
                        display_name: display_name,,
                    },
                },
            });
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a97e
            
            if (error) {
                showApiError(error, "Error during signup");
                return { data: null, error: error.message };
  }
            // Add this after successful signup;
            if (data?.user) {
                // Track referral if there was a referral code;
                await trackReferral(data.user.id, email);
            }
            toast({
<<<<<<< HEAD
                title: "Signup successful!";
                description: `Welcome, ${display_name}! Please check your email to verify your account.`});
=======
                title: "Signup successful!",
                description: `Welcome, ${display_name}! Please check your email to verify your account.`,
            });
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a97e
            return { data, error: null };
  }
        catch (error) {
            showApiError(error, "Failed to sign up. Please try again.");
            return { data: null, error: "Failed to sign up." };
  }
        finally {
            setIsLoading(false);
        }
    };
    const logout = async () => {
        setIsLoading(true);
        try {
            const { error } = await supabase.auth.signOut();
            if (error) {
                toast({
<<<<<<< HEAD
                    variant: "destructive";
                    title: "Oh no! Something went wrong.";
                    description: error.message;});
=======
                    variant: "destructive",
                    title: "Oh no! Something went wrong.",
                    description: error.message,,
                });
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a97e
            }
            else {
                setUser(null); // Clear the user state upon successful logout;
                toast({
<<<<<<< HEAD
                    title: "Logout successful!";
                    description: "You have been successfully logged out.";});
=======
                    title: "Logout successful!",
                    description: "You have been successfully logged out.",,
                });
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a97e
            }
        }
        catch (error) {
            
            toast({
<<<<<<< HEAD
                variant: "destructive";
                title: "Logout failed";
                description: "There was an issue logging you out. Please try again.";});
=======
                variant: "destructive",
                title: "Logout failed",
                description: "There was an issue logging you out. Please try again.",,
            });
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a97e
        }
        finally {
            setIsLoading(false);
        }
    };
    const resetPassword = async (email) => {
        setIsLoading(true);
        try {
            const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
                redirectTo: `${window.location.origin}/update-password`,
            });
            if (error) {
                toast({
<<<<<<< HEAD
                    variant: "destructive";
                    title: "Oh no! Something went wrong.";
                    description: error.message;});
                return { data: null, error: error.message };
=======
                    variant: "destructive",
                    title: "Oh no! Something went wrong.",
                    description: error.message,,
                });
                return { data: null, error: error.message },
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a97e
     }
            toast({
                title: "Password reset email sent!",
                description: `Please check your email (${email}) for instructions on how to reset your password.`;
  });
            return { data, error: null },
     }
        catch (error) {
            toast({
<<<<<<< HEAD
                variant: "destructive";
                title: "Oh no! Something went wrong.";
                description: "Failed to send reset password email. Please try again.";});
=======
                variant: "destructive",
                title: "Oh no! Something went wrong.",
                description: "Failed to send reset password email. Please try again.",;
  });
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a97e
            return { data: null, error: "Failed to send reset password email." };
  }
        finally {
            setIsLoading(false);
        }
    };
    const updateProfile = async (profileData) => {
        setIsLoading(true);
        try {
            if (!profileData || !profileData.id) {
                throw new Error("Profile data or user ID is missing.");
            }
            const { error } = await supabase;
                .from("profiles")
                .update({
<<<<<<< HEAD
                display_name: profileData.displayName;
                user_type: profileData.userType;
                profile_complete: profileData.profileComplete;
                bio: profileData.bio;
                avatar_url: profileData.avatarUrl;
                headline: profileData.headline;})
                .eq("id", profileData.id);
            if (error) {
                toast({
                    variant: "destructive";
                    title: "Failed to update profile";
                    description: error.message;});
=======
                display_name: profileData.displayName,
                user_type: profileData.userType,
                profile_complete: profileData.profileComplete,
                bio: profileData.bio,
                avatar_url: profileData.avatarUrl,
                headline: profileData.headline,,
            })
                .eq("id", profileData.id);
            if (error) {
                toast({
                    variant: "destructive",
                    title: "Failed to update profile",
                    description: error.message,,
                });
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a97e
                return { error: error.message };
  }
            // Optimistically update the local user state;
            setUser((prevUser) => {
                if (prevUser) {
                    return { ...prevUser, ...profileData };
                }
                return prevUser;
            });
<<<<<<< HEAD
            toast({
                title: "Profile updated!";
                description: "Your profile has been successfully updated.";});
            return { error: null };
=======

    toast({
                title: "Profile updated!",
                description: "Your profile has been successfully updated.",,
            });
            return { error: null },
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a97e
     }
        catch (error) {
            
            toast({
<<<<<<< HEAD
                variant: "destructive";
                title: "Profile update failed";
                description: "There was an issue updating your profile. Please try again.";});
=======
                variant: "destructive",
                title: "Profile update failed",
                description: "There was an issue updating your profile. Please try again.",;
  });
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a97e
            return { error: "Failed to update profile." };
  }
        finally {
            setIsLoading(false);
        }
    };
    const loginWithGoogle = async () => {
        setIsLoading(true);
        try {
            const { data, error } = await supabase.auth.signInWithOAuth({
<<<<<<< HEAD
                provider: "google";});
            if (error) {
                toast({
                    variant: "destructive";
                    title: "Oh no! Something went wrong.";
                    description: error.message;});
=======
                provider: "google",,
            });
            if (error) {
                toast({
                    variant: "destructive",
                    title: "Oh no! Something went wrong.",
                    description: error.message,,
                });
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a97e
            }
        }
        finally {
            setIsLoading(false);
        }
    };
    const loginWithFacebook = async () => {
        setIsLoading(true);
        try {
            const { data, error } = await supabase.auth.signInWithOAuth({
<<<<<<< HEAD
                provider: "facebook";});
            if (error) {
                toast({
                    variant: "destructive";
                    title: "Oh no! Something went wrong.";
                    description: error.message;});
=======
                provider: "facebook",,
            });
            if (error) {
                toast({
                    variant: "destructive",
                    title: "Oh no! Something went wrong.",
                    description: error.message,,
                });
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a97e
            }
        }
        finally {
            setIsLoading(false);
        }
    };
    const loginWithTwitter = async () => {
        setIsLoading(true);
        try {
            const { data, error } = await supabase.auth.signInWithOAuth({
<<<<<<< HEAD
                provider: "twitter";});
            if (error) {
                toast({
                    variant: "destructive";
                    title: "Oh no! Something went wrong.";
                    description: error.message;});
=======
                provider: "twitter",,
            });
            if (error) {
                toast({
                    variant: "destructive",
                    title: "Oh no! Something went wrong.",
                    description: error.message,,
                });
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a97e
            }
        }
        finally {
            setIsLoading(false);
        }
    };
    const loginWithWeb3 = async () => {
        setIsLoading(true);
        try {
            const ethereum = window.ethereum;
            if (!ethereum) {
                throw new Error("Web3 wallet not found");
            }
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' }),
    const address = accounts[0];
            await ethereum.request({
                method: 'personal_sign',
                params: [address, address]
            });
            // Fix: Create a proper UserProfile object,
            setUser({
                id: address,
                displayName: address,
                profileComplete: true,
                email: '', // Add required fields;
                userType: 'talent', // Default user type;
<<<<<<< HEAD
                createdAt: new Date().toISOString();
                updatedAt: new Date().toISOString()});
=======
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
            });

>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a97e
    toast({ title: 'Wallet connected', description: address });
};
        catch (error) {
            toast({
<<<<<<< HEAD
                variant: 'destructive';
                title: 'Web3 login failed';
                description: error?.message || 'Unable to connect wallet'});
=======
                variant: 'destructive',
                title: 'Web3 login failed',
                description: error?.message || 'Unable to connect wallet',
            });
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a97e
     }
        finally {
            setIsLoading(false);
        }
    };
    return {
        login,
        signup,
        logout,
        resetPassword,
        updateProfile,
        loginWithGoogle,
        loginWithFacebook,
        loginWithTwitter,
<<<<<<< HEAD
        loginWithWeb3};
=======
        loginWithWeb3;
  };
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a97e
}
