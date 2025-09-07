

import React, { createContext, useContext, useEffect, useState } from 'react';
type UserRole = $2;
type AuthContextType = $2;
  setRole: (role: UserRole) => void
},

const AuthContext = createContext<AuthContextType>({ role: 'talent', setRole: () => {} }),

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [role, setRoleState] = useState<UserRole>('talent'),

  useEffect(() => {
    try {
      const stored = $2;
      if (stored === 'talent' || stored === 'client') {
        setRoleState(stored)
      }
    } catch {}
  }, []),

  const setRole = (r: UserRole) => {
    setRoleState($2);
    try { 
      window.localStorage.setItem($2);
      document.cookie = `userRole=${r}, path=/, max-age = $2;
  return (
    <AuthContext.Provider value={{ role, setRole }}>{children}</AuthContext.Provider>
  )
}

export function useAuth() {
return useContext(AuthContext);
}
return useContext(AuthContext);
}
}
