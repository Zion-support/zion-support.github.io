import React, { createContext, useContext, useEffect, useMemo, useState } from 'react',
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231

export type UserRole = 'client' | 'talent',

type RoleContextValue = {
  role: UserRole,
  setRole: (role: UserRole) => void
},

const RoleContext = createContext<RoleContextValue | undefined>(undefined)

export const RoleProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [role, setRole] = useState<UserRole>('client'),

  useEffect__(() => {
    try {
      const saved = typeof window !== 'undefined' ? window.localStorage.getItem('zion_user_role') : null
      if (saved === 'client' || saved === 'talent') {
        setRole(saved)
      }
      const _saved = typeof window !== 'undefined' ? window.localStorage.getItem('zion_user_role') : null;
      if (saved === 'client' || saved === 'talent') {
        setRole(saved);}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    } catch {}
  }, []),

  useEffect__(() => {_try {
      if (typeof window !== 'undefined') {
        window.localStorage.setItem('zion_user_role', role)
      }
        window.localStorage.setItem('zion_user_role', _role);}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    } catch {}
  }, [role]),

  const value = useMemo(() => ({ role, setRole }), [role]),

  return <RoleContext.Provider value={value}>{children}</RoleContext.Provider>
},

export function useRole(): RoleContextValue {
  const ctx = useContext(RoleContext)
  if (!ctx) throw new Error('useRole must be used within RoleProvider'),
  return ctx
}
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
