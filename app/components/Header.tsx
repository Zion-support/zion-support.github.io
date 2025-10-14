import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, Zap, Brain, Code, Cloud, Wifi, Users, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    {
      name: 'Home',
      href: '/',
      icon: <Zap className="w-4 h-4" />
    },
    {
      name: 'About',
      href: '/about',
      icon: <Users className="w-4 h-4" />
    },
    {
      name: 'AI Services',
      href: '/ai-services',
      icon: <Brain className="w-4 h-4" />,
      dropdown: [
        { name: 'AI Analytics Dashboard Pro', href: '/ai-analytics-dashboard-pro', price: '$299/mo' },
        { name: 'AI Code Assistant Pro', href: '/ai-code-assistant-pro', price: '$199/mo' },
        { name: 'AI Business Intelligence Pro', href: '/ai-business-intelligence-pro', price: '$249/mo' },
        { name: 'AI Automation Suite', href: '/ai-automation-suite', price: '$179/mo' },
        { name: 'AI Chatbot Enterprise', href: '/ai-chatbot-enterprise', price: '$149/mo' },
        { name: 'AI Content Generation Pro', href: '/ai-content-generation-pro', price: '$129/mo' },
        { name: 'AI Computer Vision', href: '/ai-computer-vision', price: '$399/mo' },
        { name: 'AI Content Moderation Pro', href: '/ai-content-moderation-pro', price: '$129/mo' }
      ]
    },
    {
      name: 'IT Services',
      href: '/it-services',
      icon: <Code className="w-4 h-4" />,
      dropdown: [
        { name: 'AI Cloud Infrastructure', href: '/ai-cloud-infrastructure', price: '$499/mo' },
        { name: 'Advanced Security Suite', href: '/advanced-security-suite', price: '$399/mo' },
        { name: 'API Management', href: '/ai-api-management', price: '$199/mo' },
        { name: 'Database Solutions', href: '/database-solutions', price: '$299/mo' },
        { name: 'Performance Monitoring', href: '/performance-monitoring', price: '$149/mo' },
        { name: 'DevOps Solutions', href: '/devops-solutions', price: '$249/mo' },
        { name: 'Cloud Migration', href: '/cloud-migration', price: '$599/mo' },
        { name: 'Data Analytics', href: '/data-analytics', price: '$199/mo' }
      ]
    },
    {
      name: '5G Solutions',
      href: '/5g-solutions',
      icon: <Wifi className="w-4 h-4" />,
      dropdown: [
        { name: '5G Implementation', href: '/5g-implementation', price: '$999/mo' },
        { name: '5G IoT Solutions', href: '/5g-iot-solutions', price: '$799/mo' },
        { name: '5G Network Infrastructure', href: '/5g-network-infrastructure', price: '$899/mo' },
        { name: '5G Smart City Solutions', href: '/5g-smart-city-solutions', price: '$1299/mo' },
        { name: '5G Edge Computing', href: '/5g-edge-computing', price: '$699/mo' },
        { name: '5G Private Networks', href: '/5g-private-networks', price: '$1199/mo' },
        { name: '5G Performance Optimization', href: '/5g-optimization', price: '$499/mo' },
        { name: '5G Security Solutions', href: '/5g-security', price: '$599/mo' }
      ]
    },
    {
      name: 'Micro SAAS',
      href: '/micro-saas',
      icon: <Cloud className="w-4 h-4" />,
      dropdown: [
        { name: 'AI Content Moderation Pro', href: '/ai-content-moderation-pro', price: '$129/mo' },
        { name: 'AI Climate Solutions Pro', href: '/ai-climate-solutions-pro', price: '$199/mo' },
        { name: 'AI Agricultural Intelligence Pro', href: '/ai-agricultural-intelligence-pro', price: '$159/mo' },
        { name: 'AI 3D Generation', href: '/ai-3d-generation', price: '$179/mo' },
        { name: 'AI Blockchain Solutions', href: '/ai-blockchain-solutions', price: '$299/mo' },
        { name: 'AI Accounting Assistant', href: '/ai-accounting-assistant', price: '$99/mo' },
        { name: 'AI Content Writer', href: '/ai-content-writer', price: '$79/mo' },
        { name: 'AI API Manager', href: '/ai-api-manager', price: '$149/mo' }
      ]
    },
    {
      name: 'Contact',
      href: '/contact',
      icon: <Phone className="w-4 h-4" />
    }
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-md border-b border-cyan-500/20 shadow-2xl' 
        : 'bg-transparent'
    }`}>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <span className="text-cyan-200">24/7 Support Available</span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-slate-900/90 backdrop-blur-md border-b border-cyan-500/20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  Zion Tech Group
                </span>
                <span className="text-xs text-cyan-400 -mt-1">Advanced AI & IT Solutions</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    to={item.href}
                    className={`flex items-center space-x-1 px-4 py-2 rounded-lg transition-all duration-300 ${
                      isActive(item.href)
                        ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-500/25'
                        : 'text-gray-300 hover:text-white hover:bg-slate-800/50'
                    }`}
                    onMouseEnter={() => setActiveDropdown(item.dropdown ? item.name : null)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.icon}
                    <span className="font-medium">{item.name}</span>
                    {item.dropdown && <ChevronDown className="w-4 h-4" />}
                  </Link>

                  {/* Dropdown Menu */}
                  {item.dropdown && (
                    <div className={`absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-md border border-cyan-500/20 rounded-lg shadow-2xl transition-all duration-300 ${
                      activeDropdown === item.name 
                        ? 'opacity-100 visible translate-y-0' 
                        : 'opacity-0 invisible translate-y-2'
                    }`}>
                      <div className="py-2">
                        <div className="px-4 py-2 border-b border-cyan-500/20">
                          <h3 className="text-sm font-semibold text-cyan-400">{item.name}</h3>
                        </div>
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.href}
                            className="flex items-center justify-between px-4 py-3 text-gray-300 hover:text-white hover:bg-slate-700/50 transition-colors duration-200 group"
                          >
                            <div className="flex items-center space-x-3">
                              <div className="w-2 h-2 bg-cyan-500 rounded-full group-hover:scale-150 transition-transform"></div>
                              <span className="text-sm">{dropdownItem.name}</span>
                            </div>
                            {dropdownItem.price && (
                              <span className="text-xs font-medium text-cyan-400 bg-cyan-500/10 px-2 py-1 rounded">
                                {dropdownItem.price}
                              </span>
                            )}
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
              <a
                href="tel:+13024640950"
                className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 neon-button"
              >
                <Phone className="w-4 h-4 mr-2 inline" />
                Get Quote
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="bg-slate-800/95 backdrop-blur-md border-t border-cyan-500/20">
            <div className="container mx-auto px-4 py-4 space-y-2">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                      isActive(item.href)
                        ? 'bg-cyan-600 text-white'
                        : 'text-gray-300 hover:text-white hover:bg-slate-700/50'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.icon}
                    <span className="font-medium">{item.name}</span>
                  </Link>
                  {item.dropdown && (
                    <div className="ml-8 space-y-1">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.href}
                          className="flex items-center space-x-3 px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-slate-700/30 rounded-lg transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div>
                          <span>{dropdownItem.name}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-cyan-500/20">
                <a
                  href="tel:+13024640950"
                  className="w-full bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center neon-button"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Get Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;