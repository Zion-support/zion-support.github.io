import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Search, 
  User, 
  Bell, 
  ChevronDown, 
  Zap, 
  Brain, 
  Shield, 
  Cloud, 
  Rocket, 
  Globe, 
  Cpu, 
  Lock, 
  Heart, 
  Users, 
  ShoppingCart, 
  BookOpen, 
  MessageCircle, 
  HelpCircle, 
  DollarSign, 
  Star, 
  TrendingUp, 
  Award, 
  Settings, 
  Phone, 
  Mail, 
  MapPin, 
  Building, 
  Bot, 
  Atom,
  Server,
  Workflow
} from 'lucide-react';
import { ThemeToggle } from '../components/ThemeToggle';
import { ZionLoadingSpinner } from '../components/ui/EnhancedLoadingSpinner';
import { motion, AnimatePresence } from 'framer-motion';

export function AppHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { user, logout } = useAuth();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsSearching(true);
      try {
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate search
        window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
      } finally {
        setIsSearching(false);
      }
    }
  };

  const navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'Services', href: '/services', current: false, hasDropdown: true },
    { name: 'Solutions', href: '/solutions', current: false, hasDropdown: true },
    { name: 'Resources', href: '/resources', current: false, hasDropdown: true },
    { name: 'About', href: '/about', current: false },
    { name: 'Contact', href: '/contact', current: false },
  ];

  const services = [
    // AI & Analytics Services
    { name: 'AI Enterprise Orchestrator', href: '/services/ai-enterprise-orchestrator', icon: Brain, description: 'Multi-agent AI coordination & workflow automation' },
    { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence', icon: Brain, description: 'Machine Learning & Data Science' },
    { name: 'AI Predictive Analytics', href: '/services/ai-predictive-analytics', icon: Brain, description: 'Advanced forecasting with 95% accuracy' },
    { name: 'AI Customer Behavior Analytics', href: '/services/ai-customer-behavior-analytics', icon: Brain, description: 'Deep customer insights & personalization' },
    
    // AI Automation & Security
    { name: 'AI Workflow Automation', href: '/services/ai-workflow-automation', icon: Settings, description: 'Intelligent process automation' },
    { name: 'AI Threat Detection', href: '/services/ai-threat-detection', icon: Shield, description: 'Advanced security with 97% accuracy' },
    { name: 'AI Fraud Detection', href: '/services/ai-fraud-detection', icon: Shield, description: 'Real-time fraud prevention' },
    { name: 'AI Identity Verification', href: '/services/ai-identity-verification', icon: Shield, description: 'Biometric & document verification' },
    
    // AI Healthcare & Finance
    { name: 'AI Medical Diagnosis', href: '/services/ai-medical-diagnosis', icon: Heart, description: 'AI-powered diagnostic support' },
    { name: 'AI Trading Algorithms', href: '/services/ai-trading-algorithms', icon: DollarSign, description: 'Advanced trading intelligence' },
    { name: 'AI Credit Risk Assessment', href: '/services/ai-credit-risk-assessment', icon: DollarSign, description: 'Intelligent risk scoring' },
    
    // AI Marketing & Operations
    { name: 'AI Marketing Optimization', href: '/services/ai-marketing-optimization', icon: TrendingUp, description: 'Campaign & content optimization' },
    { name: 'AI Content Generation', href: '/services/ai-content-generation', icon: BookOpen, description: 'Human-like content creation' },
    { name: 'AI Supply Chain Optimization', href: '/services/ai-supply-chain-optimization', icon: Truck, description: 'End-to-end supply chain intelligence' },
    { name: 'AI Quality Control', href: '/services/ai-quality-control', icon: CheckCircle, description: 'Computer vision inspection' },
    
    // Infrastructure & Emerging Tech
    { name: 'Cloud & DevOps', href: '/services/cloud-devops', icon: Cloud, description: 'Infrastructure & Automation' },
    { name: 'Digital Twin', href: '/services/digital-twin', icon: Rocket, description: 'Simulation & Monitoring' },
    { name: 'IoT & Edge Computing', href: '/services/iot-edge', icon: Cpu, description: 'Smart Devices & Networks' },
    { name: 'Quantum AI Platform', href: '/services/quantum-ai-platform', icon: Zap, description: 'Next-Generation Quantum Computing' },
    { name: 'Blockchain Solutions', href: '/services/blockchain-enterprise-solutions', icon: Lock, description: 'DeFi & Smart Contracts' },
    
    // Micro SaaS Solutions
    { name: 'AI Lead Scoring', href: '/services/ai-lead-scoring', icon: TrendingUp, description: 'Prioritize deals with ML' },
    { name: 'Website AI Chatbot', href: '/services/website-ai-chatbot', icon: MessageCircle, description: '24/7 on-site assistant' },
    { name: 'AI Content Optimizer Pro', href: '/services/ai-content-optimizer-pro', icon: BookOpen, description: 'AI-powered content optimization' },
    { name: 'AI Sales Copilot', href: '/services/ai-sales-copilot', icon: TrendingUp, description: 'Sales automation & intelligence' },
    { name: 'AI Customer Success Platform', href: '/services/ai-customer-success-platform', icon: Users, description: 'Customer success automation' },
    { name: 'AI HR Talent Acquisition', href: '/services/ai-hr-talent-acquisition', icon: Users, description: 'AI-powered recruitment' },
    
    // Specialized Solutions
    { name: 'Healthcare Technology', href: '/services/healthcare-tech', icon: Heart, description: 'AI Medicine & Diagnostics' },
    { name: 'Sustainability Solutions', href: '/services/sustainability', icon: Globe, description: 'Green IT Solutions' },
    { name: 'FinOps Advisor', href: '/services/finops-advisor', icon: DollarSign, description: 'Cloud cost optimization' },
    { name: 'MLOps Pipeline', href: '/services/mlops-pipeline', icon: Settings, description: 'Train, deploy, monitor' }
  ];

  const servicesCategories = [
    {
      name: 'Core Services',
      icon: Settings,
      color: 'from-blue-600 to-cyan-600',
      services: [
        { name: 'Services Overview', href: '/services-overview', description: 'Complete service portfolio' },
        { name: 'AI Services', href: '/ai-services', description: 'AI-powered solutions' },
        { name: 'IT Services', href: '/it-services', description: 'Enterprise IT solutions' },
        { name: 'Micro SaaS', href: '/micro-saas', description: 'Scalable software solutions' }
      ]
    },
    {
      name: 'AI & Analytics',
      icon: Brain,
      color: 'from-purple-600 to-pink-600',
      services: [
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence', description: 'Machine Learning & Data Science' },
        { name: 'AI Sales Copilot', href: '/services/ai-sales-copilot', description: 'AI-powered sales automation' },
        { name: 'AI Compliance Assistant', href: '/services/ai-compliance-assistant', description: 'Regulatory compliance automation' },
        { name: 'LLM Content Studio', href: '/services/llm-content-studio', description: 'AI content generation' },
        { name: 'Autonomous BI Platform', href: '/services/autonomous-business-intelligence', description: 'Self-learning analytics' },
        { name: 'Consciousness Simulation', href: '/services/consciousness-simulation', description: 'AGI research platform' },
        { name: 'Quantum Neural Networks', href: '/services/quantum-neural-network', description: 'Quantum AI platform' },
        { name: 'Emotional Intelligence AI', href: '/services/ai-emotional-intelligence', description: 'AI-powered psychology' },
        { name: 'AI Creativity Platform', href: '/services/ai-creativity-platform', description: 'AI-enhanced creativity' },
        { name: 'AI Education Platform', href: '/services/ai-education-platform', description: 'Personalized learning' }
      ]
    },
    {
      name: 'Cloud & DevOps',
      icon: Cloud,
      color: 'from-green-600 to-emerald-600',
      services: [
        { name: 'Cloud DevOps', href: '/services/cloud-devops', description: 'Infrastructure & Automation' },
        { name: 'Cloud FinOps Optimizer', href: '/services/cloud-finops-optimizer', description: 'Cost optimization' },
        { name: 'FinOps Advisor', href: '/services/finops-advisor', description: 'Financial operations' }
      ]
    },
    {
      name: 'Emerging Tech',
      icon: Rocket,
      color: 'from-indigo-600 to-purple-600',
      services: [
        { name: 'Digital Twin', href: '/services/digital-twin', description: 'Simulation & Monitoring' },
        { name: 'IoT Edge Computing', href: '/services/iot-edge', description: 'Smart Devices & Networks' },
        { name: 'Blockchain Solutions', href: '/services/blockchain-enterprise-solutions', description: 'DeFi & Smart Contracts' },
        { name: 'Quantum Computing', href: '/services/quantum-computing-solutions', description: 'Next-generation computing' }
      ]
    }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
              </div>
              <div className="hidden sm:block">
                <div className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Zion Tech Group
                </div>
                <div className="text-xs text-gray-500">Innovation 2030</div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {mainNavigation.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div className="relative">
                    <button
                      onClick={() => {
                        if (item.name === 'Services') setServicesDropdownOpen(!servicesDropdownOpen);
                        if (item.name === 'Solutions') setSolutionsDropdownOpen(!solutionsDropdownOpen);
                        if (item.name === 'Company') setCompanyDropdownOpen(!companyDropdownOpen);
                      }}
                      className="flex items-center space-x-1 px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>

                    {/* Services Mega Menu */}
                    {item.name === 'Services' && servicesDropdownOpen && (
                      <div className="absolute top-full left-0 w-screen max-w-6xl bg-white shadow-2xl rounded-2xl border border-gray-100 p-8">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                          {servicesCategories.map((category) => (
                            <div key={category.name}>
                              <div className={`inline-flex items-center space-x-2 mb-4 p-2 rounded-lg bg-gradient-to-r ${category.color} text-white`}>
                                <category.icon className="w-5 h-5" />
                                <span className="font-semibold">{category.name}</span>
                              </div>
                              <ul className="space-y-3">
                                {category.services.map((service) => (
                                  <li key={service.name}>
                                    <Link
                                      to={service.href}
                                      className="block p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                                      onClick={() => setServicesDropdownOpen(false)}
                                    >
                                      <div className="font-medium text-gray-900">{service.name}</div>
                                      <div className="text-sm text-gray-600">{service.description}</div>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                        <div className="mt-6 pt-6 border-t border-gray-100">
                          <div className="flex items-center justify-between">
                            <div className="text-sm text-gray-600">
                              <strong>Ready to get started?</strong> Get a free consultation
                            </div>
                            <Link
                              to="/contact"
                              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                              onClick={() => setServicesDropdownOpen(false)}
                            >
                              Contact Us
                            </Link>
                            <div className="mt-3">
                              <Link
                                to="/comprehensive-services-showcase-2025-new"
                                className="inline-flex items-center text-sm font-medium text-purple-600 hover:text-purple-700"
                              >
                                Comprehensive Services Showcase
                                <ArrowRight className="ml-1 w-4 h-4" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Solutions Dropdown */}
                    {item.name === 'Solutions' && solutionsDropdownOpen && (
                      <div className="absolute top-full left-0 w-96 bg-white shadow-2xl rounded-2xl border border-gray-100 p-6">
                        <div className="space-y-4">
                          {item.dropdownItems?.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              to={dropdownItem.href}
                              className="block p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                              onClick={() => setSolutionsDropdownOpen(false)}
                            >
                              <div className="font-medium text-gray-900">{dropdownItem.name}</div>
                              <div className="text-sm text-gray-600">{dropdownItem.description}</div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Company Dropdown */}
                    {item.name === 'Company' && companyDropdownOpen && (
                      <div className="absolute top-full left-0 w-80 bg-white shadow-2xl rounded-2xl border border-gray-100 p-6">
                        <div className="space-y-4">
                          {item.dropdownItems?.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              to={dropdownItem.href}
                              className="block p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                              onClick={() => setCompanyDropdownOpen(false)}
                            >
                              <div className="font-medium text-gray-900">{dropdownItem.name}</div>
                              <div className="text-sm text-gray-600">{dropdownItem.description}</div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className="px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Search */}
            <div className="relative">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search services, talent, equipment..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 px-4 py-2 pl-10 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                {isSearching && (
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <ZionLoadingSpinner size="sm" />
                  </div>
                )}
              </form>
            </div>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Contact Info */}
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Phone className="w-4 h-4" />
              <span className="hidden xl:inline">+1 302 464 0950</span>
            </div>

            {/* CTA Button */}
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors duration-200"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-gray-200"
          >
            <div className="px-4 py-6 space-y-6">
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 pl-10 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              </form>

              {/* Mobile Navigation */}
              <nav className="space-y-4">
                {mainNavigation.map((item) => (
                  <div key={item.name}>
                    {item.hasDropdown ? (
                      <div>
                        <button
                          onClick={() => {
                            if (item.name === 'Services') setServicesDropdownOpen(!servicesDropdownOpen);
                            if (item.name === 'Solutions') setSolutionsDropdownOpen(!solutionsDropdownOpen);
                            if (item.name === 'Company') setCompanyDropdownOpen(!companyDropdownOpen);
                          }}
                          className="flex items-center justify-between w-full px-4 py-3 text-left text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                        >
                          <span className="font-medium">{item.name}</span>
                          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                            (item.name === 'Services' && servicesDropdownOpen) ||
                            (item.name === 'Solutions' && solutionsDropdownOpen) ||
                            (item.name === 'Company' && companyDropdownOpen)
                              ? 'rotate-180' : ''
                          }`} />
                        </button>

                        {/* Mobile Dropdown */}
                        {(item.name === 'Services' && servicesDropdownOpen) ||
                         (item.name === 'Solutions' && solutionsDropdownOpen) ||
                         (item.name === 'Company' && companyDropdownOpen) ? (
                          <div className="ml-4 mt-2 space-y-2">
                            {item.dropdownItems?.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                to={dropdownItem.href}
                                className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {dropdownItem.name}
                              </Link>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    ) : (
                      <Link
                        to={item.href}
                        className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors duration-200 font-medium"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>

              {/* Mobile Contact Info */}
              <div className="pt-6 border-t border-gray-200 space-y-4">
                <div className="flex items-center space-x-3 text-sm text-gray-600">
                  <Phone className="w-4 h-4" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-600">
                  <Mail className="w-4 h-4" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span>364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>

              {/* Mobile CTA */}
              <Link
                to="/contact"
                className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold text-center transition-all duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay for mobile menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </header>
  );
}
