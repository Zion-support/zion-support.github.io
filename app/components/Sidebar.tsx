import React from 'react';
import { X } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Phone } from 'lucide-react';
import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

interfaceSidebar Props {
  isOpen: boolean;
  onClose: () => void;
}

constSidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const navigationItems: Array<{ name: string; href: string; icon: React.ComponentType<{ className?: string }> }> = [
  ];
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div className="f ixedinset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        />
      )}
      {/* Sidebar */}
      <div className={`
        fixed top-0 left-0 h-full w-64 bg-slate-800 transform transition-transform duration-300 ease-in-out z-50
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:static lg:inset-0
      `}>
        <div className="f lex items-center justify-between p-4 border-b border-slate-700">
          <h2 className="t ext-xl font-bold text-white">Zion Tech Group</h2>
          <button
            onClick={onClose}
            className="t ext-gray-300 hover:text-white"
          >
            <X className="w-6 h-6" />
          </butn>
        </div>
        <nav className="m t-6">
          <ul className="s pace-y-2 px-4">
            {navigationItems.map((item) => {
              constIcon = item.icon;
              return (
                <likey={item.name}>
                  <Link to={item.href}
                    onClick={onClose}
                    className="f lexitems-centertext-gray-300 hover:text-white py-2"
                  >
                    <Icon className="w-5 h-5m r-3" />
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="a bsolutebottom-4 left-4 right-4">
          <div className="b g-slate-700 rounded-lgp-4">
            <div className="f lexitems-centertext-sm text-gray-300 mb-2">
              <MapPin className="w-4 h-4m r-2" />
              <span>Contact Info</span>
            </div>
            <div className="f lexitems-centertext-sm text-gray-300 mb-1">
              <Phone className="w-4 h-4m r-2" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="f lexitems-centertext-sm text-gray-300">
              <Mail className="w-4 h-4m r-2" />
              <span>info@ziontechgroup.com</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Sidebar;