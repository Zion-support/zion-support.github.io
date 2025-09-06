<<<<<<< HEAD
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
  permissions?: string[];
  company_id?: string;
  bio?: string;
  created_at?: string;
  updated_at?: string;
}
export interface UserProfile {
  id?: string;
  display_name?: string;
  email: string;
  user_type: string;
  profile_complete: boolean;
  created_at: string;
  updated_at: string;
  avatar_url?: string;
  bio?: string;
  avatar_url?: string;
  headline?: string;
  role?: string;
  permissions?: string[],
  company_id?: string;
}
// Update AuthContextType definition to match implementation;
export interface AuthContextType {
  user: UserDetails | null;
  is_loading: boolean;
  is_authenticated: boolean,
  login: (email: string, password: string) => Promise<{ data?: any, error?: any }>;
  signup: (email: string, password: string, user_data?: any) => Promise<{ error?: any }>;
  logout: () => Promise < void>,
  reset_password: (email: string) => Promise<{ error?: any }>;
  update_profile: (data: Partial < UserDetails>) => Promise<{ error?: any }>;
  loginWithGoogle: () => Promise < void>;
  loginWithFacebook: () => Promise < void>;
  loginWithTwitter: () => Promise < void>;
  loginWithWeb3: () => Promise < void>,
  sign_in?: (email: string, password: string) => Promise<{ error: any }>;
  sign_out?: () => Promise < void>;
  sign_up?: (email: string, password: string, user_data?: Partial < UserDetails>) => Promise<{ error: any }>;
}
=======
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
  updatedAt?:string,;}
;
export interface UserProfile {;
  id?:string,;
  displayName?:string,;
  email:string,;
  userType:string,;
  profileComplete:boolean,;
  createdAt:string,;
  updatedAt:string,;
  avatar_url?:string,;
  bio?:string,;
  avatarUrl?:string,;
  headline?:string,;
  role?:string,;
  permissions?:string[],;
  companyId?:string;
}
;
// Update AuthContextType definition to match implementation;
export interface AuthContextType {;
  user:UserDetails | null,;
  isLoading:boolean,;
  isAuthenticated:boolean,;
  login:(email:string, password:string) => Promise<{ data?:any, error?:any }>,;
  signup:(email:string, password:string, userData?:any) => Promise<{ error?:any }>,;
  logout:() => Promise<void>,;
  resetPassword:(email:string) => Promise<{ error?:any }>,;
  updateProfile:(data:Partial<UserDetails>) => Promise<{ error?:any }>,;
  loginWithGoogle:() => Promise<void>,;
  loginWithFacebook:() => Promise<void>,;
  loginWithTwitter:() => Promise<void>,;
  loginWithWeb3:() => Promise<void>,;
  signIn?:(email:string, password:string) => Promise<{ error:any }>,;
  signOut?:() => Promise<void>,;
  signUp?:(email:string, password:string, userData?:Partial<UserDetails>) => Promise<{ error:any }>,;
} 
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
