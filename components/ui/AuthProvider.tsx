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
<<<<<<< HEAD
      if (stored === 'talent' |stored === 'client') {
        setRoleState(stored);      }        setRoleState(stored)
=======
      if (stored === 'talent' || stored === 'client') {
        setRoleState(stored);      }

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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

<<<<<<< HEAD
  return (
    <AuthContext.Provider value={{ role, setRole }}>
      {children}
    </AuthContext.Provider>
  );
export function useAuth() {
  return useContext(AuthContext);    <AuthContext.Provider value={{ role, setRole }}>{children}</AuthContext.Provider>
  )
}
export function useAuth() {
return useContext(AuthContext);
}
=======
  return (
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
