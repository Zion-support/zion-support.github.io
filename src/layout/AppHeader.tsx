import { ArrowRight, Atom, BookOpen, Brain, Building, Building2, ChevronDown, Cloud, Code, Cpu, DollarSign, FileText, Globe, HeartHandshake, Heart, HelpCircle, Leaf, Lock, Mail, MapPin, Menu, MessageCircle, PenTool, Phone, Rocket, Scale, Search, Settings, Shield, ShoppingCart, Star, Target, TrendingUp, Users, X, Zap, Truck, Play, User, Bell, Award, GraduationCap, LifeBuoy, BarChart3 } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ThemeToggle } from '../components/ThemeToggle';

export function AppHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

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
    { name: 'AI Enterprise Orchestrator', href: '/services/ai-enterprise-orchestrator', icon: Brain, description: 'Multi-agent AI coordination & workflow automation' },
    { name: 'AI & Analytics', href: '/services/ai-business-intelligence', icon: Brain, description: 'Machine Learning & Data Science' },
    { name: 'AI Cybersecurity Suite', href: '/services/ai-cybersecurity-suite', icon: Shield, description: 'AI-Powered Threat Detection & Response' },
    { name: 'Quantum AI Platform', href: '/services/quantum-ai-platform', icon: Zap, description: 'Next-Generation Quantum Computing' },
    { name: 'AI Healthcare Analytics', href: '/services/ai-healthcare-analytics', icon: Heart, description: 'Predictive Diagnostics & Care Optimization' },
    { name: 'Digital Twin', href: '/services/digital-twin', icon: Rocket, description: 'Simulation & Monitoring' },
    { name: 'Cloud & DevOps', href: '/services/cloud-devops', icon: Cloud, description: 'Infrastructure & Automation' },
    { name: 'IoT & Edge', href: '/services/iot-edge', icon: Cpu, description: 'Smart Devices & Networks' },
    { name: 'Blockchain', href: '/services/blockchain-enterprise-solutions', icon: Lock, description: 'DeFi & Smart Contracts' },
    { name: 'Healthcare Tech', href: '/services/healthcare-tech', icon: Heart, description: 'AI Medicine & Diagnostics' },
    { name: 'Sustainability', href: '/services/sustainability', icon: Globe, description: 'Green IT Solutions' },
    { name: 'Micro SaaS', href: '/services/micro-saas-solutions', icon: ShoppingCart, description: 'Productized SaaS for niches' },
    { name: 'AI Auto Email', href: '/services/ai-auto-email-responder', icon: MessageCircle, description: 'Faster replies, CRM logging' },
    { name: 'Feedback Surveys', href: '/services/mobile-feedback-surveys', icon: Users, description: 'NPS/CSAT with AI insights' },
    { name: 'LLM Content Studio', href: '/services/llm-content-studio', icon: BookOpen, description: 'On-brand AI content' },
    { name: 'FinOps Advisor', href: '/services/finops-advisor', icon: DollarSign, description: 'Cloud cost optimization' },
    { name: 'AI Lead Scoring', href: '/services/ai-lead-scoring', icon: TrendingUp, description: 'Prioritize deals with ML' },
    { name: 'Website AI Chatbot', href: '/services/website-ai-chatbot', icon: MessageCircle, description: '24/7 on-site assistant' },
    { name: 'RAG Search', href: '/services/rag-search', icon: BookOpen, description: 'AI answers with citations' },
    { name: 'MLOps Pipeline', href: '/services/mlops-pipeline', icon: Settings, description: 'Train, deploy, monitor' },
    { name: 'eCommerce Personalization', href: '/services/ecommerce-personalization', icon: ShoppingCart, description: 'Recos & search' },
    { name: 'AI Sales Automation', href: '/innovative-services-showcase-2025', icon: TrendingUp, description: 'Complete sales automation suite' },
    { name: 'AI Customer Support', href: '/innovative-services-showcase-2025', icon: MessageCircle, description: 'Intelligent support platform' },
    { name: 'AI Financial Analytics', href: '/innovative-services-showcase-2025', icon: DollarSign, description: 'Advanced financial insights' },
    { name: 'AI Supply Chain', href: '/innovative-services-showcase-2025', icon: Settings, description: 'Supply chain optimization' },
    { name: 'AI HR Platform', href: '/innovative-services-showcase-2025', icon: Users, description: 'HR automation & analytics' },
    { name: 'AI Project Management', href: '/innovative-services-showcase-2025', icon: Target, description: 'Smart project optimization' },
    { name: 'AI Marketing Automation', href: '/innovative-services-showcase-2025', icon: BarChart3, description: 'Marketing campaign optimization' },
    { name: 'AI Learning Management', href: '/innovative-services-showcase-2025', icon: GraduationCap, description: 'Personalized learning platform' },
    { name: 'AI Legal Automation', href: '/innovative-services-showcase-2025', icon: FileText, description: 'Legal document automation' },
    { name: 'AI Healthcare Analytics', href: '/innovative-services-showcase-2025', icon: Heart, description: 'Healthcare insights platform' },
    { name: 'AI Project Management Platform', href: '/services/ai-project-management-platform', icon: Target, description: 'AI-powered project optimization' },
    { name: 'AI Cybersecurity Threat Detection', href: '/services/ai-cybersecurity-threat-detection', icon: Shield, description: 'Advanced threat detection' },
    { name: 'AI Financial Trading Platform', href: '/services/ai-financial-trading-platform', icon: DollarSign, description: 'AI-powered trading' },
    { name: 'AI Healthcare Analytics Platform', href: '/services/ai-healthcare-analytics-platform', icon: Heart, description: 'Healthcare analytics platform' }
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
      name: 'AI & Machine Learning',
      icon: Brain,
      color: 'from-purple-600 to-pink-600',
      services: [
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence', description: 'Data-driven insights' },
        { name: 'AI Cybersecurity Suite', href: '/services/ai-cybersecurity-suite', description: 'Threat detection & response' },
        { name: 'AI Healthcare Analytics', href: '/services/ai-healthcare-analytics', description: 'Medical insights platform' },
        { name: 'AI Project Management', href: '/services/ai-project-management-platform', description: 'Smart project optimization' }
      ]
    },
    {
      name: 'Emerging Technologies',
      icon: Rocket,
      color: 'from-orange-600 to-red-600',
      services: [
        { name: 'Quantum Computing', href: '/services/quantum-computing', description: 'Next-gen computing power' },
        { name: 'Digital Twin', href: '/services/digital-twin', description: 'Virtual simulations' },
        { name: 'Blockchain Solutions', href: '/services/blockchain-enterprise-solutions', description: 'DeFi & smart contracts' },
        { name: 'IoT & Edge Computing', href: '/services/iot-edge', description: 'Connected devices' }
      ]
    },
    {
      name: 'Micro SaaS Solutions',
      icon: ShoppingCart,
      color: 'from-green-600 to-emerald-600',
      services: [
        { name: 'AI Lead Scoring', href: '/services/ai-lead-scoring', description: 'ML-powered lead prioritization' },
        { name: 'AI Chatbot', href: '/services/website-ai-chatbot', description: '24/7 customer support' },
        { name: 'AI Content Generation', href: '/services/llm-content-studio', description: 'Automated content creation' },
        { name: 'AI Email Automation', href: '/services/ai-auto-email-responder', description: 'Smart email responses' }
      ]
    }
  ];

  const solutions = [
    { name: 'Enterprise AI', href: '/solutions/enterprise-ai', icon: Building, description: 'Large-scale AI implementation' },
    { name: 'Digital Transformation', href: '/solutions/digital-transformation', icon: Rocket, description: 'Modernize your business' },
    { name: 'Cloud Migration', href: '/solutions/cloud-migration', icon: Cloud, description: 'Move to the cloud' },
    { name: 'Cybersecurity', href: '/solutions/cybersecurity', icon: Shield, description: 'Protect your assets' },
    { name: 'Data Analytics', href: '/solutions/data-analytics', icon: BarChart3, description: 'Turn data into insights' },
    { name: 'IoT Implementation', href: '/solutions/iot-implementation', icon: Cpu, description: 'Connect your devices' }
  ];

  const resources = [
    { name: 'Blog', href: '/blog', icon: BookOpen, description: 'Latest insights & updates' },
    { name: 'Case Studies', href: '/case-studies', icon: FileText, description: 'Success stories' },
    { name: 'White Papers', href: '/white-papers', icon: FileText, description: 'In-depth research' },
    { name: 'Webinars', href: '/webinars', icon: Play, description: 'Live learning sessions' },
    { name: 'Documentation', href: '/docs', icon: BookOpen, description: 'Technical guides' },
    { name: 'Training', href: '/training', icon: GraduationCap, description: 'Skill development' },
    { name: 'Support', href: '/support', icon: LifeBuoy, description: 'Get help when you need it' }
  ];

  const quickActions = [
    { name: 'Get a Quote', href: '/request-quote', icon: DollarSign, description: 'Custom pricing for your needs' },
    { name: 'Schedule Demo', href: '/schedule-demo', icon: Play, description: 'See our solutions in action' },
    { name: 'Contact Sales', href: '/contact', icon: Phone, description: 'Talk to our experts' },
    { name: 'View Pricing', href: '/pricing', icon: DollarSign, description: 'Transparent pricing plans' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Atom className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div className="relative">
                    <button
                      onClick={() => {
                        if (item.name === 'Services') setServicesDropdownOpen(!servicesDropdownOpen);
                        if (item.name === 'Solutions') setSolutionsDropdownOpen(!solutionsDropdownOpen);
                        if (item.name === 'Resources') setResourcesDropdownOpen(!resourcesDropdownOpen);
                      }}
                      className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                    >
                      {item.name}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    
                    {/* Services Dropdown */}
                    {item.name === 'Services' && servicesDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-screen max-w-6xl transform -translate-x-1/2 left-1/2">
                        <div className="bg-white rounded-xl shadow-2xl border border-gray-200 p-6">
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {/* Services Grid */}
                            <div className="space-y-4">
                              <h3 className="text-lg font-semibold text-gray-900 mb-4">All Services</h3>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {services.slice(0, 12).map((service) => (
                                  <Link
                                    key={service.name}
                                    to={service.href}
                                    className="group p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                                  >
                                    <div className="flex items-start space-x-3">
                                      <service.icon className="w-5 h-5 text-blue-600 mt-0.5" />
                                      <div>
                                        <p className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                                          {service.name}
                                        </p>
                                        <p className="text-sm text-gray-500">{service.description}</p>
                                      </div>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                              <div className="pt-4 border-t border-gray-200">
                                <Link
                                  to="/services"
                                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm"
                                >
                                  View All Services
                                  <ArrowRight className="w-4 h-4 ml-1" />
                                </Link>
                              </div>
                            </div>

                            {/* Categories */}
                            <div className="space-y-4">
                              <h3 className="text-lg font-semibold text-gray-900 mb-4">Service Categories</h3>
                              <div className="space-y-3">
                                {servicesCategories.map((category) => (
                                  <div key={category.name} className="group">
                                    <Link
                                      to={category.services[0]?.href || '#'}
                                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                                    >
                                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                                        <category.icon className="w-5 h-5 text-white" />
                                      </div>
                                      <div>
                                        <p className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                                          {category.name}
                                        </p>
                                        <p className="text-sm text-gray-500">{category.services.length} services</p>
                                      </div>
                                    </Link>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Solutions Dropdown */}
                    {item.name === 'Solutions' && solutionsDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-80 transform -translate-x-1/2 left-1/2">
                        <div className="bg-white rounded-xl shadow-2xl border border-gray-200 p-6">
                          <h3 className="text-lg font-semibold text-gray-900 mb-4">Solutions</h3>
                          <div className="space-y-3">
                            {solutions.map((solution) => (
                              <Link
                                key={solution.name}
                                to={solution.href}
                                className="group p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                              >
                                <div className="flex items-start space-x-3">
                                  <solution.icon className="w-5 h-5 text-blue-600 mt-0.5" />
                                  <div>
                                    <p className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                                      {solution.name}
                                    </p>
                                    <p className="text-sm text-gray-500">{solution.description}</p>
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Resources Dropdown */}
                    {item.name === 'Resources' && resourcesDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-80 transform -translate-x-1/2 left-1/2">
                        <div className="bg-white rounded-xl shadow-2xl border border-gray-200 p-6">
                          <h3 className="text-lg font-semibold text-gray-900 mb-4">Resources</h3>
                          <div className="space-y-3">
                            {resources.map((resource) => (
                              <Link
                                key={resource.name}
                                to={resource.href}
                                className="group p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                              >
                                <div className="flex items-start space-x-3">
                                  <resource.icon className="w-5 h-5 text-blue-600 mt-0.5" />
                                  <div>
                                    <p className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                                      {resource.name}
                                    </p>
                                    <p className="text-sm text-gray-500">{resource.description}</p>
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Right side - Search, Actions, Theme Toggle */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Search */}
            <form onSubmit={handleSearch} className="relative">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
              </div>
              {isSearching && (
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
                </div>
              )}
            </form>

            {/* Quick Actions */}
            <div className="flex items-center space-x-2">
              <Link
                to="/request-quote"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
              >
                Get Quote
              </Link>
              <Link
                to="/schedule-demo"
                className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200"
              >
                Schedule Demo
              </Link>
            </div>

            {/* Theme Toggle */}
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 transition-colors duration-200"
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

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="px-3 py-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </form>

            {/* Mobile Navigation */}
            {navigation.map((item) => (
              <div key={item.name}>
                {item.hasDropdown ? (
                  <div>
                    <button
                      onClick={() => {
                        if (item.name === 'Services') setServicesDropdownOpen(!servicesDropdownOpen);
                        if (item.name === 'Solutions') setSolutionsDropdownOpen(!solutionsDropdownOpen);
                        if (item.name === 'Resources') setResourcesDropdownOpen(!resourcesDropdownOpen);
                      }}
                      className="w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
                    >
                      {item.name}
                    </button>
                    
                    {/* Mobile Services Dropdown */}
                    {item.name === 'Services' && servicesDropdownOpen && (
                      <div className="pl-4 space-y-2">
                        {services.slice(0, 8).map((service) => (
                          <Link
                            key={service.name}
                            to={service.href}
                            className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
                          >
                            {service.name}
                          </Link>
                        ))}
                        <Link
                          to="/services"
                          className="block px-3 py-2 text-sm text-blue-600 hover:text-blue-700 font-medium"
                        >
                          View All Services →
                        </Link>
                      </div>
                    )}

                    {/* Mobile Solutions Dropdown */}
                    {item.name === 'Solutions' && solutionsDropdownOpen && (
                      <div className="pl-4 space-y-2">
                        {solutions.map((solution) => (
                          <Link
                            key={solution.name}
                            to={solution.href}
                            className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
                          >
                            {solution.name}
                          </Link>
                        ))}
                      </div>
                    )}

                    {/* Mobile Resources Dropdown */}
                    {item.name === 'Resources' && resourcesDropdownOpen && (
                      <div className="pl-4 space-y-2">
                        {resources.map((resource) => (
                          <Link
                            key={resource.name}
                            to={resource.href}
                            className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
                          >
                            {resource.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            {/* Mobile Quick Actions */}
            <div className="px-3 py-4 border-t border-gray-200 space-y-2">
              {quickActions.map((action) => (
                <Link
                  key={action.name}
                  to={action.href}
                  className="flex items-center space-x-3 px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
                >
                  <action.icon className="w-4 h-4" />
                  <span>{action.name}</span>
                </Link>
              ))}
            </div>

            {/* Mobile Theme Toggle */}
            <div className="px-3 py-2 border-t border-gray-200">
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
