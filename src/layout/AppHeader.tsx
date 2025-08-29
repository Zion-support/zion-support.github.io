import { ArrowRight, Atom, BookOpen, Brain, Building, Building2, ChevronDown, Cloud, Code, Cpu, DollarSign, FileText, Globe, HeartHandshake, Heart, HelpCircle, Leaf, Lock, Mail, MapPin, Menu, MessageCircle, PenTool, Phone, Rocket, Scale, Search, Settings, Shield, ShoppingCart, Star, Target, TrendingUp, Users, X, Zap, Truck, Play, User, Bell, Award, GraduationCap, LifeBuoy } from 'lucide-react';
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
    { name: 'AI Marketing Automation', href: '/innovative-services-showcase-2025', icon: TrendingUp, description: 'Marketing campaign optimization' },
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
        { name: 'AI Workflow Orchestrator', href: '/services/ai-workflow-orchestrator', description: 'Process automation' },
        { name: 'AI Content Generation', href: '/services/ai-content-generator', description: 'Creative AI content' },
        { name: 'AI Customer Analytics', href: '/services/ai-customer-experience-analytics', description: 'Customer insights' }
      ]
    },
    {
      name: 'Cybersecurity',
      icon: Shield,
      color: 'from-red-600 to-orange-600',
      services: [
        { name: 'AI Threat Detection', href: '/services/ai-cybersecurity-threat-detection', description: 'Advanced security' },
        { name: 'Zero Trust Architecture', href: '/services/zero-trust-network-architecture', description: 'Secure by design' },
        { name: 'Incident Response', href: '/services/incident-response-platform', description: 'Rapid response' },
        { name: 'Compliance Management', href: '/services/ai-compliance-assistant', description: 'Regulatory compliance' }
      ]
    },
    {
      name: 'Cloud & Infrastructure',
      icon: Cloud,
      color: 'from-cyan-600 to-blue-600',
      services: [
        { name: 'Cloud DevOps', href: '/services/cloud-devops', description: 'Infrastructure automation' },
        { name: 'Edge Computing', href: '/services/edge-computing-platform', description: 'Distributed computing' },
        { name: 'IoT Services', href: '/services/iot-edge', description: 'Connected devices' },
        { name: 'Data Analytics', href: '/services/data-analytics', description: 'Big data solutions' }
      ]
    }
  ];

  const solutions = [
    { name: 'Enterprise Solutions', href: '/solutions', icon: Building, description: 'Large-scale business solutions' },
    { name: 'SMB Solutions', href: '/solutions', icon: Building2, description: 'Small & medium business solutions' },
    { name: 'Startup Solutions', href: '/solutions', icon: Rocket, description: 'Growth-focused solutions' },
    { name: 'Government Solutions', href: '/solutions', icon: Shield, description: 'Public sector solutions' },
    { name: 'Healthcare Solutions', href: '/solutions', icon: Heart, description: 'Medical technology solutions' },
    { name: 'Financial Solutions', href: '/solutions', icon: DollarSign, description: 'Fintech & banking solutions' },
    { name: 'Education Solutions', href: '/solutions', icon: GraduationCap, description: 'Learning technology solutions' },
    { name: 'Manufacturing Solutions', href: '/solutions', icon: Settings, description: 'Industry 4.0 solutions' }
  ];

  const resources = [
    { name: 'Case Studies', href: '/case-studies', icon: FileText, description: 'Success stories & implementations' },
    { name: 'White Papers', href: '/white-papers', icon: BookOpen, description: 'Industry insights & research' },
    { name: 'Webinars', href: '/webinars', icon: Play, description: 'Educational sessions & demos' },
    { name: 'Blog', href: '/blog', icon: PenTool, description: 'Latest news & insights' },
    { name: 'Documentation', href: '/documentation', icon: HelpCircle, description: 'Technical guides & APIs' },
    { name: 'Training', href: '/training', icon: GraduationCap, description: 'Professional development' },
    { name: 'Community', href: '/community', icon: Users, description: 'Developer community' },
    { name: 'Support', href: '/support', icon: LifeBuoy, description: 'Technical support & help' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Atom className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
              </div>
              <span className={`text-xl lg:text-2xl font-bold transition-colors ${
                scrolled ? 'text-gray-900' : 'text-white'
              }`}>
                Zion Tech Group
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    item.current
                      ? 'text-cyan-500'
                      : scrolled
                      ? 'text-gray-700 hover:text-cyan-500'
                      : 'text-white hover:text-cyan-300'
                  }`}
                >
                  {item.name}
                </Link>
                
                {/* Dropdown Menus */}
                {item.hasDropdown && (
                  <div className="absolute top-full left-0 mt-2 w-80 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="bg-white rounded-xl shadow-2xl border border-gray-200 p-6">
                      {item.name === 'Services' && (
                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold text-gray-900 mb-4">Our Services</h3>
                          <div className="grid grid-cols-2 gap-4">
                            {services.slice(0, 8).map((service) => (
                              <Link
                                key={service.name}
                                to={service.href}
                                className="group flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                              >
                                <service.icon className="w-5 h-5 text-cyan-500 mt-0.5" />
                                <div>
                                  <p className="text-sm font-medium text-gray-900 group-hover:text-cyan-600">
                                    {service.name}
                                  </p>
                                  <p className="text-xs text-gray-500">{service.description}</p>
                                </div>
                              </Link>
                            ))}
                          </div>
                          <div className="pt-4 border-t border-gray-200">
                            <Link
                              to="/services"
                              className="inline-flex items-center text-sm font-medium text-cyan-600 hover:text-cyan-700"
                            >
                              View all services
                              <ArrowRight className="ml-1 w-4 h-4" />
                            </Link>
                          </div>
                        </div>
                      )}
                      
                      {item.name === 'Solutions' && (
                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold text-gray-900 mb-4">Solutions by Industry</h3>
                          <div className="grid grid-cols-2 gap-4">
                            {solutions.map((solution) => (
                              <Link
                                key={solution.name}
                                to={solution.href}
                                className="group flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                              >
                                <solution.icon className="w-5 h-5 text-cyan-500 mt-0.5" />
                                <div>
                                  <p className="text-sm font-medium text-gray-900 group-hover:text-cyan-600">
                                    {solution.name}
                                  </p>
                                  <p className="text-xs text-gray-500">{solution.description}</p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {item.name === 'Resources' && (
                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold text-gray-900 mb-4">Resources & Support</h3>
                          <div className="grid grid-cols-2 gap-4">
                            {resources.map((resource) => (
                              <Link
                                key={resource.name}
                                to={resource.href}
                                className="group flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                              >
                                <resource.icon className="w-5 h-5 text-cyan-500 mt-0.5" />
                                <div>
                                  <p className="text-sm font-medium text-gray-900 group-hover:text-cyan-600">
                                    {resource.name}
                                  </p>
                                  <p className="text-xs text-gray-500">{resource.description}</p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right side - Search, Theme Toggle, CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Search */}
            <form onSubmit={handleSearch} className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white/90 backdrop-blur-sm"
              />
            </form>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* CTA Button */}
            <Link
              to="/contact"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transition-all duration-200"
            >
              Get Started
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-md transition-colors ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-6 space-y-4">
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </form>

            {/* Mobile Navigation */}
            <nav className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-cyan-600 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Mobile CTA */}
            <div className="pt-4 border-t border-gray-200">
              <Link
                to="/contact"
                className="block w-full text-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
