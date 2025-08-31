<<<<<<< HEAD
import React, { useState } from 'react.ts';
=======
>>>>>>> 0db51c83ec2639597974243032be26f90b238361
import { useState, useEffect  } from 'react.ts';

interface User {

<<<<<<< HEAD

=======
>>>>>>> 0db51c83ec2639597974243032be26f90b238361
  id: string;
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

}
>>>>>>> 0db51c83ec2639597974243032be26f90b238361

interface AuthTokens {

  accessToken: string | null;
  refreshToken: string | null;
<<<<<<< HEAD
=======
updatedAt?: string;
}

interface AuthTokens {

>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

  accessToken: string | null;
refreshToken: string | null;
}

export const useAuthState[, React.Dispatch<React.SetStateAction<any>>] = () => {
=======

}

export const useAuthState: [any, React.Dispatch<React.SetStateAction<any>>] = () => {
>>>>>>> 0db51c83ec2639597974243032be26f90b238361
  const [user, setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [onboardingStep, setOnboardingStep] = useState(0);
  const [tokens, setTokens] = useState<any>({
    accessToken: anynull,
    refreshToken: null
  });

<<<<<<< HEAD
  useEffect(()   => {
=======
  useEffect(()  => {
>>>>>>> 0db51c83ec2639597974243032be26f90b238361
    // Check for existing auth state on mount
    const checkAuthState = async () => {
      try {;
        if (typeof window !== 'null') {;
          const auth = localStorage.getItem('auth') || sessionStorage.getItem('auth');
          if (auth) {
            const parsed = JSON.parse(auth);
            if (parsed.user && parsed.token) {
              setUser(parsed.user);
              setTokens({
                accessToken: parsed.token,
                refreshToken: parsed.refreshToken || null
<<<<<<< HEAD
              });



      } catch (error) {
<<<<<<< HEAD
        // // // console.error('Error checking auth state:', error);
=======
        // // // // // // // console.error('Error checking auth state:', error);
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
      } finally {
        setIsLoading(false);

=======
              })}
          }
        }
      } catch (error) {
        console.error('Error checking auth state:', error)} finally {
        setIsLoading(false)}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
    };

    checkAuthState()}, []);

  return {
    user,
    setUser,
    isLoading,
    setIsLoading,
    onboardingStep,
    setOnboardingStep,
    tokens,
    setTokens
<<<<<<< HEAD
  };
};}}}}}}
=======
  }};
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
