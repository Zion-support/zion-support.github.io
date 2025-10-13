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
  X
} from 'lucide-react';

interface NavigationProps {
  onSidebarToggle: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onSidebarToggle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAiServicesOpen, setIsAiServicesOpen] = useState(false);
  const [isItServicesOpen, setIsItServicesOpen] = useState(false);
  const [isMicroSaasOpen, setIsMicroSaasOpen] = useState(false);
  const [is5GServicesOpen, setIs5GServicesOpen] = useState(false);
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

  const closeAllMenus = useCallback(() => {
    setIsOpen(false);
    setIsAiServicesOpen(false);
    setIsMicroSaasOpen(false);
    setIsItServicesOpen(false);
    setIs5GServicesOpen(false);
  }, []);

  const navigationItems = useMemo(() => [
    {
      label: 'Home',
      href: '/',
      icon: <Star className="w-4 h-4" />
    },
    {
      label: 'AI Services',
      href: '/ai-services',
      icon: <Brain className="w-4 h-4" />,
      dropdown: [
        { label: 'AI Analytics', href: '/ai-analytics' },
        { label: 'AI Automation', href: '/ai-automation' },
        { label: 'AI Business Intelligence', href: '/ai-business-intelligence' },
        { label: 'AI Content Generation', href: '/ai-content-generation' },
        { label: 'AI Customer Service', href: '/ai-customer-service' },
        { label: 'AI Data Analytics', href: '/ai-data-analytics' },
        { label: 'AI Email Automation', href: '/ai-email-automation' },
        { label: 'AI Fraud Detection', href: '/ai-fraud-detection' },
        { label: 'AI Healthcare', href: '/ai-healthcare' },
        { label: 'AI Marketing', href: '/ai-marketing' },
        { label: 'AI Predictive Analytics', href: '/ai-predictive-analytics' },
        { label: 'AI Project Management', href: '/ai-project-management' },
        { label: 'AI Recommendation Engine', href: '/ai-recommendation-engine' },
        { label: 'AI Sales Automation', href: '/ai-sales-automation' },
        { label: 'AI Workflow Automation', href: '/ai-workflow-automation' }
      ]
    },
    {
      label: 'IT Services',
      href: '/services',
      icon: <Shield className="w-4 h-4" />,
      dropdown: [
        { label: 'Cloud Infrastructure', href: '/cloud-infrastructure' },
        { label: 'Cybersecurity Solutions', href: '/cybersecurity-solutions' },
        { label: 'Web Development', href: '/web-development' },
        { label: 'Mobile Development', href: '/mobile-development' },
        { label: 'Database Management', href: '/database-management' },
        { label: 'Custom Software', href: '/custom-software' },
        { label: 'Network Infrastructure', href: '/network-infrastructure' }
      ]
    },
    {
      label: 'Micro SAAS',
      href: '/micro-saas',
      icon: <Zap className="w-4 h-4" />,
      dropdown: [
        { label: 'Zion Analytics Pro', href: '/zion-analytics-pro' },
        { label: 'Zion Security Shield', href: '/zion-security-shield' },
        { label: 'Zion Cloud Vault', href: '/zion-cloud-vault' },
        { label: 'Zion Content Studio', href: '/zion-content-studio' },
        { label: 'Zion AI Email Analyzer', href: '/zion-ai-email-analyzer' },
        { label: 'Zion AI Customer Insights', href: '/zion-ai-customer-insights' },
        { label: 'Zion Smart Inventory Optimizer', href: '/zion-smart-inventory-optimizer' },
        { label: 'Zion AI Customer Sentiment Tracker', href: '/zion-ai-customer-sentiment-tracker' },
        { label: 'Zion Smart Expense Categorizer', href: '/zion-smart-expense-categorizer' },
        { label: 'Zion AI Voice Assistant Pro', href: '/zion-ai-voice-assistant-pro' },
        { label: 'Zion AI Code Reviewer', href: '/zion-ai-code-reviewer' },
        { label: 'Zion AI Social Media Manager', href: '/zion-ai-social-media-manager' },
        { label: 'Zion AI Contract Analyzer', href: '/zion-ai-contract-analyzer' },
        { label: 'Zion AI Performance Optimizer', href: '/zion-ai-performance-optimizer' },
        { label: 'Zion AI Customer Churn Predictor', href: '/zion-ai-customer-churn-predictor' },
        { label: 'Zion AI Supply Chain Optimizer', href: '/zion-ai-supply-chain-optimizer' },
        { label: 'Zion AI Financial Forecaster', href: '/zion-ai-financial-forecaster' },
        { label: 'Zion AI Content Moderator', href: '/zion-ai-content-moderator' },
        { label: 'Zion AI Translator Pro', href: '/zion-ai-translator-pro' },
        { label: 'Zion AI Data Cleaner', href: '/zion-ai-data-cleaner' },
        { label: 'Zion AI Task Scheduler', href: '/zion-ai-task-scheduler' },
        { label: 'Zion AI Customer Support Pro', href: '/zion-ai-customer-support-pro' }
      ]
    },
    {
      label: '5G Solutions',
      href: '/5g-solutions',
      icon: <Globe className="w-4 h-4" />,
      dropdown: [
        { label: '5G Data Analytics', href: '/5g-data-analytics' },
        { label: '5G Edge Computing', href: '/5g-edge-computing' },
        { label: '5G Implementation', href: '/5g-implementation' },
        { label: '5G Mobile Applications', href: '/5g-mobile-applications' },
        { label: '5G Network Infrastructure', href: '/5g-network-infrastructure' },
        { label: '5G Private Networks', href: '/5g-private-networks' },
        { label: '5G Smart City Solutions', href: '/5g-smart-city-solutions' },
        { label: '5G IoT Solutions', href: '/5g-iot-solutions' }
      ]
    },
    {
      label: 'About',
      href: '/about',
      icon: <Users className="w-4 h-4" />
    },
    {
      label: 'Contact',
      href: '/contact',
      icon: <Mail className="w-4 h-4" />
    }
  ], []);

  const isActive = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  return (
    <nav className="bg-black bg-opacity-90 backdrop-blur-md border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 text-white hover:text-blue-400 transition-colors">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.label} className="relative group">
                <Link
                  to={item.href}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? 'text-blue-400 bg-blue-900 bg-opacity-50'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                  {item.dropdown && <ChevronDown className="w-4 h-4" />}
                </Link>

                {/* Dropdown Menu */}
                {item.dropdown && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-gray-900 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-2">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.label}
                          to={dropdownItem.href}
                          className={`flex items-center space-x-2 px-4 py-2 text-sm hover:bg-gray-800 transition-colors ${
                            isActive(dropdownItem.href) ? 'text-blue-400' : 'text-gray-300'
                          }`}
                        >
                          <span>{dropdownItem.label}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-4 py-2 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center space-x-2"
            >
              <Monitor className="w-4 h-4" />
              <span>Demo</span>
            </Link>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-cyan-500/25"
            >
              <Sparkles className="w-4 h-4" />
              <span>Get Started</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={onSidebarToggle}
              className="text-gray-300 hover:text-white p-2"
              aria-label="Toggle menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
