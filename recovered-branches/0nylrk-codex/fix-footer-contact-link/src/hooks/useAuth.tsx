
import React, { create_context, useContext, useState, useEffect, ReactNode } from './react';'
import { supabase } from '@/integrations / supabase / client';'
import { AuthContext } from '@/context / auth / AuthContext';
import type { UserDetails as AuthUserDetails } from "@/types / auth";
// Define types for our context;

  id?: string;
  name?: string;
  email?: string;
  userType?: string;
  displayName?: string;
  avatarUrl?: string;
  headline?: string;
  profileComplete?: boolean;
  role?: string;"
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react","
import { supabase } from "@/integrations/supabase/client",";
import { AuthContext } from "@/context/auth/AuthContext";"
import type { UserDetails as AuthUserDetails } from "@/types/auth";
// Define types for our context;
export interface UserDetails {};

  id?: string;
  name?: string;
  email?: string;
  userType?: string;
  displayName?: string;
  avatarUrl?: string;
  headline?: string;
  profileComplete?: boolean;
  role?: string;


import React, { create_context, useContext, useState, useEffect, ReactNode } from './react';
import { supabase } from '@/integrations / supabase / client';
import { AuthContext } from '@/context / auth / AuthContext';
import type { UserDetails as AuthUserDetails } from "@/types / auth";
// Define types for our context;
export interface UserDetails {
  id?: string;
  name?: string;
  email?: string;
  user_type?: string;
  display_name?: string;
  avatar_url?: string;
  headline?: string;
  profile_complete?: boolean;
  role?: string;
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import {supabase} from "@/integrations/supabase/client";
import {AuthContext} from "@/context/auth/AuthContext";
import type { UserDetails as AuthUserDetails } from "@/types/auth";
// Define types for our context
export interface UserDetails {;
  id?: string;
  name?: string;
  email?: string;
  userType?: string;
  displayName?: string;
  avatarUrl?: string;
  headline?: string;
  profileComplete?: boolean;
  role?: string;
  permissions?: string[];
  companyId?: string;
  bio?: string;
  createdAt?: string;
  updatedAt?: string
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react",
import { supabase } from "@/integrations/supabase/client",
import { AuthContext } from "@/context/auth/AuthContext";
import type { UserDetails as AuthUserDetails } from "@/types/auth";
// Define types for our context
export interface UserDetails {

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

  // Mock auth functions for now - these would connect to Supabase in a real implementation

  const signIn = async (email: string, password: string) => {
    // This would be replaced with actual Supabase auth


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
}
// Create a provider component;
export function AuthProvider(): any ({ children }: { children: ReactNode }) {;
  const [user, setUser] = useState<UserDetails | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  // Mock auth functions for now - these would connect to Supabase in a real implementation;
  const signIn = async (email: string, password: string) => {;
    // This would be replaced with actual Supabase auth;"
    console && console.log("Sign in attempted with:", email);
    // Mock successful sign-in;
    setUser({ ;"
      id: "mock-user-id", ;
      email, ;"
      displayName: "Mock User", ;"
      name: "Mock User",;"
      avatarUrl: "",;
      profileComplete: true,;"
      role: "enterprise_admin",;

"
      permissions: ["billing_access", "admin_access", "team_management"];"
      companyId: "company-123";
    });
    return { error: null }
    // // // console.log("Sign in attempted with:", email),
    // Mock successful sign-in
    setUser({
      id: "mock-user-id"
      email
      displayName: "Mock User"
      name: "Mock User"
      avatarUrl: ""
      profileComplete: true
      role: "enterprise_admin"
      permissions: ["billing_access", "admin_access", "team_management"];
    setUser({ 
    setUser({ "
      id: "mock-user-id", 
      email, "
      displayName: "Mock User", "
      name: "Mock User","
      avatarUrl: "",
      profileComplete: true,"
      role: "enterprise_admin","
      permissions: ["billing_access", "admin_access", "team_management"],

  user: UserDetails | null
  isAuthenticated: boolean
  isLoading: boolean
  signIn: (email: string, password: string) => Promise<{ error: any }>
  signOut: () => Promise<void>
  signUp: (email: string, password: string, userData?: Partial<UserDetails>) => Promise<{ error: any }>
  // Aliases for compatibility with other components
  login: (email: string, password: string) => Promise<{ error: any }>
  logout: () => Promise<void>
  signup: (email: string, password: string, userData?: Partial<UserDetails>) => Promise<{ error: any }>
  resetPassword: (email: string) => Promise<{ error: any }>
  updateProfile: (data: Partial<UserDetails>) => Promise<{ error: any }>
  loginWithGoogle: () => Promise<void>
  loginWithFacebook: () => Promise<void>
  loginWithTwitter: () => Promise<void>

  loginWithWeb3: () => Promise<void>
}
// Create a provider component
export function AuthProvider({ children }: { children: ReactNode}) {
  const [user, setUser] = useState<UserDetails | null>(null),
  const [isLoading, setIsLoading] = useState($2);
  // Mock auth functions for now - these would connect to Supabase in a real implementation

  const signIn = async (email: string, password: string) => {
    // This would be replaced with actual Supabase auth
    console.log($2);
    // Mock successful sign-in
    setUser($2);
    return { error: null}
  },


  const signUp = async (email: string, password: string, userData?: Partial<UserDetails>) => {}
    // This would be replaced with actual Supabase auth"
    console.log("Sign up attempted with:", email, userData);

      companyId: "company-123"
    }),
    return { error: null }

  const signOut = async () => {}
    // This would be replaced with actual Supabase auth"
    // // // console.log("Sign out attempted"),
    setUser(null)

  const signUp = async (email: string, password: string, userData?: Partial<UserDetails>) => {}
    // This would be replaced with actual Supabase auth"
    // // // console.log("Sign up attempted with:", email, userData),


  },



  const signUp = async (email: string, password: string, userData?: Partial<UserDetails>) => {
    // This would be replaced with actual Supabase auth
    console.log("Sign up attempted with:", email, userData);
      companyId: "company-123"
    }),
    return { error: null }
  }
  },

  const signOut = async () => {
    // This would be replaced with actual Supabase auth
    // // // console.log("Sign out attempted"),
    setUser(null)
  }
  },

  const signUp = async (email: string, password: string, userData?: Partial<UserDetails>) => {
    // This would be replaced with actual Supabase auth

    // Mock successful sign-up;
    setUser({"
      id: "mock-user-id"
      email"
      displayName: userData?.name |"New User""
      name: userData?.name |"New User"


  },

  const resetPassword = async (email: string) => {}
    // Mock implementation"
    console.log("Password reset requested for:", email);
    return { error: null }
  const updateProfile = async (data: Partial<UserDetails>) => {}
    // Mock implementation"
    console.log("Profile update requested with:", data);

    }),
    return { error: null }
  }
  },

  const resetPassword = async (email: string) => {}
    // Mock implementation"
    // // // console.log("Password reset requested for:", email),
    return { error: null }

  const updateProfile = async (data: Partial<UserDetails>) => {}
    // Mock implementation"
    // // // console.log("Profile update requested with:", data),


    if (user) {}
      setUser({ ...user, ...data })
    }
    return { error: null }

  const loginWithGoogle = async () => {

    // // // console.log("Google login requested"),

    // Mock implementation

    setUser({
      id: "google-user-id"
      email: "google@example.com"
      displayName: "Google User"

      name: "Google User"
      profileComplete: true;
    })

  },

  const loginWithFacebook = async () => {
    console.log("Facebook login requested");


  const loginWithFacebook = async () => {
    // // // console.log("Facebook login requested"),
    // Mock implementation
    setUser({
      id: "facebook-user-id"
      email: "facebook@example.com"
      displayName: "Facebook User"

      name: "Facebook User"
      profileComplete: true;
    })

  },

  const loginWithTwitter = async () => {
    console.log("Twitter login requested");


  const loginWithTwitter = async () => {
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
    setUser(null);
  };
  const signUp = async (email: string, password: string, userData?: Partial<UserDetails>) => {;
    // This would be replaced with actual Supabase auth;
    console && console.log("Sign up attempted with:", email, userData);
    // Mock successful sign-up;
    setUser({ ;
      id: "mock-user-id", ;
      email, ;

  },


  const loginWithWeb3 = async () => {
    // // // console.log("Web3 login requested"),
    const ethereum = (window as any).ethereum,
    if (!ethereum) {

      console.warn("No wallet detected");
      return
    }
    try {
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
      const address = accounts[0];
      await ethereum.request({
        method: 'personal_sign'
        params: [address, address]
      });
      setUser({
        id: address
        displayName: address
        profileComplete: true
      })
    } catch (err) {
      console.error('Web3 login failed', err)
    }
  }
  // Check for existing session on mount
  useEffect(() => {
    // Mock loading state and then set a null user to simulate no session
    setIsLoading(true);
    setTimeout(() => {
      setUser(null);
      setIsLoading(false)
    }, 100)
  }, []);
  const value = {
    user;
    isAuthenticated: !!user
    isLoading;
    signIn;
    signOut;
    signUp;
    // Add aliases for compatibility
    login: signIn
    logout: signOut
    signup: signUp
    resetPassword;
    updateProfile;
    loginWithGoogle;
    loginWithFacebook;
    loginWithTwitter;
    loginWithWeb3
  }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

// Custom hook to use the auth context
export function useAuth(): AuthContextType {

  const context = useContext(AuthContext);

  if (context === undefined) {"
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context;
}

// Custom hook to use the auth context;
export function useAuth(): AuthContextType {;
  const context = useContext(AuthContext);
  if (context === undefined) {"
    throw new Error("useAuth must be used within an AuthProvider")

// Custom hook to use the auth context;
export function useAuth(): AuthContextType {;
  const context = useContext(AuthContext);
  if (context === undefined) {"
    throw new Error("useAuth must be used within an AuthProvider")

// Custom hook to use the auth context
export function useAuth(): AuthContextType {;
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")

      console.warn("No wallet detected"),
      return;
;
// Create a provider component;
export function AuthProvider() { return null; }
    }),;
    return { error: null }
  },;
  const signOut = async () => {;
    // This would be replaced with actual Supabase auth;"
    // // // console.log("Sign out attempted"),;
    setUser(null);
  },;
  const signUp = async (email: string, password: string, userData?: Partial<UserDetails>) => {;
    // This would be replaced with actual Supabase auth;"
    // // // console.log("Sign up attempted with:", email, userData),;
    // Mock successful sign-up;
    setUser({;"
      id: "mock-user-id",;
      email,;

      displayName: userData?.name || "New User",;
      name: userData?.name || "New User",;
      userType: userData?.userType,;
      profileComplete: false;

    });
    return { error: null }
  };
  const resetPassword = async (email: string) => {;
    // Mock implementation;"
    console && console.log("Password reset requested for:", email);
    return { error: null }
  };
  const updateProfile = async (data: Partial<UserDetails>) => {;
    // Mock implementation;"
    console && console.log("Profile update requested with:", data);
    if (user) {;

  permissions?: string[];
  company_id?: string;
  bio?: string;
  created_at?: string;
  updated_at?: string;

  user: UserDetails | null,
  is_authenticated: boolean,
  is_loading: boolean,
      setUser({ ...user, ...data });      displayName: "Google User",;
      name: "Google User",;
      profileComplete: true;
    })
};  },;  const loginWithFacebook = async () => {;
    console && console.log("Facebook login requested");
    // Mock implementation;
    setUser({ ;
      id: "facebook-user-id", ;
      email: "facebook@example && example.com", ;
      displayName: "Facebook User", ;
      name: "Facebook User",;
      profileComplete: true;
    })
};
  const loginWithTwitter = async () => {;
    console && console.log("Twitter login requested");
    // Mock implementation;
    setUser({;
      id: "twitter-user-id",;
      email: "twitter@example.com",;
      displayName: "Twitter User",;
      name: "Twitter User",;
      profileComplete: true;
    });      const accounts = await ethereum.request ({ method: 'eth_requestAccounts' }),
      const address = accounts[0];
      await ethereum.request ({
        method: 'personal_sign',
        params: [address, address];
      });
      set_user ({
        id: address,
        display_name: address,
        profile_complete: true;
      });
    } catch (err) {
      console.error ('Web3 login failed', err);
    }
  }    isLoading;
    signIn;
    signOut;
    signUp;
</void>
  signUp: (email: string, password: string, userData?: Partial<UserDetails>) => Promise<{ error: any }>,;
</UserDetails>
  login: (email: string, password: string) => Promise<{ error: any }>,;
  logout: () => Promise<void>,;
</void>
  signup: (email: string, password: string, userData?: Partial<UserDetails>) => Promise<{ error: any }>,;
</UserDetails>
  resetPassword: (email: string) => Promise<{ error: any }>,;
  updateProfile: (data: Partial<UserDetails>) => Promise<{ error: any }>,;
</UserDetails>
  loginWithGoogle: () => Promise<void>,;
</void>
  loginWithFacebook: () => Promise<void>,;
</void>
  loginWithTwitter: () => Promise<void>,;
</void>
  loginWithWeb3: () => Promise<void>;
</void>
  signIn: (email: string, password: string) => Promise<{ error: any }>
  signOut: () => Promise<void>
  signUp: (email: string, password: string, userData?: Partial<UserDetails>) => Promise<{ error: any }>

  login: (email: string, password: string) => Promise<{ error: any }>
  logout: () => Promise<void>
  signup: (email: string, password: string, userData?: Partial<UserDetails>) => Promise<{ error: any }>

  resetPassword: (email: string) => Promise<{ error: any }>
  updateProfile: (data: Partial<UserDetails>) => Promise<{ error: any }>

  loginWithGoogle: () => Promise<void>
  loginWithFacebook: () => Promise<void>
  loginWithTwitter: () => Promise<void>

  loginWithWeb3: () => Promise<void>
  const [user, setUser] = useState<UserDetails | null>(null),

  const [user, setUser] = useState<UserDetails | null>(null);

  const signUp = async (email: string, password: string, userData?: Partial<UserDetails>) => {

  const updateProfile = async (data: Partial<UserDetails>) => {

  const signUp = async (email: string, password: string, userData?: Partial<UserDetails>) => {;

  const [user, setUser] = useState<UserDetails | null>(null),;

  const updateProfile = async (data: Partial<UserDetails>) => {;

  sign_in: (email: string, password: string) => Promise<{ error: any }>,
  sign_out: () => Promise < void>,

  // Aliases for compatibility with other components;
  login: (email: string, password: string) => Promise<{ error: any }>,
  logout: () => Promise < void>,
  signup: (email: string, password: string, user_data?: Partial < UserDetails>) => Promise<{ error: any }>,
  reset_password: (email: string) => Promise<{ error: any }>,
  update_profile: (data: Partial < UserDetails>) => Promise<{ error: any }>,
  loginWithGoogle: () => Promise < void>,
  loginWithFacebook: () => Promise < void>,
  loginWithTwitter: () => Promise < void>,
  loginWithWeb3: () => Promise < void>;
// Create a provider component;

      company_id: "company - 123";
    });
    return { error: null }
  }
;

    console.log ("Sign out attempted");
    set_user (null);
  }
;

  const sign_up = async (email: string, password: string, user_data?: Partial < UserDetails>) => {
    // This would be replaced with actual Supabase auth;"
    console.log ("Sign up attempted with:", email, user_data);"
    // Mock successful sign - up;

    console.log ("Password reset requested for:", email);
    return { error: null }
  }
;

  const update_profile = async (data: Partial < UserDetails>) => {
    // Mock implementation;"
    console.log ("Profile update requested with:", data);"
    // Check condition;
if ( {) {

      name: "Google User",
      profile_complete: true;
    });
  }
;

      name: "Facebook User",
      profile_complete: true;
    });
  }
;

      name: "Twitter User",
      profile_complete: true;
    });
  }
;

    const ethereum = (window as any).ethereum;
    // Check condition;
      console.warn ("No wallet detected");"
      return;

    }
    return { error: null }
  };
  const loginWithGoogle = async () => {;"
    console && console.log("Google login requested");"
    // Mock implementation;
    setUser({ ;
      id: "google-user-id", ;
      email: "google@example && example.com", ;

    }),;
  },;
  const resetPassword = async (email: string) => {;

    // // // console.log("Password reset requested for:", email),;
    return { error: null }
  },;
  const updateProfile = async (data: Partial<UserDetails>) => {;

    // // // console.log("Profile update requested with:", data),;
    if (user) {;
      setUser({ ...user, ...data });
    }
    return { error: null }
  },;

      displayName: "Google User",;

      name: "Google User",;
      profileComplete: true;
    })
};  },;  const loginWithFacebook = async () => {;

    console && console.log("Facebook login requested");
    // Mock implementation;
    setUser({ ;"
      id: "facebook-user-id", ;"
      email: "facebook@example && example.com", ;"
      displayName: "Facebook User", ;"
      name: "Facebook User",;
      profileComplete: true;

  const loginWithTwitter = async () => {;

    console && console.log("Twitter login requested");
    // Mock implementation;
    setUser({;"
      id: "twitter-user-id",;

      console.error ('Web3 login failed', err);
    }

  },;
  const loginWithWeb3 = async () => {;"
    // // // console.log("Web3 login requested"),;
    const ethereum = (window as any).ethereum,;
    if (!ethereum) {;"

      console.warn("No wallet detected"),;
      return;
    }

      setUser({;
        id: address,;
        displayName: address,;
        profileComplete: true;
      });
    } catch (err) {;

      console && console.error('Web3 login failed', err);
    }
  };

  // Check for existing session on mount;
  useEffect(() => {;
    // Mock loading state and then set a null user to simulate no session;

    setIsLoading(true);
    setTimeout(() => {;
      setUser(null);
      setIsLoading(false);
    }, 100);
  }, []);

    isLoading;
    signIn;
    signOut;
    signUp;

    // Add aliases for compatibility;
    login: signIn,;
    logout: signOut,;
    signup: signUp,;

    resetPassword;
    updateProfile;
    loginWithGoogle;
    loginWithFacebook;
    loginWithTwitter;

;
  // Check for existing session on mount;
  useEffect (() => {}
    // Mock loading state and then set a null user to simulate no session;
    setIsLoading (true);
    set_timeout (() => {}
      set_user (null);
      setIsLoading (false);
    }, 100);
  }, []);
;
  const value = {}
    user;
    is_authenticated: !!user,
    is_loading;
    sign_in;
    sign_out;
    sign_up;
    // Add aliases for compatibility;
    login: sign_in,
    logout: sign_out,
    signup: sign_up,
    reset_password;
    update_profile;
    loginWithGoogle;
    loginWithFacebook;
    loginWithTwitter;
    loginWithWeb3;

  }
;
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

    loginWithWeb3;
  };

  return <AuthContext && AuthContext.Provider value={value}>{children}</AuthContext && AuthContext.Provider>;
}

// Custom hook to use the auth context;
export function useAuth(): any (): AuthContextType {;
  const context = useContext(AuthContext);
  if (context === undefined) {;"
    throw new Error("useAuth must be used within an AuthProvider");

  const value = {;
    user;
    isAuthenticated: !!user,;

const value = {;
    user;
    isAuthenticated: !!user,;
    isLoading;
    signIn;
    signOut;
    signUp;

    // Add aliases for compatibility;
    login: signIn,;
    logout: signOut,;
    signup: signUp,;

    resetPassword;
    updateProfile;
    loginWithGoogle;
    loginWithFacebook;
    loginWithTwitter;

;
  // Check for existing session on mount;
  useEffect (() => {
    // Mock loading state and then set a null user to simulate no session;
    setIsLoading (true);
    set_timeout (() => {
      set_user (null);
      setIsLoading (false);
    }, 100);
  }, []);
;
  const value = {
    user;
    is_authenticated: !!user,
    is_loading;
    sign_in;
    sign_out;
    sign_up;
    // Add aliases for compatibility;
    login: sign_in,
    logout: sign_out,
    signup: sign_up,
    reset_password;
    update_profile;
    loginWithGoogle;
    loginWithFacebook;
    loginWithTwitter;
    loginWithWeb3;

  }
;
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

    loginWithWeb3;
  };
    // Mock implementation;"
    // // // console.log("Password reset requested for:", email),;"

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;

  return <AuthContext && AuthContext.Provider value={value}>{children}</AuthContext && AuthContext.Provider>;

// Custom hook to use the auth context;
export function useAuth(): any (): AuthContextType {;
  const context = useContext(AuthContext);
  if (context === undefined) {;
    throw new Error("useAuth must be used within an AuthProvider");

  }
  return context;
}
// Custom hook to use the auth context;
export function use_auth (): AuthContextType {
  const context = useContext (AuthContext);
  // Check condition
if ( {) {
  $2
}
    throw new Error ("use_auth must be used within an AuthProvider");
  }
  return context;
}
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react",;
import { supabase } from "@/integrations/supabase/client",;
import { AuthContext } from "@/context/auth/AuthContext",;
import type { UserDetails as AuthUserDetails } from "@/types/auth",;
;
// Define types for our context;
export interface UserDetails {;
  id?:string,;
  name?:string,;
  email?:string,;
  userType?:string,;
  displayName?:string,;
  avatarUrl?:string,;
  headline?:string,;
  profileComplete?:boolean,;
  role?:string,;
  permissions?:string[],;
  companyId?:string,;
  bio?:string,;
  createdAt?:string,;
  updatedAt?:string,;
}
;

      console.warn("No wallet detected"),
      return;
;
// Create a provider component;
export function AuthProvider() { return null; }
    }),;
    return { error: null }
  },;
  const signOut = async () => {;
    // This would be replaced with actual Supabase auth;"
    // // // console.log("Sign out attempted"),;
    setUser(null);
  },;
  const signUp = async (email: string, password: string, userData?: Partial<UserDetails>) => {;
    // This would be replaced with actual Supabase auth;"
    // // // console.log("Sign up attempted with:", email, userData),;
    // Mock successful sign-up;
    setUser({;"
      id: "mock-user-id",;
      email,;
      displayName: userData?.name || "New User",;
      name: userData?.name || "New User",;
      userType: userData?.userType,;
      profileComplete: false;
    });
    return { error: null }
  };
  const resetPassword = async (email: string) => {;
    // Mock implementation;
    console && console.log("Password reset requested for:", email);
    return { error: null }
  };
  const updateProfile = async (data: Partial<UserDetails>) => {;
    // Mock implementation;
    console && console.log("Profile update requested with:", data);
    if (user) {;
      setUser({ ...user, ...data });
    });
    return { error: null }
  };
  const resetPassword = async (email: string) => {;
    // Mock implementation;"
    console && console.log("Password reset requested for:", email);
    return { error: null }
  };
  const updateProfile = async (data: Partial<UserDetails>) => {;
    // Mock implementation;"
    console && console.log("Profile update requested with:", data);
    if (user) {;

  permissions?: string[];
  company_id?: string;
  bio?: string;
  created_at?: string;
  updated_at?: string;

  user: UserDetails | null,
  is_authenticated: boolean,
  is_loading: boolean,

    // Mock implementation;
    setUser({ ;
      id: "facebook-user-id", ;
      email: "facebook@example && example.com", ;
      displayName: "Facebook User", ;
      name: "Facebook User",;
      profileComplete: true;

    })
};
  const loginWithTwitter = async () => {;
    console && console.log("Twitter login requested");
    // Mock implementation;
    setUser({;
      id: "twitter-user-id",;
      email: "twitter@example.com",;

      const address = accounts[0];
      await ethereum.request ({
        method: 'personal_sign',
        params: [address, address];
      });
      set_user ({
        id: address,
        display_name: address,
        profile_complete: true;
      });
    } catch (err) {
      console.error ('Web3 login failed', err);
    }

  },;
  const resetPassword = async (email: string) => {;

    // // // console.log("Password reset requested for:", email),;
    return { error: null }
  },;
  const updateProfile = async (data: Partial<UserDetails>) => {;

    // // // console.log("Profile update requested with:", data),;
    if (user) {;
      setUser({ ...user, ...data });
    }
    return { error: null }
  },;

      displayName: "Google User",;

      name: "Google User",;
      profileComplete: true;
    })
};  },;  const loginWithFacebook = async () => {;

    console && console.log("Facebook login requested");
    // Mock implementation;
    setUser({ ;"
      id: "facebook-user-id", ;"
      email: "facebook@example && example.com", ;"
      displayName: "Facebook User", ;"
      name: "Facebook User",;
      profileComplete: true;

  const loginWithTwitter = async () => {;

    console && console.log("Twitter login requested");
    // Mock implementation;
    setUser({;"
      id: "twitter-user-id",;

      console.error ('Web3 login failed', err);
    }

  },;
  const loginWithWeb3 = async () => {;"
    // // // console.log("Web3 login requested"),;
    const ethereum = (window as any).ethereum,;
    if (!ethereum) {;"

      console.warn("No wallet detected"),;
      return;
    }
    try {;
      const accounts = await ethereum && ethereum.request({ method: 'eth_requestAccounts' }),;
      const address = accounts[0];
      await ethereum && ethereum.request({;
        method: 'personal_sign',;
        params: [address, address];
      });
    try {;
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' }),;
      const address = accounts[0],;
      await ethereum.request({;
        method: 'personal_sign',;
        params: [address, address];
      }),;
      setUser({;
        id: address,;
        displayName: address,;
        profileComplete: true;
      });
    } catch (err) {;


      console && console.error('Web3 login failed', err);
    }
  };

  // Check for existing session on mount;
  useEffect(() => {;
    // Mock loading state and then set a null user to simulate no session;

    setIsLoading(true);
    setTimeout(() => {;
      setUser(null);
      setIsLoading(false);
    }, 100);
  }, []);

    isLoading;
    signIn;
    signOut;
    signUp;

    // Add aliases for compatibility;
    login: signIn,;
    logout: signOut,;
    signup: signUp,;

    resetPassword;
    updateProfile;
    loginWithGoogle;
    loginWithFacebook;
    loginWithTwitter;

;
  // Check for existing session on mount;
  useEffect (() => {}
    // Mock loading state and then set a null user to simulate no session;
    setIsLoading (true);
    set_timeout (() => {}
      set_user (null);
      setIsLoading (false);
    }, 100);
  }, []);
;
  const value = {}
    user;
    is_authenticated: !!user,
    is_loading;
    sign_in;
    sign_out;
    sign_up;
    // Add aliases for compatibility;
    login: sign_in,
    logout: sign_out,
    signup: sign_up,
    reset_password;
    update_profile;
    loginWithGoogle;
    loginWithFacebook;
    loginWithTwitter;
    loginWithWeb3;

  }
;
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

    loginWithWeb3;
  };

  return <AuthContext && AuthContext.Provider value={value}>{children}</AuthContext && AuthContext.Provider>;
}

// Custom hook to use the auth context;
export function useAuth(): any (): AuthContextType {;
  const context = useContext(AuthContext);
  if (context === undefined) {;"
    throw new Error("useAuth must be used within an AuthProvider");

  const value = {;
    user;
    isAuthenticated: !!user,;

    isLoading;
    signIn;
    signOut;
    signUp;
    // Add aliases for compatibility;
    login: signIn,;
    logout: signOut,;
    signup: signUp,;
    resetPassword;
    updateProfile;
    loginWithGoogle;
    loginWithFacebook;
    loginWithTwitter;
;
  // Check for existing session on mount;
  useEffect (() => {
    // Mock loading state and then set a null user to simulate no session;
    setIsLoading (true);
    set_timeout (() => {
      set_user (null);
      setIsLoading (false);
    }, 100);
  }, []);
;
  const value = {
    user;
    is_authenticated: !!user,
    is_loading;
    sign_in;
    sign_out;
    sign_up;
    // Add aliases for compatibility;
    login: sign_in,
    logout: sign_out,
    signup: sign_up,
    reset_password;
    update_profile;
    loginWithGoogle;
    loginWithFacebook;
    loginWithTwitter;
    loginWithWeb3;
  }
;
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
    loginWithWeb3;
  };

// Custom hook to use the auth context;
export function useAuth(): any (): AuthContextType {;
  const context = useContext(AuthContext);
  if (context === undefined) {;
    throw new Error("useAuth must be used within an AuthProvider");

  }
  return context;
}
// Custom hook to use the auth context;
export function use_auth (): AuthContextType {
  const context = useContext (AuthContext);
  // Check condition
if ( {) {
  $2
}
    throw new Error ("use_auth must be used within an AuthProvider");
  }
  return context;
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react",;
import { supabase } from "@/integrations/supabase/client",;
import { AuthContext } from "@/context/auth/AuthContext",;
import type { UserDetails as AuthUserDetails } from "@/types/auth",;
;
// Define types for our context;
export interface UserDetails {;
  id?:string,;
  name?:string,;
  email?:string,;
  userType?:string,;
  displayName?:string,;
  avatarUrl?:string,;
  headline?:string,;
  profileComplete?:boolean,;
  role?:string,;
  permissions?:string[],;
  companyId?:string,;
  bio?:string,;
  createdAt?:string,;
  updatedAt?:string,;
}

;
export interface AuthContextType {;
  user:UserDetails | null,;
  isAuthenticated:boolean,;
  isLoading:boolean,;
  signIn:(email:string, password:string) => Promise<{ error:any }>,;
  signOut:() => Promise<void>,;
  signUp:(email:string, password:string, userData?:Partial<UserDetails>) => Promise<{ error:any }>,;


  login:(email:string, password:string) => Promise<{ error:any }>,;
  logout:() => Promise<void>,;
  signup:(email:string, password:string, userData?:Partial<UserDetails>) => Promise<{ error:any }>,;

  resetPassword:(email:string) => Promise<{ error:any }>,;
  updateProfile:(data:Partial<UserDetails>) => Promise<{ error:any }>,;


  loginWithGoogle:() => Promise<void>,;
  loginWithFacebook:() => Promise<void>,;
  loginWithTwitter:() => Promise<void>,;
  loginWithWeb3:() => Promise<void>;


// Custom hook to use the auth context
export function useAuth(): AuthContextType {
  const context = useContext(AuthContext),
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
;
// Custom hook to use the auth context;
export function useAuth(): AuthContextType {;
  const context = useContext(AuthContext);
  if (context === undefined) {;
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
;

;
