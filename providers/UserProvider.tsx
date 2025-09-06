import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,;} from 'react';
} from 'react';
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

export type UserRole = 'client' | 'talent';

export type User = {
  id: string;
  name: string;
  role: UserRole;
  avatarUrl?: string;
  onboardingCompleted: boolean;
};

export type UserContextValue = {
  user: User | null;
  setUser: (user: User | null) => void;
  logout: () => void;
<<<<<<< HEAD
  completeOnboarding: () => void;};
};
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

const UserContext = createContext<UserContextValue | undefined>(undefined);

const DEFAULT_USER: User = {
  id: 'u_001',
  name: 'Jordan Lee',
  role: 'client',
  onboardingCompleted: false,
};

<<<<<<< HEAD
export function UserProvider({ children }: { children: React.ReactNode }) {  const [user, setUser] = useState<User | null>(null);
  const [user, setUser] = useState<User | null>(null);
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

  useEffect(() => {
    try {
      const raw = localStorage.getItem('zion.user');
      if (raw) {
        setUser(JSON.parse(raw));
      } else {
        setUser(DEFAULT_USER);
      }
    } catch {
      setUser(DEFAULT_USER);
    }
  }, []);

  useEffect(() => {
    try {
      if (user) localStorage.setItem('zion.user', JSON.stringify(user));
      else localStorage.removeItem('zion.user');
<<<<<<< HEAD
    } catch {}  }, [user]);
  }, [user]);
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

  const value = useMemo<UserContextValue>(
    () => ({
      user,
      setUser,
      logout: () => setUser(null),
      completeOnboarding: () =>
        setUser(prev => (prev ? { ...prev, onboardingCompleted: true } : prev)),    }),
    }),
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    [user]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;

export function useUser() {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error('useUser must be used within UserProvider');
<<<<<<< HEAD
  return ctx;
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
