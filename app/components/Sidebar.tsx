import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  HomeIcon, 
  UserGroupIcon, 
  CogIcon, 
  DocumentTextIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  CloudIcon,
  CpuChipIcon,
  XMarkIcon,
  Bars3Icon
} from '@heroicons/react/24/outline';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/', icon: HomeIcon },
    { name: 'AI Services', href: '/ai-services', icon: CpuChipIcon },
    { name: 'IT Services', href: '/it-services', icon: CloudIcon },
    { name: 'Analytics', href: '/analytics', icon: ChartBarIcon },
    { name: 'Security', href: '/security', icon: ShieldCheckIcon },
    { name: 'About', href: '/about', icon: UserGroupIcon },
    { name: 'Contact', href: '/contact', icon: DocumentTextIcon },
  ];

  const additionalLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Our Team", href: "/team" },
    { name: "Documentation", href: "/docs" },
    { name: "Careers", href: "/careers" }
  ];

  return (
    <>
      {/* Mobile menu button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-slate-800 text-white p-2 rounded-md hover:bg-slate-700 transition-colors"
        >
          {isOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-40 w-64 bg-slate-900 transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 transition-transform duration-300 ease-in-out lg:static lg:inset-0`}>
        
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-center h-16 px-4 bg-slate-800">
            <h1 className="text-xl font-bold text-white">Zion Tech Group</h1>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive
                      ? 'bg-cyan-600 text-white'
                      : 'text-gray-300 hover:bg-slate-700 hover:text-white'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="mr-3 h-5 w-5" />
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Additional Links */}
          <div className="px-4 py-4 border-t border-slate-700">
            <div className="space-y-2">
              {additionalLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-slate-700 rounded-md transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
