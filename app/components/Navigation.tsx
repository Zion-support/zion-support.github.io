import React, { useState, useCallback, useMemo } from 'react'
import { Link, useLocation } from 'react-router-dom'
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
  Sidebar as SidebarIcon,
  Package,
  Heart,
  Receipt,
  TrendingUp,
  Cpu,
  Network,
  FileText,
  Clock
} from 'lucide-react';
import FuturisticButton from './FuturisticButton';

interface NavigationProps {
  onSidebarToggle?: () => void
}

const Navigation: React.FC<NavigationProps> = ({ onSidebarToggle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMicroSaasOpen, setIsMicroSaasOpen] = useState(false);
  const [isItServicesOpen, setIsItServicesOpen] = useState(false);
  const [is5GServicesOpen, setIs5GServicesOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const toggleDropdown = useCallback((dropdown: string) => {
    setActiveDropdown(prev => prev === dropdown ? null : dropdown);
  }, []);

  const closeDropdowns = useCallback(() => {
    setActiveDropdown(null);
    setIsServicesOpen(false);
    setIsMicroSaasOpen(false);
    setIsItServicesOpen(false);
    setIs5GServicesOpen(false);
  }, []);

  const isActive = useCallback((path: string) => {
    return location.pathname === path;
  }, [location.pathname]);

  const services = useMemo(() => [
    {
      name: "AI Services",
      path: "/ai-services",
      icon: <Brain className="w-4 h-4" />,
      description: "Artificial Intelligence Solutions",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "IT Services", 
      path: "/it-services",
      icon: <Shield className="w-4 h-4" />,
      description: "Information Technology Solutions",
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Micro SAAS",
      path: "/micro-saas", 
      icon: <Zap className="w-4 h-4" />,
      description: "Ready-to-use Software Solutions",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "5G Solutions",
      path: "/5g-solutions",
      icon: <Globe className="w-4 h-4" />,
      description: "Next-generation Connectivity",
      color: "from-orange-500 to-red-500"
    }
  ], []);

  const aiServices = useMemo(() => [
    { name: "AI Analytics", path: "/ai-analytics" },
    { name: "AI Automation", path: "/ai-automation" },
    { name: "AI Business Intelligence", path: "/ai-business-intelligence" },
    { name: "AI Content Generation", path: "/ai-content-generation" },
    { name: "AI Customer Service", path: "/ai-customer-service" },
    { name: "AI Data Analytics", path: "/ai-data-analytics" },
    { name: "AI Email Automation", path: "/ai-email-automation" },
    { name: "AI Fraud Detection", path: "/ai-fraud-detection" },
    { name: "AI Healthcare", path: "/ai-healthcare" },
    { name: "AI Marketing", path: "/ai-marketing" },
    { name: "AI Predictive Analytics", path: "/ai-predictive-analytics" },
    { name: "AI Project Management", path: "/ai-project-management" },
    { name: "AI Recommendation Engine", path: "/ai-recommendation-engine" },
    { name: "AI Sales Automation", path: "/ai-sales-automation" },
    { name: "AI Workflow Automation", path: "/ai-workflow-automation" }
  ], []);

  const microSaasServices = useMemo(() => [
    { name: "Zion AI Neural Interface", path: "/zion-ai-neural-interface" },
    { name: "AI Voice Cloning Studio", path: "/ai-voice-cloning-studio" },
    { name: "AI Quantum Financial Oracle", path: "/ai-quantum-financial-oracle" },
    { name: "AI Space Mission Optimizer", path: "/ai-space-mission-optimizer" },
    { name: "Zion Analytics Pro", path: "/zion-analytics-pro" },
    { name: "Zion Security Shield", path: "/zion-security-shield" }
  ], []);

  const itServices = useMemo(() => [
    { name: "Cloud Infrastructure", path: "/cloud-infrastructure" },
    { name: "Cybersecurity Solutions", path: "/cybersecurity-solutions" },
    { name: "Web Development", path: "/web-development" },
    { name: "Mobile Development", path: "/mobile-development" },
    { name: "Database Management", path: "/database-management" },
    { name: "Custom Software", path: "/custom-software" },
    { name: "Network Infrastructure", path: "/network-infrastructure" }
  ], []);

  const fiveGServices = useMemo(() => [
    { name: "5G Implementation", path: "/5g-implementation" },
    { name: "5G Edge Computing", path: "/5g-edge-computing" },
    { name: "5G IoT Solutions", path: "/5g-iot-solutions" },
    { name: "5G Smart City Solutions", path: "/5g-smart-city-solutions" },
    { name: "5G Private Networks", path: "/5g-private-networks" },
    { name: "5G Data Analytics", path: "/5g-data-analytics" }
  ], []);

  const mainNavItems = useMemo(() => [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services", hasDropdown: true },
    { name: "Pricing", path: "/pricing" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" }
  ], []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {mainNavItems.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div className="relative">
                    <button
                      onClick={() => toggleDropdown('services')}
                      className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        isActive(item.path) 
                          ? 'text-cyan-400 bg-cyan-500/10' 
                          : 'text-gray-300 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${
                        activeDropdown === 'services' ? 'rotate-180' : ''
                      }`} />
                    </button>
                    
                    {activeDropdown === 'services' && (
                      <div className="absolute top-full left-0 mt-2 w-96 bg-slate-800/95 backdrop-blur-md rounded-xl border border-white/20 shadow-2xl p-6">
                        <div className="grid grid-cols-2 gap-4">
                          {services.map((service) => (
                            <Link
                              key={service.name}
                              to={service.path}
                              onClick={closeDropdowns}
                              className="group p-4 rounded-lg hover:bg-white/10 transition-colors"
                            >
                              <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                                {service.icon}
                              </div>
                              <h3 className="text-white font-semibold mb-1 group-hover:text-cyan-400 transition-colors">
                                {service.name}
                              </h3>
                              <p className="text-gray-400 text-sm">
                                {service.description}
                              </p>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive(item.path) 
                        ? 'text-cyan-400 bg-cyan-500/10' 
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="sm"
              icon={<Monitor className="w-4 h-4" />}
            >
              Demo
            </FuturisticButton>
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="sm"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Get Started
            </FuturisticButton>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={onSidebarToggle}
              className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Open sidebar"
            >
              <SidebarIcon className="w-6 h-6" />
            </button>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-white/10 py-4">
            <div className="space-y-2">
              {mainNavItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive(item.path) 
                      ? 'text-cyan-400 bg-cyan-500/10' 
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            
            <div className="mt-4 pt-4 border-t border-white/10 space-y-2">
              <FuturisticButton
                href="/demo"
                variant="outline"
                size="sm"
                icon={<Monitor className="w-4 h-4" />}
                className="w-full justify-center"
              >
                Demo
              </FuturisticButton>
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="sm"
                icon={<ArrowRight className="w-4 h-4" />}
                className="w-full justify-center"
              >
                Get Started
              </FuturisticButton>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
