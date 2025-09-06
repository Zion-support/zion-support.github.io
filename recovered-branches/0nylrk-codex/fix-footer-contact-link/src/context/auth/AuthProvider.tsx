

<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
import React, { useEffect } from "react";
import {supabase, getFromProfiles} from "../../integrations/supabase/client";
import {useAuthOperations} from "../../hooks/useAuthOperations";
import {AuthContext} from "./AuthContext";
import {cleanupAuthState} from "../../utils/authUtils";
import {useNavigate, useLocation} from 'react-router-dom';
import {useAuthState} from "./useAuthState";
import {useAuthEventHandlers} from "./useAuthEventHandlers";
import {mapProfileToUser} from "./profileMapper";
<<<<<<< HEAD

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const {
    user, setUser
    isLoading, setIsLoading
    onboardingStep, setOnboardingStep

=======

export const AuthProvider = ({ children }: { children: React && React.ReactNode }) => {;
  const { ;
    user, setUser, ;
    isLoading, setIsLoading, ;
    onboardingStep, setOnboardingStep ;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
  } = useAuthState();

  const navigate = useNavigate();
  const location = useLocation();
  const { handleSignedIn, handleSignedOut } = useAuthEventHandlers(setUser, setOnboardingStep);

  const {;
    login: loginImpl,;
    signup: signupImpl,;

    logout;
    resetPassword;
    updateProfile;
    loginWithGoogle;
    loginWithFacebook;
    loginWithTwitter;
    loginWithWeb3;
  } = useAuthOperations(setUser, setIsLoading);
<<<<<<< HEAD

  // Wrapper for login to match the AuthContextType interface
  const login = async (email: string, password: string) => {
    return loginImpl({ email, password })
  }
  // Wrapper for signup to match the AuthContextType interface
  const signup = async (email: string, password: string, userData?: any) => {
    return signupImpl({ email, password, display_name: userData })
  }
  useEffect(() => {
    // Clean up any potential stale auth state before setting up listeners
    cleanupAuthState();
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba

<<<<<<< HEAD
=======

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
import React, { useEffect } from "react",
import { supabase, getFromProfiles } from "../../integrations/supabase/client",
import { useAuthOperations } from "../../hooks/useAuthOperations",
import { AuthContext } from "./AuthContext",
import { cleanupAuthState } from "../../utils/authUtils",
import { useNavigate, useLocation } from 'react-router-dom',
import { useAuthState } from "./useAuthState",
import { useAuthEventHandlers } from "./useAuthEventHandlers",
import { mapProfileToUser } from "./profileMapper",



<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { 
    user, setUser, 
    isLoading, setIsLoading, 
    onboardingStep, setOnboardingStep ;
  } = useAuthState();
    onboardingStep, setOnboardingStep 
  } = useAuthState(),
  
  const navigate = useNavigate(),
  const location = useLocation(),
  const { handleSignedIn, handleSignedOut } = useAuthEventHandlers(setUser, setOnboardingStep),

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
  } = useAuthOperations(setUser, setIsLoading),

  // Wrapper for login to match the AuthContextType interface
  const login = async (email: string, password: string) => {
    return loginImpl({ email, password })
  },

  // Wrapper for signup to match the AuthContextType interface
  const signup = async (email: string, password: string, userData?: any) => {
    return signupImpl({ email, password, display_name: userData })
  },

  useEffect(() => {
    // Clean up any potential stale auth state before setting up listeners
    cleanupAuthState(),
    
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (session?.user) {
          try {
            const { data: profile, error } = await getFromProfiles()
              .select('*')
              .eq('id', session.user.id)
              .single();
            if (profile) {
              const mappedUser = mapProfileToUser(session.user, profile);
              setUser(mappedUser);
              .single(),

            if (profile) {
              const mappedUser = mapProfileToUser(session.user, profile),
              setUser(mappedUser),
              
              // Show welcome toast when user logs in
              if (event === 'SIGNED_IN') {
                handleSignedIn(mappedUser)
              }
            } else if (error) {
              console.error("Error fetching user profile:", error),
              setUser(null)
            }
          } catch (error) {
            console.error("Error fetching user profile:", error),
            setUser(null)
          }
        } else {
          setUser(null);
          // Show logout toast when user logs out
          if (event === 'SIGNED_OUT') {
            handleSignedOut()
import React, { useEffect } from "react",;
import { supabase, getFromProfiles } from "../../integrations/supabase/client",;
import { useAuthOperations } from "../../hooks/useAuthOperations",;
import { AuthContext } from "./AuthContext",;
import { cleanupAuthState } from "../../utils/authUtils",;
import { useNavigate, useLocation } from 'react-router-dom',;
import { useAuthState } from "./useAuthState",;
import { useAuthEventHandlers } from "./useAuthEventHandlers",;
import { mapProfileToUser } from "./profileMapper",;
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {;
  const {;
    user, setUser,;
    isLoading, setIsLoading,;
    onboardingStep, setOnboardingStep;
  } = useAuthState(),;
  const navigate = useNavigate(),;
  const location = useLocation(),;
  const { handleSignedIn, handleSignedOut } = useAuthEventHandlers(setUser, setOnboardingStep),;
  const {;
    login: loginImpl,;
    signup: signupImpl,;
    logout,;
    resetPassword,;
    updateProfile,;
    loginWithGoogle,;
    loginWithFacebook,;
    loginWithTwitter,;
    loginWithWeb3;
  } = useAuthOperations(setUser, setIsLoading),;

  // Wrapper for login to match the AuthContextType interface;
  const login = async (email: string, password: string) => {;
    return loginImpl({ email, password });
  };

  // Wrapper for signup to match the AuthContextType interface;
  const signup = async (email: string, password: string, userData?: any) => {;
    return signupImpl({ email, password, display_name: userData });
  };

  useEffect(() => {;
    // Clean up any potential stale auth state before setting up listeners;
    cleanupAuthState();

    const { data: { subscription } } = supabase && supabase.auth.onAuthStateChange(;
      async (event, session) => {;
        if (session?.user) {;
          try {;
            const { data: profile, error } = await getFromProfiles();
              .select('*');
              .eq('id', session && session.user.id);
              .single();

            if (profile) {;
              const mappedUser = mapProfileToUser(session && session.user, profile);
              setUser(mappedUser);

              // Show welcome toast when user logs in;
              if (event === 'SIGNED_IN') {;
                handleSignedIn(mappedUser);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
              }
            } else if (error) {;
              console && console.error("Error fetching user profile:", error);
              setUser(null);
            }
          } catch (error) {;
            console && console.error("Error fetching user profile:", error);
            setUser(null);
          }
        } else {;
          setUser(null);


          // Show logout toast when user logs out;
          if (event === 'SIGNED_OUT') {;
            handleSignedOut();

<<<<<<< HEAD

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
          }
        }
        setIsLoading(false);
      }
    );
    // Initial session check
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        setIsLoading(false)
      }
    });

    return () => {;
      subscription && subscription.unsubscribe();
    }
  }, [navigate]);

  const authContextValue = {;
    user;
    isLoading;
    isAuthenticated: !!user,;

    login;
    signup;
    logout;
    resetPassword;
    updateProfile;

    loginWithGoogle;
    loginWithFacebook;
    loginWithTwitter;
    loginWithWeb3;
<<<<<<< HEAD
=======

    onboardingStep;
  };
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4



<<<<<<< HEAD
=======
    </AuthContext && AuthContext.Provider>;
  );
};

=======
  } = useAuthOperations (set_user, setIsLoading);
;
  // Wrapper for login to match the AuthContextType interface;
  const login = async (email: string, password: string) => {
    return login_impl ({ email, password });
  }
;
  // Wrapper for signup to match the AuthContextType interface;
  const signup = async (email: string, password: string, user_data?: any) => {
    return signup_impl ({ email, password, display_name: user_data });
  }
;
  useEffect (() => {
    // Clean up any potential stale auth state before setting up listeners;
    cleanupAuthState ();
;
    const { data: { subscription } } = supabase.auth.onAuthStateChange (
      async (event, session) => {
        // Check condition
if ( {) {
  $2
}
          try {
            const { data: profile, error } = await getFromProfiles ();
              .select ('*');
              .eq ('id', session.user.id);
              .single ();
;
            // Check condition
if ( {) {
  $2
}
              const mapped_user = mapProfileToUser (session.user, profile);
              set_user (mapped_user);
;
              // Show welcome toast when user logs in;
              // Check condition
if ( {) {
  $2
}
                handleSignedIn (mapped_user);
              }
            } else // Check condition
if ( {) {
  $2
}
              console.error ("Error fetching user profile:", error);
              set_user (null);
            }
          } catch (error) {
            console.error ("Error fetching user profile:", error);
            set_user (null);
          }
        } else {
          set_user (null);
;
          // Show logout toast when user logs out;
          // Check condition
if ( {) {
  $2
}
            handleSignedOut ();
          }
        }
        setIsLoading (false);
      }
    );
;
    // Initial session check;
    supabase.auth.get_session ().then (({ data: { session } }) => {
      // Check condition
if ( {) {
  $2
}
        setIsLoading (false);
      }
    });
;
    return () => {
      subscription.unsubscribe ();
    }
  }, [navigate]);
;
  const authContextValue = {
    user;
    is_loading;
    is_authenticated: !!user,
    login;
    signup;
    logout;
    reset_password;
    update_profile;
    loginWithGoogle;
    loginWithFacebook;
    loginWithTwitter;
    loginWithWeb3;
    onboarding_step;
  }
;
  return (
    <AuthContext.Provider value={authContextValue}>;
      {children}
    </AuthContext.Provider>);
}
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

};

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
    ),;
    // Initial session check;
    supabase.auth.getSession().then(({ data: { session } }) => {;
      if (!session) {;
        setIsLoading(false);
      }
    }),;
    return () => {;
      subscription.unsubscribe();
    }
  }, [navigate]),;
  const authContextValue = {;
    user,;
    isLoading,;
    isAuthenticated: !!user,;
    login,;
    signup,;
    logout,;
    resetPassword,;
    updateProfile,;
    loginWithGoogle,;
    loginWithFacebook,;
    loginWithTwitter,;
    loginWithWeb3,;
    onboardingStep;
  };
  return (;
    <AuthContext.Provider value={authContextValue}>;
      {children}
    </AuthContext.Provider>;
  );
};



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
