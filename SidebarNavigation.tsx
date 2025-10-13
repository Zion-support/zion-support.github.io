
import React from 'react';
import { Home, User, Settings, HelpCircle } from 'lucide-react';

interface SidebarNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

const SidebarNavigation: React.FC<SidebarNavigationProps> = ({ isOpen, onClose }) => {
  const navigationItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: User },
    { name: 'Services', href: '/services', icon: Settings },
    { name: 'Contact', href: '/contact', icon: HelpCircle }
  ];

  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? 'block' : 'hidden'}`}>
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
      <nav className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg">
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-4">Navigation</h2>
          <ul className="space-y-2">
            {navigationItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="flex items-center space-x-2 px-3 py-2 rounded hover:bg-gray-100"
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default SidebarNavigation;