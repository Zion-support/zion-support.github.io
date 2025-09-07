
};
//Check if a route requires authentication export const isProtectedRoute = (path: string) : boolean => {
  const route = findRouteByPath (path);
return route?.requiredAuth === true 
};

};
