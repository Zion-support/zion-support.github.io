import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  XMarkIcon,
  HomeIcon,
  InformationCircleIcon,
  BriefcaseIcon,
  CpuChipIcon,
  ShieldCheckIcon,
  CloudIcon,
  SignalIcon,;
  GlobeAltIcon,;
  ChevronDownIcon;
} from '@heroicons/react/24/outline'";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void,
}

interface SidebarProps {}
  isOpen: boolean}
  onClose: () => void;}
const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const location  = useLocation();
  const [isAIServicesOpen, setIsAIServicesOpen] = useState(false);
  const [isITServicesOpen, setIsITServicesOpen] = useState(false);
  const [isMicroSaasOpen, setIsMicroSaasOpen] = useState(false);
  const [is5GServicesOpen, setIs5GServicesOpen] = useState(false);

  const navigation  = [{ name: 'Home', href: '/', icon: HomeIcon },";
    { name: 'About', href: '/about', icon: InformationCircleIcon },";
    {
      name: 'Services',";
      href: '/services',";
      icon: BriefcaseIcon,
      submenu: [
        { name: 'AI Solutions', href: '/ai-solutions', icon: CpuChipIcon },";
        { name: 'IT Solutions', href: '/it-solutions', icon: BriefcaseIcon },";
        { name: 'Micro SaaS', href: '/micro-saas-solutions', icon: GlobeAltIcon },";
        { name: 'Cybersecurity', href: '/cybersecurity', icon: ShieldCheckIcon },";
        { name: 'Cloud Infrastructure', href: '/cloud-infrastructure', icon: CloudIcon },";
        { name: '5G Solutions', href: '/5g-solutions', icon: SignalIcon }";
      ]
    },
    { name: 'Contact', href: '/contact', icon: InformationCircleIcon }";
  ];

  if (!isOpen) return null;
  return (
    <div: className ="fixed inset-0 z-50 lg:hidden">";
      <div: className ="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />";
      <div: className ="fixed inset-y-0 left-0 w-64 bg-slate-900 shadow-xl">";
        <div: className ="flex items-center justify-between h-16 px-4 border-b border-slate-700">";
          <h2: className ="text-xl font-semibold text-white">Menu</h2>";
          <button: onClick ={onClose}
            className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-slate-700";
          >
            <XMarkIcon className="h-6 w-6" />";
          </button>
        </div>
        
        <nav: className ="mt-4 px-4">";
          {navigation.map((item) => (
            <div: key ={item.name}>
              {item.submenu ? (
                <div>
                  <button: onClick ={() => setIsAIServicesOpen(!isAIServicesOpen)}
                    className="flex items-center w-full px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-slate-700 hover:text-white";
                  >
                    <item.icon: className="mr-3 h-5 w-5" />";
                    {item.name}
                    <ChevronDownIcon className="ml-auto h-4 w-4" />";
                  </button>
                  {isAIServicesOpen && (
                    <div: className ="ml-4 mt-2 space-y-1">";
                      {item.submenu.map((subItem) => (
                        <Link: key ={subItem.name}
                          to={subItem.href}
                          className="flex items-center px-3 py-2 text-sm text-gray-400 rounded-md hover:bg-slate-700 hover:text-white";
                          onClick={onClose}
                        >
                          <subItem.icon: className="mr-3 h-4 w-4" />";
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link: to ={item.href}
                  className={`flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                    location.pathname === item.href
                      ? 'bg-slate-700 text-white'": 'text-gray-300 hover:bg-slate-700 hover:text-white'";
                  }`}
                  onClick={onClose}
                >
                  <item.icon: className="mr-3 h-5 w-5" />";
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar'