'use client'
import React, { createContext, useContext, useState, useEffect } from 'react'

interface AuthContextType {
  auth: {
    user: null | any
    isAuthenticated: boolean
    isLoading: boolean
  }
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    isAuthenticated: false,
    isLoading: false
  })

  useEffect(() => {
    // Initialize auth state
    setAuth(prev => ({ ...prev, isLoading: false }))
  }, [])

  return (
    <AuthContext.Provider value={{ auth }}>
      {children}
    </AuthContext.Provider>
  )
}