
import { useState, useEffect  } from './react';
;

interface User {
  id: string;
  email: string;
  name: string;
}
=======


export const useAuth = () => {;

  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulate auth check
    setLoading(false);
  }, []);

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

