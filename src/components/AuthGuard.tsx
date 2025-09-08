import React, { useEffect } from 'react';
import { useRouter  } from 'next/router';
import { useAuth  } from '@/hooks/useAuth';
import { toast } from '@/hooks/use-toast';
import { Loader2, Shield } from 'lucide-react'

interface AuthGuardProps {
  children: React.ReactNode;
  requireAuth?: boolean;
  requireRole?: string[];
  redirectTo?: string;
  fallback?: React.ReactNode;
  showToast?: boolean;
  allowGuest?: boolean
}

export function AuthGuard({
  children;
  requireAuth;
=======
      const redirectTo = options?.redirectTo |'/login'
      const returnUrl = options?.returnUrl |router.asPath
          if (!requireAuth({ showToast: false })) return false
    const userRoles = user?.role ? [user.role] : []
    requireAuth
    requireRole
    checkPermission
    isAuthenticated
    user
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
    isLoading}
}