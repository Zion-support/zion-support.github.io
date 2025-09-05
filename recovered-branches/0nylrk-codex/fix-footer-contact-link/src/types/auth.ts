<<<<<<< HEAD
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
=======
export interface UserDetails {
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
  updatedAt?: string
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
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
<<<<<<< HEAD
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
=======

// Update AuthContextType definition to match implementation
export interface AuthContextType {
  user: UserDetails | null,
  isLoading: boolean,
  isAuthenticated: boolean,
  login: (email: string, password: string) => Promise<{ data?: any, error?: any }>,
  signup: (email: string, password: string, userData?: any) => Promise<{ error?: any }>,
  logout: () => Promise<void>,
  resetPassword: (email: string) => Promise<{ error?: any }>,
  updateProfile: (data: Partial<UserDetails>) => Promise<{ error?: any }>,
  loginWithGoogle: () => Promise<void>,
  loginWithFacebook: () => Promise<void>,
  loginWithTwitter: () => Promise<void>,
  loginWithWeb3: () => Promise<void>,
  signIn?: (email: string, password: string) => Promise<{ error: any }>,
  signOut?: () => Promise<void>,
  signUp?: (email: string, password: string, userData?: Partial<UserDetails>) => Promise<{ error: any }>}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
