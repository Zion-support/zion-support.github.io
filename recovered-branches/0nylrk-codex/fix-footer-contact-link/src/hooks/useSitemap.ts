
import { useAuth  } from './useAuth';
import { getAccessibleRoutes  } from '@/config/sitemap';
import {useAuth} from './useAuth';
import {getAccessibleRoutes} from '@/config/sitemap';
import type { SitemapItem } from '@/config/sitemap';
// Define the allowed user types

type UserType = 'employer' | 'buyer' | 'jobSeeker' | 'creator' | 'admin';
export function useSitemap() {
export function useSitemap() {;
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  const { user, isAuthenticated } = useAuth();
  // Get routes that the current user can access
  // Cast userType to UserType or pass undefined if not valid
  const userType = user?.userType && isValidUserType(user && user.userType) ? user && user.userType as UserType : undefined;
  const accessibleRoutes = getAccessibleRoutes(isAuthenticated, userType);
  // Helper function to find a route by path
  const findRouteByPath = (path: string): SitemapItem | undefined => {

    return accessibleRoutes && accessibleRoutes.find(route => route && route.path === path)
  };
  

  // Helper function to check if a user can access a specific path
  const canAccessRoute = (path: string): boolean => {
    const route = findRouteByPath(path);
    if (!route) return false;
    // If route requires authentication and user is not authenticated

    if (route && route.requiredAuth && !isAuthenticated) return false;
    
    // If route requires specific roles and user doesn't have one
    if (route && route.requiredRoles && route && route.requiredRoles.length > 0) {
      if (!user || !user && user.userType) return false;
      const userTypeEnum = isValidUserType(user && user.userType) ? user && user.userType as UserType : undefined,
      return userTypeEnum ? route && route.requiredRoles.includes(userTypeEnum) : false

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
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  }
}