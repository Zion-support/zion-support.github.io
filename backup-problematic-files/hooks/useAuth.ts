import { useState, useEffect  } from './react';
;
interface User {
  // TODO: Implement
}
  id: string;,
  email: string;
  name: string;
}
export const useAuth = () => {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

export const useAuth = () => {;
  const [user, setUser] = useState<User | null>(null);
const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulate auth check
    setLoading(false);
  }, []);
<<<<<<< HEAD

>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulate auth check
    setLoading(false);

  }, []);
;
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
