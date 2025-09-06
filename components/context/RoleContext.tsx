<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,;
} from 'react';
<<<<<<< HEAD
export type UserRole = 'client' | 'talent';

type RoleContextValue = {
  role: UserRole;
  setRole: (role: UserRole) => void;};

const RoleContext = createContext<RoleContextValue | undefined>(undefined);

export const RoleProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {  const [role, setRole] = useState<UserRole>('client');

  useEffect(() => {
    try {
=======
=======
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

export type UserRole = 'client' | 'talent';

type RoleContextValue = {
<<<<<<< HEAD
<<<<<<< HEAD
  role: UserRole;
  setRole: (role: UserRole) => void;
=======
  role: UserRole,
  setRole: (role: UserRole) => void
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  role: UserRole,
  setRole: (role: UserRole) => void
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
};

const RoleContext = createContext<RoleContextValue | undefined>(undefined);

<<<<<<< HEAD
<<<<<<< HEAD
export const RoleProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
=======
export const RoleProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
export const RoleProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  const [role, setRole] = useState<UserRole>('client');

  useEffect(() => {
    try {
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      const saved =
        typeof window !== 'undefined'
          ? window.localStorage.getItem('zion_user_role')
          : null;
      if (saved === 'client' || saved === 'talent') {
<<<<<<< HEAD
        setRole(saved);      }
=======
        setRole(saved);
=======
      const saved = typeof window !== 'undefined' ? window.localStorage.getItem('zion_user_role') : null;
      if (saved === 'client' || saved === 'talent') {
        setRole(saved)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      const saved = typeof window !== 'undefined' ? window.localStorage.getItem('zion_user_role') : null;
      if (saved === 'client' || saved === 'talent') {
        setRole(saved)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    } catch {}
  }, []);

  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
<<<<<<< HEAD
        window.localStorage.setItem('zion_user_role', role);      }
=======
<<<<<<< HEAD
<<<<<<< HEAD
        window.localStorage.setItem('zion_user_role', role);
=======
        window.localStorage.setItem('zion_user_role', role)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        window.localStorage.setItem('zion_user_role', role)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    } catch {}
  }, [role]);

  const value = useMemo(() => ({ role, setRole }), [role]);

<<<<<<< HEAD
  return <RoleContext.Provider value={value}>{children}</RoleContext.Provider>;};
=======
<<<<<<< HEAD
<<<<<<< HEAD
  return <RoleContext.Provider value={value}>{children}</RoleContext.Provider>;
=======
  return <RoleContext.Provider value={value}>{children}</RoleContext.Provider>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  return <RoleContext.Provider value={value}>{children}</RoleContext.Provider>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
};
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

export function useRole(): RoleContextValue {
  const ctx = useContext(RoleContext);
  if (!ctx) throw new Error('useRole must be used within RoleProvider');
<<<<<<< HEAD
  return ctx;
=======
<<<<<<< HEAD
<<<<<<< HEAD
  return ctx;
=======
  return ctx
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  return ctx
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
