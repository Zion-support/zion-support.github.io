// Minimal auth hook shim to satisfy imports
export function useAuth() {
  return { user: null } as { user: null | { id?: string } };
}

