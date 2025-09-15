import { useEffect } from 'react';

export function useAuthGuard() {
  useEffect(() => {
    // Placeholder auth guard; replace with real logic if needed
  }, []);
  return { isAuthenticated: true };
}

export default useAuthGuard;

