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
  Target,
  DollarSign
} from 'lucide-react';

interface NavigationEnhancedProps {
  onSidebarToggle: () => void;
}

const NavigationEnhanced: React.FC<NavigationEnhancedProps> = ({ onSidebarToggle }) => {
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
      icon: <Globe className="w-4 h-4" />
    },
    {
      name: 'About',
      path: '/about',
      icon: <Users className="w-4 h-4" />
    },
    {
      name: 'AI Services',
      path: '/ai-services',
      icon: <Brain className="w-4 h-4" />,
      hasDropdown: true,
      dropdownItems: [
        {
          name: 'AI Analytics',
          path: '/ai-analytics',
          icon: <BarChart3 className="w-4 h-4" />,
          description: 'Advanced AI-powered analytics'
        },
        {
          name: 'AI Automation',
          path: '/ai-automation',
          icon: <Zap className="w-4 h-4" />,
          description: 'Intelligent process automation'
        },
        {
          name: 'AI Content Generation',
          path: '/ai-content-generation',
          icon: <Code className="w-4 h-4" />,
          description: 'AI-powered content creation'
        },
        {
          name: 'AI Customer Service',
          path: '/ai-customer-service',
          icon: <Users className="w-4 h-4" />,
          description: 'Smart customer support'
        },
        {
          name: 'AI Data Analytics',
          path: '/ai-data-analytics',
          icon: <Database className="w-4 h-4" />,
          description: 'Data insights with AI'
        },
        {
          name: 'AI Email Automation',
          path: '/ai-email-automation',
          icon: <Mail className="w-4 h-4" />,
          description: 'Automated email campaigns'
        },
        {
          name: 'AI Fraud Detection',
          path: '/ai-fraud-detection',
          icon: <Shield className="w-4 h-4" />,
          description: 'Advanced fraud prevention'
        },
        {
          name: 'AI Healthcare',
          path: '/ai-healthcare',
          icon: <Heart className="w-4 h-4" />,
          description: 'Healthcare AI solutions'
        },
        {
          name: 'AI Marketing',
          path: '/ai-marketing',
          icon: <TrendingUp className="w-4 h-4" />,
          description: 'AI-driven marketing'
        },
        {
          name: 'AI Predictive Analytics',
          path: '/ai-predictive-analytics',
          icon: <Target className="w-4 h-4" />,
          description: 'Predict future trends'
        },
        {
          name: 'AI Project Management',
          path: '/ai-project-management',
          icon: <Award className="w-4 h-4" />,
          description: 'Smart project management'
        },
        {
          name: 'AI Recommendation Engine',
          path: '/ai-recommendation-engine',
          icon: <Star className="w-4 h-4" />,
          description: 'Personalized recommendations'
        },
        {
          name: 'AI Sales Automation',
          path: '/ai-sales-automation',
          icon: <DollarSign className="w-4 h-4" />,
          description: 'Automated sales processes'
        },
        {
          name: 'AI Workflow Automation',
          path: '/ai-workflow-automation',
          icon: <Zap className="w-4 h-4" />,
          description: 'Streamline workflows'
        }
      ]
    },
    {
      name: 'IT Services',
      path: '/it-services',
      icon: <Monitor className="w-4 h-4" />,
      hasDropdown: true,
      dropdownItems: [
        {
          name: 'Cloud Infrastructure',
          path: '/cloud-infrastructure',
          icon: <Cloud className="w-4 h-4" />,
          description: 'Scalable cloud solutions'
        },
        {
          name: 'Cybersecurity Solutions',
          path: '/cybersecurity-solutions',
          icon: <Shield className="w-4 h-4" />,
          description: 'Advanced security protection'
        },
        {
          name: 'Web Development',
          path: '/web-development',
          icon: <Globe className="w-4 h-4" />,
          description: 'Modern web applications'
        },
        {
          name: 'Mobile Development',
          path: '/mobile-development',
          icon: <Smartphone className="w-4 h-4" />,
          description: 'Native mobile apps'
        },
        {
          name: 'Database Management',
          path: '/database-management',
          icon: <Database className="w-4 h-4" />,
          description: 'Database optimization'
        },
        {
          name: 'Custom Software',
          path: '/custom-software',
          icon: <Code className="w-4 h-4" />,
          description: 'Tailored software solutions'
        },
        {
          name: 'Network Infrastructure',
          path: '/network-infrastructure',
          icon: <Network className="w-4 h-4" />,
          description: 'Robust network systems'
        }
      ]
    },
    {
      name: 'Micro SAAS',
      path: '/micro-saas',
      icon: <Package className="w-4 h-4" />,
      hasDropdown: true,
      dropdownItems: [
        {
          name: 'AI Email Analyzer',
          path: '/ai-powered-email-analyzer',
          icon: <Mail className="w-4 h-4" />,
          description: 'Smart email insights'
        },
        {
          name: 'Smart Inventory Optimizer',
          path: '/smart-inventory-optimizer',
          icon: <Package className="w-4 h-4" />,
          description: 'AI inventory management'
        },
        {
          name: 'Customer Sentiment Tracker',
          path: '/ai-customer-sentiment-tracker',
          icon: <Heart className="w-4 h-4" />,
          description: 'Real-time sentiment analysis'
        },
        {
          name: 'Smart Expense Categorizer',
          path: '/smart-expense-categorizer',
          icon: <Receipt className="w-4 h-4" />,
          description: 'Automated expense tracking'
        },
        {
          name: 'Zion Analytics Pro',
          path: '/zion-analytics-pro',
          icon: <BarChart3 className="w-4 h-4" />,
          description: 'Advanced business analytics'
        },
        {
          name: 'Zion Security Shield',
          path: '/zion-security-shield',
          icon: <Shield className="w-4 h-4" />,
          description: 'Enterprise security suite'
        },
        {
          name: 'Zion Cloud Vault',
          path: '/zion-cloud-vault',
          icon: <Cloud className="w-4 h-4" />,
          description: 'Secure cloud storage'
        },
        {
          name: 'Zion Content Studio',
          path: '/zion-content-studio',
          icon: <Code className="w-4 h-4" />,
          description: 'AI content creation'
        }
      ]
    },
    {
      name: '5G Solutions',
      path: '/5g-solutions',
      icon: <Network className="w-4 h-4" />,
      hasDropdown: true,
      dropdownItems: [
        {
          name: '5G Data Analytics',
          path: '/5g-data-analytics',
          icon: <BarChart3 className="w-4 h-4" />,
          description: 'High-speed data processing'
        },
        {
          name: '5G Edge Computing',
          path: '/5g-edge-computing',
          icon: <Cpu className="w-4 h-4" />,
          description: 'Ultra-low latency computing'
        },
        {
          name: '5G Implementation',
          path: '/5g-implementation',
          icon: <Zap className="w-4 h-4" />,
          description: 'Complete 5G deployment'
        },
        {
          name: '5G Mobile Applications',
          path: '/5g-mobile-applications',
          icon: <Smartphone className="w-4 h-4" />,
          description: '5G-powered mobile apps'
        },
        {
          name: '5G Network Infrastructure',
          path: '/5g-network-infrastructure',
          icon: <Network className="w-4 h-4" />,
          description: 'Robust 5G networks'
        },
        {
          name: '5G Private Networks',
          path: '/5g-private-networks',
          icon: <Shield className="w-4 h-4" />,
          description: 'Secure private 5G'
        },
        {
          name: '5G Smart City Solutions',
          path: '/5g-smart-city-solutions',
          icon: <Globe className="w-4 h-4" />,
          description: 'Connected city infrastructure'
        },
        {
          name: '5G IoT Solutions',
          path: '/5g-iot-solutions',
          icon: <Cpu className="w-4 h-4" />,
          description: 'IoT device connectivity'
        }
      ]
    },
    {
      name: 'Blog',
      path: '/blog',
      icon: <FileText className="w-4 h-4" />
    },
    {
      name: 'Contact',
      path: '/contact',
      icon: <Phone className="w-4 h-4" />
    }
  ], []);

  return (
    <nav className="relative z-50 bg-black/30 backdrop-blur-xl border-b border-cyan-500/20 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg shadow-cyan-500/25">
                <Brain className="w-7 h-7 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:via-purple-300 group-hover:to-pink-300 transition-all duration-300">
                  Zion Tech Group
                </span>
                <span className="text-xs text-gray-400 font-medium tracking-wider">
                  AI & IT SOLUTIONS
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-center space-x-1">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    to={item.path}
                    className={`flex items-center space-x-2 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                      isActive(item.path)
                        ? 'text-cyan-400 bg-cyan-500/10 shadow-lg shadow-cyan-500/20'
                        : 'text-gray-300 hover:text-white hover:bg-white/5 hover:shadow-lg hover:shadow-white/10'
                    }`}
                    onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                    onMouseLeave={() => item.hasDropdown && setActiveDropdown(null)}
                  >
                    <span className="group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
                    <span>{item.name}</span>
                    {item.hasDropdown && (
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    )}
                  </Link>

                  {/* Enhanced Dropdown Menu */}
                  {item.hasDropdown && activeDropdown === item.name && (
                    <div className="absolute left-0 mt-2 w-96 bg-black/95 backdrop-blur-xl border border-cyan-500/30 rounded-2xl shadow-2xl z-50 overflow-hidden">
                      <div className="p-6">
                        <div className="grid grid-cols-1 gap-4">
                          {item.dropdownItems?.map((subItem, index) => (
                            <Link
                              key={index}
                              to={subItem.path}
                              className="group flex items-start space-x-3 p-3 rounded-xl hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-purple-500/10 transition-all duration-300 hover:scale-105"
                              onClick={closeDropdowns}
                            >
                              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center group-hover:from-cyan-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                                {subItem.icon}
                              </div>
                              <div className="flex-1">
                                <div className="text-white font-semibold group-hover:text-cyan-400 transition-colors duration-300">
                                  {subItem.name}
                                </div>
                                <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                                  {subItem.description}
                                </div>
                              </div>
                              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-300" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/demo"
              className="px-6 py-3 text-gray-300 hover:text-white border border-gray-600 hover:border-cyan-400 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
            >
              View Demo
            </Link>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 flex items-center space-x-2 group"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={onSidebarToggle}
              className="p-3 text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-xl transition-all duration-300"
              aria-label="Toggle sidebar"
            >
              <SidebarIcon className="w-6 h-6" />
            </button>
            <button
              onClick={toggleMenu}
              className="p-3 text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-xl transition-all duration-300"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/95 backdrop-blur-xl border-t border-cyan-500/20">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.path}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                      isActive(item.path)
                        ? 'text-cyan-400 bg-cyan-500/10'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span>{item.icon}</span>
                    <span>{item.name}</span>
                  </Link>
                  
                  {/* Mobile Dropdown */}
                  {item.hasDropdown && (
                    <div className="ml-8 mt-2 space-y-1">
                      {item.dropdownItems?.slice(0, 4).map((subItem, index) => (
                        <Link
                          key={index}
                          to={subItem.path}
                          className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/5 rounded-lg transition-all duration-300"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <span>{subItem.icon}</span>
                          <span>{subItem.name}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavigationEnhanced;