import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Brain, 
  Shield, 
  Cpu, 
  Heart, 
  Rocket, 
  Sparkles,
  BarChart3,
  Network,
  Globe,
  Users,
  FileText,
  Phone,
  Mail,
  MapPin,
  Search,
  Bell,
  User,
  Settings,
  Zap,
  Atom,
  Eye,
  Activity,
  Building,
  Target,
  TrendingUp,
  Briefcase,
  Newspaper,
  DollarSign,
  Database,
  Lock,
  Cloud,
  Code,
  Server,
  Monitor,
  Smartphone,
  Wifi,
  Satellite,
  Leaf,
  Car,
  Gamepad2,
  Bot,
  ShoppingCart,
  TestTube,
  Video,
  Award,
  GraduationCap
} from 'lucide-react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  const navigation = [
    {
      name: 'Micro SaaS',
      href: '/services/micro-saas',
      icon: Zap,
      dropdown: [
        { name: 'AI & ML Solutions', href: '/services/ai-ml-solutions', icon: Brain, description: 'AI-powered business solutions' },
        { name: 'Blockchain & Web3', href: '/services/blockchain-web3', icon: Network, description: 'Decentralized applications' },
        { name: 'Quantum Computing', href: '/services/quantum-computing', icon: Atom, description: 'Quantum-enhanced platforms' },
        { name: 'Cybersecurity Tools', href: '/services/cybersecurity-tools', icon: Shield, description: 'Advanced security solutions' },
        { name: 'Data Analytics', href: '/services/data-analytics', icon: BarChart3, description: 'Business intelligence tools' },
        { name: 'IoT & Edge', href: '/services/iot-edge', icon: Activity, description: 'Connected device solutions' },
        { name: 'FinTech Solutions', href: '/services/fintech', icon: DollarSign, description: 'Financial technology tools' },
        { name: 'HealthTech', href: '/services/healthtech', icon: Heart, description: 'Healthcare technology' },
        { name: 'GreenTech', href: '/services/greentech', icon: Leaf, description: 'Sustainable technology' },
        { name: 'SpaceTech', href: '/services/spacetech', icon: Satellite, description: 'Space technology solutions' },
        { name: 'Metaverse Platform', href: '/services/metaverse', icon: Gamepad2, description: 'Virtual world solutions' },
        { name: 'Autonomous Systems', href: '/services/autonomous', icon: Bot, description: 'Self-driving technology' }
      ]
    },
    {
      name: 'IT Services',
      href: '/services/it-services',
      icon: Cpu,
      dropdown: [
        { name: 'Infrastructure Solutions', href: '/services/infrastructure', icon: Server, description: 'Network and server solutions' },
        { name: 'Cloud & DevOps', href: '/services/cloud-devops', icon: Cloud, description: 'Cloud migration and automation' },
        { name: 'Digital Transformation', href: '/services/digital-transformation', icon: Rocket, description: 'Business modernization' },
        { name: 'Enterprise Solutions', href: '/services/enterprise', icon: Building, description: 'Large-scale implementations' },
        { name: 'Managed Services', href: '/services/managed-services', icon: Monitor, description: '24/7 IT management' },
        { name: 'Consulting', href: '/services/consulting', icon: Briefcase, description: 'Strategic IT guidance' },
        { name: 'Integration Services', href: '/services/integration', icon: Code, description: 'System connectivity' },
        { name: 'Support & Maintenance', href: '/services/support-maintenance', icon: Settings, description: 'Ongoing IT support' }
      ]
    },
    {
      name: 'AI Solutions',
      href: '/services/ai-solutions',
      icon: Brain,
      dropdown: [
        { name: 'Machine Learning', href: '/services/machine-learning', icon: Brain, description: 'ML model development' },
        { name: 'Natural Language Processing', href: '/services/nlp', icon: FileText, description: 'Text and language AI' },
        { name: 'Computer Vision', href: '/services/computer-vision', icon: Eye, description: 'Image and video AI' },
        { name: 'Predictive Analytics', href: '/services/predictive-analytics', icon: TrendingUp, description: 'Forecasting and insights' },
        { name: 'AI Automation', href: '/services/ai-automation', icon: Zap, description: 'Intelligent process automation' },
        { name: 'AI Consulting', href: '/services/ai-consulting', icon: Users, description: 'AI strategy and implementation' },
        { name: 'AI Infrastructure', href: '/services/ai-infrastructure', icon: Database, description: 'AI computing resources' },
        { name: 'AI Integration', href: '/services/ai-integration', icon: Code, description: 'AI system connectivity' },
        { name: 'AI Security', href: '/services/ai-security', icon: Lock, description: 'AI-powered security' },
        { name: 'AI Ethics', href: '/services/ai-ethics', icon: Shield, description: 'Responsible AI development' },
        { name: 'Quantum AI', href: '/services/quantum-ai', icon: Atom, description: 'Quantum-enhanced AI' },
        { name: 'Edge AI', href: '/services/edge-ai', icon: Smartphone, description: 'Device-level AI processing' }
      ]
    },
    {
      name: 'Solutions',
      href: '/solutions',
      icon: Target,
      dropdown: [
        { name: 'Enterprise Solutions', href: '/solutions/enterprise', icon: Building, description: 'Large organization solutions' },
        { name: 'AI Business Intelligence', href: '/solutions/ai-business-intelligence', icon: Brain, description: 'AI-powered insights' },
        { name: 'Quantum AI Platform', href: '/solutions/quantum-ai-platform', icon: Atom, description: 'Quantum computing solutions' },
        { name: 'Digital Twin Solutions', href: '/solutions/digital-twin', icon: Eye, description: 'Virtual replica technology' },
        { name: 'Zero Trust Security', href: '/solutions/zero-trust-security', icon: Shield, description: 'Advanced security framework' },
        { name: 'Smart City Solutions', href: '/solutions/smart-city', icon: Building, description: 'Urban technology' },
        { name: 'Healthcare Technology', href: '/solutions/healthcare-tech', icon: Heart, description: 'Medical technology' },
        { name: 'Financial Technology', href: '/solutions/fintech', icon: DollarSign, description: 'Banking and finance tech' },
        { name: 'Manufacturing Solutions', href: '/solutions/manufacturing', icon: Cpu, description: 'Industrial technology' },
        { name: 'Retail Technology', href: '/solutions/retail-tech', icon: ShoppingCart, description: 'E-commerce solutions' }
      ]
    },
    {
      name: 'About',
      href: '/about',
      icon: Users,
      dropdown: [
        { name: 'Our Story', href: '/about/story', icon: FileText, description: 'Company history and mission' },
        { name: 'Team', href: '/about/team', icon: Users, description: 'Meet our experts' },
        { name: 'Careers', href: '/careers', icon: Briefcase, description: 'Job opportunities' },
        { name: 'Partners', href: '/partners', icon: Network, description: 'Strategic partnerships' },
        { name: 'Press', href: '/press', icon: Newspaper, description: 'News and media' },
        { name: 'Awards', href: '/about/awards', icon: Award, description: 'Recognition and achievements' },
        { name: 'Research & Development', href: '/research-development', icon: TestTube, description: 'Innovation and research' }
      ]
    },
    {
      name: 'Resources',
      href: '/resources',
      icon: FileText,
      dropdown: [
        { name: 'Blog', href: '/blog', icon: Newspaper, description: 'Latest insights and news' },
        { name: 'Case Studies', href: '/case-studies', icon: FileText, description: 'Success stories' },
        { name: 'Research & Development', href: '/research-development', icon: Activity, description: 'Innovation insights' },
        { name: 'Documentation', href: '/docs', icon: FileText, description: 'Technical guides' },
        { name: 'API Reference', href: '/api', icon: Cpu, description: 'Developer resources' },
        { name: 'Sitemap', href: '/sitemap', icon: FileText, description: 'Site navigation' },
        { name: 'Support', href: '/support', icon: FileText, description: 'Help and assistance' },
        { name: 'Training', href: '/training', icon: FileText, description: 'Educational resources' },
        { name: 'Helpdesk', href: '/help', icon: FileText, description: 'Technical support' },
        { name: 'Webinars', href: '/webinars', icon: Video, description: 'Educational sessions' },
        { name: 'White Papers', href: '/white-papers', icon: FileText, description: 'In-depth research' }
      ]
    },
    {
      name: 'Contact',
      href: '/contact',
      icon: Phone
    }
  ];

  const isActive = (href: string) => location.pathname === href;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Implement search functionality
      console.log('Searching for:', searchQuery);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-white/10 shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 text-white hover:text-cyan-400 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black" aria-label="Zion Tech Group Home">
            <motion.div 
              className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Zap className="w-5 h-5 text-white" />
            </motion.div>
            <span className="text-xl font-bold">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <div
                    className="flex items-center space-x-1 text-white hover:text-cyan-400 cursor-pointer transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black rounded"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                    onFocus={() => setActiveDropdown(item.name)}
                    onBlur={() => setActiveDropdown(null)}
                    tabIndex={0}
                    role="button"
                    aria-expanded={activeDropdown === item.name}
                    aria-haspopup="true"
                  >
                    <span className={isActive(item.href) ? 'text-cyan-400' : ''}>
                      {item.name}
                    </span>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`text-white hover:text-cyan-400 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black rounded ${
                      isActive(item.href) ? 'text-cyan-400' : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === item.name && (
                  <motion.div 
                    className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-md border border-gray-700 rounded-lg shadow-xl"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="py-2">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="flex items-start space-x-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-inset"
                        >
                          <subItem.icon className="w-5 h-5 mt-0.5 flex-shrink-0" />
                          <div className="flex-1 min-w-0">
                            <span className="block font-medium">{subItem.name}</span>
                            {subItem.description && (
                              <span className="block text-sm text-gray-400 mt-1">{subItem.description}</span>
                            )}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* Right side actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Search */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black rounded"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Notifications */}
            <button className="p-2 text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black rounded" aria-label="Notifications">
              <Bell className="w-5 h-5" />
            </button>

            {/* User menu */}
            <button className="p-2 text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black rounded" aria-label="User menu">
              <User className="w-5 h-5" />
            </button>

            {/* CTA Button */}
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black font-medium"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black rounded"
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              className="py-4 border-t border-gray-700"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
            >
              <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search for services, solutions, or information..."
                    className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                  <button
                    type="submit"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-md transition-colors"
                  >
                    Search
                  </button>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="lg:hidden border-t border-gray-700"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="py-4 space-y-2">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.dropdown ? (
                      <div>
                            <button
                              onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                              className="w-full flex items-center justify-between px-4 py-3 text-left text-white hover:bg-gray-800 rounded-lg transition-colors"
                            >
                              <div className="flex items-center space-x-3">
                                <item.icon className="w-5 h-5" />
                                <span>{item.name}</span>
                              </div>
                              <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                            </button>
                            {activeDropdown === item.name && (
                              <div className="ml-8 mt-2 space-y-1">
                                {item.dropdown.map((subItem) => (
                                  <Link
                                    key={subItem.name}
                                    to={subItem.href}
                                    className="flex items-center space-x-3 px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
                                  >
                                    <subItem.icon className="w-4 h-4" />
                                    <span>{subItem.name}</span>
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                    ) : (
                      <Link
                        to={item.href}
                        className="flex items-center space-x-3 px-4 py-3 text-white hover:bg-gray-800 rounded-lg transition-colors"
                      >
                        <item.icon className="w-5 h-5" />
                        <span>{item.name}</span>
                      </Link>
                    )}
                  </div>
                ))}
                
                {/* Mobile CTA */}
                <div className="pt-4 border-t border-gray-700">
                  <Link
                    to="/contact"
                    className="block w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center px-4 py-3 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 font-medium"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}