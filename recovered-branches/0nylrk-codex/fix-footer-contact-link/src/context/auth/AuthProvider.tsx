import React, { useEffect } from "react",
import { supabase, getFromProfiles } from "../../integrations/supabase/client",
import { useAuthOperations } from "../../hooks/useAuthOperations",
import { AuthContext } from "./AuthContext",
import { cleanupAuthState } from "../../utils/authUtils";
import { useNavigate, useLocation  } from 'react-router-dom';
import { useAuthState } from "./useAuthState",
import { useAuthEventHandlers } from "./useAuthEventHandlers";
import { mapProfileToUser } from "./profileMapper";
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { 
    user, setUser, 
    isLoading, setIsLoading, 
    onboardingStep, setOnboardingStep 
  } = useAuthState($2);
  const navigate = useNavigate($2);
  const location = useLocation($2);
  const { handleSignedIn, handleSignedOut } = useAuthEventHandlers($2);
  const {
    login: loginImpl,
    signup: signupImpl,
    logout,
    resetPassword,
    updateProfile,
    loginWithGoogle,
    loginWithFacebook,
    loginWithTwitter,
    loginWithWeb3
  } = useAuthOperations($2);
  // Wrapper for login to match the AuthContextType interface
  const login = async (email: string, password: string) => {
    return loginImpl({ email, password })
  },

  // Wrapper for signup to match the AuthContextType interface
  const signup = async (email: string, password: string, userData?: any) => {
    return signupImpl({ email, password, display_name: userData})
  },

  useEffect(() => {
    // Clean up any potential stale auth state before setting up listeners
    cleanupAuthState($2);
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (session?.user) {
          try {
            const { data: profile, error } = await getFromProfiles()
              .select('*')
              .eq('id', session.user.id)
              .single($2);
            if (profile) {
              const mappedUser = mapProfileToUser($2);
              setUser($2);
              // Show welcome toast when user logs in
              if (event === 'SIGNED_IN') {
                handleSignedIn(mappedUser)
              }
            } else if (error) {
              console.error($2);
              setUser(null)
            }
          } catch (error) {
            console.error($2);
            setUser(null)
          }
        } else {
          setUser($2);
          // Show logout toast when user logs out
          if (event = $2;
    // Initial session check
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        setIsLoading(false)
      }
    }),

    return () => {
      subscription.unsubscribe()
    }
  }, [navigate]),

  const authContextValue = $2;
    isLoading,
    isAuthenticated: !!user,
    login,
    signup,
    logout,
    resetPassword,
    updateProfile,
    loginWithGoogle,
    loginWithFacebook,
    loginWithTwitter,
    loginWithWeb3,
    onboardingStep
  },

  return (
    <AuthContext.Provider value = $2;