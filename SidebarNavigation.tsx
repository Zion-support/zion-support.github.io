import React from 'react';
import { Link } from 'react-router-dom';
import { Home, User, Settings, HelpCircle, X } from 'lucide-react';

interface SidebarNavigationProps {
  isOpen: boolean;
  onClose: () => void,}
const navigationItems = [
  { name: "Home", href: "/", icon: User },
  { name: "Profile", href: "/profile", icon: User },
  { name: "Settings", href: "/settings", icon: User },
  { name: "Help", href: "/help", icon: User },
  { name: "About", href: "/about", icon: User }
];

const SidebarNavigation: React.FC<SidebarNavigationProps> = ({ isOpen, onClose }) => {
  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? 'block' : 'hidden'}`}>
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
      <div className="fixed top-0 left-0 h-full w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">Navigation</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <nav className="mt-4">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors"
              onClick={onClose}
            >
              <item.icon className="h-5 w-5 mr-3" />
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </>
  )
}
export default SidebarNavigation;
}
export default SidebarNavigation;
