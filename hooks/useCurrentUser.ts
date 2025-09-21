// Simple user hook without SWR dependency
import { useState, useEffect } from 'react';

export interface User {
  id: string;
  email: string;
  name?: string;
}

export interface UseCurrentUserResult {
  user: User | null;
  loading: boolean;
  error?: Error;
  mutate: () => void;
}

export function useCurrentUser(): UseCurrentUserResult {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | undefined>(undefined);

  const mutate = () => {
    // Placeholder for refreshing user data
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    // Placeholder for fetching user data
    setLoading(false);
  }, []);

  return {
    user,
    loading,
    error,
    mutate
  };
}