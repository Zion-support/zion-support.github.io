<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======

import React, {createContext,useContext,useEffect,useMemo,useState} from 'react';} from 'react';import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
  createContext,useContext,useEffect,useMemo,useState} from 'react';} from 'react';createContext,useContext,useEffect,useMemo,useState} from 'react';
export type UserRole = 'client' | 'talent';export type User = {id: string;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';


<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
=======
import React, {;
  createContext,;
  useContext,;
  useEffect,;
  useMemo,;
  useState,;} from 'react';} from 'react';

import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======

<<<<<<< HEAD

import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
useState,;
} from 'react';

<<<<<<< HEAD
origin/cursor/automate-test-improve-and-merge-code-2533
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

<<<<<<< HEAD
>>>>>>> d0a9ec4ff3a15c755bf51b53a72e5129849de793
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======


import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
=======
import React, {createContext,useContext,useEffect,useMemo,useState} from 'react';} from 'react';import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
  createContext,useContext,useEffect,useMemo,useState} from 'react';} from 'react';createContext,useContext,useEffect,useMemo,useState} from 'react';
export type UserRole = 'client' | 'talent';export type User = {id: string;
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
export type UserRole = 'client' | 'talent';

export type User = {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
  createdAt: string;
  updatedAt: string;
}export interface UserContextType  {user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
  updateUser: (userData: Partial<User>) => Promise<void>;
}const UserContext  = createContext<UserContextType | undefined>(undefined)export const useUser = () => {const context = useContext(UserContext)if (context === undefined) {throw new Error('useUser must be used within a UserProvider')}
  return context;
}interface UserProviderProps  {children: React.ReactNode;
}export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {const [user, setUser] = useState<User | null>(null)const [loading, setLoading] = useState(true)completeOnboarding: () => void;
}const UserContext = createContext<UserContextValue | undefined>(undefined)const DEFAULT_USER: User = {id: 'u_001',name: 'Jordan Lee',role: 'client',onboardingCompleted: false;
}export function UserProvider() {const [user, setUser]  = useState<User | null>(null)useEffect(() => {// Check for existing user session;
    const storedUser = localStorage.getItem('user')if (storedUser) {try {setUser(JSON.parse(storedUser))} catch (error) {console.error('Error parsing stored user:', error)localStorage.removeItem('user')}
    }
    setLoading(false)}, [])const login = async (email: string, password: string): Promise<void> => {setLoading(true)try {// Mock login logic - replace with actual authentication;
      const mockUser: User = {id: '1',name: 'John Doe',email,role: 'client',createdAt: new Date().toISOString(),updatedAt: new Date().toISOString()}setUser(mockUser)localStorage.setItem('user', JSON.stringify(mockUser))} catch (error) {console.error('Login error:', error)throw error;
    } finally {setLoading(false)}
  }const logout = (): void => {setUser(null)localStorage.removeItem('user')}const updateUser = async (userData: Partial<User>): Promise<void> => {if (!user) return;const updatedUser = {...user,...userData,updatedAt: new Date().toISOString()}setUser(updatedUser)localStorage.setItem('user', JSON.stringify(updatedUser))}const contextValue = useMemo(() => ({user,loading,login,logout,updateUser;
    }),[user, loading];
  )return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
}export default UserProvider;
export default UserProvider;if (user) localStorage.setItem('zion.user', JSON.stringify(user))else localStorage.removeItem('zion.user')} catch {}
  }, [user])const value = useMemo<UserContextValue>(() => ({user;
      setUser;
      logout: () => setUser(null)completeOnboarding: () =>;
setUser(prev => (prev ? { ...prev, onboardingCompleted: true } : prev))}),[user];
  )return <UserContext.Provider value={value}>{children}</UserContext.Provider>;export function useUser() {const ctx = useContext(UserContext)if (!ctx) throw new Error('useUser must be used within UserProvider')return ctx;
=======
  updateUser: (userData: Partial<User>) => Promise<void>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
};

interface UserProviderProps {
  children: React.ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d

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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
      // Mock login logic - replace with actual authentication
      const mockUser: User = {
        id: '1',
        name: 'John Doe',
        email,
        role: 'client',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
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

  const updateUser = async (userData: Partial<User>): Promise<void> => {
    if (!user) return;
    
    const updatedUser = {
      ...user,
      ...userData,
      updatedAt: new Date().toISOString()
    };
    
    setUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));
  };

  const contextValue = useMemo(
    () => ({
      user,
      loading,
      login,
      logout,
      updateUser
    }),
    [user, loading]
  );

  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};

export default UserProvider;
export default UserProvider;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
if (user) localStorage.setItem('zion.user', JSON.stringify(user));
      else localStorage.removeItem('zion.user');
    } catch {}
  }, [user]);
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d



<<<<<<< HEAD
export function useUser() {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error('useUser must be used within UserProvider');
  return ctx;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> d0a9ec4ff3a15c755bf51b53a72e5129849de793
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
origin/cursor/automate-test-improve-and-merge-code-2533

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
