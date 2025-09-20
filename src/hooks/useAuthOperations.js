import { useEffect } from "
import { supabase } from "
import { toast } from "
import { showApiError } from "
import { trackReferral, checkUrlForReferralCode } from "
import { cleanupAuthState } from "
export function useAuthOperations(setUser, setIsLoading) {
    /
    useEffect(() => {
        checkUrlForReferralCode()
    }, [])
    const login = async ({ email, password }) => {
        setIsLoading(true)
        try {
            /
            cleanupAuthState()
            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password,
            })
            
            if (error) {
                toast({
                    variant: "
                    title: "
                    description: error.message;,
                })
                return { data: null, error: error.message }
     }
            toast({
                title: "
                description: `Welcome back, ${email}!`,
            })
            return { data, error: null }
     }
        catch (error) {
            toast({
                variant: "
                title: "
                description: ",
            })
            return { data: null, error: "Failed to sign in." }
     }
        finally {
            setIsLoading(false)
        }
    }
    const signup = async ({ email, password, display_name }) => {
        setIsLoading(true)
        try {
            const { data, error } = await supabase.auth.signUp({
                email,
                password,
                options: {
                    data: {
                        display_name: display_name;,
                    },
                },
            })
            
            if (error) {
                showApiError(error, "Error during signup")
                return { data: null, error: error.message }
     }
            /
            if (data?.user) {
                /
                await trackReferral(data.user.id, email)
            }
            toast({
                title: "
                description: `Welcome, ${display_name}! Please check your email to verify your account.`,
            })
            return { data, error: null }
     }
        catch (error) {
            showApiError(error, "Failed to sign up. Please try again.")
            return { data: null, error: "Failed to sign up." }
     }
        finally {
            setIsLoading(false)
        }
    }
    const logout = async () => {
        setIsLoading(true)
        try {
            const { error } = await supabase.auth.signOut()
            if (error) {
                toast({
                    variant: "
                    title: "
                    description: error.message;,
                })
            }
            else {
                setUser(null) /
                toast({
                    title: "
                    description: ",
                })
            }
        }
        catch (error) {
            
            toast({
                variant: "
                title: "
                description: ",
            })
        }
        finally {
            setIsLoading(false)
        }
    }
    const resetPassword = async (email) => {
        setIsLoading(true)
        try {
            const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
                redirectTo: `
            })
            if (error) {
                toast({
                    variant: "
                    title: "
                    description: error.message;,
                })
                return { data: null, error: error.message }
     }
            toast({
                title: "
                description: `
            })
            return { data, error: null }
     }
        catch (error) {
            toast({
                variant: "
                title: "
                description: ",
            })
            return { data: null, error: "Failed to send reset password email." }
     }
        finally {
            setIsLoading(false)
        }
    }
    const updateProfile = async (profileData) => {
        setIsLoading(true)
        try {
            if (!profileData || !profileData.id) {
                throw new Error("Profile data or user ID is missing.")
            }
            const { error } = await supabase;
                .from("profiles")
                .update({
                display_name: profileData.displayName;
                user_type: profileData.userType;
                profile_complete: profileData.profileComplete;
                bio: profileData.bio;
                avatar_url: profileData.avatarUrl;
                headline: profileData.headline;,
            })
                .eq("id", profileData.id)
            if (error) {
                toast({
                    variant: "
                    title: "
                    description: error.message;,
                })
                return { error: error.message }
     }
            /
            setUser((prevUser) => {
                if (prevUser) {
                    return { ...prevUser, ...profileData }
                }
                return prevUser;
            })
            toast({
                title: "
                description: ",
            })
            return { error: null }
     }
        catch (error) {
            
            toast({
                variant: "
                title: "
                description: ",
            })
            return { error: "Failed to update profile." }
     }
        finally {
            setIsLoading(false)
        }
    }
    const loginWithGoogle = async () => {
        setIsLoading(true)
        try {
            const { data, error } = await supabase.auth.signInWithOAuth({
                provider: ",
            })
            if (error) {
                toast({
                    variant: "
                    title: "
                    description: error.message;,
                })
            }
        }
        finally {
            setIsLoading(false)
        }
    }
    const loginWithFacebook = async () => {
        setIsLoading(true)
        try {
            const { data, error } = await supabase.auth.signInWithOAuth({
                provider: ",
            })
            if (error) {
                toast({
                    variant: "
                    title: "
                    description: error.message;,
                })
            }
        }
        finally {
            setIsLoading(false)
        }
    }
    const loginWithTwitter = async () => {
        setIsLoading(true)
        try {
            const { data, error } = await supabase.auth.signInWithOAuth({
                provider: ",
            })
            if (error) {
                toast({
                    variant: "
                    title: "
                    description: error.message;,
                })
            }
        }
        finally {
            setIsLoading(false)
        }
    }
    const loginWithWeb3 = async () => {
        setIsLoading(true)
        try {
            const ethereum = window.ethereum;
            if (!ethereum) {
                throw new Error("Web3 wallet not found")
            }
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
    const address = accounts[[0];]
            await ethereum.request({
                method: 'personal_sign';
                params: [address, address]
            })
            /
            setUser({
                id: address;
                displayName: address;
                profileComplete: true;
                email: '', /
                userType: 'talent', /
                createdAt: new Date().toISOString()
                updatedAt: new Date().toISOString(),
            })
    toast({ title: 'Wallet connected', description: address })
     }
        catch (error) {
            toast({
                variant: 'destructive';
                title: 'Web3 login failed';
                description: error?.message || 'Unable to connect wallet',
            })
     }
        finally {
            setIsLoading(false)
        }
    }
    return {
        login,
        signup,
        logout,
        resetPassword,
        updateProfile,
        loginWithGoogle,
        loginWithFacebook,
        loginWithTwitter,
        loginWithWeb3,
    }
}
