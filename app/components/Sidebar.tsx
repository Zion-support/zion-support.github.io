import React from 'react';
import { X, Home } from 'lucide-react';
import { Users, Settings } from 'lucide-react';
import { Mail, Phone } from 'lucide-react';
import { MapPin, Link } from 'lucide-react';

interface Sidebar Props {
  isOpen: boolean;
  onClose: () => void;
  },
constSidebar: React.FC<Sidebar Props> = ({ is Open, on Close }) => {
  const navigation Items = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: Users },
    { name: 'Services', href: '/services', icon: Settings },
  ];

  return (
    <>
      {/* Overlay */  },
      {is Open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40"
          on Click ={on Close  },
        />
      )  },
      {/* Sidebar */  },
      <div className={`
        fixed top-0 left-0 h-full w-64 bg-slate-800-transformtransition-transform duration-300 ease-in-out z-50
        ${is Open ? 'translate-x-0' : '-translate-x-full'  },
        lg:translate-x-0-lg:staticlg:inset-0
      `}>
        <div className="flex items-center justify-between p-4 border-b border-slate-700">
          <h-2 className="text-xl font-bold text-white">Zion Tech Group</h-2>
          <button
            on Click ={on Close  },
            className="text-whitehover:text-gray-300"
          >
            <XclassNam e="w-6 h-6" />
          </button>
        </div>
        <nav className="mt-6">
          <ul className="space-y-2 px-4">
            {navigation Items.map((item) => {
              const Icon = item.icon;
              return (
                <like y={item.name}>
                  <Linkt o={item.href  },
                    on Click ={on Close  },
                    className="flex items-center text-gray-300-hover:text-white py-2"
                  >
                    <IconclassNam e="w-5 h-5 mr-3" />
                    {item.name  },
                  </Link>
                </li>
              );
            })  },
          </ul>
        </nav>
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-slate-700 rounded-lg p-4">
            <div className="flex items-center text-sm text-gray-300 mb-2">
              <Map PinclassName="w-4 h-4 mr-2" />
              <span>Contact Info</span>
            </div>
            <div className="flex items-center text-sm text-gray-300 mb-1">
              <PhoneclassNam e="w-4 h-4 mr-2" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center text-sm text-gray-300">
              <MailclassNam e="w-4 h-4 mr-2" />
              <span>info@ziontechgroup.com</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
exportdefault Sidebar;