import React, { useState, useCallback, useMemo, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown, Zap, Cloud, Shield, Globe, Database, Code, Smartphone } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Navigation = React.memo(() => {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  
  const toggleMenu = useCallback(() => {
    setIsOpen(!isOpen)
  }, [isOpen])

  const toggleServices = useCallback(() => {
    setIsServicesOpen(!isServicesOpen)
  }, [isServicesOpen])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const services = useMemo(() => [
    { name: 'AI & Machine Learning', path: '/ai-services', icon: <Zap className="w-4 h-4" />, description: 'Advanced AI solutions' },
    { name: 'Cloud Solutions', path: '/cloud-infrastructure', icon: <Cloud className="w-4 h-4" />, description: 'Scalable cloud infrastructure' },
    { name: 'Cybersecurity', path: '/cybersecurity-solutions', icon: <Shield className="w-4 h-4" />, description: 'Enterprise security' },
    { name: '5G Implementation', path: '/5g-implementation', icon: <Globe className="w-4 h-4" />, description: 'Next-gen connectivity' },
    { name: 'Data Analytics', path: '/data-engineering', icon: <Database className="w-4 h-4" />, description: 'Data insights & analytics' },
    { name: 'Custom Development', path: '/custom-software', icon: <Code className="w-4 h-4" />, description: 'Tailored software solutions' },
    { name: 'Mobile Solutions', path: '/mobile-development', icon: <Smartphone className="w-4 h-4" />, description: 'Mobile app development' }
  ], [])

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gray-900/95 backdrop-blur-md shadow-2xl border-b border-cyan-500/20' 
          : 'bg-gray-900/90 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link 
            to="/" 
            className="flex items-center space-x-2 group"
          >
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-lg">Z</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Zion Tech Group
            </span>
          </Link>

          <div className="hidden lg:flex space-x-8 items-center">
            <Link 
              to="/" 
              className="relative group px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              to="/about" 
              className="relative group px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={toggleServices}
                className="flex items-center space-x-1 px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 group"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-gray-800/95 backdrop-blur-md rounded-2xl shadow-2xl border border-cyan-500/20 py-4 z-50"
                  >
                    {services.map((service, index) => (
                      <motion.div
                        key={service.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2, delay: index * 0.05 }}
                      >
                        <Link
                          to={service.path}
                          className="flex items-center space-x-4 px-6 py-3 text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400 transition-all duration-300 group"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            {service.icon}
                          </div>
                          <div>
                            <div className="font-semibold">{service.name}</div>
                            <div className="text-sm text-gray-400">{service.description}</div>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link 
              to="/case-studies" 
              className="relative group px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
            >
              Case Studies
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              to="/blog" 
              className="relative group px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
            >
              Blog
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              to="/contact" 
              className="relative group px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              to="/consultation"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-cyan-400 transition-colors duration-300 p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden py-4 border-t border-cyan-500/20"
            >
              <div className="flex flex-col space-y-4">
                <Link
                  to="/"
                  className="px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all duration-300"
                  onClick={toggleMenu}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all duration-300"
                  onClick={toggleMenu}
                >
                  About
                </Link>
                
                {/* Mobile Services */}
                <div>
                  <button
                    onClick={toggleServices}
                    className="flex items-center justify-between w-full px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all duration-300"
                  >
                    <span>Services</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="ml-4 mt-2 space-y-2"
                      >
                        {services.map((service, index) => (
                          <motion.div
                            key={service.name}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.2, delay: index * 0.05 }}
                          >
                            <Link
                              to={service.path}
                              className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all duration-300"
                              onClick={() => {
                                setIsServicesOpen(false)
                                toggleMenu()
                              }}
                            >
                              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center">
                                {service.icon}
                              </div>
                              <div>
                                <div className="font-semibold">{service.name}</div>
                                <div className="text-sm text-gray-400">{service.description}</div>
                              </div>
                            </Link>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link
                  to="/case-studies"
                  className="px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all duration-300"
                  onClick={toggleMenu}
                >
                  Case Studies
                </Link>
                <Link
                  to="/blog"
                  className="px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all duration-300"
                  onClick={toggleMenu}
                >
                  Blog
                </Link>
                <Link
                  to="/contact"
                  className="px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all duration-300"
                  onClick={toggleMenu}
                >
                  Contact
                </Link>
                <Link
                  to="/consultation"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-6 py-4 rounded-xl font-semibold transition-all duration-300 text-center transform hover:scale-105"
                  onClick={toggleMenu}
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
})

Navigation.displayName = 'Navigation'

export default Navigation