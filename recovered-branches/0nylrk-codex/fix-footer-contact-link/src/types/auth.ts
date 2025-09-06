<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export interface UserDetails {
=======
export interface UserDetails {;
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
export interface UserDetails {
export interface UserDetails {;
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
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
<<<<<<< HEAD
export interface UserProfile {

export interface UserProfile {;
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
=======

  permissions?: string[];
  company_id?: string;

  bio?: string;
  created_at?: string;
  updated_at?: string;
}
export interface UserProfile {
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
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
<<<<<<< HEAD
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
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
export interface UserDetails {;
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
}
export interface UserDetails {;
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
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
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
=======
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

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
}
;
