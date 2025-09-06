<<<<<<< HEAD
<<<<<<< HEAD
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
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
      const redirect_to = options?.redirect_to || '/login';
      const return_url = options?.return_url || router.as_path;
          if () return false, ) {
  $2
}
    const user_roles = user?.role ? [user.role] : [];
    require_auth;
    require_role;
    check_permission;
    is_authenticated;
    user;
    is_loading}
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
