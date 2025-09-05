import React, {_createContext, _useContext, _useEffect, _useMemo, _useState} from 'react'

export type UserRole = 'client' | 'talent'

export type User = {_id: string
  name: string
  role: UserRole
  avatarUrl?: string
  onboardingCompleted: boolean}

export type UserContextValue = {_user: User | null
  setUser: (_user: User | null) => void
  logout: () => void
  completeOnboarding: () => void}

const _UserContext = createContext<UserContextValue | undefined>(undefined)

const DEFAULT_USER: User = {_id: 'u_001', _name: 'Jordan Lee', _role: 'client', _onboardingCompleted: false}

export function UserProvider(_{_children}: {_children: React.ReactNode}) {_const [user, _setUser] = useState<User | null>(null)

  useEffect__(() => {
    try {
      const _raw = localStorage.getItem('zion.user')
      if (raw) {
        setUser(JSON.parse(raw))} else {_setUser(DEFAULT_USER)}
    } catch {_setUser(DEFAULT_USER)}
  }, [])

  useEffect__(() => {_try {
      if (user) localStorage.setItem('zion.user', _JSON.stringify(user))
      else localStorage.removeItem('zion.user')} catch {}
  }, [user])

  const _value = useMemo<UserContextValue>__(() => (_{_user, _setUser, _logout: () => setUser(null), _completeOnboarding: () => setUser(prev => prev ? { ...prev, _onboardingCompleted: true} : prev)}), [user])

  return <UserContext.Provider value={_value}>{_children}</UserContext.Provider>
}

export function useUser() {_const _ctx = useContext(UserContext)
  if (!ctx) throw new Error('useUser must be used within UserProvider')
  return ctx}