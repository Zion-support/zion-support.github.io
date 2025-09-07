
<<<<<<< HEAD
      if (stored === 'talent' |stored === 'client') {setRoleState(stored)}        setRoleState(stored)if (stored === 'talent' || stored === 'client') {setRoleState(stored)}if (stored === 'talent' || stored === 'client') {setRoleState(stored)}        setRoleState(stored)setRoleState(stored)}if (stored === 'talent' || stored === 'client') {setRoleState(stored)}import React, { createContext, useContext, useEffect, useState } from 'react';
type UserRole = any;
  setRole: (role: UserRole) => void;
}
const AuthContext = createContext<AuthContextType>({role: 'talent',setRole: () => {},})export function AuthProvider() {const [role, setRoleState] = useState<UserRole>('talent')useEffect(() => {try {const stored = window.localStorage.getItem('userRole') as UserRole | null;
      if (stored === 'talent' || stored === 'client') {setRoleState(stored)}
    } catch {}
  }, [])const setRole = (r: UserRole) => {setRoleState(r)try {window.localStorage.setItem('userRole', r)document.cookie = `userRole=${r}path=/; max-age=${60 * 60 * 24 * 365}`;    } catch {}
  }
  return (    try {window.localStorage.setItem('userRole', r)document.cookie = `userRole=${r}, path=/, max-age=${60 * 60 * 24 * 365}`;
      }
    } catch {}
  }, [])const setRole = (r: UserRole) => {setRoleState(r)} catch {}
  }} catch {}
  }return (export function useAuth() {return useContext(AuthContext)<AuthContext && AuthContext.Provider value={{ role, setRole }}>{children}</AuthContext && AuthContext.Provider>;
  )}
    <AuthContext.Provider value={{ role, set_role }}>;
      {children}
    </AuthContext.Provider>;
  )export function useAuth() {return useContext(AuthContext)<AuthContext.Provider value={{ role, setRole }}>{children}</AuthContext.Provider>;
  )}export function useAuth() {return useContext(AuthContext)}
  return (document.cookie = `userRole=${r}path=/; max-age=${60 * 60 * 24 * 365}`;
=======
import React, { createContext, useContext, useEffect, useState } from 'react';
type UserRole = any;
  setRole: (role: UserRole) => void;
}
const AuthContext = createContext<AuthContextType>({
  role: 'talent',
  setRole: () => {},
});
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [role, setRoleState] = useState<UserRole>('talent');
  useEffect(() => {
    try {
      const stored = window.localStorage.getItem('userRole') as UserRole | null;
      if (stored === 'talent' || stored === 'client') {
setRoleState(stored);
      }
    } catch {}
  }, []);
  const setRole = (r: UserRole) => {
    setRoleState(r);
try {
      window.localStorage.setItem('userRole', r);

      document.cookie = `userRole=${r}; path=/; max-age=${60 * 60 * 24 * 365}`;
>>>>>>> aab6cad50d24864653d33f46d023039adfa50215
    } catch {}
  }
  return (<AuthContext.Provider value={{ role, setRole }}>;
      {children}
<<<<<<< HEAD
    </AuthContext.Provider>;
  )export function useAuth() {return useContext(AuthContext)
=======
    </AuthContext.Provider>
  );
export function useAuth() {
  return useContext(AuthContext);
>>>>>>> aab6cad50d24864653d33f46d023039adfa50215
