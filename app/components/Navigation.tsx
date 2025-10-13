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
  SidebarIcon,
  Package,
  Heart,
  Receipt,
  TrendingUp,
  Cpu,
  Network
} from 'lucide-react';

interface NavigationProps {
  onSidebarToggle?: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onSidebarToggle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAIServicesOpen, setIsAIServicesOpen] = useState(false);
  const [isMicroSaasOpen, setIsMicroSaasOpen] = useState(false);
  const [is5GServicesOpen, setIs5GServicesOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const toggleServices = useCallback(() => {
    setIsServicesOpen(prev => !prev);
  }, []);

  const toggleAIServices = useCallback(() => {
    setIsAIServicesOpen(prev => !prev);
  }, []);

  const toggleMicroSaas = useCallback(() => {
    setIsMicroSaasOpen(prev => !prev);
  }, []);

  const toggle5GServices = useCallback(() => {
    setIs5GServicesOpen(prev => !prev);
  }, []);

  const isActive = useCallback((path: string) => {
    return location.pathname === path;
  }, [location.pathname]);

  const services = useMemo(() => [
    {
      name: 'AI Services',
      href: '/ai-services',
      icon: Brain,
      description: 'Artificial Intelligence Solutions',
      children: [
        { name: 'AI Analytics', href: '/ai-analytics' },
        { name: 'AI Automation', href: '/ai-automation' },
        { name: 'AI Content Generation', href: '/ai-content-generation' },
        { name: 'AI Customer Service', href: '/ai-customer-service' },
        { name: 'AI Data Analytics', href: '/ai-data-analytics' },
        { name: 'AI Marketing', href: '/ai-marketing' },
        { name: 'AI Predictive Analytics', href: '/ai-predictive-analytics' },
        { name: 'AI Workflow Automation', href: '/ai-workflow-automation' }
      ]
    },
    {
      name: 'Micro SAAS',
      href: '/micro-saas',
      icon: Package,
      description: 'Ready-to-Use Software Solutions',
      children: [
        { name: 'Zion Analytics Pro', href: '/zion-analytics-pro' },
        { name: 'Zion Security Shield', href: '/zion-security-shield' },
        { name: 'Zion Cloud Vault', href: '/zion-cloud-vault' },
        { name: 'AI Email Analyzer', href: '/ai-powered-email-analyzer' },
        { name: 'Smart Inventory Optimizer', href: '/smart-inventory-optimizer' },
        { name: 'AI Customer Sentiment Tracker', href: '/ai-customer-sentiment-tracker' },
        { name: 'Smart Expense Categorizer', href: '/smart-expense-categorizer' }
      ]
    },
    {
      name: '5G Solutions',
      href: '/5g-solutions',
      icon: Network,
      description: 'Next-Generation Connectivity',
      children: [
        { name: '5G Data Analytics', href: '/5g-data-analytics' },
        { name: '5G Edge Computing', href: '/5g-edge-computing' },
        { name: '5G Implementation', href: '/5g-implementation' },
        { name: '5G Mobile Applications', href: '/5g-mobile-applications' },
        { name: '5G Network Infrastructure', href: '/5g-network-infrastructure' },
        { name: '5G Private Networks', href: '/5g-private-networks' },
        { name: '5G Smart City Solutions', href: '/5g-smart-city-solutions' },
        { name: '5G IoT Solutions', href: '/5g-iot-solutions' }
      ]
    },
    {
      name: 'IT Services',
      href: '/services',
      icon: Code,
      description: 'Comprehensive IT Solutions',
      children: [
        { name: 'Cloud Infrastructure', href: '/cloud-infrastructure' },
        { name: 'Cybersecurity Solutions', href: '/cybersecurity-solutions' },
        { name: 'Web Development', href: '/web-development' },
        { name: 'Mobile Development', href: '/mobile-development' },
        { name: 'Database Management', href: '/database-management' },
        { name: 'Custom Software', href: '/custom-software' },
        { name: 'Network Infrastructure', href: '/network-infrastructure' }
      ]
    }
  ], []);

  const mainNavItems = useMemo(() => [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/blog' }
  ], []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {mainNavItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-cyan-400'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-1 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200">
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              <div className="absolute top-full left-0 mt-2 w-96 bg-black/90 backdrop-blur-md rounded-xl border border-white/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-4">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="group flex items-start space-x-3 p-3 rounded-lg hover:bg-white/10 transition-colors duration-200"
                      >
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <service.icon className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <div className="text-white font-medium group-hover:text-cyan-300 transition-colors">
                            {service.name}
                          </div>
                          <div className="text-xs text-gray-400">
                            {service.description}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/contact"
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-semibold rounded-lg hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/90 backdrop-blur-md rounded-lg mt-2 border border-white/10">
              {mainNavItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'text-cyan-400 bg-cyan-500/10'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Services */}
              <div className="pt-2 border-t border-white/10">
                <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 px-3">
                  Services
                </div>
                {services.map((service) => (
                  <Link
                    key={service.name}
                    to={service.href}
                    className="flex items-center space-x-3 px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded-md transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <service.icon className="w-4 h-4" />
                    <span>{service.name}</span>
                  </Link>
                ))}
              </div>
              
              <div className="pt-2 border-t border-white/10">
                <Link
                  to="/contact"
                  className="block w-full text-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-semibold rounded-lg hover:from-cyan-400 hover:to-purple-400 transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
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
};

export default Navigation;