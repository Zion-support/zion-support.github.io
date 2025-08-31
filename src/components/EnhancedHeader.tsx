import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, Search, User, Bell, ChevronDown, Zap, Brain, Shield, Cloud, 
  Rocket, Globe, Cpu, Lock, Heart, Users, ShoppingCart, BookOpen, 
  MessageCircle, HelpCircle, DollarSign, Gauge, Workflow, Atom, Star, 
  Target, TrendingUp, Award, Code, Truck, Building, BarChart3, PenTool, 
  Eye, Server, Smartphone, Database, Network, Clock, ArrowRight, 
  PanelLeft, Sparkles, Phone, Mail, MapPin, Satellite, FileText, Building2, Car 
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
    { name: 'Pricing Guide', href: '/comprehensive-pricing-guide-2028', current: false },
    { name: 'Solutions', href: '/solutions', current: false },
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
        { name: 'AI Content Marketing Suite', href: '/services/ai-content-marketing-suite', description: 'AI-powered content creation & optimization' },
        { name: 'AI Customer Support', href: '/services/ai-customer-support-automation', description: 'Intelligent support automation' },
        { name: 'AI Project Management', href: '/services/ai-project-management', description: 'AI-driven project optimization' },
        { name: 'AI Financial Analytics', href: '/services/ai-financial-analytics', description: 'Intelligent financial insights' },
      ]
    },
    {
      title: 'Quantum Computing',
      icon: Atom,
      color: 'from-indigo-500 to-purple-500',
      services: [
        { name: 'Quantum AI Hybrid Platform', href: '/services/quantum-ai-hybrid-platform', description: 'Revolutionary quantum-AI computing' },
        { name: 'Quantum Computing Solutions', href: '/services/quantum-computing', description: 'Next-generation computing power' },
        { name: 'Quantum Financial Trading', href: '/services/ai-quantum-financial-trading-platform', description: 'Advanced quantum trading' },
        { name: 'Quantum Machine Learning', href: '/services/quantum-machine-learning', description: 'Quantum-enhanced ML algorithms' },
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
      icon: Rocket,
      color: 'from-purple-500 to-pink-500',
      services: [
        { name: 'AI Smart City Infrastructure', href: '/services/ai-smart-city-infrastructure-management', description: 'Intelligent urban management' },
        { name: 'AI Autonomous Vehicles', href: '/services/ai-autonomous-vehicle-management-platform', description: 'Autonomous fleet management' },
        { name: 'IoT Edge Computing', href: '/services/iot-edge-computing', description: 'Connected device intelligence' },
        { name: 'Digital Twin Platform', href: '/services/digital-twin', description: 'Virtual replica technology' },
        { name: 'Space Technology', href: '/space-tech', description: 'Innovative space solutions' },
      ]
    },
    {
      title: 'Smart City & Infrastructure',
      icon: Building2,
      color: 'from-green-500 to-emerald-500',
      services: [
        { name: 'AI Smart City Management', href: '/services/ai-smart-city-infrastructure-management', description: 'Intelligent urban infrastructure' },
        { name: 'Traffic Management', href: '/services/traffic-management', description: 'AI-powered traffic optimization' },
        { name: 'Energy Grid Management', href: '/services/energy-grid', description: 'Smart energy distribution' },
        { name: 'Environmental Monitoring', href: '/services/environmental-monitoring', description: 'Real-time environmental tracking' },
      ]
    },
    {
      title: 'Autonomous Systems',
      icon: Car,
      color: 'from-blue-500 to-cyan-500',
      services: [
        { name: 'AI Autonomous Vehicle Platform', href: '/services/ai-autonomous-vehicle-management-platform', description: 'Fleet management & safety' },
        { name: 'Drone Management', href: '/services/drone-management', description: 'Autonomous drone operations' },
        { name: 'Robotics Automation', href: '/services/robotics-automation', description: 'Industrial robotics solutions' },
        { name: 'Autonomous Logistics', href: '/services/autonomous-logistics', description: 'Smart supply chain automation' },
      ]
    },
    {
      title: 'Micro SaaS Solutions',
      icon: Code,
      color: 'from-green-500 to-emerald-500',
      services: [
        { name: 'Micro CRM', href: '/services/micro-crm', description: 'Lightweight customer management' },
        { name: 'Helpdesk Platform', href: '/services/helpdesk-platform', description: 'Efficient support system' },
        { name: 'AI Content Marketing', href: '/services/ai-content-marketing-suite', description: 'AI-powered content creation' },
        { name: 'Customer Support Automation', href: '/services/ai-customer-support-automation', description: 'Intelligent support automation' },
        { name: 'Website Analytics', href: '/services/website-analytics', description: 'Performance insights' },
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

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

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
                onClick={() => toggleDropdown('about')}
              >
                About
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              
              <AnimatePresence>
                {activeDropdown === 'about' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2"
                  >
                    {companyLinks.map((link) => (
                      <Link
                        key={link.name}
                        to={link.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                      >
                        <div className="font-medium">{link.name}</div>
                        <div className="text-xs text-gray-500">{link.description}</div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Services Mega Menu */}
            <div className="relative group">
              <button
                className={`flex items-center text-sm font-medium transition-colors ${
                  scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'
                }`}
                onClick={() => toggleDropdown('services')}
              >
                Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              
              <AnimatePresence>
                {activeDropdown === 'services' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-screen max-w-6xl bg-white rounded-lg shadow-xl border border-gray-200 py-6 px-6"
                  >
                    <div className="grid grid-cols-3 gap-8">
                      {servicesCategories.map((category) => (
                        <div key={category.title}>
                          <div className="flex items-center mb-4">
                            <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mr-3`}>
                              <category.icon className="w-4 h-4 text-white" />
                            </div>
                            <h3 className="font-semibold text-gray-900">{category.title}</h3>
                          </div>
                          <div className="space-y-2">
                            {category.services.map((service) => (
                              <Link
                                key={service.name}
                                to={service.href}
                                className="block text-sm text-gray-600 hover:text-blue-600 transition-colors"
                              >
                                <div className="font-medium">{service.name}</div>
                                <div className="text-xs text-gray-500">{service.description}</div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Quick Links */}
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <div className="flex space-x-6">
                        <Link
                          to="/innovative-services-showcase-2028"
                          className="flex items-center text-blue-600 hover:text-blue-700 font-medium"
                        >
                          <Rocket className="w-4 h-4 mr-2" />
                          Innovative Services 2028
                        </Link>
                        <Link
                          to="/comprehensive-pricing-guide-2028"
                          className="flex items-center text-blue-600 hover:text-blue-700 font-medium"
                        >
                          <DollarSign className="w-4 h-4 mr-2" />
                          Pricing Guide
                        </Link>
                      </div>
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
                onClick={() => toggleDropdown('solutions')}
              >
                Solutions
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              
              <AnimatePresence>
                {activeDropdown === 'solutions' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-2"
                  >
                    {solutionsCategories.map((category) => (
                      <div key={category.title} className="mb-4">
                        <div className="flex items-center mb-2 px-4">
                          <div className={`w-6 h-6 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mr-3`}>
                            <category.icon className="w-3 h-3 text-white" />
                          </div>
                          <h3 className="font-semibold text-gray-900 text-sm">{category.title}</h3>
                        </div>
                        <div className="space-y-1">
                          {category.solutions.map((solution) => (
                            <Link
                              key={solution.name}
                              to={solution.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                            >
                              <div className="font-medium">{solution.name}</div>
                              <div className="text-xs text-gray-500">{solution.description}</div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
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
                onClick={() => toggleDropdown('resources')}
              >
                Resources
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              
              <AnimatePresence>
                {activeDropdown === 'resources' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2"
                  >
                    {resourceLinks.map((link) => (
                      <Link
                        key={link.name}
                        to={link.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                      >
                        <div className="font-medium">{link.name}</div>
                        <div className="text-xs text-gray-500">{link.description}</div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Contact */}
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
          <div className="hidden lg:flex items-center space-x-4">
            {/* Search */}
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 pl-10 pr-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            </form>

            {/* CTA Button */}
            <Link
              to="/contact"
              className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-md ${scrolled ? 'text-gray-700' : 'text-white'}`}
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-200"
          >
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              </form>

              {/* Mobile Navigation Links */}
              <div className="space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block px-4 py-3 text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-blue-600 rounded-lg transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Mobile CTA */}
              <div className="pt-4 border-t border-gray-200">
                <Link
                  to="/contact"
                  className="block w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-center rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
