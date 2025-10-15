import React, { useState, useCallback, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Globe, 
  Users, 
  Code, 
  Mail, 
  Brain, 
  Shield, 
  Zap, 
  ArrowRight, 
  Star, 
  Award, 
  BarChart3, 
  Cloud, 
  Sparkles, 
  Smartphone, 
  Monitor,
  Phone,
  MapPin,
  Database,
  ChevronDown,
  Package,
  Heart,
  Receipt,
  TrendingUp,
  Cpu,
  Network,
  Settings,
  Building
} from 'lucide-react';

interface NavigationItem {
  name: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
  children?: NavigationItem[];
}

interface NavigationProps {
  onSidebarToggle: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onSidebarToggle }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const navigationItems: NavigationItem[] = [
    { name: 'Home', href: '/', icon: Globe },
    { name: 'About', href: '/about', icon: Users },
    { 
<<<<<<< HEAD
      name: 'Services', 
      href: '/services', 
      icon: BriefcaseIcon,
      submenu: [
        { name: 'AI Solutions', href: '/ai-solutions', icon: CpuChipIcon },
        { name: 'IT Solutions', href: '/it-solutions', icon: CogIcon },
        { name: 'Cloud Infrastructure', href: '/cloud-infrastructure', icon: CloudIcon },
        { name: 'Cybersecurity', href: '/cybersecurity', icon: ShieldCheckIcon },
        { name: '5G Solutions', href: '/5g-solutions', icon: SignalIcon }
      ]
    },
    { name: 'Portfolio', href: '/portfolio', icon: DocumentTextIcon },
    { name: 'Blog', href: '/blog', icon: AcademicCapIcon },
    { name: 'Contact', href: '/contact', icon: PhoneIcon }
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
=======
      name: 'AI Services', 
      href: '/ai-services', 
      icon: Brain,
      children: [
        { name: 'AI Analytics', href: '/ai-analytics', icon: BarChart3 },
        { name: 'AI Content Generation', href: '/ai-content-generation', icon: Code },
        { name: 'AI Customer Support', href: '/ai-customer-support', icon: Users },
        { name: 'AI Cybersecurity', href: '/ai-cybersecurity', icon: Shield },
        { name: 'AI Data Analytics', href: '/ai-data-analytics', icon: Database },
        { name: 'AI Marketing Automation', href: '/ai-marketing-automation', icon: Zap },
        { name: 'AI Voice Assistant', href: '/ai-voice-assistant', icon: Phone },
        { name: 'AI Workflow Automation', href: '/ai-workflow-automation', icon: Settings },
      ]
    },
    { 
      name: 'IT Services', 
      href: '/services', 
      icon: Shield,
      children: [
        { name: 'Cloud Migration', href: '/cloud-migration', icon: Cloud },
        { name: 'DevOps Services', href: '/devops-services', icon: Code },
        { name: 'IT Consulting', href: '/it-consulting', icon: Users },
        { name: 'Network Security', href: '/network-security', icon: Shield },
        { name: 'Software Development', href: '/software-development', icon: Code },
        { name: 'System Integration', href: '/system-integration', icon: Settings },
        { name: 'Web Development', href: '/web-development', icon: Globe },
      ]
    },
    { 
      name: 'Micro SAAS', 
      href: '/micro-saas', 
      icon: Zap,
      children: [
        { name: 'Zion Analytics Pro', href: '/zion-analytics-pro', icon: BarChart3 },
        { name: 'Zion Security Shield', href: '/zion-security-shield', icon: Shield },
        { name: 'Zion AI CRM Pro', href: '/zion-ai-crm-pro', icon: Users },
        { name: 'Zion AI Marketing Automation', href: '/zion-ai-marketing-automation', icon: Zap },
        { name: 'Project Management Pro', href: '/project-management-pro', icon: Settings },
        { name: 'Inventory Management', href: '/inventory-management-system', icon: Package },
        { name: 'Financial Analytics Pro', href: '/ai-financial-analytics-pro', icon: BarChart3 },
      ]
    },
    { 
      name: '5G Solutions', 
      href: '/5g-solutions', 
      icon: Network,
      children: [
        { name: '5G Network Infrastructure', href: '/5g-network-infrastructure', icon: Network },
        { name: '5G Edge Computing', href: '/5g-edge-computing', icon: Cpu },
        { name: '5G IoT Solutions', href: '/5g-iot-solutions', icon: Globe },
        { name: '5G Smart City Solutions', href: '/5g-smart-city-solutions', icon: Building },
        { name: '5G Private Networks', href: '/5g-private-networks', icon: Shield },
        { name: '5G Mobile Applications', href: '/5g-mobile-applications', icon: Smartphone },
        { name: '5G Data Analytics', href: '/5g-data-analytics', icon: BarChart3 },
      ]
    },
    { name: 'Blog', href: '/blog', icon: BarChart3 },
    { name: 'Contact', href: '/contact', icon: Mail },
  ];

  const isActive = (href: string) => location.pathname === href;

  const handleDropdownToggle = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
>>>>>>> 0030dc29551cef3d712867a05efd73f15c1feb05
  };

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
    if (onSidebarToggle) {
      onSidebarToggle();
    }
  };

  const toggleServicesMenu = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  return (
<<<<<<< HEAD
    <nav className="bg-slate-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <div className="h-8 w-8 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="ml-2 text-white font-bold text-xl">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.submenu ? (
                  <div className="relative group">
                    <button
                      onClick={toggleServicesMenu}
                      className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        isActive(item.href) || isServicesOpen
                          ? 'text-purple-400 bg-purple-900/20'
                          : 'text-gray-300 hover:text-white hover:bg-slate-800'
                      }`}
                    >
                      <item.icon className="w-4 h-4 mr-2" />
                      {item.name}
                      <ChevronDownIcon className="w-4 h-4 ml-1" />
                    </button>
                    
                    {/* Dropdown Menu */}
                    {isServicesOpen && (
                      <div className="absolute top-full left-0 mt-1 w-64 bg-slate-800 rounded-md shadow-lg z-50">
                        <div className="py-1">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className={`flex items-center px-4 py-2 text-sm transition-colors ${
                                isActive(subItem.href)
                                  ? 'text-purple-400 bg-purple-900/20'
                                  : 'text-gray-300 hover:text-white hover:bg-slate-700'
                              }`}
                              onClick={() => setIsServicesOpen(false)}
                            >
                              <subItem.icon className="w-4 h-4 mr-3" />
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive(item.href)
                        ? 'text-purple-400 bg-purple-900/20'
                        : 'text-gray-300 hover:text-white hover:bg-slate-800'
                    }`}
                  >
                    <item.icon className="w-4 h-4 mr-2" />
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
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
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800 rounded-lg mt-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.submenu ? (
                    <div>
                      <button
                        onClick={toggleServicesMenu}
                        className={`flex items-center w-full px-3 py-2 rounded-md text-base font-medium transition-colors ${
                          isActive(item.href) || isServicesOpen
                            ? 'text-purple-400 bg-purple-900/20'
                            : 'text-gray-300 hover:text-white hover:bg-slate-700'
                        }`}
                      >
                        <item.icon className="w-5 h-5 mr-3" />
                        {item.name}
                        <ChevronDownIcon className="w-4 h-4 ml-auto" />
                      </button>
                      
                      {/* Mobile Submenu */}
                      {isServicesOpen && (
                        <div className="ml-4 mt-2 space-y-1">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className={`flex items-center px-3 py-2 rounded-md text-sm transition-colors ${
                                isActive(subItem.href)
                                  ? 'text-purple-400 bg-purple-900/20'
                                  : 'text-gray-300 hover:text-white hover:bg-slate-700'
                              }`}
                              onClick={() => {
                                setIsServicesOpen(false);
                                setIsOpen(false);
                              }}
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
                      className={`flex items-center px-3 py-2 rounded-md text-base font-medium transition-colors ${
                        isActive(item.href)
                          ? 'text-purple-400 bg-purple-900/20'
                          : 'text-gray-300 hover:text-white hover:bg-slate-700'
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
        )}
=======
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-md border-b border-cyan-500/20' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative">
                {item.children ? (
                  <div className="relative">
                    <button
                      onClick={() => handleDropdownToggle(item.name)}
                      className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors ${
                        isActive(item.href) || activeDropdown === item.name
                          ? 'text-cyan-400 bg-cyan-500/10'
                          : 'text-gray-300 hover:text-white hover:bg-slate-800/50'
                      }`}
                    >
                      {item.icon && <item.icon className="w-4 h-4" />}
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    
                    {activeDropdown === item.name && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800/95 backdrop-blur-md rounded-lg border border-cyan-500/20 shadow-xl z-50">
                        <div className="p-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              to={child.href}
                              className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                                isActive(child.href)
                                  ? 'text-cyan-400 bg-cyan-500/20'
                                  : 'text-gray-300 hover:text-white hover:bg-slate-700/50'
                              }`}
                            >
                              {child.icon && <child.icon className="w-4 h-4" />}
                              <span>{child.name}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors ${
                      isActive(item.href)
                        ? 'text-cyan-400 bg-cyan-500/10'
                        : 'text-gray-300 hover:text-white hover:bg-slate-800/50'
                    }`}
                  >
                    {item.icon && <item.icon className="w-4 h-4" />}
                    <span>{item.name}</span>
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={onSidebarToggle}
              className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-slate-800/50 transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
>>>>>>> 0030dc29551cef3d712867a05efd73f15c1feb05
      </div>
    </nav>
  );
};

export default Navigation;
