<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
export type UserRole = any;
  return ctx
}
=======

>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
import React, {
<<<<<<< HEAD
  createContext
  useContext
  useEffect
  useMemo
  useState;
=======
  createContext,
  useContext,
  useEffect,
  useMemo,;
  useState,;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
  children
=======
  children,;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
  children
}) => {export const RoleProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
=======
<<<<<<< HEAD
  setRole: (role: UserRole) => void;
};

const RoleContext = createContext<RoleContextValue | undefined>(undefined);
}

export const RoleProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
  children,
}) => {export const RoleProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
  const [role, setRole] = useState<UserRole>('client');
  useEffect(() => {
    try {
<<<<<<< HEAD
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
<<<<<<< HEAD
      if (saved === 'client' || saved === 'talent') {
        setRole(saved);
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
      }
    } catch {}
  }, []);
  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
<<<<<<< HEAD
        window.localStorage.setItem('zion_user_role', role);      }        window.localStorage.setItem('zion_user_role', role)
=======
<<<<<<< HEAD
        window.localStorage.setItem('zion_user_role', role);
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
        window.localStorage.setItem('zion_user_role', role);      }

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
      }
    } catch {}
  }, [role]);
  const value = useMemo(() => ({ role, setRole }), [role]);
<<<<<<< HEAD
  return <RoleContext.Provider value={value}>{children}</RoleContext.Provider>;};  return <RoleContext.Provider value={value}>{children}</RoleContext.Provider>
<<<<<<< HEAD
}
export function useRole(): RoleContextValue {
=======
};

export function useRole(): RoleContextValue {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
const ctx = useContext(RoleContext);
  if (!ctx) throw new Error('useRole must be used within RoleProvider');
<<<<<<< HEAD
  return ctx;  return ctx
}
<<<<<<< HEAD
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
=======

<<<<<<< HEAD
=======
  return ctx;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
}
}
=======
  return ctx;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
