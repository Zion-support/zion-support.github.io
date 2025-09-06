import { useState, useEffect } from "react";
interface User {
  id: string;
  email: string;
  name: string;
}
<<<<<<< HEAD
export const useAuth = () => {
=======

export const useAuth = () => {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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