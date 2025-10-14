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
  GlobeAltIcon,
  CloudIcon,
  CpuChipIcon,
  SignalIcon,
  UserGroupIcon,
  SparklesIcon,
  BoltIcon,
  RocketLaunchIcon,
  EyeIcon
} from '@heroicons/react/24/outline';

interface NavigationProps {
  onSidebarToggle?: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onSidebarToggle }) => {
  const [isOpen, setIsOpen] = useState(false);
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
        { name: 'AI Services', href: '/ai-services', icon: CpuChipIcon, description: 'Advanced AI solutions' },
        { name: 'IT Services', href: '/it-services', icon: CogIcon, description: 'Comprehensive IT support' },
        { name: 'Cloud Infrastructure', href: '/cloud-infrastructure', icon: CloudIcon, description: 'Scalable cloud solutions' },
        { name: 'Cybersecurity', href: '/cybersecurity', icon: ShieldCheckIcon, description: 'Enterprise security' },
        { name: 'Digital Transformation', href: '/digital-transformation', icon: RocketLaunchIcon, description: 'Business modernization' }
      ]
    },
    { 
      name: 'Solutions', 
      href: '/solutions', 
      icon: CogIcon,
      submenu: [
        { name: 'AI Solutions', href: '/ai-solutions', icon: CpuChipIcon, description: 'AI-powered tools' },
        { name: 'Micro SaaS Solutions', href: '/micro-saas-solutions', icon: GlobeAltIcon, description: 'Specialized SaaS tools' },
        { name: 'IT Solutions', href: '/it-solutions', icon: CogIcon, description: 'Complete IT solutions' },
        { name: 'Cloud Solutions', href: '/cloud-solutions', icon: CloudIcon, description: 'Cloud-based services' },
        { name: '5G Solutions', href: '/5g-solutions', icon: SignalIcon, description: 'Next-gen connectivity' }
      ]
    },
    { name: 'Pricing', href: '/pricing', icon: CurrencyDollarIcon },
    { name: 'Blog', href: '/blog', icon: DocumentTextIcon },
    { name: 'Tutorials', href: '/tutorials', icon: AcademicCapIcon },
    { name: 'Demo', href: '/demo', icon: PlayIcon },
    { name: 'Support', href: '/support', icon: QuestionMarkCircleIcon },
    { name: 'Contact', href: '/contact', icon: PhoneIcon }
  ];

  const isActive = (href: string) => {
    return location.pathname === href;
  };

  return (
    <nav className="bg-slate-900/95 backdrop-blur-sm shadow-2xl border-b border-purple-500/20 relative">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 via-cyan-600/5 to-purple-600/5"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="group flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-xl">Z</span>
                </div>
                <div className="hidden sm:block">
                  <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    Zion Tech Group
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:ml-8 lg:flex lg:space-x-1">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.submenu ? (
                    <div className="relative group">
                      <button
                        className="text-gray-300 hover:text-white px-4 py-2 text-sm font-medium flex items-center rounded-lg hover:bg-slate-800/50 transition-all duration-300"
                        onMouseEnter={() => setIsServicesOpen(true)}
                        onMouseLeave={() => setIsServicesOpen(false)}
                      >
                        <item.icon className="w-5 h-5 mr-2" />
                        {item.name}
                        <ChevronDownIcon className="ml-1 h-4 w-4 group-hover:rotate-180 transition-transform duration-300" />
                      </button>
                      {isServicesOpen && (
                        <div 
                          className="absolute left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-sm rounded-2xl shadow-2xl py-4 z-50 border border-purple-500/20"
                          onMouseEnter={() => setIsServicesOpen(true)}
                          onMouseLeave={() => setIsServicesOpen(false)}
                        >
                          <div className="px-4 py-2 border-b border-slate-700/50 mb-2">
                            <h3 className="text-lg font-semibold text-white">{item.name}</h3>
                            <p className="text-sm text-gray-400">Explore our comprehensive solutions</p>
                          </div>
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="group flex items-center px-4 py-3 text-sm text-gray-300 hover:bg-slate-700/50 hover:text-white transition-all duration-300"
                            >
                              <div className="w-10 h-10 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                                <subItem.icon className="w-5 h-5 text-purple-400" />
                              </div>
                              <div>
                                <div className="font-medium">{subItem.name}</div>
                                <div className="text-xs text-gray-400">{subItem.description}</div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`${
                        isActive(item.href)
                          ? 'text-cyan-400 bg-slate-800/50 border border-purple-500/30'
                          : 'text-gray-300 hover:text-white hover:bg-slate-800/50'
                      } px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 flex items-center`}
                    >
                      <item.icon className="w-5 h-5 mr-2" />
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            <Link
              to="/demo"
              className="group flex items-center px-4 py-2 text-sm font-medium text-purple-300 hover:text-white border border-purple-500/30 rounded-lg hover:bg-purple-500/10 transition-all duration-300"
            >
              <EyeIcon className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
              Demo
            </Link>
            <Link
              to="/contact"
              className="group bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-2 rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center font-semibold shadow-lg hover:shadow-purple-500/25"
            >
              <RocketLaunchIcon className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white p-2 rounded-lg hover:bg-slate-800/50 transition-all duration-300"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800/95 backdrop-blur-sm rounded-2xl mt-2 border border-purple-500/20">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.submenu ? (
                    <div>
                      <button
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        className="text-gray-300 hover:text-white block px-3 py-3 text-base font-medium w-full text-left rounded-lg hover:bg-slate-700/50 transition-all duration-300 flex items-center"
                      >
                        <item.icon className="w-5 h-5 mr-3" />
                        {item.name}
                        <ChevronDownIcon className={`ml-auto h-4 w-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isServicesOpen && (
                        <div className="pl-8 space-y-1 bg-slate-700/30 rounded-lg p-2 mt-2">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="text-gray-400 hover:text-white block px-3 py-2 text-sm rounded-lg hover:bg-slate-600/50 transition-all duration-300 flex items-center"
                              onClick={() => setIsOpen(false)}
                            >
                              <subItem.icon className="w-4 h-4 mr-3" />
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`${
                        isActive(item.href)
                          ? 'text-cyan-400 bg-slate-700/50'
                          : 'text-gray-300 hover:text-white hover:bg-slate-700/50'
                      } block px-3 py-3 text-base font-medium rounded-lg transition-all duration-300 flex items-center`}
                      onClick={() => setIsOpen(false)}
                    >
                      <item.icon className="w-5 h-5 mr-3" />
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              
              {/* Mobile CTA Buttons */}
              <div className="pt-4 border-t border-slate-700/50 mt-4">
                <div className="space-y-2">
                  <Link
                    to="/demo"
                    className="group flex items-center justify-center w-full px-4 py-3 text-sm font-medium text-purple-300 hover:text-white border border-purple-500/30 rounded-lg hover:bg-purple-500/10 transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    <EyeIcon className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    View Demo
                  </Link>
                  <Link
                    to="/contact"
                    className="group flex items-center justify-center w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-4 py-3 rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 font-semibold"
                    onClick={() => setIsOpen(false)}
                  >
                    <RocketLaunchIcon className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                    Get Started
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