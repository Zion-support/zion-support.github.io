import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Brain, Shield, Zap, Globe, Code, Smartphone, Cloud, BarChart3, Bot, Wifi, Target, Users, Award, BarChart3 as Analytics, Mail, Phone, MapPin } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationItems = [
    {
      name: "Home",
      href: "/",
      icon: null
    },
    {
      name: "AI Services",
      href: "/ai-services",
      icon: <Brain className="w-4 h-4" />,
      dropdown: [
        { name: "AI Analytics", href: "/ai-analytics", icon: <Analytics className="w-4 h-4" /> },
        { name: "AI Automation", href: "/ai-automation", icon: <Zap className="w-4 h-4" /> },
        { name: "AI Content Generation", href: "/ai-content-generation", icon: <Code className="w-4 h-4" /> },
        { name: "AI Customer Service", href: "/ai-customer-service", icon: <Bot className="w-4 h-4" /> },
        { name: "AI Cybersecurity", href: "/ai-cybersecurity", icon: <Shield className="w-4 h-4" /> },
        { name: "AI Marketing", href: "/ai-marketing", icon: <Target className="w-4 h-4" /> }
      ]
    },
    {
      name: "IT Services",
      href: "/services",
      icon: <Shield className="w-4 h-4" />,
      dropdown: [
        { name: "Cloud Infrastructure", href: "/cloud-infrastructure", icon: <Cloud className="w-4 h-4" /> },
        { name: "Cybersecurity", href: "/cybersecurity-solutions", icon: <Shield className="w-4 h-4" /> },
        { name: "Web Development", href: "/web-development", icon: <Code className="w-4 h-4" /> },
        { name: "Mobile Development", href: "/mobile-development", icon: <Smartphone className="w-4 h-4" /> },
        { name: "Database Management", href: "/database-management", icon: <BarChart3 className="w-4 h-4" /> },
        { name: "Custom Software", href: "/custom-software", icon: <Code className="w-4 h-4" /> }
      ]
    },
    {
      name: "Micro SAAS",
      href: "/micro-saas",
      icon: <Zap className="w-4 h-4" />,
      dropdown: [
        { name: "Zion Analytics Pro", href: "/zion-analytics-pro", icon: <Analytics className="w-4 h-4" /> },
        { name: "Zion Security Shield", href: "/zion-security-shield", icon: <Shield className="w-4 h-4" /> },
        { name: "Zion Cloud Vault", href: "/zion-cloud-vault", icon: <Cloud className="w-4 h-4" /> },
        { name: "Zion Content Studio", href: "/zion-content-studio", icon: <Code className="w-4 h-4" /> },
        { name: "Zion Data Sync", href: "/zion-data-sync", icon: <BarChart3 className="w-4 h-4" /> },
        { name: "Zion Project Master", href: "/zion-project-master", icon: <Users className="w-4 h-4" /> }
      ]
    },
    {
      name: "5G Solutions",
      href: "/5g-solutions",
      icon: <Wifi className="w-4 h-4" />,
      dropdown: [
        { name: "5G Implementation", href: "/5g-implementation", icon: <Wifi className="w-4 h-4" /> },
        { name: "5G Edge Computing", href: "/5g-edge-computing", icon: <Cloud className="w-4 h-4" /> },
        { name: "5G IoT Solutions", href: "/5g-iot-solutions", icon: <Globe className="w-4 h-4" /> },
        { name: "5G Smart Cities", href: "/5g-smart-city-solutions", icon: <Globe className="w-4 h-4" /> },
        { name: "5G Private Networks", href: "/5g-private-networks", icon: <Shield className="w-4 h-4" /> },
        { name: "5G Data Analytics", href: "/5g-data-analytics", icon: <Analytics className="w-4 h-4" /> }
      ]
    },
    {
      name: "About",
      href: "/about",
      icon: null
    },
    {
      name: "Contact",
      href: "/contact",
      icon: null
    }
  ];

  const isActive = (href: string) => {
    return location.pathname === href;
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-md border-b border-cyan-500/20 shadow-lg shadow-cyan-500/10' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <span className="text-white font-bold text-xl">Z</span>
            </div>
            <span className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.href}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-300 ${
                    isActive(item.href)
                      ? 'text-cyan-400 bg-cyan-500/10 border border-cyan-500/30'
                      : 'text-gray-300 hover:text-cyan-400 hover:bg-white/5'
                  }`}
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.icon && <span className="text-cyan-400">{item.icon}</span>}
                  <span className="font-medium">{item.name}</span>
                  {item.dropdown && (
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800/95 backdrop-blur-md rounded-xl border border-cyan-500/20 shadow-2xl shadow-cyan-500/10 overflow-hidden">
                    <div className="py-2">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.href}
                          className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 group"
                        >
                          <span className="text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                            {dropdownItem.icon}
                          </span>
                          <span className="font-medium">{dropdownItem.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact Info - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <Phone className="w-4 h-4 text-cyan-400" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <Mail className="w-4 h-4 text-cyan-400" />
              <span>kleber@ziontechgroup.com</span>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-cyan-500/20">
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                      isActive(item.href)
                        ? 'text-cyan-400 bg-cyan-500/10 border border-cyan-500/30'
                        : 'text-gray-300 hover:text-cyan-400 hover:bg-white/5'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.icon && <span className="text-cyan-400">{item.icon}</span>}
                    <span className="font-medium">{item.name}</span>
                  </Link>
                  
                  {/* Mobile Dropdown */}
                  {item.dropdown && (
                    <div className="ml-6 mt-2 space-y-2">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.href}
                          className="flex items-center space-x-2 px-3 py-2 text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                          onClick={() => setIsOpen(false)}
                        >
                          <span className="text-cyan-400">{dropdownItem.icon}</span>
                          <span className="text-sm">{dropdownItem.name}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-gray-700 space-y-3">
                <div className="flex items-center space-x-2 text-sm text-gray-300">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-300">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-300">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>364 E Main St STE 1008, Middletown DE 19709</span>
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