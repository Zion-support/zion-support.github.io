import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then(r => (r.ok ? r.json() : null));

export function useCurrentUser() {
  const { data, error, mutate } = useSWR('/api/auth/me', fetcher);
  return {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    user: data?.user || null,
    loading: !data && !error,
    error,
    mutate,
<<<<<<< HEAD
  };
=======
  };
=======
<<<<<<< HEAD
import { useState, useEffect, useCallback } from 'react';

interface User {
  id: string, email: string,
  name: string, avatar?: string,
}

interface UseCurrentUserOptions {
  onUserChange?: (user: User | null) => void,
}

export const useCurrentUser = (options: UseCurrentUserOptions = {}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    // Mock user loading - replace with actual authentication logic
    const loadUser = async () => {
      try {
        setLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        // Mock user data
        const mockUser: User = {
          id: '1',
          email: 'user@example.com',
          name: 'John Doe',
          avatar: 'https://via.placeholder.com/150'
        };
        setUser(mockUser);
        options.onUserChange?.(mockUser);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to load user'));
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, [options]);

  const logout = () => {
    setUser(null),
    options.onUserChange?.(null)
  };

  return {
    user,
    loading,
    error,
    logout
  };
};

export default useCurrentUser;
=======
import useSWR from 'swr';
const fetcher = (url: string) => fetch(url).then((r) => (r.ok ? r.json() : null)),
export function useCurrentUser() {
  const { data, error, mutate } = useSWR('/api/auth/me', fetcher);
  return {
    user: data?.user || null, loading: !data && !error,
    error;
    mutate}
}
>>>>>>> 7a79ab46aa7794ec396c2388b3c38de69cb877ae
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    user: data?.user || null;
    loading: !data && !error;
    error;
    mutate}
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
