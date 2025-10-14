import React from 'react'
import { Link } from 'react-router-dom'
export function UserMenu() {
  // For now, we'll show a simple login button
  // In a real app, this would check authentication state
  return (
    <div className="flex items-center gap-2"></div>
      <$2 />
        to="/login"
        className="flex items-center gap-2 px-4 py-2 text-white hover:text-zion-cyan transition-colors"
      >
        <LogIn className="w-4 h-4" />
        <span className="hidden sm:inline">Login</span>
                </Link>
import React, { useState } from 'react';
import { Link  } from 'react-router-dom';
import { useAuth  } from '@/hooks/useAuth';import { Button  } from '@/components/ui/Button';
import { User, LogOut, Settings, UserPlus  } from 'lucide-react';export function UserMenu() {
  const { user, logout } = useAuth()
import React, { useState } from 'react';
import { User, Settings, LogOut, ChevronDown  } from 'lucide-react';
import { Button  } from '@/components/ui/button';import { Avatar, AvatarFallback, AvatarImage  } from '@/components/ui/avatar';
import { useAuth  } from '@/hooks/useAuth';export const UserMenu: React.FC  = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { user, isAuthenticated, signOut } = useAuth()
  const handleSignOut = async () =>
                {
    await signOut()
    setIsOpen(false)
  }
  const handleLogout = async () =>
                {
    try {
      await logout()
      setIsOpen(false)
    } catch (error) {
      console.error('Logout failed:', error)
    }
  }
  if (!user) {
    return (
      <div className="flex items-center space-x-4"></div>
        <Button variant="outline" size="sm"></Button>
          Sign In
        </Button>
        <Button size="sm"></Button>
          Sign Up
        </Button>
                </div>
    )
  }

  return (
    <div className="relative"></div>
      <$2 />
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 transition-colors"
      >
        <Avatar className="w-8 h-8"></Avatar>
          <AvatarImage src="/default-avatar.png" alt={user?.name || 'User'} />
          <AvatarFallback></AvatarFallback>
            <User className="w-4 h-4" />
          </AvatarFallback>
                </Avatar>
        <span className="text-sm font-medium"></span>
                {user?.name || 'User'}
                </span>
        <ChevronDown className="w-4 h-4" />
      </button>
                {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"></div>
          <div className="px-4 py-2 text-sm text-gray-700 border-b border-gray-200"></div>
            <div className="font-medium"></div>
                {user?.name || 'User'}
                </div>
            <div className="text-gray-500"></div>
                {user?.email}
                </div>
                </div>
          
          <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2"></button>
            <User className="w-4 h-4" />
            <span>Profile</span>
                </button>
          
          <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2"></button>
            <Settings className="w-4 h-4" />
            <span>Settings</span>
                </button>
          
          <$2 />
            onClick={handleSignOut}
            className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2"
          >
            <Settings className="w-4 h-4 mr-3" />
            Dashboard
          </Link>
          <$2 />
            onClick={handleLogout}
            className="flex items-center w-full px-4 py-2 text-zion-slate-light hover:bg-zion-blue hover:text-white transition-colors"
          >
            <LogOut className="w-4 h-4 mr-3" />
            Sign Out
          </button>
                </div>
      )}
                </div>
  )
}
                </div>