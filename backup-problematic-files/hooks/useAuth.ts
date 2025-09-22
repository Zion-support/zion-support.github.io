<<<<<<< HEAD

import { useState, useEffect  } from './react';
;

=======
import { useState, useEffect  } from './react';
;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
interface User {
  // TODO: Implement
}
  id: string;,
  email: string;
  name: string;
<<<<<<< HEAD
}
<<<<<<< HEAD
=======

=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
export const useAuth = () => {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

export const useAuth = () => {;
  const [user, setUser] = useState<User | null>(null);
<<<<<<< HEAD
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
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
