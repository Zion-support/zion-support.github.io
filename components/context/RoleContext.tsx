<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
export type UserRole = any;
  return ctx
}
import React, {
  createContext
  useContext
  useEffect
  useMemo
  useState;
} from 'react';
export type UserRole = 'client' | 'talent';
type RoleContextValue = {
  role: UserRole;
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
  const [role, setRole] = useState<UserRole>('client');
  useEffect(() => {
    try {
      const saved =
        typeof window !== 'undefined'
    } catch {}
  }, [])
  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        window.localStorage.setItem('zion_user_role', role);      }        window.localStorage.setItem('zion_user_role', role)
      }
    } catch {}
  }, [role])
  const value = useMemo(() => ({ role, setRole }), [role])
}
export function useRole(): RoleContextValue {
const ctx = useContext(RoleContext);
  if (!ctx) throw new Error('useRole must be used within RoleProvider');
  return ctx;  return ctx
}
<<<<<<< HEAD
}
=======
export type UserRole = 'client' | 'talent'
useEffect ( () => {
  try {
  
}catch {
  
}
}, [])
useEffect ( () => {
  try {
  if (typeof window !== 'undefined') {
  
}catch {
  
}
}, [role])
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-43ef
=======
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
