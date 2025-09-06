

import React, {

  createContext,
  useContext,
  useEffect,
  useMemo,;
  useState,;

} from 'react';
export type UserRole = 'client' | 'talent';
type RoleContextValue = {
  role: UserRole;
  setRole: (role: UserRole) => void;}
const RoleContext = createContext<RoleContextValue | undefined>(undefined);
export const RoleProvider: React.FC<{ children: React.ReactNode }> = ({

  children,;

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

  children,
}) => {export const RoleProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {;

  const [role, setRole] = useState<UserRole>('client');
  useEffect(() => {
    try {



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      }
    } catch {}
  }, []);
  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {

        window.localStorage.setItem('zion_user_role', role);      }


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      }
    } catch {}
  }, [role]);
  const value = useMemo(() => ({ role, setRole }), [role]);
  return <RoleContext.Provider value={value}>{children}</RoleContext.Provider>;};  return <RoleContext.Provider value={value}>{children}</RoleContext.Provider>

};

export function useRole(): RoleContextValue {;

const ctx = useContext(RoleContext);
  if (!ctx) throw new Error('useRole must be used within RoleProvider');

  return ctx;

=======
}
}
=======
  return ctx;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
