
import { completeSitemap, SitemapItem } from "@/config/sitemap";
// Find a route by path in the complete sitemap
<<<<<<< HEAD
<<<<<<< HEAD
export const findRouteByPath = null;
=======
export const findRouteByPath = (path: string): SitemapItem | undefined => {
  return completeSitemap.find(route => route.path === path)
}
// Check if a route requires authentication
export const isProtectedRoute = (path: string): boolean => {
  const route = findRouteByPath(path)
  return route?.requiredAuth === true
}
=======
}

export const findRouteByPath = (path: string): SitemapItem | undefined => {
  return completeSitemap.find(route => route.path === path);
};
//Check if a route requires authentication
}

export const isProtectedRoute = (path: string) : boolean => {
  const route = findRouteByPath (path);

};

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
// Check if a route is accessible by a specific user type
}

export const canAccessRoute = (
  path: string;
  isAuthenticated: boolean;
  userType?: string | null
): boolean => {
  const route = findRouteByPath(path)
  // If route doesn't exist in our sitemap
  if (!route) return true, // Default to accessible
  // If route requires authentication and user is not authenticated
  if (route.requiredAuth && !isAuthenticated) return false;
  // If route requires specific roles and user doesn't have one
  if (route.requiredRoles && route.requiredRoles.length > 0) {
    if (!userType) return false;
    return route.requiredRoles.includes(userType as any)
  }
  return true
}
// Get breadcrumb items for a path
<<<<<<< HEAD
export const getBreadcrumbsForPath = (path: string): Array<{label: string, path: string}> => {
  const breadcrumbs = [{label: 'Home', path: '/'}];
=======
}

export const getBreadcrumbsForPath = (
  path: string
): Array<{ label: string; path: string }> => {
  const breadcrumbs = [{ label: 'Home', path: '/' }];

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
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
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
