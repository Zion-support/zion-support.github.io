

import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
export type UserRole = $2;
type RoleContextValue = $2;
  setRole: (role: UserRole) => void
},

const RoleContext = $2;
export const RoleProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [role, setRole] = useState<UserRole>('client'),

  useEffect(() => {
    try {
      const saved = $2;
      if (saved === 'client' || saved === 'talent') {
        setRole(saved)
      }
    } catch {}
  }, []),

  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        window.localStorage.setItem('zion_user_role', role)
      }
    } catch {}
  }, [role]),

  const value = useMemo(() => ({ role, setRole }), [role]),

  return <RoleContext.Provider value = $2;
export function useRole(): RoleContextValue {
const ctx = useContext(RoleContext);
  if (!ctx) throw new Error('useRole must be used within RoleProvider');
  return ctx;  return ctx
}
}
