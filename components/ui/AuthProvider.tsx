import React, { createContext, useContext, useEffect, useState } from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
type UserRole = any;
=======
type UserRole = 'talent' | 'client';
=======

type UserRole = 'talent' | 'client';

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
type AuthContextType = {
  role: UserRole;
  setRole: (role: UserRole) => void;
}
const AuthContext = createContext<AuthContextType>({
<<<<<<< HEAD
  role: 'talent'
  setRole: () => {}
});  role: UserRole
  setRole: (role: UserRole) => void
}
const AuthContext = createContext<AuthContextType>({ role: 'talent', setRole: () => {} })
=======
  role: 'talent',
  setRole: () => {},
});
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  const [role, setRoleState] = useState<UserRole>('talent');
  useEffect(() => {
    try {
      const stored = window.localStorage.getItem('userRole') as UserRole | null;
<<<<<<< HEAD
      if (stored === 'talent' |stored === 'client') {
        setRoleState(stored);      }        setRoleState(stored)
=======
      if (stored === 'talent' || stored === 'client') {
        setRoleState(stored);
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
      }
    } catch {}
  }, []);
  const setRole = (r: UserRole) => {
    setRoleState(r);
    try {
      window.localStorage.setItem('userRole', r);
<<<<<<< HEAD
      document.cookie = `userRole=${r}; path=/; max-age=${60 * 60 * 24 * 365}`;    } catch {}
  }
  return (    try {
      window.localStorage.setItem('userRole', r);
      document.cookie = `userRole=${r}, path=/, max-age=${60 * 60 * 24 * 365}`
=======
      document.cookie = `userRole=${r}; path=/; max-age=${60 * 60 * 24 * 365}`;
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
    } catch {}
  }
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  return (
    <AuthContext.Provider value={{ role, setRole }}>
      {children}
    </AuthContext.Provider>
  );
<<<<<<< HEAD
export function useAuth() {
  return useContext(AuthContext);    <AuthContext.Provider value={{ role, setRole }}>{children}</AuthContext.Provider>
  )
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
}
export function useAuth() {
<<<<<<< HEAD
return useContext(AuthContext);
}
=======
  return useContext(AuthContext);
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
