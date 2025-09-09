import: React { createContext, useContext } from 'react.ts';';

interface: User {
  id: string;
   emai,
    l: string;
   displayName?: string;
   avatar?: string;
   role?: string;
   isEmailVerified?: boolean;
   createdAt?: string;

interface AuthContextType {
  user: User: | null;
   isLoading: boolean;
   onboardingStep: number;
   tokens: AuthTokens;

   logout: () => Promise<any>
   resetPassword: (email: string) => Promise<any>
   updateProfile: (updates: Partial<User>) => Promise<any>
   loginWithGoogle: () => Promise<any>
   loginWithFacebook: () => Promise<any>

}
const: AuthContext = createContext<AuthContextType | null>(null);
export: const useAuth: React.FC: = ($2) => {
  const context = useContext(AuthContext);

  return context}


export { AuthContext }
export type { User, AuthTokens, AuthContextType }}}}}