<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
=======
>>>>>>> origin/cursor/build-project-and-deploy-with-netlify-1c1d
import { Link } from 'react-router-dom';

export function UserMenu() {
  // For now, we'll show a simple login button
  // In a real app, this would check authentication state
  return (
    <div className="flex items-center gap-2">
      <Link
        to="/login"
        className="flex items-center gap-2 px-4 py-2 text-white hover:text-zion-cyan transition-colors"
      >
        <LogIn className="w-4 h-4" />
        <span className="hidden sm:inline">Login</span>
      </Link>
=======
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/Button';
import { User, LogOut, Settings, UserPlus } from 'lucide-react';

export function UserMenu() {
  const { user, logout } = useAuth();
=======
import React, { useState } from 'react';
import { User, Settings, LogOut, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useAuth } from '@/hooks/useAuth';

export const UserMenu: React.FC = () => {
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2857
  const [isOpen, setIsOpen] = useState(false);
  const { user, isAuthenticated, signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
    setIsOpen(false);
  };

  const handleLogout = async () => {
    try {
      await logout();
      setIsOpen(false);
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  if (!user) {
    return (
<<<<<<< HEAD
      <div className="flex items-center space-x-3">
        <Link to="/login">
          <Button variant="ghost" size="sm" className="text-zion-cyan hover:bg-zion-cyan/10">
            Sign In
          </Button>
        </Link>
        <Link to="/signup">
          <Button size="sm" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple">
            <UserPlus className="w-4 h-4 mr-2" />
            Sign Up
          </Button>
        </Link>
=======
      <div className="flex items-center space-x-4">
        <Button variant="outline" size="sm">
          Sign In
        </Button>
        <Button size="sm">
          Sign Up
        </Button>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2857
      </div>
    );
  }

  return (
    <div className="relative">
<<<<<<< HEAD
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="text-zion-cyan hover:bg-zion-cyan/10"
        aria-expanded={isOpen}
        aria-label="User menu"
      >
        <User className="w-4 h-4 mr-2" />
        {user.name || user.email}
      </Button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-zion-blue-dark border border-zion-blue-light rounded-lg shadow-lg py-2 z-50">
          <Link
            to="/dashboard"
            className="flex items-center px-4 py-2 text-zion-slate-light hover:bg-zion-blue hover:text-white transition-colors"
            onClick={() => setIsOpen(false)}
=======
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 transition-colors"
      >
        <Avatar className="w-8 h-8">
          <AvatarImage src="/default-avatar.png" alt={user?.name || 'User'} />
          <AvatarFallback>
            <User className="w-4 h-4" />
          </AvatarFallback>
        </Avatar>
        <span className="text-sm font-medium">{user?.name || 'User'}</span>
        <ChevronDown className="w-4 h-4" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
          <div className="px-4 py-2 text-sm text-gray-700 border-b border-gray-200">
            <div className="font-medium">{user?.name || 'User'}</div>
            <div className="text-gray-500">{user?.email}</div>
          </div>
          
          <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2">
            <User className="w-4 h-4" />
            <span>Profile</span>
          </button>
          
          <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2">
            <Settings className="w-4 h-4" />
            <span>Settings</span>
          </button>
          
          <button
            onClick={handleSignOut}
            className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2"
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2857
          >
            <Settings className="w-4 h-4 mr-3" />
            Dashboard
          </Link>
          <button
            onClick={handleLogout}
            className="flex items-center w-full px-4 py-2 text-zion-slate-light hover:bg-zion-blue hover:text-white transition-colors"
          >
            <LogOut className="w-4 h-4 mr-3" />
            Sign Out
          </button>
        </div>
      )}
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
    </div>
  );
}