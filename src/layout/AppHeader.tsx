import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  Search, 
  User, 
  Bell, 
  ChevronDown,
  Brain,
  Shield,
  Cloud,
  Zap,
  Globe,
  Cpu,
  Database,
  Network,
  Lock,
  Code,
  Rocket,
  Users,
  BarChart3,
  FileImage,
  TrendingUp,
  MessageCircle,
  Video,
  FileText,
  Heart,
  PanelLeft,
  Sparkles,
  Star,
  Crown,
  Award,
  Eye,
  Handshake,
  LogOut,
  Building
} from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

export function AppHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { user, logout } = useAuth();
  const location = useLocation();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to search results
      window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const navigationItems = [
    {
      name: 'Services',
      href: '/services',
      icon: Zap,
      color: 'from-zion-cyan to-zion-blue',
      dropdown: [
        { name: 'AI & Analytics', href: '/services/ai-analytics', icon: Brain, description: 'AI-powered business intelligence and analytics' },
        { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield, description: 'Advanced threat detection and security' },
        { name: 'Cloud & DevOps', href: '/services/cloud-devops', icon: Cloud, description: 'Cloud infrastructure and automation' },
        { name: 'IoT & Edge', href: '/services/iot-edge', icon: Cpu, description: 'Edge computing and IoT solutions' },
        { name: 'Quantum Computing', href: '/services/quantum-computing', icon: Rocket, description: 'Quantum algorithms and computing' },
        { name: 'Blockchain', href: '/services/blockchain', icon: Lock, description: 'Distributed ledger and smart contracts' },
        { name: 'Digital Twin', href: '/services/digital-twin', icon: Globe, description: 'Virtual replicas and simulation' },
        { name: 'Sustainability', href: '/services/sustainability', icon: Heart, description: 'Green IT and ESG solutions' }
      ]
    },
    {
      name: 'Micro SAAS',
      href: '/micro-saas-services',
      icon: Code,
      color: 'from-zion-purple to-zion-pink',
      dropdown: [
        { name: 'AI Business Intelligence', href: '/micro-saas/ai-business-intelligence', icon: Brain, description: 'AI analytics platform' },
        { name: 'Customer Experience', href: '/micro-saas/customer-experience', icon: Users, description: 'Customer journey optimization' },
        { name: 'Quantum Computing', href: '/micro-saas/quantum-computing', icon: Rocket, description: 'Quantum algorithms as service' },
        { name: 'Supply Chain', href: '/micro-saas/supply-chain', icon: Network, description: 'Blockchain transparency' },
        { name: 'Cybersecurity', href: '/micro-saas/cybersecurity', icon: Shield, description: 'AI threat detection' },
        { name: 'IoT Edge Computing', href: '/micro-saas/iot-edge', icon: Cpu, description: 'Edge processing platform' },
        { name: 'Content Creation', href: '/micro-saas/content-creation', icon: FileText, description: 'AI content generation' },
        { name: 'HR Platform', href: '/micro-saas/hr-platform', icon: Users, description: 'Intelligent HR management' }
      ]
    },
    {
      name: 'Solutions',
      href: '/solutions',
      icon: Building,
      color: 'from-zion-blue to-zion-cyan',
      dropdown: [
        { name: 'Enterprise Solutions', href: '/solutions/enterprise', icon: Building, description: 'Large-scale deployments' },
        { name: 'SMB Solutions', href: '/solutions/smb', icon: Users, description: 'Small business solutions' },
        { name: 'Industry Solutions', href: '/solutions/industries', icon: BarChart3, description: 'Industry-specific tech' },
        { name: 'Custom Development', href: '/solutions/custom', icon: Code, description: 'Bespoke software' },
        { name: 'Digital Transformation', href: '/solutions/digital-transformation', icon: TrendingUp, description: 'End-to-end transformation' },
        { name: 'IT Consulting', href: '/solutions/consulting', icon: MessageCircle, description: 'Strategic consulting' },
        { name: 'Onsite Support', href: '/solutions/onsite-support', icon: Users, description: 'Local IT support' },
        { name: 'Green IT', href: '/green-it', icon: Heart, description: 'Sustainable technology' }
      ]
    }
  ];

  const companyItems = [
    { name: 'About Us', href: '/about', icon: Building, description: 'Our story and mission' },
    { name: 'Our Team', href: '/team', icon: Users, description: 'Meet our experts' },
    { name: 'Careers', href: '/careers', icon: Award, description: 'Join our team' },
    { name: 'Partners', href: '/partners', icon: Handshake, description: 'Strategic partnerships' },
    { name: 'News & Blog', href: '/blog', icon: FileText, description: 'Latest insights' },
    { name: 'Case Studies', href: '/case-studies', icon: Star, description: 'Success stories' },
    { name: 'Contact Us', href: '/contact', icon: MessageCircle, description: 'Get in touch' },
    { name: 'Support', href: '/help', icon: MessageCircle, description: 'Technical support' }
  ];

  const resourceItems = [
    { name: 'Documentation', href: '/docs', icon: FileText, description: 'Technical guides' },
    { name: 'API Reference', href: '/api', icon: Code, description: 'Developer resources' },
    { name: 'White Papers', href: '/white-papers', icon: FileText, description: 'Industry insights' },
    { name: 'Webinars', href: '/webinars', icon: Video, description: 'Educational content' },
    { name: 'Training', href: '/training', icon: Users, description: 'Skill development' },
    { name: 'Community', href: '/community', icon: Users, description: 'User forums' },
    { name: 'FAQ', href: '/faq', icon: MessageCircle, description: 'Common questions' },
    { name: 'Status', href: '/status', icon: BarChart3, description: 'Service status' }
  ];

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  return (
    <header className="bg-black/90 backdrop-blur-md border-b border-zion-cyan/20 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-lg lg:text-xl">Z</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
            </div>
            <div className="hidden sm:block">
              <div className="text-xl lg:text-2xl font-bold text-white">ZION TECH GROUP</div>
              <div className="text-xs text-zion-cyan font-medium">INNOVATION • TECHNOLOGY • FUTURE</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-zion-cyan transition-colors duration-300">Home</Link>
            
            {/* Navigation Items with Dropdowns */}
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <button 
                  className="flex items-center text-white hover:text-zion-cyan transition-colors duration-300"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.name} <ChevronDown className="ml-1 w-4 h-4" />
                </button>
                {activeDropdown === item.name && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-96 bg-black/95 backdrop-blur-md border border-zion-cyan/20 rounded-lg shadow-xl py-4"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div className="grid grid-cols-2 gap-4 px-4">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.href}
                          className="flex items-start space-x-3 p-3 rounded-lg hover:bg-zion-cyan/10 transition-all duration-300 group"
                        >
                          <div className={`w-8 h-8 bg-gradient-to-r ${dropdownItem.color} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                            <dropdownItem.icon className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <div className="font-medium text-white group-hover:text-zion-cyan transition-colors duration-300">
                              {dropdownItem.name}
                            </div>
                            <div className="text-xs text-zion-slate-light mt-1 opacity-75">
                              {dropdownItem.description}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            ))}

            {/* Company Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center text-white hover:text-zion-cyan transition-colors duration-300"
                onMouseEnter={() => setActiveDropdown('Company')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                Company <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {activeDropdown === 'Company' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 mt-2 w-64 bg-black/95 backdrop-blur-md border border-zion-cyan/20 rounded-lg shadow-xl py-4"
                  onMouseEnter={() => setActiveDropdown('Company')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="px-4 space-y-2">
                    {companyItems.map((companyItem) => (
                      <Link
                        key={companyItem.name}
                        to={companyItem.href}
                        className="flex items-start space-x-3 p-3 rounded-lg hover:bg-zion-cyan/10 transition-all duration-300 group"
                      >
                        <div className="w-6 h-6 bg-gradient-to-r from-zion-cyan to-zion-blue rounded flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <companyItem.icon className="w-3 h-3 text-white" />
                        </div>
                        <div>
                          <div className="font-medium text-white group-hover:text-zion-cyan transition-colors duration-300">
                            {companyItem.name}
                          </div>
                          <div className="text-xs text-zion-slate-light mt-1 opacity-75">
                            {companyItem.description}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            <Link to="/pricing" className="text-white hover:text-zion-cyan transition-colors duration-300">Pricing</Link>
            <Link to="/marketplace" className="text-white hover:text-zion-cyan transition-colors duration-300">Marketplace</Link>
          </nav>

          {/* Right side actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Search */}
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 px-4 py-2 bg-black/50 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-zion-slate-light hover:text-zion-cyan"
              >
                <Search className="w-5 h-5" />
              </button>
            </form>

            {/* User menu */}
            {user ? (
              <div className="relative group">
                <button className="p-2 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 rounded-lg transition-colors">
                  <User className="w-5 h-5" />
                </button>
                <div className="absolute right-0 top-full mt-2 w-48 bg-black/95 backdrop-blur-md border border-zion-cyan/20 rounded-lg shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <Link to="/dashboard" className="block px-4 py-2 text-white hover:bg-zion-cyan/10 transition-colors">Dashboard</Link>
                  <Link to="/profile" className="block px-4 py-2 text-white hover:bg-zion-cyan/10 transition-colors">Profile</Link>
                  <Link to="/settings" className="block px-4 py-2 text-white hover:bg-zion-cyan/10 transition-colors">Settings</Link>
                  <button
                    onClick={logout}
                    className="w-full text-left px-4 py-2 text-white hover:bg-zion-cyan/10 transition-colors flex items-center space-x-2"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Logout</span>
                  </button>
                </div>
              </div>
            ) : (
              <Link 
                to="/login" 
                className="text-zion-cyan hover:text-white transition-colors duration-300"
              >
                Sign In
              </Link>
            )}

            {/* Notifications */}
            <button className="p-2 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 rounded-lg transition-colors">
              <Bell className="w-5 h-5" />
            </button>

            {/* CTA Button */}
            {!user && (
              <Link 
                to="/signup" 
                className="px-6 py-2 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-lg hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white hover:text-zion-cyan transition-colors duration-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
            className="lg:hidden bg-black/95 backdrop-blur-md border-t border-zion-cyan/20 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 bg-black/50 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-zion-slate-light hover:text-zion-cyan"
                >
                  <Search className="w-5 h-5" />
                </button>
              </form>

              {/* Mobile Navigation */}
              <Link to="/" className="block text-white hover:text-zion-cyan transition-colors duration-300 py-2">Home</Link>
              
              {/* Mobile Services Section */}
              <div className="border-l-2 border-zion-cyan/30 pl-4">
                <h3 className="text-zion-cyan font-semibold mb-2">Services</h3>
                <div className="space-y-2 ml-4">
                  <Link to="/ai-services" className="block text-white/80 hover:text-zion-cyan text-sm transition-colors">AI Services</Link>
                  <Link to="/cybersecurity" className="block text-white/80 hover:text-zion-cyan text-sm transition-colors">Cybersecurity</Link>
                  <Link to="/cloud-services" className="block text-white/80 hover:text-zion-cyan text-sm transition-colors">Cloud Services</Link>
                  <Link to="/blockchain-services" className="block text-white/80 hover:text-zion-cyan text-sm transition-colors">Blockchain</Link>
                  <Link to="/quantum-services" className="block text-white/80 hover:text-zion-cyan text-sm transition-colors">Quantum Computing</Link>
                </div>
              </div>

              {/* Mobile Solutions Section */}
              <div className="border-l-2 border-zion-cyan/30 pl-4">
                <h3 className="text-zion-cyan font-semibold mb-2">Solutions</h3>
                <div className="space-y-2 ml-4">
                  <Link to="/enterprise-solutions" className="block text-white/80 hover:text-zion-cyan text-sm transition-colors">Enterprise</Link>
                  <Link to="/healthcare-solutions" className="block text-white/80 hover:text-zion-cyan text-sm transition-colors">Healthcare</Link>
                  <Link to="/government-solutions" className="block text-white/80 hover:text-zion-cyan text-sm transition-colors">Government</Link>
                  <Link to="/retail-solutions" className="block text-white/80 hover:text-zion-cyan text-sm transition-colors">Retail</Link>
                </div>
              </div>

              <Link to="/about" className="block text-white hover:text-zion-cyan transition-colors duration-300 py-2">About</Link>
              <Link to="/pricing" className="block text-white hover:text-zion-cyan transition-colors duration-300 py-2">Pricing</Link>
              <Link to="/marketplace" className="block text-white hover:text-zion-cyan transition-colors duration-300 py-2">Marketplace</Link>
              <Link to="/blog" className="block text-white hover:text-zion-cyan transition-colors duration-300 py-2">Blog</Link>
              <Link to="/contact" className="block text-white hover:text-zion-cyan transition-colors duration-300 py-2">Contact</Link>
              
              <div className="pt-4 border-t border-zion-cyan/20 space-y-3">
                {user ? (
                  <>
                    <Link to="/dashboard" className="block text-zion-cyan hover:text-white transition-colors duration-300 py-2">Dashboard</Link>
                    <Link to="/profile" className="block text-zion-cyan hover:text-white transition-colors duration-300 py-2">Profile</Link>
                    <button
                      onClick={logout}
                      className="block w-full text-left text-zion-cyan hover:text-white transition-colors duration-300 py-2"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link 
                      to="/login" 
                      className="block text-zion-cyan hover:text-white transition-colors duration-300 py-2"
                    >
                      Sign In
                    </Link>
                    <Link 
                      to="/signup" 
                      className="block px-6 py-2 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-lg text-center hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
                    >
                      Get Started
                    </Link>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
