import React, { useState, useCallback, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Brain, 
  Shield, 
  Zap, 
  Globe, 
  ChevronDown,
  ArrowRight,
  Star,
  Award,
  BarChart3,
  Cloud,
  Code,
  Database,
  Users,
  Sparkles
} from 'lucide-react';

const Navigation = React.memo(({ onSidebarToggle }: { onSidebarToggle: () => void }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const toggleServices = useCallback(() => {
    setIsServicesOpen(prev => !prev);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      title: "AI Services",
      href: "/ai-services",
      icon: <Brain className="w-5 h-5" />,
      description: "AI-powered solutions for your business",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "IT Services",
      href: "/services",
      icon: <Shield className="w-5 h-5" />,
      description: "Comprehensive technology solutions",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Micro SAAS",
      href: "/micro-saas",
      icon: <Zap className="w-5 h-5" />,
      description: "Ready-to-use software solutions",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "5G Solutions",
      href: "/5g-solutions",
      icon: <Globe className="w-5 h-5" />,
      description: "Next-generation connectivity",
      color: "from-orange-500 to-red-500"
    }
  ];

  const microSaas = [
    {
      title: "Zion Analytics Pro",
      href: "/zion-analytics-pro",
      icon: <BarChart3 className="w-4 h-4" />,
      price: "From $299/month"
    },
    {
      title: "Security Shield",
      href: "/zion-security-shield",
      icon: <Shield className="w-4 h-4" />,
      price: "From $499/month"
    },
    {
      title: "Cloud Vault",
      href: "/zion-cloud-vault",
      icon: <Cloud className="w-4 h-4" />,
      price: "From $99/month"
    },
    {
      title: "AI CRM Pro",
      href: "/zion-ai-crm-pro",
      icon: <Users className="w-4 h-4" />,
      price: "From $199/month"
    }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-md border-b border-white/10' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Zion Tech Group
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors duration-300 ${
                isActive('/') 
                  ? 'text-cyan-400' 
                  : 'text-white hover:text-cyan-400'
              }`}
            >
              Home
            </Link>
            
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors duration-300 ${
                isActive('/about') 
                  ? 'text-cyan-400' 
                  : 'text-white hover:text-cyan-400'
              }`}
            >
              About
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button
                onClick={toggleServices}
                className="flex items-center space-x-1 text-sm font-medium text-white hover:text-cyan-400 transition-colors duration-300"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                  isServicesOpen ? 'rotate-180' : ''
                }`} />
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-slate-900/95 backdrop-blur-md rounded-xl border border-white/20 shadow-2xl overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-white mb-4">Our Services</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {services.map((service) => (
                        <Link
                          key={service.title}
                          to={service.href}
                          className="group p-3 rounded-lg hover:bg-white/10 transition-all duration-300"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          <div className="flex items-center space-x-3">
                            <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                              {service.icon}
                            </div>
                            <div>
                              <h4 className="text-sm font-medium text-white group-hover:text-cyan-400 transition-colors">
                                {service.title}
                              </h4>
                              <p className="text-xs text-gray-400">{service.description}</p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                    
                    <div className="mt-6 pt-4 border-t border-white/20">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-3">Featured Micro SAAS</h4>
                      <div className="space-y-2">
                        {microSaas.map((saas) => (
                          <Link
                            key={saas.title}
                            to={saas.href}
                            className="flex items-center justify-between p-2 rounded-lg hover:bg-white/10 transition-colors duration-300 group"
                            onClick={() => setIsServicesOpen(false)}
                          >
                            <div className="flex items-center space-x-2">
                              {saas.icon}
                              <span className="text-sm text-white group-hover:text-cyan-400 transition-colors">
                                {saas.title}
                              </span>
                            </div>
                            <span className="text-xs text-cyan-400">{saas.price}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors duration-300 ${
                isActive('/contact') 
                  ? 'text-cyan-400' 
                  : 'text-white hover:text-cyan-400'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/demo"
              className="text-sm font-medium text-white hover:text-cyan-400 transition-colors duration-300"
            >
              Demo
            </Link>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center space-x-2 group"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={onSidebarToggle}
            className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  );
});

Navigation.displayName = "Navigation";

export default Navigation;
