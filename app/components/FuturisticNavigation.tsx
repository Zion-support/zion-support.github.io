import React, { useState, useCallback, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Zap, 
  Globe, 
  ArrowRight, 
  Star, 
  Users, 
  Award, 
  BarChart3, 
  Cloud, 
  Sparkles, 
  Mail, 
  Smartphone, 
  Monitor,
  Phone,
  MapPin,
  Code,
  Database,
  ChevronDown,
  Menu,
  X,
  Home,
  Truck,
  Scale,
  Heart,
  TrendingUp,
  CreditCard,
  Package,
  BookOpen,
  Zap as EnergyIcon,
  Cpu,
  Network,
  Lock,
  Settings,
  Search,
  Bell,
  User,
  LogOut,
  Sun,
  Moon
} from 'lucide-react';

interface FuturisticNavigationProps {
  onSidebarToggle?: () => void;
}

const FuturisticNavigation: React.FC<FuturisticNavigationProps> = ({ onSidebarToggle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMicroSaasOpen, setIsMicroSaasOpen] = useState(false);
  const [isItServicesOpen, setIsItServicesOpen] = useState(false);
  const [is5GServicesOpen, setIs5GServicesOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const location = useLocation();
  
  const toggleMenu = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const toggleServices = useCallback(() => {
    setIsServicesOpen(!isServicesOpen);
  }, [isServicesOpen]);

  const toggleMicroSaas = useCallback(() => {
    setIsMicroSaasOpen(!isMicroSaasOpen);
  }, [isMicroSaasOpen]);

  const toggleItServices = useCallback(() => {
    setIsItServicesOpen(!isItServicesOpen);
  }, [isItServicesOpen]);

  const toggle5GServices = useCallback(() => {
    setIs5GServicesOpen(!is5GServicesOpen);
  }, [is5GServicesOpen]);

  const toggleDarkMode = useCallback(() => {
    setIsDarkMode(!isDarkMode);
  }, [isDarkMode]);

  const isActive = useCallback((path: string) => {
    return location.pathname === path;
  }, [location.pathname]);

  const navigationItems = useMemo(() => [
    {
      name: 'Home',
      path: '/',
      icon: <Home className="w-4 h-4" />,
      description: 'Main dashboard'
    },
    {
      name: 'AI Services',
      path: '/ai-services',
      icon: <Brain className="w-4 h-4" />,
      hasDropdown: true,
      description: 'Artificial Intelligence Solutions',
      dropdownItems: [
        {
          name: 'AI Analytics',
          icon: <BarChart3 className="w-4 h-4" />,
          items: [
            { name: 'AI Crypto Analyzer', path: '/zion-ai-crypto-analyzer', icon: <TrendingUp className="w-4 h-4" /> },
            { name: 'AI Health Monitor', path: '/zion-ai-health-monitor', icon: <Heart className="w-4 h-4" /> },
            { name: 'AI Real Estate Pro', path: '/zion-ai-real-estate-pro', icon: <Home className="w-4 h-4" /> },
            { name: 'AI Supply Chain Optimizer', path: '/zion-ai-supply-chain-optimizer', icon: <Truck className="w-4 h-4" /> },
            { name: 'AI Legal Assistant', path: '/zion-ai-legal-assistant', icon: <Scale className="w-4 h-4" /> },
            { name: 'AI Education Platform', path: '/zion-ai-education-platform', icon: <BookOpen className="w-4 h-4" /> },
            { name: 'AI Energy Manager', path: '/zion-ai-energy-manager', icon: <EnergyIcon className="w-4 h-4" /> },
            { name: 'AI Fintech Suite', path: '/zion-ai-fintech-suite', icon: <CreditCard className="w-4 h-4" /> }
          ]
        },
        {
          name: 'AI Business Tools',
          icon: <Cpu className="w-4 h-4" />,
          items: [
            { name: 'AI Analytics Pro', path: '/zion-analytics-pro', icon: <BarChart3 className="w-4 h-4" /> },
            { name: 'AI Inventory Manager', path: '/zion-ai-inventory-manager', icon: <Package className="w-4 h-4" /> },
            { name: 'AI HR Assistant Pro', path: '/zion-hr-assistant-pro', icon: <Users className="w-4 h-4" /> },
            { name: 'AI Accounting Suite', path: '/zion-ai-accounting-suite', icon: <BarChart3 className="w-4 h-4" /> }
          ]
        }
      ]
    },
    {
      name: 'IT Services',
      path: '/services',
      icon: <Shield className="w-4 h-4" />,
      hasDropdown: true,
      description: 'Technology Infrastructure',
      dropdownItems: [
        {
          name: 'Infrastructure',
          icon: <Cloud className="w-4 h-4" />,
          items: [
            { name: 'Cloud Infrastructure', path: '/cloud-infrastructure', icon: <Cloud className="w-4 h-4" /> },
            { name: 'Database Management', path: '/database-management', icon: <Database className="w-4 h-4" /> },
            { name: 'Network Security', path: '/network-security', icon: <Lock className="w-4 h-4" /> },
            { name: '5G Solutions', path: '/5g-solutions', icon: <Network className="w-4 h-4" /> }
          ]
        },
        {
          name: 'Development',
          icon: <Code className="w-4 h-4" />,
          items: [
            { name: 'Web Development', path: '/web-development', icon: <Code className="w-4 h-4" /> },
            { name: 'Mobile Development', path: '/mobile-development', icon: <Smartphone className="w-4 h-4" /> },
            { name: 'AI Integration', path: '/ai-integration', icon: <Brain className="w-4 h-4" /> },
            { name: 'Data Analytics', path: '/data-analytics', icon: <BarChart3 className="w-4 h-4" /> }
          ]
        }
      ]
    },
    {
      name: 'Micro SAAS',
      path: '/micro-saas',
      icon: <Zap className="w-4 h-4" />,
      hasDropdown: true,
      description: 'Ready-to-Use Solutions',
      dropdownItems: [
        {
          name: 'Featured Solutions',
          icon: <Star className="w-4 h-4" />,
          items: [
            { name: 'Zion Analytics Pro', path: '/zion-analytics-pro', icon: <BarChart3 className="w-4 h-4" /> },
            { name: 'Zion Security Shield', path: '/zion-security-shield', icon: <Shield className="w-4 h-4" /> },
            { name: 'Zion Cloud Vault', path: '/zion-cloud-vault', icon: <Cloud className="w-4 h-4" /> },
            { name: 'Zion AI CRM Pro', path: '/zion-ai-crm-pro', icon: <Users className="w-4 h-4" /> }
          ]
        },
        {
          name: 'Industry Solutions',
          icon: <Settings className="w-4 h-4" />,
          items: [
            { name: 'Crypto & Finance', path: '/crypto-solutions', icon: <TrendingUp className="w-4 h-4" /> },
            { name: 'Health & Wellness', path: '/health-solutions', icon: <Heart className="w-4 h-4" /> },
            { name: 'Real Estate', path: '/real-estate-solutions', icon: <Home className="w-4 h-4" /> },
            { name: 'Legal & Compliance', path: '/legal-solutions', icon: <Scale className="w-4 h-4" /> }
          ]
        }
      ]
    },
    {
      name: '5G Solutions',
      path: '/5g-solutions',
      icon: <Network className="w-4 h-4" />,
      hasDropdown: true,
      description: 'Next-Gen Connectivity',
      dropdownItems: [
        {
          name: '5G Infrastructure',
          icon: <Network className="w-4 h-4" />,
          items: [
            { name: '5G Network Infrastructure', path: '/5g-network-infrastructure', icon: <Network className="w-4 h-4" /> },
            { name: '5G Edge Computing', path: '/5g-edge-computing', icon: <Cpu className="w-4 h-4" /> },
            { name: '5G IoT Solutions', path: '/5g-iot-solutions', icon: <Globe className="w-4 h-4" /> },
            { name: '5G Smart City Solutions', path: '/5g-smart-city-solutions', icon: <Globe className="w-4 h-4" /> }
          ]
        }
      ]
    },
    {
      name: 'About',
      path: '/about',
      icon: <Users className="w-4 h-4" />,
      description: 'Our company'
    },
    {
      name: 'Contact',
      path: '/contact',
      icon: <Phone className="w-4 h-4" />,
      description: 'Get in touch'
    }
  ], []);

  return (
    <nav className="relative z-50 bg-black/30 backdrop-blur-md border-b border-cyan-500/20 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-cyan-500/25">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              </div>
              <div>
                <span className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                  Zion Tech Group
                </span>
                <div className="text-xs text-cyan-400 font-medium">Advanced AI & IT Solutions</div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    to={item.path}
                    className={`flex items-center space-x-2 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 group ${
                      isActive(item.path)
                        ? 'text-cyan-400 bg-cyan-500/10 shadow-lg shadow-cyan-500/20'
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                    onClick={item.hasDropdown ? (e) => {
                      e.preventDefault();
                      if (item.name === 'AI Services') toggleServices();
                      else if (item.name === 'Micro SAAS') toggleMicroSaas();
                      else if (item.name === 'IT Services') toggleItServices();
                      else if (item.name === '5G Solutions') toggle5GServices();
                    } : undefined}
                  >
                    <span className="group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
                    <span>{item.name}</span>
                    {item.hasDropdown && (
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                        (item.name === 'AI Services' && isServicesOpen) ||
                        (item.name === 'Micro SAAS' && isMicroSaasOpen) ||
                        (item.name === 'IT Services' && isItServicesOpen) ||
                        (item.name === '5G Solutions' && is5GServicesOpen)
                          ? 'rotate-180' : ''
                      }`} />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {item.hasDropdown && (
                    (item.name === 'AI Services' && isServicesOpen) ||
                    (item.name === 'Micro SAAS' && isMicroSaasOpen) ||
                    (item.name === 'IT Services' && isItServicesOpen) ||
                    (item.name === '5G Solutions' && is5GServicesOpen)
                  ) && (
                    <div className="absolute left-0 mt-2 w-96 bg-black/90 backdrop-blur-md border border-cyan-500/30 rounded-xl shadow-2xl z-50 overflow-hidden">
                      <div className="p-6">
                        <div className="mb-4">
                          <h3 className="text-lg font-semibold text-white mb-1">{item.name}</h3>
                          <p className="text-sm text-cyan-400">{item.description}</p>
                        </div>
                        {item.dropdownItems?.map((section, sectionIndex) => (
                          <div key={sectionIndex} className="mb-6 last:mb-0">
                            <div className="flex items-center space-x-2 mb-3 text-cyan-400 font-semibold">
                              <span>{section.icon}</span>
                              <span>{section.name}</span>
                            </div>
                            <div className="grid grid-cols-1 gap-2">
                              {section.items?.map((subItem, subIndex) => (
                                <Link
                                  key={subIndex}
                                  to={subItem.path}
                                  className="flex items-center space-x-3 px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-cyan-500/10 rounded-lg transition-all duration-300 group"
                                  onClick={() => {
                                    setIsServicesOpen(false);
                                    setIsMicroSaasOpen(false);
                                    setIsItServicesOpen(false);
                                    setIs5GServicesOpen(false);
                                  }}
                                >
                                  <span className="group-hover:scale-110 transition-transform duration-300">{subItem.icon}</span>
                                  <span>{subItem.name}</span>
                                  <ArrowRight className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons & Controls */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            
            <Link
              to="/demo"
              className="flex items-center space-x-2 px-4 py-2 border border-cyan-400/50 text-cyan-400 rounded-lg hover:bg-cyan-400/10 transition-all duration-300 group"
            >
              <Monitor className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
              <span>Demo</span>
            </Link>
            
            <Link
              to="/contact"
              className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-purple-500 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 group"
            >
              <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            {onSidebarToggle && (
              <button
                onClick={onSidebarToggle}
                className="p-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                aria-label="Toggle sidebar"
              >
                <Menu className="w-6 h-6" />
              </button>
            )}
            <button
              onClick={toggleMenu}
              className="p-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/90 backdrop-blur-md border-t border-cyan-500/20 rounded-b-xl">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.path}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                      isActive(item.path)
                        ? 'text-cyan-400 bg-cyan-500/10'
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <span>{item.icon}</span>
                    <span>{item.name}</span>
                    {item.hasDropdown && (
                      <ChevronDown className="w-4 h-4 ml-auto" />
                    )}
                  </Link>
                </div>
              ))}
              
              <div className="pt-4 border-t border-cyan-500/20">
                <div className="flex space-x-2">
                  <Link
                    to="/demo"
                    className="flex-1 flex items-center justify-center space-x-2 px-4 py-3 border border-cyan-400/50 text-cyan-400 rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    <Monitor className="w-4 h-4" />
                    <span>Demo</span>
                  </Link>
                  <Link
                    to="/contact"
                    className="flex-1 flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-purple-500 transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Get Started</span>
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

export default FuturisticNavigation;