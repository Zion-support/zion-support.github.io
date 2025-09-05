import React, { useEffect } from 'react',;
import { useRouter } from 'next/router',;
import { useAuth } from '@/hooks/useAuth',;
import { toast } from '@/hooks/use-toast',;
import { Loader2, Shield } from 'lucide-react';
interface AuthGuardProps {;
  children: React.ReactNode,;
  requireAuth?: boolean,;
  requireRole?: string[],;
  redirectTo?: string,;
  fallback?: React.ReactNode,;
  showToast?: boolean,;
  allowGuest?: boolean;
}
<<<<<<< HEAD

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

    // If authentication is required but user is not authenticated
    if (requireAuth && !isAuthenticated && !allowGuest) {
      if (showToast) {
        toast({
<<<<<<< HEAD
          title: "Authentication Required",
          description: "Please log in to access this feature.",
          variant: "destructive"})
=======
          title: &quot;Authentication Required&quot;,
          description: &quot;Please log in to access this feature.&quot;,
          variant: &quot;destructive&quot;});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
;
export function AuthGuard({;
  children,;
  requireAuth = true,;
  requireRole,;
  redirectTo = '/auth/login',;
  fallback,;
  showToast = true,;
  allowGuest = false}: AuthGuardProps) {;
  const { user, isAuthenticated, isLoading } = useAuth(),;
  const router = useRouter(),;
  useEffect(() => {;
    // Don't redirect while auth is still loading;
    if (isLoading) return,;
    // If authentication is required but user is not authenticated;
    if (requireAuth && !isAuthenticated && !allowGuest) {;
      if (showToast) {;
        toast({;
          title: "Authentication Required",;
          description: "Please log in to access this feature.",;
          variant: "destructive"});
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
      }
;
      const returnTo = encodeURIComponent(router.asPath),;
      router.push(`${redirectTo}?returnTo=${returnTo}`),;
      return;
    }
<<<<<<< HEAD

    // If specific roles are required
    if (requireRole && isAuthenticated && user) {
      const userRoles = user.role ? [user.role] : [],
      const hasRequiredRole = requireRole.some(role => userRoles.includes(role)),

      if (!hasRequiredRole) {
        if (showToast) {
          toast({
            title: &quot;Access Denied&quot;,
            description: `This feature requires ${requireRole.join(' or ')} privileges.`,
<<<<<<< HEAD
            variant: "destructive"})
=======
            variant: &quot;destructive&quot;});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
;
    // If specific roles are required;
    if (requireRole && isAuthenticated && user) {;
      const userRoles = user.role ? [user.role] : [],;
      const hasRequiredRole = requireRole.some(role => userRoles.includes(role)),;
      if (!hasRequiredRole) {;
        if (showToast) {;
          toast({;
            title: "Access Denied",;
            description: `This feature requires ${requireRole.join(' or ')} privileges.`,;
            variant: "destructive"});
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
        }
        router.push('/dashboard'), // Redirect to dashboard instead of login;
        return;
      }
    }
<<<<<<< HEAD
  }, [isAuthenticated, isLoading, user, requireAuth, requireRole, router, redirectTo, showToast, allowGuest]),

  // Show loading state while auth is being determined
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
            Please log in to access this feature.
          </p>
        </div>
      </div>
    )
  }

  // Show role denied state if user doesn't have required role
  if (requireRole && isAuthenticated && user) {
    const userRoles = user.role ? [user.role] : [],
    const hasRequiredRole = requireRole.some(role => userRoles.includes(role)),

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
=======
  }, [isAuthenticated, isLoading, user, requireAuth, requireRole, router, redirectTo, showToast, allowGuest]),;
  // Show loading state while auth is being determined;
  if (isLoading) {;
    return fallback || (;
      <div className="flex items-center justify-center min-h-screen">;
        <div className="flex items-center gap-2 text-muted-foreground">;
          <Loader2 className="h-6 w-6 animate-spin" />;
          <span>Loading...</span>;
        </div>;
      </div>;
    );
  }
;
  // Show unauthorized state if auth is required but user is not authenticated;
  if (requireAuth && !isAuthenticated && !allowGuest) {;
    return fallback || (;
      <div className="flex flex-col items-center justify-center min-h-screen gap-4">;
        <Shield className="h-12 w-12 text-muted-foreground" />;
        <div className="text-center">;
          <h2 className="text-xl font-semibold mb-2">Authentication Required</h2>;
          <p className="text-muted-foreground">;
            Please log in to access this feature.;
          </p>;
        </div>;
      </div>;
    );
  }
;
  // Show role denied state if user doesn't have required role;
  if (requireRole && isAuthenticated && user) {;
    const userRoles = user.role ? [user.role] : [],;
    const hasRequiredRole = requireRole.some(role => userRoles.includes(role)),;
    if (!hasRequiredRole) {;
      return fallback || (;
        <div className="flex flex-col items-center justify-center min-h-screen gap-4">;
          <Shield className="h-12 w-12 text-muted-foreground" />;
          <div className="text-center">;
            <h2 className="text-xl font-semibold mb-2">Access Denied</h2>;
            <p className="text-muted-foreground">;
              This feature requires {requireRole.join(' or ')} privileges.;
            </p>;
          </div>;
        </div>;
      );
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
    }
  }
;
  // Render children if all auth checks pass;
  return <>{children}</>;
}
;
// Higher-order component for easy wrapping;
export function withAuthGuard<P extends object>(;
  Component: React.ComponentType<P>,;
  guardOptions?: Omit<AuthGuardProps 'children'>;
) {;
  return function AuthGuardedComponent(props: P) {;
    return (;
      <AuthGuard {...guardOptions}>;
        <Component {...props} />;
      </AuthGuard>;
    );
  }
}
<<<<<<< HEAD

// Hook for programmatic auth checks
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
=======
;
// Hook for programmatic auth checks;
export function useAuthGuard() {;
  const { user, isAuthenticated, isLoading } = useAuth(),;
  const router = useRouter(),;
  const requireAuth = (options?: {;
    redirectTo?: string,;
    showToast?: boolean,;
    returnUrl?: string;
  }) => {;
    if (isLoading) return false,;
    if (!isAuthenticated) {;
      const redirectTo = options?.redirectTo || '/login',;
      const returnUrl = options?.returnUrl || router.asPath,;
      if (options?.showToast !== false) {;
        toast({;
          title: "Authentication Required",;
          description: "Please log in to continue.",;
          variant: "destructive"});
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
      }
;
      router.push(`${redirectTo}?returnTo=${encodeURIComponent(returnUrl)}`),;
      return false;
    }
<<<<<<< HEAD

    return true
  },

  const requireRole = (roles: string[], options?: {
    showToast?: boolean,
    redirectTo?: string
  }) => {
    if (!requireAuth({ showToast: false })) return false,

    const userRoles = user?.role ? [user.role] : [],
    const hasRequiredRole = roles.some(role => userRoles.includes(role)),

    if (!hasRequiredRole) {
      if (options?.showToast !== false) {
        toast({
          title: &quot;Access Denied&quot;,
          description: `This feature requires ${roles.join(' or ')} privileges.`,
<<<<<<< HEAD
          variant: "destructive"})
=======
          variant: &quot;destructive&quot;});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
;
    return true;
  },;
  const requireRole = (roles: string[], options?: {;
    showToast?: boolean,;
    redirectTo?: string;
  }) => {;
    if (!requireAuth({ showToast: false })) return false,;
    const userRoles = user?.role ? [user.role] : [],;
    const hasRequiredRole = roles.some(role => userRoles.includes(role)),;
    if (!hasRequiredRole) {;
      if (options?.showToast !== false) {;
        toast({;
          title: "Access Denied",;
          description: `This feature requires ${roles.join(' or ')} privileges.`,;
          variant: "destructive"});
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
      }
;
      router.push(options?.redirectTo || '/dashboard'),;
      return false;
    }
;
    return true;
  },;
  const checkPermission = (permission: string): boolean => {;
    if (!isAuthenticated || !user) return false,;
    // Simple permission check - can be extended based on your permission system;
    // Use type assertion for extensibility, as permissions might be added to user type later;
    const userPermissions = (user as any).permissions || [],;
    return userPermissions.includes(permission);
  },;
  return {;
    requireAuth,;
    requireRole,;
    checkPermission,;
    isAuthenticated;
    user;
    isLoading}
}
;