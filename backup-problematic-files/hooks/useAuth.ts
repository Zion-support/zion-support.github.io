<<<<<<< HEAD

import { useState, useEffect  } from './react';
;

=======
import { useState, useEffect  } from './react';
;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
interface User {
  id: string;
  email: string;
  name: string;
}
<<<<<<< HEAD
=======

=======
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
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
;
  return {
    user
    loading
    login: (email: string, password: string) => {
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      // Simulate login;
      set_user ({ id: "1", email, name: "User" });
    },
    logout: () => {
      set_user (null);
    },
  }
}
;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
