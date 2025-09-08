import { ArrowRight, Atom, BookOpen, Brain, Building, Building2, ChevronDown, Cloud, Code, Cpu, DollarSign, FileText, Globe, HeartHandshake, Heart, HelpCircle, Leaf, Lock, Mail, MapPin, Menu, MessageCircle, PenTool, Phone, Rocket, Scale, Search, Settings, Shield, ShoppingCart, Star, Target, TrendingUp, Users, X, Zap, Copy } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, User, Bell, ChevronDown, Zap, Brain, Shield, Cloud, Rocket, Globe, Cpu, Lock, Heart, Users, ShoppingCart, BookOpen, MessageCircle, HelpCircle, DollarSign, Star, TrendingUp, Award, Settings, Phone, Mail, MapPin, Building, Briefcase, Target, Lightbulb, Code, Database, Network, Server, Smartphone, Globe2, ShieldCheck, BarChart3, Palette, Zap2 } from 'lucide-react';
import { ThemeToggle } from '../components/ThemeToggle';
import { ZionLoadingSpinner } from '../components/ui/EnhancedLoadingSpinner';
import { motion, AnimatePresence } from 'framer-motion';

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
    { name: 'AI Services', href: '/ai-services', current: false, hasDropdown: false },
    { name: 'IT Services', href: '/it-services', current: false, hasDropdown: false },
    { name: 'Micro SaaS', href: '/micro-saas', current: false, hasDropdown: false },
    { name: 'Pricing', href: '/pricing-guide', current: false, hasDropdown: false },
    { name: 'Resources', href: '#', current: false, hasDropdown: true },
    { name: 'About', href: '/about', current: false, hasDropdown: false },
    { name: 'Contact', href: '/contact', current: false, hasDropdown: false },
  ];

  const services = [
    { 
      name: 'AI & Machine Learning', 
      href: '/services/ai-business-intelligence', 
      icon: Brain, 
      description: 'AI Business Intelligence & ML Solutions',
      featured: true,
      color: 'from-purple-500 to-pink-500',
      subServices: [
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence' },
        { name: 'AI Content Creation', href: '/services/ai-content-creation' },
        { name: 'AI Customer Support', href: '/services/ai-customer-support' },
        { name: 'AI Healthcare Analytics', href: '/services/ai-healthcare-analytics' },
        { name: 'AI Financial Trading', href: '/services/ai-financial-trading' },
        { name: 'AI Legal Document Analysis', href: '/services/ai-legal-document-analysis' },
        { name: 'AI Supply Chain Optimization', href: '/services/ai-supply-chain-optimization' },
        { name: 'AI Marketing Automation', href: '/services/ai-marketing-automation' },
        { name: 'AI Project Management', href: '/services/ai-project-management' },
        { name: 'AI Workflow Automation', href: '/services/ai-workflow-automation' }
      ]
    },
    { 
      name: 'Cloud & DevOps', 
      href: '/services/cloud-devops', 
      icon: Cloud, 
      description: 'Cloud Infrastructure & DevOps',
      featured: true,
      color: 'from-blue-500 to-cyan-500',
      subServices: [
        { name: 'Cloud DevOps', href: '/services/cloud-devops' },
        { name: 'IT Infrastructure', href: '/services/it-infrastructure' },
        { name: 'Digital Twin Platform', href: '/services/digital-twin' },
        { name: 'Data Analytics', href: '/services/data-analytics' },
        { name: 'FinOps Advisor', href: '/services/finops-advisor' },
        { name: 'IT Consulting', href: '/services/it-consulting' }
      ]
    },
    { 
      name: 'Cybersecurity', 
      href: '/services/cybersecurity', 
      icon: Shield, 
      description: 'AI-Powered Security Solutions',
      featured: true,
      color: 'from-green-500 to-blue-500',
      subServices: [
        { name: 'AI Cybersecurity', href: '/services/ai-cybersecurity' },
        { name: 'Security Headers CSP', href: '/services/security-headers-csp' },
        { name: 'Zero Trust Network Access', href: '/services/zero-trust-network-access' },
        { name: 'GDPR DSAR Portal', href: '/services/gdpr-dsar-portal' },
        { name: 'Incident Response Platform', href: '/services/incident-response-platform' }
      ]
    },
    { 
      name: 'Emerging Technologies', 
      href: '/services/quantum-computing', 
      icon: Atom, 
      description: 'Quantum Computing & IoT',
      featured: true,
      color: 'from-purple-500 to-pink-500',
      subServices: [
        { name: 'Quantum Computing', href: '/services/quantum-computing' },
        { name: 'IoT Edge Computing', href: '/services/iot-edge-computing' },
        { name: 'Space Technology', href: '/services/space-tech' },
        { name: 'Sustainable Technology', href: '/services/sustainable-technology' },
        { name: 'Robotics & Automation', href: '/services/robotics-automation' }
      ]
    },
    { 
      name: 'Micro SAAS Products', 
      href: '/services/micro-saas', 
      icon: ShoppingCart, 
      description: 'AI automations with transparent pricing',
      featured: true,
      color: 'from-orange-500 to-red-500',
      subServices: [
        { name: 'Micro SaaS Platform', href: '/services/micro-saas' },
        { name: 'Micro CRM', href: '/services/micro-crm' },
        { name: 'Helpdesk Platform', href: '/services/helpdesk-platform' },
        { name: 'Landing Page Generator', href: '/services/landing-page-generator' },
        { name: 'LLM Content Studio', href: '/services/llm-content-studio' }
      ]
    },
    { 
      name: 'Revolutionary 2030', 
      href: '/revolutionary-services-2030', 
      icon: Rocket, 
      description: 'Future Technology Solutions',
      featured: true,
      color: 'from-indigo-500 to-purple-500',
      subServices: [
        { name: 'Revolutionary Services 2030', href: '/revolutionary-services-2030' },
        { name: 'AI Autonomous Operations', href: '/revolutionary-services-2030#ai-autonomous-business-operations-2030' },
        { name: 'Quantum AI Cybersecurity', href: '/revolutionary-services-2030#quantum-ai-cybersecurity-2030' },
        { name: 'AI Content Creation Studio', href: '/revolutionary-services-2030#ai-content-creation-studio-2030' }
      ]
    }
  ];

  const solutions = [
    {
      name: 'Enterprise Solutions',
      href: '/solutions',
      icon: Building2,
      description: 'Large-scale business transformations',
      featured: true,
      subSolutions: [
        { name: 'Digital Transformation', href: '/services/digital-transformation' },
        { name: 'IT Infrastructure', href: '/services/it-infrastructure' },
        { name: 'Cloud Migration', href: '/services/cloud-devops' },
        { name: 'Data Analytics', href: '/services/data-analytics' }
      ]
    },
    {
      name: 'Industry Solutions',
      href: '/solutions',
      icon: Building,
      description: 'Industry-specific solutions',
      featured: true,
      subSolutions: [
        { name: 'Healthcare Solutions', href: '/solutions#healthcare' },
        { name: 'Financial Solutions', href: '/solutions#financial' },
        { name: 'Manufacturing Solutions', href: '/solutions#manufacturing' },
        { name: 'Retail Solutions', href: '/solutions#retail' }
      ]
    },
    {
      name: 'AI & Automation',
      href: '/solutions',
      icon: Brain,
      description: 'Intelligent automation solutions',
      featured: true,
      subSolutions: [
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence' },
        { name: 'AI Workflow Automation', href: '/services/ai-workflow-automation' },
        { name: 'AI Project Management', href: '/services/ai-project-management' },
        { name: 'AI Customer Support', href: '/services/ai-customer-support' }
      ]
    },
    {
      name: 'Cybersecurity',
      href: '/solutions',
      icon: Shield,
      description: 'Comprehensive security solutions',
      featured: true,
      subSolutions: [
        { name: 'AI Cybersecurity', href: '/services/ai-cybersecurity' },
        { name: 'Zero Trust Security', href: '/services/zero-trust-network-access' },
        { name: 'Compliance Solutions', href: '/services/ai-compliance-assistant' },
        { name: 'Incident Response', href: '/services/incident-response-platform' }
      ]
    },
    {
      name: 'Emerging Technologies',
      href: '/solutions',
      icon: Rocket,
      description: 'Cutting-edge technology solutions',
      featured: true,
      subSolutions: [
        { name: 'Quantum Computing', href: '/services/quantum-computing' },
        { name: 'IoT Solutions', href: '/services/iot-edge-computing' },
        { name: 'Digital Twin', href: '/services/digital-twin' },
        { name: 'Space Technology', href: '/services/space-tech' }
      ]
    }
  ];

  const resources = [
    {
      name: 'Learning & Insights',
      href: '/blog',
      icon: BookOpen,
      description: 'Latest industry trends and insights',
      featured: true,
      subResources: [
        { name: 'Blog & Insights', href: '/blog' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'White Papers', href: '/white-papers' },
        { name: 'Webinars', href: '/webinars' }
      ]
    },
    {
      name: 'Documentation & Support',
      href: '/docs',
      icon: Code,
      description: 'Technical guides and support',
      featured: true,
      subResources: [
        { name: 'Documentation', href: '/docs' },
        { name: 'FAQ & Support', href: '/faq' },
        { name: 'Help Center', href: '/help' },
        { name: 'API Reference', href: '/docs#api' }
      ]
    },
    {
      name: 'Pricing & Plans',
      href: '/pricing',
      icon: DollarSign,
      description: 'Complete pricing information',
      featured: true,
      subResources: [
        { name: 'Pricing Plans', href: '/pricing' },
        { name: 'Pricing Guide 2025', href: '/pricing-guide-2025' },
        { name: 'Pricing Guide 2027', href: '/pricing-guide-2027' },
        { name: 'Pricing Guide 2030', href: '/pricing-guide-2030' }
      ]
    },
    {
      name: 'Community & Events',
      href: '/community',
      icon: Users,
      description: 'Connect with our community',
      featured: true,
      subResources: [
        { name: 'Community Forum', href: '/community' },
        { name: 'Developer Hub', href: '/developers' },
        { name: 'Events & Meetups', href: '/events' },
        { name: 'Training Programs', href: '/training' }
      ]
    },
    {
      name: 'Business Resources',
      href: '/resources',
      icon: Target,
      description: 'Business growth resources',
      featured: true,
      subResources: [
        { name: 'Request Quote', href: '/request-quote' },
        { name: 'Schedule Demo', href: '/schedule-demo' },
        { name: 'Partnership Program', href: '/partners' },
        { name: 'Careers', href: '/careers' }
      ]
    }
  ];

  const quickLinks = [
    { name: 'Request Quote', href: '/request-quote', icon: MessageCircle, description: 'Get custom pricing' },
    { name: 'Pricing Guide', href: '/pricing', icon: DollarSign, description: 'View our pricing' },
    { name: 'Innovative Services 2025', href: '/innovative-services-showcase-2025', icon: Star, description: 'Latest cutting-edge solutions' },
    { name: 'Revolutionary Services 2030', href: '/revolutionary-services-showcase-2030', icon: TrendingUp, description: 'Future-ready services' },
  ];

  const companyCategories = [
    {
      name: 'About Us',
      icon: Building,
      color: 'from-blue-600 to-cyan-600',
      items: [
        { name: 'About Us', href: '/about', description: 'Our story and mission' },
        { name: 'Team', href: '/team', description: 'Meet our experts' },
        { name: 'Careers', href: '/careers', description: 'Join our team' },
        { name: 'Partners', href: '/partners', description: 'Strategic partnerships' }
      ]
    },
    {
      name: 'Resources',
      icon: BookOpen,
      color: 'from-green-600 to-emerald-600',
      items: [
        { name: 'Blog', href: '/blog', description: 'Latest insights and news' },
        { name: 'News', href: '/news', description: 'Company updates' },
        { name: 'Events', href: '/events', description: 'Upcoming events' },
        { name: 'Marketplace', href: '/marketplace', description: 'Our products' }
      ]
    }
  ];

  const supportCategories = [
    {
      name: 'Help & Support',
      icon: HelpCircle,
      color: 'from-blue-600 to-cyan-600',
      items: [
        { name: 'Help Center', href: '/help', description: 'Find answers to questions' },
        { name: 'Support Portal', href: '/support', description: 'Technical assistance' },
        { name: 'FAQ', href: '/faq', description: 'Frequently asked questions' },
        { name: 'Contact Support', href: '/contact', description: 'Get in touch' }
      ]
    },
    {
      name: 'Resources',
      icon: BookOpen,
      color: 'from-green-600 to-emerald-600',
      items: [
        { name: 'Documentation', href: '/docs', description: 'Technical guides' },
        { name: 'Training', href: '/training', description: 'Learning resources' },
        { name: 'Community', href: '/community', description: 'User community' },
        { name: 'Status', href: '/status', description: 'System status' }
      ]
    }
  ];

  const supportLinks = [
    { name: 'FAQ', href: '/faq', icon: HelpCircle },
    { name: 'Blog', href: '/blog', icon: BookOpen },
    { name: 'Support', href: '/support', icon: MessageCircle },
    { name: 'Documentation', href: '/docs', icon: BookOpen },
  ];

  const resourcesCategories = [
    {
      name: 'Learning & Support',
      description: 'Knowledge base and assistance',
      color: 'from-blue-500 to-cyan-600',
      icon: BookOpen,
      links: [
        { name: 'Documentation', href: '/docs', description: 'Technical guides and API docs' },
        { name: 'Help Center', href: '/help', description: 'Self-service support portal' },
        { name: 'Training', href: '/training', description: 'Educational resources' },
        { name: 'Webinars', href: '/webinars', description: 'Live and recorded sessions' },
        { name: 'FAQ', href: '/faq', description: 'Frequently asked questions' }
      ]
    },
    {
      name: 'Company',
      description: 'About us and our team',
      color: 'from-green-500 to-emerald-600',
      icon: Users,
      links: [
        { name: 'About Us', href: '/about', description: 'Our story and mission' },
        { name: 'Team', href: '/team', description: 'Meet our experts' },
        { name: 'Careers', href: '/careers', description: 'Join our team' },
        { name: 'Press', href: '/press', description: 'Media resources' },
        { name: 'Partners', href: '/partners', description: 'Strategic partnerships' }
      ]
    },
    {
      name: 'Resources',
      description: 'Insights and tools',
      color: 'from-purple-500 to-pink-600',
      icon: Star,
      links: [
        { name: 'Blog', href: '/blog', description: 'Latest insights and trends' },
        { name: 'Case Studies', href: '/case-studies', description: 'Success stories' },
        { name: 'White Papers', href: '/white-papers', description: 'In-depth research' },
        { name: 'Status Page', href: '/status', description: 'Service status' },
        { name: 'Sitemap', href: '/sitemap', description: 'Site navigation' }
      ]
    }
  ];

  return (
    <>
      <header role="banner" className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? 'bg-slate-900/95 backdrop-blur-xl border-b border-cyan-400/20 shadow-2xl shadow-cyan-400/10' 
          : 'bg-slate-900/80 backdrop-blur-md border-b border-slate-700/20'
      }`}>
        <div className="container mx-auto px-4">
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
              {mainNavigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.hasDropdown ? (
                    <button
                      onClick={() => {
                        if (item.name === 'Services') {
                          setServicesDropdownOpen(!servicesDropdownOpen);
                          setResourcesDropdownOpen(false);
                        } else if (item.name === 'Resources') {
                          setResourcesDropdownOpen(!resourcesDropdownOpen);
                          setServicesDropdownOpen(false);
                        }
                      }}
                      className="flex items-center space-x-1 text-slate-300 hover:text-white transition-colors py-2"
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${
                        (item.name === 'Services' && servicesDropdownOpen) || 
                        (item.name === 'Resources' && resourcesDropdownOpen) ? 'rotate-180' : ''
                      }`} />
                    </button>
                  ) : (
                    <Link
                      to={item.href}
                      className="text-slate-300 hover:text-white transition-colors py-2"
                      onMouseEnter={() => prefetchRoute(item.href)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Right side actions */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <form onSubmit={handleSearch} className="hidden md:block relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 pl-10 pr-4 py-2 rounded-lg bg-slate-800/70 border border-slate-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none text-white placeholder-slate-400 text-sm"
                />
              </form>

              {/* Theme Toggle */}
              <ThemeToggle />

              {/* Contact Info */}
              <div className="hidden lg:flex items-center space-x-4 text-sm text-slate-300">
                <a href="tel:+13024640950" className="flex items-center space-x-1 hover:text-cyan-400 transition-colors">
                  <Phone className="w-4 h-4" />
                  <span>+1 302 464 0950</span>
                </a>
              </div>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Services Dropdown */}
        <AnimatePresence>
          {servicesDropdownOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-slate-900/95 backdrop-blur-xl border-b border-cyan-400/20"
            >
              <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                  {servicesCategories.map((category) => (
                    <div key={category.name} className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                          <category.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-white">{category.name}</h3>
                          <p className="text-sm text-slate-400">{category.description}</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        {category.services.map((service) => (
                          <Link
                            key={service.name}
                            to={service.href}
                            className="block p-3 rounded-lg hover:bg-slate-800/50 transition-colors group"
                          >
                            <div className="font-medium text-white group-hover:text-cyan-400 transition-colors">
                              {service.name}
                            </div>
                            <div className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                              {service.description}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quick Links Section */}
                <div className="mt-8 pt-8 border-t border-slate-700">
                  <h3 className="text-lg font-semibold text-white mb-4">Quick Access</h3>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {quickLinks.map((link) => (
                      <Link
                        key={link.name}
                        to={link.href}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-800/50 transition-colors group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center group-hover:bg-cyan-400/20 transition-colors">
                          <link.icon className="w-4 h-4 text-cyan-400" />
                        </div>
                        <div>
                          <div className="font-medium text-white group-hover:text-cyan-400 transition-colors">
                            {link.name}
                          </div>
                          <div className="text-sm text-slate-400">
                            {link.description}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Resources Dropdown */}
        <AnimatePresence>
          {resourcesDropdownOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-slate-900/95 backdrop-blur-xl border-b border-cyan-400/20"
            >
              <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {resourcesCategories.map((category) => (
                    <div key={category.name} className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                          <category.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-white">{category.name}</h3>
                          <p className="text-sm text-slate-400">{category.description}</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        {category.links.map((link) => (
                          <Link
                            key={link.name}
                            to={link.href}
                            className="block p-3 rounded-lg hover:bg-slate-800/50 transition-colors group"
                          >
                            <div className="font-medium text-white group-hover:text-cyan-400 transition-colors">
                              {link.name}
                            </div>
                            <div className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                              {link.description}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 lg:hidden"
          >
            <div className="absolute inset-0 bg-black/50" onClick={() => setMobileMenuOpen(false)} />
            <div className="absolute right-0 top-0 h-full w-80 bg-slate-900 border-l border-slate-700 overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-xl font-semibold text-white">Menu</h2>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Mobile Search */}
                <form onSubmit={handleSearch} className="mb-6">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Search services..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-lg bg-slate-800 border border-slate-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none text-white placeholder-slate-400"
                    />
                  </div>
                </form>

                {/* Mobile Navigation */}
                <nav className="space-y-4">
                  {mainNavigation.map((item) => (
                    <div key={item.name}>
                      {item.hasDropdown ? (
                        <div className="space-y-2">
                          <div className="font-medium text-white py-2">{item.name}</div>
                          <div className="pl-4 space-y-2">
                            {item.name === 'Services' && servicesCategories.map((category) => (
                              <div key={category.name} className="space-y-2">
                                <div className="text-sm font-medium text-cyan-400">{category.name}</div>
                                <div className="pl-4 space-y-1">
                                  {category.services.slice(0, 3).map((service) => (
                                    <Link
                                      key={service.name}
                                      to={service.href}
                                      onClick={() => setMobileMenuOpen(false)}
                                      className="block text-sm text-slate-300 hover:text-white transition-colors py-1"
                                    >
                                      {service.name}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                            {item.name === 'Resources' && resourcesCategories.map((category) => (
                              <div key={category.name} className="space-y-2">
                                <div className="text-sm font-medium text-cyan-400">{category.name}</div>
                                <div className="pl-4 space-y-1">
                                  {category.links.map((link) => (
                                    <Link
                                      key={link.name}
                                      to={link.href}
                                      onClick={() => setMobileMenuOpen(false)}
                                      className="block text-sm text-slate-300 hover:text-white transition-colors py-1"
                                    >
                                      {link.name}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Link
                          to={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block font-medium text-white hover:text-cyan-400 transition-colors py-2"
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </nav>

                {/* Mobile Quick Links */}
                <div className="mt-8 pt-8 border-t border-slate-700">
                  <h3 className="font-medium text-white mb-4">Quick Access</h3>
                  <div className="space-y-2">
                    {quickLinks.map((link) => (
                      <Link
                        key={link.name}
                        to={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center space-x-3 p-2 rounded-lg hover:bg-slate-800 transition-colors"
                      >
                        <link.icon className="w-5 h-5 text-cyan-400" />
                        <span className="text-slate-300">{link.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Mobile Contact Info */}
                <div className="mt-8 pt-8 border-t border-slate-700">
                  <h3 className="font-medium text-white mb-4">Contact Us</h3>
                  <div className="space-y-3 text-sm text-slate-300">
                    <a href="tel:+13024640950" className="flex items-center space-x-3 hover:text-cyan-400 transition-colors">
                      <Phone className="w-4 h-4" />
                      <span>+1 302 464 0950</span>
                    </a>
                    <a href="mailto:kleber@ziontechgroup.com" className="flex items-center space-x-3 hover:text-cyan-400 transition-colors">
                      <Mail className="w-4 h-4" />
                      <span>kleber@ziontechgroup.com</span>
                    </a>
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-4 h-4 mt-0.5" />
                      <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
