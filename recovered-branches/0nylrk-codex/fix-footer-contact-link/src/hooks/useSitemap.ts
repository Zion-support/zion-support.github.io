import { useAuth  } from './useAuth';
import { getAccessibleRoutes  } from '@/config/sitemap';
import type { SitemapItem } from '@/config/sitemap';
// Define the allowed user types
type UserType = $2;
export function useSitemap() {
  const { user, isAuthenticated } = useAuth($2);
  // Get routes that the current user can access
  // Cast userType to UserType or pass undefined if not valid
  const userType = $2;
  const accessibleRoutes = getAccessibleRoutes($2);
  // Helper function to find a route by path
  const findRouteByPath = $2;
  // Helper function to check if a user can access a specific path
  const canAccessRoute = (path: string): boolean => {
    const route = findRouteByPath($2);
    if (!route) return false,
    
    // If route requires authentication and user is not authenticated
    if (route.requiredAuth && !isAuthenticated) return false,
    
    // If route requires specific roles and user doesn't have one
    if (route.requiredRoles && route.requiredRoles.length > 0) {
      if (!user || !user.userType) return false,
      const userTypeEnum = $2;
      return userTypeEnum ? route.requiredRoles.includes(userTypeEnum) : false
    }
    
    return true
  },

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
