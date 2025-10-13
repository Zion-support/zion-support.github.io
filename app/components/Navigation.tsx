import React, { useState, useCallback, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ChevronDown,
  Home,
  Users,
  Settings,
  Phone,
  Mail,
  MapPin,
  Brain,
  Cloud,
  Wifi,
  Database,
  Shield,
  Code,
  BarChart3,
  Zap,
  Globe,
  Smartphone
} from 'lucide-react';

interface NavigationProps {
  onSidebarToggle: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onSidebarToggle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAIServicesOpen, setIsAIServicesOpen] = useState(false);
  const [isITServicesOpen, setIsITServicesOpen] = useState(false);
  const [is5GServicesOpen, setIs5GServicesOpen] = useState(false);
  const [isMicroSaasOpen, setIsMicroSaasOpen] = useState(false);
  const location = useLocation();

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
    setIsAIServicesOpen(false);
    setIsITServicesOpen(false);
    setIs5GServicesOpen(false);
    setIsMicroSaasOpen(false);
  }, []);

  useEffect(() => {
    closeMenu();
  }, [location.pathname, closeMenu]);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const isServiceActive = (servicePaths: string[]) => {
    return servicePaths.some(path => location.pathname.startsWith(path));
  };

  return (
    <nav className="relative z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">Z</span>
              </div>
              <span className="text-white font-bold text-xl">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-6">
              <Link
                to="/"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/') 
                    ? 'text-blue-400 bg-blue-900/30' 
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <Home className="inline h-4 w-4 mr-1" />
                Home
              </Link>
              
              <Link
                to="/about"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/about') 
                    ? 'text-blue-400 bg-blue-900/30' 
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <Users className="inline h-4 w-4 mr-1" />
                About
              </Link>

              {/* AI Services Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsAIServicesOpen(!isAIServicesOpen)}
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isServiceActive(['/ai-', '/zion-ai-']) 
                      ? 'text-blue-400 bg-blue-900/30' 
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Brain className="h-4 w-4 mr-1" />
                  AI Services
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                
                {isAIServicesOpen && (
                  <div className="absolute left-0 mt-2 w-80 bg-black/90 backdrop-blur-md rounded-lg shadow-lg border border-white/10 py-2">
                    <div className="px-4 py-2 text-xs font-semibold text-blue-400 uppercase tracking-wider">Core AI Services</div>
                    <Link to="/ai-services" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10" onClick={closeMenu}>
                      All AI Services
                    </Link>
                    <Link to="/ai-analytics" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10" onClick={closeMenu}>
                      AI Analytics
                    </Link>
                    <Link to="/ai-content-generation" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10" onClick={closeMenu}>
                      Content Generation
                    </Link>
                    <Link to="/ai-customer-support" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10" onClick={closeMenu}>
                      Customer Support
                    </Link>
                    <Link to="/ai-cybersecurity" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10" onClick={closeMenu}>
                      Cybersecurity
                    </Link>
                    <div className="px-4 py-2 text-xs font-semibold text-blue-400 uppercase tracking-wider mt-2">Zion AI Products</div>
                    <Link to="/zion-ai-video-generator" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10" onClick={closeMenu}>
                      AI Video Generator
                    </Link>
                    <Link to="/zion-ai-invoice-generator" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10" onClick={closeMenu}>
                      AI Invoice Generator
                    </Link>
                    <Link to="/zion-ai-voice-assistant-pro" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10" onClick={closeMenu}>
                      Voice Assistant Pro
                    </Link>
                  </div>
                )}
              </div>

              {/* IT Services Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsITServicesOpen(!isITServicesOpen)}
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isServiceActive(['/cloud-', '/devops-', '/it-', '/network-', '/software-', '/system-', '/web-', '/data-center-', '/disaster-', '/managed-', '/security-', '/technology-']) 
                      ? 'text-blue-400 bg-blue-900/30' 
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Settings className="h-4 w-4 mr-1" />
                  IT Services
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                
                {isITServicesOpen && (
                  <div className="absolute left-0 mt-2 w-80 bg-black/90 backdrop-blur-md rounded-lg shadow-lg border border-white/10 py-2">
                    <div className="px-4 py-2 text-xs font-semibold text-blue-400 uppercase tracking-wider">Infrastructure</div>
                    <Link to="/cloud-migration" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10" onClick={closeMenu}>
                      Cloud Migration
                    </Link>
                    <Link to="/devops-services" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10" onClick={closeMenu}>
                      DevOps Services
                    </Link>
                    <Link to="/data-center-solutions" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10" onClick={closeMenu}>
                      Data Center Solutions
                    </Link>
                    <div className="px-4 py-2 text-xs font-semibold text-blue-400 uppercase tracking-wider mt-2">Development</div>
                    <Link to="/web-development" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10" onClick={closeMenu}>
                      Web Development
                    </Link>
                    <Link to="/software-development" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10" onClick={closeMenu}>
                      Software Development
                    </Link>
                    <Link to="/system-integration" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10" onClick={closeMenu}>
                      System Integration
                    </Link>
                    <div className="px-4 py-2 text-xs font-semibold text-blue-400 uppercase tracking-wider mt-2">Security & Support</div>
                    <Link to="/network-security" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10" onClick={closeMenu}>
                      Network Security
                    </Link>
                    <Link to="/it-support" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10" onClick={closeMenu}>
                      IT Support
                    </Link>
                    <Link to="/managed-services" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10" onClick={closeMenu}>
                      Managed Services
                    </Link>
                  </div>
                )}
              </div>

              {/* 5G Services Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIs5GServicesOpen(!is5GServicesOpen)}
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isServiceActive(['/5g-']) 
                      ? 'text-blue-400 bg-blue-900/30' 
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Wifi className="h-4 w-4 mr-1" />
                  5G Solutions
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                
                {is5GServicesOpen && (
                  <div className="absolute left-0 mt-2 w-72 bg-black/90 backdrop-blur-md rounded-lg shadow-lg border border-white/10 py-2">
                    <Link to="/5g-solutions" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10" onClick={closeMenu}>
                      All 5G Solutions
                    </Link>
                    <Link to="/5g-network-infrastructure" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10" onClick={closeMenu}>
                      Network Infrastructure
                    </Link>
                    <Link to="/5g-edge-computing" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10" onClick={closeMenu}>
                      Edge Computing
                    </Link>
                    <Link to="/5g-iot-solutions" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10" onClick={closeMenu}>
                      IoT Solutions
                    </Link>
                    <Link to="/5g-smart-city-solutions" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10" onClick={closeMenu}>
                      Smart City Solutions
                    </Link>
                    <Link to="/5g-mobile-applications" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10" onClick={closeMenu}>
                      Mobile Applications
                    </Link>
                  </div>
                )}
              </div>

              {/* Micro SAAS Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsMicroSaasOpen(!isMicroSaasOpen)}
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isServiceActive(['/micro-saas', '/project-management', '/customer-relationship', '/inventory', '/financial', '/employee', '/social', '/email', '/website', '/task', '/zion-']) 
                      ? 'text-blue-400 bg-blue-900/30' 
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <BarChart3 className="h-4 w-4 mr-1" />
                  Micro SAAS
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                
                {isMicroSaasOpen && (
                  <div className="absolute left-0 mt-2 w-80 bg-black/90 backdrop-blur-md rounded-lg shadow-lg border border-white/10 py-2">
                    <div className="px-4 py-2 text-xs font-semibold text-blue-400 uppercase tracking-wider">Business Tools</div>
                    <Link to="/micro-saas" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10" onClick={closeMenu}>
                      All Micro SAAS
                    </Link>
                    <Link to="/project-management-tool" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10" onClick={closeMenu}>
                      Project Management
                    </Link>
                    <Link to="/customer-relationship-manager" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10" onClick={closeMenu}>
                      CRM System
                    </Link>
                    <Link to="/inventory-management-system" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10" onClick={closeMenu}>
                      Inventory Management
                    </Link>
                    <div className="px-4 py-2 text-xs font-semibold text-blue-400 uppercase tracking-wider mt-2">Marketing & Analytics</div>
                    <Link to="/social-media-scheduler" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10" onClick={closeMenu}>
                      Social Media Scheduler
                    </Link>
                    <Link to="/email-marketing-platform" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10" onClick={closeMenu}>
                      Email Marketing
                    </Link>
                    <Link to="/website-analytics-tool" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10" onClick={closeMenu}>
                      Website Analytics
                    </Link>
                  </div>
                )}
              </div>

              <Link
                to="/blog"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/blog') 
                    ? 'text-blue-400 bg-blue-900/30' 
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <Globe className="inline h-4 w-4 mr-1" />
                Blog
              </Link>
              
              <Link
                to="/contact"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/contact') 
                    ? 'text-blue-400 bg-blue-900/30' 
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <Phone className="inline h-4 w-4 mr-1" />
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={onSidebarToggle}
              className="text-gray-300 hover:text-white p-2"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;