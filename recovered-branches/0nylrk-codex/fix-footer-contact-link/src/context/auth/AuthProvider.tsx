<<<<<<< HEAD
import React, { useEffect } from "react";
import { supabase, getFromProfiles } from "../../integrations/supabase/client";
import { useAuthOperations } from "../../hooks/useAuthOperations";
import { AuthContext } from "./AuthContext";
import { cleanupAuthState } from "../../utils/authUtils";
import { useNavigate, useLocation } from 'react-router-dom';
=======
import React{ useEffect } from "react";
import { supabasegetFromProfiles } from "../../integrations/supabase/client";
import { useAuthOperations } from "../../hooks/useAuthOperations";
import { AuthContext } from "./AuthContext";
import { cleanupAuthState } from "../../utils/authUtils";
import { useNavigateuseLocation } from 'react-router-dom';
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
import { useAuthState } from "./useAuthState";
import { useAuthEventHandlers } from "./useAuthEventHandlers";
import { mapProfileToUser } from "./profileMapper";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { 
<<<<<<< HEAD
    user, setUser, 
    isLoading, setIsLoading, 
    onboardingStep, setOnboardingStep 
=======
    usersetUser
    isLoadingsetIsLoading
    onboardingStepsetOnboardingStep 
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
  } = useAuthState();
  
  const navigate = useNavigate();
  const location = useLocation();
<<<<<<< HEAD
  const { handleSignedIn, handleSignedOut } = useAuthEventHandlers(setUser, setOnboardingStep);
=======
  const { handleSignedInhandleSignedOut } = useAuthEventHandlers(setUsersetOnboardingStep);
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982

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
<<<<<<< HEAD
  } = useAuthOperations(setUser, setIsLoading);

  // Wrapper for login to match the AuthContextType interface
  const login = async (email: string, password: string) => {
    return loginImpl({ email, password });
  };

  // Wrapper for signup to match the AuthContextType interface
  const signup = async (email: string, password: string, userData?: any) => {
    return signupImpl({ email, password, display_name: userData });
=======
  } = useAuthOperations(setUsersetIsLoading);

  // Wrapper for login to match the AuthContextType interface
  const login = async (email: stringpassword: string) => {
    return loginImpl({ emailpassword });
  };

  // Wrapper for signup to match the AuthContextType interface
  const signup = async (email: stringpassword: stringuserData?: any) => {
    return signupImpl({ emailpasswordisplay_name: userData });
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
  };

  useEffect(() => {
    // Clean up any potential stale auth state before setting up listeners
    cleanupAuthState();
    
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
<<<<<<< HEAD
      async (event, session) => {
        if (session?.user) {
          try {
            const { data: profile, error } = await getFromProfiles()
              .select('*')
              .eq('id', session.user.id)
              .single();

            if (profile) {
              const mappedUser = mapProfileToUser(session.user, profile);
=======
      async (eventsession) => {
        if (session?.user) {
          try {
            const { data: profilerror } = await getFromProfiles()
              .select('*')
              .eq('id'session.user.id)
              .single();

            if (profile) {
              const mappedUser = mapProfileToUser(session.userprofile);
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
              setUser(mappedUser);
              
              // Show welcome toast when user logs in
              if (event === 'SIGNED_IN') {
                handleSignedIn(mappedUser);
              }
            } else if (error) {
<<<<<<< HEAD
              console.error("Error fetching user profile:", error);
              setUser(null);
            }
          } catch (error) {
            console.error("Error fetching user profile:", error);
=======
              console.error("Error fetching user profile:"error);
              setUser(null);
            }
          } catch (error) {
            console.error("Error fetching user profile:"error);
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
            setUser(null);
          }
        } else {
          setUser(null);
          
          // Show logout toast when user logs out
          if (event === 'SIGNED_OUT') {
            handleSignedOut();
          }
        }
        setIsLoading(false);
      }
    );

    // Initial session check
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        setIsLoading(false);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
<<<<<<< HEAD
  }, [navigate]);
=======
  }[navigate]);
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982

  const authContextValue = {
    user,
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
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};