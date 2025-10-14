import React, { useState, useEffect } from 'react';
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
  RocketLaunchIcon,
  ChartBarIcon,
  EyeIcon,
  CodeBracketIcon,
  DatabaseIcon,
  ServerIcon,
  DevicePhoneMobileIcon,
  PresentationChartLineIcon,
  KeyIcon,
  BugAntIcon,
  MagnifyingGlassIcon,
  PaintBrushIcon,
  CubeIcon,
  BeakerIcon,
  CommandLineIcon,
  LockClosedIcon,
  WrenchScrewdriverIcon,
  LightBulbIcon,
  BoltIcon,
  HeartIcon,
  FireIcon,
  TrophyIcon,
  GiftIcon
} from '@heroicons/react/24/outline';

interface NavigationProps {
  onSidebarToggle?: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onSidebarToggle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/', icon: HomeIcon },
    { name: 'About', href: '/about', icon: InformationCircleIcon },
    { 
      name: 'Services', 
      href: '/services', 
      icon: BriefcaseIcon,
      submenu: [
        { name: 'AI Services', href: '/ai-services', icon: CpuChipIcon },
        { name: 'IT Services', href: '/it-services', icon: CogIcon },
        { name: 'Cloud Infrastructure', href: '/cloud-infrastructure', icon: CloudIcon },
        { name: 'Cybersecurity', href: '/cybersecurity', icon: ShieldCheckIcon },
        { name: 'Digital Transformation', href: '/digital-transformation', icon: RocketLaunchIcon },
        { name: 'Mobile Development', href: '/mobile-app-development', icon: DevicePhoneMobileIcon }
      ]
    },
    { 
      name: 'Solutions', 
      href: '/solutions', 
      icon: SparklesIcon,
      submenu: [
        { name: 'AI Solutions', href: '/ai-solutions', icon: CpuChipIcon },
        { name: 'Micro SaaS Solutions', href: '/micro-saas-solutions', icon: GlobeAltIcon },
        { name: '5G Solutions', href: '/5g-solutions', icon: SignalIcon },
        { name: 'Blockchain Solutions', href: '/ai-blockchain-solutions', icon: CubeIcon },
        { name: 'IoT Solutions', href: '/ai-iot-solutions', icon: CommandLineIcon },
        { name: 'Robotics Solutions', href: '/ai-robotics', icon: CogIcon }
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

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-slate-900/95 backdrop-blur-lg border-b border-white/10 shadow-2xl' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold text-lg">Z</span>
                </div>
                <span className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                  Zion Tech Group
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.submenu ? (
                    <div className="relative group">
                      <button
                        className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium flex items-center transition-all duration-300 hover:bg-white/10 rounded-lg"
                        onMouseEnter={() => setIsServicesOpen(true)}
                        onMouseLeave={() => setIsServicesOpen(false)}
                      >
                        <item.icon className="w-4 h-4 mr-2" />
                        {item.name}
                        <ChevronDownIcon className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
                      </button>
                      {isServicesOpen && (
                        <div 
                          className="absolute left-0 mt-2 w-64 bg-slate-800/95 backdrop-blur-lg rounded-xl shadow-2xl py-2 z-50 border border-white/10"
                          onMouseEnter={() => setIsServicesOpen(true)}
                          onMouseLeave={() => setIsServicesOpen(false)}
                        >
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="flex items-center px-4 py-3 text-sm text-gray-300 hover:bg-white/10 hover:text-white transition-all duration-300 group"
                            >
                              <subItem.icon className="w-4 h-4 mr-3 text-purple-400 group-hover:text-purple-300" />
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
                          ? 'text-white bg-white/10'
                          : 'text-gray-300 hover:text-white hover:bg-white/10'
                      } px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 flex items-center`}
                    >
                      <item.icon className="w-4 h-4 mr-2" />
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white transition-colors p-2 rounded-lg hover:bg-white/10"
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
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800/95 backdrop-blur-lg rounded-xl mt-2 border border-white/10">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.submenu ? (
                    <div>
                      <button
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium w-full text-left rounded-lg hover:bg-white/10 transition-all duration-300 flex items-center"
                      >
                        <item.icon className="w-4 h-4 mr-2" />
                        {item.name}
                        <ChevronDownIcon className="ml-auto h-4 w-4 transition-transform" />
                      </button>
                      {isServicesOpen && (
                        <div className="pl-6 space-y-1 mt-2">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="text-gray-400 hover:text-white block px-3 py-2 text-sm rounded-lg hover:bg-white/10 transition-all duration-300 flex items-center"
                              onClick={() => setIsOpen(false)}
                            >
                              <subItem.icon className="w-4 h-4 mr-2 text-purple-400" />
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
                          ? 'text-white bg-white/10'
                          : 'text-gray-300 hover:text-white hover:bg-white/10'
                      } block px-3 py-2 text-base font-medium rounded-lg transition-all duration-300 flex items-center`}
                      onClick={() => setIsOpen(false)}
                    >
                      <item.icon className="w-4 h-4 mr-2" />
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;