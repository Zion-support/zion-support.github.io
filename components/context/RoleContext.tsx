
=======
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

export type UserRole = 'client' | 'talent',

type RoleContextValue = {

=======
  role: UserRole,
  setRole: (role: UserRole) => void
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
},

const RoleContext = createContext<RoleContextValue | undefined>(undefined),


=======
export const RoleProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  const [role, setRole] = useState<UserRole>('client');

  useEffect(() => {
    try {

=======
      const saved = typeof window !== 'undefined' ? window.localStorage.getItem('zion_user_role') : null,
      if (saved === 'client' || saved === 'talent') {
        setRole(saved)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      }
    } catch {}
  }, []),

  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {

=======
        window.localStorage.setItem('zion_user_role', role)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      }
    } catch {}
  }, [role]);

  const value = useMemo(() => ({ role, setRole }), [role]),


=======
  return <RoleContext.Provider value={value}>{children}</RoleContext.Provider>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
},

export function useRole(): RoleContextValue {
  const ctx = useContext(RoleContext),
  if (!ctx) throw new Error('useRole must be used within RoleProvider'),

=======
  return ctx
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
