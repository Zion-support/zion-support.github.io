<<<<<<< HEAD
export interface UserDetails {

=======
<<<<<<< HEAD
export interface UserDetails {
export interface UserDetails {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
  companyId?: string;
  bio?: string;
  createdAt?: string;
  updatedAt?: string;
}
=======
  company_id?: string;

  permissions?: string[];
  company_id?: string;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

  permissions?: string[];
  company_id?: string;

<<<<<<< HEAD
export interface UserDetails {

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

  companyId?: string;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  bio?: string;
  createdAt?: string;
  updatedAt?: string;
}

  created_at?: string;
  updated_at?: string;
}

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
<<<<<<< HEAD
  permissions?: string[],
  companyId?: string;
  bio?: string;
  createdAt?: string;
  updatedAt?: string
}
export interface UserProfile {

export interface UserProfile {;
  id?: string;
  displayName?: string;
  email: string;
  userType: string;
  profileComplete: boolean;
  createdAt: string;
  updatedAt: string;
  avatar_url?: string;
  bio?: string;
  avatarUrl?: string;
  headline?: string;
  role?: string;

  permissions?: string[]

  companyId?: string
}
// Update AuthContextType definition to match implementation
export interface AuthContextType {;
  user: UserDetails | null;
  isLoading: boolean;

  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<{ data?: any, error?: any }>;
  signup: (email: string, password: string, userData?: any) => Promise<{ error?: any }>;
  logout: () => Promise<void>
  resetPassword: (email: string) => Promise<{ error?: any }>;
  updateProfile: (data: Partial<UserDetails>) => Promise<{ error?: any }>;
  loginWithGoogle: () => Promise<void>;
  loginWithFacebook: () => Promise<void>;
  loginWithTwitter: () => Promise<void>;
  loginWithWeb3: () => Promise<void>
  signIn?: (email: string, password: string) => Promise<{ error: any }>;
  signOut?: () => Promise<void>;

  signUp?: (email: string, password: string, userData?: Partial<UserDetails>) => Promise<{ error: any }>
}
export interface UserDetails {;
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
  permissions?: string[],
  company_id?: string;
}
;
export interface UserProfile {;
  id?: string,;
  displayName?: string,;
  email: string,;
  userType: string,;
  profileComplete: boolean,;
  createdAt: string,;
  updatedAt: string,;
  avatar_url?: string,;
  bio?: string,;
  avatarUrl?: string,;
  headline?: string,;
  role?: string,;
  permissions?: string[],;
  companyId?: string;
}
;
// Update AuthContextType definition to match implementation;
export interface AuthContextType {;
  user: UserDetails | null,;
  isLoading: boolean,;
  isAuthenticated: boolean,;
  login: (email: string, password: string) => Promise<{ data?: any, error?: any }>,;
  signup: (email: string, password: string, userData?: any) => Promise<{ error?: any }>,;
  logout: () => Promise<void>,;
  resetPassword: (email: string) => Promise<{ error?: any }>,;
  updateProfile: (data: Partial<UserDetails>) => Promise<{ error?: any }>,;
  loginWithGoogle: () => Promise<void>,;
  loginWithFacebook: () => Promise<void>,;
  loginWithTwitter: () => Promise<void>,;
  loginWithWeb3: () => Promise<void>,;
  signIn?: (email: string, password: string) => Promise<{ error: any }>,;
  signOut?: () => Promise<void>;
  signUp?: (email: string, password: string, userData?: Partial<UserDetails>) => Promise<{ error: any }>;
=======

}
<<<<<<< HEAD

  permissions?: string[],

  permissions?: string[],
  companyId?: string;
  bio?: string;
  createdAt?: string;

export interface UserProfile {;
  id?: string;
  displayName?: string;
  email: string;
  userType: string;
  profileComplete: boolean;
  createdAt: string;
  updatedAt: string;
  avatar_url?: string;
  bio?: string;
  avatarUrl?: string;
  headline?: string;
  role?: string;

  permissions?: string[]

export interface AuthContextType {;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
// Update AuthContextType definition to match implementation;
export interface AuthContextType {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  user: UserDetails | null;
  isLoading: boolean;

  login: (email: string, password: string) => Promise<{ data?: any, error?: any }>;
  signup: (email: string, password: string, userData?: any) => Promise<{ error?: any }>;
  logout: () => Promise<void>
  resetPassword: (email: string) => Promise<{ error?: any }>;
  updateProfile: (data: Partial<UserDetails>) => Promise<{ error?: any }>;
  loginWithGoogle: () => Promise<void>;
  loginWithFacebook: () => Promise<void>;
  loginWithTwitter: () => Promise<void>;
  loginWithWeb3: () => Promise<void>
  signIn?: (email: string, password: string) => Promise<{ error: any }>;
  signOut?: () => Promise<void>;

  signUp?: (email: string, password: string, userData?: Partial<UserDetails>) => Promise<{ error: any }>

<<<<<<< HEAD
}

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
export interface UserDetails {;

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
<<<<<<< HEAD
export interface UserProfile {;
  id?: string,;
  displayName?: string,;
  email: string,;
  userType: string,;
  profileComplete: boolean,;
  createdAt: string,;
  updatedAt: string,;
  avatar_url?: string,;
  bio?: string,;
  avatarUrl?: string,;
  headline?: string,;
  role?: string,;
  permissions?: string[],;
  companyId?: string;

}
;
}
export interface UserDetails {;

  company_id?: string;

  // TODO: Implement
export interface UserDetails {;
  permissions?: string[],

  created_at?: string;
  updated_at?: string;
  display_name?: string;
  email: string;,
  user_type: string;
  profile_complete: boolean;,
  created_at: string;
  updated_at: string;
  avatar_url?: string;

export interface UserProfile {
  // TODO: Implement
export interface UserProfile {;
  userType: string;
  profileComplete: boolean;,
  createdAt: string;
  updatedAt: string;

  permissions?: string[]

// Update AuthContextType definition to match implementation;
export interface AuthContextType {;
  user: UserDetails | null;,
  isLoading: boolean;

  signUp?: (email: string, password: string, userData?: Partial<UserDetails>) => Promise<{ error: any }>

  login: (email: string, password: string) => Promise<{ data?: any, error?: any }>,;
  signup: (email: string, password: string, userData?: any) => Promise<{ error?: any }>,;
  logout: () => Promise<void>,;
  resetPassword: (email: string) => Promise<{ error?: any }>,;
  updateProfile: (data: Partial<UserDetails>) => Promise<{ error?: any }>,;

  loginWithGoogle: () => Promise<void>,;
  loginWithFacebook: () => Promise<void>,;
  loginWithTwitter: () => Promise<void>,;
  loginWithWeb3: () => Promise<void>,;
  signIn?: (email: string, password: string) => Promise<{ error: any }>,;
  signUp?: (email: string, password: string, userData?: Partial<UserDetails>) => Promise<{ error: any }>;

  user: UserDetails | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (
    email: string,
    password: string,

  ) => Promise<{ data?: any; error?: any }>;
  signup: (,
  email: string,
    password: string,
    userData?: any,)
  ) => Promise<{ error?: any }>;
  logout: () => Promise<void>;

  loginWithWeb3: () => Promise<void>;
    userData?: Partial<UserDetails>,

  ) => Promise<{ error: any }>;
}

;

export interface UserDetails {;

pr-12325
=======
<<<<<<< HEAD
}
export interface UserDetails {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
pr-12325
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
  companyId?:string;
// Update AuthContextType definition to match implementation;
pr-12325
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  user:UserDetails | null,;
  isLoading:boolean,;
  isAuthenticated:boolean,;
  login:(email:string, password:string) => Promise<{ data?:any, error?:any }>,;
  signup:(email:string, password:string, userData?:any) => Promise<{ error?:any }>,;
  logout:() => Promise<void>,;
  resetPassword:(email:string) => Promise<{ error?:any }>,;
  updateProfile:(data:Partial<UserDetails>) => Promise<{ error?:any }>,;
<<<<<<< HEAD

pr-12325
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  loginWithGoogle:() => Promise<void>,;
  loginWithFacebook:() => Promise<void>,;
  loginWithTwitter:() => Promise<void>,;
  loginWithWeb3:() => Promise<void>,;
  signIn?:(email:string, password:string) => Promise<{ error:any }>,;
  signOut?:() => Promise<void>,;
  signUp?:(email:string, password:string, userData?:Partial<UserDetails>) => Promise<{ error:any }>,;
} 
<<<<<<< HEAD

}
}
;
}
=======
}
}
;
}
;
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
