import { useEffect, useState } from 'react'
import { useAuth } from './useAuth'

export function useRequireAuth() {
  const { user, loading } = useAuth()
  const [state, setState] = useState({ user, loading })
  useEffect(() => {
    setState({ user, loading })
  }, [user, loading])
  return state
}

