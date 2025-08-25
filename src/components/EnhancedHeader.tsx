import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

export function EnhancedHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    {
      name: 'Home',
      path: '/',
      type: 'link'
    },
    {
      name: 'Services',
      type: 'dropdown',
      items: [
        { name: 'All Services', path: '/services', description: 'Complete service catalog' },
        { name: 'AI Solutions', path: '/ai-solutions', description: 'Artificial Intelligence services' },
        { name: 'Quantum Technology', path: '/services/quantum-technology', description: 'Quantum computing solutions' },
        { name: 'Cybersecurity', path: '/services/cybersecurity', description: 'Security & compliance' },
        { name: 'IT Infrastructure', path: '/services/it-infrastructure', description: 'Infrastructure management' },
        { name: 'Micro SaaS Solutions', path: '/services/micro-saas-solutions', description: 'Custom SaaS platforms' },
        { name: 'Blockchain Solutions', path: '/blockchain-enterprise-solutions', description: 'Web3 & blockchain' },
        { name: 'IoT Analytics', path: '/iot-data-analytics', description: 'Internet of Things' },
        { name: 'AI Workflow Automation', path: '/ai-workflow-automation', description: 'Process automation' }
      ]
    },
    {
      name: 'Solutions',
      type: 'dropdown',
      items: [
        { name: 'Enterprise Solutions', path: '/services/enterprise', description: 'Large-scale deployments' },
        { name: 'Healthcare Solutions', path: '/solutions/healthcare', description: 'Medical technology' },
        { name: 'Industry Solutions', path: '/services/industry-solutions', description: 'Sector-specific solutions' },
        { name: 'Digital Transformation', path: '/digital-transformation', description: 'Business modernization' },
        { name: 'Smart Cities', path: '/iot-smart-city-platform', description: 'Urban infrastructure' },
        { name: 'Financial Technology', path: '/autonomous-financial-trading', description: 'Fintech solutions' }
      ]
    },
    {
      name: 'Innovation',
      type: 'dropdown',
      items: [
        { name: 'Emerging Tech', path: '/emerging-tech', description: 'Cutting-edge technology' },
        { name: 'Quantum Neural Networks', path: '/quantum-neural-network-platform', description: 'Advanced AI' },
        { name: 'Autonomous Operations', path: '/autonomous-business-operations-platform', description: 'Self-managing systems' },
        { name: 'AI Research Assistant', path: '/ai-autonomous-research-assistant', description: 'Research automation' },
        { name: '5G Solutions', path: '/5g-enterprise-solutions', description: 'Next-gen connectivity' }
      ]
    },
    {
      name: 'Company',
      type: 'dropdown',
      items: [
        { name: 'About Us', path: '/about', description: 'Our story and mission' },
        { name: 'Our Mission', path: '/mission', description: 'What drives us' },
        { name: 'Team', path: '/team', description: 'Meet our experts' },
        { name: 'Careers', path: '/careers', description: 'Join our team' },
        { name: 'Partners', path: '/partners', description: 'Strategic partnerships' },
        { name: 'Contact', path: '/contact', description: 'Get in touch' }
      ]
    },
    {
      name: 'Resources',
      type: 'dropdown',
      items: [
        { name: 'Blog', path: '/blog', description: 'Latest insights' },
        { name: 'News', path: '/news', description: 'Company updates' },
        { name: 'Case Studies', path: '/case-studies', description: 'Success stories' },
        { name: 'Help Center', path: '/help', description: 'Support & documentation' },
        { name: 'AI Matcher', path: '/ai-matcher', description: 'Find your AI solution' },
        { name: 'Talent Directory', path: '/talent-directory', description: 'Expert network' },
        { name: 'White Papers', path: '/white-papers', description: 'In-depth research' },
        { name: 'Webinars', path: '/webinars', description: 'Educational content' }
      ]
    }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 cyber-nav ${
        isScrolled 
          ? 'bg-black/95 backdrop-blur-xl border-b border-cyan-500/50 shadow-neon' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-neon group-hover:shadow-cyber transition-all duration-300">
                <span className="text-white font-bold text-2xl">Z</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                  Zion Tech Group
                </h1>
                <p className="text-xs text-cyan-400/70 group-hover:text-cyan-400 transition-colors duration-300">
                  Future Technology Solutions
                </p>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative">
                {item.type === 'link' ? (
                  <Link
                    to={item.path}
                    className={`cyber-nav-item px-3 py-2 text-white hover:text-cyan-400 transition-colors duration-300 ${
                      isActive(item.path) ? 'text-cyan-400' : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <div
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button className="cyber-nav-item px-3 py-2 text-white hover:text-cyan-400 transition-colors duration-300 flex items-center space-x-1">
                      <span>{item.name}</span>
                      <motion.svg
                        className="w-4 h-4"
                        animate={{ rotate: activeDropdown === item.name ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </motion.svg>
                    </button>

                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur-xl border border-cyan-500/30 rounded-lg shadow-neon overflow-hidden"
                        >
                          <div className="p-4">
                            <div className="grid gap-3">
                              {item.items.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  to={subItem.path}
                                  className="group p-3 rounded-lg hover:bg-cyan-500/10 transition-all duration-300 border border-transparent hover:border-cyan-500/30"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  <div className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 group-hover:bg-cyan-300 transition-colors duration-300"></div>
                                    <div className="flex-1">
                                      <h4 className="text-white font-medium group-hover:text-cyan-400 transition-colors duration-300">
                                        {subItem.name}
                                      </h4>
                                      <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300 mt-1">
                                        {subItem.description}
                                      </p>
                                    </div>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/contact"
              className="px-4 py-2 text-cyan-400 hover:text-white border border-cyan-400/50 hover:border-cyan-400 rounded-lg transition-all duration-300 hover:bg-cyan-400/10"
            >
              Get Quote
            </Link>
            <Link
              to="/contact"
              className="neon-button px-6 py-2 rounded-lg"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white hover:text-cyan-400 transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-cyan-500/30"
          >
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.type === 'link' ? (
                    <Link
                      to={item.path}
                      className="block py-2 text-white hover:text-cyan-400 transition-colors duration-300"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <div>
                      <div className="py-2 text-white font-medium">{item.name}</div>
                      <div className="ml-4 space-y-2">
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className="block py-1 text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
              
              <div className="pt-4 border-t border-cyan-500/30 space-y-3">
                <Link
                  to="/contact"
                  className="block w-full text-center py-2 text-cyan-400 border border-cyan-400/50 rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Quote
                </Link>
                <Link
                  to="/contact"
                  className="block w-full text-center py-2 bg-gradient-to-r from-cyan-400 to-purple-500 text-white rounded-lg hover:from-cyan-500 hover:to-purple-600 transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default EnhancedHeader;