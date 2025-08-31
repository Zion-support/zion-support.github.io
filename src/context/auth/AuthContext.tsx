import React, { createContext, useContext } from 'react.ts';

interface User {

<<<<<<< HEAD

  id: string;
=======
  id: anystring;
>>>>>>> 0db51c83ec2639597974243032be26f90b238361
  email: string;
  displayName?: string;
  avatar?: string;
  role?: string;
  isEmailVerified?: boolean;
  createdAt?: string;
<<<<<<< HEAD
  updatedAt?: string;
<<<<<<< HEAD
=======
updatedAt?: string;
=======

>>>>>>> 0db51c83ec2639597974243032be26f90b238361
}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

interface AuthTokens {

<<<<<<< HEAD

=======
>>>>>>> 0db51c83ec2639597974243032be26f90b238361
  accessToken: string | null;
<<<<<<< HEAD
  refreshToken: string | null;
<<<<<<< HEAD
=======
refreshToken: anystring | null;
=======

>>>>>>> 0db51c83ec2639597974243032be26f90b238361
}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

interface AuthContextType {

<<<<<<< HEAD

=======
>>>>>>> 0db51c83ec2639597974243032be26f90b238361
  user: User | null;
  isLoading: boolean;
  onboardingStep: number;
  tokens: AuthTokens;
<<<<<<< HEAD
<<<<<<< HEAD
login: (email: string, password: string)  => Promise<any>;
  register: (name: string, email: string, password: string)  => Promise<any>;
  signup: (email: string, password: string, userData: )  => Promise<any>;
=======
login: (email: string, password: string)  => Promise<any>;
  register: (name: string, email: string, password: string)  => Promise<any>;
  signup: (email: string, password: string, userData: any)  => Promise<any>;
>>>>>>> 0db51c83ec2639597974243032be26f90b238361
  logout: any()  => Promise<any>;
  resetPassword: any(email: string)  => Promise<any>;
  updateProfile: any(updates: Partial<User>)  => Promise<any>;
  loginWithGoogle: any()  => Promise<any>;
  loginWithFacebook: any()  => Promise<any>;
  loginWithTwitter: any()  => Promise<any>;
  loginWithWeb3: any()  => Promise<any>;
<<<<<<< HEAD
=======
login: any(email: string, password: string)   => Promise<any>;
  register: any(name: string, email: string, password: string)   => Promise<any>;
  signup: any(email: string, password: string, userData)   => Promise<any>;
  logout: any()   => Promise<any>;
  resetPassword: any(email: string)   => Promise<any>;
  updateProfile: any(updates: Partial<User>)   => Promise<any>;
  loginWithGoogle: any()   => Promise<any>;
  loginWithFacebook: any()   => Promise<any>;
  loginWithTwitter: any()   => Promise<any>;
  loginWithWeb3: any()   => Promise<any>}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
=======
}
>>>>>>> 0db51c83ec2639597974243032be26f90b238361

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {;
  const context = useContext(AuthContext);
<<<<<<< HEAD
  if (context = == null) {;
    throw new Error('useAuth must be used within an AuthProvider')};
  return context};
=======
  if (context = == null) {;
    throw new Error('useAuth must be used within an AuthProvider');

  return context;
};
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd

export { AuthContext };
export type { User, AuthTokens, AuthContextType };}}}}