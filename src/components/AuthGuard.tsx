      const redirectTo = options?.redirectTo || '/login';
      const returnUrl = options?.returnUrl || router.asPath;
      
    if (!requireAuth({ showToast: false })) return false,

    const userRoles = user?.role ? [user.role] : [];
    
<<<<<<< HEAD
=======
    // Simple permission check - can be extended based on your permission system
    // Use type assertion for extensibility, as permissions might be added to user type later
    const userPermissions = (user as any).permissions || [];
    return userPermissions.includes(permission)
  };

  return {
<<<<<<< HEAD
    requireAuth,
    requireRole,
    checkPermission,
    isAuthenticated,
    user,
    isLoading,
  };

}//Hook for programmatic auth checks ;
}router.push (`$ {;
  redirectTo ;
}?returnTo=$ {;
  encodeURIComponent (returnUrl) ;
}`);
return false;
}return true;
};
if (!hasRequiredRole) {;
  if (options?.showToast !== false) {;
  toast ({;
  ';
}router.push (options?.redirectTo || '/dashboard');
return false;
}return true;
};
}'"
=======

<<<<<<< HEAD

      const redirectTo = options?.redirectTo || '/login';
      const returnUrl = options?.returnUrl || router.asPath;
      

<<<<<<< HEAD
    

>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
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
