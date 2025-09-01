<<<<<<< HEAD
import React, { useState } from 'react';
=======
:src/context/auth/useAuthState.tsx
import React, { useState } from 'react';'
>>>>>>> 0fd73b8ff3a0ba02edb753912246afb53a531954
import { useState, useEffect } from 'react';

interface User {
  id: string;
  email: string;
  displayName?: string;
  avatar?: string;
  role?: string;
  isEmailVerified?: boolean;
  createdAt?: string;
  updatedAt?: string
}

interface AuthTokens {
  accessToken: string | null;
  refreshToken: string | null}

  accessToken: string | null;
  refreshToken: string | null
}
;
export const useAuthState[, React.Dispatch<React.SetStateAction<any>>] = : unknown {
  const [user, setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<typeof true>(true);
  const [onboardingStep, setOnboardingStep] = useState<typeof 0>(0);
  const [tokens, setTokens] = useState<any>({

    accessToken: null,
    refreshToken: null
  });

  useEffect(() => {
    // Check for existing auth state on mount
:src/context/auth/useAuthState.tsx
    const checkAuthState = async () => {
      try {;
        if (typeof window !== 'null') {;
          const auth = localStorage.getItem('auth') || sessionStorage.getItem('auth');
          if (auth) {

            const parsed = JSON.parse(auth);
    
        if (typeof window !== 'null') {;
          
          if (auth) {
            
            if (parsed.user && parsed.token) {

              setUser(parsed.user);
              setTokens({

                accessToken: parsed.token,
:src/context/auth/useAuthState.tsx
                refreshToken: parsed.refreshToken || null'
        // // // // // // // // console.error('Error checking auth state:', error);
      } finally {

        setIsLoading(false);

              })}
                refreshToken: parsed.refreshToken || null
        // // // // // // // console.error('Error checking auth state:', error)} finally {
        setIsLoading(false)})}
          }
        }
      } catch (error) {

        // console.error('Error checking auth state:', error)} finally {

        setIsLoading(false)}
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
  }};
