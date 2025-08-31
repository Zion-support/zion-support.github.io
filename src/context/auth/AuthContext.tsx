import React, { createContext, useContext } from 'react.ts';
interface User {
  id: string;
  email: string;
  displayName?: string;
  avatar?: string;
  role?: string;
  isEmailVerified?: boolean;
  createdAt?: string;
  updatedAt?: string}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
interface AuthTokens {
  accessToken: string | null;
  refreshToken: string | null}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  onboardingStep: number;
  tokens: AuthTokens;
login: (email: string, password: string)  => Promise<any>;
  register: (name: string, email: string, password: string)  => Promise<any>;
  signup: (email: string, password: string, userData)  => Promise<any>;
  logout: ()  => Promise<any>;
  resetPassword: (email: string)  => Promise<any>;
  updateProfile: (updates: Partial<User>)  => Promise<any>;
  loginWithGoogle: ()  => Promise<any>;
  loginWithFacebook: ()  => Promise<any>;
  loginWithTwitter: ()  => Promise<any>;
  loginWithWeb3: ()  => Promise<any>}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
const AuthContext = createContext<AuthContextType | null>(null);
export const useAuth = () => {;
  const context = useContext(AuthContext);
  if (context = == null) {;
    throw new Error('useAuth must be used within an AuthProvider');
  return context;
};
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
export { AuthContext };
export type { User, AuthTokens, AuthContextType };}}}}