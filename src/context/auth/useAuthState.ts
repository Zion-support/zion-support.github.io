<<<<<<< HEAD
import React, { useState } from 'react';
import { useState, useEffect } from 'react';
interface User {
=======
import React, { useState } from 'react.ts';
import { useState, useEffect               } from 'react.ts';

interface User {















>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
  id: string;
  email: string;
  displayName?: string;
  avatar?: string;
  role?: string;
  isEmailVerified?: boolean;
  createdAt?: string;
<<<<<<< HEAD
  updatedAt?: string}
interface AuthTokens {
  accessToken: string | null;
  refreshToken: string | null}
=======
<<<<<<< HEAD
  updatedAt?: string;

interface AuthTokens {
  accessToken: string | null;
  refreshToken: string | null;
=======
updatedAt?: string;













}

interface AuthTokens {














>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

  accessToken: string | null;
refreshToken: string | null;













}

>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
export const useAuthState[, React.Dispatch<React.SetStateAction<any>>] = () => {
  const [user, setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [onboardingStep, setOnboardingStep] = useState(0);
  const [tokens, setTokens] = useState<any>({
    accessToken: anyanyanyanyanyanyanyanyanyanyanyanyanyanynull,
    refreshToken: null
  });
<<<<<<< HEAD
  useEffect(() => {
=======

  useEffect(()                => {
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
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
