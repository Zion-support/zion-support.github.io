import React, { createContext, useContext, useEffect, useState } from 'react';

type UserRole = 'talent' | 'client';
type AuthContextType = {
  role: UserRole;
  setRole: (role: UserRole) => void;
}
const AuthContext = createContext<AuthContextType>({
  role: 'talent'
  setRole: () => {}
});  role: UserRole
  setRole: (role: UserRole) => void
}
const AuthContext = createContext<AuthContextType>({ role: 'talent', setRole: () => {} })
  const [role, setRoleState] = useState<UserRole>('talent');
  useEffect(() => {
    try {
      const stored = window.localStorage.getItem('userRole') as UserRole | null;

      if (stored === 'talent' || stored === 'client') {
        setRoleState(stored);      }


=======
      if (stored === 'talent' || stored === 'client') {

        setRoleState(stored);      }


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      }
    } catch {}
  }, []);
  const setRole = (r: UserRole) => {
    setRoleState(r);
    try {
      window.localStorage.setItem('userRole', r);
      document.cookie = `userRole=${r}; path=/; max-age=${60 * 60 * 24 * 365}`;    } catch {}
  }
  return (    try {
      window.localStorage.setItem('userRole', r);
      document.cookie = `userRole=${r}, path=/, max-age=${60 * 60 * 24 * 365}`
    } catch {}
  }



export function useAuth() {;
  return useContext(AuthContext);    <AuthContext.Provider value={{ role, setRole }}>{children}</AuthContext.Provider>
  )
}

export function useAuth() {;

return useContext(AuthContext);
}
=======
  return (


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
