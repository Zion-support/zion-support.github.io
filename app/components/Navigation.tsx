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
  Clock
} from 'lucide-react';
import FuturisticButton from './FuturisticButton';

interface NavigationProps {
  onSidebarToggle: () => void;
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

  const closeDropdowns = useCallback(() => {
    setActiveDropdown(null);
  }, []);

  const isActive = useCallback((path: string) => {
    return location.pathname === path;
  }, [location.pathname]);

  const navigationItems = useMemo(() => [
    {
      name: 'Home',
      path: '/',
      icon: <Star className="w-4 h-4" />
    },
    {
      name: 'About',
      path: '/about',
      icon: <Users className="w-4 h-4" />
    },
    {
      name: 'Services',
      path: '/services',
      icon: <Award className="w-4 h-4" />,
      hasDropdown: true,
      dropdownItems: [
        {
          name: 'AI Services',
          icon: <Brain className="w-4 h-4" />,
          items: [
            { name: 'AI Analytics', path: '/ai-analytics', icon: <BarChart3 className="w-4 h-4" /> },
            { name: 'AI Automation', path: '/ai-automation', icon: <Zap className="w-4 h-4" /> },
            { name: 'AI Business Intelligence', path: '/ai-business-intelligence', icon: <Brain className="w-4 h-4" /> },
            { name: 'AI Content Generation', path: '/ai-content-generation', icon: <Code className="w-4 h-4" /> },
            { name: 'AI Customer Service', path: '/ai-customer-service', icon: <Users className="w-4 h-4" /> },
            { name: 'AI Data Analytics', path: '/ai-data-analytics', icon: <Database className="w-4 h-4" /> },
            { name: 'AI Email Automation', path: '/ai-email-automation', icon: <Mail className="w-4 h-4" /> },
            { name: 'AI Fraud Detection', path: '/ai-fraud-detection', icon: <Shield className="w-4 h-4" /> },
            { name: 'AI Healthcare', path: '/ai-healthcare', icon: <Heart className="w-4 h-4" /> },
            { name: 'AI Marketing', path: '/ai-marketing', icon: <TrendingUp className="w-4 h-4" /> },
            { name: 'AI Predictive Analytics', path: '/ai-predictive-analytics', icon: <BarChart3 className="w-4 h-4" /> },
            { name: 'AI Project Management', path: '/ai-project-management', icon: <Award className="w-4 h-4" /> },
            { name: 'AI Recommendation Engine', path: '/ai-recommendation-engine', icon: <Star className="w-4 h-4" /> },
            { name: 'AI Sales Automation', path: '/ai-sales-automation', icon: <TrendingUp className="w-4 h-4" /> },
            { name: 'AI Workflow Automation', path: '/ai-workflow-automation', icon: <Zap className="w-4 h-4" /> }
          ]
        },
        {
          name: 'IT Services',
          icon: <Monitor className="w-4 h-4" />,
          items: [
            { name: 'Cloud Infrastructure', path: '/cloud-infrastructure', icon: <Cloud className="w-4 h-4" /> },
            { name: 'Cybersecurity Solutions', path: '/cybersecurity-solutions', icon: <Shield className="w-4 h-4" /> },
            { name: 'Web Development', path: '/web-development', icon: <Globe className="w-4 h-4" /> },
            { name: 'Mobile Development', path: '/mobile-development', icon: <Smartphone className="w-4 h-4" /> },
            { name: 'Database Management', path: '/database-management', icon: <Database className="w-4 h-4" /> },
            { name: 'Custom Software', path: '/custom-software', icon: <Code className="w-4 h-4" /> },
            { name: 'Network Infrastructure', path: '/network-infrastructure', icon: <Network className="w-4 h-4" /> }
          ]
        },
        {
          name: '5G Solutions',
          icon: <Network className="w-4 h-4" />,
          items: [
            { name: '5G Solutions', path: '/5g-solutions', icon: <Network className="w-4 h-4" /> },
            { name: '5G Data Analytics', path: '/5g-data-analytics', icon: <BarChart3 className="w-4 h-4" /> },
            { name: '5G Edge Computing', path: '/5g-edge-computing', icon: <Cloud className="w-4 h-4" /> },
            { name: '5G Implementation', path: '/5g-implementation', icon: <Zap className="w-4 h-4" /> },
            { name: '5G Mobile Applications', path: '/5g-mobile-applications', icon: <Smartphone className="w-4 h-4" /> },
            { name: '5G Network Infrastructure', path: '/5g-network-infrastructure', icon: <Cpu className="w-4 h-4" /> },
            { name: '5G Private Networks', path: '/5g-private-networks', icon: <Shield className="w-4 h-4" /> },
            { name: '5G Smart City Solutions', path: '/5g-smart-city-solutions', icon: <Globe className="w-4 h-4" /> },
            { name: '5G IoT Solutions', path: '/5g-iot-solutions', icon: <Smartphone className="w-4 h-4" /> }
          ]
        }
      ]
    },
    {
      name: 'Micro SAAS',
      path: '/micro-saas-services',
      icon: <Package className="w-4 h-4" />,
      hasDropdown: true,
      dropdownItems: [
        {
          name: 'AI-Powered Tools',
          icon: <Brain className="w-4 h-4" />,
          items: [
            { name: 'Zion Analytics Pro', path: '/zion-analytics-pro', icon: <BarChart3 className="w-4 h-4" /> },
            { name: 'Zion Security Shield', path: '/zion-security-shield', icon: <Shield className="w-4 h-4" /> },
            { name: 'Zion Cloud Vault', path: '/zion-cloud-vault', icon: <Cloud className="w-4 h-4" /> },
            { name: 'Zion Content Studio', path: '/zion-content-studio', icon: <FileText className="w-4 h-4" /> },
            { name: 'AI Email Analyzer', path: '/ai-powered-email-analyzer', icon: <Mail className="w-4 h-4" /> },
            { name: 'Customer Sentiment Tracker', path: '/ai-customer-sentiment-tracker', icon: <Heart className="w-4 h-4" /> },
            { name: 'Smart Expense Categorizer', path: '/smart-expense-categorizer', icon: <Receipt className="w-4 h-4" /> },
            { name: 'Smart Inventory Optimizer', path: '/smart-inventory-optimizer', icon: <Package className="w-4 h-4" /> }
          ]
        },
        {
          name: 'Business Tools',
          icon: <BarChart3 className="w-4 h-4" />,
          items: [
            { name: 'Project Management Tool', path: '/project-management-tool', icon: <Award className="w-4 h-4" /> },
            { name: 'Customer Relationship Manager', path: '/customer-relationship-manager', icon: <Users className="w-4 h-4" /> },
            { name: 'Inventory Management System', path: '/inventory-management-system', icon: <Package className="w-4 h-4" /> },
            { name: 'Financial Reporting Tool', path: '/financial-reporting-tool', icon: <BarChart3 className="w-4 h-4" /> },
            { name: 'Employee Time Tracker', path: '/employee-time-tracker', icon: <Clock className="w-4 h-4" /> },
            { name: 'Social Media Scheduler', path: '/social-media-scheduler', icon: <Globe className="w-4 h-4" /> },
            { name: 'Email Marketing Platform', path: '/email-marketing-platform', icon: <Mail className="w-4 h-4" /> },
            { name: 'Website Analytics Tool', path: '/website-analytics-tool', icon: <BarChart3 className="w-4 h-4" /> },
            { name: 'Task Automation Workflow', path: '/task-automation-workflow', icon: <Zap className="w-4 h-4" /> }
          ]
        }
      ]
    },
    {
      name: 'Blog',
      path: '/blog',
      icon: <Code className="w-4 h-4" />
    },
    {
      name: 'Contact',
      path: '/contact',
      icon: <Phone className="w-4 h-4" />
    }
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
              <div key={item.name} className="relative group">
                <Link
                  to={item.path}
                  className={`flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors py-2 ${
                    isActive(item.path) ? 'text-cyan-400' : ''
                  }`}
                  onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                  onMouseLeave={() => item.hasDropdown && setActiveDropdown(null)}
                >
                  {item.icon}
                  <span>{item.name}</span>
                  {item.hasDropdown && (
                    <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                  )}
                </Link>
                
                {/* Dropdown Menu */}
                {item.hasDropdown && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-96 bg-slate-800/95 backdrop-blur-sm rounded-lg border border-white/10 shadow-xl z-50">
                    <div className="p-4">
                      {item.dropdownItems?.map((section, sectionIndex) => (
                        <div key={sectionIndex} className="mb-4 last:mb-0">
                          <div className="flex items-center space-x-2 mb-2 text-cyan-400 font-semibold">
                            <span>{section.icon}</span>
                            <span>{section.name}</span>
                          </div>
                          <div className="grid grid-cols-1 gap-1">
                            {section.items?.map((subItem, subIndex) => (
                              <Link
                                key={subIndex}
                                to={subItem.path}
                                className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-white/5 rounded-md transition-all duration-300"
                                onClick={closeDropdowns}
                              >
                                <span>{subItem.icon}</span>
                                <span>{subItem.name}</span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
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
              onClick={toggleMenu}
              className="p-2 text-gray-300 hover:text-cyan-400 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-white/10 mt-4 pt-4 pb-4">
            <div className="space-y-2">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.path}
                    className={`flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors py-2 px-3 rounded-lg hover:bg-white/5 ${
                      isActive(item.path) ? 'text-cyan-400' : ''
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </Link>
                  {item.hasDropdown && (
                    <div className="ml-6 space-y-1">
                      {item.dropdownItems?.map((section) => (
                        <div key={section.name} className="mb-2">
                          <div className="text-sm font-semibold text-cyan-400 mb-1">{section.name}</div>
                          {section.items?.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.path}
                              className="block text-sm text-gray-400 hover:text-cyan-400 transition-colors py-1 px-3 rounded-lg hover:bg-white/5"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {/* Mobile CTA Buttons */}
            <div className="mt-6 space-y-2">
              <FuturisticButton
                href="/demo"
                variant="outline"
                size="sm"
                icon={<Monitor className="w-4 h-4" />}
                className="w-full"
              >
                Demo
              </FuturisticButton>
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="sm"
                icon={<Sparkles className="w-4 h-4" />}
                className="w-full"
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