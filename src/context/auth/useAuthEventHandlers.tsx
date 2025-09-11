import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export const useAuthEventHandlers = () => {
  const navigate = useNavigate();

  const handleLoginSuccess = useCallback(
    (user: any) => {
      // Handle successful login
      console.log('Login successful:', user);
      navigate('/dashboard');
    },
    [navigate]
  );

  const handleLogout = useCallback(() => {
    // Handle logout
    console.log('User logged out');
    navigate('/');
  }, [navigate]);

  const handleAuthError = useCallback((error: any) => {
    // Handle authentication errors
    console.error('Auth error:', error);
  }, []);

  return {
    handleLoginSuccess,
    handleLogout,
    handleAuthError,
  };
};
