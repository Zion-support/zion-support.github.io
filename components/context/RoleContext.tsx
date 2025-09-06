import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,;
} from 'react';
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
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

export type UserRole = 'client' | 'talent';

type RoleContextValue = {
<<<<<<< HEAD
  role: UserRole;
  setRole: (role: UserRole) => void;
=======
  role: UserRole,
  setRole: (role: UserRole) => void
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
};

const RoleContext = createContext<RoleContextValue | undefined>(undefined);

<<<<<<< HEAD
export const RoleProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
=======
export const RoleProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  const [role, setRole] = useState<UserRole>('client');

  useEffect(() => {
    try {
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
        window.localStorage.setItem('zion_user_role', role);      }
=======
        window.localStorage.setItem('zion_user_role', role)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    } catch {}
  }, [role]);

  const value = useMemo(() => ({ role, setRole }), [role]);

  return <RoleContext.Provider value={value}>{children}</RoleContext.Provider>;};
=======
  return <RoleContext.Provider value={value}>{children}</RoleContext.Provider>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
};
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

export function useRole(): RoleContextValue {
  const ctx = useContext(RoleContext);
  if (!ctx) throw new Error('useRole must be used within RoleProvider');
  return ctx;
=======
  return ctx
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
