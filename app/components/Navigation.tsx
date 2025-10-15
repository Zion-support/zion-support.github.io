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
  UserGroupIcon
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
        { name: 'AI Solutions', href: '/ai-solutions', icon: CpuChipIcon },
        { name: 'Cybersecurity', href: '/cybersecurity', icon: ShieldCheckIcon },
        { name: 'Cloud Infrastructure', href: '/cloud-solutions', icon: CloudIcon },
        { name: 'Digital Transformation', href: '/digital-transformation', icon: CogIcon },
        { name: 'Micro SaaS', href: '/micro-saas', icon: GlobeAltIcon },
        { name: '5G Solutions', href: '/5g-solutions', icon: SignalIcon }
      ]
    },
    { 
      name: 'Solutions', 
      href: '/solutions', 
      icon: CogIcon,
      submenu: [
        { name: 'AI Solutions', href: '/ai-solutions', icon: CpuChipIcon },
        { name: 'IT Solutions', href: '/it-solutions', icon: CogIcon },
        { name: 'Micro SaaS Solutions', href: '/micro-saas-solutions', icon: GlobeAltIcon }
      ]
    },
    { name: 'Blog', href: '/blog', icon: DocumentTextIcon },
    { name: 'Tutorials', href: '/tutorials', icon: AcademicCapIcon },
    { name: 'Demo', href: '/demo', icon: PlayIcon },
    { name: 'Support', href: '/support', icon: QuestionMarkCircleIcon },
    { name: 'Pricing', href: '/pricing', icon: CurrencyDollarIcon },
    { name: 'Contact', href: '/contact', icon: PhoneIcon }
  ];

  const isActive = (href: string) => {
    return location.pathname === href;
  };

  const toggleServicesMenu = () => {
    setIsServicesOpen(!isServicesOpen);
    setIsSolutionsOpen(false);
  };

  const toggleSolutionsMenu = () => {
    setIsSolutionsOpen(!isSolutionsOpen);
    setIsServicesOpen(false);
  };

  return (
    <nav className="cyber-nav relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center group">
              <div className="h-10 w-10 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center cyber-glow group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-xl neon-pulse">Z</span>
              </div>
              <span className="ml-3 text-white font-bold text-xl cyber-text group-hover:neon-pulse transition-all duration-300">
                Zion Tech Group
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.href}
                  className="cyber-nav-item flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300"
                  onMouseEnter={() => item.submenu && setIsServicesOpen(true)}
                  onMouseLeave={() => item.submenu && setIsServicesOpen(false)}
                >
                  <item.icon className="w-4 h-4 group-hover:text-cyan-400 transition-colors duration-300" />
                  <span className="group-hover:text-cyan-400 transition-colors duration-300">{item.name}</span>
                  {item.submenu && <ChevronDownIcon className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />}
                </Link>
                
                {/* Dropdown Menu */}
                {item.submenu && isServicesOpen && (
                  <div className="absolute left-0 mt-2 w-64 cyber-card py-2 z-50 cyber-glow">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.href}
                        className="block px-4 py-3 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 group"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        <div className="flex items-center">
                          <subItem.icon className="w-4 h-4 mr-3 group-hover:text-cyan-400 transition-colors duration-300" />
                          <span className="group-hover:text-cyan-400 transition-colors duration-300">{subItem.name}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="cyber-button-secondary p-2 rounded-md transition-all duration-300 hover:scale-110"
            >
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" />
              ) : (
                <Bars3Icon className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'} cyber-scan`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 cyber-card border-t border-cyan-500/30">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.submenu ? (
                  <div>
                    <button
                      onClick={item.name === 'Services' ? toggleServicesMenu : toggleSolutionsMenu}
                      className={`cyber-nav-item flex items-center w-full px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                        isActive(item.href) || (item.submenu && item.submenu.some(sub => isActive(sub.href)))
                          ? 'text-cyan-400 bg-cyan-500/10'
                          : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10'
                      }`}
                    >
                      <item.icon className="w-5 h-5 mr-3" />
                      {item.name}
                      <ChevronDownIcon className={`w-4 h-4 ml-auto transition-transform duration-300 ${
                        (item.name === 'Services' ? isServicesOpen : isSolutionsOpen) ? 'rotate-180' : ''
                      }`} />
                    </button>
                    
                    {/* Mobile Submenu */}
                    <div className={`pl-6 ${(item.name === 'Services' ? isServicesOpen : isSolutionsOpen) ? 'block' : 'hidden'} cyber-data-flow`}>
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="cyber-nav-item flex items-center px-3 py-2 rounded-md text-sm transition-all duration-300 group"
                          onClick={() => {
                            setIsOpen(false);
                            setIsServicesOpen(false);
                            setIsSolutionsOpen(false);
                          }}
                        >
                          <subItem.icon className="w-4 h-4 mr-3 group-hover:text-cyan-400 transition-colors duration-300" />
                          <span className="group-hover:text-cyan-400 transition-colors duration-300">{subItem.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`cyber-nav-item flex items-center px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                      isActive(item.href)
                        ? 'text-cyan-400 bg-cyan-500/10'
                        : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon className="w-5 h-5 mr-3" />
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;