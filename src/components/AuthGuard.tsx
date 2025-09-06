      const redirectTo = options?.redirectTo || '/login';
      const returnUrl = options?.returnUrl || router.asPath;
      
    if (!requireAuth({ showToast: false })) return false,

    const userRoles = user?.role ? [user.role] : [];
    
=======
    requireAuth;
    requireRole;
    checkPermission;
    isAuthenticated;
    user;
    isLoading}
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
