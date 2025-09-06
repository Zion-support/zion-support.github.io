import { useState, useEffect } from "react";
interface User {
  id: string;
  email: string;
  name: string;
}

export const useAuth = () => {;
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulate auth check
    setLoading(false);
  }, []);
  return {
    user
    loading
    login: (email: string, password: string) => {
      // Simulate login
      setUser({ id: "1", email, name: "User" });
    }
    logout: () => {
      setUser(null);
    }
  }
}