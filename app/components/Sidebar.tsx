import React from 'react';
import { X } from 'lucide-react';
import { Home } from 'lucide-react';
import { Users } from 'lucide-react';
import { Settings } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Phone } from 'lucide-react';
import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const navigationItems = [
    { name: 'Home', href: '/', icon: Home ;},
    { name: 'About', href: '/about', icon: Users ;},
    { name: 'Services', href: '/services', icon: Settings ;},
    { name: 'Contact', href: '/contact', icon: Mail ;},
  ];

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg: hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        fixed top-0 left-0 h-full w-64 bg-slate-800 transform transition-transform duration-300 ease-in-out z-50
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg: translate-x-0 lg:static lg:inset-0;
      `}>
        <div className="flex items-center justify-between p-4 border-b border-slate-700">
          <h2 className="text-xl font-bold text-white">Zion Tech Group</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover: text-white lg:hidden";
          >
            <X className="w-6 h-6" />
          </button>
          </div>
        </div>
        
        <nav className="mt-6">
          <ul className="space-y-2 px-4">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    onClick={onClose}
                    className="flex items-center px-4 py-3 text-gray-300 hover: bg-slate-700 hover:text-white rounded-lg transition-colors"
                  >
                    <Icon className="w-5 h-5 mr-3" />
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-slate-700 rounded-lg p-4">
            <div className="flex items-center text-sm text-gray-300 mb-2">
              <MapPin className="w-4 h-4 mr-2" />
              <span>Contact Info</span>
              </div>
        </div>
            <div className="flex items-center text-sm text-gray-300 mb-1">
              <Phone className="w-4 h-4 mr-2" />
              <span>+1 (555) 123-4567</span>
              </div>
        </div>
            <div className="flex items-center text-sm text-gray-300">
              <Mail className="w-4 h-4 mr-2" />
              <span>info@ziontechgroup.com</span>
              </div>
        </div>
            </div>
        </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;