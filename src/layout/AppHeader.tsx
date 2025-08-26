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
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

export function AppHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { user, logout } = useAuth();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
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
      dropdown: [
        { name: 'AI & Analytics', href: '/services/ai-analytics', icon: Brain, description: 'AI-powered business intelligence and analytics' },
        { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield, description: 'Advanced security and threat protection' },
        { name: 'Cloud & DevOps', href: '/services/cloud-devops', icon: Cloud, description: 'Scalable cloud infrastructure and automation' },
        { name: 'IoT & Edge', href: '/services/iot-edge', icon: Cpu, description: 'Next-generation IoT and edge computing' },
        { name: 'Quantum Computing', href: '/services/quantum-computing', icon: Rocket, description: 'Future-ready quantum solutions' },
        { name: 'Blockchain', href: '/services/blockchain', icon: Lock, description: 'Enterprise blockchain and Web3' },
        { name: 'Digital Twin', href: '/services/digital-twin', icon: Globe, description: 'Virtual representation of physical systems' },
        { name: 'Sustainability', href: '/services/sustainability', icon: Heart, description: 'Green IT and eco-friendly solutions' }
      ]
    },
    {
      name: 'Micro SAAS',
      href: '/micro-saas',
      icon: Code,
      dropdown: [
        { name: 'AI Business Intelligence', href: '/micro-saas/ai-business-intelligence', description: 'AI-powered analytics platform' },
        { name: 'Customer Experience', href: '/micro-saas/customer-experience', description: 'AI customer experience platform' },
        { name: 'Content Creation', href: '/micro-saas/content-creation', description: 'AI content generation tools' },
        { name: 'Cybersecurity', href: '/micro-saas/cybersecurity', description: 'SMB security solutions' },
        { name: 'Cloud Management', href: '/micro-saas/cloud-management', description: 'Cloud infrastructure optimization' },
        { name: 'DevOps Automation', href: '/micro-saas/devops-automation', description: 'CI/CD and deployment automation' }
      ]
    },
    {
      name: 'IT Services',
      href: '/it-services',
      icon: Database,
      dropdown: [
        { name: 'Infrastructure', href: '/it-services/infrastructure', description: 'Network and system management' },
        { name: 'Digital Transformation', href: '/it-services/digital-transformation', description: 'Business process modernization' },
        { name: 'Consulting', href: '/it-services/consulting', description: 'Strategic technology consulting' },
        { name: 'Support', href: '/it-services/support', description: '24/7 technical support' }
      ]
    },
    {
      name: 'Solutions',
      href: '/solutions',
      icon: BarChart3,
      dropdown: [
        { name: 'Enterprise', href: '/solutions/enterprise', description: 'Large-scale business solutions' },
        { name: 'SMB', href: '/solutions/smb', description: 'Small and medium business solutions' },
        { name: 'Startup', href: '/solutions/startup', description: 'Startup-focused solutions' },
        { name: 'Government', href: '/solutions/government', description: 'Public sector solutions' }
      ]
    },
    {
      name: 'About',
      href: '/about',
      icon: Users,
      dropdown: [
        { name: 'Company', href: '/about/company', description: 'Our story and mission' },
        { name: 'Team', href: '/about/team', description: 'Meet our experts' },
        { name: 'Careers', href: '/careers', description: 'Join our team' },
        { name: 'Partners', href: '/partners', description: 'Strategic partnerships' }
      ]
    }
  ];

  const contactInfo = {
    phone: "+1 302 464 0950",
    email: "kleber@ziontechgroup.com",
    address: "364 E Main St STE 1008 Middletown DE 19709"
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-zion-slate/95 backdrop-blur-xl border-b border-zion-cyan/20 shadow-2xl shadow-zion-cyan/10' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-xl">Z</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-2xl font-bold gradient-text">Zion Tech Group</h1>
              <p className="text-xs text-white/60">Innovating Tomorrow</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  onClick={() => toggleDropdown(item.name)}
                  className="flex items-center space-x-2 px-4 py-2 text-white/80 hover:text-white transition-colors duration-200 font-medium"
                >
                  <item.icon size={20} />
                  <span>{item.name}</span>
                  <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-200" />
                </button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-80 bg-zion-slate/95 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl shadow-2xl shadow-zion-cyan/20 overflow-hidden"
                    >
                      <div className="p-4">
                        <div className="grid grid-cols-1 gap-2">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="flex items-start space-x-3 p-3 rounded-xl hover:bg-zion-cyan/10 transition-colors duration-200 group"
                            >
                              <div className="w-10 h-10 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                <subItem.icon size={20} className="text-zion-cyan" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <h3 className="font-semibold text-white group-hover:text-zion-cyan transition-colors">
                                  {subItem.name}
                                </h3>
                                <p className="text-sm text-white/60 line-clamp-2">
                                  {subItem.description}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="hidden md:block relative">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 px-4 py-2 pl-10 bg-zion-slate/50 border border-zion-cyan/20 rounded-full text-white placeholder-white/50 focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-200"
                />
                <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" />
              </form>
            </div>

            {/* Contact Info */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href={`tel:${contactInfo.phone}`}
                className="flex items-center space-x-2 px-4 py-2 text-white/80 hover:text-zion-cyan transition-colors duration-200"
              >
                <Phone size={16} />
                <span className="text-sm font-medium">{contactInfo.phone}</span>
              </a>
            </div>

            {/* CTA Button */}
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center px-6 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-full hover:scale-105 transition-transform duration-200 shadow-lg shadow-zion-cyan/25"
            >
              Get Started
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-white/80 hover:text-white transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
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
            className="lg:hidden bg-zion-slate/95 backdrop-blur-xl border-t border-zion-cyan/20"
          >
            <div className="container mx-auto px-4 py-6">
              {/* Mobile Search */}
              <div className="mb-6">
                <form onSubmit={handleSearch} className="relative">
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-3 pl-10 bg-zion-slate/50 border border-zion-cyan/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20"
                  />
                  <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" />
                </form>
              </div>

              {/* Mobile Navigation */}
              <nav className="space-y-4">
                {navigationItems.map((item) => (
                  <div key={item.name}>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="flex items-center justify-between w-full px-4 py-3 text-left text-white hover:bg-zion-cyan/10 rounded-xl transition-colors duration-200"
                    >
                      <div className="flex items-center space-x-3">
                        <item.icon size={20} className="text-zion-cyan" />
                        <span className="font-medium">{item.name}</span>
                      </div>
                      <ChevronDown 
                        size={16} 
                        className={`transition-transform duration-200 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} 
                      />
                    </button>

                    {/* Mobile Dropdown */}
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="ml-8 mt-2 space-y-2"
                        >
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="flex items-center space-x-3 px-4 py-2 text-white/80 hover:text-white hover:bg-zion-cyan/10 rounded-lg transition-colors duration-200"
                            >
                              <subItem.icon size={16} className="text-zion-cyan" />
                              <span className="text-sm">{subItem.name}</span>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </nav>

              {/* Mobile Contact Info */}
              <div className="mt-8 pt-6 border-t border-zion-cyan/20 space-y-4">
                <div className="flex items-center space-x-3 text-white/80">
                  <Phone size={16} className="text-zion-cyan" />
                  <a href={`tel:${contactInfo.phone}`} className="text-sm">{contactInfo.phone}</a>
                </div>
                <div className="flex items-center space-x-3 text-white/80">
                  <Mail size={16} className="text-zion-cyan" />
                  <a href={`mailto:${contactInfo.email}`} className="text-sm">{contactInfo.email}</a>
                </div>
                <div className="flex items-center space-x-3 text-white/80">
                  <MapPin size={16} className="text-zion-cyan" />
                  <span className="text-sm">{contactInfo.address}</span>
                </div>
              </div>

              {/* Mobile CTA */}
              <div className="mt-6">
                <Link
                  to="/contact"
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-xl hover:scale-105 transition-transform duration-200"
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
