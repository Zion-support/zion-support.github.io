import React from 'react';
import { User, LogOut } from 'lucide-react';

interface UserMenuProps {
  user?: {
    id: string;
    email: string;
    name: string;
  };
}

export const UserMenu: React.FC<UserMenuProps> = ({ user }) => {
  if (!user) {
    return (
      <div className="flex items-center gap-2">
        <button className="px-4 py-2 text-white hover:text-zion-cyan transition-colors">
          Login
        </button>
        <button className="px-4 py-2 bg-zion-purple text-white rounded-md hover:bg-zion-purple/80 transition-colors">
          Sign Up
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-2 px-3 py-2 text-white">
        <User className="w-4 h-4" />
        <span className="hidden sm:inline">{user.name}</span>
      </div>
      <button className="p-2 text-white hover:text-zion-cyan transition-colors">
        <LogOut className="w-4 h-4" />
      </button>
    </div>
  );
};