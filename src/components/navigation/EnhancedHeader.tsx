import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Globe, 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Users, 
  Phone, 
  Mail, 
  MapPin,
  Search,
  User,
  ShoppingCart,
  Bell
} from 'lucide-react';

const EnhancedHeader: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { 
      name: 'Home', 
      href: '/' 
    },
    {
      name: 'Services',
      href: '/services',
      dropdown: [
        { 
          name: 'AI Solutions', 
          href: '/services/ai-services', 
          icon: Brain, 
          description: 'Cutting-edge AI services',
          subItems: [
            { name: 'Content Intelligence', href: '/services/ai-content-intelligence-platform' },
            { name: 'Customer Success', href: '/services/ai-customer-success-automation' },
            { name: 'Financial Forecasting', href: '/services/ai-financial-forecasting-engine' },
            { name: 'Healthcare Diagnostics', href: '/services/ai-healthcare-diagnostic-platform' }
          ]
        },
        { 
          name: 'IT & Security', 
          href: '/services/it-services', 
          icon: Shield, 
          description: 'Enterprise security & infrastructure',
          subItems: [
            { name: 'Zero Trust Security', href: '/services/zero-trust-security-platform' },
            { name: 'Edge Computing', href: '/services/edge-computing-orchestrator' },
            { name: 'Cloud DevOps', href: '/services/cloud-devops' },
            { name: 'Cybersecurity', href: '/services/cybersecurity' }
          ]
        },
        { 
          name: 'Blockchain & Web3', 
          href: '/services/blockchain-services', 
          icon: Globe, 
          description: 'Next-gen blockchain solutions',
          subItems: [
            { name: 'DeFi Platform', href: '/services/defi-yield-optimization-platform' },
            { name: 'NFT Marketplace', href: '/services/nft-marketplace-platform' },
            { name: 'Supply Chain', href: '/services/blockchain-supply-chain-platform' },
            { name: 'Smart Contracts', href: '/services/smart-contract-development' }
          ]
        },
        { 
          name: 'Sustainability', 
          href: '/services/sustainability', 
          icon: Zap, 
          description: 'Green tech solutions',
          subItems: [
            { name: 'Carbon Tracking', href: '/services/carbon-footprint-tracking-platform' },
            { name: 'Energy Management', href: '/services/sustainable-technology' },
            { name: 'ESG Reporting', href: '/services/esg-analytics-platform' }
          ]
        }
      ]
    },
    {
      name: 'Solutions',
      href: '/solutions',
      dropdown: [
        { name: 'Enterprise', href: '/solutions/enterprise', description: 'Large-scale business solutions' },
        { name: 'Startups', href: '/solutions/startups', description: 'Growth-focused solutions' },
        { name: 'Healthcare', href: '/solutions/healthcare', description: 'Medical technology solutions' },
        { name: 'Financial Services', href: '/solutions/financial', description: 'Fintech and banking solutions' }
      ]
    },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ];

  const contactInfo = [
    { icon: Phone, text: '+1 302 464 0950', href: 'tel:+13024640950' },
    { icon: Mail, text: 'kleber@ziontechgroup.com', href: 'mailto:kleber@ziontechgroup.com' },
    { icon: MapPin, text: '364 E Main St STE 1008, Middletown DE 19709', href: '#' }
  ];

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Implement search functionality
      console.log('Searching for:', searchQuery);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-gray-900/95 backdrop-blur-md border-b border-cyan-400/20 shadow-lg'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                Zion Tech Group
              </span>
              <div className="text-xs text-cyan-400 font-medium">Innovation • Security • Growth</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div className="relative">
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="flex items-center space-x-1 text-gray-300 hover:text-cyan-300 transition-colors duration-200 py-2 font-medium"
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    </button>
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-96 bg-gray-900/95 backdrop-blur-md border border-cyan-400/20 rounded-xl shadow-2xl shadow-cyan-400/10 overflow-hidden"
                        >
                          <div className="p-4">
                            {item.dropdown.map((dropdownItem, idx) => (
                              <div key={idx} className="mb-4 last:mb-0">
                                <Link
                                  to={dropdownItem.href}
                                  onClick={() => setActiveDropdown(null)}
                                  className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-800/50 transition-colors duration-200 group"
                                >
                                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <dropdownItem.icon className="w-5 h-5 text-white" />
                                  </div>
                                  <div className="flex-1">
                                    <h4 className="text-white font-semibold group-hover:text-cyan-300 transition-colors">
                                      {dropdownItem.name}
                                    </h4>
                                    <p className="text-gray-400 text-sm mt-1">
                                      {dropdownItem.description}
                                    </p>
                                    {dropdownItem.subItems && (
                                      <div className="mt-2 space-y-1">
                                        {dropdownItem.subItems.slice(0, 3).map((subItem, subIdx) => (
                                          <div key={subIdx} className="text-xs text-gray-500 hover:text-cyan-400 transition-colors">
                                            • {subItem.name}
                                          </div>
                                        ))}
                                      </div>
                                    )}
                                  </div>
                                </Link>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className="text-gray-300 hover:text-cyan-300 transition-colors duration-200 py-2 font-medium"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Search */}
            <form onSubmit={handleSearch} className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-sm w-48"
              />
            </form>

            {/* Contact Button */}
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 font-medium"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-gray-900/95 backdrop-blur-md border-t border-cyan-400/20"
          >
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </form>

              {/* Mobile Navigation */}
              <nav className="space-y-2">
                {navigationItems.map((item) => (
                  <div key={item.name}>
                    {item.dropdown ? (
                      <div>
                            <button
                              onClick={() => toggleDropdown(item.name)}
                              className="w-full text-left flex items-center justify-between py-3 text-gray-300 hover:text-white transition-colors"
                            >
                              <span className="font-medium">{item.name}</span>
                              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                                activeDropdown === item.name ? 'rotate-180' : ''
                              }`} />
                            </button>
                            <AnimatePresence>
                              {activeDropdown === item.name && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: 'auto' }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.2 }}
                                  className="ml-4 space-y-2"
                                >
                                  {item.dropdown.map((dropdownItem, idx) => (
                                    <Link
                                      key={idx}
                                      to={dropdownItem.href}
                                      onClick={closeMobileMenu}
                                      className="block py-2 text-gray-400 hover:text-cyan-400 transition-colors"
                                    >
                                      {dropdownItem.name}
                                    </Link>
                                  ))}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                    ) : (
                      <Link
                        to={item.href}
                        onClick={closeMobileMenu}
                        className="block py-3 text-gray-300 hover:text-white transition-colors font-medium"
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>

              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-gray-700">
                <div className="space-y-3">
                  {contactInfo.map((info, idx) => (
                    <a
                      key={idx}
                      href={info.href}
                      className="flex items-center space-x-3 text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                      <info.icon className="w-4 h-4" />
                      <span className="text-sm">{info.text}</span>
                    </a>
                  ))}
                </div>
                <Link
                  to="/contact"
                  onClick={closeMobileMenu}
                  className="mt-4 w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 rounded-lg text-center font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-200"
                >
                  Get Started Today
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default EnhancedHeader;