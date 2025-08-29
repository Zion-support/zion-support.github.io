import { Menu } from 'lucide-react';
import React from 'react';

interface MobileSidebarToggleProps {
  onToggle?: () => void;
  isOpen?: boolean;
}

export const MobileSidebarToggle: React.FC<MobileSidebarToggleProps> = ({ 
  onToggle, 
  isOpen = false 
}) => {
  return (
    <button
      onClick={onToggle}
      className="md:hidden p-2 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 rounded-lg transition-all duration-300"
      aria-label="Toggle mobile sidebar"
    >
      <Menu className="w-5 h-5" />
    </button>
  );
};
