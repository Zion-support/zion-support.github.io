import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'

export type UserRole = $2;
  name: 'Jordan Lee',
  role: 'client',
  onboardingCompleted: false}

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    try {
      const raw = localStorage.getItem('zion.user')
      if (raw) {
        setUser(JSON.parse(raw))
      } else {
        setUser(DEFAULT_USER)
      }
    } catch {
      setUser(DEFAULT_USER)
    }
  }, [])

  useEffect(() => {
    try {
      if (user) localStorage.setItem('zion.user', JSON.stringify(user))
      else localStorage.removeItem('zion.user')
    } catch {}
  }, [user])

  const value = $2;
    setUser,
    logout: () => setUser($2);
    completeOnboarding: () => setUser(prev => prev ? { ...prev, onboardingCompleted: true} : prev)}), [user])

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export function useUser() {
  const ctx = useContext(UserContext)
  if (!ctx) throw new Error('useUser must be used within UserProvider')
  return ctx
}