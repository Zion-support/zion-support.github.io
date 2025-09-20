import { useState, useEffect } from "react";

export function useAuth() {
  const [user, setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for existing auth token
    const token = localStorage.getItem("auth-token");
    if (token) {
      // Mock user data
      setUser({ id: 1, email: "user@example.com", name: "User" });
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    // Mock login implementation
    const token = "mock-token-" + Date.now();
    localStorage.setItem("auth-token", token);
    setUser({ id: 1, email, name: "User" });
    return { success: true };
  };

  const logout = () => {
    localStorage.removeItem("auth-token");
    setUser(null);
  };

  return {
    user,
    isLoading,
    login,
    logout,
    isAuthenticated: !!user
  };
}
