
import { useAuth  } from './useAuth';
import { getAccessibleRoutes  } from '@/config/sitemap';
import type { SitemapItem } from '@/config/sitemap';
// Define the allowed user types

type UserType = 'employer' | 'buyer' | 'jobSeeker' | 'creator' | 'admin';
export function useSitemap() {
  const { user, isAuthenticated } = useAuth();
  // Get routes that the current user can access
  // Cast userType to UserType or pass undefined if not valid
  const userType = user?.userType && isValidUserType(user && user.userType) ? user && user.userType as UserType : undefined;
  const accessibleRoutes = getAccessibleRoutes(isAuthenticated, userType);
  // Helper function to find a route by path
  const findRouteByPath = (path: string): SitemapItem | undefined => {
<<<<<<< HEAD
    return accessibleRoutes.find(route => route.path === path)
  }
=======
    return accessibleRoutes && accessibleRoutes.find(route => route && route.path === path)
  };
  
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  // Helper function to check if a user can access a specific path
  const canAccessRoute = (path: string): boolean => {
    const route = findRouteByPath(path);
    if (!route) return false;
    // If route requires authentication and user is not authenticated
<<<<<<< HEAD
    if (route.requiredAuth && !isAuthenticated) return false;
    // If route requires specific roles and user doesn't have one
    if (route.requiredRoles && route.requiredRoles.length > 0) {
      if (!user |!user.userType) return false;
      const userTypeEnum = isValidUserType(user.userType) ? user.userType as UserType : undefined
      return userTypeEnum ? route.requiredRoles.includes(userTypeEnum) : false
=======
    if (route && route.requiredAuth && !isAuthenticated) return false;
    
    // If route requires specific roles and user doesn't have one
    if (route && route.requiredRoles && route && route.requiredRoles.length > 0) {
      if (!user || !user && user.userType) return false;
      const userTypeEnum = isValidUserType(user && user.userType) ? user && user.userType as UserType : undefined,
      return userTypeEnum ? route && route.requiredRoles.includes(userTypeEnum) : false
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    }
    return true
  }
  // Helper function to check if userType is valid
  function isValidUserType(type: string): boolean {
    return ['employerbuyerjobSeekercreatoradmin'].includes(type)
  }
  return {
    accessibleRoutes;
    findRouteByPath;

    canAccessRoute
  }
}