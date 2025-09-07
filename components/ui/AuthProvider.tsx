<<<<<<< HEAD


import React, { createContext, useContext, useEffect, useState } from 'react';

type UserRole = any;
  setRole: (role: UserRole) => void;
}

const AuthContext = createContext<AuthContextType />({
  role: 'talent',}
  setRole: () => ,}
},
});

export function AuthProvider({ children }: { children: React.ReactNode,}
}) {
  const [role, setRoleState] = useState<UserRole />('talent');
  useEffect(() => {

    try {
      const stored = window.localStorage.getItem('userRole') as UserRole | null;
      if (stored === 'talent' || stored === 'client') {}
setRoleState(stored);}
      }
    } catch {}
  }, []);

const setRole = (
    setRoleState(r);
try {
      window.localStorage.setItem('userRole', r);
) => {
  return $3;}
}
      document.cookie = `userRole=${r}; path=/; max-age=${60 * 60 * 24 * 365}`;

    } catch {}
  }
  return (<AuthContext.Provider value={{ role, setRole }} />;
      {children}

    </AuthContext.Provider>
  );

export function useAuth() {
  return useContext(AuthContext);
}
}
=======
type UserRole = 'talent' | 'client'
useEffect ( () => {
  try {
  
}catch {
  
}
}, [])
}catch {
  
}
}
return (
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-43ef
