<<<<<<< HEAD
import React, { useState, useEffect } from 'react';

=======
import React, { useState } from 'react';
import { useState, useEffect } from 'react';
>>>>>>> 0c99c864a5b3e9103e05fe2d2d18af9657a73b04
interface User {
  id: string;
  email: string;
  displayName?: string;
  avatar?: string;
  role?: string;
  isEmailVerified?: boolean;
  createdAt?: string;
<<<<<<< HEAD
  updatedAt?: string;
}

interface AuthTokens {
  accessToken: string | null;
  refreshToken: string | null;
}

export const useAuthState = () => {
  const [user, setUser] = useState<User | null>(null);
=======
  updatedAt?: string}
interface AuthTokens {
  accessToken: string | null;
  refreshToken: string | null}
export const useAuthState[, React.Dispatch<React.SetStateAction<any>>] = () => {
  const [user, setUser] = useState<any>(null);
>>>>>>> 0c99c864a5b3e9103e05fe2d2d18af9657a73b04
  const [isLoading, setIsLoading] = useState(true);
  const [onboardingStep, setOnboardingStep] = useState(0);
  const [tokens, setTokens] = useState<AuthTokens>({
    accessToken: null,
    refreshToken: null
  });
  useEffect(() => {
    // Check for existing auth state on mount
    const checkAuthState = async () => {
      try {
        if (typeof window !== 'undefined') {
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
            }
          }
        }
      } catch (error) {
        console.error('Error checking auth state:', error);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuthState();
  }, []);

=======
        // // // // // // // console.error('Error checking auth state:', error);
      } finally {
        setIsLoading(false);
              })}
          }
        }
      } catch (error) {
        console.error('Error checking auth state:', error)} finally {
        setIsLoading(false)}
    };
    checkAuthState()}, []);
>>>>>>> 0c99c864a5b3e9103e05fe2d2d18af9657a73b04
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
};
=======
  }};
>>>>>>> 0c99c864a5b3e9103e05fe2d2d18af9657a73b04
