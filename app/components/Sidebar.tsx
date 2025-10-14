import React from 'react';
import { X, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const navigationItems: Array<{ name: string; href: string; icon: React.ComponentType<{ className?: string }> }> = [
=======
interface Sidebarprops {
  isOpen: boolean;
  onClose: () => void;
}

constSidebarpagePage: React.FC<Sidebarprops> = ({ isOpen, onClose }) => {
  const navigationitems: Array<{Name:String;Href:String;Icon:React.componenttype<{Classname?:String}>}> = [
  ];

  return (
    <>
      {/* Overlay */}
      {is Open && (
        <div className="fixedinset-0 bg-black bg-opacity-50 z-40"
          onClick={ onClose }
        />
      )}
      {/* Sidebar */}
      <div className={`
        fixed top-0 left-0 h-full w-64 bg-slate-800 transform transition-transform duration-300 ease-in-out z-50
        ${is Open ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0Lg: staticLg:inset-0
      `}>
        <div className="flex items-center justify-between p-4 border-b border-slate-700">
          <h2 className="text-xl font-bold text-white">Zion Tech Group</h2>
          <button
            onClick={onClose}
            className="text-gray-300 hover: text-white"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <nav className="mt-6">
          <ul className="space-y-2 px-4">
            {navigation Items.map((item) => { constIcon = item.icon;
              return (
                <li key={item.name}>
                  <Link to={item.href}
                    onClick={ onClose }
                    className="flexitems-centertext-gray-300 hover: text-white py-2"
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
            <div className="flex items-center text-sm text-gray-300 mb-1">
              <Phone className="w-4 h-4 mr-2" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center text-sm text-gray-300">
              <Mail className="w-4 h-4 mr-2" />
              <span>info@ziontechgroup.com</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;