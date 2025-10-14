import React from 'react';
import { X  } from 'lucide-react';
import { Mail  } from 'lucide-react';
import { Phone  } from 'lucide-react';
import { MapPin  } from 'lucide-react';
import { Link  } from 'react-router-dom';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

constSidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const navigationItems: Array<{ name: string; href: string; icon: React.ComponentType<{ className?: string }> }> =[
  ];
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div className="fixedinset-0 bg-black bg-opacity-50 z-40"
          onClic k ={onClose}
        />
      )}
      {/* Sidebar */}
      <div className ={`
        fixed top-0 left-0 h-full w-64 bg-slate-800 transform transition-transform duration-300 ease-in-out z-50
        ${isOpen ? 'translate-x-0' :'-translate-x-full'}
        lg:translate-x-0 lg: static,
  lg:inset-0
      `}>
        <div className="flex items-center justify-between p-4 border-b border-slate-700">
          <h2 className="text-xl font-bold text-white">Zion Tech Group</h2>
          <buttonton onClick ={onClose}
            classNam e ="text-gray-300 hover:text-white">
            <X className="w-6 h-6" />
          </butn>
        </div>
        <nav className="mt-6">
          <ul className="space-y-2 px-4">
            {navigationItems.map((item) => {
              constIco n = item.icon;
              return (
                <like y ={item.name}>
                  <Link to ={item.href}
                    onClic k ={onClose}
                    classNam e ="flexitems-centertext-gray-300 hover:text-white py-2">
                    <Icon className="w-5 h-5mr-3" />
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="absolutebottom-4 left-4 right-4">
          <div className="bg-slate-700 rounded-lgp-4">
            <div className="flexitems-centertext-sm text-gray-300 mb-2">
              <MapPin className="w-4 h-4mr-2" />
              <span>Contact Info</span>
            </div>
            <div className="flexitems-centertext-sm text-gray-300 mb-1">
              <Phone className="w-4 h-4mr-2" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flexitems-centertext-sm text-gray-300">
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