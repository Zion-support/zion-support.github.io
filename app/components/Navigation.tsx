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
  ChevronDownIcon
} from '@heroicons/react/24/outline';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
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
        { name: 'Cybersecurity', href: '/cybersecurity' },
        { name: 'Cloud Infrastructure', href: '/cloud-solutions' },
        { name: 'Digital Transformation', href: '/digital-transformation' },
        { name: 'Micro SaaS', href: '/micro-saas-solutions' },
        { name: '5G Solutions', href: '/5g-solutions' }
      ]
    },
    { 
      name: 'Micro SaaS', 
      href: '/micro-saas-solutions', 
      icon: CogIcon,
      submenu: [
        { name: 'AI Blockchain Analytics', href: '/ai-blockchain-analytics' },
        { name: 'AI Climate Prediction', href: '/ai-climate-prediction-engine' },
        { name: 'AI Telepathic Interface', href: '/ai-telepathic-interface' },
        { name: 'AI Agricultural Intelligence', href: '/ai-agricultural-intelligence-pro' },
        { name: 'AI Analytics Dashboard', href: '/ai-analytics-dashboard' },
        { name: 'AI Content Management', href: '/ai-content-management' },
        { name: 'AI Customer Support Bot', href: '/ai-customer-support-bot' },
        { name: 'AI Project Management', href: '/ai-project-management' },
        { name: 'AI E-commerce Optimizer', href: '/ai-ecommerce-optimizer' },
        { name: 'AI HR Management', href: '/ai-hr-management' },
        { name: 'AI Financial Analytics', href: '/ai-financial-analytics' },
        { name: 'AI Marketing Automation', href: '/ai-marketing-automation' }
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
    <nav className="bg-slate-900/95 backdrop-blur-sm border-b border-slate-700/50 sticky top-0 z-50 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-cyan-900/10 to-pink-900/10"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/25">
              <span className="text-white font-bold text-lg">Z</span>
            </div>
            <span className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.href}
                  className="flex items-center space-x-1 text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-slate-800/50 hover:shadow-lg hover:shadow-purple-500/10 relative overflow-hidden"
                  onMouseEnter={() => item.submenu && setIsServicesOpen(true)}
                  onMouseLeave={() => item.submenu && setIsServicesOpen(false)}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <item.icon className="w-4 h-4 relative z-10 group-hover:scale-110 transition-transform duration-300" />
                  <span className="relative z-10">{item.name}</span>
                  {item.submenu && <ChevronDownIcon className="w-4 h-4 relative z-10 group-hover:rotate-180 transition-transform duration-300" />}
                </Link>
                
                {/* Dropdown Menu */}
                {item.submenu && isServicesOpen && (
                  <div className="absolute left-0 mt-2 w-64 bg-slate-800/95 backdrop-blur-sm rounded-xl shadow-2xl py-3 z-50 border border-slate-700/50 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-cyan-900/20"></div>
                    <div className="relative z-10">
                      {item.submenu.map((subItem, index) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="block px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-slate-700/50 transition-all duration-300 hover:translate-x-2 hover:shadow-lg hover:shadow-purple-500/10"
                          onClick={() => setIsServicesOpen(false)}
                          style={{ animationDelay: `${index * 50}ms` }}
                        >
                          <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <span>{subItem.name}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/contact"
              className="group bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              <span className="relative z-10">Get Started</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2 rounded-lg hover:bg-slate-800/50 transition-all duration-300 group"
            >
              <div className="relative">
                {isOpen ? (
                  <XMarkIcon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                ) : (
                  <Bars3Icon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/20 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800/95 backdrop-blur-sm rounded-xl mt-2 border border-slate-700/50 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-cyan-900/10"></div>
              <div className="relative z-10">
                {navigation.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.name} style={{ animationDelay: `${index * 100}ms` }}>
                      <Link
                        to={item.href}
                        className="flex items-center space-x-3 text-gray-300 hover:text-white block px-3 py-3 rounded-lg text-base font-medium transition-all duration-300 hover:bg-slate-700/50 hover:translate-x-2 group"
                        onClick={() => setIsOpen(false)}
                      >
                        <Icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                        <span>{item.name}</span>
                        {item.submenu && <ChevronDownIcon className="w-4 h-4 ml-auto group-hover:rotate-180 transition-transform duration-300" />}
                      </Link>
                      {item.submenu && (
                        <div className="ml-8 space-y-1 mt-2">
                          {item.submenu.map((subItem, subIndex) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="text-gray-400 hover:text-white block px-3 py-2 rounded-lg text-sm transition-all duration-300 hover:bg-slate-700/30 hover:translate-x-2 group"
                              onClick={() => setIsOpen(false)}
                              style={{ animationDelay: `${(index * 100) + (subIndex * 50)}ms` }}
                            >
                              <div className="flex items-center space-x-2">
                                <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <span>{subItem.name}</span>
                              </div>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
                <div className="pt-4 border-t border-slate-700/50 mt-4">
                  <Link
                    to="/contact"
                    className="group bg-gradient-to-r from-purple-600 to-cyan-600 text-white block px-4 py-3 rounded-lg text-base font-medium text-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 relative overflow-hidden"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                    <span className="relative z-10">Get Started</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;