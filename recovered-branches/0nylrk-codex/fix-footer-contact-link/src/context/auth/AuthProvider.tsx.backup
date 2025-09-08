<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import {cleanupAuthState} from "../../utils/authUtils";
import {useNavigate, useLocation} from 'react-router-dom';"
import {useAuthState} from "./useAuthState";"
import {useAuthEventHandlers} from "./useAuthEventHandlers";"
import {mapProfileToUser} from "./profileMapper";

<<<<<<< HEAD
=======
    user, setUser, ;
    isLoading, setIsLoading, ;

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {


  } = useAuthState();

  const navigate = useNavigate();
  const location = useLocation();
  const { handleSignedIn, handleSignedOut } = useAuthEventHandlers(setUser, setOnboardingStep);

  const {;
    login: loginImpl,;
    signup: signupImpl,;

>>>>>>> origin/cursor/delete-old-data-records-6bba
    logout;
    resetPassword;
    updateProfile;
    loginWithGoogle;
    loginWithFacebook;
    loginWithTwitter;

<<<<<<< HEAD

=======

  // Wrapper for login to match the AuthContextType interface
  const login = async (email: string, password: string) => {
    return loginImpl({ email, password })
  }
  // Wrapper for signup to match the AuthContextType interface


    loginWithTwitter,
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


>>>>>>> origin/cursor/delete-old-data-records-6bba
import React, { useEffect } from "react",

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


=======


export const AuthProvider = ({ children }: { children: React.ReactNode }) => {

>>>>>>> origin/cursor/delete-old-data-records-6bba
  const { 
    user, setUser, 
    isLoading, setIsLoading, 

<<<<<<< HEAD

=======
    onboardingStep, setOnboardingStep 
  } = useAuthState($2);
  const navigate = useNavigate($2);
  const location = useLocation($2);
  const { handleSignedIn, handleSignedOut } = useAuthEventHandlers($2);
  const {
    login: loginImpl,
    signup: signupImpl,
  
>>>>>>> origin/cursor/delete-old-data-records-6bba
  const navigate = useNavigate(),
  const location = useLocation(),
  const { handleSignedIn, handleSignedOut } = useAuthEventHandlers(setUser, setOnboardingStep),

  const {}
    login: loginImpl,
    signup: signupImpl,
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    logout,
    resetPassword,
    updateProfile,
    loginWithGoogle,
    loginWithFacebook,
    loginWithTwitter,
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {}
        if (session?.user) {}
          try {}
            const { data: profile, error } = await getFromProfiles()'
              .select('*')'
              .eq('id', session.user.id)


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
              .single(),

            if (profile) {}

              const mappedUser = mapProfileToUser(session.user, profile),
              setUser(mappedUser),

<<<<<<< HEAD
              

              // Show welcome toast when user logs in


=======

              // Show welcome toast when user logs in

>>>>>>> origin/cursor/delete-old-data-records-6bba
              if (event === 'SIGNED_IN') {
                handleSignedIn(mappedUser)
              }
            } else if (error) {
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
              console.error("Error fetching user profile:", error),
              setUser(null)
            }
          } catch (error) {
            console.error("Error fetching user profile:", error),
            setUser(null)
<<<<<<< HEAD

=======

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


        } else {
          setUser(null);
          // Show logout toast when user logs out
          if (event === 'SIGNED_OUT') {
            handleSignedOut()


>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

  const navigate = useNavigate(),;
  const location = useLocation(),;
  const { handleSignedIn, handleSignedOut } = useAuthEventHandlers(setUser, setOnboardingStep),;
  const {;
    login: loginImpl,;
    signup: signupImpl,;
pr-12325

=======
    }
    "login": loginImpl,;
    "signup": signupImpl,;
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
  // Wrapper for login to match the AuthContextType interface;
  const login = async (email: string, password: string) => {;
    return loginImpl({ email, password });
  };

<<<<<<< HEAD

=======
    loginWithWeb3,;
    onboardingStep;
  return (;
    <AuthContext.Provider value={authContextValue}>;
      {children}
    </AuthContext.Provider>;
  )
};
  // Wrapper for signup to match the AuthContextType interface;
  const signup = async (email: string, password: string, userData?: any) => {;
    return signupImpl({ email, password, display_name: userData });
  };
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

  useEffect(() => {;
    // Clean up any potential stale auth state before setting up listeners;
    cleanupAuthState();

    const { data: { subscription } } = supabase && supabase.auth.onAuthStateChange(;


>>>>>>> origin/cursor/delete-old-data-records-6bba
      async (event, session) => {;
        if (session?.user) {;
          try {;
            const { data: profile, error } = await getFromProfiles();'
              .select('*');
<<<<<<< HEAD


=======


              }
            } else if (error) {;
"
              console && console.error("Error fetching user profile:", error);
              setUser(null);
>>>>>>> origin/cursor/delete-old-data-records-6bba
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




=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
    // Initial session check;
    supabase && supabase.auth.getSession().then(({ data: { session } }) => {;
      if (!session) {;
        setIsLoading(false);
      }
    });
<<<<<<< HEAD



=======
      }
    });

>>>>>>> origin/cursor/delete-old-data-records-6bba
    return () => {;
      subscription && subscription.unsubscribe();
    }
  }, [navigate]);
<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  const authContextValue = {;
    user;
    isLoading;
    isAuthenticated: !!user,;
<<<<<<< HEAD



=======
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
    login;
    signup;
    logout;
    resetPassword;
    updateProfile;
<<<<<<< HEAD



=======

'
import React, { useEffect } from './react';'
import { supabase, getFromProfiles } from '../../integrations / supabase / client';'
import { useAuthOperations } from '../../hooks / useAuthOperations';'
import { AuthContext } from './AuthContext';'
import { cleanupAuthState } from '../../utils / auth_utils';'
import {use_navigate, use_location} from 'react-router-dom';'
import { useAuthState } from './useAuthState';'
import { useAuthEventHandlers } from './useAuthEventHandlers';'

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


>>>>>>> origin/cursor/delete-old-data-records-6bba
    loginWithGoogle;
    loginWithFacebook;
    loginWithTwitter;
    loginWithWeb3;
<<<<<<< HEAD



    onboardingStep;
  };

    <AuthContext && AuthContext.Provider value={authContextValue}>;
      {children}
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

    onboardingStep;
  };

<<<<<<< HEAD



=======
  return (
    onboardingStep;
  };

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

  };
  return (;
    <AuthContext.Provider value={authContextValue}>;
      {children}
    </AuthContext.Provider>;


};
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

};
>>>>>>> origin/cursor/delete-old-data-records-6bba
