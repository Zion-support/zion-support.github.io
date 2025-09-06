<<<<<<< HEAD
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,;
} from 'react';
=======
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88

export type UserRole = 'client' | 'talent';

type RoleContextValue = {
<<<<<<< HEAD
  role: UserRole;
  setRole: (role: UserRole) => void;
=======
  role: UserRole,
  setRole: (role: UserRole) => void
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
};

const RoleContext = createContext<RoleContextValue | undefined>(undefined);

<<<<<<< HEAD
export const RoleProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
=======
export const RoleProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
  const [role, setRole] = useState<UserRole>('client');

  useEffect(() => {
    try {
<<<<<<< HEAD
      const saved =
        typeof window !== 'undefined'
          ? window.localStorage.getItem('zion_user_role')
          : null;
      if (saved === 'client' || saved === 'talent') {
        setRole(saved);
=======
      const saved = typeof window !== 'undefined' ? window.localStorage.getItem('zion_user_role') : null;
      if (saved === 'client' || saved === 'talent') {
        setRole(saved)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
      }
    } catch {}
  }, []);

  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
<<<<<<< HEAD
        window.localStorage.setItem('zion_user_role', role);
=======
        window.localStorage.setItem('zion_user_role', role)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
      }
    } catch {}
  }, [role]);

  const value = useMemo(() => ({ role, setRole }), [role]);

<<<<<<< HEAD
  return <RoleContext.Provider value={value}>{children}</RoleContext.Provider>;
=======
  return <RoleContext.Provider value={value}>{children}</RoleContext.Provider>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
};

export function useRole(): RoleContextValue {
  const ctx = useContext(RoleContext);
  if (!ctx) throw new Error('useRole must be used within RoleProvider');
<<<<<<< HEAD
  return ctx;
=======
  return ctx
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
