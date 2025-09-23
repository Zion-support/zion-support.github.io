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


=======
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '@/hooks/useAuth';
import { toast } from '@/hooks/use-toast';
import { Loader2, Shield } from 'lucide-react'

interface AuthGuardProps {
  children: React.ReactNode;
  requireAuth?: boolean;
  requireRole?: string[];
  redirectTo?: string;
  fallback?: React.ReactNode;
  showToast?: boolean;
  allowGuest?: boolean;
}

export function AuthGuard({
  children,
  requireAuth = true,
  requireRole,
  redirectTo = '/auth/login',
  fallback,
  showToast = true,
  allowGuest = false,
}: AuthGuardProps) {
  const { user, isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // Don't redirect while auth is still loading
    if (isLoading) return;
>>>>>>> origin/auto/autonomy-17186719616

    // If authentication is required but user is not authenticated
    if (requireAuth && !isAuthenticated && !allowGuest) {
      if (showToast) {
        toast({
          title: "Authentication Required",
          description: "Please log in to access this feature.",
<<<<<<< HEAD
          variant: "destructive"}),
      }

      const returnTo = encodeURIComponent(router.asPath),
      router.push(`${redirectTo}?returnTo=${returnTo}`),
      return,
=======
          variant: "destructive",
        });
      }

      const returnTo = encodeURIComponent(router.asPath);
      router.push(`${redirectTo}?returnTo=${returnTo}`);
      return;
>>>>>>> origin/auto/autonomy-17186719616
    }

    // If specific roles are required
    if (requireRole && isAuthenticated && user) {
<<<<<<< HEAD
      const userRoles = user.role ? [user.role] : [],
      const hasRequiredRole = requireRole.some(role => userRoles.includes(role)),
=======
      const userRoles = user.role ? [user.role] : [];
      const hasRequiredRole = requireRole.some(role => userRoles.includes(role));
>>>>>>> origin/auto/autonomy-17186719616

      if (!hasRequiredRole) {
        if (showToast) {
          toast({
            title: "Access Denied",
            description: `This feature requires ${requireRole.join(' or ')} privileges.`,
<<<<<<< HEAD
            variant: "destructive"}),
        }
        router.push('/dashboard'), // Redirect to dashboard instead of login
        return,
      }
    }
  }, [isAuthenticated, isLoading, user, requireAuth, requireRole, router, redirectTo, showToast, allowGuest]),
=======
            variant: "destructive",
          });
        }
        router.push('/dashboard'); // Redirect to dashboard instead of login
        return;
      }
    }
  }, [isAuthenticated, isLoading, user, requireAuth, requireRole, router, redirectTo, showToast, allowGuest]);
>>>>>>> origin/auto/autonomy-17186719616

  // Show loading state while auth is being determined
  if (isLoading) {
    return fallback || (
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Loader2 className="h-6 w-6 animate-spin" />
          <span>Loading...</span>
        </div>
      </div>
<<<<<<< HEAD
    ),
=======
    );
>>>>>>> origin/auto/autonomy-17186719616
  }

  // Show unauthorized state if auth is required but user is not authenticated
  if (requireAuth && !isAuthenticated && !allowGuest) {
    return fallback || (
      <div className="flex flex-col items-center justify-center min-h-screen gap-4">
        <Shield className="h-12 w-12 text-muted-foreground" />
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-2">Authentication Required</h2>
          <p className="text-muted-foreground">
            Please log in to access this feature.
          </p>
        </div>
      </div>
<<<<<<< HEAD
    ),
=======
    );
>>>>>>> origin/auto/autonomy-17186719616
  }

  // Show role denied state if user doesn't have required role
  if (requireRole && isAuthenticated && user) {
<<<<<<< HEAD
    const userRoles = user.role ? [user.role] : [],
    const hasRequiredRole = requireRole.some(role => userRoles.includes(role)),
=======
    const userRoles = user.role ? [user.role] : [];
    const hasRequiredRole = requireRole.some(role => userRoles.includes(role));
>>>>>>> origin/auto/autonomy-17186719616

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
<<<<<<< HEAD
      ),
=======
      );
>>>>>>> origin/auto/autonomy-17186719616
    }
  }

  // Render children if all auth checks pass
<<<<<<< HEAD
  return <>{children}</>,
=======
  return <>{children}</>;
>>>>>>> origin/auto/autonomy-17186719616
}

// Higher-order component for easy wrapping
export function withAuthGuard<P extends object>(
  Component: React.ComponentType<P>,
<<<<<<< HEAD
  guardOptions?: Omit<AuthGuardProps 'children'>
=======
  guardOptions?: Omit<AuthGuardProps, 'children'>
>>>>>>> origin/auto/autonomy-17186719616
) {
  return function AuthGuardedComponent(props: P) {
    return (
      <AuthGuard {...guardOptions}>
        <Component {...props} />
      </AuthGuard>
<<<<<<< HEAD
    ),
  },
=======
    );
  };
>>>>>>> origin/auto/autonomy-17186719616
}

// Hook for programmatic auth checks
export function useAuthGuard() {
<<<<<<< HEAD
  const { user, isAuthenticated, isLoading } = useAuth(),
  const router = useRouter(),

  const requireAuth = (options?: {
    redirectTo?: string,
    showToast?: boolean,
    returnUrl?: string,
  }) => {
    if (isLoading) return false,

    if (!isAuthenticated) {
      const redirectTo = options?.redirectTo || '/login',
      const returnUrl = options?.returnUrl || router.asPath,
=======
  const { user, isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  const requireAuth = (options?: {
    redirectTo?: string;
    showToast?: boolean;
    returnUrl?: string;
  }) => {
    if (isLoading) return false;

    if (!isAuthenticated) {
      const redirectTo = options?.redirectTo || '/login';
      const returnUrl = options?.returnUrl || router.asPath;
>>>>>>> origin/auto/autonomy-17186719616
      
      if (options?.showToast !== false) {
        toast({
          title: "Authentication Required",
          description: "Please log in to continue.",
<<<<<<< HEAD
          variant: "destructive"}),
      }

      router.push(`${redirectTo}?returnTo=${encodeURIComponent(returnUrl)}`),
      return false,
    }

    return true,
  },

  const requireRole = (roles: string[], options?: {
    showToast?: boolean,
    redirectTo?: string,
  }) => {
    if (!requireAuth({ showToast: false })) return false,

    const userRoles = user?.role ? [user.role] : [],
    const hasRequiredRole = roles.some(role => userRoles.includes(role)),
=======
          variant: "destructive",
        });
      }

      router.push(`${redirectTo}?returnTo=${encodeURIComponent(returnUrl)}`);
      return false;
    }

    return true;
  };

  const requireRole = (roles: string[], options?: {
    showToast?: boolean;
    redirectTo?: string;
  }) => {
    if (!requireAuth({ showToast: false })) return false;

    const userRoles = user?.role ? [user.role] : [];
    const hasRequiredRole = roles.some(role => userRoles.includes(role));
>>>>>>> origin/auto/autonomy-17186719616

    if (!hasRequiredRole) {
      if (options?.showToast !== false) {
        toast({
          title: "Access Denied",
          description: `This feature requires ${roles.join(' or ')} privileges.`,
<<<<<<< HEAD
          variant: "destructive"}),
      }

      router.push(options?.redirectTo || '/dashboard'),
      return false,
    }

    return true,
  },

  const checkPermission = (permission: string): boolean => {
    if (!isAuthenticated || !user) return false,
    
    // Simple permission check - can be extended based on your permission system
    // Use type assertion for extensibility, as permissions might be added to user type later
    const userPermissions = (user as any).permissions || [],
    return userPermissions.includes(permission),
  },
=======
          variant: "destructive",
        });
      }

      router.push(options?.redirectTo || '/dashboard');
      return false;
    }

    return true;
  };

  const checkPermission = (permission: string): boolean => {
    if (!isAuthenticated || !user) return false;
    
    // Simple permission check - can be extended based on your permission system
    // Use type assertion for extensibility, as permissions might be added to user type later
    const userPermissions = (user as any).permissions || [];
    return userPermissions.includes(permission);
  };
>>>>>>> origin/auto/autonomy-17186719616

  return {
    requireAuth,
    requireRole,
    checkPermission,
    isAuthenticated,
    user,
<<<<<<< HEAD
    isLoading},
=======
    isLoading,
  };
>>>>>>> origin/auto/autonomy-17186719616
}
