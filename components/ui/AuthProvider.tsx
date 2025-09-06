import React, { createContext, useContext, useEffect, useState } from 'react';

type UserRole = 'talent' | 'client';

type AuthContextType = {
<<<<<<< HEAD
  role: UserRole;
  setRole: (role: UserRole) => void;
};

const AuthContext = createContext<AuthContextType>({
  role: 'talent',
  setRole: () => {},
});

=======
  role: UserRole,
  setRole: (role: UserRole) => void
};

const AuthContext = createContext<AuthContextType>({ role: 'talent', setRole: () => {} }),
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [role, setRoleState] = useState<UserRole>('talent');

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem('userRole') as UserRole | null;
      if (stored === 'talent' || stored === 'client') {
<<<<<<< HEAD
        setRoleState(stored);
=======
        setRoleState(stored)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
      }
    } catch {}
  }, []);

  const setRole = (r: UserRole) => {
    setRoleState(r);
<<<<<<< HEAD
    try {
      window.localStorage.setItem('userRole', r);
      document.cookie = `userRole=${r}; path=/; max-age=${60 * 60 * 24 * 365}`;
=======
    try { 
      window.localStorage.setItem('userRole', r);
      document.cookie = `userRole=${r}, path=/, max-age=${60 * 60 * 24 * 365}`
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
    } catch {}
  };

  return (
<<<<<<< HEAD
    <AuthContext.Provider value={{ role, setRole }}>
      {children}
    </AuthContext.Provider>
  );

export function useAuth() {
  return useContext(AuthContext);
=======
    <AuthContext.Provider value={{ role, setRole }}>{children}</AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext);
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
