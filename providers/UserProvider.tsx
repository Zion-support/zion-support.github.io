<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:providers/UserProvider.tsx
=======


  useMemo,;
  useState,;} from 'react';} from 'react';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee


<<<<<<< HEAD
=======


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

========
import React, {;
  createContext,;
  useContext,;
  useEffect,;
  useMemo,;
  useState,;} from 'react';} from 'react';
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/providers/UserProvider.tsx
export type UserRole = 'client' | 'talent';
export type User = {;
<<<<<<<< HEAD:providers/UserProvider.tsx

<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/providers/UserProvider.tsx
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatarUrl?: string;
  onboardingCompleted: boolean;
<<<<<<<< HEAD:providers/UserProvider.tsx
<<<<<<< HEAD

export type UserContextValue = {;
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;

=======
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
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
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

=======
}
;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
export type UserContextValue = {;
  user: User | null;
  setUser: (user: User | null) => void;
  logout: () => void;
<<<<<<< HEAD
  completeOnboarding: () => void;};};

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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
=======

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/providers/UserProvider.tsx
};
export type UserContextValue = {;
<<<<<<<< HEAD:providers/UserProvider.tsx

=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/providers/UserProvider.tsx
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
<<<<<<<< HEAD:providers/UserProvider.tsx


=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      const raw = localStorage.getItem('zion.user');
      if (raw) {
        setUser(JSON.parse(raw));
      } else {
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
========
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
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      } else {;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/providers/UserProvider.tsx
        setUser(DEFAULT_USER);
      }
    } catch {;
      setUser(DEFAULT_USER);
    }
  }, []);

<<<<<<< HEAD
<<<<<<<< HEAD:providers/UserProvider.tsx
=======




>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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

=======

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/providers/UserProvider.tsx
      if (user) {
        localStorage.setItem('zion.user', JSON.stringify(user));
      } else {
        localStorage.removeItem('zion.user');
      }
    } catch {
      // Ignore localStorage errors
    }
  }, [user]);
<<<<<<<< HEAD:providers/UserProvider.tsx


========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/providers/UserProvider.tsx
=======
        setUser(DEFAULT_USER);
      }
    } catch {
      setUser(DEFAULT_USER);
    }
  }, []);
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  useEffect(() => {
    try {
      if (user) localStorage.setItem('zion.user', JSON.stringify(user));
      else localStorage.removeItem('zion.user');
    } catch {}  }, [user]);  }, [user]);
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const value = useMemo<UserContextValue>(
    () => ({
      user
      setUser
      logout: () => setUser(null)
      completeOnboarding: () =>
<<<<<<< HEAD
<<<<<<<< HEAD:providers/UserProvider.tsx


========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/providers/UserProvider.tsx
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
=======
<<<<<<<< HEAD:providers/UserProvider.tsx



=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/providers/UserProvider.tsx
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  useEffect(() => {;
    try {;
      if (user) localStorage.setItem('zion.user', JSON.stringify(user));
      else localStorage.removeItem('zion.user');
    } catch {}
  }, [user]);
<<<<<<< HEAD
<<<<<<<< HEAD:providers/UserProvider.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const value = useMemo<UserContextValue>(() => ({;
    user,;
    setUser;
    logout: () => setUser(null);
    completeOnboarding: () => setUser(prev => prev ? { ...prev, onboardingCompleted: true } : prev)}), [user]);
<<<<<<< HEAD

<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

========
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/providers/UserProvider.tsx
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export function useUser() {;
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error('useUser must be used within UserProvider');
  return ctx;
<<<<<<< HEAD
<<<<<<<< HEAD:providers/UserProvider.tsx

<<<<<<< HEAD
=======
=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/providers/UserProvider.tsx
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
<<<<<<<< HEAD:providers/UserProvider.tsx

=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/providers/UserProvider.tsx
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
<<<<<<<< HEAD:providers/UserProvider.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/providers/UserProvider.tsx
=======
<<<<<<< HEAD
}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
<<<<<<< HEAD
=======
}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
