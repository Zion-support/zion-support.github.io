
import React, {createContext,useContext,useEffect,useMemo,useState} from 'react';} from 'react';import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
  createContext,useContext,useEffect,useMemo,useState} from 'react';} from 'react';createContext,useContext,useEffect,useMemo,useState} from 'react';
export type UserRole = 'client' | 'talent';export type User = {id: string;
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
}export interface UserContextType  {user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
export type User = {;

export type UserRole = $2;
  name: 'Jordan Lee',
  role: 'client',
  onboardingCompleted: false}

export function UserProvider({ children }: { children: React.ReactNode }) {
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
  updateUser: (userData: Partial<User>) => Promise<void>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

interface UserProviderProps {
  children: React.ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    try {
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

    const storedUser = localStorage.getItem('user');
    if (storedUser) {}
      try {}
        setUser(JSON.parse(storedUser));
      } catch (error) {'
        console.error('Error parsing stored user:', error);'
        localStorage.removeItem('user');
      }
    } catch {
      // Ignore localStorage errors
    }
  }, []);
  useEffect(() => {
    try {
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
      if (user) localStorage.setItem('zion.user', JSON.stringify(user));
      else localStorage.removeItem('zion.user');
    } catch {}
  }, [user]);

  const value = $2;
    setUser,
    logout: () => setUser($2);
    completeOnboarding: () => setUser(prev => prev ? { ...prev, onboardingCompleted: true} : prev)}), [user])

return <UserContext.Provider value={value}>{children}</UserContext.Provider>;

if (user) localStorage.setItem('zion.user', JSON.stringify(user));
      else localStorage.removeItem('zion.user');
    } catch {}
  }, [user]);



export function useUser() {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error('useUser must be used within UserProvider');
  return ctx;
origin/cursor/automate-test-improve-and-merge-code-2533

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;

export function useUser() {;
  if (!ctx) throw new Error('useUser must be used within UserProvider');
  return ctx;
}
