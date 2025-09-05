
<<<<<<< HEAD
<<<<<<< HEAD
import { completeSitemap, SitemapItem } from "@/config/sitemap",
=======
import { completeSitemap, SitemapItem } from &quot;@/config/sitemap&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

// Find a route by path in the complete sitemap
export const findRouteByPath = (path: string): SitemapItem | undefined => {
  return completeSitemap.find(route => route.path === path)
},

// Check if a route requires authentication
export const isProtectedRoute = (path: string): boolean => {
  const route = findRouteByPath(path),
  return route?.requiredAuth === true
},
=======

// Find a route by path in the complete sitemap
export const _findRouteByPath = (path: string): SitemapItem | undefined => {_return completeSitemap.find(route => route.path === path);};

// Check if a route requires authentication
export const _isProtectedRoute = (path: string): boolean => {_const _route = findRouteByPath(path);
  return route?.requiredAuth === true;};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

// Check if a route is accessible by a specific user type
export const _canAccessRoute = (
  path: string,
  isAuthenticated: boolean,
  userType?: string | null
<<<<<<< HEAD
): boolean => {
  const route = findRouteByPath(path),
=======
): boolean => {_const _route = findRouteByPath(path);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  // If route doesn't exist in our sitemap
  if (!route) return true, // Default to accessible
  
  // If route requires authentication and user is not authenticated
  if (route.requiredAuth && !isAuthenticated) return false,
  
  // If route requires specific roles and user doesn't have one
  if (route.requiredRoles && route.requiredRoles.length > 0) {
<<<<<<< HEAD
    if (!userType) return false,
    return route.requiredRoles.includes(userType as any)
  }
=======
    if (!userType) return false;
    return route.requiredRoles.includes(userType as any);}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  return true
},

// Get breadcrumb items for a path
<<<<<<< HEAD
export const getBreadcrumbsForPath = (path: string): Array<{label: string, path: string}> => {
  const breadcrumbs = [{label: 'Home', path: '/'}],
=======
export const _getBreadcrumbsForPath = (path: string): Array<{_label: string, _path: string}> => {_const _breadcrumbs = [{label: 'Home', _path: '/'}];
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  if (path === '/') return breadcrumbs,
  
  // Split the path into segments
<<<<<<< HEAD
  const segments = path.split('/').filter(Boolean),
  let currentPath = '',
  
  for (const segment of segments) {
    currentPath += `/${segment}`,
    const route = findRouteByPath(currentPath),
=======
  const _segments = path.split('/').filter(Boolean);
  let _currentPath = '';
  
  for (const segment of segments) {_currentPath += `/${segment}`;
    const _route = findRouteByPath(currentPath);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    if (route) {_breadcrumbs.push({
        label: route.label, _path: currentPath});
    } else {_// For dynamic routes that might not be in the static sitemap
      breadcrumbs.push({
<<<<<<< HEAD
        label: route.label,
        path: currentPath
      })
    } else {
      // For dynamic routes that might not be in the static sitemap
      breadcrumbs.push({
        label: segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' '),
        path: currentPath
      })
=======
        label: segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, _' '), _path: currentPath});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
  }
  
  return breadcrumbs
},
