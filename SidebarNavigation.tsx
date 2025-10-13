<<<<<<< HEAD

  onClose: () => void}

const SidebarNavigation: React.FC<SidebarNavigationProps> = ({ isOpen, onClose }) => {;

const navigationItems = [;;

    { name: 'Home', href: '/, icon: Home },
    { name: 'About', href: '/about, icon: User },
    { name: 'Services', href: '/services, icon: Settings },
    { name: 'Contact', href: /contact, icon: HelpCircle }];

=======
import { X, Home, User, Settings, HelpCircle } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
interface SidebarNavigationProps {
}
  isOpen: boolean;
  onClose: () => void;
<<<<<<< HEAD
}
const SidebarNavigation: React.FC<SidebarNavigationProps> = ({ isOpen, onClose }) => {
  const navigationItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: User },
    { name: 'Services', href: '/services', icon: Settings },
    { name: 'Contact', href: '/contact', icon: HelpCircle },
  ];
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
  return (

        <nav className="mt-8>
          {navigationItems.map((item) => (

            <Link
              key={item.name}

<<<<<<< HEAD
              to={item.href}

              className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-slate-800 transition-colors
              onClick={onClose}              className="p-2 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100
            >
              <X className="w-5 h-5 />
            </button>
          </div>
          <nav className="flex-1 px-4 py-6 space-y-2>
            {navigationItems.map((item) => {
              const Icon = item.icon;;

              return (

                <Link
                  key={item.name}

                  to={item.href}

                  className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-100 hover:text-gray-900
                  onClick={onClose}

                >
                  <Icon className="w-5 h-5 mr-3 />
                  {item.name}

                </Link>
              );

            })}

          </nav>
        </div>
=======
=======
};
const SidebarNavigation: React.FC<SidebarNavigationProps> = ({ isOpen, onClose }) => {
  const navigationItems = [
];
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: User },
    { name: 'Services', href: '/services', icon: Settings },
    { name: 'Contact', href: '/contact', icon: HelpCircle };
  ];
  return (
    <div className={`fixed inset-0 z-50 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />
      <div className="relative flex w-64 h-full bg-white shadow-xl">
        <div className="flex flex-col w-full">
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-lg font-semibold text-gray-800">Navigation</h2>
            <button onClick={onClose};
              className="p-2 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100">
              <X className="w-5 h-5" />
            </button>
          </div>
          <nav className="flex-1 px-4 py-6 space-y-2">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link key={item.name};
                  to={item.href};
                  className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-100 hover:text-gray-900"
                  onClick={onClose};>
                  <Icon className="w-5 h-5 mr-3" />
                  {item.name};
                </Link>
              );
            })};
          </nav>
        </div>
      </div>
    </div>
  );
};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
export default SidebarNavigation;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
