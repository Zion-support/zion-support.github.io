import React, {_useEffect} from 'react';

interface AuthGuardProps {_children: React.ReactNode;
  requireAuth?: boolean;
  requireRole?: string[];
  redirectTo?: string;
  fallback?: React.ReactNode;
  showToast?: boolean;
  allowGuest?: boolean;}

export function AuthGuard(_{_children, _requireAuth = true, _requireRole, _redirectTo = '/auth/login', _fallback, _showToast = true, _allowGuest = false}: AuthGuardProps) {_const { user, _isAuthenticated, _isLoading} = useAuth();
  const _router = useRouter();

  useEffect__(() => {_// Don't redirect while auth is still loading
    if (isLoading) return;

    // If authentication is required but user is not authenticated
    if (requireAuth && !isAuthenticated && !allowGuest) {
      if (showToast) {
        toast({
          title: "Authentication Required", _description: "Please log in to access this feature.", _variant: "destructive"});
      }

      const _returnTo = encodeURIComponent(router.asPath);
      router.push(`${_redirectTo}?returnTo=${_returnTo}`);
      return;
    }

    // If specific roles are required
    if (requireRole && isAuthenticated && user) {_const _userRoles = user.role ? [user.role] : [];
      const _hasRequiredRole = requireRole.some(role => userRoles.includes(role));

      if (!hasRequiredRole) {
        if (showToast) {
          toast({
            title: "Access Denied", _description: `This feature requires ${requireRole.join(' or ')} privileges.`,
            variant: "destructive"});
        }
        router.push('/dashboard'); // Redirect to dashboard instead of login
        return;
      }
    }
  }, [isAuthenticated, isLoading, user, requireAuth, requireRole, router, redirectTo, showToast, allowGuest]);

  // Show loading state while auth is being determined
  if (isLoading) {_return fallback || (
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Loader2 className="h-6 w-6 animate-spin" />
          <span>Loading...</span>
        </div>
      </div>
    );}

  // Show unauthorized state if auth is required but user is not authenticated
  if (requireAuth && !isAuthenticated && !allowGuest) {_return fallback || (
      <div className="flex flex-col items-center justify-center min-h-screen gap-4">
        <Shield className="h-12 w-12 text-muted-foreground" />
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-2">Authentication Required</h2>
          <p className="text-muted-foreground">
            Please log in to access this feature.
          </p>
        </div>
      </div>
    );}

  // Show role denied state if user doesn't have required role
  if (requireRole && isAuthenticated && user) {_const _userRoles = user.role ? [user.role] : [];
    const _hasRequiredRole = requireRole.some(role => userRoles.includes(role));

    if (!hasRequiredRole) {
      return fallback || (
        <div className="flex flex-col items-center justify-center min-h-screen gap-4">
          <Shield className="h-12 w-12 text-muted-foreground" />
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-2">Access Denied</h2>
            <p className="text-muted-foreground">
              This feature requires {requireRole.join(' or ')} privileges.
            </p>
          </div>
        </div>
      );
    }
  }

  // Render children if all auth checks pass
  return <>{_children}</>;
}

// Higher-order component for easy wrapping
export function withAuthGuard<P extends object>(_Component: React.ComponentType<P>, _guardOptions?: Omit<AuthGuardProps, _'children'>) {_return function AuthGuardedComponent(_props: P) {
    return (
      <AuthGuard {...guardOptions}>
        <Component {_...props} />
      </AuthGuard>
    );
  };
}

// Hook for programmatic auth checks
export function useAuthGuard() {_const { user, _isAuthenticated, _isLoading} = useAuth();
  const _router = useRouter();

  const _requireAuth = (_options?: {_redirectTo?: string;
    showToast?: boolean;
    returnUrl?: string;}) => {_if (isLoading) return false;

    if (!isAuthenticated) {
      const _redirectTo = options?.redirectTo || '/login';
      const _returnUrl = options?.returnUrl || router.asPath;
      
      if (options?.showToast !== false) {
        toast({
          title: "Authentication Required", _description: "Please log in to continue.", _variant: "destructive"});
      }

      router.push(`${_redirectTo}?returnTo=${_encodeURIComponent(returnUrl)}`);
      return false;
    }

    return true;
  };

  const _requireRole = (_roles: string[], _options?: {_showToast?: boolean;
    redirectTo?: string;}) => {_if (!requireAuth({ showToast: false})) return false;

    const _userRoles = user?.role ? [user.role] : [];
    const _hasRequiredRole = roles.some(role => userRoles.includes(role));

    if (!hasRequiredRole) {_if (options?.showToast !== false) {
        toast({
          title: "Access Denied", _description: `This feature requires ${roles.join(' or ')} privileges.`,
          variant: "destructive"});
      }

      router.push(options?.redirectTo || '/dashboard');
      return false;
    }

    return true;
  };

  const _checkPermission = (permission: string): boolean => {_if (!isAuthenticated || !user) return false;
    
    // Simple permission check - can be extended based on your permission system
    // Use type assertion for extensibility, _as permissions might be added to user type later
    const _userPermissions = (user as any).permissions || [];
    return userPermissions.includes(permission);};

  return {_requireAuth, _requireRole, _checkPermission, _isAuthenticated, _user, _isLoading};
}
