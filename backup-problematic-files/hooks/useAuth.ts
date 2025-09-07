import { useState, useEffect    } from './react';interface User  {id: string;
  email: string;}
  name: string;}
}
export const useAuth = (export const useAuth = () => {const [user, setUser] = useState<User | null />(null)const [loading, setLoading] = useState(true)useEffect(() => {// Simulate auth check;) => {
  return $3;}
}
    setLoading(false)}, [])return {user;
    loading;}
    login: (email: string, password: string) => {// Simulate login;}
      set_user ({ id: \"1\", email, name: \"User\" })},logout: () => {set_user (null)},}
export const useAuth = (
export const useAuth = () => {;
  const [user, setUser] = useState<User | null />(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulate auth check;
setLoading(false);) => {
  return $3;}
}
  }, []);
;
  return {
    user;
loading;
    login: (email: string, password: string) => {}
      // Simulate login;}
      set_user ({ id: \"1\", email, name: \"User\" });
    },
    logout: () => {}
      set_user (null);}
    },
  }
}
}
