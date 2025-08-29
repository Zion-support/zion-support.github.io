import { ArrowRight, Atom, BookOpen, Brain, Building, Building2, ChevronDown, Cloud, Code, Cpu, DollarSign, FileText, Globe, HeartHandshake, Heart, HelpCircle, Leaf, Lock, Mail, MapPin, Menu, MessageCircle, PenTool, Phone, Rocket, Scale, Search, Settings, Shield, ShoppingCart, Star, Target, TrendingUp, Users, X, Zap } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ThemeToggle } from '../components/ThemeToggle';

export function AppHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
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
    { name: 'IT Services', href: '/it-services', current: false, hasDropdown: false },
    { name: 'Micro SaaS', href: '/micro-saas', current: false, hasDropdown: false },
    { name: 'Pricing', href: '/pricing-guide', current: false, hasDropdown: false },
    { name: 'Resources', href: '#', current: false, hasDropdown: true },
    { name: 'About', href: '/about', current: false, hasDropdown: false },
    { name: 'Contact', href: '/contact', current: false, hasDropdown: false },
  ];

  const servicesCategories = [
    {
      name: 'AI & Analytics',
      description: 'Intelligent automation & insights',
      icon: Brain,
      color: 'from-purple-500 to-cyan-500',
      links: [
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence', description: 'Machine Learning & Data Science' },
        { name: 'AI Sales Copilot', href: '/services/ai-sales-copilot', description: 'Sales automation & optimization' },
        { name: 'AI Compliance Assistant', href: '/services/ai-compliance-assistant', description: 'Regulatory compliance automation' },
        { name: 'AI Auto Email Responder', href: '/services/ai-auto-email-responder', description: 'Smart email management' },
        { name: 'LLM Content Studio', href: '/services/llm-content-studio', description: 'AI-powered content creation' },
        { name: 'AI Lead Scoring', href: '/services/ai-lead-scoring', description: 'Smart lead qualification' },
        { name: 'AI SEO Optimizer', href: '/services/ai-seo-optimizer', description: 'Search engine optimization' },
        { name: 'AI Proofreading Studio', href: '/services/ai-proofreading-studio', description: 'Content quality assurance' }
      ]
    },
    {
      name: 'Cloud & DevOps',
      description: 'Infrastructure & automation',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-500',
      links: [
        { name: 'Cloud DevOps', href: '/services/cloud-devops', description: 'DevOps & Infrastructure' },
        { name: 'FinOps Optimizer', href: '/services/finops-optimizer', description: 'Cloud cost optimization' },
        { name: 'API Monitoring SaaS', href: '/services/api-monitoring-saas', description: 'API performance tracking' },
        { name: 'MLOps Pipeline', href: '/services/mlops-pipeline', description: 'Machine learning operations' },
        { name: 'Digital Twin', href: '/services/digital-twin', description: 'Virtual replicas & simulation' },
        { name: 'IoT Edge Computing', href: '/services/iot-edge-computing', description: 'IoT & real-time processing' }
      ]
    },
    {
      name: 'Digital Innovation',
      description: 'Emerging technology solutions',
      icon: Rocket,
      color: 'from-green-500 to-emerald-500',
      links: [
        { name: 'Digital Twin Platform', href: '/services/digital-twin', description: 'Virtual replicas & simulation' },
        { name: 'IoT Edge Services', href: '/services/iot-edge-computing', description: 'IoT & real-time processing' },
        { name: 'Data Analytics', href: '/services/data-analytics', description: 'Business intelligence & insights' },
        { name: 'Digital Transformation', href: '/services/digital-transformation', description: 'Business process modernization' },
        { name: 'Quantum Computing', href: '/services/quantum-computing', description: 'Quantum AI & optimization' },
        { name: 'Blockchain Solutions', href: '/services/blockchain-solutions', description: 'Distributed ledger technology' },
        { name: 'Space Technology', href: '/services/space-technology', description: 'Space tech innovations' }
      ]
    },
    {
      name: 'Cybersecurity',
      description: 'Security & compliance',
      icon: Shield,
      color: 'from-red-500 to-pink-500',
      links: [
        { name: 'AI Compliance Copilot', href: '/services/ai-compliance-copilot', description: 'Regulatory compliance automation' },
        { name: 'Zero Trust Architecture', href: '/services/zero-trust-architecture', description: 'Advanced security framework' },
        { name: 'Vendor Risk Management', href: '/services/vendor-risk-management', description: 'Third-party risk assessment' },
        { name: 'SOC2 Compliance Tracker', href: '/services/soc2-compliance-tracker', description: 'Compliance monitoring' },
        { name: 'GDPR Cookie Compliance', href: '/services/gdpr-cookie-compliance', description: 'Privacy regulation compliance' },
        { name: 'AI Cybersecurity', href: '/services/ai-cybersecurity', description: 'AI-Powered Security' }
      ]
    },
    {
      name: 'Micro SaaS',
      description: 'Specialized business tools',
      icon: ShoppingCart,
      color: 'from-orange-500 to-red-500',
      links: [
        { name: 'Affiliate Marketing Tracker', href: '/services/affiliate-marketing-tracker', description: 'Affiliate program management' },
        { name: 'Employee Scheduling SaaS', href: '/services/employee-scheduling-saas', description: 'Workforce management' },
        { name: 'SaaS Churn Predictor', href: '/services/saas-churn-predictor', description: 'Customer retention analytics' },
        { name: 'AI Support Helpdesk', href: '/services/ai-support-helpdesk', description: 'Automated customer support' },
        { name: 'Uptime SLA Monitor', href: '/services/uptime-sla-monitor', description: 'Service level monitoring' },
        { name: 'Micro SaaS Products', href: '/services/micro-saas', description: 'AI automations with transparent pricing' }
      ]
    }
  ];

  const resourcesCategories = [
    {
      name: 'Learning & Support',
      description: 'Knowledge & assistance',
      icon: BookOpen,
      color: 'from-blue-500 to-indigo-500',
      links: [
        { name: 'Documentation', href: '/docs', description: 'Technical guides & API docs' },
        { name: 'Help Center', href: '/help', description: 'Support & troubleshooting' },
        { name: 'Training', href: '/training', description: 'Skill development programs' },
        { name: 'Webinars', href: '/webinars', description: 'Live learning sessions' },
        { name: 'FAQ', href: '/faq', description: 'Frequently asked questions' }
      ]
    },
    {
      name: 'Company',
      description: 'About Zion Tech Group',
      icon: Building,
      color: 'from-green-500 to-emerald-500',
      links: [
        { name: 'About Us', href: '/about', description: 'Our story & mission' },
        { name: 'Team', href: '/team', description: 'Meet our experts' },
        { name: 'Careers', href: '/careers', description: 'Join our team' },
        { name: 'Press', href: '/press', description: 'News & announcements' },
        { name: 'Partners', href: '/partners', description: 'Strategic partnerships' }
      ]
    },
    {
      name: 'Resources',
      description: 'Tools & insights',
      icon: FileText,
      color: 'from-purple-500 to-pink-500',
      links: [
        { name: 'Blog', href: '/blog', description: 'Industry insights & updates' },
        { name: 'Case Studies', href: '/case-studies', description: 'Success stories' },
        { name: 'White Papers', href: '/white-papers', description: 'In-depth research' },
        { name: 'Status Page', href: '/status', description: 'Service status & uptime' },
        { name: 'Sitemap', href: '/sitemap', description: 'Site navigation guide' }
      ]
    }
  ];

  const quickLinks = [
    { name: 'Marketplace', href: '/marketplace', icon: ShoppingCart },
    { name: 'Request Quote', href: '/request-quote', icon: MessageCircle },
    { name: 'Pricing', href: '/pricing', icon: DollarSign },
    { name: 'Careers', href: '/careers', icon: Users },
    { name: 'Partners', href: '/partners', icon: HeartHandshake },
    { name: 'Privacy', href: '/privacy', icon: Shield },
    { name: 'Terms', href: '/terms', icon: BookOpen },
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  };

  return (
    <>
      <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? 'bg-slate-900/95 backdrop-blur-xl border-b border-cyan-400/20 shadow-2xl shadow-cyan-400/10' 
          : 'bg-slate-900/80 backdrop-blur-md border-b border-slate-700/20'
      }`}>
        <div className="container-responsive">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0 group">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                  </div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                    Zion Tech Group
                  </h1>
                </div>
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.hasDropdown ? (
                    <div className="relative">
                      <button
                        onClick={() => {
                          if (item.name === 'Services') {
                            setServicesDropdownOpen(!servicesDropdownOpen);
                          } else if (item.name === 'Resources') {
                            setResourcesDropdownOpen(!resourcesDropdownOpen);
                          }
                        }}
                        className="flex items-center text-slate-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-all duration-200 relative group"
                      >
                        {item.name}
                        <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                          (item.name === 'Services' && servicesDropdownOpen) ||
                          (item.name === 'Resources' && resourcesDropdownOpen)
                            ? 'rotate-180' : ''
                        }`} />
                      </button>

                      {/* Services Dropdown */}
                      {item.name === 'Services' && servicesDropdownOpen && (
                        <div className="absolute top-full left-0 mt-2 w-[800px] bg-slate-800/95 backdrop-blur-xl rounded-2xl border border-slate-700/50 shadow-2xl shadow-black/50 overflow-hidden">
                          <div className="p-6">
                            <div className="grid grid-cols-2 gap-6">
                              {servicesCategories.map((category) => (
                                <div key={category.name} className="col-span-1">
                                  <h3 className="font-semibold text-white mb-4">{category.name}</h3>
                                  <div className="space-y-3">
                                    {category.links.map((link) => (
                                      <Link
                                        key={link.name}
                                        to={link.href}
                                        className="block text-slate-400 hover:text-cyan-400 text-sm"
                                        onClick={() => setServicesDropdownOpen(false)}
                                      >
                                        {link.name}
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                            <div className="mt-6 pt-6 border-t border-slate-700/50">
                              <Link
                                to="/services"
                                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                                onClick={() => setServicesDropdownOpen(false)}
                              >
                                View All Services
                                <ArrowRight className="w-4 h-4" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Resources Dropdown */}
                      {item.name === 'Resources' && resourcesDropdownOpen && (
                        <div className="absolute top-full left-0 mt-2 w-[600px] bg-slate-800/95 backdrop-blur-xl rounded-2xl border border-slate-700/50 shadow-2xl shadow-black/50 overflow-hidden">
                          <div className="p-6">
                            <div className="grid grid-cols-2 gap-4">
                              {resourcesCategories.map((category) => (
                                <div key={category.name} className="col-span-1">
                                  <h3 className="font-semibold text-white mb-4">{category.name}</h3>
                                  <div className="space-y-3">
                                    {category.links.map((link) => (
                                      <Link
                                        key={link.name}
                                        to={link.href}
                                        className="block text-slate-400 hover:text-cyan-400 text-sm"
                                        onClick={() => setResourcesDropdownOpen(false)}
                                      >
                                        {link.name}
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className="text-slate-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-all duration-200 relative group"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Right side - Search, Actions, Mobile menu */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <form onSubmit={handleSearch} className="hidden md:block">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-64 pl-10 pr-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-sm"
                  />
                </div>
              </form>

              {/* Contact Info */}
              <div className="hidden lg:flex items-center space-x-4">
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span className="hidden xl:inline">{contactInfo.phone}</span>
                </a>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors text-sm"
                >
                  <Mail className="w-4 h-4" />
                  <span className="hidden xl:inline">{contactInfo.email}</span>
                </a>
              </div>

              {/* CTA Button */}
              <Link
                to="/request-quote"
                className="hidden md:inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white text-sm font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Get Quote
              </Link>

              {/* Theme Toggle */}
              <ThemeToggle />

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-700/50 transition-colors"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-800/95 backdrop-blur-xl border-t border-slate-700/50">
            <div className="container-responsive py-6">
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="mb-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search services, solutions..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
              </form>

              {/* Mobile Navigation */}
              <nav className="space-y-4">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.hasDropdown ? (
                      <div>
                        <button
                          onClick={() => {
                            if (item.name === 'Services') setServicesDropdownOpen(!servicesDropdownOpen);
                            else if (item.name === 'Resources') setResourcesDropdownOpen(!resourcesDropdownOpen);
                          }}
                          className="flex items-center justify-between w-full text-left text-slate-300 hover:text-cyan-400 py-2 text-lg font-medium transition-colors"
                        >
                          {item.name}
                          <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${
                            (item.name === 'Services' && servicesDropdownOpen) ||
                            (item.name === 'Resources' && resourcesDropdownOpen)
                              ? 'rotate-180' : ''
                          }`} />
                        </button>
                        
                        {/* Mobile Services Dropdown */}
                        {item.name === 'Services' && servicesDropdownOpen && (
                          <div className="ml-4 mt-2 space-y-2">
                            {servicesCategories.map((category) => (
                              <div key={category.name}>
                                <h3 className="font-semibold text-slate-300 mb-2">{category.name}</h3>
                                <div className="space-y-1">
                                  {category.links.map((link) => (
                                    <Link
                                      key={link.name}
                                      to={link.href}
                                      className="block text-slate-400 hover:text-cyan-400 py-1 transition-colors"
                                      onClick={() => setMobileMenuOpen(false)}
                                    >
                                      {link.name}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                            <Link
                              to="/services"
                              className="block text-cyan-400 hover:text-cyan-300 py-1 font-medium"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              View All Services →
                            </Link>
                          </div>
                        )}

                        {/* Mobile Resources Dropdown */}
                        {item.name === 'Resources' && resourcesDropdownOpen && (
                          <div className="ml-4 mt-2 space-y-2">
                            {resourcesCategories.map((category) => (
                              <div key={category.name}>
                                <h3 className="font-semibold text-slate-300 mb-2">{category.name}</h3>
                                <div className="space-y-1">
                                  {category.links.map((link) => (
                                    <Link
                                      key={link.name}
                                      to={link.href}
                                      className="block text-slate-400 hover:text-cyan-400 py-1 transition-colors"
                                      onClick={() => setMobileMenuOpen(false)}
                                    >
                                      {link.name}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        to={item.href}
                        className="block text-slate-300 hover:text-cyan-400 py-2 text-lg font-medium transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>

              {/* Mobile Contact Info */}
              <div className="mt-8 pt-6 border-t border-slate-700/50 space-y-3">
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  {contactInfo.phone}
                </a>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  {contactInfo.email}
                </a>
                <div className="flex items-start gap-3 text-slate-300">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{contactInfo.address}</span>
                </div>
              </div>

              {/* Mobile CTA */}
              <div className="mt-6">
                <Link
                  to="/request-quote"
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Your Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Click outside to close dropdowns */}
      {(servicesDropdownOpen || resourcesDropdownOpen) && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => {
            setServicesDropdownOpen(false);
            setResourcesDropdownOpen(false);
          }}
        />
      )}
    </>
  );
}
