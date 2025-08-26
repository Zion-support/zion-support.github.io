import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, Search, User, Bell, Globe, Brain, Cpu, Shield, 
  Rocket, Cloud, Database, Network, Zap, ChevronDown, 
  ChevronRight, Phone, Mail, MapPin, PanelLeft
} from 'lucide-react';
import { useSidebar } from '../context/SidebarContext';

export function AppHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const { sidebarOpen, setSidebarOpen } = useSidebar();
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  const navigation = [
    {
      name: 'Services',
      href: '/services',
      icon: Zap,
      children: [
        { name: 'AI Solutions', href: '/services/ai', description: 'Advanced AI & Machine Learning' },
        { name: 'Quantum Tech', href: '/services/quantum', description: 'Quantum Computing & AI' },
        { name: 'Blockchain & Web3', href: '/services/blockchain', description: 'Decentralized Solutions' },
        { name: 'IoT & Edge', href: '/services/iot', description: 'Connected Intelligence' },
        { name: 'Robotics & RPA', href: '/services/robotics', description: 'Process Automation' },
        { name: 'Extended Reality', href: '/services/xr', description: 'VR/AR/MR Solutions' },
        { name: 'Space Technology', href: '/services/space', description: 'Space Innovation' },
        { name: 'Climate Tech', href: '/services/climate', description: 'Environmental Solutions' }
      ]
    },
    {
      name: 'Innovation 2027',
      href: '/innovative-services-showcase-2027',
      icon: Rocket,
      children: [
        { name: 'Quantum Neural Networks', href: '/quantum-neural-network-platform', description: 'Revolutionary AI' },
        { name: 'Autonomous Operations', href: '/autonomous-business-operations-platform', description: 'AI-Powered Business' },
        { name: 'IT Asset Management', href: '/ai-powered-it-asset-management', description: 'Smart IT Solutions' },
        { name: 'SOC2 Compliance', href: '/soc2-compliance-automation', description: 'Automated Security' },
        { name: 'AI Research Assistant', href: '/ai-autonomous-research-assistant', description: 'Research Automation' },
        { name: '5G Enterprise', href: '/5g-enterprise-solutions', description: 'Next-Gen Connectivity' }
      ]
    },
    {
      name: 'Solutions',
      href: '/solutions',
      icon: Cpu,
      children: [
        { name: 'Cloud & DevOps', href: '/services/cloud', description: 'Scalable Infrastructure' },
        { name: 'Cybersecurity', href: '/services/cybersecurity', description: 'Advanced Protection' },
        { name: 'Digital Transformation', href: '/services/transformation', description: 'Business Evolution' },
        { name: 'Consulting', href: '/services/consulting', description: 'Expert Guidance' },
        { name: 'Infrastructure', href: '/services/infrastructure', description: 'Robust Systems' }
      ]
    },
    {
      name: 'Company',
      href: '/about',
      icon: Globe,
      children: [
        { name: 'About Us', href: '/about', description: 'Our Story & Mission' },
        { name: 'Team', href: '/team', description: 'Expert Professionals' },
        { name: 'Careers', href: '/careers', description: 'Join Our Team' },
        { name: 'Partners', href: '/partners', description: 'Strategic Alliances' },
        { name: 'News', href: '/news', description: 'Latest Updates' }
      ]
    },
    {
      name: 'Resources',
      href: '/resources',
      icon: Database,
      children: [
        { name: 'Blog', href: '/blog', description: 'Insights & Analysis' },
        { name: 'Documentation', href: '/docs', description: 'Technical Guides' },
        { name: 'White Papers', href: '/white-papers', description: 'Research & Reports' },
        { name: 'Webinars', href: '/webinars', description: 'Expert Sessions' },
        { name: 'Training', href: '/training', description: 'Skill Development' }
      ]
    }
  ];

  const contactInfo = [
    { icon: Phone, label: 'Phone', value: '+1 302 464 0950', href: 'tel:+13024640950' },
    { icon: Mail, label: 'Email', value: 'kleber@ziontechgroup.com', href: 'mailto:kleber@ziontechgroup.com' },
    { icon: MapPin, label: 'Address', value: '364 E Main St STE 1008, Middletown DE 19709' }
  ];

  return (
    <>
      <header 
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-zion-slate-dark/95 backdrop-blur-md border-b border-zion-cyan/20 shadow-lg shadow-zion-cyan/10' 
            : 'bg-zion-slate-dark/80 backdrop-blur-sm border-b border-zion-cyan/10'
        }`}
      >
        <div className="container flex h-16 items-center px-4 sm:px-6">
          {/* Sidebar Toggle */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="mr-4 p-2 text-zion-cyan/70 hover:text-zion-cyan hover:bg-zion-cyan/10 rounded-lg transition-all duration-300 hover:scale-110"
            aria-label="Toggle sidebar"
          >
            <PanelLeft className="h-5 w-5" />
          </button>
          
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 mr-8">
            <div className="w-8 h-8 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">Z</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">
              Zion Tech Group
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <button className="flex items-center space-x-1 px-4 py-2 text-zion-slate-light hover:text-zion-cyan transition-colors duration-200 rounded-lg hover:bg-zion-cyan/10">
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                  <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                </button>
                
                {/* Dropdown Menu */}
                <div className="absolute top-full left-0 w-80 bg-zion-slate-dark/95 backdrop-blur-md border border-zion-cyan/20 rounded-xl shadow-2xl shadow-zion-cyan/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="p-4">
                    <div className="grid grid-cols-1 gap-2">
                      {item.children?.map((child) => (
                        <Link
                          key={child.name}
                          to={child.href}
                          className="flex items-start space-x-3 p-3 rounded-lg hover:bg-zion-cyan/10 transition-colors duration-200 group/item"
                        >
                          <div className="w-2 h-2 bg-zion-cyan rounded-full mt-2 group-hover/item:scale-150 transition-transform duration-200"></div>
                          <div className="flex-1">
                            <div className="font-medium text-white group-hover/item:text-zion-cyan transition-colors duration-200">
                              {child.name}
                            </div>
                            <div className="text-sm text-zion-slate-light">
                              {child.description}
                            </div>
                          </div>
                          <ChevronRight className="w-4 h-4 text-zion-slate-light group-hover/item:text-zion-cyan transition-colors duration-200" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex ml-6 flex-1 max-w-md">
            <form onSubmit={handleSearch} className="relative w-full">
              <input
                type="text"
                placeholder="Search services, technologies, solutions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-zion-slate-light/10 border border-zion-cyan/20 rounded-lg px-4 py-2 text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-zion-slate-light hover:text-zion-cyan transition-colors duration-200"
              >
                <Search className="h-4 w-4" />
              </button>
            </form>
          </div>

          {/* Right Side Actions */}
          <div className="ml-6 flex items-center space-x-4">
            {/* Contact Info - Hidden on mobile */}
            <div className="hidden xl:flex items-center space-x-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-2 text-zion-slate-light hover:text-zion-cyan transition-colors duration-200">
                  <info.icon className="w-4 h-4" />
                  {info.href ? (
                    <a href={info.href} className="text-sm hover:underline">
                      {info.value}
                    </a>
                  ) : (
                    <span className="text-sm">{info.value}</span>
                  )}
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-2">
              <Link
                to="/contact"
                className="hidden sm:inline-flex items-center px-4 py-2 bg-zion-cyan/20 border border-zion-cyan/30 text-zion-cyan rounded-lg font-medium hover:bg-zion-cyan/30 transition-all duration-300 hover:scale-105"
              >
                Get Started
              </Link>
              <Link
                to="/login"
                className="inline-flex items-center px-4 py-2 bg-zion-purple/20 border border-zion-purple/30 text-zion-purple rounded-lg font-medium hover:bg-zion-purple/30 transition-all duration-300 hover:scale-105"
              >
                Login
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-zion-cyan/70 hover:text-zion-cyan hover:bg-zion-cyan/10 rounded-lg transition-all duration-300"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-zion-slate-dark/95 backdrop-blur-md border-b border-zion-cyan/20"
          >
            <div className="px-4 py-6 space-y-6">
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search services, technologies, solutions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-zion-slate-light/10 border border-zion-cyan/20 rounded-lg px-4 py-2 text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-zion-slate-light hover:text-zion-cyan transition-colors duration-200"
                >
                  <Search className="h-4 w-4" />
                </button>
              </form>

              {/* Mobile Navigation */}
              <nav className="space-y-4">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      to={item.href}
                      className="flex items-center justify-between w-full px-4 py-3 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 rounded-lg transition-colors duration-200"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <div className="flex items-center space-x-3">
                        <item.icon className="w-5 h-5" />
                        <span>{item.name}</span>
                      </div>
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                    
                    {/* Mobile Submenu */}
                    <div className="ml-8 mt-2 space-y-2">
                      {item.children?.map((child) => (
                        <Link
                          key={child.name}
                          to={child.href}
                          className="block px-4 py-2 text-sm text-zion-slate-light hover:text-zion-cyan transition-colors duration-200"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </nav>

              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-zion-cyan/20">
                <div className="space-y-3">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center space-x-3 text-zion-slate-light">
                      <info.icon className="w-4 h-4" />
                      {info.href ? (
                        <a href={info.href} className="text-sm hover:text-zion-cyan transition-colors duration-200">
                          {info.value}
                        </a>
                      ) : (
                        <span className="text-sm">{info.value}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
