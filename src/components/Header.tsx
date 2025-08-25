import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Search, 
  Phone, 
  Mail, 
  MapPin,
  Brain,
  Users,
  Target,
  Shield,
  Zap,
  Building,
  Cpu,
  Globe,
  Rocket,
  Star,
  ArrowRight,
  Sparkles,
  Lock,
  Database,
  Network,
  Code,
  BarChart3,
  Lightbulb,
  Clock,
  Eye,
  Cloud,
  DollarSign,
  ShoppingCart,
  Heart,
  Palette,
  ChevronRight,
  ExternalLink
} from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (activeDropdown && !(event.target as Element).closest('.dropdown-container')) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [activeDropdown]);

  const navigationItems = [
    { 
      path: '/', 
      label: 'Home', 
      icon: '🏠',
      description: 'Welcome to Zion Tech Group'
    },
    { 
      path: '/about', 
      label: 'About', 
      icon: 'ℹ️',
      description: 'Learn about our mission and team'
    },
    { 
      path: '/services', 
      label: 'Services', 
      icon: '🛠️',
      description: 'Explore our comprehensive solutions'
    },
    { 
      path: '/contact', 
      label: 'Contact', 
      icon: '📞',
      description: 'Get in touch with our experts'
    }
  ];

  const servicesDropdown = [
    {
      category: 'AI & Machine Learning',
      icon: Brain,
      items: [
        { name: 'AI Business Intelligence', path: '/services/ai-business-intelligence', description: 'Transform data into actionable insights' },
        { name: 'AI Marketing Automation', path: '/services/ai-marketing-automation', description: 'Automate marketing with AI precision' },
        { name: 'Quantum Neural Networks', path: '/services/quantum-neural-networks', description: 'Next-generation AI computing' }
      ]
    },
    {
      category: 'Cybersecurity',
      icon: Shield,
      items: [
        { name: 'SOC2 Compliance', path: '/services/soc2-compliance', description: 'Automated compliance management' },
        { name: 'Threat Detection', path: '/services/threat-detection', description: 'Advanced security monitoring' },
        { name: 'Data Protection', path: '/services/data-protection', description: 'Enterprise-grade security' }
      ]
    },
    {
      category: 'Infrastructure',
      icon: Building,
      items: [
        { name: '5G Networks', path: '/services/5g-networks', description: 'Enterprise 5G infrastructure' },
        { name: 'Cloud Migration', path: '/services/cloud-migration', description: 'Seamless cloud transition' },
        { name: 'DevOps Automation', path: '/services/devops-automation', description: 'Streamline development' }
      ]
    }
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const handleDropdownToggle = (dropdownName: string) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/95 backdrop-blur-md border-b border-gray-800/50' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">Z</span>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    location.pathname === item.path
                      ? 'text-cyan-400'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Services Dropdown */}
              <div className="relative dropdown-container">
                <button
                  onClick={() => handleDropdownToggle('services')}
                  className="flex items-center space-x-1 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200"
                >
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                    activeDropdown === 'services' ? 'rotate-180' : ''
                  }`} />
                </button>
                
                {activeDropdown === 'services' && (
                  <div className="absolute top-full left-0 mt-2 w-96 bg-gray-900/95 backdrop-blur-md border border-gray-700/50 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden">
                    <div className="p-6">
                      <div className="grid grid-cols-1 gap-6">
                        {servicesDropdown.map((category, index) => {
                          const Icon = category.icon;
                          return (
                            <div key={index} className="space-y-3">
                              <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                                  <Icon className="w-4 h-4 text-white" />
                                </div>
                                <h3 className="text-sm font-semibold text-white">{category.category}</h3>
                              </div>
                              <div className="space-y-2 ml-11">
                                {category.items.map((service, serviceIndex) => (
                                  <Link
                                    key={serviceIndex}
                                    to={service.path}
                                    className="block p-3 rounded-lg hover:bg-gray-800/50 transition-colors duration-200 group"
                                    onClick={() => setActiveDropdown(null)}
                                  >
                                    <div className="flex items-center justify-between">
                                      <div>
                                        <h4 className="text-sm font-medium text-white group-hover:text-cyan-400 transition-colors duration-200">
                                          {service.name}
                                        </h4>
                                        <p className="text-xs text-gray-400 mt-1">{service.description}</p>
                                      </div>
                                      <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors duration-200" />
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                  className={`w-64 pl-10 pr-4 py-2 bg-gray-800/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all duration-200 ${
                    isSearchFocused ? 'border-cyan-500/50' : 'border-gray-700/50'
                  }`}
                />
              </div>
              
              {/* Contact Info */}
              <div className="flex items-center space-x-4 text-sm text-gray-300">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span>+1 (302) 464-0950</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span>info@ziontechgroup.com</span>
                </div>
              </div>
              
              {/* CTA Button */}
              <Link
                to="/contact"
                className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900/95 backdrop-blur-md border-t border-gray-700/50">
                {navigationItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                      location.pathname === item.path
                        ? 'text-cyan-400 bg-gray-800/50'
                        : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                
                {/* Mobile Services */}
                <div className="px-3 py-2">
                  <div className="text-base font-medium text-gray-300 mb-2">Services</div>
                  <div className="ml-4 space-y-2">
                    {servicesDropdown.flatMap(category => category.items).map((service, index) => (
                      <Link
                        key={index}
                        to={service.path}
                        className="block px-3 py-2 rounded-md text-sm text-gray-400 hover:text-white hover:bg-gray-800/50 transition-colors duration-200"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
                
                {/* Mobile Contact */}
                <div className="px-3 py-2 border-t border-gray-700/50 mt-4">
                  <div className="space-y-2 text-sm text-gray-400">
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-cyan-400" />
                      <span>+1 (302) 464-0950</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4 text-cyan-400" />
                      <span>info@ziontechgroup.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
    </>
  );
}

export default Header;