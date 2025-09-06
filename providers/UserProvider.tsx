<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD


  useMemo,;
  useState,;} from 'react';} from 'react';
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159


export type User = {;

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

=======
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
export type UserRole = 'client' | 'talent';

export type User = {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  id: string;
=======
<<<<<<< HEAD
<<<<<<< HEAD
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

<<<<<<< HEAD
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
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
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  name: string;
  role: UserRole;
<<<<<<< HEAD
  avatarUrl?: string;
  onboardingCompleted: boolean;

export type UserContextValue = {;
  user: User | null;
  setUser: (user: User | null) => void;
  logout: () => void;

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
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
  avatar?: string;
  createdAt: string;
  updatedAt: string;
};

export interface UserContextType {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  completeOnboarding: () => void;};}
};

}
;
export type UserContextValue = {;
  user: User | null;
  setUser: (user: User | null) => void;
  logout: () => void;
  completeOnboarding: () => void;};};

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
;
export type UserRole = 'client' | 'talent';
;
export type User = {
  id: string;
  name: string;
  role: UserRole;
  avatar_url?: string;
  onboarding_completed: boolean;
}
;
export type UserContextValue = {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  user: User | null;
  set_user: (user: User | null) => void;
  logout: () => void;
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
<<<<<<< HEAD


  useEffect(() => {;
    try {;
      if (user) localStorage && localStorage.setItem('zion && zion.user', JSON && JSON.stringify(user));
      else localStorage && localStorage.removeItem('zion && zion.user');
    } catch {}  }, [user]);  }, [user]);

  const value = useMemo<UserContextValue>(;
    () => ({;
      user,;
      setUser,;
      logout: () => setUser(null),;
      completeOnboarding: () =>;
        setUser(prev => (prev ? { ...prev, onboardingCompleted: true } : prev)),    }),    }),;
    [user];
  );
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
export function useUser() {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error('useUser must be used within UserProvider');
  return ctx;

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
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

export function useUser() {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error('useUser must be used within UserProvider');
  return ctx;
}
}
        setUser(DEFAULT_USER);
      }
    } catch {;
      setUser(DEFAULT_USER);
    }
  }, []);
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  updateUser: (userData: Partial<User>) => Promise<void>;
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

<<<<<<< HEAD
=======
const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

interface UserProviderProps {
  children: React.ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
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

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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
    } catch {
      // Ignore localStorage errors
    }
  }, [user]);

<<<<<<< HEAD
=======
  const login = async (email: string, password: string): Promise<void> => {
    setLoading(true);
    try {
<<<<<<< HEAD
<<<<<<< HEAD
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
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

<<<<<<< HEAD
  const value = useMemo<UserContextValue>(
=======
  const logout = (): void => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const updateUser = async (userData: Partial<User>): Promise<void> => {
    if (!user) return;
    
    const updatedUser = {
      ...user,
      ...userData,
      updatedAt: new Date().toISOString(),
    };
    
    setUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));
  };

  const contextValue = useMemo(
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    () => ({
      user
      setUser
      logout: () => setUser(null)
      completeOnboarding: () =>


  useEffect(() => {;
    try {;
      if (user) localStorage && localStorage.setItem('zion && zion.user', JSON && JSON.stringify(user));
      else localStorage && localStorage.removeItem('zion && zion.user');
    } catch {}  }, [user]);  }, [user]);

  const value = useMemo<UserContextValue>(;
    () => ({;
      user,;
      setUser,;
      logout: () => setUser(null),;
      completeOnboarding: () =>;
        setUser(prev => (prev ? { ...prev, onboardingCompleted: true } : prev)),    }),    }),;
    [user];
  );

<<<<<<< HEAD
<<<<<<< HEAD
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

export function useUser() {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error('useUser must be used within UserProvider');
  return ctx;

  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
export default UserProvider;
export default UserProvider;
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
};

export default UserProvider;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};

export default UserProvider;
export default UserProvider;
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
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
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> d0a9ec4ff3a15c755bf51b53a72e5129849de793
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
