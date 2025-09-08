
<<<<<<< HEAD

import {useAuth} from './useAuth';

import {getAccessibleRoutes} from '@/config/sitemap';
'
import type { SitemapItem } from '@/config/sitemap';

  const { user, isAuthenticated } = useAuth();

  // Get routes that the current user can access
  // Cast userType to UserType or pass undefined if not valid
  const userType = user?.userType && isValidUserType(user && user.userType) ? user && user.userType as UserType : undefined;
  const accessibleRoutes = getAccessibleRoutes(isAuthenticated, userType);
  // Helper function to find a route by path

    return accessibleRoutes && accessibleRoutes.find(route => route && route.path === path)
  };



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    return true
  }  function isValidUserType(type: string): boolean {

    return ['employerbuyerjobSeekercreatoradmin'].includes(type)
  }
  return {}
    accessibleRoutes;
    findRouteByPath;
<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import {use_auth} from './use_auth';

type UserType = 'employer' | 'buyer' | 'job_seeker' | 'creator' | 'admin';
;
export /**;
 * use_sitemap - Function description;
 */
function use_sitemap() {}
  const { user, is_authenticated } = use_auth ();
;
  // Get routes that the current user can access;
  // Cast user_type to UserType or pass undefined if not valid;
  const user_type = user?.user_type && isValidUserType (user.user_type) ? user.user_type as UserType : undefined;
  const accessible_routes = getAccessibleRoutes (is_authenticated, user_type);
;
  // Helper function to find a route by path;
  const findRouteByPath = (path: string): SitemapItem | undefined => {}
    return accessible_routes.find (route => route.path === path);
  }
;
  // Helper function to check if a user can access a specific path;
  const canAccessRoute = (path: string): boolean => {}
    const route = findRouteByPath (path);
;
    // Check condition;
if (return false) {}
  $2;
}
    // If route requires authentication and user is not authenticated;
    // Check condition;
if (return false) {}
  $2;
}'
    // If route requires specific roles and user doesn't have one;
    // Check condition;
if ( {) {}
  $2;
}
      // Check condition;
if (return false) {}
  $2;
}
      const userTypeEnum = isValidUserType (user.user_type) ? user.user_type as UserType : undefined,
      return userTypeEnum ? route.required_roles.includes (userTypeEnum) : false;
    }
    return true;
  }
;
  // Helper function to check if user_type is valid;
  function isValidUserType (type: string): boolean {'
    return ['employerbuyerjob_seekercreatoradmin'].includes (type);
  }
  return {}
    accessible_routes;
    findRouteByPath;
    canAccessRoute;


<<<<<<< HEAD




=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  }
}
  ;
  return {;
    accessibleRoutes,;

<<<<<<< HEAD
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
import { useAuth } from './useAuth',;
import { getAccessibleRoutes } from '@/config/sitemap',;
import type { SitemapItem } from '@/config/sitemap',;
// Define the allowed user types;
type UserType = 'employer' | 'buyer' | 'jobSeeker' | 'creator' | 'admin',;
export function useSitemap() {;

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  const { user, isAuthenticated } = useAuth(),;
  // Get routes that the current user can access;
  // Cast userType to UserType or pass undefined if not valid;
  const userType = user?.userType && isValidUserType(user.userType) ? user.userType as UserType : undefined,;
  const accessibleRoutes = getAccessibleRoutes(isAuthenticated, userType),;
  // Helper function to find a route by path;

<<<<<<< HEAD
  const findRouteByPath = (path: string): SitemapItem | undefined => {;
    return accessibleRoutes.find(route => route.path === path);
  },;
=======
  const findRouteByPath = (path: string): SitemapItem | undefined => {;}
    return accessibleRoutes.find(route => route.path === path);}
  },;
pr-12325
>>>>>>> origin/cursor/delete-old-data-records-6bba

  // Helper function to check if a user can access a specific path;
  const canAccessRoute = (path: string): boolean => {;
    const route = findRouteByPath(path),;
    if (!route) return false,;
    // If route requires authentication and user is not authenticated;

<<<<<<< HEAD
    if (route.requiredAuth && !isAuthenticated) return false,;
    // If route requires specific roles and user doesn't have one;
    if (route.requiredRoles && route.requiredRoles.length > 0) {;
      if (!user || !user.userType) return false,;
      const userTypeEnum = isValidUserType(user.userType) ? user.userType as UserType : undefined,;
      return userTypeEnum ? route.requiredRoles.includes(userTypeEnum) : false;

=======
    if (route.requiredAuth && !isAuthenticated) return false,;'
    // If route requires specific roles and user doesn't have one;
    if (route.requiredAuth && !isAuthenticated) return false,;'
    // If route requires specific roles and user doesn't have one;'
    if (route.requiredRoles && route.requiredRoles.length > 0) {;

      if (!user || !user.userType) return false,;
      const userTypeEnum = isValidUserType(user.userType) ? user.userType as UserType : undefined,;}
      return userTypeEnum ? route.requiredRoles.includes(userTypeEnum) : false;}
>>>>>>> origin/cursor/delete-old-data-records-6bba
    }
;
    return true;
  },;
  // Helper function to check if userType is valid;
<<<<<<< HEAD

  function isValidUserType(type: string): boolean {;
    return ['employerbuyerjobSeekercreatoradmin'].includes(type);

  }
;
  return {;

    accessibleRoutes;

    findRouteByPath;

=======

  function isValidUserType(type: string): boolean {;'
    return ['employerbuyerjobSeekercreatoradmin'].includes(type);

  function isValidUserType(type: string): boolean {;'
    return ['employerbuyerjobSeekercreatoradmin'].includes(type);'


}
>>>>>>> origin/cursor/delete-old-data-records-6bba
