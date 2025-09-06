import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
export type UserRole = 'client' | 'talent'
  id: any
      const raw = localStorage.getItem('zion.user'
      if (user) localStorage.setItem('zion.user'
      else localStorage.removeItem('zion.user'
  if (!ctx) throw new Error('useUser must be used within UserProvider'
from 'react' export type UserRole = 'client' | 'talent'
  id: 'u 001', name: 'Jordan Lee', role: any
  const raw = localStorage.getItem ('zion.user'
  if (user) localStorage.setItem ('zion.user', JSON.stringify (user) else localStorage.removeItem ('zion.user'
  const ctx = useContext (UserContext) if (!ctx) throw new Error ('useUser must be used within UserProvider'