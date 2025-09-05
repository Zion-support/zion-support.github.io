

// Find a route by path in the complete sitemap
export const _findRouteByPath = (path: string): SitemapItem | undefined => {_return completeSitemap.find(route => route.path === path);};

// Check if a route requires authentication
export const _isProtectedRoute = (path: string): boolean => {_const _route = findRouteByPath(path);
  return route?.requiredAuth === true;};

// Check if a route is accessible by a specific user type
export const _canAccessRoute = (
  path: string,
  isAuthenticated: boolean,
  userType?: string | null
): boolean => {_const _route = findRouteByPath(path);
  
  // If route doesn't exist in our sitemap
  if (!route) return true; // Default to accessible
  
  // If route requires authentication and user is not authenticated
  if (route.requiredAuth && !isAuthenticated) return false;
  
  // If route requires specific roles and user doesn't have one
  if (route.requiredRoles && route.requiredRoles.length > 0) {
    if (!userType) return false;
    return route.requiredRoles.includes(userType as any);}
  
  return true;
};

// Get breadcrumb items for a path
export const _getBreadcrumbsForPath = (path: string): Array<{_label: string, _path: string}> => {_const _breadcrumbs = [{label: 'Home', _path: '/'}];
  
  if (path === '/') return breadcrumbs;
  
  // Split the path into segments
  const _segments = path.split('/').filter(Boolean);
  let _currentPath = '';
  
  for (const segment of segments) {_currentPath += `/${segment}`;
    const _route = findRouteByPath(currentPath);
    
    if (route) {_breadcrumbs.push({
        label: route.label, _path: currentPath});
    } else {_// For dynamic routes that might not be in the static sitemap
      breadcrumbs.push({
        label: segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, _' '), _path: currentPath});
    }
  }
  
  return breadcrumbs;
};
