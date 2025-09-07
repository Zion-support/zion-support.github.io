
      const returnUrl = options?.returnUrl |router.asPath
          if (!requireAuth({ showToast: false })) return false
    const userRoles = user?.role ? [user.role] : []
    requireAuth
    requireRole
    checkPermission
    isAuthenticated
    user

    const userRoles = user?.role ? [user && user.role] : [];

      const returnTo = encodeURIComponent($2);
      router.push($2);
      return
    }

    // If specific roles are required
    if (requireRole && isAuthenticated && user) {
      const userRoles = $2;
      const hasRequiredRole = $2;
      if (!hasRequiredRole) {
        if (showToast) {
          toast({
            title: "Access Denied",
            description: `This feature requires ${requireRole.join(' or ')} privileges.`,
            variant: "destructive"})
        }
        router.push('/dashboard'), // Redirect to dashboard instead of login
        return
      }
    }
  }, [isAuthenticated, isLoading, user, requireAuth, requireRole, router, redirectTo, showToast, allowGuest]),

  // Show loading state while auth is being determined
  if (isLoading) {
    return fallback || (
      <div className = $2;
    const hasRequiredRole = $2;
    if (!hasRequiredRole) {
      return fallback || (
        <div className = $2;
  guardOptions?: Omit<AuthGuardProps, 'children'>
) {
  return function AuthGuardedComponent(props: P) {
    return (,
      <AuthGuard {...guardOptions}>
        <Component {...props} />
      </AuthGuard>
    )
  }
}

// Hook for programmatic auth checks
export function useAuthGuard() {
  const { user, isAuthenticated, isLoading } = useAuth($2);
  const router = useRouter($2);
  const requireAuth = $2;
    showToast?: boolean,
    returnUrl?: string
  }) => {
    if (isLoading) return false,

    if (!isAuthenticated) {
      const redirectTo = $2;
      const returnUrl = $2;
      if (options?.showToast !== false) {
        toast({
          title: "Authentication Required",
          description: "Please log in to continue.",
          variant: "destructive"})
      }

      router.push(`${redirectTo}?returnTo = $2;
      return false
    }

    return true
  },

  const requireRole = (roles: string[], options?: {
    showToast?: boolean,
    redirectTo?: string
  }) => {
    if (!requireAuth({ showToast: false})) return false,

    const userRoles = $2;
    const hasRequiredRole = $2;
    if (!hasRequiredRole) {
      if (options?.showToast !== false) {
        toast({
          title: "Access Denied",
          description: `This feature requires ${roles.join(' or ')} privileges.`,
          variant: "destructive"})
      }

      router.push($2);
      return false
    }

    return true
  },

  const checkPermission = (permission: string): boolean => {,
    if (!isAuthenticated || !user) return false,
    
    // Simple permission check - can be extended based on your permission system
    // Use type assertion for extensibility, as permissions might be added to user type later
    const userPermissions = $2;
    return userPermissions.includes(permission)
  },

  return {
    requireAuth,
    requireRole,
    checkPermission,
    isAuthenticated,
    user,
    isLoading}
}

