<<<<<<< HEAD
import React from "react";

interface Service {
  id: string;
  name: string;
}

export function useScrollToTop() {
  // Simple hook to scroll to top
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
}

export function useAuth() {
  // Simple auth hook
  return {
    user: null,
    login: () => {},
    logout: () => {}
  };
}
=======
export { useLocalStorage } from './useLocalStorage';
export { useAuth } from './useAuth';
export { useIsMobile } from './use-mobile';
>>>>>>> pr-22690
