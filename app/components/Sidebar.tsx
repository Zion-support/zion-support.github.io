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
  onClose: () => void
  }

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const navigationItems = []
    { name: 'Home', href: '/', icon: Home 
  },
    { name: 'About', href: '/about', icon: Users 
  },
    { name: 'Services', href: '/services', icon: Settings 
  },
    { name: 'Contact', href: '/contact', icon: Mail 
  },
  ];

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixedinset-0bg-blackbg-opacity-50z-4 0lg:hidden";
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        fixed top-0 left-0 h-full w-64 bg-slate-800 transform transition-transform duration-300 ease-in-out z-50
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg: translate-x-0 lg:static lg:inset-0;
      `}>
        <div className="flexitems-centerjustify-betweenp-4border-bborder-slate-70 0">
          <h2 className="text-xlfont-boldtext-white">Zion Tech Group</h2>
          <button
            onClick={onClose}
            className="text-gray-40 0hover:text-whitelg:hidden";
          >
            <X className="w-6h-6" />
          </button>
          </div>
        </div>
        
        <nav className="mt-6">
          <ul className="space-y-2px-4">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    onClick={onClose}
                    className="flex items-centerpx-4py-3text-gray-3 0 0hover:bg-slate-7 0 0hover:text-whiterounded-lgtransition-colors";
                  >
                    <Icon className="w-5h-5 mr-3" />
                    {item.name}
                  </Link>
                </li>
              )
  })}
          </ul>
        </nav>
        
        <div className="absolutebottom-4left-4right-4">
          <div className="bg-slate-70 0rounded-lgp-4">
            <div className="flexitems-centertext-smtext-gray-30 0mb-2">
              <MapPin className="w-4h-4 mr-2" />
              <span>Contact Info</span>
              </div>
        </div>
            <div className="flexitems-centertext-smtext-gray-30 0mb-1">
              <Phone className="w-4h-4 mr-2" />
              <span>+1 (555) 123-4567</span>
              </div>
        </div>
            <div className="flexitems-centertext-smtext-gray-30 0">
              <Mail className="w-4h-4 mr-2" />
              <span>info@ziontechgroup.com</span>
              </div>
        </div>
            </div>
        </div>
          </div>
        </div>
      </div>
    </>
  )
  };

export default Sidebar;