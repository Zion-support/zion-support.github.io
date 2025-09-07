
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

import React, {;
  createContext,;
  useContext,;
  useEffect,;
  useMemo,;
  useState,;} from 'react';} from 'react';
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';


export type UserRole = 'client' | 'talent';
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

pr-12325
export type UserRole = 'client' | 'talent';
export type User = {
id: string;
  id: string;,
pr-12325
  name: string;
  email: string;,
  role: UserRole;
  avatar?: string;
  createdAt: string;,
  updatedAt: string;
};

export interface UserContextType {
  // TODO: Implement
}
  user: User | null;,
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
</void>
pr-12325
  updateUser: (userData: Partial<User>) => Promise<void>;

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
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
pr-12325

  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string): Promise<void> => {
    setLoading(true);
    try {
      // Mock login logic - replace with actual authentication
      const mockUser: User = {
        id: '1',
        name: 'John Doe',
        email,
        role: 'client',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      
      setUser(mockUser);
      localStorage.setItem('user', JSON.stringify(mockUser));
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = (): void => {
    setUser(null);
    localStorage.removeItem('user');
  };

pr-12325
  const updateUser = async (userData: Partial<User>): Promise<void> => {

  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};


export default UserProvider;
export default UserProvider;
export default UserProvider;


export default UserProvider;
export default UserProvider;
origin/cursor/expand-services-advertise-and-build-project-c28b
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
pr-12325
