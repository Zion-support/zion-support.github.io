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
  Menu, 
  X,
  ChevronDown,
  ChevronRight
} from 'lucide-react';

interface NavigationProps {
  onSidebarToggle?: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onSidebarToggle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const toggleDropdown = useCallback((dropdown: string) => {
    setActiveDropdown(prev => prev === dropdown ? null : dropdown);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  }, []);

  const isActive = useCallback((path: string) => {
    return location.pathname === path;
  }, [location.pathname]);

  const navigationItems = useMemo(() => [
    {
      name: 'Home',
      href: '/',
      icon: <Star className="w-4 h-4" />
    },
    {
      name: 'AI Services',
      href: '/ai-services',
      icon: <Brain className="w-4 h-4" />,
      dropdown: [
        { name: 'AI Analytics', href: '/ai-analytics' },
        { name: 'Content Generation', href: '/ai-content-generation' },
        { name: 'Customer Support', href: '/ai-customer-support' },
        { name: 'Cybersecurity', href: '/ai-cybersecurity' },
        { name: 'Business Intelligence', href: '/ai-business-intelligence' },
        { name: 'Automation', href: '/ai-automation' },
        { name: 'Computer Vision', href: '/ai-computer-vision' },
        { name: 'Conversational AI', href: '/ai-conversational-ai' },
        { name: 'CRM', href: '/ai-crm' },
        { name: 'Customer Insights', href: '/ai-customer-insights' },
        { name: 'Data Visualization', href: '/ai-data-visualization' },
        { name: 'DevOps Automation', href: '/ai-devops-automation' },
        { name: 'Document Intelligence', href: '/ai-document-intelligence' },
        { name: 'Chatbot Builder', href: '/ai-chatbot-builder' },
        { name: 'Code Assistant', href: '/ai-code-assistant' },
        { name: 'Design Studio', href: '/ai-design-studio' }
      ]
    },
    {
      name: 'IT Services',
      href: '/services',
      icon: <Shield className="w-4 h-4" />,
      dropdown: [
        { name: 'Cloud Infrastructure', href: '/cloud-infrastructure' },
        { name: 'Cybersecurity Solutions', href: '/cybersecurity-solutions' },
        { name: 'Web Development', href: '/web-development' },
        { name: 'Mobile Development', href: '/mobile-development' },
        { name: 'Database Management', href: '/database-management' },
        { name: 'Custom Software', href: '/custom-software' },
        { name: 'Network Infrastructure', href: '/network-infrastructure' },
        { name: 'Cloud Migration', href: '/cloud-migration' },
        { name: 'IT Consulting', href: '/it-consulting' },
        { name: 'Network Security', href: '/network-security' },
        { name: 'System Integration', href: '/system-integration' },
        { name: 'IT Support', href: '/it-support' }
      ]
    },
    {
      name: '5G Solutions',
      href: '/5g-solutions',
      icon: <Globe className="w-4 h-4" />,
      dropdown: [
        { name: 'Data Analytics', href: '/5g-data-analytics' },
        { name: 'Edge Computing', href: '/5g-edge-computing' },
        { name: 'Implementation', href: '/5g-implementation' },
        { name: 'Mobile Applications', href: '/5g-mobile-applications' },
        { name: 'Network Infrastructure', href: '/5g-network-infrastructure' },
        { name: 'Private Networks', href: '/5g-private-networks' },
        { name: 'Smart City Solutions', href: '/5g-smart-city-solutions' },
        { name: 'IoT Solutions', href: '/5g-iot-solutions' }
      ]
    },
    {
      name: 'Micro SAAS',
      href: '/micro-saas',
      icon: <Zap className="w-4 h-4" />,
      dropdown: [
        { name: 'Zion Analytics Pro', href: '/zion-analytics-pro' },
        { name: 'Zion Security Shield', href: '/zion-security-shield' },
        { name: 'Zion Cloud Vault', href: '/zion-cloud-vault' },
        { name: 'Zion AI CRM Pro', href: '/zion-ai-crm-pro' },
        { name: 'Zion AI Marketing Automation Pro', href: '/zion-ai-marketing-automation-pro' },
        { name: 'Zion AI Project Manager Pro', href: '/zion-ai-project-manager-pro' },
        { name: 'AI Email Analyzer', href: '/ai-powered-email-analyzer' },
        { name: 'Smart Inventory Optimizer', href: '/smart-inventory-optimizer' },
        { name: 'AI Customer Sentiment Tracker', href: '/ai-customer-sentiment-tracker' },
        { name: 'Smart Expense Categorizer', href: '/smart-expense-categorizer' }
      ]
    },
    {
      name: 'About',
      href: '/about',
      icon: <Users className="w-4 h-4" />
    },
    {
      name: 'Contact',
      href: '/contact',
      icon: <Award className="w-4 h-4" />
    }
  ], []);

  return (
    <nav className="bg-black/20 backdrop-blur-sm border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-sm font-bold">Z</span>
              </div>
              <span className="text-xl font-bold text-white">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Zion Tech Group
                </span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.href}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'text-cyan-400 bg-cyan-500/20'
                      : 'text-gray-300 hover:text-cyan-400 hover:bg-white/10'
                  }`}
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.icon}
                  <span>{item.name}</span>
                  {item.dropdown && (
                    <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-black/90 backdrop-blur-sm border border-white/20 rounded-lg shadow-xl z-50">
                    <div className="py-2">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="flex items-center space-x-3 px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-white/10 transition-colors duration-200"
                          onClick={closeMenu}
                        >
                          <ChevronRight className="w-4 h-4" />
                          <span>{subItem.name}</span>
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
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center space-x-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Get Started</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={onSidebarToggle || toggleMenu}
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-white/10">
            <div className="py-4 space-y-2">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-200 ${
                      isActive(item.href)
                        ? 'text-cyan-400 bg-cyan-500/20'
                        : 'text-gray-300 hover:text-cyan-400 hover:bg-white/10'
                    }`}
                    onClick={closeMenu}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                    {item.dropdown && (
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          toggleDropdown(item.name);
                        }}
                        className="ml-auto"
                      >
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} />
                      </button>
                    )}
                  </Link>

                  {/* Mobile Dropdown */}
                  {item.dropdown && activeDropdown === item.name && (
                    <div className="ml-8 mt-2 space-y-1">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="flex items-center space-x-3 px-4 py-2 text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                          onClick={closeMenu}
                        >
                          <ChevronRight className="w-4 h-4" />
                          <span>{subItem.name}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {/* Mobile CTA */}
              <div className="pt-4 border-t border-white/10">
                <Link
                  to="/contact"
                  className="flex items-center justify-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                  onClick={closeMenu}
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Get Started</span>
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
