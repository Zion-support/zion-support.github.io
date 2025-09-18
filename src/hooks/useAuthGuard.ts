import { useEffect }  from 'react';
import { useNavigate }  from 'react-router-dom';
import { useAuth }  from './useAuth';
interface UseRequireAuthOptions {
  redirectTo?: string;
  requireRole?: string;
export const useRequireAuth = (options: UseRequireAuthOptions = {}) => {
  const { redirectTo = '/login', requireRole } = options;
  const { user, loading, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!loading) {
      if (!isAuthenticated) {
        navigate(redirectTo);
        return;
      };
if (requireRole && user?.role !== requireRole) {
        navigate('/unauthorized');
        return;
      };
    };
  }, [isAuthenticated, loading, user, requireRole, navigate, redirectTo]);
  return {
    user,
    loading,
    isAuthenticated,
    hasRequiredRole: requireRole ? user?.role === requireRole : true};
  };
export default useRequireAuth;
