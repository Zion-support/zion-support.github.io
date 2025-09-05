<<<<<<< HEAD
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
}

export interface UserProfile {
  id?: string,
  displayName?: string,
  email: string,
  userType: string,
  profileComplete: boolean,
  createdAt: string,
  updatedAt: string,
  avatar_url?: string,
  bio?: string,
  avatarUrl?: string,
  headline?: string,
  role?: string,
  permissions?: string[],
  companyId?: string
}

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
  signUp?: (email: string, password: string, userData?: Partial<UserDetails>) => Promise<{ error: any }>
=======
export interface UserDetails {_id?: string;
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
  updatedAt?: string;}

export interface UserProfile {_id?: string;
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
  permissions?: string[];
  companyId?: string;}

// Update AuthContextType definition to match implementation
export interface AuthContextType {_user: UserDetails | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (_email: string, _password: string) => Promise<{ data?: unknown; error?: unknown}>;
  signup: (_email: string, _password: string, _userData?: unknown) => Promise<{_error?: unknown}>;
  logout: () => Promise<void>;
  resetPassword: (_email: string) => Promise<{_error?: unknown}>;
  updateProfile: (_data: Partial<UserDetails>) => Promise<{_error?: unknown}>;
  loginWithGoogle: () => Promise<void>;
  loginWithFacebook: () => Promise<void>;
  loginWithTwitter: () => Promise<void>;
  loginWithWeb3: () => Promise<void>;
  signIn?: (_email: string, _password: string) => Promise<{_error: unknown}>;
  signOut?: () => Promise<void>;
  signUp?: (_email: string, _password: string, _userData?: Partial<UserDetails>) => Promise<{_error: unknown}>;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}
