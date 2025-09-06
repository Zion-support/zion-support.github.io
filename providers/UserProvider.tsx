<<<<<<< HEAD
import React, {
<<<<<<< HEAD
  createContext
  useContext
  useEffect
  useMemo
  useState;} from 'react';} from 'react';
export type UserRole = 'client' | 'talent';
export type User = {
=======
  createContext,
  useContext,
  useEffect,
  useMemo,;
  useState,;} from 'react';} from 'react';

export type UserRole = 'client' | 'talent';

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
export type UserRole = 'client' | 'talent';

export type User = {;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  id: string;
  name: string;
  role: UserRole;
  avatarUrl?: string;
  onboardingCompleted: boolean;
<<<<<<< HEAD
}
<<<<<<< HEAD
export type UserContextValue = {
  user: User | null;
  setUser: (user: User | null) => void;
  logout: () => void;
  completeOnboarding: () => void;};}
=======
<<<<<<< HEAD
};

export type UserContextValue = {;

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
const UserContext = createContext<UserContextValue | undefined>(undefined);
const DEFAULT_USER: User = {
  id: 'u_001'
  name: 'Jordan Lee'
  role: 'client'
  onboardingCompleted: false
}
export function UserProvider({ children }: { children: React.ReactNode }) {  const [user, setUser] = useState<User | null>(null);  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    try {
=======
<<<<<<< HEAD
;
export type UserContextValue = {;
  user: User | null;
  setUser: (user: User | null) => void;
  logout: () => void;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  completeOnboarding: () => void;
}
;
const UserContext = createContext<UserContextValue | undefined>(undefined);
const DEFAULT_USER: User = {;
  id: 'u_001',;
  name: 'Jordan Lee',;
  role: 'client',;
  onboardingCompleted: false}
;
export function UserProvider({ children }: { children: React.ReactNode }) {;
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {;
    try {;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      const raw = localStorage.getItem('zion.user');
      if (raw) {
        setUser(JSON.parse(raw));
      } else {
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        setUser(DEFAULT_USER);
      }
    } catch {;
      setUser(DEFAULT_USER);
    }
  }, []);
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  useEffect(() => {
    try {

      if (user) {
        localStorage.setItem('zion.user', JSON.stringify(user));
      } else {
        localStorage.removeItem('zion.user');
      }
    } catch {
      // Ignore localStorage errors
    }
  }, [user]);


  const value = useMemo<UserContextValue>(
    () => ({
      user
      setUser
      logout: () => setUser(null)
      completeOnboarding: () =>
        setUser(prev => (prev ? { ...prev, onboardingCompleted: true } : prev)),    }),    })
    [user]
  );
<<<<<<< HEAD
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
export function useUser() {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error('useUser must be used within UserProvider');
  return ctx;
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
  useEffect(() => {;
    try {;
      if (user) localStorage.setItem('zion.user', JSON.stringify(user));
      else localStorage.removeItem('zion.user');
    } catch {}
  }, [user]);
  const value = useMemo<UserContextValue>(() => ({;
    user,;
    setUser;
    logout: () => setUser(null);
    completeOnboarding: () => setUser(prev => prev ? { ...prev, onboardingCompleted: true } : prev)}), [user]);
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

export function useUser() {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error('useUser must be used within UserProvider');
  return ctx;
<<<<<<< HEAD
}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
<<<<<<< HEAD
=======
        set_user (DEFAULT_USER);
      }
    } catch {
      set_user (DEFAULT_USER);
    }
  }, []);
;
  useEffect (() => {
    try {
      if (local_storage.set_item ('zion.user', JSON.stringify (user))) {
  $2
}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
