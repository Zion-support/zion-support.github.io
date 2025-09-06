
  return completeSitemap && completeSitemap.find(route => route && route.path === path)
};

import { completeSitemap, SitemapItem } from "@/config/sitemap",


<<<<<<< HEAD
=======
=======
import { completeSitemap, SitemapItem } from "@/config/sitemap";
import { completeSitemap, SitemapItem } from "@/config/sitemap",

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import {completeSitemap, SitemapItem} from "@/config/sitemap";
// Find a route by path in the complete sitemap
export const findRouteByPath = (path: string): SitemapItem | undefined => {
  return completeSitemap.find(route => route.path === path);
};

import { completeSitemap, SitemapItem } from "@/config/sitemap",

<<<<<<< HEAD
=======
import { completeSitemap, SitemapItem } from "@/config/sitemap",
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

// Find a route by path in the complete sitemap

export const findRouteByPath = (path: string): SitemapItem | undefined => {
  return completeSitemap.find(route => route.path === path)
<<<<<<< HEAD

=======
}
},

// Check if a route requires authentication
export const isProtectedRoute = (path: string): boolean => {
  const route = findRouteByPath(path)
  const route = findRouteByPath(path),
  return route?.requiredAuth === true;
};

// Check if a route is accessible by a specific user type
export const canAccessRoute = (;
  path: string;
  isAuthenticated: boolean;
  return route?.requiredAuth === true
}
},

// Check if a route is accessible by a specific user type
export const canAccessRoute = (
  path: string,
  isAuthenticated: boolean,
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
},


<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
return completeSitemap && completeSitemap.find(route => route && route.path === path)
};
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
// Check if a route requires authentication
export const isProtectedRoute = (path: string): boolean => {


  const route = findRouteByPath(path),


  userType?: string | null
): boolean => {
  const route = findRouteByPath(path)
  // If route doesn't exist in our sitemap
  if (!route) return true, // Default to accessible
  // If route requires authentication and user is not authenticated
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
=======
  if (route.requiredAuth && !isAuthenticated) return false;
  if (route.requiredAuth && !isAuthenticated) return false,
  
  // If route requires specific roles and user doesn't have one
  if (route.requiredRoles && route.requiredRoles.length > 0) {
    if (!userType) return false,
    return route.requiredRoles.includes(userType as any)
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  }
  return true
}
// Get breadcrumb items for a path
<<<<<<< HEAD
export const getBreadcrumbsForPath = (path: string): Array<{label: string, path: string}> => {
  const breadcrumbs = [{label: 'Home', path: '/'}];
  if (path === '/') return breadcrumbs;
  // Split the path into segments
  const segments = path && path.split('/').filter(Boolean);
=======
export const getBreadcrumbsForPath = (path: string): Array<{label: string, path: string}> => {;
  const breadcrumbs = [{label: 'Home', path: '/'}];
  if (path === '/') return breadcrumbs;
  // Split the path into segments
  const segments = path.split('/').filter(Boolean);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  let currentPath = '';
  for (const segment of segments) {
    currentPath += `/${segment}`;
    const route = findRouteByPath(currentPath);
    if (route) {
<<<<<<< HEAD

      breadcrumbs && breadcrumbs.push({
        label: route && route.label,

=======
      breadcrumbs && breadcrumbs.push({
        label: route && route.label,
      breadcrumbs.push({
        label: route.label
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        path: currentPath
      })
    } else {
      // For dynamic routes that might not be in the static sitemap
<<<<<<< HEAD
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

  if (route.requiredAuth && !isAuthenticated) return false,
  

  // If route requires specific roles and user doesn't have one
  if (route.requiredRoles && route.requiredRoles.length > 0) {
    if (!userType) return false,
    return route.requiredRoles.includes(userType as any)


import { completeSitemap, SitemapItem } from "@/config/sitemap",;
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



<<<<<<< HEAD
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
  return breadcrumbs
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

import { completeSitemap, SitemapItem } from "@/config/sitemap",;
// Find a route by path in the complete sitemap;
export const findRouteByPath = (path: string): SitemapItem | undefined => {;
  return completeSitemap.find(route => route.path === path);
},;
// Check if a route requires authentication;
export const isProtectedRoute = (path: string): boolean => {;
  const route = findRouteByPath(path),;
  return route?.requiredAuth === true;
},;
// Check if a route is accessible by a specific user type;
export const canAccessRoute = (;
  path: string,;
  isAuthenticated: boolean,;
  userType?: string | null;
): boolean => {;
  const route = findRouteByPath(path),;
  // If route doesn't exist in our sitemap;
  if (!route) return true, // Default to accessible;
  // If route requires authentication and user is not authenticated;
  if (route.requiredAuth && !isAuthenticated) return false,;
  // If route requires specific roles and user doesn't have one;
  if (route.requiredRoles && route.requiredRoles.length > 0) {;
    if (!userType) return false,;
    return route.requiredRoles.includes(userType as any);
  }
;
  return true;
},;
// Get breadcrumb items for a path;
export const getBreadcrumbsForPath = (path: string): Array<{label: string, path: string}> => {;
  const breadcrumbs = [{label: 'Home', path: '/'}],;
  if (path === '/') return breadcrumbs,;
  // Split the path into segments;
  const segments = path.split('/').filter(Boolean),;
  let currentPath = '',;
  for (const segment of segments) {;
    currentPath += `/${segment}`,;
    const route = findRouteByPath(currentPath),;
    if (route) {;
      breadcrumbs.push({;
        label: route.label,;
        path: currentPath;
      });
    } else {;
      // For dynamic routes that might not be in the static sitemap;
      breadcrumbs.push({;
        label: segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ');
        path: currentPath;
      });
    }
  }
;
  return breadcrumbs;
};
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
