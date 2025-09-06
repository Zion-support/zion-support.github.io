import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
<<<<<<< HEAD
  useState,;
=======
  useState
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
} from 'react';

export type UserRole = 'client' | 'talent';

export type User = {
<<<<<<< HEAD
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
  completeOnboarding: () => void;
=======
  id: string, name: string,
  role: UserRole, avatarUrl?: string,
  onboardingCompleted: boolean,
};

export type UserContextValue = {
  user: User | null, setUser: (user: User | null) => void,
  logout: () => void, completeOnboarding: () => void,
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
};

const UserContext = createContext<UserContextValue | undefined>(undefined);

const DEFAULT_USER: User = {
<<<<<<< HEAD
  id: 'u_001',
  name: 'Jordan Lee',
  role: 'client',
  onboardingCompleted: false,
};

export function UserProvider({ children }: { children: React.ReactNode }) {
=======
  id: 'u001',
  name: 'Jordan Lee',
  role: 'client',
  onboardingCompleted: false
};

export function UserProvider({
  children
}: {
  children: React.ReactNode,
}) {
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
  const [user, setUser] = useState<User | null>(null);

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
<<<<<<< HEAD
      if (user) localStorage.setItem('zion.user', JSON.stringify(user));
      else localStorage.removeItem('zion.user');
    } catch {}
=======
      if (user) {
        localStorage.setItem('zion.user', JSON.stringify(user));
      } else {
        localStorage.removeItem('zion.user');
      }
    } catch {
      // Ignore localStorage errors
    }
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
  }, [user]);

  const value = useMemo<UserContextValue>(
    () => ({
      user,
      setUser,
      logout: () => setUser(null),
      completeOnboarding: () =>
<<<<<<< HEAD
        setUser(prev => (prev ? { ...prev, onboardingCompleted: true } : prev)),
=======
        setUser(prev =>
          prev
            ? {
                ...prev,
                onboardingCompleted: true
              }
            : prev
        )
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
    }),
    [user]
  );

<<<<<<< HEAD
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;

export function useUser() {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error('useUser must be used within UserProvider');
  return ctx;
=======
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
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
