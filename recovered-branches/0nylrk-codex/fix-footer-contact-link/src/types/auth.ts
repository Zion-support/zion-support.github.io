<<<<<<< HEAD
<<<<<<< HEAD
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
export interface UserDetails {
=======

export interface UserDetails {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
export interface UserDetails {;
=======
  // TODO: Implement
}
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
  bio?: string;
  createdAt?: string;
  updatedAt?: string;
}
export interface UserProfile {

export interface UserProfile {;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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

}

  permissions?: string[],
<<<<<<< HEAD
  company_id?: string;
  permissions?: string[],
  companyId?: string;
  bio?: string;
  createdAt?: string;
updatedAt?: string;
}
export interface UserProfile {};
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

companyId?: string;
}
// Update AuthContextType definition to match implementation;
export interface AuthContextType {;
  user: UserDetails | null;
  isLoading: boolean;

isAuthenticated: boolean;
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
}

=======
  company_id?: string;}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
  company_id?: string;}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
export interface UserDetails {;

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
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

export interface UserDetails {;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

}
;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
export interface UserDetails {;

pr-12325
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
pr-12325
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
  companyId?:string;
// Update AuthContextType definition to match implementation;
pr-12325
  user:UserDetails | null,;
  isLoading:boolean,;
  isAuthenticated:boolean,;
  login:(email:string, password:string) => Promise<{ data?:any, error?:any }>,;
  signup:(email:string, password:string, userData?:any) => Promise<{ error?:any }>,;
  logout:() => Promise<void>,;
  resetPassword:(email:string) => Promise<{ error?:any }>,;
  updateProfile:(data:Partial<UserDetails>) => Promise<{ error?:any }>,;

pr-12325
  loginWithGoogle:() => Promise<void>,;
  loginWithFacebook:() => Promise<void>,;
  loginWithTwitter:() => Promise<void>,;
  loginWithWeb3:() => Promise<void>,;
  signIn?:(email:string, password:string) => Promise<{ error:any }>,;
  signOut?:() => Promise<void>,;
  signUp?:(email:string, password:string, userData?:Partial<UserDetails>) => Promise<{ error:any }>,;
} 

}
}
;
}
;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
