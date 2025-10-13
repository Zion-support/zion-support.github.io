import React, { useState, useCallback, useMemo, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown, Zap, Cloud, Shield, Globe, Database, Code, Smartphone } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Navigation = React.memo(() => {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  
  const toggleMenu = useCallback(() => {
    setIsOpen(!isOpen)
  }, [isOpen])

  const toggleServices = useCallback(() => {
    setIsServicesOpen(!isServicesOpen)
  }, [isServicesOpen])

  const toggleSolutions = useCallback(() => {
    setIsSolutionsOpen(!isSolutionsOpen)
  }, [isSolutionsOpen])

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isServicesOpen || isSolutionsOpen) {
        const target = event.target as Element
        if (!target.closest('[data-dropdown]')) {
          setIsServicesOpen(false)
          setIsSolutionsOpen(false)
        }
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isServicesOpen, isSolutionsOpen])

  const services = useMemo(() => [
    { name: 'AI & Machine Learning', path: '/ai-services', icon: <Zap className="w-4 h-4" /> },
    { name: 'Cloud Infrastructure', path: '/cloud-infrastructure', icon: <Cloud className="w-4 h-4" /> },
    { name: 'Cybersecurity Solutions', path: '/cybersecurity-solutions', icon: <Shield className="w-4 h-4" /> },
    { name: '5G Solutions', path: '/5g-solutions', icon: <Globe className="w-4 h-4" /> },
    { name: 'Data Analytics', path: '/data-analytics', icon: <Database className="w-4 h-4" /> },
    { name: 'Web Development', path: '/web-development', icon: <Code className="w-4 h-4" /> },
    { name: 'Mobile Development', path: '/mobile-development', icon: <Smartphone className="w-4 h-4" /> }
  ], [])

  const solutions = useMemo(() => [
    { name: 'AI Analytics', path: '/ai-analytics', icon: <Database className="w-4 h-4" /> },
    { name: 'AI Automation', path: '/ai-automation', icon: <Zap className="w-4 h-4" /> },
    { name: 'AI Content Generation', path: '/ai-content-generation', icon: <Code className="w-4 h-4" /> },
    { name: 'AI Customer Service', path: '/ai-customer-service', icon: <Shield className="w-4 h-4" /> },
    { name: 'AI Marketing', path: '/ai-marketing', icon: <Globe className="w-4 h-4" /> },
    { name: 'AI Project Management', path: '/ai-project-management', icon: <Smartphone className="w-4 h-4" /> }
  ], [])

  const mainNavItems = useMemo(() => [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ], [])

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 text-white shadow-lg transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/95 backdrop-blur-md' : 'bg-gray-900'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link 
            to="/" 
            className="text-2xl font-bold hover:text-cyan-400 transition-colors"
            aria-label="Zion Tech Group Home"
          >
            Zion Tech Group
          </Link>

          <div className="hidden md:flex space-x-8">
            {mainNavItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="hover:text-cyan-400 transition-colors relative group"
                aria-label={`Navigate to ${item.name}`}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            
            {/* Solutions Dropdown */}
            <div className="relative" data-dropdown>
              <button
                onClick={toggleSolutions}
                className="flex items-center space-x-1 hover:text-cyan-400 transition-colors"
                aria-expanded={isSolutionsOpen}
                aria-haspopup="true"
                aria-label="Solutions menu"
              >
                <span>Solutions</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isSolutionsOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {isSolutionsOpen && (
                  <motion.div 
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 z-50"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    role="menu"
                    aria-label="Solutions submenu"
                  >
                    {solutions.map((solution) => (
                      <Link
                        key={solution.name}
                        to={solution.path}
                        className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                        onClick={() => setIsSolutionsOpen(false)}
                        role="menuitem"
                        aria-label={`Navigate to ${solution.name}`}
                      >
                        {solution.icon}
                        <span>{solution.name}</span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            {/* Services Dropdown */}
            <div className="relative" data-dropdown>
              <button
                onClick={toggleServices}
                className="flex items-center space-x-1 hover:text-cyan-400 transition-colors"
                aria-expanded={isServicesOpen}
                aria-haspopup="true"
                aria-label="Services menu"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div 
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 z-50"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    role="menu"
                    aria-label="Services submenu"
                  >
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        to={service.path}
                        className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                        onClick={() => setIsServicesOpen(false)}
                        role="menuitem"
                        aria-label={`Navigate to ${service.name}`}
                      >
                        {service.icon}
                        <span>{service.name}</span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/consultation"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-4 py-2 rounded-lg transition-all duration-300 font-semibold"
              aria-label="Get started with consultation"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-cyan-400 transition-colors p-2"
              aria-expanded={isOpen}
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              className="md:hidden py-4 border-t border-gray-700"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col space-y-4">
                {mainNavItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="hover:text-cyan-400 transition-colors py-2"
                    onClick={toggleMenu}
                    aria-label={`Navigate to ${item.name}`}
                  >
                    {item.name}
                  </Link>
                ))}
              
                {/* Mobile Solutions */}
                <div>
                  <button
                    onClick={toggleSolutions}
                    className="flex items-center space-x-1 hover:text-cyan-400 transition-colors py-2"
                    aria-expanded={isSolutionsOpen}
                    aria-label="Solutions menu"
                  >
                    <span>Solutions</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${isSolutionsOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  <AnimatePresence>
                    {isSolutionsOpen && (
                      <motion.div 
                        className="ml-4 mt-2 space-y-2"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {solutions.map((solution) => (
                          <Link
                            key={solution.name}
                            to={solution.path}
                            className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors py-1"
                            onClick={() => {
                              setIsSolutionsOpen(false)
                              toggleMenu()
                            }}
                            aria-label={`Navigate to ${solution.name}`}
                          >
                            {solution.icon}
                            <span>{solution.name}</span>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                
                {/* Mobile Services */}
                <div>
                  <button
                    onClick={toggleServices}
                    className="flex items-center space-x-1 hover:text-cyan-400 transition-colors py-2"
                    aria-expanded={isServicesOpen}
                    aria-label="Services menu"
                  >
                    <span>Services</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div 
                        className="ml-4 mt-2 space-y-2"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {services.map((service) => (
                          <Link
                            key={service.name}
                            to={service.path}
                            className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors py-1"
                            onClick={() => {
                              setIsServicesOpen(false)
                              toggleMenu()
                            }}
                            aria-label={`Navigate to ${service.name}`}
                          >
                            {service.icon}
                            <span>{service.name}</span>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link
                  to="/consultation"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-4 py-2 rounded-lg transition-all duration-300 text-center font-semibold"
                  onClick={toggleMenu}
                  aria-label="Get started with consultation"
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
});

Navigation.displayName = 'Navigation';

export default Navigation;
