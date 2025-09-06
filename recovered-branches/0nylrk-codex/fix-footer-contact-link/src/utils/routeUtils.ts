
<<<<<<< HEAD
import {completeSitemap, SitemapItem} from "@/config/sitemap";
// Find a route by path in the complete sitemap
export const findRouteByPath = (path: string): SitemapItem | undefined => {
  return completeSitemap.find(route => route.path === path);
};
=======
import { completeSitemap, SitemapItem } from "@/config/sitemap",

// Find a route by path in the complete sitemap

export const findRouteByPath = (path: string): SitemapItem | undefined => {
  return completeSitemap.find(route => route.path === path)
<<<<<<< HEAD
}
=======
},
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
// Check if a route requires authentication
export const isProtectedRoute = (path: string): boolean => {
  const route = findRouteByPath(path),
<<<<<<< HEAD
  return route?.requiredAuth === true;
};

// Check if a route is accessible by a specific user type
export const canAccessRoute = (;
  path: string;
  isAuthenticated: boolean;
=======
  return route?.requiredAuth === true
<<<<<<< HEAD
}
=======
},

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
// Check if a route is accessible by a specific user type
export const canAccessRoute = (
  path: string,
  isAuthenticated: boolean,
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  userType?: string | null
): boolean => {
  const route = findRouteByPath(path)
  // If route doesn't exist in our sitemap
  if (!route) return true, // Default to accessible
  // If route requires authentication and user is not authenticated
<<<<<<< HEAD
  if (route.requiredAuth && !isAuthenticated) return false;
=======
  if (route.requiredAuth && !isAuthenticated) return false,
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  // If route requires specific roles and user doesn't have one
  if (route.requiredRoles && route.requiredRoles.length > 0) {
    if (!userType) return false,
    return route.requiredRoles.includes(userType as any)
<<<<<<< HEAD
  }
  return true
}
// Get breadcrumb items for a path
export const getBreadcrumbsForPath = (path: string): Array<{label: string, path: string}> => {;
  const breadcrumbs = [{label: 'Home', path: '/'}];
  if (path === '/') return breadcrumbs;
  // Split the path into segments
  const segments = path.split('/').filter(Boolean);
  let currentPath = '';
  for (const segment of segments) {
    currentPath += `/${segment}`;
    const route = findRouteByPath(currentPath);
    if (route) {
      breadcrumbs.push({
        label: route.label
        path: currentPath
      })
    } else {
      // For dynamic routes that might not be in the static sitemap
      breadcrumbs.push({
        label: segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ');
        path: currentPath
      })
    }
  }
  return breadcrumbs
=======
import { completeSitemap, SitemapItem } from "@/config/sitemap",;
// Find a route by path in the complete sitemap;
export const findRouteByPath = (path: string): SitemapItem | undefined => {;
  return completeSitemap.find(route => route.path === path);
},;
// Check if a route requires authentication;
export const isProtectedRoute = (path: string): boolean => {;
  const route = findRouteByPath(path),;
  return route?.requiredAuth === true;
},;
// Check if a route is accessible by a specific user type;
export const canAccessRoute = (;
  path: string,;
  isAuthenticated: boolean,;
  userType?: string | null;
): boolean => {;
  const route = findRouteByPath(path),;
  // If route doesn't exist in our sitemap;
  if (!route) return true, // Default to accessible;
  // If route requires authentication and user is not authenticated;
  if (route.requiredAuth && !isAuthenticated) return false,;
  // If route requires specific roles and user doesn't have one;
  if (route.requiredRoles && route.requiredRoles.length > 0) {;
    if (!userType) return false,;
    return route.requiredRoles.includes(userType as any);
  }
;
  return true;
},;
// Get breadcrumb items for a path;
export const getBreadcrumbsForPath = (path: string): Array<{label: string, path: string}> => {;
  const breadcrumbs = [{label: 'Home', path: '/'}],;
  if (path === '/') return breadcrumbs,;
  // Split the path into segments;
  const segments = path.split('/').filter(Boolean),;
  let currentPath = '',;
  for (const segment of segments) {;
    currentPath += `/${segment}`,;
    const route = findRouteByPath(currentPath),;
    if (route) {;
      breadcrumbs.push({;
        label: route.label,;
        path: currentPath;
      });
    } else {;
      // For dynamic routes that might not be in the static sitemap;
      breadcrumbs.push({;
        label: segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ');
        path: currentPath;
      });
    }
  }
;
  return breadcrumbs;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
};
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
