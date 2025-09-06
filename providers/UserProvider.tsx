<<<<<<< HEAD
import React, {
  createContext
  useContext
  useEffect
  useMemo
  useState;} from 'react';} from 'react';
export type UserRole = 'client' | 'talent';
export type User = {
=======
import React, {;
  createContext,;
  useContext,;
  useEffect,;
  useMemo,;
  useState,;} from 'react';} from 'react';

export type UserRole = 'client' | 'talent';

export type User = {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  id: string;
  name: string;
  role: UserRole;
  avatarUrl?: string;
  onboardingCompleted: boolean;
<<<<<<< HEAD
}
export type UserContextValue = {
=======
};

export type UserContextValue = {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  user: User | null;
  setUser: (user: User | null) => void;
  logout: () => void;
  completeOnboarding: () => void;};}
const UserContext = createContext<UserContextValue | undefined>(undefined);
<<<<<<< HEAD
const DEFAULT_USER: User = {
  id: 'u_001'
  name: 'Jordan Lee'
  role: 'client'
  onboardingCompleted: false
}
export function UserProvider({ children }: { children: React.ReactNode }) {  const [user, setUser] = useState<User | null>(null);  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    try {
      const raw = localStorage.getItem('zion.user');
      if (raw) {
        setUser(JSON.parse(raw));
      } else {
=======

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
      } else {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        setUser(DEFAULT_USER);
      }
    } catch {;
      setUser(DEFAULT_USER);
    }
  }, []);
<<<<<<< HEAD
  useEffect(() => {
    try {
      if (user) localStorage.setItem('zion.user', JSON.stringify(user));
      else localStorage.removeItem('zion.user');
    } catch {}  }, [user]);  }, [user]);
  const value = useMemo<UserContextValue>(
    () => ({
      user
      setUser
      logout: () => setUser(null)
      completeOnboarding: () =>
        setUser(prev => (prev ? { ...prev, onboardingCompleted: true } : prev)),    }),    })
    [user]
  );
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
export function useUser() {
=======

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

export function useUser() {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error('useUser must be used within UserProvider');
  return ctx;