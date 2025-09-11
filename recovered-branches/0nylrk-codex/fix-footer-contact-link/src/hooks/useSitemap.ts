<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import {useAuth} from './useAuth';
import {getAccessibleRoutes} from '@/config/sitemap';

import type { SitemapItem } from '@/config/sitemap';
// Define the allowed user types


=======


import {useAuth} from './useAuth';
import {getAccessibleRoutes} from '@/config/sitemap';
import type { SitemapItem } from '@/config/sitemap';
// Define the allowed user types

type UserType = 'employer' | 'buyer' | 'jobSeeker' | 'creator' | 'admin';
export function useSitemap() {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export function useSitemap() {;


  const { user, isAuthenticated } = useAuth();
  // Get routes that the current user can access
  // Cast userType to UserType or pass undefined if not valid
  const userType = user?.userType && isValidUserType(user && user.userType) ? user && user.userType as UserType : undefined;
  const accessibleRoutes = getAccessibleRoutes(isAuthenticated, userType);
  // Helper function to find a route by path
  const findRouteByPath = (path: string): SitemapItem | undefined => {

    return accessibleRoutes && accessibleRoutes.find(route => route && route.path === path)
  };
  

<<<<<<< HEAD
<<<<<<< HEAD

import { useAuth  } from './useAuth';
import { getAccessibleRoutes  } from '@/config/sitemap';
import {useAuth} from './useAuth';
import {getAccessibleRoutes} from '@/config/sitemap';
import type { SitemapItem } from '@/config/sitemap';
// Define the allowed user types

type UserType = 'employer' | 'buyer' | 'jobSeeker' | 'creator' | 'admin';
export function useSitemap() {
export function useSitemap() {;
  const { user, isAuthenticated } = useAuth();
  // Get routes that the current user can access
  // Cast userType to UserType or pass undefined if not valid
  const userType = user?.userType && isValidUserType(user.userType) ? user.userType as UserType : undefined;
  const accessibleRoutes = getAccessibleRoutes(isAuthenticated, userType);
  // Helper function to find a route by path
  const findRouteByPath = (path: string): SitemapItem | undefined => {
    return accessibleRoutes.find(route => route.path === path)
  }
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  // Helper function to check if a user can access a specific path
  const canAccessRoute = (path: string): boolean => {
    const route = findRouteByPath(path);
    if (!route) return false;
    // If route requires authentication and user is not authenticated
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    if (route && route.requiredAuth && !isAuthenticated) return false;
=======

    if (route && route.requiredAuth && !isAuthenticated) return false;
    
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    // If route requires specific roles and user doesn't have one
    if (route && route.requiredRoles && route && route.requiredRoles.length > 0) {
      if (!user || !user && user.userType) return false;
      const userTypeEnum = isValidUserType(user && user.userType) ? user && user.userType as UserType : undefined,
      return userTypeEnum ? route && route.requiredRoles.includes(userTypeEnum) : false

<<<<<<< HEAD
<<<<<<< HEAD
import { useAuth } from './useAuth',;
import { getAccessibleRoutes } from '@/config/sitemap',;
import type { SitemapItem } from '@/config/sitemap',;
;
// Define the allowed user types;
type UserType = 'employer' | 'buyer' | 'jobSeeker' | 'creator' | 'admin',;
;
export function useSitemap() {;
  const { user, isAuthenticated } = useAuth(),;
  ;
  // Get routes that the current user can access;
  // Cast userType to UserType or pass undefined if not valid;
  const userType = user?.userType && isValidUserType(user.userType) ? user.userType as UserType :undefined,;
  const accessibleRoutes = getAccessibleRoutes(isAuthenticated, userType),;
  ;
  // Helper function to find a route by path;
  const findRouteByPath = (path:string):SitemapItem | undefined => {;
    return accessibleRoutes.find(route => route.path === path);
  },;
  ;
  // Helper function to check if a user can access a specific path;
  const canAccessRoute = (path:string):boolean => {;
    const route = findRouteByPath(path),;
    ;
    if (!route) return false,;
    ;
    // If route requires authentication and user is not authenticated;
    if (route.requiredAuth && !isAuthenticated) return false,;
    ;
    // If route requires specific roles and user doesn't have one;
    if (route.requiredRoles && route.requiredRoles.length > 0) {;
      if (!user || !user.userType) return false,;
      const userTypeEnum = isValidUserType(user.userType) ? user.userType as UserType :undefined,;
      return userTypeEnum ? route.requiredRoles.includes(userTypeEnum) :false;
    }
    ;
    return true,;
  },;
;
  // Helper function to check if userType is valid;
  function isValidUserType(type:string):boolean {;
    return ['employerbuyer', 'jobSeekercreator', 'admin'].includes(type),;
  }
    if (route.requiredAuth && !isAuthenticated) return false;
    // If route requires specific roles and user doesn't have one
    if (route.requiredRoles && route.requiredRoles.length > 0) {
      if (!user |!user.userType) return false;
      const userTypeEnum = isValidUserType(user.userType) ? user.userType as UserType : undefined
      return userTypeEnum ? route.requiredRoles.includes(userTypeEnum) : false
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }
    return true
  }
  // Helper function to check if userType is valid
  function isValidUserType(type: string): boolean {
    return ['employerbuyerjobSeekercreatoradmin'].includes(type)
  }
  return {
    accessibleRoutes;
    findRouteByPath;
<<<<<<< HEAD
<<<<<<< HEAD
=======

    canAccessRoute
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import {use_auth} from './use_auth';
import {getAccessibleRoutes} from '@/config / sitemap';
import type { SitemapItem } from '@/config / sitemap';
=======

    canAccessRoute
import { useAuth } from './useAuth',;
import { getAccessibleRoutes } from '@/config/sitemap',;
import type { SitemapItem } from '@/config/sitemap',;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
// Define the allowed user types;
type UserType = 'employer' | 'buyer' | 'job_seeker' | 'creator' | 'admin';
;
export /**
 * use_sitemap - Function description
 */
function use_sitemap() {
  const { user, is_authenticated } = use_auth ();
;
  // Get routes that the current user can access;
  // Cast user_type to UserType or pass undefined if not valid;
  const user_type = user?.user_type && isValidUserType (user.user_type) ? user.user_type as UserType : undefined;
  const accessible_routes = getAccessibleRoutes (is_authenticated, user_type);
;
  // Helper function to find a route by path;
  const findRouteByPath = (path: string): SitemapItem | undefined => {
    return accessible_routes.find (route => route.path === path);
  }
;
  // Helper function to check if a user can access a specific path;
  const canAccessRoute = (path: string): boolean => {
    const route = findRouteByPath (path);
;
    // Check condition
if (return false) {
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
      const userTypeEnum = isValidUserType (user.user_type) ? user.user_type as UserType : undefined,
      return userTypeEnum ? route.required_roles.includes (userTypeEnum) : false;
    }
    return true;
  }
;
  // Helper function to check if user_type is valid;
  function isValidUserType (type: string): boolean {
    return ['employerbuyerjob_seekercreatoradmin'].includes (type);
  }
  return {
    accessible_routes;
    findRouteByPath;
    canAccessRoute;



<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  }
}
  ;
  return {;
    accessibleRoutes,;
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
  const { user, isAuthenticated } = useAuth(),;
  // Get routes that the current user can access;
  // Cast userType to UserType or pass undefined if not valid;
  const userType = user?.userType && isValidUserType(user.userType) ? user.userType as UserType : undefined,;
  const accessibleRoutes = getAccessibleRoutes(isAuthenticated, userType),;
  // Helper function to find a route by path;
  const findRouteByPath = (path: string): SitemapItem | undefined => {;
    return accessibleRoutes.find(route => route.path === path);
  },;
  // Helper function to check if a user can access a specific path;
  const canAccessRoute = (path: string): boolean => {;
    const route = findRouteByPath(path),;
    if (!route) return false,;
    // If route requires authentication and user is not authenticated;
    if (route.requiredAuth && !isAuthenticated) return false,;
    // If route requires specific roles and user doesn't have one;
    if (route.requiredRoles && route.requiredRoles.length > 0) {;
      if (!user || !user.userType) return false,;
      const userTypeEnum = isValidUserType(user.userType) ? user.userType as UserType : undefined,;
      return userTypeEnum ? route.requiredRoles.includes(userTypeEnum) : false;
    }
;
    return true;
  },;
  // Helper function to check if userType is valid;
  function isValidUserType(type: string): boolean {;
    return ['employerbuyerjobSeekercreatoradmin'].includes(type);
  }
;
  return {;
    accessibleRoutes;
    findRouteByPath;
    canAccessRoute;
  }
}
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  }
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
