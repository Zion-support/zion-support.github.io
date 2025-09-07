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
  const ctx = useContext($2);
  if (!ctx) throw new Error($2);
  return ctx
}