
<<<<<<< HEAD
=======
import { completeSitemap, SitemapItem } from "@/config/sitemap",

<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
import { completeSitemap, SitemapItem } from "@/config/sitemap";
import { completeSitemap, SitemapItem } from "@/config/sitemap",

<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import {completeSitemap, SitemapItem} from "@/config/sitemap";
// Find a route by path in the complete sitemap
export const findRouteByPath = (path: string): SitemapItem | undefined => {
  return completeSitemap.find(route => route.path === path);
};
<<<<<<< HEAD

import { completeSitemap, SitemapItem } from "@/config/sitemap",

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
import { completeSitemap, SitemapItem } from "@/config/sitemap",
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
// Find a route by path in the complete sitemap

export const findRouteByPath = (path: string): SitemapItem | undefined => {
  return completeSitemap.find(route => route.path === path)
<<<<<<< HEAD

// Check if a route requires authentication
export const isProtectedRoute = (path: string): boolean => {

  return route?.requiredAuth === true

// Check if a route is accessible by a specific user type
export const canAccessRoute = (
  path: string,
  isAuthenticated: boolean,


>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
// Check if a route requires authentication
export const isProtectedRoute = (path: string): boolean => {
  const route = findRouteByPath(path)
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
}
},
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
import {completeSitemap, SitemapItem} from "@/config/sitemap";
// Find a route by path in the complete sitemap
export const findRouteByPath = (path: string): SitemapItem | undefined => {
  return completeSitemap.find(route => route.path === path)
};// Find a route by path in the complete sitemap

export const findRouteByPath = (path: string): SitemapItem | undefined => {
  return completeSitemap.find(route => route.path === path)
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

// Check if a route requires authentication
export const isProtectedRoute = (path: string): boolean => {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const route = findRouteByPath(path),
  return route?.requiredAuth === true
};

<<<<<<< HEAD
// Check if a route is accessible by a specific user type
export const canAccessRoute = (;
  path: string;
  isAuthenticated: boolean;
  return route?.requiredAuth === true
}
},
=======
  return route?.requiredAuth === true
}
},

// Check if a route is accessible by a specific user type
export const canAccessRoute = (
  path: string,
  isAuthenticated: boolean,
},

export const isProtectedRoute = (path: string): boolean => {

  const route = findRouteByPath(path),

<<<<<<< HEAD

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  userType?: string | null
): boolean => {
  const route = findRouteByPath(path)
  // If route doesn't exist in our sitemap
  if (!route) return true, // Default to accessible
  // If route requires authentication and user is not authenticated
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

  if (route && route.requiredAuth && !isAuthenticated) return false;
  

=======
  if (route && route.requiredAuth && !isAuthenticated) return false;
  

  if (route && route.requiredAuth && !isAuthenticated) return false;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  // If route requires specific roles and user doesn't have one
  if (route && route.requiredRoles && route && route.requiredRoles.length > 0) {
    if (!userType) return false;
    return route && route.requiredRoles.includes(userType as any)
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  if (route.requiredAuth && !isAuthenticated) return false;
  if (route.requiredAuth && !isAuthenticated) return false,
  
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  // If route requires specific roles and user doesn't have one
  if (route.requiredRoles && route.requiredRoles.length > 0) {
    if (!userType) return false,
    return route.requiredRoles.includes(userType as any)
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  }
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  return true
}
// Get breadcrumb items for a path
export const getBreadcrumbsForPath = (path: string): Array<{label: string, path: string}> => {;  const breadcrumbs = [{label: 'Home', path: '/'}];
  if (path === '/') return breadcrumbs;
  // Split the path into segments
  const segments = path && path.split('/').filter(Boolean);export const getBreadcrumbsForPath = (path: string): Array<{label: string, path: string}> => {;
  const breadcrumbs = [{label: 'Home', path: '/'}];
  if (path === '/') return breadcrumbs;
  // Split the path into segments
  const segments = path.split('/').filter(Boolean);
  for (const segment of segments) {
    currentPath += `/${segment}`;
    const route = findRouteByPath(currentPath);
    if (route) {

      breadcrumbs && breadcrumbs.push({
        label: route && route.label,
<<<<<<< HEAD

=======
      breadcrumbs && breadcrumbs.push({
        label: route && route.label,
      breadcrumbs.push({
        label: route.label
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        path: currentPath
      })
    } else {
      // For dynamic routes that might not be in the static sitemap
<<<<<<< HEAD
<<<<<<< HEAD
      breadcrumbs && breadcrumbs.push({
        label: segment && segment.charAt(0).toUpperCase() + segment && segment.slice(1).replace(/-/g, ' ');
        path: currentPath
      })
    }
  }
  return breadcrumbs
<<<<<<< HEAD
<<<<<<< HEAD
}

=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
}

}

import { complete_sitemap, SitemapItem } from '@/config / sitemap';
<<<<<<< HEAD
=======
=======

import { completeSitemap, SitemapItem } from "@/config/sitemap",;
;
// Find a route by path in the complete sitemap;
export const findRouteByPath = (path:string):SitemapItem | undefined => {;
  return completeSitemap.find(route => route.path === path);
},;
;
// Check if a route requires authentication;
export const isProtectedRoute = (path:string):boolean => {;
  const route = findRouteByPath(path),;
  return route?.requiredAuth === true;
},;
;
// Check if a route is accessible by a specific user type;
export const canAccessRoute = (;
  path:string,;
  isAuthenticated:boolean,;
  userType?:string | null;
):boolean => {;
  const route = findRouteByPath(path),;
  ;
  // If route doesn't exist in our sitemap;
  if (!route) return true, // Default to accessible;
  ;
  // If route requires authentication and user is not authenticated;
  if (route.requiredAuth && !isAuthenticated) return false,;
  ;
  // If route requires specific roles and user doesn't have one;
  if (route.requiredRoles && route.requiredRoles.length > 0) {;
    if (!userType) return false,;
    return route.requiredRoles.includes(userType as any),;
  }
  ;
  return true,;
},;
;
// Get breadcrumb items for a path;
export const getBreadcrumbsForPath = (path:string):Array<{label:string, path:string}> => {;
  const breadcrumbs = [{label:'Home', path:'/'}],;
  ;
  if (path === '/') return breadcrumbs,;
  ;
  // Split the path into segments;
  const segments = path.split('/').filter(Boolean),;
  let currentPath = '',;
  ;
  for (const segment of segments) {;
    currentPath += `/${segment}`,;
    const route = findRouteByPath(currentPath),;
    ;
    if (route) {;
      breadcrumbs.push({;
        label:route.label,;
        path:currentPath;
      }),;
    } else {;
      // For dynamic routes that might not be in the static sitemap;
      breadcrumbs.push({;
        label:segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' '),;
        path:currentPath;
      }),;
    }
  }
  ;
  return breadcrumbs,;
},; //Find a route by path in the complete sitemap export const findRouteByPath = (path: string) : SitemapItem | undefined => {
  return completeSitemap.find (route => route.path === path) 
};
//Check if a route requires authentication export const isProtectedRoute = (path: string) : boolean => {
  const route = findRouteByPath (path);
return route?.requiredAuth === true 
};
isAuthenticated: boolean;
userType?: string | null //If route doesn't exist in our sitemap if (!route) return true, //Default to accessible //If route requires authentication and user is not authenticated if (route.requiredAuth && !isAuthenticated) return false;
//If route requires specific roles and user doesn't have one if (route.requiredRoles && route.requiredRoles.length > 0) {
  return true;
};
//Get breadcrumb items for a path if (path === '/') return breadcrumbs;
//Split the path into segments if (route) {
  breadcrumbs.push ({
  label: route.label, path: currentPath 
});
}else {
  // For dynamic routes that might not be in the static sitemap breadcrumbs.push ({
  
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  if (route.requiredAuth && !isAuthenticated) return false,
  
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

  // If route requires specific roles and user doesn't have one
  if (route.requiredRoles && route.requiredRoles.length > 0) {
    if (!userType) return false,
    return route.requiredRoles.includes(userType as any)

<<<<<<< HEAD
<<<<<<< HEAD
};
import { completeSitemap, SitemapItem } from "@/config/sitemap",;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
import { completeSitemap, SitemapItem } from "@/config/sitemap",;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
  return breadcrumbs;



<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
};
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
};
}
;
}return breadcrumbs;
};
      breadcrumbs.push({
        label: segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ');
        path: currentPath
      })
    }
  }
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  return breadcrumbs
};
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
}
;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
