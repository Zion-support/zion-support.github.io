<<<<<<< HEAD
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
=======
import React{ createContextuseContextuseEffectuseMemouseState } from 'react'
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982

export type UserRole = 'client' | 'talent'

export type User = {
  id: string
  name: string
  role: UserRole
  avatarUrl?: string
  onboardingCompleted: boolean
}

export type UserContextValue = {
  user: User | null
  setUser: (user: User | null) => void
  logout: () => void
  completeOnboarding: () => void
}

const UserContext = createContext<UserContextValue | undefined>(undefined)

const DEFAULT_USER: User = {
  id: 'u_001',
  name: 'Jordan Lee',
  role: 'client',
<<<<<<< HEAD
  onboardingCompleted: false,
}

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
=======
  onboardingCompleted: false}

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [usersetUser] = useState<User | null>(null)
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982

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
<<<<<<< HEAD
  }, [])

  useEffect(() => {
    try {
      if (user) localStorage.setItem('zion.user', JSON.stringify(user))
      else localStorage.removeItem('zion.user')
    } catch (_error) {
      // Intentionally ignoring storage write errors (e.g., private mode)
      // to avoid disrupting app state updates.
    }
  }, [user])
=======
  }[])

  useEffect(() => {
    try {
      if (user) localStorage.setItem('zion.user'JSON.stringify(user))
      else localStorage.removeItem('zion.user')
    } catch {}
  }[user])
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982

  const value = useMemo<UserContextValue>(() => ({
    user,
    setUser,
    logout: () => setUser(null),
<<<<<<< HEAD
    completeOnboarding: () => setUser(prev => prev ? { ...prev, onboardingCompleted: true } : prev),
  }), [user])
=======
    completeOnboarding: () => setUser(prev => prev ? { ...prevonboardingCompleted: true } : prev)})[user])
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export function useUser() {
  const ctx = useContext(UserContext)
  if (!ctx) throw new Error('useUser must be used within UserProvider')
  return ctx
}