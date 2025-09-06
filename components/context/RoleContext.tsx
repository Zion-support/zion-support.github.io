<<<<<<< HEAD
<<<<<<< HEAD
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
export type UserRole = any;
  return ctx
}
=======
import React, {
  createContext
  useContext
  useEffect
  useMemo
  useState;
} from 'react';
=======
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,;
} from 'react';

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export type UserRole = 'client' | 'talent';
type RoleContextValue = {
  role: UserRole;
<<<<<<< HEAD
  setRole: (role: UserRole) => void;}
const RoleContext = createContext<RoleContextValue | undefined>(undefined);
export const RoleProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {  const [role, setRole] = useState<UserRole>('client');
  useEffect(() => {
    try {import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
export type UserRole = 'client' | 'talent';
type RoleContextValue = {
  role: UserRole;
  setRole: (role: UserRole) => void;  role: UserRole
  setRole: (role: UserRole) => void
}
const RoleContext = createContext<RoleContextValue | undefined>(undefined);
export const RoleProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {export const RoleProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
=======
  setRole: (role: UserRole) => void;
};

const RoleContext = createContext<RoleContextValue | undefined>(undefined);
}

export const RoleProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  const [role, setRole] = useState<UserRole>('client');
  useEffect(() => {
    try {
      const saved =
        typeof window !== 'undefined'
          ? window.localStorage.getItem('zion_user_role')
          : null;
<<<<<<< HEAD
      if (saved === 'client' |saved === 'talent') {
        setRole(saved);      }      const saved = typeof window !== 'undefined' ? window.localStorage.getItem('zion_user_role') : null;
      if (saved === 'client' |saved === 'talent') {
        setRole(saved)
=======
      if (saved === 'client' || saved === 'talent') {
        setRole(saved);
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
      }
    } catch {}
  }, []);
  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
<<<<<<< HEAD
        window.localStorage.setItem('zion_user_role', role);      }        window.localStorage.setItem('zion_user_role', role)
=======
        window.localStorage.setItem('zion_user_role', role);
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
      }
    } catch {}
  }, [role]);
  const value = useMemo(() => ({ role, setRole }), [role]);
<<<<<<< HEAD
  return <RoleContext.Provider value={value}>{children}</RoleContext.Provider>;};  return <RoleContext.Provider value={value}>{children}</RoleContext.Provider>
}
export function useRole(): RoleContextValue {
const ctx = useContext(RoleContext);
  if (!ctx) throw new Error('useRole must be used within RoleProvider');
  return ctx;  return ctx
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======

  return <RoleContext.Provider value={value}>{children}</RoleContext.Provider>;
};
}

export function useRole(): RoleContextValue {
  const ctx = useContext(RoleContext);
  if (!ctx) throw new Error('useRole must be used within RoleProvider');
  return ctx;
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
