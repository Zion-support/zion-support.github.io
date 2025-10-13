import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ArrowRight, 
  ChevronDown, 
  Menu, 
  X, 
  Brain, 
  Shield, 
  Zap, 
  Globe, 
  BarChart3, 
  Cloud, 
  Sparkles,
  Search,
  User,
  Settings,
  HelpCircle,
  Phone,
  Mail,
  MapPin,
  Star,
  TrendingUp,
  Users,
  Award,
  Clock,
  CheckCircle,
  DollarSign,
  Play
} from 'lucide-react';

const ImprovedNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setIsSidebarOpen(false);
  }, [location]);

  const navigationItems = [
    {
      label: 'AI Services',
      href: '/ai-services',
      icon: <Brain className="w-4 h-4" />,
      description: 'Advanced AI Solutions',
      color: 'from-blue-500 to-cyan-500',
      dropdown: [
        { 
          label: 'AI Analytics Dashboard Pro', 
          href: '/ai-analytics-dashboard-pro',
          description: 'Real-time business intelligence',
          icon: <BarChart3 className="w-4 h-4" />
        },
        { 
          label: 'AI Cybersecurity Suite Pro', 
          href: '/ai-cybersecurity-suite-pro',
          description: 'Advanced threat protection',
          icon: <Shield className="w-4 h-4" />
        },
        { 
          label: 'AI Content Generation Pro', 
          href: '/ai-content-generation-pro',
          description: 'Automated content creation',
          icon: <Sparkles className="w-4 h-4" />
        },
        { 
          label: 'AI Customer Support Chatbot', 
          href: '/ai-customer-support-chatbot',
          description: 'Intelligent customer service',
          icon: <Users className="w-4 h-4" />
        },
        { 
          label: 'AI Code Assistant Pro', 
          href: '/ai-code-assistant-pro',
          description: 'AI-powered development',
          icon: <Settings className="w-4 h-4" />
        },
        { 
          label: 'AI Business Intelligence Pro', 
          href: '/ai-business-intelligence-pro',
          description: 'Data-driven insights',
          icon: <TrendingUp className="w-4 h-4" />
        },
        { 
          label: 'AI Automation Platform', 
          href: '/ai-automation-platform',
          description: 'Workflow automation',
          icon: <Zap className="w-4 h-4" />
        },
        { 
          label: 'AI Data Analytics Pro', 
          href: '/ai-data-analytics-pro',
          description: 'Advanced data analysis',
          icon: <BarChart3 className="w-4 h-4" />
        },
        { 
          label: 'AI Marketing Automation', 
          href: '/ai-marketing-automation',
          description: 'Smart marketing campaigns',
          icon: <TrendingUp className="w-4 h-4" />
        },
        { 
          label: 'AI HR & Recruitment Pro', 
          href: '/ai-hr-recruitment-pro',
          description: 'Intelligent talent management',
          icon: <Users className="w-4 h-4" />
        },
        { 
          label: 'AI Financial Analysis', 
          href: '/ai-financial-analysis',
          description: 'Financial forecasting',
          icon: <BarChart3 className="w-4 h-4" />
        },
        { 
          label: 'AI Supply Chain Optimizer', 
          href: '/ai-supply-chain-optimizer',
          description: 'Supply chain intelligence',
          icon: <Globe className="w-4 h-4" />
        },
        { 
          label: 'AI Voice Assistant Pro', 
          href: '/ai-voice-assistant-pro',
          description: 'Voice-activated AI',
          icon: <User className="w-4 h-4" />
        },
        { 
          label: 'AI Image Recognition Pro', 
          href: '/ai-image-recognition-pro',
          description: 'Computer vision solutions',
          icon: <Settings className="w-4 h-4" />
        },
        { 
          label: 'AI Predictive Maintenance', 
          href: '/ai-predictive-maintenance',
          description: 'Predictive analytics',
          icon: <Clock className="w-4 h-4" />
        },
        { 
          label: 'AI Sentiment Analysis Pro', 
          href: '/ai-sentiment-analysis-pro',
          description: 'Customer sentiment tracking',
          icon: <TrendingUp className="w-4 h-4" />
        },
        { 
          label: 'AI Recommendation Engine', 
          href: '/ai-recommendation-engine',
          description: 'Personalized recommendations',
          icon: <Star className="w-4 h-4" />
        },
        { 
          label: 'AI Fraud Detection Pro', 
          href: '/ai-fraud-detection-pro',
          description: 'Advanced fraud prevention',
          icon: <Shield className="w-4 h-4" />
        },
        { 
          label: 'AI Language Translation', 
          href: '/ai-language-translation',
          description: 'Real-time translation',
          icon: <Globe className="w-4 h-4" />
        },
        { 
          label: 'AI Chatbot Enterprise', 
          href: '/ai-chatbot-enterprise',
          description: 'Enterprise chatbot solutions',
          icon: <Users className="w-4 h-4" />
        },
        { 
          label: 'AI Data Mining Pro', 
          href: '/ai-data-mining-pro',
          description: 'Data extraction & analysis',
          icon: <BarChart3 className="w-4 h-4" />
        },
        { 
          label: 'AI Video Analysis', 
          href: '/ai-video-analysis',
          description: 'Video content analysis',
          icon: <Settings className="w-4 h-4" />
        },
        { 
          label: 'AI Time Series Forecasting', 
          href: '/ai-time-series-forecasting',
          description: 'Time-based predictions',
          icon: <TrendingUp className="w-4 h-4" />
        },
        { 
          label: 'AI NLP Text Analysis', 
          href: '/ai-nlp-text-analysis',
          description: 'Natural language processing',
          icon: <Settings className="w-4 h-4" />
        },
        { 
          label: 'View All AI Services', 
          href: '/ai-services',
          description: 'Explore all AI solutions',
          icon: <ArrowRight className="w-4 h-4" />
        }
      ]
    },
    {
      label: 'IT Services',
      href: '/services',
      icon: <Shield className="w-4 h-4" />,
      description: 'Comprehensive IT Solutions',
      color: 'from-green-500 to-emerald-500',
      dropdown: [
        { 
          label: 'Cloud Infrastructure', 
          href: '/cloud-infrastructure',
          description: 'Scalable cloud solutions',
          icon: <Cloud className="w-4 h-4" />
        },
        { 
          label: 'Blockchain Development', 
          href: '/blockchain-development',
          description: 'Blockchain technology',
          icon: <Settings className="w-4 h-4" />
        },
        { 
          label: 'IoT Solutions', 
          href: '/iot-solutions',
          description: 'Internet of Things',
          icon: <Globe className="w-4 h-4" />
        },
        { 
          label: 'AR/VR Development', 
          href: '/ar-vr-development',
          description: 'Immersive experiences',
          icon: <Settings className="w-4 h-4" />
        },
        { 
          label: 'DevOps Solutions', 
          href: '/devops-solutions',
          description: 'Development operations',
          icon: <Settings className="w-4 h-4" />
        },
        { 
          label: 'Mobile Development', 
          href: '/mobile-development',
          description: 'Mobile applications',
          icon: <Settings className="w-4 h-4" />
        },
        { 
          label: 'Web Development', 
          href: '/web-development',
          description: 'Web applications',
          icon: <Settings className="w-4 h-4" />
        },
        { 
          label: 'IT Support', 
          href: '/it-support',
          description: 'Technical support',
          icon: <HelpCircle className="w-4 h-4" />
        },
        { 
          label: 'Network Infrastructure', 
          href: '/network-infrastructure',
          description: 'Network solutions',
          icon: <Globe className="w-4 h-4" />
        },
        { 
          label: 'IT Consulting', 
          href: '/it-consulting',
          description: 'Technology consulting',
          icon: <Users className="w-4 h-4" />
        },
        { 
          label: 'Cybersecurity Audit', 
          href: '/cybersecurity-audit',
          description: 'Security assessments',
          icon: <Shield className="w-4 h-4" />
        },
        { 
          label: 'Data Center Services', 
          href: '/data-center-services',
          description: 'Data center solutions',
          icon: <Settings className="w-4 h-4" />
        },
        { 
          label: 'Asset Management', 
          href: '/asset-management',
          description: 'IT asset tracking',
          icon: <BarChart3 className="w-4 h-4" />
        },
        { 
          label: 'View All IT Services', 
          href: '/services',
          description: 'Explore all IT solutions',
          icon: <ArrowRight className="w-4 h-4" />
        }
      ]
    },
    {
      label: 'Micro SAAS',
      href: '/micro-saas',
      icon: <Zap className="w-4 h-4" />,
      description: 'Ready-to-Use Solutions',
      color: 'from-purple-500 to-pink-500',
      dropdown: [
        { 
          label: 'Zion Analytics Pro', 
          href: '/zion-analytics-pro',
          description: 'Business intelligence platform',
          icon: <BarChart3 className="w-4 h-4" />
        },
        { 
          label: 'Zion Security Shield', 
          href: '/zion-security-shield',
          description: 'Advanced security protection',
          icon: <Shield className="w-4 h-4" />
        },
        { 
          label: 'Zion Cloud Vault', 
          href: '/zion-cloud-vault',
          description: 'Secure cloud storage',
          icon: <Cloud className="w-4 h-4" />
        },
        { 
          label: 'Zion AI Inventory Manager', 
          href: '/zion-ai-inventory-manager',
          description: 'Smart inventory tracking',
          icon: <BarChart3 className="w-4 h-4" />
        },
        { 
          label: 'Zion HR Assistant Pro', 
          href: '/zion-hr-assistant-pro',
          description: 'Human resources automation',
          icon: <Users className="w-4 h-4" />
        },
        { 
          label: 'Zion AI Accounting Suite', 
          href: '/zion-ai-accounting-suite',
          description: 'Automated accounting',
          icon: <BarChart3 className="w-4 h-4" />
        },
        { 
          label: 'Zion E-commerce Optimizer', 
          href: '/zion-ecommerce-optimizer',
          description: 'E-commerce optimization',
          icon: <TrendingUp className="w-4 h-4" />
        },
        { 
          label: 'Zion AI Customer Insights', 
          href: '/zion-ai-customer-insights',
          description: 'Customer analytics',
          icon: <Users className="w-4 h-4" />
        },
        { 
          label: 'Zion AI Lead Scoring', 
          href: '/zion-ai-lead-scoring',
          description: 'Lead qualification',
          icon: <Star className="w-4 h-4" />
        },
        { 
          label: 'Zion AI Document Processor', 
          href: '/zion-ai-document-processor',
          description: 'Document automation',
          icon: <Settings className="w-4 h-4" />
        },
        { 
          label: 'Zion AI Social Listener', 
          href: '/zion-ai-social-listener',
          description: 'Social media monitoring',
          icon: <Globe className="w-4 h-4" />
        },
        { 
          label: 'Zion AI Email Optimizer', 
          href: '/zion-ai-email-optimizer',
          description: 'Email marketing optimization',
          icon: <Mail className="w-4 h-4" />
        },
        { 
          label: 'Zion AI Meeting Assistant', 
          href: '/zion-ai-meeting-assistant',
          description: 'Meeting automation',
          icon: <Users className="w-4 h-4" />
        },
        { 
          label: 'Zion AI Expense Tracker', 
          href: '/zion-ai-expense-tracker',
          description: 'Expense management',
          icon: <BarChart3 className="w-4 h-4" />
        },
        { 
          label: 'Zion AI Survey Builder', 
          href: '/zion-ai-survey-builder',
          description: 'Survey creation tool',
          icon: <Settings className="w-4 h-4" />
        },
        { 
          label: 'Zion AI Chatbot Builder', 
          href: '/zion-ai-chatbot-builder',
          description: 'No-code chatbot creation',
          icon: <Users className="w-4 h-4" />
        },
        { 
          label: 'Zion AI Workflow Automation', 
          href: '/zion-ai-workflow-automation',
          description: 'Process automation',
          icon: <Zap className="w-4 h-4" />
        },
        { 
          label: 'Zion AI SEO Optimizer', 
          href: '/zion-ai-seo-optimizer',
          description: 'SEO optimization tool',
          icon: <TrendingUp className="w-4 h-4" />
        },
        { 
          label: 'Zion AI Data Warehouse', 
          href: '/zion-ai-data-warehouse',
          description: 'Data storage solution',
          icon: <Cloud className="w-4 h-4" />
        },
        { 
          label: 'Zion AI Mobile App Builder', 
          href: '/zion-ai-mobile-app-builder',
          description: 'Mobile app creation',
          icon: <Settings className="w-4 h-4" />
        },
        { 
          label: 'Zion AI API Manager', 
          href: '/zion-ai-api-manager',
          description: 'API management platform',
          icon: <Settings className="w-4 h-4" />
        },
        { 
          label: 'Zion AI Backup Manager', 
          href: '/zion-ai-backup-manager',
          description: 'Automated backup solution',
          icon: <Cloud className="w-4 h-4" />
        },
        { 
          label: 'Zion AI Testing Automation', 
          href: '/zion-ai-testing-automation',
          description: 'Automated testing',
          icon: <CheckCircle className="w-4 h-4" />
        },
        { 
          label: 'View All Micro SAAS', 
          href: '/micro-saas',
          description: 'Explore all micro SAAS',
          icon: <ArrowRight className="w-4 h-4" />
        }
      ]
    },
    {
      label: '5G Solutions',
      href: '/5g-solutions',
      icon: <Globe className="w-4 h-4" />,
      description: 'Next-Gen Connectivity',
      color: 'from-orange-500 to-red-500',
      dropdown: [
        { 
          label: '5G Data Analytics', 
          href: '/5g-data-analytics',
          description: 'High-speed data analysis',
          icon: <BarChart3 className="w-4 h-4" />
        },
        { 
          label: '5G Edge Computing', 
          href: '/5g-edge-computing',
          description: 'Edge computing solutions',
          icon: <Settings className="w-4 h-4" />
        },
        { 
          label: '5G Implementation', 
          href: '/5g-implementation',
          description: '5G network deployment',
          icon: <Settings className="w-4 h-4" />
        },
        { 
          label: '5G Mobile Applications', 
          href: '/5g-mobile-applications',
          description: '5G-enabled mobile apps',
          icon: <Settings className="w-4 h-4" />
        },
        { 
          label: '5G Network Infrastructure', 
          href: '/5g-network-infrastructure',
          description: '5G network architecture',
          icon: <Globe className="w-4 h-4" />
        },
        { 
          label: '5G Private Networks', 
          href: '/5g-private-networks',
          description: 'Private 5G networks',
          icon: <Shield className="w-4 h-4" />
        },
        { 
          label: '5G Smart City Solutions', 
          href: '/5g-smart-city-solutions',
          description: 'Smart city infrastructure',
          icon: <Globe className="w-4 h-4" />
        },
        { 
          label: 'View All 5G Solutions', 
          href: '/5g-solutions',
          description: 'Explore all 5G solutions',
          icon: <ArrowRight className="w-4 h-4" />
        }
      ]
    },
    {
      label: 'Company',
      href: '/about',
      icon: <BarChart3 className="w-4 h-4" />,
      description: 'About Zion Tech Group',
      color: 'from-cyan-500 to-blue-500',
      dropdown: [
        { 
          label: 'About Us', 
          href: '/about',
          description: 'Our story and mission',
          icon: <Users className="w-4 h-4" />
        },
        { 
          label: 'Our Team', 
          href: '/team',
          description: 'Meet our experts',
          icon: <Users className="w-4 h-4" />
        },
        { 
          label: 'Careers', 
          href: '/careers',
          description: 'Join our team',
          icon: <Award className="w-4 h-4" />
        },
        { 
          label: 'Case Studies', 
          href: '/case-studies',
          description: 'Success stories',
          icon: <Star className="w-4 h-4" />
        },
        { 
          label: 'Blog', 
          href: '/blog',
          description: 'Latest insights',
          icon: <Settings className="w-4 h-4" />
        },
        { 
          label: 'News', 
          href: '/news',
          description: 'Company news',
          icon: <Settings className="w-4 h-4" />
        },
        { 
          label: 'Press', 
          href: '/press',
          description: 'Press releases',
          icon: <Settings className="w-4 h-4" />
        },
        { 
          label: 'Partners', 
          href: '/partners',
          description: 'Our partners',
          icon: <Users className="w-4 h-4" />
        }
      ]
    }
  ];

  const quickLinks = [
    { label: 'Pricing', href: '/pricing', icon: <DollarSign className="w-4 h-4" /> },
    { label: 'Demo', href: '/demo', icon: <Play className="w-4 h-4" /> },
    { label: 'Support', href: '/support', icon: <HelpCircle className="w-4 h-4" /> },
    { label: 'Consultation', href: '/consultation', icon: <Users className="w-4 h-4" /> }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown DE 19709'
  };

  const Sidebar = () => (
    <div className={`fixed inset-0 z-50 lg:hidden ${isSidebarOpen ? 'block' : 'hidden'}`}>
      <div className="fixed inset-0 bg-black/50" onClick={() => setIsSidebarOpen(false)} />
      <div className="fixed right-0 top-0 h-full w-80 bg-slate-900/95 backdrop-blur-sm border-l border-white/10">
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold text-white">Menu</h2>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Search */}
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
          </div>

          {/* Navigation Items */}
          <div className="space-y-4">
            {navigationItems.map((item) => (
              <div key={item.label}>
                <Link
                  to={item.href}
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/10 transition-colors"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${item.color} flex items-center justify-center`}>
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-white font-medium">{item.label}</div>
                    <div className="text-gray-400 text-sm">{item.description}</div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Quick Links */}
          <div className="mt-8 pt-6 border-t border-white/10">
            <h3 className="text-white font-medium mb-4">Quick Links</h3>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  {link.icon}
                  <span>{link.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-8 pt-6 border-t border-white/10">
            <h3 className="text-white font-medium mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span className="text-gray-300 text-sm">{contactInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span className="text-gray-300 text-sm">{contactInfo.email}</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-cyan-400 mt-0.5" />
                <span className="text-gray-300 text-sm">{contactInfo.address}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <header className="bg-black/20 backdrop-blur-sm border-b border-white/10 relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="text-2xl font-bold text-white group">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:from-cyan-300 group-hover:to-purple-300 transition-all duration-300">
                Zion Tech Group
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              {navigationItems.map((item) => (
                <div
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={item.href}
                    className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 relative group"
                  >
                    {item.icon}
                    <span>{item.label}</span>
                    <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                  </Link>
                  
                  {/* Enhanced Dropdown Menu */}
                  {activeDropdown === item.label && (
                    <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-sm border border-white/20 rounded-xl shadow-2xl z-50">
                      <div className="p-4">
                        <div className="flex items-center space-x-3 mb-4">
                          <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${item.color} flex items-center justify-center`}>
                            {item.icon}
                          </div>
                          <div>
                            <h3 className="text-white font-semibold">{item.label}</h3>
                            <p className="text-gray-400 text-sm">{item.description}</p>
                          </div>
                        </div>
                        <div className="space-y-1 max-h-96 overflow-y-auto">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.href}
                              to={dropdownItem.href}
                              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-700/50 transition-colors duration-200 group"
                            >
                              <div className="w-6 h-6 text-gray-400 group-hover:text-cyan-400 transition-colors">
                                {dropdownItem.icon}
                              </div>
                              <div className="flex-1">
                                <div className="text-sm text-gray-300 group-hover:text-cyan-400 transition-colors">
                                  {dropdownItem.label}
                                </div>
                                <div className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors">
                                  {dropdownItem.description}
                                </div>
                              </div>
                              <ArrowRight className="w-3 h-3 text-gray-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Quick Links & CTA */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="hidden lg:flex space-x-4">
                {quickLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"
                  >
                    {link.icon}
                    <span>{link.label}</span>
                  </Link>
                ))}
              </div>
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105 flex"
              >
                Contact Us
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Mobile Menu Buttons */}
            <div className="lg:hidden flex items-center space-x-2">
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 p-2"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="lg:hidden py-4 border-t border-white/10">
              <div className="space-y-4">
                {navigationItems.map((item) => (
                  <div key={item.label}>
                    <Link
                      to={item.href}
                      className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.icon}
                      <span className="font-medium">{item.label}</span>
                    </Link>
                    <div className="ml-6 space-y-2">
                      {item.dropdown.slice(0, 4).map((dropdownItem) => (
                        <Link
                          key={dropdownItem.href}
                          to={dropdownItem.href}
                          className="block text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300 py-1"
                          onClick={() => setIsOpen(false)}
                        >
                          {dropdownItem.label}
                        </Link>
                      ))}
                      {item.dropdown.length > 4 && (
                        <Link
                          to={item.href}
                          className="block text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-300 py-1 font-medium"
                          onClick={() => setIsOpen(false)}
                        >
                          View All →
                        </Link>
                      )}
                    </div>
                  </div>
                ))}
                
                <div className="pt-4 border-t border-white/10">
                  <div className="space-y-2">
                    {quickLinks.map((link) => (
                      <Link
                        key={link.href}
                        to={link.href}
                        className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Sidebar */}
      <Sidebar />
    </>
  );
};

export default ImprovedNavigation;