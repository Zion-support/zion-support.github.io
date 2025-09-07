<<<<<<< HEAD
<<<<<<< HEAD
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
origin/cursor/automate-test-improve-and-merge-code-2533
=======
      if (stored === 'talent' |stored === 'client') {
        setRoleState(stored);      }        setRoleState(stored)
      if (stored === 'talent' || stored === 'client') {
        setRoleState(stored);      }

      if (stored === 'talent' || stored === 'client') {
        setRoleState(stored);      }        setRoleState(stored)
        setRoleState(stored);      }

      if (stored === 'talent' || stored === 'client') {

        setRoleState(stored);      }

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
      }
    } catch {}
  }, []);
  const setRole = (r: UserRole) => {
    setRoleState(r);
try {
      window.localStorage.setItem('userRole', r);
<<<<<<< HEAD
      document.cookie = `userRole=${r}; path=/; max-age=${60 * 60 * 24 * 365}`;
=======

      if (stored === 'talent' |stored === 'client') {setRoleState(stored)}        setRoleState(stored)if (stored === 'talent' || stored === 'client') {setRoleState(stored)}if (stored === 'talent' || stored === 'client') {setRoleState(stored)}        setRoleState(stored)setRoleState(stored)}if (stored === 'talent' || stored === 'client') {setRoleState(stored)}import React, { createContext, useContext, useEffect, useState } from 'react';
type UserRole = any;
  setRole: (role: UserRole) => void;
}
const AuthContext = createContext<AuthContextType>({role: 'talent',setRole: () => {},})export function AuthProvider() {const [role, setRoleState] = useState<UserRole>('talent')useEffect(() => {try {const stored = window.localStorage.getItem('userRole') as UserRole | null;
      if (stored === 'talent' || stored === 'client') {setRoleState(stored)}
    } catch {}
  }, [])const setRole = (r: UserRole) => {setRoleState(r)try {window.localStorage.setItem('userRole', r)document.cookie = `userRole=${r}path=/; max-age=${60 * 60 * 24 * 365}`;    } catch {}
=======
      document.cookie = `userRole=${r}; path=/; max-age=${60 * 60 * 24 * 365}`;    } catch {}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
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
<<<<<<< HEAD
    </AuthContext.Provider>;
  )export function useAuth() {return useContext(AuthContext)<AuthContext.Provider value={{ role, setRole }}>{children}</AuthContext.Provider>;
  )}export function useAuth() {return useContext(AuthContext)}
  return (document.cookie = `userRole=${r}path=/; max-age=${60 * 60 * 24 * 365}`;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
    } catch {}
  }
  return (<AuthContext.Provider value={{ role, setRole }}>;
      {children}
<<<<<<< HEAD
    </AuthContext.Provider>
  );
export function useAuth() {
  return useContext(AuthContext);
origin/cursor/automate-test-improve-and-merge-code-2533
=======
    </AuthContext.Provider>;
  )export function useAuth() {return useContext(AuthContext)
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======
    </AuthContext.Provider>
  );

export function useAuth() {;
  return useContext(AuthContext);    <AuthContext.Provider value={{ role, setRole }}>{children}</AuthContext.Provider>
  )
}

export function useAuth() {;
return useContext(AuthContext);
}
  return (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
