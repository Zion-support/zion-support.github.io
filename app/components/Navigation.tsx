import React, { useState, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Zap, 
  Globe, 
  ArrowRight, 
  Users, 
  Award, 
  BarChart3, 
  Cloud, 
  Smartphone, 
  Monitor,
  Phone,
  Code,
  Database,
  ChevronDown,
  Menu,
  X,
  SidebarIcon,
  Package,
  TrendingUp,
  Cpu,
  Network,
  FileText
} from 'lucide-react';

interface NavigationProps {
  onSidebarToggle?: () => void;
}

const Navigation = React.memo<NavigationProps>(({ onSidebarToggle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMicroSaasOpen, setIsMicroSaasOpen] = useState(false);
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

  const isActive = useCallback((path: string) => {
    return location.pathname === path;
  }, [location.pathname]);

  return (
    <nav className="relative z-50 bg-black/20 backdrop-blur-md border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                Zion Tech Group
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                to="/"
                className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  isActive('/')
                    ? 'text-cyan-400 bg-cyan-500/10'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <Globe className="w-4 h-4" />
                <span>Home</span>
              </Link>
              
              <Link
                to="/about"
                className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  isActive('/about')
                    ? 'text-cyan-400 bg-cyan-500/10'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <Users className="w-4 h-4" />
                <span>About</span>
              </Link>

              <div className="relative group">
                <button
                  className="flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 text-gray-300 hover:text-white hover:bg-white/10"
                  onClick={toggleServices}
                >
                  <Award className="w-4 h-4" />
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>

                {isServicesOpen && (
                  <div className="absolute left-0 mt-2 w-96 bg-black/90 backdrop-blur-md border border-cyan-500/30 rounded-lg shadow-xl z-50">
                    <div className="p-4">
                      <div className="mb-4">
                        <div className="flex items-center space-x-2 mb-2 text-cyan-400 font-semibold">
                          <Brain className="w-4 h-4" />
                          <span>AI Services</span>
                        </div>
                        <div className="grid grid-cols-1 gap-1">
                          <Link to="/ai-analytics" className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-cyan-500/10 rounded-md transition-all duration-300">
                            <BarChart3 className="w-4 h-4" />
                            <span>AI Analytics</span>
                          </Link>
                          <Link to="/ai-content-generation" className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-cyan-500/10 rounded-md transition-all duration-300">
                            <Code className="w-4 h-4" />
                            <span>AI Content Generation</span>
                          </Link>
                          <Link to="/ai-customer-service" className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-cyan-500/10 rounded-md transition-all duration-300">
                            <Users className="w-4 h-4" />
                            <span>AI Customer Service</span>
                          </Link>
                        </div>
                      </div>
                      <div className="mb-4">
                        <div className="flex items-center space-x-2 mb-2 text-cyan-400 font-semibold">
                          <Monitor className="w-4 h-4" />
                          <span>IT Services</span>
                        </div>
                        <div className="grid grid-cols-1 gap-1">
                          <Link to="/cloud-infrastructure" className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-cyan-500/10 rounded-md transition-all duration-300">
                            <Cloud className="w-4 h-4" />
                            <span>Cloud Infrastructure</span>
                          </Link>
                          <Link to="/cybersecurity-solutions" className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-cyan-500/10 rounded-md transition-all duration-300">
                            <Shield className="w-4 h-4" />
                            <span>Cybersecurity Solutions</span>
                          </Link>
                          <Link to="/web-development" className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-cyan-500/10 rounded-md transition-all duration-300">
                            <Globe className="w-4 h-4" />
                            <span>Web Development</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link
                to="/micro-saas"
                className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  isActive('/micro-saas')
                    ? 'text-cyan-400 bg-cyan-500/10'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <Package className="w-4 h-4" />
                <span>Micro SAAS</span>
              </Link>

              <Link
                to="/blog"
                className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  isActive('/blog')
                    ? 'text-cyan-400 bg-cyan-500/10'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <Code className="w-4 h-4" />
                <span>Blog</span>
              </Link>

              <Link
                to="/contact"
                className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  isActive('/contact')
                    ? 'text-cyan-400 bg-cyan-500/10'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <Phone className="w-4 h-4" />
                <span>Contact</span>
              </Link>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            {onSidebarToggle && (
              <button
                onClick={onSidebarToggle}
                className="p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-md transition-all duration-300"
              >
                <SidebarIcon className="w-6 h-6" />
              </button>
            )}
            <button
              onClick={toggleMenu}
              className="p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-md transition-all duration-300"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/90 backdrop-blur-md border-t border-cyan-500/20">
              <Link
                to="/"
                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                  isActive('/')
                    ? 'text-cyan-400 bg-cyan-500/10'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
                onClick={() => setIsOpen(false)}
              >
                <Globe className="w-4 h-4" />
                <span>Home</span>
              </Link>
              <Link
                to="/about"
                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                  isActive('/about')
                    ? 'text-cyan-400 bg-cyan-500/10'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
                onClick={() => setIsOpen(false)}
              >
                <Users className="w-4 h-4" />
                <span>About</span>
              </Link>
              <Link
                to="/services"
                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                  isActive('/services')
                    ? 'text-cyan-400 bg-cyan-500/10'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
                onClick={() => setIsOpen(false)}
              >
                <Award className="w-4 h-4" />
                <span>Services</span>
              </Link>
              <Link
                to="/micro-saas"
                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                  isActive('/micro-saas')
                    ? 'text-cyan-400 bg-cyan-500/10'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
                onClick={() => setIsOpen(false)}
              >
                <Package className="w-4 h-4" />
                <span>Micro SAAS</span>
              </Link>
              <Link
                to="/blog"
                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                  isActive('/blog')
                    ? 'text-cyan-400 bg-cyan-500/10'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
                onClick={() => setIsOpen(false)}
              >
                <Code className="w-4 h-4" />
                <span>Blog</span>
              </Link>
              <Link
                to="/contact"
                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                  isActive('/contact')
                    ? 'text-cyan-400 bg-cyan-500/10'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
                onClick={() => setIsOpen(false)}
              >
                <Phone className="w-4 h-4" />
                <span>Contact</span>
              </Link>
              <div className="pt-4">
                <Link
                  to="/contact"
                  className="block w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
});

Navigation.displayName = 'Navigation';

export default Navigation;
