// Minimal auth hook shim to satisfy imports
export function useAuth() {
  return { 
    user: null, 
    isLoading: false 
  } as { 
    user: null | { 
      id?: string; 
      userType?: string; 
      role?: string; 
    }; 
    isLoading: boolean;
  };
}

