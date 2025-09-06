<<<<<<< HEAD



=======


  useMemo,;
  useState,;} from 'react';} from 'react';




=======
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

export type UserRole = 'client' | 'talent';

export type User = {;


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
  id: string;
  name: string;
  email: string;
  role: UserRole;
<<<<<<< HEAD


  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;


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
=======
  avatarUrl?: string;
  onboardingCompleted: boolean;

};

export type UserContextValue = {;

=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  user: User | null;
  set_user: (user: User | null) => void;
  logout: () => void;


=======


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
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
export function useUser() {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error('useUser must be used within UserProvider');
  return ctx;
}
}

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
=======


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

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

  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};


export default UserProvider;
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

=======

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



=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
