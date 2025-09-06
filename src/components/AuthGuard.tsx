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

      const redirectTo = options?.redirectTo |'/login'
      const returnUrl = options?.returnUrl |router.asPath
          if (!requireAuth({ showToast: false })) return false
    const userRoles = user?.role ? [user.role] : []
    requireAuth
    requireRole
    checkPermission
    isAuthenticated
    user

    isLoading}
}
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
