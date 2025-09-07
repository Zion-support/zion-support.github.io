  id?: string;
  name?: string;
  email?: string;
  user_type?: string;
  display_name?: string;
  avatar_url?: string;
  headline?: string;
  profile_complete?: boolean;
  role?: string;

  id?: string;
  name?: string;
  email?: string;
  userType?: string;
  displayName?: string;
  avatarUrl?: string;
  headline?: string;
  profileComplete?: boolean;
  role?: string;
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react","
import { supabase } from "@/integrations/supabase/client","
import { AuthContext } from "@/context/auth/AuthContext";"
import type { UserDetails as AuthUserDetails } from "@/types/auth";"
// Define types for our context,
export interface UserDetails {
  }
  id?: string;
  name?: string;
  email?: string;
  userType?: string;
  displayName?: string;
  avatarUrl?: string;
  headline?: string;
  profileComplete?: boolean;
  role?: string;
  permissions?: string[],
  companyId?: string;
  bio?: string;
  createdAt?: string;
  updatedAt?: string
}
export interface AuthContextType {
}
import { AuthContext } from "@/context/auth/AuthContext","
import type { UserDetails as AuthUserDetails } from "@/types/auth","
// Define types for our context,
export interface UserDetails {
  }
  id?: string,
  name?: string,
  email?: string,
  userType?: string,
  displayName?: string,
  avatarUrl?: string,
  headline?: string,
  profileComplete?: boolean,
  role?: string,
  permissions?: string[],
  companyId?: string,
  bio?: string,
  createdAt?: string,
  updatedAt?: string,
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";"
import { supabase } from "@/integrations/supabase/client";"
import { AuthContext } from "@/context/auth/AuthContext",;"
import type { UserDetails as AuthUserDetails } from "@/types/auth",;"
// Define types for our context;
export interface UserDetails {;
  }
  id?: string,;
  name?: string,;
  email?: string,;
  userType?: string,;
  displayName?: string,;
  avatarUrl?: string,;
  headline?: string,;
  profileComplete?: boolean,;
  role?: string,;
  permissions?: string[],;
  companyId?: string,;
  bio?: string,;
  createdAt?: string,;
  updatedAt?: string;
}
;
export interface AuthContextType {;
  }
  "user": UserDetails | null,;
  "isAuthenticated": boolean,;
  "isLoading": boolean,;
  "signIn": ("email": string, "password": string) => Promise<{ "error": any }>,;
  "signOut": () => Promise<void>,;
  "signUp": ("email": string, "password": string, userData?: Partial<UserDetails>) => Promise<{ "error": any }>,;
  // Aliases for compatibility with other components;
  "login": ("email": string, "password": string) => Promise<{ "error": any }>,;
  "logout": () => Promise<void>,;
  "signup": ("email": string, "password": string, userData?: Partial<UserDetails>) => Promise<{ "error": any }>,;
  "resetPassword": ("email": string) => Promise<{ "error": any }>,;
  "updateProfile": ("data": Partial<UserDetails>) => Promise<{ "error": any }>,;
  "loginWithGoogle": () => Promise<void>,;
  "loginWithFacebook": () => Promise<void>,;
  "loginWithTwitter": () => Promise<void>,;
  "loginWithWeb3": () => Promise<void>;
}  // Mock auth functions for now - these would connect to Supabase in a real implementation,
const signOut = async () => {;
    // This would be replaced with actual Supabase auth;
    }
    console && console.log("Sign out attempted");"
    setUser(null)
};
  const signUp = async ("email": string, "password": string, userData?: Partial<UserDetails>) => {;
    // This would be replaced with actual Supabase auth;
    }
    console && console.log("Sign up attempted "with":", email, userData);"
    // Mock successful sign-up;
    setUser({ ;
      }
      "id": "mock-user-id", ;"
      email, ;

  },
    // // // console.log("Web3 login requested"),"
const ethereum = (window as any).ethereum,;
    if (!ethereum) {
// Custom hook to use the auth context
}
export function useAuth(): AuthContextType {
  }
  const context = useContext(AuthContext);
  if (context === undefined) {
}
throw new Error("useAuth must be used within an AuthProvider");"
  }
return context;
}
// Custom hook to use the auth context,
export function useAuth(): AuthContextType {;
  }
  if (context === undefined) {
}
throw new Error("useAuth must be used within an AuthProvider");"
      console.warn("No wallet detected"),"
return;
;
// Create a provider component;
export function AuthProvider() {;
  }
  const [user, setUser] = useState<UserDetails | null>(null),;
  const [isLoading, setIsLoading] = useState(true),;
  // Mock auth functions for now - these would connect to Supabase in a real implementation;
  const signIn = async ("email": string, "password": string) => {;
    // This would be replaced with actual Supabase auth;
    // // // console.log("Sign in attempted "with":", email),;"
    // Mock successful sign-in;
    }
    setUser({;
      }
      "id": "mock-user-id",;"
      email,;
      "displayName": "Mock User",;"
      "name": "Mock User",;"
      "avatarUrl": "",;"
      "profileComplete": true,;
      "role": "enterprise_admin",;"
      "permissions": ["billing_access", "admin_access", "team_management"],;"
      "companyId": "company-123";"
    }),;
    return { "error": null }
  },;
    // This would be replaced with actual Supabase auth;
    // // // console.log("Sign out attempted"),;"
    }
    setUser(null);
  },;
    // This would be replaced with actual Supabase auth;
    // // // console.log("Sign up attempted "with":", email, userData),;"
    // Mock successful sign-up;
    }
    setUser({;
      }
      "id": "mock-user-id",;"
      email,;
      "displayName": userData?.name || "New User",;"
      "name": userData?.name || "New User",;"
      "userType": userData?.userType,;
      "profileComplete": false;
    });
    return { "error": null }
  };
  const resetPassword = async ("email": string) => {;
    // Mock implementation;
    }
    console && console.log("Password reset requested "for":", email);"
    return { "error": null }
  };
  const updateProfile = async ("data": Partial<UserDetails>) => {;
    // Mock implementation;
    }
    console && console.log("Profile update requested "with":", data);"
    if (user) {;
      }
      setUser({ ...user, ...data });      "displayName": "Google User",;"
      "name": "Google User",;"
      "profileComplete": true;
    })
};  },;  const loginWithFacebook = async () => {;
    }
    console && console.log("Facebook login requested");"
    // Mock implementation;
    setUser({ ;
      }
      "id": "facebook-user-id", ;"
      "email": "facebook@example && example.com", ;"
      "displayName": "Facebook User", ;"
      "name": "Facebook User",;"
      "profileComplete": true;
    })
};
  const loginWithTwitter = async () => {;
    }
    console && console.log("Twitter login requested");"
    // Mock implementation;
    setUser({;
      }
      "id": "twitter-user-id",;"
      "email": "twitter@example.com",;"
      "displayName": "Twitter User",;"
      "name": "Twitter User",;"
      "profileComplete": true;
    });      const accounts = await ethereum.request ({ "method": 'eth_requestAccounts' }),'
      const address = accounts[0];
      await ethereum.request ({
        }
        "method": 'personal_sign','
        "params": [address, address];
      });
      set_user ({
        }
        "id": address,
        "display_name": address,
        "profile_complete": true;
      });
    console.log($2);
    if (user) {
      setUser({ ...user, ...data })
    }
    return { error: null}
  },

  const loginWithGoogle = async () => {
    console.log($2);
    // Mock implementation
    setUser({ 
      id: "google-user-id", 
      email: "google@example.com", 
      displayName: "Google User",
      name: "Google User",
      profileComplete: true})
  },

  const loginWithFacebook = async () => {
    console.log($2);
    // Mock implementation
    setUser({ 
      id: "facebook-user-id", 
      email: "facebook@example.com", 
      displayName: "Facebook User", 
      name: "Facebook User",
      profileComplete: true})
  },

  const loginWithTwitter = async () => {
    console.log($2);
    // Mock implementation
    setUser({
      id: "twitter-user-id",
      email: "twitter@example.com",
      displayName: "Twitter User",
      name: "Twitter User",
      profileComplete: true})
  },

  const loginWithWeb3 = async () => {
    console.log($2);
    const ethereum = $2;
    if (!ethereum) {
      console.warn($2);
      return
    }
    try {
      const accounts = await ethereum.request($2);
      const address = $2;
      await ethereum.request($2);
      setUser({
        id: address,
        displayName: address,
        profileComplete: true})
    } catch (err) {
      console.error('Web3 login failed', err)
    }
  },

  // Check for existing session on mount
  useEffect(() => {
    // Mock loading state and then set a null user to simulate no session
    setIsLoading($2);
    setTimeout(() => {
      setUser($2);
      setIsLoading(false)
    }, 100)
  }, []),

  const value = $2;
    isAuthenticated: !!user,
    isLoading,
    signIn,
    signOut,
    signUp,
    // Add aliases for compatibility
    login: signIn
    logout: signOut
    signup: signUp
    resetPassword;
    updateProfile;
    loginWithGoogle;
    loginWithFacebook;
    loginWithTwitter;
    } catch (err) {
      }
      console.error ('Web3 login failed', err);'
    }
  }    isLoading;
    signIn;
    signOut;
    signUp;
    loginWithWeb3
  },

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth(): AuthContextType {
  const context = useContext($2);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
;
