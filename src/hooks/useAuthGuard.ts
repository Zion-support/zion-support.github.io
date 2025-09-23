import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function useAuthGuard(isAuthenticated: boolean = true) {
  const navigate = useNavigate?.();
  useEffect(() => {
    if (!isAuthenticated && navigate) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);
}

