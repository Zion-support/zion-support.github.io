import React, { createContext, useContext, useEffect, useState } from 'react'
type UserRole = 'talent' | 'client'
const AuthContext = createContext<AuthContextType>({ role: any
  const [role, setRoleState] = useState<UserRole>('talent'
      const stored = window.localStorage.getItem('userRole'
      if (stored = = 'talent' || stored = = 'client'
      window.localStorage.setItem('userRole'