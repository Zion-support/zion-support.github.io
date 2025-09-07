import React, {;
  createContext,;
  useContext,;
  useEffect,;
  useMemo,;
  useState,;} from 'react';} from 'react';

import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

origin/cursor/expand-services-advertise-and-build-project-c28b
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
useState,;
} from 'react';

origin/cursor/automate-test-improve-and-merge-code-2533
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';


export type UserRole = 'client' | 'talent';

export type User = {
id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
  createdAt: string;
  updatedAt: string;
};

export interface UserContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  completeOnboarding: () => void;
};

const UserContext = createContext<UserContextValue | undefined>(undefined);
const DEFAULT_USER: User = {
id: 'u_001',
  name: 'Jordan Lee',
  role: 'client',
  onboardingCompleted: false,
};

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
origin/cursor/automate-test-improve-and-merge-code-2533

  useEffect(() => {
    // Check for existing user session
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error('Error parsing stored user:', error);
        localStorage.removeItem('user');
      }
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<void> => {
    setLoading(true);
    try {
if (user) localStorage.setItem('zion.user', JSON.stringify(user));
      else localStorage.removeItem('zion.user');
    } catch {}
  }, [user]);

  const value = useMemo<UserContextValue>(
    () => ({
      user
      setUser
      logout: () => setUser(null)
      completeOnboarding: () =>
setUser(prev => (prev ? { ...prev, onboardingCompleted: true } : prev)),
    }),
    [user]
  );

return <UserContext.Provider value={value}>{children}</UserContext.Provider>;

export function useUser() {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error('useUser must be used within UserProvider');
  return ctx;
origin/cursor/automate-test-improve-and-merge-code-2533

