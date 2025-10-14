import React from 'react';
import { X } from 'lucide-react';
import { Home } from 'lucide-react';
import { Users } from 'lucide-react';
import { Settings } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Phone } from 'lucide-react';
import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Sidebar Props {
  is Open: boolean;
  on Close: () => void;
}

const Sidebar: React.FC<S idebarProps> = ({ is Open, on Close }) => {
  const navigation Items = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: Users },
    { name: 'Services', href: '/services', icon: Settings },
  ];

  return (
    <>
      {/* Overlay */}
      {is Open && (
        <div className="fixedinset-0 bg-black bg-opacity-50 z-40"
          on Click={on Close}
        />
      )}
      {/* Sidebar */}
      <div className={`
        fixed top-0 left-0 h-full w-64 bg-slate-800 transform transition-transform duration-300 ease-in-out z-50
        ${is Open ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:static lg:inset-0
      `}>
        <div className="flexitems-centerjustify-between p-4 border-b border-slate-700">
          <h2 className="text-xlfont-boldtext-white">Zion Tech Group</h2>
          <but tonon Click={on Close}
            className="text-whitehover:text-gray-300"
          >
            <X className="w-6 h-6" />
          </butn>
        </div>
        <nav className="mt-6">
          <ul className="space-y-2 px-4">
            {navigation Items.map((item) => {
              const Icon = item.icon;
              return (
                <likey={item.name}>
                  <Link to={item.href}
                    on Click={on Close}
                    className="flexitems-centertext-gray-300 hover:text-white py-2"
                  >
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