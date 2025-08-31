import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Zap, Shield, Cpu, Database, Globe, Smartphone, Lock, Brain, Cloud, BarChart3, Users, Rocket, ShieldCheck, Globe2, Zap2, Brain2, Cloud2, Lock2 } from 'lucide-react';
<<<<<<< HEAD

const ModernHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<any>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

=======
    const handleScroll = () => {;
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll)}, []);
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
  const serviceCategories = [
    { 
      name: 'AI & Machine Learning', 
      icon: Brain, 
      href: '/services#ai',
      description: 'Intelligent automation and AI solutions',
      services: ['AI Automation', 'Machine Learning', 'Natural Language Processing', 'Computer Vision']
    },
    { 
      name: 'Cloud & DevOps', 
      icon: Cloud, 
      href: '/services#cloud',
      description: 'Cloud infrastructure and DevOps automation',
      services: ['Cloud Migration', 'Kubernetes', 'DevOps Automation', 'Infrastructure as Code']
    },
    { 
      name: 'Cybersecurity', 
      icon: Shield, 
      href: '/services#cybersecurity',
      description: 'Advanced security and compliance solutions',
      services: ['Zero Trust', 'SOC 2 Compliance', 'Threat Detection', 'Security Hardening']
    },
    { 
      name: 'Data & Analytics', 
      icon: BarChart3, 
      href: '/services#data',
      description: 'Data platforms and business intelligence',
      services: ['Data Warehousing', 'Business Intelligence', 'Data Quality', 'Real-time Analytics']
    },
    { 
      name: 'Enterprise Solutions', 
      icon: Database, 
      href: '/services#enterprise',
      description: 'Enterprise-grade business solutions',
      services: ['ERP Systems', 'CRM Platforms', 'Workflow Automation', 'Integration Services']
    },
    { 
      name: 'Emerging Technologies', 
      icon: Rocket, 
      href: '/services#emerging',
      description: 'Quantum computing and blockchain',
      services: ['Quantum AI', 'Blockchain', 'IoT Platforms', 'Edge Computing']
    }
  ];
  const mainNavigation = [
    { name: 'Home', href: '/', hasDropdown: false },
    { name: 'Services', href: '/services', hasDropdown: true },
    { name: 'Solutions', href: '/solutions', hasDropdown: false },
    { name: 'About', href: '/about', hasDropdown: false },
    { name: 'Case Studies', href: '/case-studies', hasDropdown: false },
    { name: 'Blog', href: '/blog', hasDropdown: false },
    { name: 'Contact', href: '/contact', hasDropdown: false }
  ];
  return (
    <motion.header
<<<<<<< HEAD
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/90 backdrop-blur-md border-b border-cyan-500/20'
=======
      className = {`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg' 
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
<<<<<<< HEAD
      transition={{ duration: 0.6, ease: "easeOut" }}
=======
      transition = {
  { duration: 0.6,
  ease: "easeOut" 
}}
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
<<<<<<< HEAD
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
=======
          <Link href="/" className="flex items-center space-x-3 group">
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
            </motion.div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Zion Tech
              </span>
              <span className="text-xs text-gray-600 font-medium">Innovation Group</span>
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Zion Tech Group
            </span>
          </Link>
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {mainNavigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.hasDropdown ? (
<<<<<<< HEAD
                  <div
                    className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors cursor-pointer py-2"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <span>{item.name}</span>
                    <ChevronDown className="w-4 h-4" />
=======
                  <div className="group">
                    <button
                      className="nav-link flex items-center space-x-1"
                      onMouseEnter={() => setActiveDropdown('services')}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                    </button>
                    <AnimatePresence>
                      {activeDropdown === 'services' && (
                        <motion.div
                          className="absolute top-full left-0 mt-2 w-96 bg-black/95 backdrop-blur-md border border-neon-blue/20 rounded-xl p-6 shadow-2xl"
                          initial={{ opacity: 0, y: -10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          onMouseEnter={() => setActiveDropdown('services')}
                          onMouseLeave={() => setActiveDropdown(null)}
                        >
                          <div className="grid grid-cols-2 gap-4">
                            {serviceCategories.map((category) => (
                              <Link
                                key={category.name}
                                href={category.href}
                                className="group p-4 rounded-lg hover:bg-neon-blue/10 transition-all duration-200"
                              >
                                <div className="flex items-center space-x-3 mb-2">
                                  <category.icon className="w-5 h-5 text-neon-blue group-hover:text-neon-purple transition-colors" />
                                  <span className="text-white font-medium group-hover:text-neon-blue transition-colors">
                                    {category.name}
                                  </span>
                                </div>
                                <p className="text-xs text-gray-400 mb-2">{category.description}</p>
                                <div className="space-y-1">
                                  {category.services.slice(0, 2).map((service, index) => (
                                    <div key={index} className="text-xs text-gray-500 group-hover:text-gray-300 transition-colors">
                                      • {service}
                                    </div>
                                  ))}
                                </div>
                              </Link>
                            ))}
                          </div>
                          <div className="mt-6 pt-4 border-t border-neon-blue/20">
                            <Link
                              href="/services"
                              className="block text-center text-neon-blue hover:text-neon-purple transition-colors font-medium"
                            >
                              View All Services →
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors py-2"
                  >
                    {item.name}
                  </Link>
                )}

                {/* Services Dropdown */}
                {item.hasDropdown && activeDropdown === item.name && (
                  <div
                    className="absolute top-full left-0 mt-2 w-96 bg-black/95 backdrop-blur-md border border-cyan-500/20 rounded-xl shadow-2xl p-6"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div className="grid grid-cols-2 gap-4">
                      {serviceCategories.map((category) => (
                        <Link
                          key={category.name}
                          to={category.href}
                          className="group p-3 rounded-lg hover:bg-cyan-500/10 transition-all"
                        >
                          <div className="flex items-center space-x-3">
                            <category.icon className="w-5 h-5 text-cyan-400" />
                            <div>
                              <h4 className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                                {category.name}
                              </h4>
                              <p className="text-sm text-gray-400 text-xs">
                                {category.description}
                              </p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>
          {/* CTA Button */}
          <div className="hidden lg:block">
<<<<<<< HEAD
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
            >
              Get Started
=======
            <Link href="/contact">
              <motion.button
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Started
              </motion.button>
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
            </Link>
          </div>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
<<<<<<< HEAD
            className="lg:hidden text-gray-300 hover:text-cyan-400 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-black/95 backdrop-blur-md border-t border-cyan-500/20"
            >
              <div className="py-6 space-y-4">
                {mainNavigation.map((item) => (
                  <div key={item.name}>
=======
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-lg"
            initial = {
  { opacity: 0,
  height: 0 
}}
            animate = {
  { opacity: 1,
  height: 'auto' 
}}
            exit = {
  { opacity: 0,
  height: 0 
}}
            transition={{ duration: 0.3 }}
            <div className="container mx-auto px-4 py-6 space-y-4">
              {mainNavigation.map((item) => (
                <Link 
                  key={item.name} 
                  href={item.href} 
                  className="mobile-nav-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              {/* Mobile Services Submenu */}
              <div className="pt-4 border-t border-neon-blue/20">
                <h4 className="text-sm font-semibold text-neon-blue mb-3">Service Categories</h4>
                <div className="grid grid-cols-2 gap-2">
                  {serviceCategories.map((category) => (
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
                    <Link
                      to={item.href}
                      className="block text-gray-300 hover:text-cyan-400 transition-colors py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.hasDropdown && (
                      <div className="ml-4 mt-2 space-y-2">
                        {serviceCategories.map((category) => (
                          <Link
                            key={category.name}
                            to={category.href}
                            className="block text-gray-400 hover:text-cyan-400 transition-colors py-1 text-sm"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {category.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-4">
                  <Link
                    to="/contact"
                    className="block w-full text-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
<<<<<<< HEAD
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default ModernHeader;
=======
              <div className="pt-4">
                <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-neon-blue to-neon-purple text-white font-semibold rounded-lg">
                    Get Started
                  </button>
                </Link>
              </div>
            </div>;
          </motion.div>;
        )};
      </AnimatePresence>;
    </motion.header>;
  );
};
export default ModernHeader;}
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
