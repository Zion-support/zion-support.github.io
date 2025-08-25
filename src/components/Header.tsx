import { useState, useEffect, useCallback, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import { Menu, X, ChevronDown, Search, User, Phone, Brain, Shield, Cpu, Rocket, Globe, Zap, ChevronRight } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setActiveDropdown(null);
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const navigationItems = useMemo(() => [
    { 
      path: '/', 
      label: 'Home', 
      icon: '🏠',
      description: 'Welcome to Zion Tech Group'
    },
    { 
      path: '/services', 
      label: 'AI Services', 
      icon: '🤖',
      description: 'Explore our AI service offerings'
    },
    { 
      path: '/solutions/enterprise', 
      label: 'Solutions', 
      icon: '💼',
      description: 'Industry-specific solutions'
    },
    { 
      path: '/pricing', 
      label: 'Pricing', 
      icon: '💰',
      description: 'Transparent pricing plans'
    },
    { 
      path: '/about', 
      label: 'About', 
      icon: 'ℹ️',
      description: 'Learn about our company'
    },
    { 
      path: '/careers', 
      label: 'Careers', 
      icon: '🚀',
      description: 'Join our team'
    },
    { 
      path: '/blog', 
      label: 'Blog', 
      icon: '📝',
      description: 'Latest insights and news'
    },
    { 
      path: '/contact', 
      label: 'Contact', 
      icon: '📞',
      description: 'Get in touch with us'
    }
  ], []);

  const serviceCategories = useMemo(() => [
    {
      title: 'AI & Machine Learning',
      icon: Brain,
      services: [
        { name: 'AI Business Intelligence', path: '/services#ai-bi', description: 'Advanced analytics and insights' },
        { name: 'AI Marketing Automation', path: '/services#ai-marketing', description: 'Intelligent campaign optimization' },
        { name: 'AI HR & Recruitment', path: '/services#ai-hr', description: 'Smart talent acquisition' },
        { name: 'AI Legal Tech', path: '/services#ai-legal', description: 'Legal document analysis' },
        { name: 'AI Project Management', path: '/services/ai-powered-project-management', description: 'Intelligent project oversight' },
        { name: 'AI Content Generation', path: '/services/ai-content-generation-engine', description: 'Automated content creation' },
        { name: 'AI Sales Intelligence', path: '/services/ai-sales-intelligence-platform', description: 'Lead scoring and forecasting' },
        { name: 'AI Risk Management', path: '/services/ai-risk-management-platform', description: 'Comprehensive risk assessment' }
      ]
    },
    {
      title: 'Cybersecurity & Quantum',
      icon: Shield,
      services: [
        { name: 'Quantum Encryption', path: '/services/quantum-encryption-platform', description: 'Future-proof security' },
        { name: 'Quantum Cybersecurity', path: '/services/quantum-enhanced-cybersecurity', description: 'Post-quantum protection' },
        { name: 'Quantum Communication', path: '/services/quantum-secure-communication', description: 'Unhackable messaging' },
        { name: 'Quantum Identity Management', path: '/services/quantum-secure-identity-management', description: 'Quantum-secured identities' },
        { name: 'Real-Time Fraud Detection', path: '/services/real-time-fraud-detection', description: 'ML-powered fraud prevention' },
        { name: 'Smart Compliance Monitoring', path: '/services/smart-compliance-monitoring', description: 'Regulatory compliance tracking' }
      ]
    },
    {
      title: 'Cloud & Infrastructure',
      icon: Cpu,
      services: [
        { name: 'Cloud Cost Optimization', path: '/services/cloud-optimization', description: 'AI-driven cost management' },
        { name: 'Autonomous IT Operations', path: '/services/autonomous-it-operations-platform', description: 'Self-healing infrastructure' },
        { name: 'Smart Energy Management', path: '/services/smart-energy-management', description: 'AI-driven optimization' },
        { name: 'Predictive Maintenance', path: '/services/predictive-maintenance-platform', description: 'IoT-powered monitoring' },
        { name: 'Autonomous Data Pipeline', path: '/services/autonomous-data-pipeline-orchestrator', description: 'Self-healing workflows' },
        { name: 'Smart Vendor Management', path: '/services/smart-vendor-management-system', description: 'AI-powered evaluation' }
      ]
    },
    {
      title: 'Business Solutions',
      icon: Rocket,
      services: [
        { name: 'Smart Inventory Management', path: '/services/smart-inventory-management', description: 'AI-driven forecasting' },
        { name: 'Intelligent Customer Support', path: '/services/intelligent-customer-support', description: 'AI chatbot with human fallback' },
        { name: 'Smart Contract Management', path: '/services/smart-contract-management', description: 'Automated lifecycle management' },
        { name: 'AI HR Analytics Suite', path: '/services/ai-hr-analytics-suite', description: 'Employee performance insights' },
        { name: 'Autonomous Customer Success', path: '/services/autonomous-customer-success-platform', description: 'Proactive monitoring' },
        { name: 'Smart Learning Management', path: '/services/smart-learning-management-platform', description: 'Personalized learning paths' }
      ]
    },
    {
      title: 'Emerging Technologies',
      icon: Zap,
      services: [
        { name: 'Blockchain Supply Chain', path: '/services/blockchain-supply-chain-tracker', description: 'End-to-end transparency' },
        { name: 'Quantum Machine Learning', path: '/services/quantum-machine-learning-platform', description: 'Quantum algorithms for ML' },
        { name: 'Quantum Financial Modeling', path: '/services/quantum-financial-modeling', description: 'Advanced financial simulations' },
        { name: 'Quantum Neural Networks', path: '/services/quantum-neural-network-platform', description: 'Quantum AI training' },
        { name: 'Smart Environmental Monitoring', path: '/services/smart-environmental-monitoring', description: 'IoT sustainability tracking' },
        { name: 'AI Financial Analytics', path: '/services/ai-powered-financial-analytics', description: 'Real-time market insights' }
      ]
    },
    {
      title: 'Industry Solutions',
      icon: Globe,
      services: [
        { name: 'Healthcare Analytics', path: '/services/smart-healthcare-analytics', description: 'Patient insights and diagnostics' },
        { name: 'Legal Document Analysis', path: '/services/ai-legal-document-analyzer', description: 'Contract analysis and compliance' },
        { name: 'Marketing Orchestration', path: '/services/autonomous-marketing-orchestrator', description: 'AI-driven campaign optimization' },
        { name: 'Supply Chain Optimization', path: '/services/autonomous-supply-chain-optimizer', description: 'Self-optimizing supply chains' },
        { name: 'Energy Trading Platform', path: '/services/smart-energy-trading-platform', description: 'AI-driven market analysis' },
        { name: 'Innovation Management', path: '/services/ai-innovation-management-platform', description: 'End-to-end innovation pipeline' }
      ]
    }
  ], []);

  const companyPages = useMemo(() => [
    { path: '/about', label: 'About Us', description: 'Our story and mission' },
    { path: '/mission', label: 'Mission & Vision', description: 'What drives us forward' },
    { path: '/team', label: 'Our Team', description: 'Meet the experts' },
    { path: '/leadership', label: 'Leadership', description: 'Executive team' },
    { path: '/careers', label: 'Careers', description: 'Join our team' },
    { path: '/partners', label: 'Partners', description: 'Strategic partnerships' },
    { path: '/news', label: 'News & Updates', description: 'Latest company news' },
    { path: '/blog', label: 'Blog', description: 'Industry insights' }
  ], []);

  const resourcePages = useMemo(() => [
    { path: '/case-studies', label: 'Case Studies', description: 'Success stories' },
    { path: '/white-papers', label: 'White Papers', description: 'In-depth research' },
    { path: '/webinars', label: 'Webinars', description: 'Educational content' },
    { path: '/events', label: 'Events', description: 'Upcoming events' },
    { path: '/help', label: 'Help Center', description: 'Support resources' },
    { path: '/faq', label: 'FAQ', description: 'Common questions' },
    { path: '/pricing', label: 'Pricing', description: 'Service plans' },
    { path: '/contact', label: 'Contact', description: 'Get in touch' }
  ], []);

  const toggleDropdown = useCallback((category: string) => {
    setActiveDropdown(activeDropdown === category ? null : category);
  }, [activeDropdown]);

  const isActiveRoute = useCallback((path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  }, [location.pathname]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/90 backdrop-blur-xl border-b border-cyan-500/20 shadow-2xl shadow-cyan-500/10' 
        : 'bg-black/80 backdrop-blur-lg'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl lg:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                  Zion Tech Group
                </h1>
                <p className="text-xs text-cyan-400 font-medium">AI-Powered Solutions</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {/* Main Navigation */}
            <div className="flex items-center space-x-6">
              {navigationItems.slice(0, 4).map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 group ${
                    isActiveRoute(item.path)
                      ? 'text-cyan-400 bg-cyan-400/10'
                      : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/10'
                  }`}
                >
                  <span className="flex items-center space-x-2">
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                  </span>
                  {isActiveRoute(item.path) && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full" />
                  )}
                </Link>
              ))}
            </div>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('services')}
                className={`flex items-center space-x-2 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 group ${
                  activeDropdown === 'services'
                    ? 'text-cyan-400 bg-cyan-400/10'
                    : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/10'
                }`}
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                  activeDropdown === 'services' ? 'rotate-180' : ''
                }`} />
              </button>

              {activeDropdown === 'services' && (
                <div className="absolute top-full left-0 mt-2 w-[800px] bg-black/95 backdrop-blur-xl border border-cyan-500/20 rounded-2xl shadow-2xl shadow-cyan-500/20 overflow-hidden">
                  <div className="p-6">
                    <div className="grid grid-cols-2 gap-6">
                      {serviceCategories.map((category) => (
                        <div key={category.title} className="space-y-3">
                          <div className="flex items-center space-x-2 text-cyan-400 font-semibold">
                            <category.icon className="w-4 h-4" />
                            <span className="text-sm">{category.title}</span>
                          </div>
                          <div className="space-y-2">
                            {category.services.map((service) => (
                              <Link
                                key={service.path}
                                to={service.path}
                                className="block p-2 rounded-lg hover:bg-cyan-400/10 transition-colors duration-200 group"
                                onClick={() => setActiveDropdown(null)}
                              >
                                <div className="text-white font-medium text-sm group-hover:text-cyan-400 transition-colors duration-200">
                                  {service.name}
                                </div>
                                <div className="text-gray-400 text-xs mt-1">
                                  {service.description}
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 pt-4 border-t border-cyan-500/20">
                      <Link
                        to="/services"
                        className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
                        onClick={() => setActiveDropdown(null)}
                      >
                        <span className="text-sm font-medium">View All Services</span>
                        <ChevronRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Company Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('company')}
                className={`flex items-center space-x-2 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 group ${
                  activeDropdown === 'company'
                    ? 'text-cyan-400 bg-cyan-400/10'
                    : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/10'
                }`}
              >
                <span>Company</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                  activeDropdown === 'company' ? 'rotate-180' : ''
                }`} />
              </button>

              {activeDropdown === 'company' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-black/95 backdrop-blur-xl border border-cyan-500/20 rounded-2xl shadow-2xl shadow-cyan-500/20 overflow-hidden">
                  <div className="p-4">
                    <div className="space-y-2">
                      {companyPages.map((page) => (
                        <Link
                          key={page.path}
                          to={page.path}
                          className="block p-3 rounded-lg hover:bg-cyan-400/10 transition-colors duration-200 group"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <div className="text-white font-medium text-sm group-hover:text-cyan-400 transition-colors duration-200">
                            {page.label}
                          </div>
                          <div className="text-gray-400 text-xs mt-1">
                            {page.description}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('resources')}
                className={`flex items-center space-x-2 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 group ${
                  activeDropdown === 'resources'
                    ? 'text-cyan-400 bg-cyan-400/10'
                    : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/10'
                }`}
              >
                <span>Resources</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                  activeDropdown === 'resources' ? 'rotate-180' : ''
                }`} />
              </button>

              {activeDropdown === 'resources' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-black/95 backdrop-blur-xl border border-cyan-500/20 rounded-2xl shadow-2xl shadow-cyan-500/20 overflow-hidden">
                  <div className="p-4">
                    <div className="space-y-2">
                      {resourcePages.map((page) => (
                        <Link
                          key={page.path}
                          to={page.path}
                          className="block p-3 rounded-lg hover:bg-cyan-400/10 transition-colors duration-200 group"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <div className="text-white font-medium text-sm group-hover:text-cyan-400 transition-colors duration-200">
                            {page.label}
                          </div>
                          <div className="text-gray-400 text-xs mt-1">
                            {page.description}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Contact Button */}
            <Link
              to="/contact"
              className="futuristic-btn px-6 py-2 text-sm font-medium"
            >
              Get Started
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="p-2 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/10 transition-colors duration-200"
              aria-label="Open navigation menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </header>
  );
}
