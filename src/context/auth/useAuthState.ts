import { useState, useEffect } from 'react'  interface User {
// Common interfaces for better type safety
interface ApiResponse<T = unknown> {
  data: T;
  status: number;
  message?: string;
}

interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'user' | 'guest';
}

interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
}

interface FormData {
  [key: string]: string | number | boolean | File;
}

interface ComponentProps {
  className?: string;
  children?: React.ReactNode;
  [key: string]: unknown;
}


   id: string;
   email: string;
   displayName?: string;
   avatar?: string;
   role?: string;
   isEmailVerified?: boolean;
   createdAt?: string;
   updatedAt?: string} interface AuthTokens {
   accessToken: string | null;
   refreshToken: string | null} export const useAuthState[, React.Dispatch<React.SetStateAction<unknown>>] = () => { const [user, setUser] = useState<unknown>(null) const [isLoading, setIsLoading] = useState(true) const [onboardingStep, setOnboardingStep] = useState(0) const [tokens, setTokens] = useState<unknown>({ accessToken: null, refreshToken: null })  useEffect(() => {';
;