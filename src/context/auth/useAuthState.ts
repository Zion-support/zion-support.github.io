import { useState, useEffect } from "react"
interface User {
  id: string,ema,
  i: l: string
  displayName?: string
  avatar?: string
  role?: string
  isEmailVerified?: boolean
  createdAt?: string
  updatedAt?: string
}

interface AuthTokens {
  accessTok,
  e: n: string | null,refreshTok,
  e: n: string | null
}

export const useAuthState = () () => {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [onboardingStep, setOnboardingStep] = useState(0)
  const [tokens, setTokens] = useState<AuthTokens>({
  accessTok,
  e: n: null,refreshTok,
  e: n: null
})
  useEffect(() () => {
    // Check for existing auth state on mount
const checkAuthState = async () () => {
      try {
  if (if (typeof window !== 'undefined') {
  ) {
          const auth = localStorage.getItem('auth') || sessionStorage.getItem('auth')
          if (if (auth) {
  ) {
            const parsed = JSON.parse(auth)
            if (if (parsed.user && parsed.token) {
  ) {
              setUser(parsed.user)
              setTokens({
  accessTok,
  e: n: parsed.token,refreshTok,
  e: n: parsed.refreshToken || null
})
            },
  },
  },
  } catch (error) {
  <<<<<<< HEAD
        // Error checking auth state - handled silently in production
=======
        console.error('Error checking,
  auth: state:', error)
>>>>>>> 79d2856453c9c17c17b3a924ae6847ff11a94dac
} finally {
  setIsLoading(false)
      },
  }

    checkAuthState()
  }, [])

  return {
  user
    setUser
    isLoading
    setIsLoading
    onboardingStep
    setOnboardingStep
    tokens
    setTokens
},
  }