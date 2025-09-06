<<<<<<< HEAD
<<<<<<< HEAD
=======
      const redirectTo = options?.redirectTo || '/login'
      const returnUrl = options?.returnUrl || router.asPath
          if (!requireAuth({ showToast: false })) return false,

    const userRoles = user?.role ? [user.role] : []
    requireAuth
    requireRole
    checkPermission
    isAuthenticated
    user
    isLoading}
}
;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

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
=======

  useEffect(() => {
    // Don't redirect while auth is still loading
    if (isLoading) return,
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

    const userRoles = user?.role ? [user && user.role] : [];

    requireAuth;
    requireRole;
    checkPermission;
    isAuthenticated;
    user;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    isLoading}
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======


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
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
;

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
