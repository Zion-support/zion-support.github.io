import React from 'react';
import { Home, User, Settings, HelpCircle } from 'lucide-react';

interface SidebarNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

const SidebarNavigation: React.FC<SidebarNavigationProps> = ({ isOpen }) => {
  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? 'block' : 'hidden'}`}>
      <div className="bg-white shadow-lg p-4">
        <nav className="space-y-4">
          <a href="/" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
            <Home className="w-5 h-5" />
            <span>Home</span>
          </a>
          <a href="/about" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
            <User className="w-5 h-5" />
            <span>About</span>
          </a>
          <a href="/services" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
            <Settings className="w-5 h-5" />
            <span>Services</span>
          </a>
          <a href="/contact" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
            <HelpCircle className="w-5 h-5" />
            <span>Contact</span>
          </a>
        </nav>
      </div>
    </div>
  );
};
export default SidebarNavigation;