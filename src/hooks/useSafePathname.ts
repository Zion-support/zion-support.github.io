import { useLocation } from 'react-router-dom';

export const useSafePathname = () => {
  try {
    const location = useLocation();
    return location.pathname;
  } catch (error) {
    console.error('Error getting pathname:', error);
    return '/';
  }
};