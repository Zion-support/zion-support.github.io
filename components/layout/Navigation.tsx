import React, { useState, useEffect } from 'react',
import { motion, AnimatePresence } from 'framer-motion',
import { 
  Menu, X, Home, Brain, Cpu, Rocket, 
  Phone, Mail, MapPin, Globe, ChevronDown
} from 'lucide-react',
import Link from 'next/link',
const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false),
  const [isScrolled, setIsScrolled] = useState(false),
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null),

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    },

    window.addEventListener('scroll', handleScroll),
    return () => window.removeEventListener('scroll', handleScroll)
  }, []),

  const navigationItems = [
    {
      name: 'Home',
      href: '/',
      icon: Home
    },
    {
      name: 'Services',
      href: '/services',
      icon: Rocket,
      dropdown: [
        { name: 'AI Services', href: '/ai-services', icon: Brain, description: 'Revolutionary AI solutions' },
        { name: 'IT Services', href: '/it-services', icon: Cpu, description: 'Enterprise IT solutions' },
        { name: 'Micro SaaS', href: '/micro-saas', icon: Rocket, description: 'Specialized software solutions' },
        { name: 'Innovative Showcase', href: '/innovative-services-showcase', icon: Globe, description: 'Cutting-edge technology' }
      ]
    },
    {
      name: 'Solutions',
      href: '/solutions',
      icon: Cpu
    },
    {
      name: 'About',
      href: '/about',
      icon: Globe
    },
    {
      name: 'Contact',
      href: '/contact',
      icon: Phone
    }
  ],

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  },

  return (
    <>
      {/* Navigation Bar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-gray-900/95 backdrop-blur-xl border-b border-cyan-500/20 shadow-2xl shadow-cyan-500/10' 
            : 'bg-transparent'
        }`}
      >
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;flex items-center justify-between h-16 lg:h-20&quot;>
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className=&quot;flex items-center space-x-2&quot;
            >
              <Link href=&quot;/&quot; className=&quot;flex items-center space-x-2 group&quot;>
                <div className=&quot;w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center group-hover:shadow-lg group-hover:shadow-cyan-400/25 transition-all duration-300&quot;>
                  <span className=&quot;text-white font-bold text-lg lg:text-xl&quot;>Z</span>
                </div>
                <div className=&quot;hidden sm:block&quot;>
                  <div className=&quot;text-white font-bold text-lg lg:text-xl&quot;>Zion Tech Group</div>
                  <div className=&quot;text-cyan-400 text-xs&quot;>Revolutionary Technology</div>
                </div>
              </a>
            </motion.div>

            {/* Desktop Navigation */}
            <div className=&quot;hidden lg:flex items-center space-x-8&quot;>
              {navigationItems.map((item) => (
                <div key={item.name} className=&quot;relative group&quot;>
                  {item.dropdown ? (
                    <div
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                      className=&quot;flex items-center space-x-1 cursor-pointer text-gray-300 hover:text-white transition-colors duration-300&quot;
                    >
                      <span className=&quot;font-medium&quot;>{item.name}</span>
                      <ChevronDown className=&quot;w-4 h-4 transition-transform duration-300 group-hover:rotate-180&quot; />
                      
                      {/* Dropdown Menu */}
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className=&quot;absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl rounded-2xl border border-cyan-500/20 shadow-2xl shadow-cyan-500/25 p-4&quot;
                          >
                            <div className=&quot;grid grid-cols-1 gap-3&quot;>
                              {item.dropdown.map((dropdownItem) => {
                                const Icon = dropdownItem.icon,
                                return (
                                  <Link
                                    key={dropdownItem.name}
                                    href={dropdownItem.href}
                                    className=&quot;flex items-center space-x-3 p-3 rounded-xl hover:bg-cyan-500/10 hover:border border-cyan-500/30 transition-all duration-300 group/item&quot;
                                  >
                                    <div className=&quot;w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center group-hover/item:bg-gradient-to-r group-hover/item:from-cyan-500/30 group-hover/item:to-purple-500/30 transition-all duration-300&quot;>
                                      <Icon className=&quot;w-5 h-5 text-cyan-400&quot; />
                                    </div>
                                    <div>
                                      <div className=&quot;text-white font-medium group-hover/item:text-cyan-400 transition-colors duration-300&quot;>
                                        {dropdownItem.name}
                                      </div>
                                      <div className=&quot;text-gray-400 text-sm&quot;>
                                        {dropdownItem.description}
                                      </div>
                                    </div>
<<<<<<< HEAD
                                  </Link>
                                )
=======
                                  </a>
                                );
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
                              })}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className=&quot;flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300 group&quot;
                    >
                      <item.icon className=&quot;w-4 h-4 group-hover:scale-110 transition-transform duration-300&quot; />
                      <span className=&quot;font-medium&quot;>{item.name}</span>
                    </a>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className=&quot;hidden lg:block&quot;>
              <motion.a
                href=&quot;/contact&quot;
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className=&quot;bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold py-2 px-6 rounded-full transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40&quot;
              >
                Get Started
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <div className=&quot;lg:hidden&quot;>
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className=&quot;text-gray-300 hover:text-white transition-colors duration-300&quot;
              >
                {isOpen ? <X className=&quot;w-6 h-6&quot; /> : <Menu className=&quot;w-6 h-6&quot; />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className=&quot;fixed inset-0 z-40 lg:hidden&quot;
          >
            {/* Backdrop */}
            <div 
              className=&quot;absolute inset-0 bg-black/50 backdrop-blur-sm&quot;
              onClick={() => setIsOpen(false)}
            />
            
            {/* Mobile Menu */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3 }}
              className=&quot;absolute right-0 top-0 h-full w-80 bg-gray-900/95 backdrop-blur-xl border-l border-cyan-500/20 shadow-2xl&quot;
            >
              <div className=&quot;p-6&quot;>
                {/* Close Button */}
                <div className=&quot;flex justify-end mb-6&quot;>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsOpen(false)}
                    className=&quot;text-gray-300 hover:text-white transition-colors duration-300&quot;
                  >
                    <X className=&quot;w-6 h-6&quot; />
                  </motion.button>
                </div>

                {/* Mobile Menu Items */}
                <div className=&quot;space-y-4&quot;>
                  {navigationItems.map((item) => (
                    <div key={item.name}>
                      {item.dropdown ? (
                        <div className=&quot;space-y-2&quot;>
                          <div className=&quot;text-gray-400 font-medium text-sm uppercase tracking-wider&quot;>
                            {item.name}
                          </div>
                          <div className=&quot;pl-4 space-y-2&quot;>
                            {item.dropdown.map((dropdownItem) => {
                              const Icon = dropdownItem.icon,
                              return (
                                <Link
                                  key={dropdownItem.name}
                                  href={dropdownItem.href}
                                  onClick={() => setIsOpen(false)}
                                  className=&quot;flex items-center space-x-3 p-3 rounded-lg hover:bg-cyan-500/10 transition-all duration-300&quot;
                                >
                                  <Icon className=&quot;w-5 h-5 text-cyan-400&quot; />
                                  <div>
                                    <div className=&quot;text-white font-medium&quot;>{dropdownItem.name}</div>
                                    <div className=&quot;text-gray-400 text-sm&quot;>{dropdownItem.description}</div>
                                  </div>
<<<<<<< HEAD
                                </Link>
                              )
=======
                                </a>
                              );
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
                            })}
                          </div>
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className=&quot;flex items-center space-x-3 p-3 rounded-lg hover:bg-cyan-500/10 transition-all duration-300&quot;
                        >
                          <item.icon className=&quot;w-5 h-5 text-cyan-400&quot; />
                          <span className=&quot;text-white font-medium&quot;>{item.name}</span>
                        </a>
                      )}
                    </div>
                  ))}
                </div>

                {/* Contact Information */}
                <div className=&quot;mt-8 p-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl border border-cyan-500/20&quot;>
                  <h3 className=&quot;text-cyan-400 font-semibold mb-3&quot;>Contact Information</h3>
                  <div className=&quot;space-y-2 text-sm&quot;>
                    <div className=&quot;flex items-center space-x-2 text-gray-300&quot;>
                      <Phone className=&quot;w-4 h-4 text-cyan-400&quot; />
                      <span>{contactInfo.mobile}</span>
                    </div>
                    <div className=&quot;flex items-center space-x-2 text-gray-300&quot;>
                      <Mail className=&quot;w-4 h-4 text-purple-400&quot; />
                      <span>{contactInfo.email}</span>
                    </div>
                    <div className=&quot;flex items-center space-x-2 text-gray-300&quot;>
                      <MapPin className=&quot;w-4 h-4 text-pink-400&quot; />
                      <span className=&quot;text-xs&quot;>{contactInfo.address}</span>
                    </div>
                  </div>
                </div>

                {/* Mobile CTA */}
                <div className=&quot;mt-6&quot;>
                  <motion.a
                    href=&quot;/contact&quot;
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsOpen(false)}
                    className=&quot;block w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold py-3 px-6 rounded-xl text-center transition-all duration-300 shadow-lg shadow-cyan-500/25&quot;
                  >
                    Get Started Today
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
},

export default Navigation,