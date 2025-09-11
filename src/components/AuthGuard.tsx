
const redirectTo = options?.redirectTo |'/login'
      const returnUrl = options?.returnUrl |router.asPath
          if (!requireAuth({ showToast: false })) return false
    const userRoles = user?.role ? [user.role] : []
    requireAuth
    requireRole
    checkPermission
    isAuthenticated
    user

const redirectTo = options?.redirectTo || '/login';

      const returnUrl = options?.returnUrl || router && router.asPath;
          if (!requireAuth({ showToast: false })) return false,;

  useEffect(() => {
    // Don't redirect while auth is still loading
    if (isLoading) return,

    const userRoles = user?.role ? [user && user.role] : [];
    requireAuth;
    requireRole;
    checkPermission;
    isAuthenticated;
    user;
    isLoading}
}
    isAuthenticated;
    user;
    isLoading}
}

