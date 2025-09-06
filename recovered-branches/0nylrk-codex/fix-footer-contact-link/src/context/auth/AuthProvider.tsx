<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======




>>>>>>> main
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
<<<<<<< HEAD
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const {
    user, setUser
    isLoading, setIsLoading
    onboardingStep, setOnboardingStep
  } = useAuthState();
  const navigate = useNavigate();
  const location = useLocation();
  const { handleSignedIn, handleSignedOut } = useAuthEventHandlers(setUser, setOnboardingStep);
  const {
    login: loginImpl
    signup: signupImpl
=======

export const AuthProvider = ({ children }: { children: React && React.ReactNode }) => {;
  const { ;
    user, setUser, ;
    isLoading, setIsLoading, ;
    onboardingStep, setOnboardingStep ;
  } = useAuthState();

  const navigate = useNavigate();
  const location = useLocation();
  const { handleSignedIn, handleSignedOut } = useAuthEventHandlers(setUser, setOnboardingStep);

  const {;
    login: loginImpl,;
    signup: signupImpl,;

>>>>>>> main
    logout;
    resetPassword;
    updateProfile;
    loginWithGoogle;
    loginWithFacebook;
    loginWithTwitter;
<<<<<<< HEAD
    loginWithWeb3
  } = useAuthOperations(setUser, setIsLoading);
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
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
    loginWithWeb3;
  } = useAuthOperations(setUser, setIsLoading);



>>>>>>> main
=======
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
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======



>>>>>>> main
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { 
    user, setUser, 
    isLoading, setIsLoading, 
<<<<<<< HEAD
<<<<<<< HEAD
    onboardingStep, setOnboardingStep ;
  } = useAuthState();
=======
    onboardingStep, setOnboardingStep 
  } = useAuthState(),
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======

    onboardingStep, setOnboardingStep 
  } = useAuthState(),

>>>>>>> main
  
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
    
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> main
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (session?.user) {
          try {
            const { data: profile, error } = await getFromProfiles()
              .select('*')
              .eq('id', session.user.id)
<<<<<<< HEAD
<<<<<<< HEAD
              .single();
            if (profile) {
              const mappedUser = mapProfileToUser(session.user, profile);
              setUser(mappedUser);
=======
=======


=======

>>>>>>> main
              .single(),

            if (profile) {
              const mappedUser = mapProfileToUser(session.user, profile),
              setUser(mappedUser),
              
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======

>>>>>>> main
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
<<<<<<< HEAD
<<<<<<< HEAD
          }
        } else {
          setUser(null);
          // Show logout toast when user logs out
          if (event === 'SIGNED_OUT') {
            handleSignedOut()
=======
=======

>>>>>>> main
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
<<<<<<< HEAD
  // Wrapper for login to match the AuthContextType interface;
  const login = async (email: string, password: string) => {;
    return loginImpl({ email, password });
  },;
  // Wrapper for signup to match the AuthContextType interface;
  const signup = async (email: string, password: string, userData?: any) => {;
    return signupImpl({ email, password, display_name: userData });
  },;
  useEffect(() => {;
    // Clean up any potential stale auth state before setting up listeners;
    cleanupAuthState(),;
    const { data: { subscription } } = supabase.auth.onAuthStateChange(;
=======

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
>>>>>>> main
      async (event, session) => {;
        if (session?.user) {;
          try {;
            const { data: profile, error } = await getFromProfiles();
              .select('*');
<<<<<<< HEAD
              .eq('id', session.user.id);
              .single(),;
            if (profile) {;
              const mappedUser = mapProfileToUser(session.user, profile),;
              setUser(mappedUser),;
              // Show welcome toast when user logs in;
              if (event === 'SIGNED_IN') {;
                handleSignedIn(mappedUser);
              }
            } else if (error) {;
              console.error("Error fetching user profile:", error),;
              setUser(null);
            }
          } catch (error) {;
            console.error("Error fetching user profile:", error),;
            setUser(null);
          }
        } else {;
          setUser(null),;
          // Show logout toast when user logs out;
          if (event === 'SIGNED_OUT') {;
            handleSignedOut();
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          }
        }
        setIsLoading(false)
      }
<<<<<<< HEAD
    );
    // Initial session check
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        setIsLoading(false)
      }
    });
    return () => {
      subscription.unsubscribe()
    }
  }, [navigate]);
  const authContextValue = {
    user;
    isLoading;
    isAuthenticated: !!user
=======
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

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          }
        }
        setIsLoading(false);
      }


    // Initial session check;
    supabase && supabase.auth.getSession().then(({ data: { session } }) => {;
      if (!session) {;
        setIsLoading(false);
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

>>>>>>> main
    login;
    signup;
    logout;
    resetPassword;
    updateProfile;
<<<<<<< HEAD
=======
=======
import React, { useEffect } from './react';
import { supabase, getFromProfiles } from '../../integrations / supabase / client';
import { useAuthOperations } from '../../hooks / useAuthOperations';
import { AuthContext } from './AuthContext';
import { cleanupAuthState } from '../../utils / auth_utils';
import {use_navigate, use_location} from 'react-router-dom';
import { useAuthState } from './useAuthState';
import { useAuthEventHandlers } from './useAuthEventHandlers';
import { mapProfileToUser } from './profile_mapper';
export const AuthProvider = ({ children }: { children: React.ReactNode }) =>: any {
  const {
    user, set_user,
    is_loading, setIsLoading,
    onboarding_step, setOnboardingStep;
  } = useAuthState ();
;
  const navigate = use_navigate ();
  const location = use_location ();
  const { handleSignedIn, handleSignedOut } = useAuthEventHandlers (set_user, setOnboardingStep);
;
  const {
    login: login_impl,
    signup: signup_impl,
    logout;
    reset_password;
    update_profile;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> main
    loginWithGoogle;
    loginWithFacebook;
    loginWithTwitter;
    loginWithWeb3;
<<<<<<< HEAD
    onboardingStep
  }
  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  )
<<<<<<< HEAD
}

=======
};
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

    onboardingStep;
  };


  return (
    <AuthContext && AuthContext.Provider value={authContextValue}>;
      {children}

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

>>>>>>> main
=======
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> main
