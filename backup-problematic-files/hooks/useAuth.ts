import { useState, useEffect } from "react";
interface User {
  id: string;
  email: string;
  name: string;
}
<<<<<<< HEAD
export const useAuth = () => {
=======
<<<<<<< HEAD
export const useAuth = () => {
=======

export const useAuth = () => {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulate auth check
    setLoading(false);
  }, []);
export const use_auth = () =>: any {
  const [user, set_user] = useState < User | null>(null);
  const [loading, set_loading] = useState (true);
;
  useEffect (() => {
    // Simulate auth check;
    set_loading (false);
  }, []);
;
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
