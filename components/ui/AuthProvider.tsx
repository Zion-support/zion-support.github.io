<<<<<<< HEAD
import React, { createContext, useContext, useEffect, useState } from 'react';
=======
"use client";
import React{ createContextuseContextuseEffectuseState } from 'react';
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982

type UserRole = 'talent' | 'client';

type AuthContextType = {
  role: UserRole;
  setRole: (role: UserRole) => void;
};

<<<<<<< HEAD
const AuthContext = createContext<AuthContextType>({ role: 'talent', setRole: () => {} });

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [role, setRoleState] = useState<UserRole>('talent');
=======
const AuthContext = createContext<AuthContextType>({ role: ''talent', 'setRole: () => {} });

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [rolesetRoleState] = useState<UserRole>('talent');
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem('userRole') as UserRole | null;
      if (stored === 'talent' || stored === 'client') {
        setRoleState(stored);
      }
    } catch {}
<<<<<<< HEAD
  }, []);
=======
  }[]);
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982

  const setRole = (r: UserRole) => {
    setRoleState(r);
    try { 
<<<<<<< HEAD
      window.localStorage.setItem('userRole', r);
=======
      window.localStorage.setItem(', 'userRole', 'r);
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
      document.cookie = `userRole=${r}; path=/; max-age=${60 * 60 * 24 * 365}`;
    } catch {}
  };

  return (
<<<<<<< HEAD
    <AuthContext.Provider value={{ role, setRole }}>{children}</AuthContext.Provider>
=======
    <AuthContext.Provider value={{ rolesetRole }}>{children}</AuthContext.Provider>
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
  );
}

export function useAuth() {
  return useContext(AuthContext);
}