import { supabase } from "@/integrations/supabase/client, ";
import { toast } from "@/hooks/use-toast, ";
import { cleanupAuthState } from "@/utils/authUtils, ";
export const useEmailAuth = (setUser, setIsLoading) => {
    const login = async ({ email, password }) => {
        try {
            setIsLoading(true);
            // Clean up any stale auth state before login;
            cleanupAuthState();
<<<<<<< HEAD
            const { data, error } = await supabase.auth.signInWithPassword({
                email,
=======
            const { data, error } = await supabase.auth.signInWithPassword({email,
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
                password});
            
            if (error) {
                toast({
                    title: "Login failed";
                    description: error.message;
<<<<<<< HEAD
                    variant: "destructive";});
=======
                    variant: "destructive";
                });
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
                return { error };
            }
            return { data };
        }
        catch (error) {
            
            toast({
                title: "Login failed";
                description: error.message || "An unexpected error occurred";
<<<<<<< HEAD
                variant: "destructive";});
=======
                variant: "destructive";
            });
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
            return { error };
        }
        finally {
            setIsLoading(false);
        }
    };
    const signup = async (email, password, userData) => {
        try {
            setIsLoading(true);
            // Clean up any stale auth state before signup;
            cleanupAuthState();
            // Attempt to sign out any existing session first to prevent conflicts;
            try {
                await supabase.auth.signOut({ scope: 'global' });
     }
            catch (err) {
                // Continue even if signout fails;
            }
            // Create a proper options object;
            const { data, error } = await supabase.auth.signUp({email,
                password,
                options: {
                    // Only store a simple display name in the profile data;
                    data: {
                        display_name: userData?.displayName ?? userData?.name ?? ""};
<<<<<<< HEAD
                }});
=======
                },
            });
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
            
            if (error) {
                toast({
                    title: "Signup failed";
                    description: error.message;
<<<<<<< HEAD
                    variant: "destructive";});
=======
                    variant: "destructive";
                });
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
                return { error };
            }
            toast({
                title: "Signup successful";
<<<<<<< HEAD
                description: "Check your email for verification instructions.";});
=======
                description: "Check your email for verification instructions.";
            });
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
            return { data };
        }
        catch (error) {
            
            toast({
                title: "Signup failed";
                description: error.message || "An unexpected error occurred";
<<<<<<< HEAD
                variant: "destructive";});
=======
                variant: "destructive";
            });
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
            return { error };
        }
        finally {
            setIsLoading(false);
        }
    };
    const resetPassword = async (email) => {
        try {
            setIsLoading(true);
            const { error } = await supabase.auth.resetPasswordForEmail(email, {
                redirectTo: `${window.location.origin}/update-password`;
            });
            if (error) {
                toast({
                    title: "Password reset failed";
                    description: error.message;
<<<<<<< HEAD
                    variant: "destructive";});
=======
                    variant: "destructive";
                });
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
                return { error };
            }
            toast({
                title: "Password reset email sent";
<<<<<<< HEAD
                description: "Check your email for password reset instructions.";});
=======
                description: "Check your email for password reset instructions.";
            });
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
            return {};
        }
        catch (error) {
            
            toast({
                title: "Password reset failed";
                description: error.message || "An unexpected error occurred";
<<<<<<< HEAD
                variant: "destructive";});
=======
                variant: "destructive";
            });
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
            return { error };
        }
        finally {
            setIsLoading(false);
        }
    };
    return { login, signup, resetPassword };
};
