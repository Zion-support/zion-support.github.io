
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

    logout;
    resetPassword;
    updateProfile;
    loginWithGoogle;
    loginWithFacebook;
    loginWithTwitter;
    loginWithWeb3;
  } = useAuthOperations(setUser, setIsLoading);



import React, { useEffect } from "react",
=======
export const AuthProvider = ({ children }: { children: React && React.ReactNode }) => {;  const { ;
    user, setUser, ;
    isLoading, setIsLoading, ;
    onboardingStep, setOnboardingStep ;import React, { useEffect } from "react",
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
import { supabase, getFromProfiles } from "../../integrations/supabase/client",
import { useAuthOperations } from "../../hooks/useAuthOperations",
import { AuthContext } from "./AuthContext",
import { cleanupAuthState } from "../../utils/authUtils",
import { useNavigate, useLocation } from 'react-router-dom',
import { useAuthState } from "./useAuthState",
import { useAuthEventHandlers } from "./useAuthEventHandlers",
<<<<<<< HEAD
import { mapProfileToUser } from "./profileMapper",



export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { 
    user, setUser, 
    isLoading, setIsLoading, 

    onboardingStep, setOnboardingStep 
  } = useAuthState(),

    onboardingStep, setOnboardingStep 
=======
import { mapProfileToUser } from "./profileMapper",export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { 
    user, setUser, 
    isLoading, setIsLoading, 
    onboardingStep, setOnboardingStep 
  } = useAuthState(),    onboardingStep, setOnboardingStep 
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
  }
  // Wrapper for signup to match the AuthContextType interface
  const signup = async (email: string, password: string, userData?: any) => {
    return signupImpl({ email, password, display_name: userData })
  }
  useEffect(() => {
<<<<<<< HEAD
    // Clean up any potential stale auth state before setting up listeners
    cleanupAuthState(),
    
    
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (session?.user) {
          try {
            const { data: profile, error } = await getFromProfiles()
              .select('*')
              .eq('id', session.user.id)


              .single(),

            if (profile) {
              const mappedUser = mapProfileToUser(session.user, profile),
              setUser(mappedUser),
              

              // Show welcome toast when user logs in
=======
    // Clean up any potential stale auth state before setting up listeners              // Show welcome toast when user logs in
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
  };

  // Wrapper for signup to match the AuthContextType interface;
  const signup = async (email: string, password: string, userData?: any) => {;
    return signupImpl({ email, password, display_name: userData });
  };

  useEffect(() => {;
    // Clean up any potential stale auth state before setting up listeners;
    cleanupAuthState();

    const { data: { subscription } } = supabase && supabase.auth.onAuthStateChange(;
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
              // Show welcome toast when user logs in;
              if (event === 'SIGNED_IN') {;
                handleSignedIn(mappedUser);
              }
<<<<<<< HEAD
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

          // Show logout toast when user logs out;
          if (event === 'SIGNED_OUT') {;
            handleSignedOut();
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


    login;
    signup;
    logout;
    resetPassword;
    updateProfile;
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
    loginWithGoogle;
    loginWithFacebook;
    loginWithTwitter;
    loginWithWeb3;

    onboardingStep;
  };


  return (
    <AuthContext && AuthContext.Provider value={authContextValue}>;
      {children}

    </AuthContext && AuthContext.Provider>;
  );
};

    onboardingStep;
  };
  return (;
    <AuthContext.Provider value={authContextValue}>;
      {children}
    </AuthContext.Provider>;
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


};

    onboardingStep
  }
  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  )
}

};
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
=======
            } else if (error) {;    login;
    signup;
    logout;
    resetPassword;
    updateProfile;    login,;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
  };
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  return (;
    <AuthContext.Provider value={authContextValue}>;
      {children}
    </AuthContext.Provider>;
<<<<<<< HEAD
  );
};



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
=======
  )
};

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
