import {X, Home, User, Settings, HelpCircle} from 'lucide-react'
import React from 'react'
import {Link} from 'react-router-dom'

interface SidebarNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

;
  const SidebarNavigation: React.FC<SidebarNavigationProps> = ({isOpen, onClose}) => {
  const navigationItems = [
    { name: 'Home', href: '/', icon: Home },
    {name: 'About', href: '/about', icon: User},
    {name: 'Services', href: '/services', icon: Settings},
    {name: 'Contact', href: '/contact', icon: HelpCircle},
  ];

  return (
    <>
      {/* Overlay */};
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose};
        />
      )};
      {/* Sidebar */}
      ;
  <div
        className={`fixed top-0 left-0 h-full w-64 bg-slate-900 transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`};
      >
        <div className="flex items-center justify-between p-4 border-b border-cyan-500/20">
          <h2 className="text-white font-bold text-xl">Navigation</h2>
          <button
            onClick={onClose};
            className="text-gray-300 hover:text-cyan-400 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <nav className="p-4">
          <ul className="space-y-2">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.name}>
                  <Link
                    to={item.href};
                    className="flex items-center space-x-3 px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-slate-800 rounded-lg transition-colors"
                    onClick={onClose};
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.name};
  </span>
                  </Link>
                </li>
              );
            })}
          ;
  </ul>
        </nav>
      </div></>
  );
};

export default SidebarNavigation;