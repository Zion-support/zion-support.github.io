import React, { useState } from "react"
  Network,
  Cpu} from "lucide-react"

const navigation = []
},
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" }

<<<<<<< HEAD
]
const Navigation: React.FC = () => {,,
  const [isOpen, setIsOpen] = useState(false)
}
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
}
  const toggleDropdown = (name: string) => {,,
    setActiveDropdown(activeDropdown === name ? null : name)}

  return (
    <nav className = "bg-gray-900/95 backdrop-blur-md border-b border-gray-800 sticky top-0 z-50">"
      <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">"
        <div className="flex justify-between items-center h-16">,
          {/* comment */}"
          <div className="flex-shrink-0">"
            <Link href="/" className="flex items-center space-x-2">"
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">"
                <span className="text-white font-bold text-lg">Z</span>
              </div>"
              <span className="text-white font-bold text-xl">Zion Tech Group</span>
=======
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Home', href: '/' },
    { 
      name: 'Services', 
      href: '/services', 
      dropdown: [
        { name: 'AI Services', href: '/ai-services', icon: Brain, description: 'Cutting-edge AI services' },
        { name: 'IT Services', href: '/it-services', icon: Network, description: 'Comprehensive IT solutions' },
        { name: 'Micro SaaS', href: '/micro-saas', icon: Cloud, description: 'Scalable SaaS solutions' },
        { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield, description: 'Advanced security solutions' },
        { name: 'Cloud & DevOps', href: '/services/cloud-devops', icon: Cloud, description: 'Cloud migration & automation' },
        { name: 'Web Development', href: '/services/web-development', icon: Code, description: 'Custom web applications' },
        { name: 'Cloud Services', href: '/services/cloud-services', icon: Cloud, description: 'Cloud infrastructure' },
        { name: 'AI Development', href: '/services/ai-development', icon: Brain, description: 'AI development services' }
      ]
    },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Demo', href: '/demo' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' }
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

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-md border-b border-cyan-400/20' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div className="relative">
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="flex items-center space-x-1 text-gray-300 hover:text-cyan-300 transition-colors duration-200 py-2"
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    </button>

                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-md rounded-lg shadow-xl border border-cyan-400/20 overflow-hidden"
                        >
                          <div className="p-4">
                            <div className="grid grid-cols-1 gap-2">
                              {item.dropdown.map((dropdownItem, index) => (
                                <Link
                                  key={index}
                                  href={dropdownItem.href}
                                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800/50 transition-colors group"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  <div className="w-10 h-10 bg-cyan-400/20 rounded-lg flex items-center justify-center group-hover:bg-cyan-400/30 transition-colors">
                                    <dropdownItem.icon className="w-5 h-5 text-cyan-400" />
                                  </div>
                                  <div>
                                    <div className="font-semibold text-white group-hover:text-cyan-300 transition-colors">
                                      {dropdownItem.name}
                                    </div>
                                    <div className="text-sm text-gray-400">
                                      {dropdownItem.description}
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
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-cyan-300 transition-colors duration-200 py-2"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-500 hover:to-blue-600 transition-all duration-200"
            >
              Get Started
>>>>>>> origin/main
            </Link>
          </div>
          {/* comment */}"
          <div className="hidden md: block">"
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (",
                <div key="{item.name}" className="relative">
                  {item.dropdown ? ("
                    <div className="relative">"
                      <button onClick="{()" => toggleDropdown(item.name)}"
                        className="text-gray-300 hover: text-white px-3 py-2 rounded-md text-sm font-medium flex items-center space-x-1 transition-colors duration-200"
                      >,
                        <span>{item.name}</span>"
                        <ChevronDown className="w-4 h-4"  />
                      </button>
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div,"
initial="{{" opacity: 0, y: 10, scale: 0.95 }}"
                            animate="{{" opacity: 1, y: 0, scale: 1 }}"
                            exit="{{" opacity: 0, y: 10, scale: 0.95 }}"
                            transition="{{" duration: 0.2 }}"
                            className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-md border border-cyan-400/20 rounded-xl shadow-2xl shadow-cyan-400/10 overflow-hidden"
                          >"
                            <div className="p-4">"
                              <div className="grid grid-cols-1 gap-2">
                                {item.dropdown.map((dropdownItem) => ("
                                  <Link key="{dropdownItem.name}""
                                    href="{dropdownItem.href}""
                                    className="flex items-center space-x-3 p-3 rounded-lg hover: bg-gray-800/50 transition-colors duration-200 group"">
                                    onClick="{()" => setActiveDropdown(null)}

<<<<<<< HEAD
                                  >"
                                    <div className="flex-shrink-0">"
                                      <dropdownItem.icon className="w-5 h-5 text-cyan-400 group-hover: text-cyan-300 transition-colors" />
                                    </div>"
                                    <div className="flex-1 min-w-0">"
                                      <p className="text-sm font-medium text-white group-hover:text-cyan-100 transition-colors">,
                                        {dropdownItem.name}

                                      </p>"
                                      <p className="text-xs text-gray-400 group-hover: text-gray-300 transition-colors">,
                                        {dropdownItem.description}

                                      </p>
                                    </div>
                                  </Link>
                                ))}

                              </div>
                          </motion.div>
                        )}

                      </AnimatePresence>
                    </div>
                  ) : ("
                    <Link href="{item.href}""
                      className="text-gray-300 hover: text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                    >,
                      {item.name}

                    </Link>
                  )}

                </div>
              ))}

            </div>
          {/* comment */}"
          <div className="hidden md: block">"
            <Link href="/contact""
              className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
            >
              Get Started,
            </Link>
          </div>
,
          {/* comment */}"
          <div className="md: hidden">",
            <button onClick="{()" => setIsOpen(!isOpen)}"
              className="text-gray-300 hover: text-white p-2 rounded-md transition-colors duration-200"
            >",
              {isOpen ? <X className="w-6 h-6"  /> : <Menu className="w-6 h-6"  />}

            </button>
          </div>
      {/* comment */}
=======
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white hover:text-cyan-300 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
>>>>>>> origin/main

      <AnimatePresence>
        {isOpen && (
<<<<<<< HEAD
          <motion.div,"
initial="{{" opacity: 0, height: 0 }}"
            animate="{{" opacity: 1, height: "auto" }}"
            exit="{{" opacity: 0, height: 0 }}"
            transition="{{" duration: 0.3 }}"
            className="md: hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-800"
          >"
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) => (",
                <div key="{item.name}">
                  {item.dropdown ? (
                    <div>"
                      <button onClick="{()" => toggleDropdown(item.name)}"
                        className="text-gray-300 hover: text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left flex items-center justify-between"
                      >,
                        <span>{item.name}</span>"
                        <ChevronDown className="w-4 h-4"  />
                      </button>
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div,"
initial="{{" opacity: 0, height: 0 }}"
                            animate="{{" opacity: 1, height: "auto" }}"
                            exit="{{" opacity: 0, height: 0 }}"
                            transition="{{" duration: 0.2 }}"
                            className="pl-4 space-y-1"
                          >
                            {item.dropdown.map((dropdownItem) => ("
                              <Link key="{dropdownItem.name}""
                                href="{dropdownItem.href}""
                                className="text-gray-400 hover: text-white block px-3 py-2 rounded-md text-sm font-medium flex items-center space-x-2""
                                onClick="{()" => {,
                                  setActiveDropdown(null),
                                  setIsOpen(false)}}

                              >"
                                <dropdownItem.icon className="w-4 h-4" />
                                <span>{dropdownItem.name}</span>
                              </Link>
                            ))}

                          </motion.div>
                        )}

                      </AnimatePresence>
                    </div>
                  ) : ("
                    <Link href="{item.href}""
                      className="text-gray-300 hover: text-white block px-3 py-2 rounded-md text-base font-medium"">
                      onClick="{()" => setIsOpen(false)}

                    >
                      {item.name}

                    </Link>
                  )}

=======
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-gray-900/95 backdrop-blur-md border-t border-cyan-400/20"
          >
            <div className="px-4 py-6 space-y-4">
              {/* Contact Information */}
              <div className="pb-4 border-b border-gray-700">
                <h3 className="text-sm font-semibold text-cyan-400 mb-3 uppercase tracking-wide">
                  Contact Information
                </h3>
                <div className="space-y-2">
                  {contactInfo.map((contact, index) => (
                    <a
                      key={index}
                      href={contact.href}
                      className="flex items-center space-x-3 text-gray-300 hover:text-cyan-300 transition-colors"
                    >
                      <contact.icon className="w-4 h-4" />
                      <span className="text-sm">{contact.text}</span>
                    </a>
                  ))}
>>>>>>> origin/main
                </div>
              ))}"
              <div className="pt-4">"
                <Link href="/contact""
                  className="block w-full text-center px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover: shadow-lg hover:shadow-blue-500/25 transition-all duration-300"">
                  onClick="{()" => setIsOpen(false)}

<<<<<<< HEAD
                >
                  Get Started,
=======
              {/* Navigation Links */}
              <div className="space-y-2">
                {navigationItems.map((item, index) => (
                  <div key={index}>
                    {item.dropdown ? (
                      <div>
                        <button
                          onClick={() => toggleDropdown(item.name)}
                          className="flex items-center justify-between w-full text-left text-gray-300 hover:text-cyan-300 transition-colors py-2"
                        >
                          <span>{item.name}</span>
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
                              className="ml-4 mt-2 space-y-2"
                            >
                              {item.dropdown.map((dropdownItem, dropdownIndex) => (
                                <Link
                                  key={dropdownIndex}
                                  href={dropdownItem.href}
                                  className="flex items-center space-x-3 text-gray-400 hover:text-cyan-300 transition-colors py-1"
                                  onClick={closeMobileMenu}
                                >
                                  <dropdownItem.icon className="w-4 h-4" />
                                  <span className="text-sm">{dropdownItem.name}</span>
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className="block text-gray-300 hover:text-cyan-300 transition-colors py-2"
                        onClick={closeMobileMenu}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              {/* Mobile CTA */}
              <div className="pt-4 border-t border-gray-700">
                <Link
                  href="/contact"
                  className="block w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-center py-3 rounded-lg font-semibold hover:from-cyan-500 hover:to-blue-600 transition-all duration-200"
                  onClick={closeMobileMenu}
                >
                  Get Started
>>>>>>> origin/main
                </Link>
              </div>
          </motion.div>
        )}

      </AnimatePresence>
    </nav>
  )}
";
);
export default Navigation;"