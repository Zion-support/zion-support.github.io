import { ArrowRight, Atom, BookOpen, Brain, Building, Building2, ChevronDown, Cloud, Code, Cpu, DollarSign, FileText, Globe, HeartHandshake, Heart, HelpCircle, Leaf, Lock, Mail, MapPin, Menu, MessageCircle, PenTool, Phone, Rocket, Scale, Search, Settings, Shield, ShoppingCart, Star, Target, TrendingUp, Users, X, Zap, User, Bell, Award, GraduationCap, LifeBuoy, Truck, Play, BarChart3 } from 'lucide-react';
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
    { name: 'Micro SaaS', href: '/services/micro-saas', icon: ShoppingCart, description: 'Productized SaaS for niches' },
    { name: 'AI Sales Copilot', href: '/services/ai-sales-copilot', icon: TrendingUp, description: 'Complete sales automation suite' },
    { name: 'AI Customer Support', href: '/services/ai-support-helpdesk', icon: MessageCircle, description: 'Intelligent support platform' },
    { name: 'AI Financial Analytics', href: '/services/ai-financial-trading-platform', icon: DollarSign, description: 'Advanced financial insights' },
    { name: 'AI Supply Chain', href: '/services/ai-supply-chain-optimization', icon: Settings, description: 'Supply chain optimization' },
    { name: 'AI HR Platform', href: '/services/ai-hr-platform', icon: Users, description: 'HR automation & analytics' },
    { name: 'AI Project Management', href: '/services/ai-project-management-platform', icon: Target, description: 'Smart project optimization' },
    { name: 'AI Marketing Automation', href: '/services/ai-marketing-automation', icon: BarChart3, description: 'Marketing campaign optimization' },
    { name: 'AI Learning Management', href: '/services/ai-education-platform', icon: GraduationCap, description: 'Personalized learning platform' },
    { name: 'AI Legal Automation', href: '/services/ai-legal-research-platform', icon: FileText, description: 'Legal document automation' },
    { name: 'AI Healthcare Analytics Platform', href: '/services/ai-healthcare-analytics-platform', icon: Heart, description: 'Healthcare analytics platform' }
  ];

  const servicesCategories = [
    {
      name: 'Core Services',
      icon: Settings,
      color: 'from-blue-600 to-cyan-600',
      services: [
        { name: 'Services Overview', href: '/services', description: 'Complete service portfolio' },
        { name: 'AI Services', href: '/services/ai-services', description: 'AI-powered solutions' },
        { name: 'IT Services', href: '/services/it-services', description: 'Enterprise IT solutions' },
        { name: 'Micro SaaS', href: '/services/micro-saas', description: 'Scalable software solutions' }
      ]
    },
    {
      name: 'AI & Analytics',
      icon: Brain,
      color: 'from-purple-600 to-pink-600',
      services: [
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence', description: 'Machine Learning & Data Science' },
        { name: 'AI Healthcare Analytics', href: '/services/ai-healthcare-analytics', description: 'Medical AI & Diagnostics' },
        { name: 'AI Content Creation', href: '/services/ai-content-generation-platform', description: 'Content Generation & Optimization' },
        { name: 'AI Cybersecurity', href: '/services/ai-cybersecurity-suite', description: 'AI-Powered Security' },
        { name: 'AI Financial Trading', href: '/services/ai-financial-trading-platform', description: 'AI-Powered Trading Systems' },
        { name: 'AI Supply Chain Optimization', href: '/services/ai-supply-chain-optimization', description: 'Supply Chain AI Solutions' },
        { name: 'AI Legal Document Analysis', href: '/services/ai-legal-research-platform', description: 'Legal AI & Document Processing' }
      ]
    },
    {
      name: 'Emerging Technologies',
      icon: Zap,
      color: 'from-blue-600 to-cyan-600',
      services: [
        { name: 'Quantum AI Platform', href: '/services/quantum-ai-platform', description: 'Next-Generation Quantum Computing' },
        { name: 'Edge Computing Platform', href: '/services/edge-computing-platform', description: 'Distributed computing at the edge' },
        { name: 'Digital Twin', href: '/services/digital-twin', description: 'Simulation & Monitoring' },
        { name: 'Space Tech', href: '/services/space-tech', description: 'Space technology solutions' }
      ]
    },
    {
      name: 'Enterprise Solutions',
      icon: Building,
      color: 'from-indigo-600 to-purple-600',
      services: [
        { name: 'Cloud & DevOps', href: '/services/cloud-devops', description: 'Infrastructure & Automation' },
        { name: 'IoT & Edge', href: '/services/iot-edge', description: 'Smart Devices & Networks' },
        { name: 'Blockchain', href: '/services/blockchain-enterprise-solutions', description: 'DeFi & Smart Contracts' },
        { name: 'IT Infrastructure', href: '/services/it-infrastructure', description: 'Enterprise IT infrastructure' }
      ]
    }
  ];

  const solutions = [
    { name: 'Digital Transformation', href: '/solutions/digital-transformation', icon: Rocket, description: 'End-to-end digital transformation' },
    { name: 'AI Implementation', href: '/solutions/ai-implementation', icon: Brain, description: 'AI strategy and implementation' },
    { name: 'Cloud Migration', href: '/solutions/cloud-migration', icon: Cloud, description: 'Cloud strategy and migration' },
    { name: 'Cybersecurity', href: '/solutions/cybersecurity', icon: Shield, description: 'Comprehensive security solutions' },
    { name: 'Data Analytics', href: '/solutions/data-analytics', icon: BarChart3, description: 'Data-driven insights' },
    { name: 'IoT Solutions', href: '/solutions/iot-solutions', icon: Cpu, description: 'Internet of Things solutions' }
  ];

  const resources = [
    { name: 'Blog', href: '/blog', icon: BookOpen, description: 'Latest insights and updates' },
    { name: 'Case Studies', href: '/case-studies', icon: FileText, description: 'Success stories and results' },
    { name: 'White Papers', href: '/white-papers', icon: FileText, description: 'In-depth research and analysis' },
    { name: 'Webinars', href: '/webinars', icon: Play, description: 'Educational content and demos' },
    { name: 'Documentation', href: '/documentation', icon: BookOpen, description: 'Technical guides and API docs' },
    { name: 'Training', href: '/training', icon: GraduationCap, description: 'Professional development' }
  ];

  const featuredServices = [
    { 
      name: 'AI Enterprise Orchestrator', 
      href: '/services/ai-enterprise-orchestrator', 
      icon: Brain, 
      description: 'Multi-agent AI coordination & workflow automation',
      featured: true,
      color: 'from-purple-500 to-pink-500'
    },
    { 
      name: 'AI Business Intelligence', 
      href: '/services/ai-business-intelligence', 
      icon: Brain, 
      description: 'Machine Learning & Data Science',
      featured: true,
      color: 'from-purple-500 to-cyan-500'
    },
    { 
      name: 'AI Healthcare Analytics', 
      href: '/services/ai-healthcare-analytics', 
      icon: Heart, 
      description: 'Medical AI & Diagnostics',
      featured: true,
      color: 'from-red-500 to-pink-500'
    },
    { 
      name: 'AI Content Creation', 
      href: '/services/ai-content-generation-platform', 
      icon: PenTool, 
      description: 'Content Generation & Optimization',
      featured: true,
      color: 'from-blue-500 to-indigo-500'
    },
    { 
      name: 'AI Cybersecurity', 
      href: '/services/ai-cybersecurity-suite', 
      icon: Shield, 
      description: 'AI-Powered Security',
      featured: true,
      color: 'from-green-500 to-blue-500'
    },
    { 
      name: 'AI Financial Trading', 
      href: '/services/ai-financial-trading-platform', 
      icon: TrendingUp, 
      description: 'AI-Powered Trading Systems',
      featured: true,
      color: 'from-green-500 to-emerald-500'
    },
    { 
      name: 'AI Supply Chain Optimization', 
      href: '/services/ai-supply-chain-optimization', 
      icon: Truck, 
      description: 'Supply Chain AI Solutions',
      featured: true,
      color: 'from-orange-500 to-red-500'
    },
    { 
      name: 'AI Legal Document Analysis', 
      href: '/services/ai-legal-research-platform', 
      icon: FileText, 
      description: 'Legal AI & Document Processing',
      featured: true,
      color: 'from-blue-500 to-purple-500'
    }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-futuristic/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
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
                      className="flex items-center space-x-1 text-white hover:text-blue-300 transition-colors duration-200"
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="h-4 w-4" />
                    </button>
                    
                    {/* Services Dropdown */}
                    {item.name === 'Services' && servicesDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-screen max-w-4xl bg-futuristic border border-gray-700 rounded-lg shadow-xl p-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                          <div>
                            <h3 className="text-lg font-semibold text-white mb-4">Featured Services</h3>
                            <div className="space-y-3">
                              {featuredServices.slice(0, 4).map((service) => (
                                <Link
                                  key={service.name}
                                  to={service.href}
                                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800 transition-colors duration-200"
                                >
                                  <div className={`p-2 rounded-lg bg-gradient-to-r ${service.color}`}>
                                    <service.icon className="h-5 w-5 text-white" />
                                  </div>
                                  <div>
                                    <p className="text-white font-medium">{service.name}</p>
                                    <p className="text-gray-400 text-sm">{service.description}</p>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-white mb-4">Service Categories</h3>
                            <div className="space-y-3">
                              {servicesCategories.map((category) => (
                                <Link
                                  key={category.name}
                                  to={category.services[0].href}
                                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800 transition-colors duration-200"
                                >
                                  <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color}`}>
                                    <category.icon className="h-5 w-5 text-white" />
                                  </div>
                                  <div>
                                    <p className="text-white font-medium">{category.name}</p>
                                    <p className="text-gray-400 text-sm">{category.services.length} services</p>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="mt-6 pt-6 border-t border-gray-700">
                          <Link
                            to="/services"
                            className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-200"
                          >
                            <span>View All Services</span>
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                        </div>
                      </div>
                    )}

                    {/* Solutions Dropdown */}
                    {item.name === 'Solutions' && solutionsDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-80 bg-futuristic border border-gray-700 rounded-lg shadow-xl p-4">
                        <div className="space-y-3">
                          {solutions.map((solution) => (
                            <Link
                              key={solution.name}
                              to={solution.href}
                              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800 transition-colors duration-200"
                            >
                              <div className="p-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600">
                                <solution.icon className="h-5 w-5 text-white" />
                              </div>
                              <div>
                                <p className="text-white font-medium">{solution.name}</p>
                                <p className="text-gray-400 text-sm">{solution.description}</p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Resources Dropdown */}
                    {item.name === 'Resources' && resourcesDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-80 bg-futuristic border border-gray-700 rounded-lg shadow-xl p-4">
                        <div className="space-y-3">
                          {resources.map((resource) => (
                            <Link
                              key={resource.name}
                              to={resource.href}
                              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800 transition-colors duration-200"
                            >
                              <div className="p-2 rounded-lg bg-gradient-to-r from-green-600 to-emerald-600">
                                <resource.icon className="h-5 w-5 text-white" />
                              </div>
                              <div>
                                <p className="text-white font-medium">{resource.name}</p>
                                <p className="text-gray-400 text-sm">{resource.description}</p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className="text-white hover:text-blue-300 transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Right side - Search, Theme, User */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            {/* Search */}
            <form onSubmit={handleSearch} className="relative">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </form>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* User Menu */}
            <div className="relative">
              <button className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors duration-200">
                <User className="h-5 w-5 text-white" />
              </button>
            </div>

            {/* CTA Button */}
            <Link
              to="/contact"
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors duration-200"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-white" />
              ) : (
                <Menu className="h-6 w-6 text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-futuristic border-t border-gray-700">
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
                        className="w-full text-left px-3 py-2 text-white hover:text-blue-300 transition-colors duration-200"
                      >
                        {item.name}
                      </button>
                      {item.name === 'Services' && servicesDropdownOpen && (
                        <div className="pl-4 space-y-2">
                          {featuredServices.slice(0, 6).map((service) => (
                            <Link
                              key={service.name}
                              to={service.href}
                              className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200"
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className="block px-3 py-2 text-white hover:text-blue-300 transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              
              {/* Mobile CTA */}
              <div className="pt-4 border-t border-gray-700">
                <Link
                  to="/contact"
                  className="block w-full text-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
