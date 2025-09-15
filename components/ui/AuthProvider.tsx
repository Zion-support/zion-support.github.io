<<<<<<< HEAD
"use client";
import React{ createContextuseContextuseEffectuseState } from 'react';
=======
import React, { createContext, useContext, useEffect, useState } from 'react';
>>>>>>> origin/auto/autonomy-17186719616

type UserRole = 'talent' | 'client';

type AuthContextType = {
  role: UserRole;
  setRole: (role: UserRole) => void;
};

<<<<<<< HEAD
const AuthContext = createContext<AuthContextType>({ role: ''talent', 'setRole: () => {} });

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [rolesetRoleState] = useState<UserRole>('talent');
=======
const AuthContext = createContext<AuthContextType>({ role: 'talent', setRole: () => {} });

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [role, setRoleState] = useState<UserRole>('talent');
>>>>>>> origin/auto/autonomy-17186719616

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem('userRole') as UserRole | null;
      if (stored === 'talent' || stored === 'client') {
        setRoleState(stored);
      }
    } catch {}
<<<<<<< HEAD
  }[]);
=======
  }, []);
>>>>>>> origin/auto/autonomy-17186719616

  const setRole = (r: UserRole) => {
    setRoleState(r);
    try { 
<<<<<<< HEAD
      window.localStorage.setItem(', 'userRole', 'r);
=======
      window.localStorage.setItem('userRole', r);
>>>>>>> origin/auto/autonomy-17186719616
      document.cookie = `userRole=${r}; path=/; max-age=${60 * 60 * 24 * 365}`;
    } catch {}
  };

  return (
<<<<<<< HEAD
    <AuthContext.Provider value={{ rolesetRole }}>{children}</AuthContext.Provider>
=======
    <AuthContext.Provider value={{ role, setRole }}>{children}</AuthContext.Provider>
>>>>>>> origin/auto/autonomy-17186719616
  );
}

export function useAuth() {
  return useContext(AuthContext);
}