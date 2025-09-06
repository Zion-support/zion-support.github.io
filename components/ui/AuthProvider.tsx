import React, { createContext, useContext, useEffect, useState } from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
type UserRole = any;
=======
=======

>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
      if (stored === 'talent' |stored === 'client') {
        setRoleState(stored);      }        setRoleState(stored)
=======
      if (stored === 'talent' || stored === 'client') {
<<<<<<< HEAD
        setRoleState(stored);
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
        setRoleState(stored);      }

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
      if (stored === 'talent' || stored === 'client') {
<<<<<<< HEAD
        setRoleState(stored);      }        setRoleState(stored)
=======
        setRoleState(stored);      }

>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
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

<<<<<<< HEAD
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
<<<<<<< HEAD
return useContext(AuthContext);
}
=======
  return useContext(AuthContext);
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
=======

export function useAuth() {;
  return useContext(AuthContext);    <AuthContext.Provider value={{ role, setRole }}>{children}</AuthContext.Provider>
  )
}

export function useAuth() {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
return useContext(AuthContext);
}
=======
  return (
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
