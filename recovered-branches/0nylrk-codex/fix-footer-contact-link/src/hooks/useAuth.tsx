<<<<<<< HEAD:src/hooks/useAuth.tsx
<<<<<<< HEAD

interface User {

  id: string;
  email: string;
  name: string;
  role: 'user' | 'admin' | 'moderator';
  userType?: string;
  displayName?: string;
:src/hooks/useAuth.tsx;
  avatarUrl?: string}
  avatarUrl?: string}

interface AuthState {

  user: User | null;
  isAuthenticated: boolean;
:src/hooks/useAuth.tsx;
  isLoading: boolean;
  isLoading: boolean}

}

export function useAuth(...args: unknown[]): unknown {;
  const [authState, setAuthState] = useState<AuthState>({;

    user: null,
    isAuthenticated: false,
    isLoading: true});
  useEffect(: unknown {;
    // Check if user is logged in (e.g., check localStorage, cookies, etc.);
:src/hooks/useAuth.tsx;

      if(storedUser && token) {;

        try {;
          setAuthState({;

            user,
            isAuthenticated: true,
:src/hooks/useAuth.tsx;
            isLoading: false})} catch(error) {;

          // console.error('Error parsing stored user:', error);
            isLoading: false,,
})} catch(error) {;
          console.error('Error parsing stored user:', error);
          setAuthState({;

            user: null,
            isAuthenticated: false,
:src/hooks/useAuth.tsx;
            isLoading: false})}
            isLoading: false,,
})}
      } else {;

        setAuthState({;

          user: null,
          isAuthenticated: false,
:src/hooks/useAuth.tsx;
          isLoading: false})}
    };
    checkAuth()}, []);
          isLoading: false,,
})}
    };
    checkAuth()}, []);
    setAuthState({;

      user: mockUser,
      isAuthenticated: true,
      isLoading: false});
    // Store user data in localStorage';
    localStorage.setItem('zion_user', JSON.stringify(mockUser));
    localStorage.setItem('authToken',mock-jwt-token');
:src/hooks/useAuth.tsx;
    return { success: true, user: mockUser }};
    // Clear localStorage';
    localStorage.removeItem('zion_user');
    localStorage.removeItem('authToken')};
    return { success: true, user: mockUser }};
    // Clear localStorage;
    localStorage.removeItem('zion_user');
    localStorage.removeItem('authToken')};
    setAuthState({;

      user: mockUser,
      isAuthenticated: true,
      isLoading: false});
    // Store user data in localStorage';
    localStorage.setItem('zion_user', JSON.stringify(mockUser));
    localStorage.setItem('authToken',mock-jwt-token');
    return { success: true, user: mockUser }};
:src/hooks/useAuth.tsx;
      setAuthState(prev => ({;

:src/hooks/useAuth.tsx;
        ...prev,
        user: updatedUser}));
      // Update localStorage';
      localStorage.setItem('zion_user', JSON.stringify(updatedUser))}
      // Update localStorage;
      localStorage.setItem('zion_user', JSON.stringify(updatedUser))}
  };
  return {;

    ...authState,
    login,
    logout,
    register,
:src/hooks/useAuth.tsx;
    updateProfile}}
';
    updateProfile,,
}}
=======
interface User { id: string; email: string; name: string; role: 'user' | 'admin' | 'moderator'; userType?: string; displayName?: string; avatarUrl?: string} interface AuthState { user: Use r | null; isAuthenticated: boolean; isLoading: boolean} export function useAuth(props: any) { const [authState,setAuthState] = useState<AuthState>({ user: nul l,isAuthenticated: fals e,isLoading: tru e }); useEffect(: unknown { :src/hooks/useAuth.tsx if(storedUser && token) { try { setAuthState({ user,isAuthenticated: tru e,:src/hooks/useAuth.tsx isLoading: fals e})} catch(error) { isLoading: fals e,})} catch(error) { console.error('Error parsing stored user:',error); setAuthState({ user: nul l,isAuthenticated: fals e,isLoading: fals e })} } catch (error) { console.error('Error parsing stored user:',error); setAuthState({ user: nul l,isAuthenticated: fals e,isLoading: fals e })} }; checkAuth()},[]); isLoading: fals e,})} }; checkAuth()},[]); setAuthState({ user: mockUse r,isAuthenticated: tru e,isLoading: fals e }); localStorage.setItem('zion_user',JSON.stringify(mockUser)); localStorage.setItem('authToken','mock-jwt-token'); return { success: tru e,user: mockUse r }}; localStorage.removeItem('zion_user'); localStorage.removeItem('authToken')}; return { success: tru e,user: mockUse r }}; localStorage.removeItem('zion_user'); localStorage.removeItem('authToken')}; const register = async (email: string,password: string,name: string) => { const mockUser: Use r = { id: '1',email,name,role: 'user',userType: 'individual',displayName: nam e,avatarUrl: '/default-avatar.png' }; setAuthState({ user: mockUse r,isAuthenticated: tru e,isLoading: fals e }); localStorage.setItem('zion_user',JSON.stringify(mockUser)); localStorage.setItem('authToken','mock-jwt-token'); return { success: tru e,user: mockUse r }}; const updateProfile = (props: any) => { if (authState.user) { const updatedUser = { ...authState.user,...updates }; setAuthState(prev => ({ ...prev,user: updatedUse r })); localStorage.setItem('zion_user',JSON.stringify(updatedUser))} }; return { ...authState,login,logout,register,:src/hooks/useAuth.tsx updateProfile}} ' updateProfile,}} </AuthState>
>>>>>>> origin/automation-improvements
=======
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { supabase } from "@/integrations/supabase/client";
import { AuthContext } from "@/context/auth/AuthContext";
import type { UserDetails as AuthUserDetails } from "@/types/auth";
// Define types for our context
export interface UserDetails {
  id?: string;
  name?: string;
  email?: string;
  userType?: string;
  displayName?: string;
  avatarUrl?: string;
  headline?: string;
  profileComplete?: boolean;
  role?: string;
}
;
export interface AuthContextType {;
  user: UserDetails | null,;
  isAuthenticated: boolean,;
  isLoading: boolean,;
  signIn: (email: string, password: string) => Promise<{ error: any }>,;
  signOut: () => Promise<void>,;
  signUp: (email: string, password: string, userData?: Partial<UserDetails>) => Promise<{ error: any }>,;
  // Aliases for compatibility with other components;
  login: (email: string, password: string) => Promise<{ error: any }>,;
  logout: () => Promise<void>,;
  signup: (email: string, password: string, userData?: Partial<UserDetails>) => Promise<{ error: any }>,;
  resetPassword: (email: string) => Promise<{ error: any }>,;
  updateProfile: (data: Partial<UserDetails>) => Promise<{ error: any }>,;
  loginWithGoogle: () => Promise<void>,;
  loginWithFacebook: () => Promise<void>,;
  loginWithTwitter: () => Promise<void>,;
  loginWithWeb3: () => Promise<void>;
}  // Mock auth functions for now - these would connect to Supabase in a real implementation

  const signIn = async (email: string, password: string) => {
    // This would be replaced with actual Supabase auth    // Mock implementation
    setUser({
      id: "google-user-id"
      email: "google@example.com"
      displayName: "Google User"
      name: "Google User"
      profileComplete: true
    })
  const loginWithFacebook = async () => {
    // // // console.log("Facebook login requested"),  const loginWithFacebook = async () => {
    // // // console.log("Facebook login requested"),
    // Mock implementation
    setUser({
      id: "facebook-user-id"
      email: "facebook@example.com"
      displayName: "Facebook User"
      name: "Facebook User"
      profileComplete: true
    })
  const loginWithTwitter = async () => {
    // // // console.log("Twitter login requested"),  const loginWithTwitter = async () => {
    // // // console.log("Twitter login requested"),
    // Mock implementation
    setUser({
      id: "twitter-user-id"
      email: "twitter@example.com"
      displayName: "Twitter User"

      name: "Twitter User"
      profileComplete: true;
    })

  };
  const signOut = async () => {;
    // This would be replaced with actual Supabase auth;
    console && console.log("Sign out attempted");
    setUser(null)
};

  const signUp = async (email: string, password: string, userData?: Partial<UserDetails>) => {;
    // This would be replaced with actual Supabase auth;
    console && console.log("Sign up attempted with:", email, userData);
    // Mock successful sign-up;
    setUser({ ;
      id: "mock-user-id", ;
      email, ;

  },

    // // // console.log("Web3 login requested"),
    const ethereum = (window as any).ethereum,
    if (!ethereum) {
// Custom hook to use the auth context
export function useAuth(): AuthContextType {

  const context = useContext(AuthContext);

  if (context === undefined) {"
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context;
}
>>>>>>> origin/automation/changelog:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useAuth.tsx
