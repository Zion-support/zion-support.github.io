import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Bars3Icon, 
  XMarkIcon,
  HomeIcon,
  InformationCircleIcon,
  BriefcaseIcon,
  PhoneIcon,
  DocumentTextIcon,
  AcademicCapIcon,
  PlayIcon,
  QuestionMarkCircleIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  CogIcon,
  ChevronDownIcon,
  CpuChipIcon,
  CloudIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navigation = [
    { name: 'Home', href: '/', icon: HomeIcon },
    { name: 'About', href: '/about', icon: InformationCircleIcon },
    { 
      name: 'AI Services', 
      href: '/ai-services', 
      icon: CpuChipIcon,
      submenu: [
        { name: 'AI Chatbot Builder', href: '/ai-chatbot-builder' },
        { name: 'AI Content Generator', href: '/ai-content-generator' },
        { name: 'AI Analytics Dashboard', href: '/ai-analytics-dashboard' },
        { name: 'AI Automation', href: '/ai-automation' },
        { name: 'AI Cybersecurity', href: '/ai-cybersecurity' },
        { name: 'AI Data Analytics', href: '/ai-data-analytics' }
      ]
    },
    { 
      name: 'IT Services', 
      href: '/it-services', 
      icon: BriefcaseIcon,
      submenu: [
        { name: 'Cloud Infrastructure', href: '/cloud-infrastructure' },
        { name: 'Cybersecurity', href: '/cybersecurity' },
        { name: 'Digital Transformation', href: '/digital-transformation' },
        { name: '5G Solutions', href: '/5g-solutions' },
        { name: 'Micro SaaS', href: '/micro-saas' }
      ]
    },
    { name: 'Solutions', href: '/solutions', icon: CogIcon },
    { name: 'Pricing', href: '/pricing', icon: CurrencyDollarIcon },
    { name: 'Blog', href: '/blog', icon: DocumentTextIcon },
    { name: 'Tutorials', href: '/tutorials', icon: AcademicCapIcon },
    { name: 'Demo', href: '/demo', icon: PlayIcon },
    { name: 'Support', href: '/support', icon: QuestionMarkCircleIcon },
    { name: 'Contact', href: '/contact', icon: PhoneIcon }
  ];

  return (
    <nav className="bg-slate-900/95 backdrop-blur-sm border-b border-slate-700/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center neon-pulse">
              <span className="text-white font-bold text-lg">Z</span>
            </div>
            <span className="text-white font-bold text-xl text-gradient">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.name} className="relative group">
                  <Link
                    to={item.href}
                    className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                      isActive(item.href)
                        ? 'bg-purple-600 text-white neon-glow'
                        : 'text-gray-300 hover:text-white hover:bg-slate-800 hover:neon-pulse'
                    }`}
                    onMouseEnter={() => item.submenu && setIsServicesOpen(true)}
                    onMouseLeave={() => item.submenu && setIsServicesOpen(false)}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.name}</span>
                    {item.submenu && <ChevronDownIcon className="w-4 h-4 ml-1" />}
                  </Link>
                  
                  {/* Dropdown Menu */}
                  {item.submenu && isServicesOpen && (
                    <div className="absolute left-0 mt-2 w-64 bg-slate-800/95 backdrop-blur-sm rounded-lg shadow-lg py-2 z-50 border border-purple-500/20">
                      {item.submenu.map((subItem) => (
                        <Link key={subItem.name}
                          to={subItem.href}
                          className="block px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-slate-700/50 transition-all duration-300 hover:translate-x-2"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/contact"
              className="btn-futuristic"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2 transition-colors"
            >
              {isOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800/95 backdrop-blur-sm rounded-lg mt-2 border border-purple-500/20">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.name}>
                    <Link
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center space-x-3 px-3 py-3 rounded-md text-base font-medium transition-all duration-300 ${
                        isActive(item.href)
                          ? 'bg-purple-600 text-white neon-glow'
                          : 'text-gray-300 hover:text-white hover:bg-slate-700/50 hover:translate-x-2'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{item.name}</span>
                    </Link>
                    {item.submenu && (
                      <div className="ml-8 space-y-1">
                        {item.submenu.map((subItem) => (
                          <Link key={subItem.name}
                            to={subItem.href}
                            className="text-gray-400 hover:text-white block px-3 py-2 rounded-md text-sm transition-all duration-300 hover:translate-x-2"
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
              <div className="pt-4 border-t border-slate-700">
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="btn-futuristic w-full text-center"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;