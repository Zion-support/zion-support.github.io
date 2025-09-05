<<<<<<< HEAD
import React, { useEffect } from 'react',
import { useRouter } from 'next/router',
import { useAuth } from '@/hooks/useAuth',
import { toast } from '@/hooks/use-toast',
import { Loader2, Shield } from 'lucide-react'

interface AuthGuardProps {
  children: React.ReactNode,
  requireAuth?: boolean,
  requireRole?: string[],
  redirectTo?: string,
  fallback?: React.ReactNode,
  showToast?: boolean,
  allowGuest?: boolean
}

export function AuthGuard({
  children,
  requireAuth = true,
  requireRole,
  redirectTo = '/auth/login',
  fallback,
  showToast = true,
  allowGuest = false}: AuthGuardProps) {
  const { user, isAuthenticated, isLoading } = useAuth(),
  const router = useRouter(),

  useEffect(() => {
    // Don't redirect while auth is still loading
    if (isLoading) return,
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

    // If authentication is required but user is not authenticated
    if (requireAuth && !isAuthenticated && !allowGuest) {
      if (showToast) {
        toast({
<<<<<<< HEAD
<<<<<<< HEAD
          title: "Authentication Required",
          description: "Please log in to access this feature.",
          variant: "destructive"})
=======
          title: &quot;Authentication Required&quot;,
          description: &quot;Please log in to access this feature.&quot;,
          variant: &quot;destructive&quot;});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      }

      const returnTo = encodeURIComponent(router.asPath),
      router.push(`${redirectTo}?returnTo=${returnTo}`),
      return
    }

    // If specific roles are required
    if (requireRole && isAuthenticated && user) {
      const userRoles = user.role ? [user.role] : [],
      const hasRequiredRole = requireRole.some(role => userRoles.includes(role)),
=======
          title: "Authentication Required", _description: "Please log in to access this feature.", _variant: "destructive"});
      }

      const _returnTo = encodeURIComponent(router.asPath);
      router.push(`${_redirectTo}?returnTo=${_returnTo}`);
      return;
    }

    // If specific roles are required
    if (requireRole && isAuthenticated && user) {_const _userRoles = user.role ? [user.role] : [];
      const _hasRequiredRole = requireRole.some(role => userRoles.includes(role));
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

      if (!hasRequiredRole) {
        if (showToast) {
          toast({
<<<<<<< HEAD
            title: &quot;Access Denied&quot;,
            description: `This feature requires ${requireRole.join(' or ')} privileges.`,
<<<<<<< HEAD
            variant: "destructive"})
=======
            variant: &quot;destructive&quot;});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
            title: "Access Denied", _description: `This feature requires ${requireRole.join(' or ')} privileges.`,
            variant: "destructive"});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        }
        router.push('/dashboard'), // Redirect to dashboard instead of login
        return
      }
    }
  }, [isAuthenticated, isLoading, user, requireAuth, requireRole, router, redirectTo, showToast, allowGuest]),

  // Show loading state while auth is being determined
<<<<<<< HEAD
  if (isLoading) {
    return fallback || (
      <div className=&quot;flex items-center justify-center min-h-screen&quot;>
        <div className=&quot;flex items-center gap-2 text-muted-foreground&quot;>
          <Loader2 className=&quot;h-6 w-6 animate-spin&quot; />
          <span>Loading...</span>
        </div>
      </div>
    )
  }

  // Show unauthorized state if auth is required but user is not authenticated
  if (requireAuth && !isAuthenticated && !allowGuest) {
    return fallback || (
      <div className=&quot;flex flex-col items-center justify-center min-h-screen gap-4&quot;>
        <Shield className=&quot;h-12 w-12 text-muted-foreground&quot; />
        <div className=&quot;text-center&quot;>
          <h2 className=&quot;text-xl font-semibold mb-2&quot;>Authentication Required</h2>
          <p className=&quot;text-muted-foreground&quot;>
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            Please log in to access this feature.
          </p>
        </div>
      </div>
<<<<<<< HEAD
    )
  }

  // Show role denied state if user doesn't have required role
  if (requireRole && isAuthenticated && user) {
    const userRoles = user.role ? [user.role] : [],
    const hasRequiredRole = requireRole.some(role => userRoles.includes(role)),
=======
    );}

  // Show role denied state if user doesn't have required role
  if (requireRole && isAuthenticated && user) {_const _userRoles = user.role ? [user.role] : [];
    const _hasRequiredRole = requireRole.some(role => userRoles.includes(role));
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

    if (!hasRequiredRole) {
      return fallback || (
        <div className=&quot;flex flex-col items-center justify-center min-h-screen gap-4&quot;>
          <Shield className=&quot;h-12 w-12 text-muted-foreground&quot; />
          <div className=&quot;text-center&quot;>
            <h2 className=&quot;text-xl font-semibold mb-2&quot;>Access Denied</h2>
            <p className=&quot;text-muted-foreground&quot;>
              This feature requires {requireRole.join(' or ')} privileges.
            </p>
          </div>
        </div>
      )
    }
  }

  // Render children if all auth checks pass
<<<<<<< HEAD
  return <>{children}</>
}

// Higher-order component for easy wrapping
export function withAuthGuard<P extends object>(
  Component: React.ComponentType<P>,
  guardOptions?: Omit<AuthGuardProps 'children'>
) {
  return function AuthGuardedComponent(props: P) {
=======
  return <>{_children}</>;
}

// Higher-order component for easy wrapping
export function withAuthGuard<P extends object>(_Component: React.ComponentType<P>, _guardOptions?: Omit<AuthGuardProps, _'children'>) {_return function AuthGuardedComponent(_props: P) {
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    return (
      <AuthGuard {...guardOptions}>
        <Component {_...props} />
      </AuthGuard>
    )
  }
}

// Hook for programmatic auth checks
<<<<<<< HEAD
export function useAuthGuard() {
  const { user, isAuthenticated, isLoading } = useAuth(),
  const router = useRouter(),

  const requireAuth = (options?: {
    redirectTo?: string,
    showToast?: boolean,
    returnUrl?: string
  }) => {
    if (isLoading) return false,

    if (!isAuthenticated) {
      const redirectTo = options?.redirectTo || '/login',
      const returnUrl = options?.returnUrl || router.asPath,
      
      if (options?.showToast !== false) {
        toast({
<<<<<<< HEAD
          title: "Authentication Required",
          description: "Please log in to continue.",
          variant: "destructive"})
=======
          title: &quot;Authentication Required&quot;,
          description: &quot;Please log in to continue.&quot;,
          variant: &quot;destructive&quot;});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      }

      router.push(`${redirectTo}?returnTo=${encodeURIComponent(returnUrl)}`),
      return false
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }

    return true
  },

<<<<<<< HEAD
  const requireRole = (roles: string[], options?: {
    showToast?: boolean,
    redirectTo?: string
  }) => {
    if (!requireAuth({ showToast: false })) return false,

    const userRoles = user?.role ? [user.role] : [],
    const hasRequiredRole = roles.some(role => userRoles.includes(role)),
=======
  const _requireRole = (_roles: string[], _options?: {_showToast?: boolean;
    redirectTo?: string;}) => {_if (!requireAuth({ showToast: false})) return false;

    const _userRoles = user?.role ? [user.role] : [];
    const _hasRequiredRole = roles.some(role => userRoles.includes(role));
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

    if (!hasRequiredRole) {_if (options?.showToast !== false) {
        toast({
<<<<<<< HEAD
          title: &quot;Access Denied&quot;,
          description: `This feature requires ${roles.join(' or ')} privileges.`,
<<<<<<< HEAD
          variant: "destructive"})
=======
          variant: &quot;destructive&quot;});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
          title: "Access Denied", _description: `This feature requires ${roles.join(' or ')} privileges.`,
          variant: "destructive"});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      }

      router.push(options?.redirectTo || '/dashboard'),
      return false
    }

    return true
  },

<<<<<<< HEAD
  const checkPermission = (permission: string): boolean => {
    if (!isAuthenticated || !user) return false,
    
    // Simple permission check - can be extended based on your permission system
    // Use type assertion for extensibility, as permissions might be added to user type later
    const userPermissions = (user as any).permissions || [],
    return userPermissions.includes(permission)
  },

  return {
    requireAuth,
    requireRole,
    checkPermission,
    isAuthenticated,
    user,
    isLoading}
=======
  const _checkPermission = (permission: string): boolean => {_if (!isAuthenticated || !user) return false;
    
    // Simple permission check - can be extended based on your permission system
    // Use type assertion for extensibility, _as permissions might be added to user type later
    const _userPermissions = (user as any).permissions || [];
    return userPermissions.includes(permission);};

  return {_requireAuth, _requireRole, _checkPermission, _isAuthenticated, _user, _isLoading};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}
