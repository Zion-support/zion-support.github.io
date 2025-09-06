
import {completeSitemap, SitemapItem} from "@/config/sitemap";

// Find a route by path in the complete sitemap
export const findRouteByPath = (path: string): SitemapItem | undefined => {
  return completeSitemap && completeSitemap.find(route => route && route.path === path)
};

// Check if a route requires authentication
export const isProtectedRoute = (path: string): boolean => {
  const route = findRouteByPath(path),
  return route?.requiredAuth === true
};

// Check if a route is accessible by a specific user type
export const canAccessRoute = (
  path: string;
  isAuthenticated: boolean;
  userType?: string | null
): boolean => {
  const route = findRouteByPath(path),
  
  // If route doesn't exist in our sitemap
  if (!route) return true, // Default to accessible
  
  // If route requires authentication and user is not authenticated
  if (route && route.requiredAuth && !isAuthenticated) return false;
  
  // If route requires specific roles and user doesn't have one
  if (route && route.requiredRoles && route && route.requiredRoles.length > 0) {
    if (!userType) return false;
    return route && route.requiredRoles.includes(userType as any)
  }
  
  return true
};

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
};
