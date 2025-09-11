



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

export const AuthProvider = ({ children }: { children: React && React.ReactNode }) => {;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

export const AuthProvider = ({ children }: { children: React && React.ReactNode }) => {;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const { ;
    user, setUser, ;
    isLoading, setIsLoading, ;
    onboardingStep, setOnboardingStep ;
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  } = useAuthState();

  const navigate = useNavigate();
  const location = useLocation();
  const { handleSignedIn, handleSignedOut } = useAuthEventHandlers(setUser, setOnboardingStep);

  const {;
    login: loginImpl,;
    signup: signupImpl,;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    logout;
    resetPassword;
    updateProfile;
    loginWithGoogle;
    loginWithFacebook;
    loginWithTwitter;
<<<<<<< HEAD
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    loginWithWeb3;
  } = useAuthOperations(setUser, setIsLoading);



=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { 
    user, setUser, 
    isLoading, setIsLoading, 
<<<<<<< HEAD
<<<<<<< HEAD
    onboardingStep, setOnboardingStep 
  } = useAuthState(),

  
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    onboardingStep, setOnboardingStep ;
  } = useAuthState();
    onboardingStep, setOnboardingStep 
  } = useAuthState(),
<<<<<<< HEAD
=======

    onboardingStep, setOnboardingStep 
  } = useAuthState(),

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  
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
    
<<<<<<< HEAD
<<<<<<< HEAD
    
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (session?.user) {
          try {
            const { data: profile, error } = await getFromProfiles()
              .select('*')
              .eq('id', session.user.id)
<<<<<<< HEAD


<<<<<<< HEAD

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              .single();
            if (profile) {
              const mappedUser = mapProfileToUser(session.user, profile);
              setUser(mappedUser);
<<<<<<< HEAD
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              .single(),

            if (profile) {
              const mappedUser = mapProfileToUser(session.user, profile),
              setUser(mappedUser),
              
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          }
        } else {
          setUser(null);
          // Show logout toast when user logs out
          if (event === 'SIGNED_OUT') {
            handleSignedOut()
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  // Wrapper for login to match the AuthContextType interface;
  const login = async (email: string, password: string) => {;
    return loginImpl({ email, password });
  };
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  // Wrapper for signup to match the AuthContextType interface;
  const signup = async (email: string, password: string, userData?: any) => {;
    return signupImpl({ email, password, display_name: userData });
  };
<<<<<<< HEAD
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  useEffect(() => {;
    // Clean up any potential stale auth state before setting up listeners;
    cleanupAuthState();

    const { data: { subscription } } = supabase && supabase.auth.onAuthStateChange(;
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      async (event, session) => {;
        if (session?.user) {;
          try {;
            const { data: profile, error } = await getFromProfiles();
              .select('*');
<<<<<<< HEAD
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          }
        }
        setIsLoading(false);
      }
<<<<<<< HEAD


<<<<<<< HEAD
    );
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    // Initial session check;
    supabase && supabase.auth.getSession().then(({ data: { session } }) => {;
      if (!session) {;
        setIsLoading(false);
      }
    });
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    );
    // Initial session check
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        setIsLoading(false)
      }
    });
<<<<<<< HEAD
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
=======

    return () => {;
      subscription && subscription.unsubscribe();
    }
  }, [navigate]);

  const authContextValue = {;
    user;
    isLoading;
    isAuthenticated: !!user,;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    login;
    signup;
    logout;
    resetPassword;
    updateProfile;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    loginWithGoogle;
    loginWithFacebook;
    loginWithTwitter;
    loginWithWeb3;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    onboardingStep;
  };
  return (
    <AuthContext && AuthContext.Provider value={authContextValue}>;
      {children}
    </AuthContext && AuthContext.Provider>;
  );
};
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

};

<<<<<<< HEAD
    onboardingStep
  }
  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
=======

    onboardingStep;
  };


  return (
    <AuthContext && AuthContext.Provider value={authContextValue}>;
      {children}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    </AuthContext.Provider>
  )
}

};
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
  },;
;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  };
  return (;
    <AuthContext.Provider value={authContextValue}>;
      {children}
    </AuthContext.Provider>;
<<<<<<< HEAD

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
};
<<<<<<< HEAD
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  );
};


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
