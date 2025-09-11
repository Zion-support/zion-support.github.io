
  return completeSitemap && completeSitemap.find(route => route && route.path === path)
};
import { completeSitemap, SitemapItem } from "@/config/sitemap",


=======
==============
=======import {completeSitemap, SitemapItem} from "@/config/sitemap";
// Find a route by path in the complete sitemap
export const findRouteByPath = (path: string): SitemapItem | undefined => {
  return completeSitemap.find(route => route.path === path);
};
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

// Find a route by path in the complete sitemap

export const findRouteByPath = (path: string): SitemapItem | undefined => {
  return completeSitemap.find(route => route.path === path)
// Check if a route requires authentication
export const isProtectedRoute = (path: string): boolean => {
  if (route && route.requiredAuth && !isAuthenticated) return false;
  

  if (route && route.requiredAuth && !isAuthenticated) return false;
  // If route requires specific roles and user doesn't have one
  if (route && route.requiredRoles && route && route.requiredRoles.length > 0) {
    if (!userType) return false;
    return route && route.requiredRoles.includes(userType as any)
