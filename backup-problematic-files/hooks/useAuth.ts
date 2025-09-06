
import { useState, useEffect  } from './react';
;

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
=======
export const use_auth = () =>: any {
  const [user, set_user] = useState < User | null>(null);
  const [loading, set_loading] = useState (true);
;
  useEffect (() => {
    // Simulate auth check;
    set_loading (false);
  }, []);
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  return {
    user
    loading
    login: (email: string, password: string) => {

      // Simulate login;
      set_user ({ id: "1", email, name: "User" });
    },
    logout: () => {
      set_user (null);
    },
  }
}
;

