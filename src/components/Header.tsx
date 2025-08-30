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
  Code,
  Database,
  Server,
  Lock,
  Cloud,
  Leaf,
  ShoppingCart,
  Headphones,
  GraduationCap,
  HelpCircle,
  Star,
  Award,
  Crown,
  Gem,
  Diamond,
  ChevronRight,
  Video,
  Calendar,
  Wrench,
  Satellite,
  Orbit
} from 'lucide-react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  const navigation = [
    {
      name: 'Services',
      href: '/services',
      icon: Zap,
      description: 'Comprehensive technology solutions',
      dropdown: [
        { 
          name: 'AI & Machine Learning', 
          href: '/services/ai-solutions', 
          icon: Brain,
          description: 'Transform your business with AI',
          subItems: [
            { name: 'AI Content Generation', href: '/services/ai-content-generation', icon: FileText },
            { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence', icon: BarChart3 },
            { name: 'AI Project Management', href: '/services/ai-project-management', icon: Target },
            { name: 'AI Marketing Automation', href: '/services/ai-marketing-automation', icon: TrendingUp },
            { name: 'AI Healthcare Analytics', href: '/services/ai-healthcare-analytics', icon: Heart },
            { name: 'AI Cybersecurity Suite', href: '/services/ai-cybersecurity-suite', icon: Shield }
          ]
        },
        { 
          name: 'Quantum Computing', 
          href: '/services/quantum-computing', 
          icon: Atom,
          description: 'Next-generation computational power',
          subItems: [
            { name: 'Quantum AI Platform', href: '/services/quantum-ai-platform', icon: Brain },
            { name: 'Quantum Security', href: '/services/quantum-enhanced-cybersecurity', icon: Lock },
            { name: 'Quantum Trading', href: '/services/quantum-ai-trading-platform', icon: TrendingUp },
            { name: 'Quantum Neural Networks', href: '/services/quantum-neural-network-platform', icon: Network }
          ]
        },
        { 
          name: 'Cybersecurity', 
          href: '/services/cybersecurity', 
          icon: Shield,
          description: 'Advanced security solutions',
          subItems: [
            { name: 'Zero Trust Security', href: '/services/zero-trust-network-access', icon: Lock },
            { name: 'AI Threat Detection', href: '/services/ai-cybersecurity-threat-detection', icon: Brain },
            { name: 'Incident Response', href: '/services/incident-response-platform', icon: Activity },
            { name: 'Vendor Risk Management', href: '/services/vendor-risk-management', icon: Shield }
          ]
        },
        { 
          name: 'Cloud & DevOps', 
          href: '/services/cloud-devops', 
          icon: Cloud,
          description: 'Modern infrastructure solutions',
          subItems: [
            { name: 'AI DevOps Automation', href: '/services/ai-devops-automation-platform', icon: Cpu },
            { name: 'FinOps Advisor', href: '/services/finops-advisor', icon: DollarSign },
            { name: 'Uptime SLA Monitor', href: '/services/uptime-sla-monitor', icon: Activity },
            { name: 'MLOps Pipeline', href: '/services/mlops-pipeline', icon: Code }
          ]
        },
        { 
          name: 'Digital Transformation', 
          href: '/services/digital-transformation', 
          icon: Rocket,
          description: 'Modernize your business',
          subItems: [
            { name: 'Digital Twin Solutions', href: '/services/digital-twin', icon: Eye },
            { name: 'AI Workflow Automation', href: '/services/ai-workflow-automation', icon: Zap },
            { name: 'AI Enterprise Orchestrator', href: '/services/ai-enterprise-orchestrator', icon: Building },
            { name: 'Autonomous Business Operations', href: '/services/autonomous-business-operations-platform', icon: Rocket }
          ]
        },
        { 
          name: 'Data & Analytics', 
          href: '/services/data-analytics', 
          icon: BarChart3,
          description: 'Insights-driven decisions',
          subItems: [
            { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence', icon: Brain },
            { name: 'AI Financial Trading', href: '/services/ai-financial-trading-platform', icon: DollarSign },
            { name: 'AI Supply Chain Optimization', href: '/services/ai-supply-chain-optimization', icon: Network },
            { name: 'AI Predictive Maintenance', href: '/services/ai-predictive-maintenance', icon: Wrench }
          ]
        },
        { 
          name: 'IoT & Edge Computing', 
          href: '/services/iot-edge-computing', 
          icon: Activity,
          description: 'Connected intelligence',
          subItems: [
            { name: 'AI IoT Edge Platform', href: '/services/ai-iot-edge-computing-platform', icon: Cpu },
            { name: 'IoT Edge Computing', href: '/services/iot-edge-computing-platform', icon: Activity },
            { name: 'Smart City Solutions', href: '/services/smart-city-solutions', icon: Building },
            { name: 'Industrial IoT', href: '/services/industrial-iot', icon: Cpu }
          ]
        },
        { 
          name: 'Space Technology', 
          href: '/services/space-technology', 
          icon: Rocket,
          description: 'Pioneering space innovations',
          subItems: [
            { name: 'Satellite Systems', href: '/services/satellite-systems', icon: Satellite },
            { name: 'Space Analytics', href: '/services/space-analytics', icon: BarChart3 },
            { name: 'Orbital Optimization', href: '/services/orbital-optimization', icon: Orbit },
            { name: 'Space Weather Monitoring', href: '/services/space-weather', icon: Cloud }
          ]
        },
        { 
          name: 'Blockchain & Web3', 
          href: '/services/blockchain-solutions', 
          icon: Code,
          description: 'Decentralized future',
          subItems: [
            { name: 'Enterprise Blockchain', href: '/solutions/blockchain-enterprise-solutions', icon: Building },
            { name: 'Smart Contracts', href: '/services/smart-contracts', icon: FileText },
            { name: 'DeFi Solutions', href: '/services/defi-solutions', icon: DollarSign },
            { name: 'NFT Platforms', href: '/services/nft-platforms', icon: Gem }
          ]
        },
        { 
          name: 'Sustainability', 
          href: '/services/sustainability', 
          icon: Leaf,
          description: 'Green technology solutions',
          subItems: [
            { name: 'Sustainable Technology', href: '/services/sustainable-technology-solutions', icon: Leaf },
            { name: 'Green IT Solutions', href: '/services/green-it', icon: Heart },
            { name: 'Carbon Footprint Tracking', href: '/services/carbon-tracking', icon: Activity },
            { name: 'Energy Optimization', href: '/services/energy-optimization', icon: Zap }
          ]
        },
        { 
          name: 'Comprehensive Portfolio', 
          href: '/comprehensive-services', 
          icon: Globe,
          description: 'Full service overview',
          badge: 'New'
        },
        { 
          name: 'Revolutionary Services', 
          href: '/revolutionary-services', 
          icon: Sparkles,
          description: 'Cutting-edge innovations',
          badge: 'Featured'
        },
        { 
          name: 'New Services 2025', 
          href: '/new-services-2025', 
          icon: Star,
          description: 'Latest innovations',
          badge: 'Latest'
        },
        { 
          name: 'Pricing', 
          href: '/pricing', 
          icon: DollarSign,
          description: 'Transparent pricing'
        }
      ]
    },
    {
      name: 'Solutions',
      href: '/solutions',
      icon: Target,
      description: 'Industry-specific solutions',
      dropdown: [
        { 
          name: 'Enterprise Solutions', 
          href: '/solutions/enterprise', 
          icon: Building,
          description: 'Large-scale business solutions',
          subItems: [
            { name: 'Enterprise AI Platform', href: '/solutions/enterprise-ai', icon: Brain },
            { name: 'Digital Transformation', href: '/solutions/digital-transformation', icon: Rocket },
            { name: 'Enterprise Security', href: '/solutions/enterprise-security', icon: Shield },
            { name: 'Cloud Migration', href: '/solutions/cloud-migration', icon: Cloud }
          ]
        },
        { 
          name: 'AI Business Intelligence', 
          href: '/solutions/ai-business-intelligence', 
          icon: Brain,
          description: 'Data-driven insights',
          subItems: [
            { name: 'Predictive Analytics', href: '/solutions/predictive-analytics', icon: BarChart3 },
            { name: 'Business Process Automation', href: '/solutions/business-process-automation', icon: Zap },
            { name: 'Customer Intelligence', href: '/solutions/customer-intelligence', icon: Users },
            { name: 'Market Intelligence', href: '/solutions/market-intelligence', icon: TrendingUp }
          ]
        },
        { 
          name: 'Quantum AI Platform', 
          href: '/solutions/quantum-ai-platform', 
          icon: Atom,
          description: 'Quantum-enhanced AI',
          subItems: [
            { name: 'Quantum Machine Learning', href: '/solutions/quantum-ml', icon: Brain },
            { name: 'Quantum Optimization', href: '/solutions/quantum-optimization', icon: Target },
            { name: 'Quantum Cryptography', href: '/solutions/quantum-cryptography', icon: Lock },
            { name: 'Quantum Simulation', href: '/solutions/quantum-simulation', icon: Atom }
          ]
        },
        { 
          name: 'Digital Twin Solutions', 
          href: '/solutions/digital-twin', 
          icon: Eye,
          description: 'Virtual replicas for optimization',
          subItems: [
            { name: 'Manufacturing Twins', href: '/solutions/manufacturing-twins', icon: Cpu },
            { name: 'Building Twins', href: '/solutions/building-twins', icon: Building },
            { name: 'Process Twins', href: '/solutions/process-twins', icon: Activity },
            { name: 'Asset Twins', href: '/solutions/asset-twins', icon: Server }
          ]
        },
        { 
          name: 'Zero Trust Security', 
          href: '/solutions/zero-trust-security', 
          icon: Shield,
          description: 'Advanced security architecture',
          subItems: [
            { name: 'Network Access Control', href: '/solutions/network-access-control', icon: Lock },
            { name: 'Identity Management', href: '/solutions/identity-management', icon: User },
            { name: 'Device Trust', href: '/solutions/device-trust', icon: Cpu },
            { name: 'Application Security', href: '/solutions/application-security', icon: Code }
          ]
        },
        { 
          name: 'Industry Solutions', 
          href: '/solutions/industry', 
          icon: Building,
          description: 'Sector-specific solutions',
          subItems: [
            { name: 'Healthcare Technology', href: '/solutions/healthcare', icon: Heart },
            { name: 'Financial Services', href: '/solutions/financial', icon: DollarSign },
            { name: 'Manufacturing', href: '/solutions/manufacturing', icon: Cpu },
            { name: 'Retail & E-commerce', href: '/solutions/retail', icon: ShoppingCart }
          ]
        }
      ]
    },
    {
      name: 'About',
      href: '/about',
      icon: Users,
      description: 'Company information',
      dropdown: [
        { 
          name: 'Our Story', 
          href: '/about/story', 
          icon: FileText,
          description: 'How we started'
        },
        { 
          name: 'Team', 
          href: '/about/team', 
          icon: Users,
          description: 'Meet our experts'
        },
        { 
          name: 'Careers', 
          href: '/careers', 
          icon: Briefcase,
          description: 'Join our team'
        },
        { 
          name: 'Partners', 
          href: '/partners', 
          icon: Network,
          description: 'Strategic partnerships'
        },
        { 
          name: 'Press', 
          href: '/press', 
          icon: Newspaper,
          description: 'Latest news'
        },
        { 
          name: 'Awards & Recognition', 
          href: '/about/awards', 
          icon: Award,
          description: 'Industry recognition'
        },
        { 
          name: 'Sustainability', 
          href: '/about/sustainability', 
          icon: Leaf,
          description: 'Our commitment'
        }
      ]
    },
    {
      name: 'Resources',
      href: '/resources',
      icon: FileText,
      description: 'Documentation and support',
      dropdown: [
        { 
          name: 'Blog', 
          href: '/blog', 
          icon: Newspaper,
          description: 'Latest insights'
        },
        { 
          name: 'Case Studies', 
          href: '/case-studies', 
          icon: FileText,
          description: 'Success stories'
        },
        { 
          name: 'Research & Development', 
          href: '/research-development', 
          icon: Activity,
          description: 'Innovation insights'
        },
        { 
          name: 'Documentation', 
          href: '/docs', 
          icon: FileText,
          description: 'Technical guides'
        },
        { 
          name: 'API Reference', 
          href: '/api', 
          icon: Cpu,
          description: 'Developer resources'
        },
        { 
          name: 'Sitemap', 
          href: '/sitemap', 
          icon: FileText,
          description: 'Site navigation'
        },
        { 
          name: 'Support', 
          href: '/support', 
          icon: HelpCircle,
          description: 'Get help'
        },
        { 
          name: 'Training', 
          href: '/training', 
          icon: GraduationCap,
          description: 'Learn with us'
        },
        { 
          name: 'Helpdesk', 
          href: '/help', 
          icon: HelpCircle,
          description: 'Technical support'
        },
        { 
          name: 'Webinars', 
          href: '/webinars', 
          icon: Video,
          description: 'Educational content'
        },
        { 
          name: 'White Papers', 
          href: '/white-papers', 
          icon: FileText,
          description: 'In-depth research'
        },
        { 
          name: 'Events', 
          href: '/events', 
          icon: Calendar,
          description: 'Upcoming events'
        }
      ]
    },
    {
      name: 'Contact',
      href: '/contact',
      icon: Phone,
      description: 'Get in touch'
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
            <span className="text-xl font-bold hidden sm:block">Zion Tech Group</span>
            <span className="text-lg font-bold sm:hidden">ZTG</span>
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

                {/* Enhanced Dropdown Menu */}
                {item.dropdown && activeDropdown === item.name && (
                  <motion.div 
                    className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-md border border-gray-700 rounded-lg shadow-xl"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="p-4">
                      <div className="mb-4">
                        <h3 className="text-lg font-semibold text-white mb-2">{item.name}</h3>
                        <p className="text-sm text-gray-400">{item.description}</p>
                      </div>
                      <div className="space-y-2">
                        {item.dropdown.map((subItem) => (
                          <div key={subItem.name} className="group/sub">
                            {subItem.subItems ? (
                              <div className="relative">
                                <div className="flex items-center justify-between p-3 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-colors cursor-pointer">
                                  <div className="flex items-center space-x-3">
                                    <subItem.icon className="w-4 h-4" />
                                    <div>
                                      <span className="font-medium">{subItem.name}</span>
                                      <p className="text-xs text-gray-500">{subItem.description}</p>
                                    </div>
                                  </div>
                                  <ChevronRight className="w-4 h-4 opacity-0 group-hover/sub:opacity-100 transition-opacity" />
                                </div>
                                
                                {/* Sub-dropdown */}
                                <div className="absolute left-full top-0 ml-2 w-72 bg-gray-800/95 backdrop-blur-md border border-gray-600 rounded-lg shadow-xl opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200">
                                  <div className="p-3">
                                    <h4 className="text-sm font-semibold text-white mb-2">{subItem.name}</h4>
                                    <div className="space-y-1">
                                      {subItem.subItems.map((subSubItem) => (
                                        <Link
                                          key={subSubItem.name}
                                          to={subSubItem.href}
                                          className="flex items-center space-x-3 p-2 text-gray-300 hover:text-white hover:bg-gray-700/50 rounded transition-colors"
                                        >
                                          <subSubItem.icon className="w-4 h-4" />
                                          <span className="text-sm">{subSubItem.name}</span>
                                        </Link>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ) : (
                              <Link
                                to={subItem.href}
                                className="flex items-center justify-between p-3 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-colors"
                              >
                                <div className="flex items-center space-x-3">
                                  <subItem.icon className="w-4 h-4" />
                                  <div>
                                    <span className="font-medium">{subItem.name}</span>
                                    <p className="text-xs text-gray-500">{subItem.description}</p>
                                  </div>
                                </div>
                                {subItem.badge && (
                                  <span className={`px-2 py-1 text-xs rounded-full ${
                                    subItem.badge === 'New' ? 'bg-green-500/20 text-green-400' :
                                    subItem.badge === 'Featured' ? 'bg-purple-500/20 text-purple-400' :
                                    'bg-blue-500/20 text-blue-400'
                                  }`}>
                                    {subItem.badge}
                                  </span>
                                )}
                              </Link>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black rounded"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Contact Info */}
            <div className="hidden md:flex items-center space-x-4 text-sm text-gray-400">
              <div className="flex items-center space-x-1">
                <Phone className="w-4 h-4" />
                <span>+1 302 464 0950</span>
              </div>
            </div>

            {/* CTA Button */}
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black"
            >
              Get Started
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black rounded"
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
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="py-4 border-t border-gray-700"
            >
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for services, solutions, or resources..."
                  className="w-full px-4 py-3 pl-12 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-1 bg-cyan-500 text-white text-sm rounded-md hover:bg-cyan-600 transition-colors"
                >
                  Search
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-700"
          >
            <div className="px-4 py-6 space-y-6">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                        className="flex items-center justify-between w-full text-left text-white hover:text-cyan-400 transition-colors py-2"
                      >
                        <span className="flex items-center space-x-2">
                          <item.icon className="w-5 h-5" />
                          <span>{item.name}</span>
                        </span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {activeDropdown === item.name && (
                        <div className="ml-6 mt-2 space-y-2">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="block text-gray-300 hover:text-white transition-colors py-2"
                            >
                              <div className="flex items-center space-x-3">
                                <subItem.icon className="w-4 h-4" />
                                <div>
                                  <span className="font-medium">{subItem.name}</span>
                                  <p className="text-xs text-gray-500">{subItem.description}</p>
                                </div>
                                {subItem.badge && (
                                  <span className={`px-2 py-1 text-xs rounded-full ${
                                    subItem.badge === 'New' ? 'bg-green-500/20 text-green-400' :
                                    subItem.badge === 'Featured' ? 'bg-purple-500/20 text-purple-400' :
                                    'bg-blue-500/20 text-blue-400'
                                  }`}>
                                    {subItem.badge}
                                  </span>
                                )}
                              </div>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className="flex items-center space-x-2 text-white hover:text-cyan-400 transition-colors py-2"
                    >
                      <item.icon className="w-5 h-5" />
                      <span>{item.name}</span>
                    </Link>
                  )}
                </div>
              ))}
              
              {/* Mobile Contact Info */}
              <div className="pt-6 border-t border-gray-700">
                <div className="space-y-3 text-sm text-gray-400">
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4" />
                    <span>+1 302 464 0950</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4" />
                    <span>kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>364 E Main St STE 1008, Middletown DE 19709</span>
                  </div>
                </div>
                
                <Link
                  to="/contact"
                  className="mt-4 w-full inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
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