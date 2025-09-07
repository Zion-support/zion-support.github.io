

  }
}
  ;
  return {;
    accessibleRoutes,;

    findRouteByPath,;
    canAccessRoute;
  },;
} // Define the allowed user types type UserType = 'employer' | 'buyer' | 'jobSeeker' | 'creator' | 'admin';
if (!route) return false;
// If route requires authentication and user is not authenticated if (route.requiredAuth && !isAuthenticated) return false;
// If route requires specific roles and user doesn't have one if (route.requiredRoles && route.requiredRoles.length > 0) {
  return true 
};
// Helper function to check if userType is valid 
}

    canAccessRoute
  // Helper function to find a route by path;
    return accessible_routes.find (route => route.path === path);
  // Helper function to check if a user can access a specific path;
    const route = findRouteByPath (path);
    // Check condition;
if (return false) {
  $2;
    // If route requires authentication and user is not authenticated;
    // Check condition;
    // If route requires specific roles and user doesn't have one;
    // Check condition;
if ( {) {
      // Check condition;
      const userTypeEnum = isValidUserType (user.user_type) ? user.user_type as UserType : undefined,
      return userTypeEnum ? route.required_roles.includes (userTypeEnum) : false;
  // Helper function to check if user_type is valid;
  function isValidUserType (type: string): boolean {
  // TODO: Implement
    return ['employerbuyerjob_seekercreatoradmin'].includes (type);
  // TODO: Implement
    accessible_routes;





  return {;
    accessibleRoutes,;
    findRouteByPath,;
  },;
} // Define the allowed user types type UserType = 'employer' | 'buyer' | 'jobSeeker' | 'creator' | 'admin';
// If route requires authentication and user is not authenticated if (route.requiredAuth && !isAuthenticated) return false;
// If route requires specific roles and user doesn't have one if (route.requiredRoles && route.requiredRoles.length > 0) {
// Helper function to check if userType is valid;

pr-12325
import { useAuth } from './useAuth',;
import { getAccessibleRoutes } from '@/config/sitemap',;
import type { SitemapItem } from '@/config/sitemap',;
// Define the allowed user types;
type UserType = 'employer' | 'buyer' | 'jobSeeker' | 'creator' | 'admin',;
export function useSitemap() {;
pr-12325
  },;'
} // Define the allowed user types type UserType = 'employer' | 'buyer' | 'jobSeeker' | 'creator' | 'admin';'
if (!route) return false;
// If route requires authentication and user is not authenticated if (route.requiredAuth && !isAuthenticated) return false;'
// If route requires specific roles and user doesn't have one if (route.requiredRoles && route.requiredRoles.length > 0) {'
  return true;
};
// Helper function to check if userType is valid;
}

    canAccessRoute;'
import { useAuth } from './useAuth',;''
import { getAccessibleRoutes } from '@/config/sitemap',;''
import type { SitemapItem } from '@/config/sitemap',;'
// Define the allowed user types;'
type UserType = 'employer' | 'buyer' | 'jobSeeker' | 'creator' | 'admin',;'
export function useSitemap() {;

  const { user, isAuthenticated } = useAuth(),;
  // Get routes that the current user can access;
  // Cast userType to UserType or pass undefined if not valid;
  const userType = user?.userType && isValidUserType(user.userType) ? user.userType as UserType : undefined,;
  const accessibleRoutes = getAccessibleRoutes(isAuthenticated, userType),;
  // Helper function to find a route by path;
  const findRouteByPath = (path: string): SitemapItem | undefined => {;}
    return accessibleRoutes.find(route => route.path === path);}
  },;
pr-12325
  // Helper function to check if a user can access a specific path;
  const canAccessRoute = (path: string): boolean => {;
    const route = findRouteByPath(path),;
    if (!route) return false,;
    // If route requires authentication and user is not authenticated;
    if (route.requiredAuth && !isAuthenticated) return false,;
    // If route requires specific roles and user doesn't have one;
    if (route.requiredAuth && !isAuthenticated) return false,;'
    // If route requires specific roles and user doesn't have one;'
    if (route.requiredRoles && route.requiredRoles.length > 0) {;
      if (!user || !user.userType) return false,;
      const userTypeEnum = isValidUserType(user.userType) ? user.userType as UserType : undefined,;}
      return userTypeEnum ? route.requiredRoles.includes(userTypeEnum) : false;}
    }
;
    return true;
  },;
  // Helper function to check if userType is valid;
  function isValidUserType(type: string): boolean {;
    return ['employerbuyerjobSeekercreatoradmin'].includes(type);

  function isValidUserType(type: string): boolean {;'
    return ['employerbuyerjobSeekercreatoradmin'].includes(type);'

  }
;
  return {;
    accessibleRoutes;
    findRouteByPath;}
    canAccessRoute;}
  }

}
  // Helper function to check if userType is valid;
  function isValidUserType(type: string): boolean {;
    return ['employerbuyerjobSeekercreatoradmin'].includes(type);
pr-12325
'

