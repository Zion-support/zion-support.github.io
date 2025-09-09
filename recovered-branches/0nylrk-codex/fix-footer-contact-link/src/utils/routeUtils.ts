import { completeSitemap, SitemapItem } from "@/config/sitemap",

import {completeSitemap, SitemapItem} from "@/config/sitemap";
// Find a route by path in the complete sitemap
export const findRouteByPath = (path: string): SitemapItem | undefined => {
  return completeSitemap.find(route => route.path === path)
};// Find a route by path in the complete sitemap

export const findRouteByPath = (path: string): SitemapItem | undefined => {
  return completeSitemap.find(route => route.path === path)

// Check if a route requires authentication
export const isProtectedRoute = (path: string): boolean => {
  const route = findRouteByPath(path),
  return route?.requiredAuth === true
};


import { completeSitemap, SitemapItem } from "@/config/sitemap",

