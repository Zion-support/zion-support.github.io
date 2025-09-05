<<<<<<< HEAD
<<<<<<< HEAD
import React, { useEffect } from "react",
import { supabase, getFromProfiles } from "../../integrations/supabase/client",
import { useAuthOperations } from "../../hooks/useAuthOperations",
import { AuthContext } from "./AuthContext",
import { cleanupAuthState } from "../../utils/authUtils",
import { useNavigate, useLocation } from 'react-router-dom',
import { useAuthState } from "./useAuthState",
import { useAuthEventHandlers } from "./useAuthEventHandlers",
import { mapProfileToUser } from "./profileMapper",
=======
import React, { useEffect } from &quot;react&quot;;
import { supabase, getFromProfiles } from &quot;../../integrations/supabase/client&quot;;
import { useAuthOperations } from &quot;../../hooks/useAuthOperations&quot;;
import { AuthContext } from &quot;./AuthContext&quot;;
import { cleanupAuthState } from &quot;../../utils/authUtils&quot;;
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuthState } from &quot;./useAuthState&quot;;
import { useAuthEventHandlers } from &quot;./useAuthEventHandlers&quot;;
import { mapProfileToUser } from &quot;./profileMapper&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { 
    user, setUser, 
    isLoading, setIsLoading, 
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
=======
import React, {_useEffect} from "react";

export const _AuthProvider = (_{_children}: {_children: React.ReactNode}) => {_const { 
    user, _setUser, _isLoading, _setIsLoading, _onboardingStep, _setOnboardingStep} = useAuthState();
  
  const _navigate = useNavigate();
  const _location = useLocation();
  const {_handleSignedIn, _handleSignedOut} = useAuthEventHandlers(setUser, setOnboardingStep);

  const {_login: loginImpl, _signup: signupImpl, _logout, _resetPassword, _updateProfile, _loginWithGoogle, _loginWithFacebook, _loginWithTwitter, _loginWithWeb3} = useAuthOperations(setUser, setIsLoading);

  // Wrapper for login to match the AuthContextType interface
  const _login = async (_email: string, _password: string) => {_return loginImpl({ email, _password});
  };

  // Wrapper for signup to match the AuthContextType interface
  const _signup = async (_email: string, _password: string, _userData?: unknown) => {_return signupImpl({ email, _password, _display_name: userData});
  };

  useEffect__(() => {_// Clean up any potential stale auth state before setting up listeners
    cleanupAuthState();
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    const { data: { subscription} } = supabase.auth.onAuthStateChange(_async (event, _session) => {_if (session?.user) {
          try {
            const { data: profile, _error} = await getFromProfiles()
              .select('*')
              .eq('id', session.user.id)
              .single(),

<<<<<<< HEAD
            if (profile) {
              const mappedUser = mapProfileToUser(session.user, profile),
              setUser(mappedUser),
              
              // Show welcome toast when user logs in
              if (event === 'SIGNED_IN') {
                handleSignedIn(mappedUser)
              }
            } else if (error) {
<<<<<<< HEAD
              console.error("Error fetching user profile:", error),
              setUser(null)
            }
          } catch (error) {
            console.error("Error fetching user profile:", error),
            setUser(null)
=======
              console.error(&quot;Error fetching user profile:&quot;, error);
              setUser(null);
            }
          } catch (error) {
            console.error(&quot;Error fetching user profile:&quot;, error);
            setUser(null);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
          }
        } else {
          setUser(null),
          
          // Show logout toast when user logs out
          if (event === 'SIGNED_OUT') {
            handleSignedOut()
          }
=======
            if (profile) {_const _mappedUser = mapProfileToUser(session.user, _profile);
              setUser(mappedUser);
              
              // Show welcome toast when user logs in
              if (event === 'SIGNED_IN') {
                handleSignedIn(mappedUser);}
            } else if (error) {_setUser(null);}
          } catch (error) {_setUser(null);}
        } else {_setUser(null);
          
          // Show logout toast when user logs out
          if (event === 'SIGNED_OUT') {
            handleSignedOut();}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        }
        setIsLoading(false)
      }
    ),

    // Initial session check
<<<<<<< HEAD
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        setIsLoading(false)
      }
    }),

    return () => {
      subscription.unsubscribe()
    }
  }, [navigate]),

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
  },
=======
    supabase.auth.getSession().then(_({_data: { session} }) => {_if (!session) {
        setIsLoading(false);}
    });

    return () => {_subscription.unsubscribe();};
  }, [navigate]);

  const _authContextValue = {_user, _isLoading, _isAuthenticated: !!user, _login, _signup, _logout, _resetPassword, _updateProfile, _loginWithGoogle, _loginWithFacebook, _loginWithTwitter, _loginWithWeb3, _onboardingStep};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (
    <AuthContext.Provider value={_authContextValue}>
      {_children}
    </AuthContext.Provider>
  )
},