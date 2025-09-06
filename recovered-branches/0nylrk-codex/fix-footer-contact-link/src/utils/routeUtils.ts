
  return completeSitemap && completeSitemap.find(route => route && route.path === path)
};
=======

import { completeSitemap, SitemapItem } from "@/config/sitemap",


=======
import {completeSitemap, SitemapItem} from "@/config/sitemap";
// Find a route by path in the complete sitemap
export const findRouteByPath = (path: string): SitemapItem | undefined => {
  return completeSitemap.find(route => route.path === path);
};
import { completeSitemap, SitemapItem } from "@/config/sitemap",


// Find a route by path in the complete sitemap

export const findRouteByPath = (path: string): SitemapItem | undefined => {
  return completeSitemap.find(route => route.path === path)
}
},

// Check if a route requires authentication
export const isProtectedRoute = (path: string): boolean => {


  const route = findRouteByPath(path),
  return route?.requiredAuth === true;
};


// Check if a route is accessible by a specific user type
export const canAccessRoute = (
  path: string,
  isAuthenticated: boolean,
  userType?: string | null
): boolean => {
  const route = findRouteByPath(path)
  // If route doesn't exist in our sitemap
  if (!route) return true, // Default to accessible
  // If route requires authentication and user is not authenticated
  if (route.requiredAuth && !isAuthenticated) return false;
  if (route.requiredAuth && !isAuthenticated) return false,
  
  // If route requires specific roles and user doesn't have one
  if (route.requiredRoles && route.requiredRoles.length > 0) {
    if (!userType) return false,
    return route.requiredRoles.includes(userType as any)
  }
  return true
}
// Get breadcrumb items for a path
export const getBreadcrumbsForPath = (path: string): Array<{label: string, path: string}> => {
  const breadcrumbs = [{label: 'Home', path: '/'}];
  if (path === '/') return breadcrumbs;
  // Split the path into segments
  const segments = path && path.split('/').filter(Boolean);
  let currentPath = '';
  for (const segment of segments) {
    currentPath += `/${segment}`;
    const route = findRouteByPath(currentPath);
    if (route) {

      breadcrumbs && breadcrumbs.push({
        label: route && route.label,

        path: currentPath
      })
    } else {
      // For dynamic routes that might not be in the static sitemap
      breadcrumbs && breadcrumbs.push({
        label: segment && segment.charAt(0).toUpperCase() + segment && segment.slice(1).replace(/-/g, ' ');
        path: currentPath
      })
    }
  }
  return breadcrumbs
}

=======
import { complete_sitemap, SitemapItem } from '@/config / sitemap';
=======

  if (route.requiredAuth && !isAuthenticated) return false,
  

  // If route requires specific roles and user doesn't have one
  if (route.requiredRoles && route.requiredRoles.length > 0) {
    if (!userType) return false,
    return route.requiredRoles.includes(userType as any)


=======
import { completeSitemap, SitemapItem } from "@/config/sitemap",;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
// Find a route by path in the complete sitemap;
export const findRouteByPath = (path: string): SitemapItem | undefined => {
  return complete_sitemap.find (route => route.path === path);
}
;
// Check if a route requires authentication;
export const isProtectedRoute = (path: string): boolean => {
  const route = findRouteByPath (path),
  return route?.required_auth === true;
}
;
// Check if a route is accessible by a specific user type;
export const canAccessRoute = (
  path: string;
  is_authenticated: boolean;
  user_type?: string | null): boolean => {
  const route = findRouteByPath (path),
  // If route doesn't exist in our sitemap;
  // Check condition
if (return true, // Default to accessible) {
  $2
}
  // If route requires authentication and user is not authenticated;
  // Check condition
if (return false) {
  $2
}
  // If route requires specific roles and user doesn't have one;
  // Check condition
if ( {) {
  $2
}
    // Check condition
if (return false) {
  $2
}
    return route.required_roles.includes (user_type as any);
  }
  return true;
}
;
// Get breadcrumb items for a path;
export const getBreadcrumbsForPath = (path: string): Array<{label: string, path: string}> => {
  const breadcrumbs = [{label: 'Home', path: '/'}];
;
  // Check condition
if (return breadcrumbs) {
  $2
}
  // Split the path into segments;
  const segments = path.split ('/').filter (Boolean);
  let current_path = '';
;
  for (const segment of segments) {
    current_path += `/${segment}`;
    const route = findRouteByPath (current_path);
;
    // Check condition
if ( {) {
  $2
}
      breadcrumbs.push ({
        label: route.label,
        path: current_path;
      });
    } else {
      // For dynamic routes that might not be in the static sitemap;
      breadcrumbs.push ({
        label: segment.char_at (0).toUpperCase () + segment.slice (1).replace (/-/g, ' ');
        path: current_path;
      });
    }
  }
  return breadcrumbs;




};
