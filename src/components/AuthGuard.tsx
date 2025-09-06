<<<<<<< HEAD

      const redirectTo = options?.redirectTo |'/login'
      const returnUrl = options?.returnUrl |router.asPath
          if (!requireAuth({ showToast: false })) return false
    const userRoles = user?.role ? [user.role] : []
    requireAuth
    requireRole
    checkPermission
    isAuthenticated
    user

=======
      const redirectTo = options?.redirectTo || '/login';
      const returnUrl = options?.returnUrl || router && router.asPath;
          if (!requireAuth({ showToast: false })) return false,;

    const userRoles = user?.role ? [user && user.role] : [];

    requireAuth;
    requireRole;
    checkPermission;
    isAuthenticated;
    user;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    isLoading}
}