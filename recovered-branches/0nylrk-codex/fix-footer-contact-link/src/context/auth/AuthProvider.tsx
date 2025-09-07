<<<<<<< HEAD
=======
<<<<<<< HEAD
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
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import {cleanupAuthState} from "../../utils/authUtils";
import {useNavigate, useLocation} from 'react-router-dom';"
import {useAuthState} from "./useAuthState";"
import {useAuthEventHandlers} from "./useAuthEventHandlers";"
import {mapProfileToUser} from "./profileMapper";
<<<<<<< HEAD

=======
<<<<<<< HEAD
import React, { useEffect } from "react",;
import { supabase, getFromProfiles } from "../../integrations/supabase/client",;
import { useAuthOperations } from "../../hooks/useAuthOperations",;
import { AuthContext } from "./AuthContext",;
import { cleanupAuthState } from "../../utils/authUtils",;
import { useNavigate, useLocation } from 'react-router-dom',;
import { useAuthState } from "./useAuthState",;
import { useAuthEventHandlers } from "./useAuthEventHandlers",;
import { mapProfileToUser } from "./profileMapper",;
;
export const AuthProvider = ({ children } { children:React.ReactNode }) => {;
=======

<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    user, setUser, ;
    isLoading, setIsLoading, ;

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {

<<<<<<< HEAD
=======
=======
export const AuthProvider = ({ children }: { children: React && React.ReactNode }) => {;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const { ;
    user, setUser, ;
    isLoading, setIsLoading, ;
    onboardingStep, setOnboardingStep ;
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  } = useAuthState();

  const navigate = useNavigate();
  const location = useLocation();
  const { handleSignedIn, handleSignedOut } = useAuthEventHandlers(setUser, setOnboardingStep);

  const {;
    login: loginImpl,;
    signup: signupImpl,;

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    logout;
    resetPassword;
    updateProfile;
    loginWithGoogle;
    loginWithFacebook;
    loginWithTwitter;
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
<<<<<<< HEAD
    loginWithWeb3
  } = useAuthOperations(setUser, setIsLoading);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  // Wrapper for login to match the AuthContextType interface
  const login = async (email: string, password: string) => {
    return loginImpl({ email, password })
  }
  // Wrapper for signup to match the AuthContextType interface
<<<<<<< HEAD

    loginWithTwitter,
=======
<<<<<<< HEAD

    loginWithTwitter,
=======
  const signup = async (email: string, password: string, userData?: any) => {
    return signupImpl({ email, password, display_name: userData })
  }
  useEffect(() => {
    // Clean up any potential stale auth state before setting up listeners
    cleanupAuthState();
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    loginWithWeb3;
  } = useAuthOperations(setUser, setIsLoading),

  // Wrapper for login to match the AuthContextType interface;
  const login = async (email: string, password: string) => {
    return loginImpl({ email, password })
  }
  // Wrapper for signup to match the AuthContextType interface;
  const signup = async (email: string, password: string, userData?: any) => {
    return signupImpl({ email, password, display_name: userData })
  }
  useEffect(() => {
    // Clean up any potential stale auth state before setting up listeners

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import React, { useEffect } from "react",

import { supabase, getFromProfiles } from "../../integrations/supabase/client",
import { useAuthOperations } from "../../hooks/useAuthOperations",
import { AuthContext } from "./AuthContext",
import { cleanupAuthState } from "../../utils/authUtils",
import { useNavigate, useLocation } from 'react-router-dom',
import { useAuthState } from "./useAuthState",
import { useAuthEventHandlers } from "./useAuthEventHandlers",
<<<<<<< HEAD

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {

=======
<<<<<<< HEAD
=======
import { mapProfileToUser } from "./profileMapper",


<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {

>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  const { 
    user, setUser, 
    isLoading, setIsLoading, 
<<<<<<< HEAD
=======
<<<<<<< HEAD
    onboardingStep, setOnboardingStep 
  } = useAuthState(),

  
    onboardingStep, setOnboardingStep ;
  } = useAuthState();
    onboardingStep, setOnboardingStep 
  } = useAuthState(),
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    onboardingStep, setOnboardingStep 
<<<<<<< HEAD
  } = useAuthState($2);
  const navigate = useNavigate($2);
  const location = useLocation($2);
  const { handleSignedIn, handleSignedOut } = useAuthEventHandlers($2);
  const {
    login: loginImpl,
    signup: signupImpl,
=======
  } = useAuthState(),    onboardingStep, setOnboardingStep 
  } = useAuthState(),
<<<<<<< HEAD
const navigate = useNavigate(),;
const location = useLocation(),;
const { handleSignedIn, handleSignedOut } = useAuthEventHandlers(setUser, setOnboardingStep),;
    }
    "login": loginImpl,
    "signup": signupImpl,
=======

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  const navigate = useNavigate(),
  const location = useLocation(),
  const { handleSignedIn, handleSignedOut } = useAuthEventHandlers(setUser, setOnboardingStep),

  const {}
    login: loginImpl,
    signup: signupImpl,
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    logout,
    resetPassword,
    updateProfile,
    loginWithGoogle,
    loginWithFacebook,
    loginWithTwitter,
<<<<<<< HEAD
=======
<<<<<<< HEAD
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

=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    loginWithWeb3;
  } = useAuthOperations(setUser, setIsLoading),

  // Wrapper for login to match the AuthContextType interface;
  const login = async (email: string, password: string) => {}
    return loginImpl({ email, password })
  }
  // Wrapper for signup to match the AuthContextType interface;
  const signup = async (email: string, password: string, userData?: any) => {}
    return signupImpl({ email, password, display_name: userData })
  }

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
  useEffect(() => {
    // Clean up any potential stale auth state before setting up listeners
    cleanupAuthState(),
    
<<<<<<< HEAD
    
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {}
        if (session?.user) {}
          try {}
            const { data: profile, error } = await getFromProfiles()'
              .select('*')'
              .eq('id', session.user.id)
<<<<<<< HEAD

=======
<<<<<<< HEAD
              .single($2);
            if (profile) {
              const mappedUser = mapProfileToUser($2);
              setUser($2);
              // Show welcome toast when user logs in
=======

<<<<<<< HEAD
=======

<<<<<<< HEAD

              .single();
            if (profile) {
              const mappedUser = mapProfileToUser(session.user, profile);
              setUser(mappedUser);
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              .single(),

            if (profile) {}

              const mappedUser = mapProfileToUser(session.user, profile),
              setUser(mappedUser),
<<<<<<< HEAD

              // Show welcome toast when user logs in

=======
<<<<<<< HEAD
=======
              
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              // Show welcome toast when user logs in

>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              if (event === 'SIGNED_IN') {
                handleSignedIn(mappedUser)
              }
            } else if (error) {
<<<<<<< HEAD
=======
<<<<<<< HEAD
              console.error($2);
              setUser(null)
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              console.error("Error fetching user profile:", error),
              setUser(null)
            }
          } catch (error) {
            console.error("Error fetching user profile:", error),
            setUser(null)
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { supabase, getFromProfiles } from "../../integrations/supabase/client";"
import { useAuthOperations } from "../../hooks/useAuthOperations",;"
import { AuthContext } from "./AuthContext",;"
import { cleanupAuthState } from "../../utils/authUtils",;"
import { useNavigate, useLocation } from 'react-router-dom',;'
import { useAuthState } from "./useAuthState",;"
import { useAuthEventHandlers } from "./useAuthEventHandlers",;"
import { mapProfileToUser } from "./profileMapper",;"
export const AuthProvider = ({ children }: { "children": React.ReactNode }) => {;
  }
=======

<<<<<<< HEAD
=======
=======
          }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        } else {
          setUser(null);
          // Show logout toast when user logs out
          if (event === 'SIGNED_OUT') {
            handleSignedOut()
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
>>>>>>> origin/chore/fix-lint-and-merge
  const {;
    user, setUser,;
    isLoading, setIsLoading,;
    onboardingStep, setOnboardingStep;
  } = useAuthOperations(setUser, setIsLoading),

  // Wrapper for login to match the AuthContextType interface;
  const login = async (email: string, password: string) => {
    return loginImpl({ email, password })
  // Wrapper for signup to match the AuthContextType interface;
  const signup = async (email: string, password: string, userData?: any) => {
    return signupImpl({ email, password, display_name: userData })
  useEffect(() => {
    // Clean up any potential stale auth state before setting up listeners;
    cleanupAuthState(),
    const { data: { subscription } } = supabase.auth.onAuthStateChange()
      async (event, session) => {
        if (session?.user) {
          try {
  // TODO: Implement
            const { data: profile, error } = await getFromProfiles()"
              .select('*')
              .eq('id', session.user.id)
              .single(),

            if (profile) {
              const mappedUser = mapProfileToUser(session.user, profile),
              setUser(mappedUser),

              // Show welcome toast when user logs in;
              if (event === 'SIGNED_IN') {
                handleSignedIn(mappedUser)
            } else if (error) {
              console.error("Error fetching user profile:", error),"
              setUser(null)
          } catch (error) {"
import React, { useEffect } from "react",;""
import { supabase, getFromProfiles } from "../../integrations/supabase/client",;""
import { useAuthOperations } from "../../hooks/useAuthOperations",;""
import { AuthContext } from "./AuthContext",;""
import { cleanupAuthState } from "../../utils/authUtils",;""
import { useNavigate, useLocation } from 'react-router-dom',;
import { useAuthState } from "./useAuthState",;""
import { useAuthEventHandlers } from "./useAuthEventHandlers",;""
import { mapProfileToUser } from "./profileMapper",;"
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {;
    user, setUser,;
    isLoading, setIsLoading,;
pr-12325

  const {;
    user, setUser,;
    isLoading, setIsLoading,;
    onboardingStep, setOnboardingStep;) => {
  return $3;}
}
  } = useAuthState(),;
<<<<<<< HEAD
    }
    "login": loginImpl,;
    "signup": signupImpl,;
=======
  const navigate = useNavigate(),;
  const location = useLocation(),;
  const { handleSignedIn, handleSignedOut } = useAuthEventHandlers(setUser, setOnboardingStep),;
  const {;
    login: loginImpl,;
    signup: signupImpl,;
pr-12325
>>>>>>> origin/chore/fix-lint-and-merge
    logout,;
    resetPassword,;
    updateProfile,;
    loginWithGoogle,;
    loginWithFacebook,;
    loginWithTwitter,;}
    loginWithWeb3;}
  } = useAuthOperations(setUser, setIsLoading),;
      async (event, session) => {;
        if (session?.user) {;
          try {;
            const { data: profile, error } = await getFromProfiles();
  } = useAuthOperations(setUser, setIsLoading),;

  // Wrapper for login to match the AuthContextType interface;
  const login = async (email: string, password: string) => {;
    return loginImpl({ email, password });
  };

  // Wrapper for signup to match the AuthContextType interface;
  const signup = async (email: string, password: string, userData?: any) => {;
    return signupImpl({ email, password, display_name: userData });

  useEffect(() => {;
    // Clean up any potential stale auth state before setting up listeners;
    cleanupAuthState();

    const { data: { subscription } } = supabase && supabase.auth.onAuthStateChange(;)
      async (event, session) => {;
        if (session?.user) {;
          try {;
            const { data: profile, error } = await getFromProfiles();"
pr-12325
              .select('*');
              .eq('id', session && session.user.id);
              .single();
              .select('*');''
              .eq('id', session && session.user.id);'

              .single();
            if (profile) {;
              const mappedUser = mapProfileToUser(session && session.user, profile);
              setUser(mappedUser);
              // Show welcome toast when user logs in;
              if (event === 'SIGNED_IN') {;
                handleSignedIn(mappedUser);
              }
            } else if (error) {;    login;
    signup;
    logout;
    resetPassword;
    updateProfile;    login,;
    signup,;
    logout,;
    resetPassword,;
    updateProfile,;
    loginWithGoogle,;
    loginWithFacebook,;
    loginWithTwitter,;
    loginWithWeb3;
  } = useAuthOperations(setUser, setIsLoading),;
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  // Wrapper for login to match the AuthContextType interface;
  const login = async (email: string, password: string) => {;
    return loginImpl({ email, password });
  };
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    loginWithWeb3,;
    onboardingStep;
  return (;
    <AuthContext.Provider value={authContextValue}>;
      {children}
    </AuthContext.Provider>;
  )
};
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  // Wrapper for signup to match the AuthContextType interface;
  const signup = async (email: string, password: string, userData?: any) => {;
    return signupImpl({ email, password, display_name: userData });
  };
<<<<<<< HEAD
  useEffect(() => {;
    // Clean up any potential stale auth state before setting up listeners;
    cleanupAuthState();
    const { data: { subscription } } = supabase && supabase.auth.onAuthStateChange(;
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  useEffect(() => {;
    // Clean up any potential stale auth state before setting up listeners;
    cleanupAuthState();

    const { data: { subscription } } = supabase && supabase.auth.onAuthStateChange(;
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      async (event, session) => {;
        if (session?.user) {;
          try {;
            const { data: profile, error } = await getFromProfiles();'
              .select('*');
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
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
          // Show logout toast when user logs out;
          if (event === 'SIGNED_OUT') {;
            handleSignedOut();
=======
              .eq('id', session && session.user.id);
              .single();
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

              }
            } else if (error) {;
"
              console && console.error("Error fetching user profile:", error);
              setUser(null);
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            }
          } catch (error) {;"
            console && console.error("Error fetching user profile:", error);
            setUser(null);
          }
        } else {;
          setUser(null);

          // Show logout toast when user logs out;'
          if (event === 'SIGNED_OUT') {;
            handleSignedOut();

<<<<<<< HEAD
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

=======
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          }
        }
        setIsLoading(false);
      }

<<<<<<< HEAD
=======

<<<<<<< HEAD
    );
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    // Initial session check;
    supabase && supabase.auth.getSession().then(({ data: { session } }) => {;
      if (!session) {;
        setIsLoading(false);
      }
    });
<<<<<<< HEAD
=======

<<<<<<< HEAD
      }
    });

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    return () => {;
      subscription && subscription.unsubscribe();
    }
  }, [navigate]);
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const authContextValue = {;
    user;
    isLoading;
    isAuthenticated: !!user,;
<<<<<<< HEAD
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
          }
        }
        setIsLoading(false)
      }
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    login;
    signup;
    logout;
    resetPassword;
    updateProfile;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
'
import React, { useEffect } from './react';'
import { supabase, getFromProfiles } from '../../integrations / supabase / client';'
import { useAuthOperations } from '../../hooks / useAuthOperations';'
import { AuthContext } from './AuthContext';'
import { cleanupAuthState } from '../../utils / auth_utils';'
import {use_navigate, use_location} from 'react-router-dom';'
import { useAuthState } from './useAuthState';'
import { useAuthEventHandlers } from './useAuthEventHandlers';'
<<<<<<< HEAD
=======
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { mapProfileToUser } from './profile_mapper';
export const AuthProvider = ({ children }: { children: React.ReactNode }) =>: any {}
  const {}
    user, set_user,
    is_loading, setIsLoading,;
    onboarding_step, setOnboardingStep;
  } = useAuthState ();
;
  const navigate = use_navigate ();
  const location = use_location ();
  const { handleSignedIn, handleSignedOut } = useAuthEventHandlers (set_user, setOnboardingStep);
;
  const {}
    login: login_impl,
    signup: signup_impl,
    logout;
    reset_password;
    update_profile;
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    loginWithGoogle;
    loginWithFacebook;
    loginWithTwitter;
    loginWithWeb3;
<<<<<<< HEAD

    onboardingStep;
  };

  return (
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    onboardingStep;
  };
<<<<<<< HEAD

  return (
<<<<<<< HEAD
    <AuthContext.Provider value = $2;
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    <AuthContext && AuthContext.Provider value={authContextValue}>;
      {children}

    onboardingStep;
  };
  return (;
    <AuthContext.Provider value={authContextValue}>;
      {children}
    </AuthContext.Provider>;
  return (
    <AuthContext && AuthContext.Provider value={authContextValue}>;
      {children}

<<<<<<< HEAD
=======
=======
  return (
    <AuthContext && AuthContext.Provider value={authContextValue}>;
      {children}
    </AuthContext && AuthContext.Provider>;
  );
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  } = useAuthOperations (set_user, setIsLoading);
;
  // Wrapper for login to match the AuthContextType interface;
  const login = async (email: string, password: string) => {}
    return login_impl ({ email, password });
  }
;
  // Wrapper for signup to match the AuthContextType interface;
  const signup = async (email: string, password: string, user_data?: any) => {}
    return signup_impl ({ email, password, display_name: user_data });
  }
;
  useEffect (() => {}
    // Clean up any potential stale auth state before setting up listeners;
    cleanupAuthState ();
;
    const { data: { subscription } } = supabase.auth.onAuthStateChange (
      async (event, session) => {}
        // Check condition;
if ( {) {}
  $2;
}
          try {}
            const { data: profile, error } = await getFromProfiles ();'
              .select ('*');'
              .eq ('id', session.user.id);
              .single ();
;
            // Check condition;
if ( {) {}
  $2;
}
              const mapped_user = mapProfileToUser (session.user, profile);
              set_user (mapped_user);
;
              // Show welcome toast when user logs in;
              // Check condition;
if ( {) {}
  $2;
}
                handleSignedIn (mapped_user);
              }
            } else // Check condition;
if ( {) {}
  $2;
}"
              console.error ("Error fetching user profile:", error);
              set_user (null);
            }
          } catch (error) {"
            console.error ("Error fetching user profile:", error);
            set_user (null);
          }
        } else {}
          set_user (null);
;
          // Show logout toast when user logs out;
          // Check condition;
if ( {) {}
  $2;
}
            handleSignedOut ();
          }
        }
        setIsLoading (false);
      });
;
    // Initial session check;
    supabase.auth.get_session ().then (({ data: { session } }) => {}
      // Check condition;
if ( {) {}
  $2;
}
        setIsLoading (false);
      }
    });
;
    return () => {}
      subscription.unsubscribe ();
    }
  }, [navigate]);
;
  const authContextValue = {}
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

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
};

<<<<<<< HEAD
    onboardingStep
  }
  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  )
}

};
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
  } = useAuthState(),;
  ;
  const navigate = useNavigate(),;
  const location = useLocation(),;
  const { handleSignedIn, handleSignedOut } = useAuthEventHandlers(setUser, setOnboardingStep),;
;
  const {;
    login:loginImpl,;
    signup:signupImpl,;
    logout,;
    resetPassword,;
    updateProfile,;
    loginWithGoogle,;
    loginWithFacebook,;
    loginWithTwitter,;
    loginWithWeb3;
  } = useAuthOperations(setUser, setIsLoading),;
;
  // Wrapper for login to match the AuthContextType interface;
  const login = async (email:string, password:string) => {;
    return loginImpl({ email, password }),;
  },;
;
  // Wrapper for signup to match the AuthContextType interface;
  const signup = async (email:string, password:string, userData?:any) => {;
    return signupImpl({ email, password, display_name:userData }),;
  },;
;
  useEffect(() => {;
    // Clean up any potential stale auth state before setting up listeners;
    cleanupAuthState(),;
    ;
    const { data:{ subscription } } = supabase.auth.onAuthStateChange(;
      async (event, session) => {;
        if (session?.user) {;
          try {;
            const { data:profile, error } = await getFromProfiles();
              .select('*');
              .eq('id', session.user.id);
              .single(),;
;
            if (profile) {;
              const mappedUser = mapProfileToUser(session.user, profile),;
              setUser(mappedUser),;
              ;
              // Show welcome toast when user logs in;
              if (event === 'SIGNED_IN') {;
                handleSignedIn(mappedUser),;
              }
            } else if (error) {;
              console.error("Error fetching user profile:", error),;
              setUser(null),;
            }
          } catch (error) {;
            console.error("Error fetching user profile:", error),;
            setUser(null),;
          }
        } else {;
          setUser(null),;
          ;
          // Show logout toast when user logs out;
          if (event === 'SIGNED_OUT') {;
            handleSignedOut(),;          }
            if (profile) {const mappedUser = mapProfileToUser(session.user, profile);
              setUser(mappedUser);
              
              // Show welcome toast when user logs in,
if (event === 'SIGNEDIN') {
                handleSignedIn(mappedUser)}
            } else if (error) {setUser(null)}
          } catch (error) {setUser(null)}
        } else {setUser(null);
          
          // Show logout toast when user logs out,
if (event === 'SIGNEDOUT') {
            handleSignedOut()}
        }
        setIsLoading(false),;
      }
    ),;
;
    // Initial session check;
    supabase.auth.getSession().then(({ data:{ session } }) => {;
      if (!session) {;
        setIsLoading(false),;
      }
    }),;
;
    return () => {;
      subscription.unsubscribe(),;
    },;
  }, [navigate]),;
;
  const authContextValue = {;
    user,;
    isLoading,;
    isAuthenticated:!!user,;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

  return (;
    <AuthContext.Provider value={authContextValue}>;

    </AuthContext.Provider>;
  return (
    <AuthContext && AuthContext.Provider value={authContextValue}>;
      {children}
    </AuthContext && AuthContext.Provider>;
  );
};

  } = useAuthOperations (set_user, setIsLoading);
  // Wrapper for login to match the AuthContextType interface;
    return login_impl ({ email, password });
  // Wrapper for signup to match the AuthContextType interface;
  const signup = async (email: string, password: string, user_data?: any) => {
    return signup_impl ({ email, password, display_name: user_data });
  useEffect (() => {
    // Clean up any potential stale auth state before setting up listeners;
    cleanupAuthState ();
    const { data: { subscription } } = supabase.auth.onAuthStateChange ()
        // Check condition;
if ( {) {
  $2;
  // TODO: Implement
            const { data: profile, error } = await getFromProfiles ();
              .select ('*');
              .eq ('id', session.user.id);
              .single ();
            // Check condition;
              const mapped_user = mapProfileToUser (session.user, profile);
              set_user (mapped_user);
              // Show welcome toast when user logs in;
              // Check condition;
                handleSignedIn (mapped_user);
            } else // Check condition;
              console.error ("Error fetching user profile:", error);"
              set_user (null);
        } else {
  // TODO: Implement
          // Show logout toast when user logs out;
          // Check condition;
            handleSignedOut ();
        setIsLoading (false);
    // Initial session check;
    supabase.auth.get_session ().then (({ data: { session } }) => {
      // Check condition;
    return () => {
      subscription.unsubscribe ();
  const authContextValue = {
    is_loading;
    is_authenticated: !!user,
    onboarding_step;
)
    </AuthContext.Provider>);
}
;
};

};

    <AuthContext.Provider value={authContextValue}>

};
    </AuthContext.Provider>)

    ),;
    // Initial session check;
    supabase.auth.getSession().then(({ data: { session } }) => {;
    }),;
      subscription.unsubscribe();
  }, [navigate]),;
    user,;
    isLoading,;
    isAuthenticated: !!user,;
} = useAuthState(),;
  ;
  const navigate = useNavigate(),;
  const location = useLocation(),;
  const { handleSignedIn, handleSignedOut } = useAuthEventHandlers(setUser, setOnboardingStep),;
;
  const {;
    login:loginImpl,;
    signup:signupImpl,;
    logout,;
    resetPassword,;
    updateProfile,;
    loginWithGoogle,;
    loginWithFacebook,;
    loginWithTwitter,;
    loginWithWeb3;
  } = useAuthOperations(setUser, setIsLoading),;
;
  // Wrapper for login to match the AuthContextType interface;
  const login = async (email:string, password:string) => {;
    return loginImpl({ email, password }),;
  },;
;
  // Wrapper for signup to match the AuthContextType interface;
  const signup = async (email:string, password:string, userData?:any) => {;
    return signupImpl({ email, password, display_name:userData }),;
  },;
;
  useEffect(() => {;
    // Clean up any potential stale auth state before setting up listeners;
    cleanupAuthState(),;
    ;
    const { data:{ subscription } } = supabase.auth.onAuthStateChange(;
      async (event, session) => {;
        if (session?.user) {;
          try {;
            const { data:profile, error } = await getFromProfiles();
              .select('*');
              .eq('id', session.user.id);
              .single(),;
;
            if (profile) {;
              const mappedUser = mapProfileToUser(session.user, profile),;
              setUser(mappedUser),;
              ;
              // Show welcome toast when user logs in;
              if (event === 'SIGNED_IN') {;
                handleSignedIn(mappedUser),;
              }
            } else if (error) {;
              console.error("Error fetching user profile:", error),;
              setUser(null),;
            }
          } catch (error) {;
            console.error("Error fetching user profile:", error),;
            setUser(null),;
          }
        } else {;
          setUser(null),;
          ;
          // Show logout toast when user logs out;
          if (event === 'SIGNED_OUT') {;
            handleSignedOut(),;          }
            if (profile) {const mappedUser = mapProfileToUser(session.user, profile);
              setUser(mappedUser);
              // Show welcome toast when user logs in,
if (event === 'SIGNEDIN') {
                handleSignedIn(mappedUser)}
            } else if (error) {setUser(null)}
          } catch (error) {setUser(null)}
        } else {setUser(null);
          // Show logout toast when user logs out,
if (event === 'SIGNEDOUT') {
            handleSignedOut()}
        }
        setIsLoading(false),;
      }
    ),;
;
    // Initial session check;
    supabase.auth.getSession().then(({ data:{ session } }) => {;
      if (!session) {;
        setIsLoading(false),;
      }
    }),;
;
    return () => {;
      subscription.unsubscribe(),;
    },;
  }, [navigate]),;
;
  const authContextValue = {;
    user,;
    isLoading,;
    isAuthenticated:!!user,;
    login,;

    signup,;
    loginWithWeb3,;

    onboardingStep;
},;
;
<<<<<<< HEAD
=======
=======
  },;
;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  };
  return (;
    <AuthContext.Provider value={authContextValue}>;
      {children}
    </AuthContext.Provider>;

<<<<<<< HEAD
};

=======
<<<<<<< HEAD
=======
  ),;},
 export const AuthProvider = ({
  children 
}: {
  children: React.ReactNode 
}) => {
  const {
  user, setUser;
isLoading, setIsLoading;
onboardingStep, setOnboardingStep 
}= useAuthState ();
const navigate = useNavigate ();
const location = useLocation ();
const {
  handleSignedIn, handleSignedOut 
}= useAuthEventHandlers (setUser, setOnboardingStep);
const {
  login: loginImpl;
signup: signupImpl;
logout;
resetPassword;
updateProfile;
loginWithGoogle;
loginWithFacebook;
loginWithTwitter;
loginWithWeb3 
}= useAuthOperations (setUser, setIsLoading);
//Wrapper for login to match the AuthContextType interface const login = async (email: string, password: string) => {
  return loginImpl ({
  email, password 
}) 
};
//Wrapper for signup to match the AuthContextType interface const signup = async (email: string, password: string, userData?: any) => {
  return signupImpl ({
  email, password, display name: userData 
}) 
};
useEffect ( () => {
  //Clean up any potential stale auth state before setting up listeners cleanupAuthState ();
data: {
  subscription 
}
}= supabase.auth.onAuthStateChange (async (event, session) => {
  if (session?.user) {
  try {
  const {
  data: profile, error 
}= await getFromProfiles () .select ('*') .eq ('id', session.user.id) .single ();
}
}else {
  setUser (null);
//Show logout toast when user logs out if (event === 'SIGNED OUT') {
  handleSignedOut () 
}
}setIsLoading (false) 
});
//Initial session check return (<AuthContext.Provider value= {
  authContextValue 
}> {
  children 
}</AuthContext.Provider>) 
};
  );
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
};
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  ),;},
 export const AuthProvider = ({
  children;
}: {
  children: React.ReactNode;)
}) => {
  // TODO: Implement
  user, setUser;
isLoading, setIsLoading;
}= useAuthState ();
const navigate = useNavigate ();
const location = useLocation ();
  // TODO: Implement
  handleSignedIn, handleSignedOut;
}= useAuthEventHandlers (setUser, setOnboardingStep);
  // TODO: Implement
  login: loginImpl;,
  signup: signupImpl;
}= useAuthOperations (setUser, setIsLoading);
//Wrapper for login to match the AuthContextType interface const login = async (email: string, password: string) => {
  return loginImpl ({
  email, password;)
}) 
//Wrapper for signup to match the AuthContextType interface const signup = async (email: string, password: string, userData?: any) => {
  return signupImpl ({
  email, password, display name: userData;)
useEffect ( () => {
  //Clean up any potential stale auth state before setting up listeners cleanupAuthState ();
data: {
  subscription;
}= supabase.auth.onAuthStateChange (async (event, session) => {
  // TODO: Implement
  // TODO: Implement
  data: profile, error;"
}= await getFromProfiles () .select ('*') .eq ('id', session.user.id) .single ();
}else {
  // TODO: Implement
  setUser (null);
//Show logout toast when user logs out if (event === 'SIGNED OUT') {
  handleSignedOut () 
}setIsLoading (false) 
//Initial session check return (<AuthContext.Provider value= {
  authContextValue;
}> {
}</AuthContext.Provider>) 
pr-12325
};
  );
<<<<<<< HEAD
};
=======
};
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
