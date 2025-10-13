import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Bars3Icon,
  XMarkIcon,
  HomeIcon,
  InformationCircleIcon,
  BriefcaseIcon,
  CogIcon,
  CurrencyDollarIcon,
  DocumentTextIcon,
  AcademicCapIcon,
  PlayIcon,
  QuestionMarkCircleIcon,
  PhoneIcon,
  CpuChipIcon,
  ShieldCheckIcon,
  CloudIcon,
  GlobeAltIcon,
  SignalIcon
} from '@heroicons/react/24/outline';

interface NavigationProps {
  onSidebarToggle: () => void;
}

export default function Navigation({ onSidebarToggle }: NavigationProps) {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/', icon: HomeIcon },
    { name: 'About', href: '/about', icon: InformationCircleIcon },
    { 
      name: 'Services', 
      href: '/services', 
      icon: BriefcaseIcon,
      submenu: [
        { name: 'AI Solutions', href: '/ai-solutions' },
        { name: 'IT Solutions', href: '/it-solutions' },
        { name: 'Micro SaaS Solutions', href: '/micro-saas-solutions' },
        { name: 'Cybersecurity', href: '/cybersecurity' },
        { name: 'Cloud Infrastructure', href: '/cloud-solutions' },
        { name: 'Digital Transformation', href: '/digital-transformation' },
        { name: '5G Solutions', href: '/5g-solutions' }
      ]
    },
    { 
      name: 'Solutions', 
      href: '/solutions', 
      icon: CogIcon,
      submenu: [
        { name: 'AI Services', href: '/ai-services' },
        { name: 'IT Services', href: '/it-services' },
        { name: 'Cloud Infrastructure', href: '/cloud-infrastructure' },
        { name: 'Case Studies', href: '/case-studies' }
      ]
    },
    { name: 'Pricing', href: '/pricing', icon: CurrencyDollarIcon },
    { name: 'Blog', href: '/blog', icon: DocumentTextIcon },
    { name: 'Tutorials', href: '/tutorials', icon: AcademicCapIcon },
    { name: 'Demo', href: '/demo', icon: PlayIcon },
    { name: 'Support', href: '/support', icon: QuestionMarkCircleIcon },
    { name: 'Contact', href: '/contact', icon: PhoneIcon }
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-slate-900/95 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">Z</span>
              </div>
              <span className="text-white font-bold text-xl">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    to={item.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                      isActive(item.href)
                        ? 'bg-purple-600 text-white'
                        : 'text-gray-300 hover:bg-slate-800 hover:text-white'
                    }`}
                    onMouseEnter={() => {
                      if (item.submenu) {
                        if (item.name === 'Services') setIsServicesOpen(true);
                        if (item.name === 'Solutions') setIsSolutionsOpen(true);
                      }
                    }}
                    onMouseLeave={() => {
                      if (item.submenu) {
                        if (item.name === 'Services') setIsServicesOpen(false);
                        if (item.name === 'Solutions') setIsSolutionsOpen(false);
                      }
                    }}
                  >
                    {item.name}
                  </Link>
                  
                  {/* Dropdown Menu */}
                  {item.submenu && (
                    <div className={`absolute top-full left-0 mt-1 w-64 bg-slate-800 rounded-md shadow-lg py-1 z-50 ${
                      (item.name === 'Services' && isServicesOpen) || 
                      (item.name === 'Solutions' && isSolutionsOpen) 
                        ? 'opacity-100 visible' 
                        : 'opacity-0 invisible'
                    } transition-all duration-200`}>
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-300 hover:bg-slate-700 hover:text-white transition-colors duration-200"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={onSidebarToggle}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="block h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}