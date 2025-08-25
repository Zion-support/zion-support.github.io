import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bars3Icon, 
  XMarkIcon,
  ChevronDownIcon,
  UserIcon,
  CogIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { 
      name: 'Services', 
      href: '/services',
      dropdown: [
        { name: 'AI Solutions', href: '/ai-solutions', description: 'Advanced AI and machine learning services' },
        { name: 'Cybersecurity', href: '/cybersecurity', description: 'Comprehensive security solutions' },
        { name: 'Cloud & DevOps', href: '/cloud-devops', description: 'Scalable cloud infrastructure' },
        { name: 'Data Analytics', href: '/data-analytics', description: 'Transform data into insights' },
        { name: 'Quantum Technology', href: '/quantum-technology', description: 'Next-generation computing' },
        { name: 'Enterprise Solutions', href: '/enterprise-solutions', description: 'Large-scale business solutions' },
        { name: 'IT Infrastructure', href: '/it-infrastructure', description: 'Robust IT foundation' },
        { name: 'Micro SaaS Solutions', href: '/micro-saas-solutions', description: 'Scalable SaaS platforms' },
        { name: 'Innovative Services', href: '/innovative-services-showcase', description: 'Cutting-edge technology' },
        { name: 'Comprehensive Services', href: '/comprehensive-services-overview', description: 'Full service portfolio' }
      ]
    },
    { 
      name: 'Solutions', 
      href: '/solutions',
      dropdown: [
        { name: 'Healthcare', href: '/solutions/healthcare', description: 'AI-powered healthcare solutions' },
        { name: 'Finance', href: '/solutions/finance', description: 'Financial technology innovations' },
        { name: 'Manufacturing', href: '/solutions/manufacturing', description: 'Smart manufacturing systems' },
        { name: 'Retail', href: '/solutions/retail', description: 'Digital retail transformation' },
        { name: 'Education', href: '/solutions/education', description: 'Educational technology solutions' },
        { name: 'Government', href: '/solutions/government', description: 'Public sector digitalization' }
      ]
    },
    { 
      name: 'AI Autonomous', 
      href: '/ai-autonomous-systems',
      dropdown: [
        { name: 'AI Business Manager', href: '/ai-autonomous-business-manager', description: 'Autonomous business management' },
        { name: 'AI Research Assistant', href: '/ai-autonomous-research-assistant', description: 'Intelligent research automation' },
        { name: 'AI Code Review', href: '/ai-autonomous-code-review', description: 'Automated code analysis' },
        { name: 'AI Creative Director', href: '/ai-autonomous-creative-director', description: 'Creative content generation' },
        { name: 'AI Decision Engine', href: '/ai-autonomous-decision-engine', description: 'Smart decision making' },
        { name: 'AI Autonomous Systems Platform', href: '/ai-autonomous-systems-platform', description: 'Complete AI platform' }
      ]
    },
    { 
      name: 'Company', 
      href: '/about',
      dropdown: [
        { name: 'About Us', href: '/about', description: 'Learn about Zion Tech Group' },
        { name: 'Our Team', href: '/team', description: 'Meet our experts' },
        { name: 'Mission & Vision', href: '/mission', description: 'Our company goals' },
        { name: 'Careers', href: '/careers', description: 'Join our team' },
        { name: 'Partners', href: '/partners', description: 'Strategic partnerships' },
        { name: 'Case Studies', href: '/case-studies', description: 'Success stories' }
      ]
    },
    { 
      name: 'Resources', 
      href: '/resources',
      dropdown: [
        { name: 'Documentation', href: '/docs', description: 'Technical documentation' },
        { name: 'Help Center', href: '/help', description: 'Support and assistance' },
        { name: 'Webinars', href: '/webinars', description: 'Educational content' },
        { name: 'White Papers', href: '/white-papers', description: 'Industry insights' },
        { name: 'Blog & News', href: '/news', description: 'Latest updates' },
        { name: 'FAQ', href: '/faq', description: 'Frequently asked questions' }
      ]
    },
    { name: 'Contact', href: '/contact' }
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-md border-b border-white/10' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg lg:text-xl">Z</span>
            </div>
            <span className="text-white font-bold text-xl lg:text-2xl">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                    className="relative"
                  >
                    <button className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors duration-200 py-2">
                      <span>{item.name}</span>
                      <ChevronDownIcon className="h-4 w-4" />
                    </button>
                    
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-md rounded-xl border border-white/10 shadow-2xl"
                        >
                          <div className="p-4">
                            {item.dropdown.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                to={dropdownItem.href}
                                className="flex items-start space-x-3 p-3 rounded-lg hover:bg-white/5 transition-colors duration-200 group"
                              >
                                <div className="w-8 h-8 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center group-hover:from-purple-500/40 group-hover:to-pink-500/40 transition-all duration-200">
                                  <ArrowRightIcon className="h-4 w-4 text-purple-400" />
                                </div>
                                <div>
                                  <div className="text-white font-medium group-hover:text-purple-400 transition-colors duration-200">
                                    {dropdownItem.name}
                                  </div>
                                  <div className="text-gray-400 text-sm mt-1">
                                    {dropdownItem.description}
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`text-gray-300 hover:text-white transition-colors duration-200 py-2 ${
                      isActive(item.href) ? 'text-white border-b-2 border-purple-500' : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/pricing"
              className="px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200"
            >
              Pricing
            </Link>
            <Link
              to="/contact"
              className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors duration-200"
          >
            {isOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-white/10"
          >
            <div className="px-4 py-6 space-y-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <div className="text-gray-300 font-medium mb-2">{item.name}</div>
                      <div className="pl-4 space-y-2">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.href}
                            onClick={() => setIsOpen(false)}
                            className="block text-gray-400 hover:text-white transition-colors duration-200 py-1"
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`block py-2 transition-colors duration-200 ${
                        isActive(item.href) 
                          ? 'text-white border-l-2 border-purple-500 pl-4' 
                          : 'text-gray-300 hover:text-white'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              
              <div className="pt-4 border-t border-white/10">
                <Link
                  to="/pricing"
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Pricing
                </Link>
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg text-center hover:from-purple-700 hover:to-pink-700 transition-all duration-300 mt-2"
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
};

export default Header;