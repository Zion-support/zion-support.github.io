// Simple user hook without external dependencies
export function useCurrentUser() {
  return {
    user: null,
    loading: false,
    error: null,
    mutate: () => {}
  }}