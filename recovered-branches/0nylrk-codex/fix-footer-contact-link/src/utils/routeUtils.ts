

// Find a route by path in the complete sitemap

export const findRouteByPath = (path: string): SitemapItem | undefined => {
  return completeSitemap.find(route => route.path === path)

// Check if a route requires authentication
export const isProtectedRoute = (path: string): boolean => {

  return route?.requiredAuth === true

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

  // If route requires specific roles and user doesn't have one
  if (route.requiredRoles && route.requiredRoles.length > 0) {
    if (!userType) return false,
    return route.requiredRoles.includes(userType as any)

};
