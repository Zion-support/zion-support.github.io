import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, Search, User, Bell, ChevronDown, Zap, Brain, Shield, Cloud, 
  Rocket, Globe, Cpu, Lock, Heart, Users, ShoppingCart, BookOpen, 
  MessageCircle, HelpCircle, DollarSign, Gauge, Workflow, Atom, Star, 
  Target, TrendingUp, Award, Code, Truck, Building, BarChart3, PenTool, 
  Eye, Server, Smartphone, Database, Network, Clock, ArrowRight, 
  PanelLeft, Sparkles, Phone, Mail, MapPin, Satellite, FileText 
} from 'lucide-react';

export function EnhancedHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  const navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'About', href: '/about', current: false },
    { name: 'Services', href: '/services', current: false },
    { name: 'Innovative Services 2028', href: '/innovative-services-showcase-2028', current: false },
    { name: 'Solutions', href: '/solutions', current: false },
    { name: 'Pricing', href: '/pricing', current: false },
    { name: 'Contact', href: '/contact', current: false },
  ];

  // Organized services by category
  const servicesCategories = [
    {
      title: 'AI & Machine Learning',
      icon: Brain,
      color: 'from-blue-500 to-indigo-500',
      services: [
        { name: 'AI Autonomous Business Manager', href: '/services/ai-autonomous-business-manager', description: 'Fully autonomous business operations' },
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence', description: 'Advanced analytics & ML insights' },
        { name: 'AI Compliance Assistant', href: '/services/ai-compliance-assistant', description: 'Automated regulatory compliance' },
        { name: 'AI Sales Copilot', href: '/services/ai-sales-copilot', description: 'Intelligent sales optimization' },
        { name: 'AI-Powered SEO', href: '/services/ai-powered-seo', description: 'Machine learning SEO optimization' },
        { name: 'AI Content Marketing Suite', href: '/services/ai-content-marketing-suite', description: 'Automated content creation' },
        { name: 'AI Customer Support', href: '/services/ai-customer-support-automation', description: 'Intelligent support automation' },
        { name: 'AI Project Management', href: '/services/ai-project-management', description: 'AI-driven project optimization' },
        { name: 'AI Financial Analytics', href: '/services/ai-financial-analytics', description: 'Intelligent financial insights' },
      ]
    },
    {
      title: 'Cloud & Infrastructure',
      icon: Cloud,
      color: 'from-cyan-500 to-blue-500',
      services: [
        { name: 'Cloud DevOps', href: '/services/cloud-devops', description: 'Infrastructure automation & scaling' },
        { name: 'IT Infrastructure', href: '/services/it-infrastructure', description: 'Enterprise infrastructure solutions' },
        { name: 'FinOps Advisor', href: '/services/finops-advisor', description: 'Cloud cost optimization' },
        { name: 'Cloud FinOps Optimizer', href: '/services/cloud-finops-optimizer', description: 'Financial operations automation' },
      ]
    },
    {
      title: 'Cybersecurity',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      services: [
        { name: 'AI Cybersecurity Platform', href: '/services/ai-cybersecurity-platform', description: 'Advanced AI-powered security' },
        { name: 'Security Headers & CSP', href: '/services/security-headers-csp', description: 'Web security hardening' },
        { name: 'DSR Privacy Portal', href: '/services/dsr-portal', description: 'GDPR/CCPA compliance' },
        { name: 'Zero Trust Network Access', href: '/services/zero-trust-network-access', description: 'Modern security architecture' },
      ]
    },
    {
      title: 'Emerging Technologies',
      icon: Atom,
      color: 'from-purple-500 to-pink-500',
      services: [
        { name: 'Quantum AI Hybrid Platform', href: '/services/quantum-ai-hybrid-platform', description: 'Revolutionary quantum-AI computing' },
        { name: 'Quantum Computing', href: '/services/quantum-computing', description: 'Next-generation computing power' },
        { name: 'IoT Edge Computing', href: '/services/iot-edge-computing', description: 'Connected device intelligence' },
        { name: 'Digital Twin Platform', href: '/services/digital-twin', description: 'Virtual replica technology' },
        { name: 'Space Technology', href: '/space-tech', description: 'Innovative space solutions' },
      ]
    },
    {
      title: 'Micro SaaS Solutions',
      icon: Code,
      color: 'from-green-500 to-emerald-500',
      services: [
        { name: 'Micro CRM', href: '/services/micro-crm', description: 'Lightweight customer management' },
        { name: 'Helpdesk Platform', href: '/services/helpdesk-platform', description: 'Efficient support system' },
        { name: 'Website Analytics', href: '/services/website-analytics', description: 'Performance insights' },
        { name: 'Affiliate Tracking', href: '/services/affiliate-tracking', description: 'Partner program management' },
      ]
    }
  ];

  const solutionsCategories = [
    {
      title: 'Industry Solutions',
      icon: Building,
      color: 'from-blue-500 to-purple-500',
      solutions: [
        { name: 'Enterprise Solutions', href: '/solutions/enterprise', description: 'Large-scale business transformation' },
        { name: 'Healthcare Solutions', href: '/solutions/healthcare', description: 'Medical technology innovation' },
        { name: 'Financial Solutions', href: '/financial-solutions', description: 'Fintech and banking solutions' },
        { name: 'Manufacturing Solutions', href: '/manufacturing-solutions', description: 'Industry 4.0 automation' },
      ]
    },
    {
      title: 'Technology Solutions',
      icon: Cpu,
      color: 'from-cyan-500 to-blue-500',
      solutions: [
        { name: 'AI Solutions', href: '/ai-solutions', description: 'Artificial intelligence integration' },
        { name: 'Digital Transformation', href: '/services/digital-transformation', description: 'Business modernization' },
        { name: 'Research & Development', href: '/research-development', description: 'Innovation and discovery' },
        { name: 'Green IT Solutions', href: '/green-it', description: 'Sustainable technology' },
      ]
    }
  ];

  const companyLinks = [
    { name: 'About Us', href: '/about', description: 'Learn about our mission and values' },
    { name: 'Our Team', href: '/team', description: 'Meet our expert professionals' },
    { name: 'Leadership', href: '/leadership', description: 'Executive team and vision' },
    { name: 'Careers', href: '/careers', description: 'Join our growing team' },
    { name: 'Partners', href: '/partners', description: 'Strategic partnerships' },
    { name: 'Case Studies', href: '/case-studies', description: 'Success stories and results' },
  ];

  const resourceLinks = [
    { name: 'Blog', href: '/blog', description: 'Latest insights and updates' },
    { name: 'News', href: '/news', description: 'Company announcements' },
    { name: 'Press', href: '/press', description: 'Media resources' },
    { name: 'Webinars', href: '/webinars', description: 'Educational sessions' },
    { name: 'White Papers', href: '/white-papers', description: 'In-depth research' },
    { name: 'Documentation', href: '/documentation', description: 'Technical guides' },
  ];

  const supportLinks = [
    { name: 'Help Center', href: '/help', description: 'Find answers and solutions' },
    { name: 'FAQ', href: '/faq', description: 'Frequently asked questions' },
    { name: 'Support', href: '/support', description: 'Technical assistance' },
    { name: 'Training', href: '/training', description: 'Skill development programs' },
    { name: 'Contact Support', href: '/contact', description: 'Get in touch with our team' },
    { name: 'Status Page', href: '/status', description: 'Service availability' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/20' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className={`text-xl font-bold ${scrolled ? 'text-gray-900' : 'text-white'}`}>
                Zion Tech Group
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {/* Home */}
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors ${
                scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'
              }`}
            >
              Home
            </Link>

            {/* About Dropdown */}
            <div className="relative group">
              <button
                className={`flex items-center text-sm font-medium transition-colors ${
                  scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'
                }`}
                onMouseEnter={() => setActiveDropdown('about')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                About
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              <AnimatePresence>
                {activeDropdown === 'about' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-200 p-6"
                    onMouseEnter={() => setActiveDropdown('about')}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div className="grid grid-cols-1 gap-4">
                      {companyLinks.map((link) => (
                        <Link
                          key={link.name}
                          to={link.href}
                          className="group flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Building className="w-4 h-4 text-blue-600" />
                          </div>
                          <div>
                            <div className="font-medium text-gray-900 group-hover:text-blue-600">
                              {link.name}
                            </div>
                            <div className="text-sm text-gray-500">
                              {link.description}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className={`flex items-center text-sm font-medium transition-colors ${
                  scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'
                }`}
                onMouseEnter={() => setActiveDropdown('services')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              <AnimatePresence>
                {activeDropdown === 'services' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-[800px] bg-white rounded-xl shadow-xl border border-gray-200 p-6"
                    onMouseEnter={() => setActiveDropdown('services')}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div className="grid grid-cols-2 gap-6">
                      {servicesCategories.map((category) => (
                        <div key={category.title}>
                          <div className="flex items-center space-x-2 mb-3">
                            <div className={`w-8 h-8 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center`}>
                              <category.icon className="w-4 h-4 text-white" />
                            </div>
                            <h3 className="font-semibold text-gray-900">{category.title}</h3>
                          </div>
                          <div className="space-y-2">
                            {category.services.map((service) => (
                              <Link
                                key={service.name}
                                to={service.href}
                                className="block p-2 rounded-lg hover:bg-gray-50 transition-colors group"
                              >
                                <div className="font-medium text-gray-900 group-hover:text-blue-600">
                                  {service.name}
                                </div>
                                <div className="text-sm text-gray-500">
                                  {service.description}
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Solutions Dropdown */}
            <div className="relative group">
              <button
                className={`flex items-center text-sm font-medium transition-colors ${
                  scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'
                }`}
                onMouseEnter={() => setActiveDropdown('solutions')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                Solutions
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              <AnimatePresence>
                {activeDropdown === 'solutions' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-96 bg-white rounded-xl shadow-xl border border-gray-200 p-6"
                    onMouseEnter={() => setActiveDropdown('solutions')}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div className="space-y-4">
                      {solutionsCategories.map((category) => (
                        <div key={category.title}>
                          <div className="flex items-center space-x-2 mb-3">
                            <div className={`w-8 h-8 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center`}>
                              <category.icon className="w-4 h-4 text-white" />
                            </div>
                            <h3 className="font-semibold text-gray-900">{category.title}</h3>
                          </div>
                          <div className="space-y-2">
                            {category.solutions.map((solution) => (
                              <Link
                                key={solution.name}
                                to={solution.href}
                                className="block p-2 rounded-lg hover:bg-gray-50 transition-colors group"
                              >
                                <div className="font-medium text-gray-900 group-hover:text-blue-600">
                                  {solution.name}
                                </div>
                                <div className="text-sm text-gray-500">
                                  {solution.description}
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Resources Dropdown */}
            <div className="relative group">
              <button
                className={`flex items-center text-sm font-medium transition-colors ${
                  scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'
                }`}
                onMouseEnter={() => setActiveDropdown('resources')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                Resources
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              <AnimatePresence>
                {activeDropdown === 'resources' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-200 p-6"
                    onMouseEnter={() => setActiveDropdown('resources')}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div className="grid grid-cols-1 gap-4">
                      {resourceLinks.map((link) => (
                        <Link
                          key={link.name}
                          to={link.href}
                          className="group flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <BookOpen className="w-4 h-4 text-green-600" />
                          </div>
                          <div>
                            <div className="font-medium text-gray-900 group-hover:text-green-600">
                              {link.name}
                            </div>
                            <div className="text-sm text-gray-500">
                              {link.description}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Support Dropdown */}
            <div className="relative group">
              <button
                className={`flex items-center text-sm font-medium transition-colors ${
                  scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'
                }`}
                onMouseEnter={() => setActiveDropdown('support')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                Support
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              <AnimatePresence>
                {activeDropdown === 'support' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-200 p-6"
                    onMouseEnter={() => setActiveDropdown('support')}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div className="grid grid-cols-1 gap-4">
                      {supportLinks.map((link) => (
                        <Link
                          key={link.name}
                          to={link.href}
                          className="group flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <HelpCircle className="w-4 h-4 text-purple-600" />
                          </div>
                          <div>
                            <div className="font-medium text-gray-900 group-hover:text-purple-600">
                              {link.name}
                            </div>
                            <div className="text-sm text-gray-500">
                              {link.description}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Direct Links */}
            <Link 
              to="/pricing" 
              className={`text-sm font-medium transition-colors ${
                scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'
              }`}
            >
              Pricing
            </Link>

            <Link 
              to="/contact" 
              className={`text-sm font-medium transition-colors ${
                scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <form onSubmit={handleSearch} className="hidden md:flex items-center">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`w-64 pl-10 pr-4 py-2 rounded-lg border transition-colors ${
                    scrolled 
                      ? 'bg-gray-100 border-gray-300 text-gray-900 placeholder-gray-500' 
                      : 'bg-white/20 border-white/30 text-white placeholder-white/70'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
                <Search className={`absolute left-3 top-2.5 h-5 w-5 ${
                  scrolled ? 'text-gray-400' : 'text-white/70'
                }`} />
              </div>
            </form>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              <Link
                to="/request-quote"
                className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
              >
                Get Quote
              </Link>
              <Link
                to="/contact"
                className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                Start Project
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
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
              <form onSubmit={handleSearch}>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                </div>
              </form>

              {/* Mobile Navigation */}
              <div className="space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Mobile CTA */}
              <div className="pt-4 border-t border-gray-200">
                <Link
                  to="/request-quote"
                  className="block w-full text-center px-4 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors mb-3"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Quote
                </Link>
                <Link
                  to="/contact"
                  className="block w-full text-center px-4 py-3 border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Start Project
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
