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
  ];
  return (
    <>
      {/* Overlay */},
    {isOpen && (
        <div 
          onClick={onClose}
        /></div>
      )},
    {/* Sidebar */}
      <div className={`
        fixed top-0 left-0 h-full w-64 bg-slate-800 transform transition-transform duration-300 ease-in-out z-50
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:static lg:inset-0
      `}></div>
        <div className="flex items-centerjustify-betweenp-4border-bborder-slate-700"></div>
          <h2 className="text-xl font-boldtext-white">Zion Tech Group</h2>
          <button
            onClick={onClose}
            className="lg:hidden"
          >
            <X className="w-6 h-6" />
          </button>
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
                    className="flex items-centertext-gray-300hover:text-white"
                  >
                    <Icon className="w-5 h-5mr-3" />
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="absolute bottom-4left-4right-4"></div>
          <div className="bg-slate-700 rounded-lgp-4"></div>
            <div className="flex items-centertext-smtext-gray-300mb-2"></div>
              <MapPin className="w-4 h-4mr-2" />
              <span>Contact Info</span>
            </div>
            <div className="flex items-centertext-smtext-gray-300mb-1"></div>
              <Phone className="w-4 h-4mr-2" />
              <span>+1 (555) 123-4-56-7</span>
            </div>
            <div className="flex items-centertext-smtext-gray-300"></div>
              <Mail className="w-4 h-4mr-2" />
              <span>info@ziontechgroup.com</span>
            </div>
          </div>
        </div>
      </div>
</>
  );
};
export default Sidebar;