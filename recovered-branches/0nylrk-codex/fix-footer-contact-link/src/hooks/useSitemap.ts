
<<<<<<< HEAD
import { useAuth } from './useAuth',
import { getAccessibleRoutes } from '@/config/sitemap',
import type { SitemapItem } from '@/config/sitemap',
=======
import type {_SitemapItem} from '@/config/sitemap';

>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
// Define the allowed user types
type UserType = 'employer' | 'buyer' | 'jobSeeker' | 'creator' | 'admin',

<<<<<<< HEAD
export function useSitemap() {
  const { user, isAuthenticated } = useAuth(),
  
  // Get routes that the current user can access
  // Cast userType to UserType or pass undefined if not valid
  const userType = user?.userType && isValidUserType(user.userType) ? user.userType as UserType : undefined,
  const accessibleRoutes = getAccessibleRoutes(isAuthenticated, userType),
  
  // Helper function to find a route by path
  const findRouteByPath = (path: string): SitemapItem | undefined => {
    return accessibleRoutes.find(route => route.path === path)
  },
  
  // Helper function to check if a user can access a specific path
  const canAccessRoute = (path: string): boolean => {
    const route = findRouteByPath(path),
=======
export function useSitemap() {_const { user, _isAuthenticated} = useAuth();
  
  // Get routes that the current user can access
  // Cast userType to UserType or pass undefined if not valid
  const _userType = user?.userType && isValidUserType(user.userType) ? user.userType as UserType : undefined;
  const _accessibleRoutes = getAccessibleRoutes(isAuthenticated, userType);
  
  // Helper function to find a route by path
  const _findRouteByPath = (_path: string): SitemapItem | undefined => {_return accessibleRoutes.find(route => route.path === path);};
  
  // Helper function to check if a user can access a specific path
  const _canAccessRoute = (_path: string): boolean => {_const _route = findRouteByPath(path);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    if (!route) return false,
    
    // If route requires authentication and user is not authenticated
    if (route.requiredAuth && !isAuthenticated) return false,
    
    // If route requires specific roles and user doesn't have one
    if (route.requiredRoles && route.requiredRoles.length > 0) {
<<<<<<< HEAD
      if (!user || !user.userType) return false,
      const userTypeEnum = isValidUserType(user.userType) ? user.userType as UserType : undefined,
      return userTypeEnum ? route.requiredRoles.includes(userTypeEnum) : false
    }
=======
      if (!user || !user.userType) return false;
      const _userTypeEnum = isValidUserType(user.userType) ? user.userType as UserType : undefined;
      return userTypeEnum ? route.requiredRoles.includes(userTypeEnum) : false;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    return true
  },

  // Helper function to check if userType is valid
<<<<<<< HEAD
  function isValidUserType(type: string): boolean {
    return ['employerbuyerjobSeekercreatoradmin'].includes(type)
  }
  
  return {
    accessibleRoutes,
    findRouteByPath,
    canAccessRoute
  }
=======
  function isValidUserType(_type: string): boolean {_return ['employer', _'buyer', _'jobSeeker', _'creator', _'admin'].includes(type);}
  
  return {_accessibleRoutes, _findRouteByPath, _canAccessRoute};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}
