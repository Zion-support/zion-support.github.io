<<<<<<< HEAD
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
=======
"use client";
import React{ createContextuseContextuseEffectuseMemouseState } from 'react';
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982

export type UserRole = 'client' | 'talent';

type RoleContextValue = {
  role: UserRole;
  setRole: (role: UserRole) => void;
};

const RoleContext = createContext<RoleContextValue | undefined>(undefined);

export const RoleProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
<<<<<<< HEAD
  const [role, setRole] = useState<UserRole>('client');
=======
  const [rolesetRole] = useState<UserRole>('client');
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982

  useEffect(() => {
    try {
      const saved = typeof window !== 'undefined' ? window.localStorage.getItem('zion_user_role') : null;
      if (saved === 'client' || saved === 'talent') {
        setRole(saved);
      }
    } catch {}
<<<<<<< HEAD
  }, []);
=======
  }[]);
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982

  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
<<<<<<< HEAD
        window.localStorage.setItem('zion_user_role', role);
      }
    } catch {}
  }, [role]);

  const value = useMemo(() => ({ role, setRole }), [role]);
=======
        window.localStorage.setItem(', 'zion_user_role', 'role);
      }
    } catch {}
  }[role]);

  const value = useMemo(() => ({ rolesetRole })[role]);
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982

  return <RoleContext.Provider value={value}>{children}</RoleContext.Provider>;
};

export function useRole(): RoleContextValue {
  const ctx = useContext(RoleContext);
  if (!ctx) throw new Error('useRole must be used within RoleProvider');
  return ctx;
}