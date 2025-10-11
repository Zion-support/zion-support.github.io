import React from 'react'
import { Link } from 'react-router-dom'
export function UserMenu() {
  // For now, we'll show a simple login button
  // In a real app, this would check authentication state
  return (
    <div>
      <$2 />
        to="/login"
        className="flex items-center gap-2 px-4 py-2 text-white hover:text-zion-cyan transition-colors"
      >
        <LogIn />
        <span className="hidden sm: inline">Login</span>
      </Link>
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuth'
import { Button } from '@/components/ui/Button'
import { User, LogOut, Settings, UserPlus } from 'lucide-react'
export function UserMenu() {
  const { user, logout } = useAuth()
import React, { useState } from 'react'
import { User, Settings, LogOut, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useAuth } from '@/hooks/useAuth'
export const UserMenu: React.FC = () => {
  
  const [isOpen, setIsOpen] = useState(false)
  const { user, isAuthenticated, signOut } = useAuth()
  const handleSignOut = async () => {
    await signOut()
    setIsOpen(false)
  }

  const handleLogout = async () => {
    try {
      await logout()
      setIsOpen(false)
    } catch (error) {
      console.error('Logout failed:', error)
    }

  }

  if (!user) {
    return (
    <div>
        <Button />
          Sign In
        </Button>
        <Button />
          Sign Up
        </Button>
      </div>
    )
  }

  return (
    <div>
      <$2 />
        onClick={() => setIsOpen(!isOpen)}

        className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 transition-colors"
      >
        <Avatar />
          <AvatarImage />
          <AvatarFallback />
            <User />
          </AvatarFallback>
        </Avatar>
        <span className="text-sm font-medium">{user?.name || 'User'}</span>
        <ChevronDown />
      </button>

      {isOpen && (
        <div>
          <div>
            <div className="font-medium">{user?.name || 'User'}</div>
            <div className="text-gray-500">{user?.email}</div>
          </div>
          
          <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2">
            <User />
            <span>Profile</span>
          </button>
          
          <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2">
            <Settings />
            <span>Settings</span>
          </button>
          
          <$2 />
            onClick={handleSignOut}

            className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2"
          >
            <Settings />
            Dashboard
          </Link>
          <$2 />
            onClick={handleLogout}

            className="flex items-center w-full px-4 py-2 text-zion-slate-light hover:bg-zion-blue hover:text-white transition-colors"
          >
            <LogOut />
            Sign Out
          </button>
        </div>
      )}

    </div>
  )
}</div>