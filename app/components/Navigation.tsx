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
  Network,
  FileText,
  Clock,
  Video,
  FileText as Invoice,
  Eye,
  Mail as Email,
  Package2,
  MessageSquare,
  CreditCard,
  Mic,
  GitBranch,
  Share2,
  FileCheck,
  Gauge,
  TrendingDown,
  Truck,
  Calculator,
  Shield as Moderation,
  Languages,
  Database as DataClean,
  Calendar,
  Headphones
} from 'lucide-react';
import FuturisticButton from './FuturisticButton';

interface NavigationProps {
  onSidebarToggle: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onSidebarToggle }) => {
  const [isAiServicesOpen, setIsAiServicesOpen] = useState(false);
  const [isItServicesOpen, setIsItServicesOpen] = useState(false);
  const [isMicroSaasOpen, setIsMicroSaasOpen] = useState(false);
  const [is5GServicesOpen, setIs5GServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleAiServices = useCallback(() => {
    setIsAiServicesOpen(!isAiServicesOpen);
  }, [isAiServicesOpen]);

  const toggleMicroSaas = useCallback(() => {
    setIsMicroSaasOpen(!isMicroSaasOpen);
  }, [isMicroSaasOpen]);

  const toggleItServices = useCallback(() => {
    setIsItServicesOpen(!isItServicesOpen);
  }, [isItServicesOpen]);

  const toggle5GServices = useCallback(() => {
    setIs5GServicesOpen(!is5GServicesOpen);
  }, [is5GServicesOpen]);

  const isActive = useCallback((path: string) => {
    return location.pathname === path;
  }, [location.pathname]);

  const navigationItems = useMemo(() => [
    {
      name: 'Home',
      path: '/',
      icon: <Globe className="w-4 h-4" />
    },
    {
      name: 'About',
      path: '/about',
      icon: <Users className="w-4 h-4" />
    },
    {
      name: 'Services',
      path: '/services',
      icon: <Code className="w-4 h-4" />
    },
    {
      name: 'Contact',
      path: '/contact',
      icon: <Mail className="w-4 h-4" />
    }
  ], []);

  const aiServices = useMemo(() => [
    { name: 'AI Analytics', path: '/ai-analytics', icon: <BarChart3 className="w-4 h-4" /> },
    { name: 'AI Automation', path: '/ai-automation', icon: <Cpu className="w-4 h-4" /> },
    { name: 'AI Business Intelligence', path: '/ai-business-intelligence', icon: <Brain className="w-4 h-4" /> },
    { name: 'AI Content Generation', path: '/ai-content-generation', icon: <Sparkles className="w-4 h-4" /> },
    { name: 'AI Customer Service', path: '/ai-customer-service', icon: <Users className="w-4 h-4" /> },
    { name: 'AI Data Analytics', path: '/ai-data-analytics', icon: <Database className="w-4 h-4" /> },
    { name: 'AI Email Automation', path: '/ai-email-automation', icon: <Mail className="w-4 h-4" /> },
    { name: 'AI Fraud Detection', path: '/ai-fraud-detection', icon: <Shield className="w-4 h-4" /> },
    { name: 'AI Healthcare', path: '/ai-healthcare', icon: <Heart className="w-4 h-4" /> },
    { name: 'AI Marketing', path: '/ai-marketing', icon: <TrendingUp className="w-4 h-4" /> },
    { name: 'AI Predictive Analytics', path: '/ai-predictive-analytics', icon: <Brain className="w-4 h-4" /> },
    { name: 'AI Project Management', path: '/ai-project-management', icon: <Calendar className="w-4 h-4" /> },
    { name: 'AI Recommendation Engine', path: '/ai-recommendation-engine', icon: <Star className="w-4 h-4" /> },
    { name: 'AI Sales Automation', path: '/ai-sales-automation', icon: <TrendingUp className="w-4 h-4" /> },
    { name: 'AI Workflow Automation', path: '/ai-workflow-automation', icon: <Zap className="w-4 h-4" /> }
  ], []);

  const itServices = useMemo(() => [
    { name: 'Cloud Infrastructure', path: '/cloud-infrastructure', icon: <Cloud className="w-4 h-4" /> },
    { name: 'Cybersecurity Solutions', path: '/cybersecurity-solutions', icon: <Shield className="w-4 h-4" /> },
    { name: 'Web Development', path: '/web-development', icon: <Code className="w-4 h-4" /> },
    { name: 'Mobile Development', path: '/mobile-development', icon: <Smartphone className="w-4 h-4" /> },
    { name: 'Database Management', path: '/database-management', icon: <Database className="w-4 h-4" /> },
    { name: 'Custom Software', path: '/custom-software', icon: <Monitor className="w-4 h-4" /> },
    { name: 'Network Infrastructure', path: '/network-infrastructure', icon: <Network className="w-4 h-4" /> }
  ], []);

  const microSaasServices = useMemo(() => [
    { name: 'Zion Analytics Pro', path: '/zion-analytics-pro', icon: <BarChart3 className="w-4 h-4" /> },
    { name: 'Zion Security Shield', path: '/zion-security-shield', icon: <Shield className="w-4 h-4" /> },
    { name: 'Zion Cloud Vault', path: '/zion-cloud-vault', icon: <Cloud className="w-4 h-4" /> },
    { name: 'Zion Content Studio', path: '/zion-content-studio', icon: <Sparkles className="w-4 h-4" /> },
    { name: 'Zion AI Video Generator', path: '/zion-ai-video-generator', icon: <Video className="w-4 h-4" /> },
    { name: 'Zion AI Invoice Generator', path: '/zion-ai-invoice-generator', icon: <Invoice className="w-4 h-4" /> },
    { name: 'Zion AI Customer Insights', path: '/zion-ai-customer-insights', icon: <Eye className="w-4 h-4" /> },
    { name: 'Zion AI Email Analyzer', path: '/zion-ai-email-analyzer', icon: <Email className="w-4 h-4" /> },
    { name: 'Zion Smart Inventory Optimizer', path: '/zion-smart-inventory-optimizer', icon: <Package2 className="w-4 h-4" /> },
    { name: 'Zion AI Customer Sentiment Tracker', path: '/zion-ai-customer-sentiment-tracker', icon: <MessageSquare className="w-4 h-4" /> },
    { name: 'Zion Smart Expense Categorizer', path: '/zion-smart-expense-categorizer', icon: <CreditCard className="w-4 h-4" /> },
    { name: 'Zion AI Voice Assistant Pro', path: '/zion-ai-voice-assistant-pro', icon: <Mic className="w-4 h-4" /> },
    { name: 'Zion AI Code Reviewer', path: '/zion-ai-code-reviewer', icon: <GitBranch className="w-4 h-4" /> },
    { name: 'Zion AI Social Media Manager', path: '/zion-ai-social-media-manager', icon: <Share2 className="w-4 h-4" /> },
    { name: 'Zion AI Contract Analyzer', path: '/zion-ai-contract-analyzer', icon: <FileCheck className="w-4 h-4" /> },
    { name: 'Zion AI Performance Optimizer', path: '/zion-ai-performance-optimizer', icon: <Gauge className="w-4 h-4" /> },
    { name: 'Zion AI Customer Churn Predictor', path: '/zion-ai-customer-churn-predictor', icon: <TrendingDown className="w-4 h-4" /> },
    { name: 'Zion AI Supply Chain Optimizer', path: '/zion-ai-supply-chain-optimizer', icon: <Truck className="w-4 h-4" /> },
    { name: 'Zion AI Financial Forecaster', path: '/zion-ai-financial-forecaster', icon: <Calculator className="w-4 h-4" /> },
    { name: 'Zion AI Content Moderator', path: '/zion-ai-content-moderator', icon: <Moderation className="w-4 h-4" /> },
    { name: 'Zion AI Translator Pro', path: '/zion-ai-translator-pro', icon: <Languages className="w-4 h-4" /> },
    { name: 'Zion AI Data Cleaner', path: '/zion-ai-data-cleaner', icon: <DataClean className="w-4 h-4" /> },
    { name: 'Zion AI Task Scheduler', path: '/zion-ai-task-scheduler', icon: <Calendar className="w-4 h-4" /> },
    { name: 'Zion AI Customer Support Pro', path: '/zion-ai-customer-support-pro', icon: <Headphones className="w-4 h-4" /> }
  ], []);

  const fiveGServices = useMemo(() => [
    { name: '5G Data Analytics', path: '/5g-data-analytics', icon: <BarChart3 className="w-4 h-4" /> },
    { name: '5G Edge Computing', path: '/5g-edge-computing', icon: <Cpu className="w-4 h-4" /> },
    { name: '5G Implementation', path: '/5g-implementation', icon: <Zap className="w-4 h-4" /> },
    { name: '5G Mobile Applications', path: '/5g-mobile-applications', icon: <Smartphone className="w-4 h-4" /> },
    { name: '5G Network Infrastructure', path: '/5g-network-infrastructure', icon: <Network className="w-4 h-4" /> },
    { name: '5G Private Networks', path: '/5g-private-networks', icon: <Shield className="w-4 h-4" /> },
    { name: '5G Smart City Solutions', path: '/5g-smart-city-solutions', icon: <Globe className="w-4 h-4" /> },
    { name: '5G IoT Solutions', path: '/5g-iot-solutions', icon: <Database className="w-4 h-4" /> }
  ], []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              to="/"
              className="flex items-center space-x-2 text-white hover:text-cyan-400 transition-colors"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors py-2 ${
                  isActive(item.path) ? 'text-cyan-400' : ''
                }`}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            ))}

            {/* AI Services Dropdown */}
            <div className="relative group">
              <button
                onClick={toggleAiServices}
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors py-2"
              >
                <Brain className="w-4 h-4" />
                <span>AI Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isAiServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isAiServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800/95 backdrop-blur-sm rounded-lg border border-white/10 shadow-xl z-50">
                  <div className="py-2">
                    {aiServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.path}
                        className="flex items-center space-x-3 px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-cyan-500/10 transition-colors duration-200"
                        onClick={() => setIsAiServicesOpen(false)}
                      >
                        {service.icon}
                        <span>{service.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* IT Services Dropdown */}
            <div className="relative group">
              <button
                onClick={toggleItServices}
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors py-2"
              >
                <Code className="w-4 h-4" />
                <span>IT Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isItServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isItServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800/95 backdrop-blur-sm rounded-lg border border-white/10 shadow-xl z-50">
                  <div className="py-2">
                    {itServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.path}
                        className="flex items-center space-x-3 px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-cyan-500/10 transition-colors duration-200"
                        onClick={() => setIsItServicesOpen(false)}
                      >
                        {service.icon}
                        <span>{service.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Micro SAAS Dropdown */}
            <div className="relative group">
              <button
                onClick={toggleMicroSaas}
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors py-2"
              >
                <Package className="w-4 h-4" />
                <span>Micro SAAS</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isMicroSaasOpen ? 'rotate-180' : ''}`} />
              </button>
              {isMicroSaasOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-sm rounded-lg border border-white/10 shadow-xl z-50 max-h-96 overflow-y-auto">
                  <div className="py-2">
                    {microSaasServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.path}
                        className="flex items-center space-x-3 px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-cyan-500/10 transition-colors duration-200"
                        onClick={() => setIsMicroSaasOpen(false)}
                      >
                        {service.icon}
                        <span>{service.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 5G Solutions Dropdown */}
            <div className="relative group">
              <button
                onClick={toggle5GServices}
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors py-2"
              >
                <Zap className="w-4 h-4" />
                <span>5G Solutions</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${is5GServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {is5GServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800/95 backdrop-blur-sm rounded-lg border border-white/10 shadow-xl z-50">
                  <div className="py-2">
                    {fiveGServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.path}
                        className="flex items-center space-x-3 px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-cyan-500/10 transition-colors duration-200"
                        onClick={() => setIs5GServicesOpen(false)}
                      >
                        {service.icon}
                        <span>{service.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
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
              icon={<Sparkles className="w-4 h-4" />}
            >
              Get Started
            </FuturisticButton>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={onSidebarToggle}
              className="p-2 text-gray-300 hover:text-cyan-400 transition-colors"
              aria-label="Toggle sidebar"
            >
              <SidebarIcon className="w-6 h-6" />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-300 hover:text-cyan-400 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-white/10 mt-4 pt-4 pb-4">
          <div className="space-y-2">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors py-2 px-3 rounded-lg hover:bg-white/5 ${
                  isActive(item.path) ? 'text-cyan-400' : ''
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            ))}
            
            {/* Mobile AI Services */}
            <div className="pt-2">
              <button
                onClick={toggleAiServices}
                className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 flex items-center justify-between"
              >
                <div className="flex items-center space-x-2">
                  <Brain className="w-4 h-4" />
                  <span>AI Services</span>
                </div>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isAiServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isAiServicesOpen && (
                <div className="pl-6 space-y-1">
                  {aiServices.map((service) => (
                    <Link
                      key={service.name}
                      to={service.path}
                      className="block px-3 py-2 rounded-md text-sm text-gray-300 hover:text-white hover:bg-cyan-500/10 transition-colors duration-200 flex items-center space-x-2"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setIsAiServicesOpen(false);
                      }}
                    >
                      {service.icon}
                      <span>{service.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile IT Services */}
            <div className="pt-2">
              <button
                onClick={toggleItServices}
                className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 flex items-center justify-between"
              >
                <div className="flex items-center space-x-2">
                  <Code className="w-4 h-4" />
                  <span>IT Services</span>
                </div>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isItServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isItServicesOpen && (
                <div className="pl-6 space-y-1">
                  {itServices.map((service) => (
                    <Link
                      key={service.name}
                      to={service.path}
                      className="block px-3 py-2 rounded-md text-sm text-gray-300 hover:text-white hover:bg-cyan-500/10 transition-colors duration-200 flex items-center space-x-2"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setIsItServicesOpen(false);
                      }}
                    >
                      {service.icon}
                      <span>{service.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Micro SAAS */}
            <div className="pt-2">
              <button
                onClick={toggleMicroSaas}
                className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 flex items-center justify-between"
              >
                <div className="flex items-center space-x-2">
                  <Package className="w-4 h-4" />
                  <span>Micro SAAS</span>
                </div>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isMicroSaasOpen ? 'rotate-180' : ''}`} />
              </button>
              {isMicroSaasOpen && (
                <div className="pl-6 space-y-1 max-h-64 overflow-y-auto">
                  {microSaasServices.map((service) => (
                    <Link
                      key={service.name}
                      to={service.path}
                      className="block px-3 py-2 rounded-md text-sm text-gray-300 hover:text-white hover:bg-cyan-500/10 transition-colors duration-200 flex items-center space-x-2"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setIsMicroSaasOpen(false);
                      }}
                    >
                      {service.icon}
                      <span>{service.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile 5G Solutions */}
            <div className="pt-2">
              <button
                onClick={toggle5GServices}
                className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 flex items-center justify-between"
              >
                <div className="flex items-center space-x-2">
                  <Zap className="w-4 h-4" />
                  <span>5G Solutions</span>
                </div>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${is5GServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {is5GServicesOpen && (
                <div className="pl-6 space-y-1">
                  {fiveGServices.map((service) => (
                    <Link
                      key={service.name}
                      to={service.path}
                      className="block px-3 py-2 rounded-md text-sm text-gray-300 hover:text-white hover:bg-cyan-500/10 transition-colors duration-200 flex items-center space-x-2"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setIs5GServicesOpen(false);
                      }}
                    >
                      {service.icon}
                      <span>{service.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
