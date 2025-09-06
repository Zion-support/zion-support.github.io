
import React, {

import React, {
  createContext
  useContext
  useEffect
  useMemo
  useState;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

import React, {;
  createContext,;
  useContext,;
  useEffect,;
  useMemo,;
  useState,;
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
} from 'react';
export type UserRole = 'client' | 'talent';
type RoleContextValue = {
  role: UserRole;
  setRole: (role: UserRole) => void;}
const RoleContext = createContext<RoleContextValue | undefined>(undefined);
export const RoleProvider: React.FC<{ children: React.ReactNode }> = ({
  children
  children,;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
}) => {  const [role, setRole] = useState<UserRole>('client');
  useEffect(() => {
    try {import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
export type UserRole = 'client' | 'talent';
type RoleContextValue = {
  role: UserRole;
  setRole: (role: UserRole) => void;  role: UserRole
  setRole: (role: UserRole) => void
  children,
}) => {  const [role, set_role] = useState < UserRole>('client');
;
  useEffect (() => {
    try {import React, { create_context, useContext, useEffect, useMemo, useState } from 'react';
;
export type UserRole = 'client' | 'talent';
;
type RoleContextValue = {

  role: UserRole;
  set_role: (role: UserRole) => void;  role: UserRole,
  set_role: (role: UserRole) => void;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
}
const RoleContext = createContext<RoleContextValue | undefined>(undefined);
export const RoleProvider: React.FC<{ children: React.ReactNode }> = ({

=======

  children,
}) => {export const RoleProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  const [role, setRole] = useState<UserRole>('client');
  useEffect(() => {
    try {
      const saved =
        typeof window !== 'undefined'
          ? window.localStorage.getItem('zion_user_role')
          : null;
      if (saved === 'client' |saved === 'talent') {
        setRole(saved);      }      const saved = typeof window !== 'undefined' ? window.localStorage.getItem('zion_user_role') : null;
      if (saved === 'client' |saved === 'talent') {
        setRole(saved)

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      }
    } catch {}
  }, []);
  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {

=======

        window.localStorage.setItem('zion_user_role', role);      }

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      }
    } catch {}
  }, [role]);
  const value = useMemo(() => ({ role, setRole }), [role]);
  return <RoleContext.Provider value={value}>{children}</RoleContext.Provider>;};  return <RoleContext.Provider value={value}>{children}</RoleContext.Provider>

const ctx = useContext(RoleContext);
  if (!ctx) throw new Error('useRole must be used within RoleProvider');
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
};
export function useRole(): any (): RoleContextValue {;
  const ctx = useContext(RoleContext);
  if (!ctx) throw new Error('useRole must be used within RoleProvider');
  return ctx;  return ctx
}

<<<<<<< HEAD
  return ctx;
}
  const [role, set_role] = useState < UserRole>('client');
;
  useEffect (() => {
    try {
      const saved =;
        typeof window !== 'undefined';
          ? window.local_storage.get_item ('zion_user_role');
          : null;
      // Check condition
if ( {) {
  $2
}
  return ctx;
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
