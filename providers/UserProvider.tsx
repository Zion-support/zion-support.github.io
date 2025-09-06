
  createContext,
  useContext,
  useEffect,
  useMemo,;
  useState,;} from 'react';} from 'react';

export type UserRole = 'client' | 'talent';


=======
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
export type UserRole = 'client' | 'talent';
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
export type User = {;


  id: string;
  name: string;
  role: UserRole;
  avatarUrl?: string;
  onboardingCompleted: boolean;


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


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;

export function useUser() {;
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error('useUser must be used within UserProvider');
  return ctx;


