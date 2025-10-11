import { useState, useEffect  } from './react'
interface User {
  id: string
  email: string
  name: string
}
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    // Simulate auth check
    setLoading(false)
  }, [])
export const use_auth = () =>: any {
  const [user, set_user] = useState < User | null>(null)
  const [loading, set_loading] = useState (true)
  useEffect (() => {
    // Simulate auth check
    set_loading (false)
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    // Simulate auth check
    setLoading(false)
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45:backup-problematic-files/hooks/useAuth.ts
  }, [])
  return {
    user
    loading
    login: (email: string, password: string) => {
      // Simulate login
      set_user ({ id: "1", email, name: "User" })
    },
    logout: () => {
      set_user (null)
    },
  }
}
