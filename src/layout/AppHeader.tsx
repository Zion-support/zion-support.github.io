import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, User, Bell, ChevronDown, Zap, Brain, Shield, Cloud, Rocket, Globe, Cpu, Lock, Heart, Users, ShoppingCart, BookOpen, MessageCircle, HelpCircle, DollarSign, Gauge, Workflow, Atom, Target, TrendingUp, Award, Code, Truck, Building, Phone, Mail, ExternalLink, Sparkles, Flame, Crown, Infinity, Sun, Moon } from 'lucide-react';
import { ThemeToggle } from '../components/ThemeToggle';
import { ZionLoadingSpinner } from '../components/ui/EnhancedLoadingSpinner';
import { motion, AnimatePresence } from 'framer-motion';

export function AppHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
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
    { name: 'Services', href: '/services', current: false },
    { name: '2026 Services', href: '/services2026', current: false, featured: true },
    { name: 'AI Services', href: '/ai-services', current: false },
    { name: 'IT Services', href: '/it-services', current: false },
    { name: 'Micro SaaS', href: '/micro-saas', current: false },
    { name: 'Solutions', href: '/solutions', current: false },
    { name: 'AI Solutions', href: '/ai-solutions', current: false },
    { name: 'Case Studies', href: '/case-studies', current: false },
    { name: 'Research', href: '/research-development', current: false },
    { name: 'Events', href: '/events', current: false },
    { name: 'News', href: '/news', current: false },
    { name: 'Pricing', href: '/pricing', current: false },
    { name: 'Partners', href: '/partners', current: false },
    { name: 'Blog', href: '/blog', current: false },
    { name: 'Help', href: '/help', current: false },
    { name: 'About', href: '/about', current: false },
    { name: 'Contact', href: '/contact', current: false },
    { name: 'Careers', href: '/careers', current: false },
  ];

  const services = [
    // AI & Analytics Services
    { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence', icon: Brain, description: 'AI-powered analytics & insights', category: 'AI & Analytics' },
    { name: 'AI Legal Document Analyzer', href: '/services/ai-legal-document-analyzer', icon: Shield, description: 'Contract review & risk assessment', category: 'AI & Legal Tech' },
    { name: 'AI Healthcare Diagnostics', href: '/services/ai-healthcare-diagnostics', icon: Heart, description: 'Medical imaging & diagnostics', category: 'AI & Healthcare' },
    { name: 'AI Financial Trading', href: '/services/ai-financial-trading-platform', icon: DollarSign, description: 'Algorithmic trading & analysis', category: 'AI & Finance' },
    { name: 'AI Supply Chain Optimizer', href: '/services/ai-supply-chain-optimizer', icon: Truck, description: 'Logistics & inventory optimization', category: 'AI & Logistics' },
    { name: 'AI Energy Management', href: '/services/ai-energy-management-system', icon: Zap, description: 'Energy optimization & sustainability', category: 'AI & Energy' },
    { name: 'AI Education Platform', href: '/services/ai-education-platform', icon: BookOpen, description: 'Personalized learning & analytics', category: 'AI & Education' },
    { name: 'AI Real Estate Analytics', href: '/services/ai-real-estate-analytics', icon: Building, description: 'Market analysis & investment insights', category: 'AI & Real Estate' },
    { name: 'AI Manufacturing QC', href: '/services/ai-manufacturing-quality-control', icon: Cpu, description: 'Quality control & defect detection', category: 'AI & Manufacturing' },
    { name: 'AI Customer Experience', href: '/services/ai-customer-experience-platform', icon: Users, description: 'Personalization & optimization', category: 'AI & Customer Experience' },
    
    // Emerging Technology Services
    { name: 'Blockchain DeFi Platform', href: '/services/blockchain-defi-platform', icon: Globe, description: 'Decentralized finance solutions', category: 'Blockchain & Web3' },
    { name: 'Metaverse Development', href: '/services/metaverse-development-platform', icon: Rocket, description: 'Virtual worlds & VR/AR', category: 'Metaverse & VR/AR' },
    { name: 'Edge Computing Platform', href: '/services/edge-computing-platform', icon: Cpu, description: 'Distributed computing & IoT', category: 'Edge Computing & IoT' },
    { name: 'Quantum Machine Learning', href: '/services/quantum-machine-learning', icon: Atom, description: 'Quantum algorithms & optimization', category: 'Quantum Computing' },
    { name: 'Autonomous Systems', href: '/services/autonomous-systems-platform', icon: Target, description: 'Robotics & automation', category: 'Autonomous Systems' },
    { name: 'Digital Twin Platform', href: '/services/digital-twin-platform', icon: Workflow, description: 'Simulation & monitoring', category: 'Digital Twin' },
    { name: 'Space Technology', href: '/services/space-technology-platform', icon: Rocket, description: 'Satellite operations & data', category: 'Space Technology' },
    { name: 'Sustainable Technology', href: '/services/sustainable-technology-platform', icon: Sun, description: 'Green computing & energy', category: 'Sustainable Technology' },
    
    // Core Services
    { name: 'AI Workflow Automation', href: '/services/ai-workflow-automation', icon: Workflow, description: 'Intelligent Process Automation' },
    { name: 'AI Cybersecurity', href: '/services/ai-cybersecurity', icon: Shield, description: 'AI-Powered Security' },
    { name: 'Quantum Computing', href: '/services/quantum-computing-solutions', icon: Atom, description: 'Quantum Solutions' },
    { name: 'IoT Edge Computing', href: '/services/iot-edge-computing', icon: Cpu, description: 'Smart Devices & Networks' },
    { name: 'AI Content Creation', href: '/services/ai-content-creation', icon: BookOpen, description: 'AI-Powered Content' },
    { name: 'Digital Twin', href: '/services/digital-twin', icon: Rocket, description: 'Simulation & Monitoring' },
    { name: 'AI HR Platform', href: '/services/ai-hr-platform', icon: Users, description: 'AI-Powered HR' },
    { name: 'Sustainable Technology', href: '/services/sustainable-technology', icon: Sun, description: 'Green IT Solutions' },
    { name: 'AI Predictive Maintenance', href: '/services/ai-predictive-maintenance', icon: Gauge, description: 'Predictive Analytics' },
    { name: 'Quantum Machine Learning', href: '/services/quantum-machine-learning', icon: Atom, description: 'Quantum ML' },
    
    // Additional Services
    { name: 'AI Sales Copilot', href: '/services/ai-sales-copilot', icon: Users, description: 'Intelligent sales assistant' },
    { name: 'AI SEO Optimizer', href: '/services/ai-seo', icon: Search, description: 'Semantic SEO & content briefs' },
    { name: 'Interview Assessment AI', href: '/services/interview-assessment', icon: Users, description: 'Structured interviews & scoring' },
    { name: 'Helpdesk Platform', href: '/services/helpdesk', icon: MessageCircle, description: 'Tickets, KB, chat & AI' },
    { name: 'Website Analytics', href: '/services/website-analytics', icon: Gauge, description: 'Privacy-first SMB analytics' },
    { name: 'DSR Privacy Portal', href: '/services/dsr-portal', icon: Shield, description: 'GDPR/CCPA request workflow' },
    { name: 'Security Headers & CSP', href: '/services/security-headers-csp', icon: Shield, description: 'HSTS/CSP automation' },
    { name: 'AI Project Manager', href: '/services/ai-project-manager', icon: Target, description: 'Intelligent project management' },
    { name: 'AI Content Generator', href: '/services/ai-content-generator', icon: BookOpen, description: 'AI-powered content creation' },
    { name: 'AI Customer Support', href: '/services/ai-customer-support', icon: MessageCircle, description: '24/7 intelligent support' },
    { name: 'AI Data Analytics', href: '/services/ai-data-analytics', icon: Gauge, description: 'Predictive business intelligence' },
    { name: 'AI Marketing Automation', href: '/services/ai-marketing-automation', icon: Target, description: 'Smart marketing optimization' },
  ];

  const quickLinks = [
    { name: 'Marketplace', href: '/marketplace', icon: ShoppingCart },
    { name: 'Blog', href: '/blog', icon: BookOpen },
    { name: 'FAQ', href: '/faq', icon: HelpCircle },
    { name: 'Support', href: '/support', icon: MessageCircle },
    { name: 'Documentation', href: '/documentation', icon: BookOpen },
    { name: 'API Reference', href: '/api', icon: Code },
    { name: 'Status', href: '/status', icon: Gauge },
    { name: 'Careers', href: '/careers', icon: Users },
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-slate-900/95 backdrop-blur-md border-b border-white/10 shadow-2xl' 
        : 'bg-transparent'
    }`}>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-cyan-900 via-blue-900 to-purple-900 border-b border-white/20">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-6 text-cyan-100">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>{contactInfo.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>{contactInfo.email}</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <a 
                href="/contact" 
                className="text-cyan-100 hover:text-white transition-colors text-sm"
              >
                Get Quote
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                Zion Tech Group
              </div>
              <div className="text-xs text-cyan-300 uppercase tracking-wider">
                Innovation • Technology • Future
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-2 text-white hover:text-cyan-300 transition-colors py-2">
                <span>Services</span>
                <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
                <div className="absolute top-full left-0 w-2 h-2 bg-cyan-500 transform rotate-45 -translate-y-1 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
              
              {/* Mega Menu */}
              <div className="absolute top-full left-0 w-screen max-w-7xl -ml-64 bg-slate-900/95 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="p-8">
                  <div className="grid grid-cols-4 gap-8">
                    {/* AI & Analytics */}
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                        <Brain className="w-5 h-5 text-cyan-400" />
                        AI & Analytics
                      </h3>
                      <div className="space-y-3">
                        {services.filter(s => s.category === 'AI & Analytics').slice(0, 4).map(service => (
                          <Link
                            key={service.name}
                            to={service.href}
                            className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors group"
                          >
                            {React.createElement(service.icon, { className: "w-5 h-5 text-cyan-400" })}
                            <div>
                              <div className="text-white group-hover:text-cyan-300 transition-colors font-medium">
                                {service.name}
                              </div>
                              <div className="text-sm text-gray-400">{service.description}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Emerging Tech */}
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                        <Rocket className="w-5 h-5 text-purple-400" />
                        Emerging Tech
                      </h3>
                      <div className="space-y-3">
                        {services.filter(s => ['Blockchain & Web3', 'Metaverse & VR/AR', 'Quantum Computing', 'Space Technology'].includes(s.category)).slice(0, 4).map(service => (
                          <Link
                            key={service.name}
                            to={service.href}
                            className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors group"
                          >
                            {React.createElement(service.icon, { className: "w-5 h-5 text-purple-400" })}
                            <div>
                              <div className="text-white group-hover:text-purple-300 transition-colors font-medium">
                                {service.name}
                              </div>
                              <div className="text-sm text-gray-400">{service.description}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Industry Solutions */}
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                        <Building className="w-5 h-5 text-green-400" />
                        Industry Solutions
                      </h3>
                      <div className="space-y-3">
                        {services.filter(s => ['AI & Healthcare', 'AI & Finance', 'AI & Manufacturing', 'AI & Education'].includes(s.category)).slice(0, 4).map(service => (
                          <Link
                            key={service.name}
                            to={service.href}
                            className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors group"
                          >
                            {React.createElement(service.icon, { className: "w-5 h-5 text-green-400" })}
                            <div>
                              <div className="text-white group-hover:text-green-300 transition-colors font-medium">
                                {service.name}
                              </div>
                              <div className="text-sm text-gray-400">{service.description}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Quick Actions */}
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                        <Zap className="w-5 h-5 text-yellow-400" />
                        Quick Actions
                      </h3>
                      <div className="space-y-3">
                        <Link
                          to="/innovative-services-showcase-2028"
                          className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 hover:from-cyan-500/30 hover:to-blue-500/30 transition-all group"
                        >
                          <Sparkles className="w-5 h-5 text-cyan-400" />
                          <div>
                            <div className="text-white group-hover:text-cyan-300 transition-colors font-medium">
                              View All Services
                            </div>
                            <div className="text-sm text-cyan-300">Complete showcase</div>
                          </div>
                        </Link>
                        
                        <Link
                          to="/contact"
                          className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 hover:from-purple-500/30 hover:to-pink-500/30 transition-all group"
                        >
                          <MessageCircle className="w-5 h-5 text-purple-400" />
                          <div>
                            <div className="text-white group-hover:text-purple-300 transition-colors font-medium">
                              Get Custom Quote
                            </div>
                            <div className="text-sm text-purple-300">Tailored solutions</div>
                          </div>
                        </Link>

                        <Link
                          to="/pricing"
                          className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 hover:from-green-500/30 hover:to-emerald-500/30 transition-all group"
                        >
                          <DollarSign className="w-5 h-5 text-green-400" />
                          <div>
                            <div className="text-white group-hover:text-green-300 transition-colors font-medium">
                              View Pricing
                            </div>
                            <div className="text-sm text-green-300">Transparent costs</div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Other Navigation Items */}
            {navigation.slice(2, 8).map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-white hover:text-cyan-300 transition-colors py-2 ${
                  item.featured ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 px-4 py-2 rounded-lg border border-cyan-500/30' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Search and Actions */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Search */}
            <form onSubmit={handleSearch} className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </form>

            {/* Action Buttons */}
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 hover:scale-105"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white hover:text-cyan-300 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-white/10"
          >
            <div className="container mx-auto px-4 py-6">
              <div className="space-y-6">
                {/* Mobile Search */}
                <form onSubmit={handleSearch} className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </form>

                {/* Mobile Navigation */}
                <nav className="space-y-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block text-white hover:text-cyan-300 transition-colors py-2 ${
                        item.featured ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 px-4 py-2 rounded-lg border border-cyan-500/30' : ''
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>

                {/* Mobile Quick Links */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {quickLinks.slice(0, 6).map((link) => (
                      <Link
                        key={link.name}
                        to={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center gap-2 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                      >
                        {React.createElement(link.icon, { className: "w-4 h-4 text-cyan-400" })}
                        <span className="text-white text-sm">{link.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Mobile Contact */}
                <div className="border-t border-white/10 pt-4">
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2 text-cyan-300">
                      <Phone className="w-4 h-4" />
                      <span>{contactInfo.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-cyan-300">
                      <Mail className="w-4 h-4" />
                      <span>{contactInfo.email}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
