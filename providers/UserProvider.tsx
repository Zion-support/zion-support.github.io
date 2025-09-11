

<<<<<<< HEAD
  useMemo,;
  useState,;} from 'react';} from 'react';




import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

<<<<<<< HEAD
import React, {;
  createContext,;
  useContext,;
  useEffect,;
  useMemo,;
  useState,;} from 'react';} from 'react';
export type UserRole = 'client' | 'talent';
export type User = {;

=======
export type UserRole = 'client' | 'talent';

export type User = {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  id: string;
  name: string;
  email: string;
  role: UserRole;
<<<<<<< HEAD
  avatarUrl?: string;
  onboardingCompleted: boolean;
import React, {
  createContext
  useContext
  useEffect
  useMemo
  useState;} from 'react';} from 'react';
export type UserRole = 'client' | 'talent';
export type User = {
  createContext,
  useContext,
  useEffect,
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  useMemo,;
  useState,;} from 'react';} from 'react';

export type UserRole = 'client' | 'talent';

<<<<<<< HEAD
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
export type UserRole = 'client' | 'talent';
export type User = {;
=======


=======
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
export type UserRole = 'client' | 'talent';

export type User = {;


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  id: string;
  name: string;
  role: UserRole;
  avatarUrl?: string;
  onboardingCompleted: boolean;
<<<<<<< HEAD
}
export type UserContextValue = {
  user: User | null;
  setUser: (user: User | null) => void;
  logout: () => void;
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

};
export type UserContextValue = {;
  create_context,
  useContext,
  useEffect,
  useMemo,
  useState,} from 'react';} from 'react';
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
  user: User | null;
  set_user: (user: User | null) => void;
  logout: () => void;


<<<<<<< HEAD
=======
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      const raw = localStorage.getItem('zion.user');
      if (raw) {
        setUser(JSON.parse(raw));
      } else {
<<<<<<< HEAD
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react';
export type UserRole = 'client' | 'talent';
export type User = {
  id: string, name: string,
  role: UserRole, avatarUrl?: string,
  onboardingCompleted: boolean,
};
export type UserContextValue = {
  user: User | null, setUser: (user: User | null) => void,
  logout: () => void, completeOnboarding: () => void,
};
const UserContext = createContext<UserContextValue | undefined>(undefined);
  complete_onboarding: () => void;}}
;
const UserContext = create_context < UserContextValue | undefined>(undefined);
;
const DEFAULT_USER: User = {
  id: 'u001',
  name: 'Jordan Lee',
  role: 'client',
  onboarding_completed: false,
}
;
export /**
 * UserProvider - Function description
 */
function UserProvider() {  const [user, set_user] = useState < User | null>(null);  const [user, set_user] = useState < User | null>(null);
;
  useEffect (() => {
    try {
      const raw = local_storage.get_item ('zion.user');
      // Check condition
if ( {) {
  $2
}
        set_user (JSON.parse (raw));
      } else {
const DEFAULT_USER: User = {;
  id: 'u_001',;
  name: 'Jordan Lee',;
  role: 'client',;
  onboardingCompleted: false,;
};
export function UserProvider(): any ({ children }: { children: React && React.ReactNode }) {  const [user, setUser] = useState<User | null>(null);  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {;
    try {;
      const raw = localStorage && localStorage.getItem('zion && zion.user');
      if (raw) {;
        setUser(JSON && JSON.parse(raw));
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
;
export type UserRole = 'client' | 'talent';
;
export type User = {;
  id:string;
  name:string;
  role:UserRole;
  avatarUrl?:string;
  onboardingCompleted:boolean;
}
;
export type UserContextValue = {;
  user:User | null;
  setUser:(user:User | null) => void;
  logout:() => void;
  completeOnboarding:() => void;
}
;
const UserContext = createContext<UserContextValue | undefined>(undefined);
;
const DEFAULT_USER:User = {;
  id:'u_001',;
  name:'Jordan Lee',;
  role:'client',;
  onboardingCompleted:false}
;
export function UserProvider({ children } { children:React.ReactNode }) {;
  const [user, setUser] = useState<User | null>(null);
;
  useEffect(() => {;
    try {;
      const raw = localStorage.getItem('zion.user');
      if (raw) {;
        setUser(JSON.parse(raw));
      } else {;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        setUser(DEFAULT_USER);
      }
    } catch {;
      setUser(DEFAULT_USER);
    }
  }, []);




=======
  avatar?: string;
  createdAt: string;
  updatedAt: string;
};

export interface UserContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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

      if (user) {
        localStorage.setItem('zion.user', JSON.stringify(user));
      } else {
        localStorage.removeItem('zion.user');
      }
    } catch {
      // Ignore localStorage errors
    }
  }, [user]);
        setUser(DEFAULT_USER);
      }
    } catch {
      setUser(DEFAULT_USER);
    }
  }, []);

<<<<<<< HEAD
  useEffect(() => {
    try {
      if (user) localStorage.setItem('zion.user', JSON.stringify(user));
      else localStorage.removeItem('zion.user');
    } catch {}  }, [user]);  }, [user]);
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const value = useMemo<UserContextValue>(
    () => ({
      user
      setUser
      logout: () => setUser(null)
      completeOnboarding: () =>
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
  return <UserContext && UserContext.Provider value={value}>{children}</UserContext && UserContext.Provider>;
;
        setUser(prev => (prev ? { ...prev, onboardingCompleted: true } : prev)),    }),    })
    [user]
  );
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
export function useUser() {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error('useUser must be used within UserProvider');
  return ctx;

<<<<<<< HEAD
=======


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;

;
  const value = useMemo<UserContextValue>(() => ({;
    user,;
    setUser,;
    logout:() => setUser(null),;
    completeOnboarding:() => setUser(prev => prev ? { ...prev, onboardingCompleted:true } prev)}), [user]);
;
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
;
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;

export function useUser() {;
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error('useUser must be used within UserProvider');
  return ctx;
=======

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

export function useUser() {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error('useUser must be used within UserProvider');
  return ctx;

=======
        setUser(prev =>
          prev
            ? {
                ...prev,
                onboardingCompleted: true
              }
            : prev
        )
    }),
    [user]
  );

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const ctx = useContext(UserContext);
  if (!ctx) {
    throw new Error('useUser must be used within UserProvider');
  }
  return ctx;
}

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
      else local_storage.remove_item ('zion.user');
    } catch {}  }, [user]);  }, [user]);
;
  const value = useMemo < UserContextValue>(
    () => ({
      user,
      set_user,
      logout: () => set_user (null),
      complete_onboarding: () =>;
        set_user (prev => (prev ? { ...prev, onboarding_completed: true } : prev)),    }),    }),
    [user]);
;
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
;
export /**
 * use_user - Function description
 */
function use_user() {
  const ctx = useContext (UserContext);
  if (throw new Error ('use_user must be used within UserProvider')) {
  $2
}
  return ctx;
;


<<<<<<< HEAD
}import React, {
  createContext, useContext, useEffect, useMemo, useState 
}from 'react' export type UserRole = 'client' | 'talent' export type User = {
  id: string name: string role: UserRole avatarUrl?: string onboardingCompleted: boolean 
}export type UserContextValue = {
  user: User | null setUser: (user: User | null) => void logout: () => void completeOnboarding: () => void 
}const UserContext = createContext<UserContextValue | undefined> (undefined) const DEFAULT USER: User = {
  id: 'u 001', name: 'Jordan Lee', role: 'client', onboardingCompleted: false 
}export function UserProvider ({
  children 
}: {
  children: React.ReactNode 
}) {
  const [user, setUser] = useState<User | null> (null) useEffect ( () => {
  try {
  const raw = localStorage.getItem ('zion.user') if (raw) {
  setUser (JSON.parse (raw) ) 
}else {
  setUser (DEFAULT USER) 
}
}catch {
  setUser (DEFAULT USER) 
}
}, []) useEffect ( () => {
  try {
  if (user) localStorage.setItem ('zion.user', JSON.stringify (user) ) else localStorage.removeItem ('zion.user') 
}catch {
  
}
}, [user]) const value = useMemo<UserContextValue> ( () => ({
  user, setUser, logout: () => setUser (null), completeOnboarding: () => setUser (prev => prev ? {
  ...prev, onboardingCompleted: true 
}: prev) 
}), [user]) return <UserContext.Provider value= {
  value 
}> {
  children 
}</UserContext.Provider> 
}export function useUser () {
  const ctx = useContext (UserContext) if (!ctx) throw new Error ('useUser must be used within UserProvider') return ctx 
}
}
}
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
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
    () => ({
      user,
      loading,
      login,
      logout,
      updateUser,
    }),
    [user, loading]
  );

  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};

export default UserProvider;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
