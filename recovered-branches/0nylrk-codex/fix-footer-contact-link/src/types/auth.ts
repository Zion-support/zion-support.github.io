<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
export interface UserDetails {
=======
export interface UserDetails {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
  updatedAt?: string;
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8

  permissions?: string[];
  company_id?: string;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
export interface UserDetails {
=======



export interface UserDetails {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
  permissions?: string[],
  companyId?: string;
  bio?: string;
  createdAt?: string;
  updatedAt?: string;
}
<<<<<<< HEAD
<<<<<<< HEAD
export interface UserProfile {

export interface UserProfile {;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

  permissions?: string[];
  company_id?: string;
<<<<<<< HEAD
<<<<<<< HEAD
=======

  bio?: string;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

  bio?: string;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  created_at?: string;
  updated_at?: string;
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
  permissions?: string[];
  companyId?: string;
}

  permissions?: string[],
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  company_id?: string;

=======
  company_id?: string;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  permissions?: string[],
  companyId?: string;
  bio?: string;
  createdAt?: string;
<<<<<<< HEAD
  updatedAt?: string;
}
export interface UserProfile {};
=======
  updatedAt?: string
}
export interface UserProfile {

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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

<<<<<<< HEAD
  companyId?: string;
}
// Update AuthContextType definition to match implementation;
=======
  companyId?: string
}
// Update AuthContextType definition to match implementation
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
export interface AuthContextType {;
  user: UserDetails | null;
  isLoading: boolean;

<<<<<<< HEAD
  isAuthenticated: boolean;
=======
  isAuthenticated: boolean
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
}
=======
  company_id?: string;}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  company_id?: string;}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
export interface UserDetails {;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
// Update AuthContextType definition to match implementation;
export interface AuthContextType {};
=======
// Update AuthContextType definition to match implementation;
export interface AuthContextType {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  user: UserDetails | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (
    email: string,
    password: string,
  ) => Promise<{ data?: any; error?: any }>;
  signup: (
    email: string,
    password: string,
    userData?: any,
  ) => Promise<{ error?: any }>;
  logout: () => Promise<void>;
  resetPassword: (email: string) => Promise<{ error?: any }>;
  updateProfile: (data: Partial<UserDetails>) => Promise<{ error?: any }>;
  loginWithGoogle: () => Promise<void>;
  loginWithFacebook: () => Promise<void>;
  loginWithTwitter: () => Promise<void>;
  loginWithWeb3: () => Promise<void>;
  signIn?: (email: string, password: string) => Promise<{ error: any }>;
  signOut?: () => Promise<void>;
  signUp?: (
    email: string,
    password: string,
    userData?: Partial<UserDetails>,
  ) => Promise<{ error: any }>;
}

<<<<<<< HEAD

export interface UserDetails {;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

}
;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
export interface UserDetails {;

}
;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
export interface UserDetails {;

}
;
}
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
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
}
}
;
}
<<<<<<< HEAD
;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
