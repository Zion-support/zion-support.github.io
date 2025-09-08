<<<<<<< HEAD


interface User {
  // TODO: Implement
}
  id: string;,
  email: string;
  name: string;

}

=======
import { useState, useEffect } from "react";
interface User {
  id: string;
  email: string;
  name: string;
}
export const useAuth = () => {
>>>>>>> origin/cursor/delete-old-data-records-6bba
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulate auth check
    setLoading(false);
  }, []);
<<<<<<< HEAD
;

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  return {
    user
    loading
    login: (email: string, password: string) => {
<<<<<<< HEAD


  }
}

;

=======
      // Simulate login
      setUser({ id: "1", email, name: "User" });
    }
    logout: () => {
      setUser(null);
    }
  }
}
>>>>>>> origin/cursor/delete-old-data-records-6bba
