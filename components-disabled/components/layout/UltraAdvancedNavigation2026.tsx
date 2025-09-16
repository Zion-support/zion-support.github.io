  Menu, X, ChevronDown, Search, Phone, Mail, MapPin, 
  Rocket, Brain, Atom, Globe, Zap, Sparkles, Shield, 
  Microscope, DollarSign, Home, Users, Briefcase, 
  BookOpen, MessageCircle 

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
];

const companyLinks = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'About Us', href: '/about', icon: Users },
  { name: '2026 Services', href: '/2026-services-showcase', icon: Rocket },
  { name: 'Innovative 2026', href: '/2026-innovative-services-showcase', icon: Zap },
  { name: 'Ultimate 2026', href: '/ultimate-2026-services-showcase', icon: Sparkles },
  { name: '2026 Pricing', href: '/revolutionary-2026-pricing', icon: DollarSign },
  { name: 'Case Studies', href: '/case-studies', icon: Briefcase },
  { name: 'Blog & Resources', href: '/blog', icon: BookOpen },
  { name: 'Careers', href: '/careers', icon: Users },
  { name: 'Contact', href: '/contact', icon: MessageCircle }
];

const UltraAdvancedNavigation2026 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
        { name: 'AI Autonomous Agents', href: '/services?category=ai-autonomous', description: 'Fully autonomous AI systems' },
        { name: 'AI Consciousness', href: '/services?category=ai-consciousness', description: 'Consciousness simulation and interfaces' },
        { name: 'AI Healthcare', href: '/services?category=ai-healthcare', description: 'Medical AI and diagnostics' },
        { name: 'AI Education', href: '/services?category=ai-education', description: 'Educational AI systems' },
        { name: 'AI Legal', href: '/services?category=ai-legal', description: 'Legal AI and compliance' },
        { name: 'AI Creative', href: '/services?category=ai-creative', description: 'Creative AI and content generation' }
      ]
        { name: 'Cybersecurity', href: '/services?category=security', description: 'Advanced security solutions' },
        { name: 'Data Analytics', href: '/services?category=analytics', description: 'Business intelligence and analytics' },
        { name: 'DevOps', href: '/services?category=devops', description: 'Development and operations' }
      ]
    }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  };

  return (
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-xl border-b border-purple-500/20 shadow-2xl' 
          : 'bg-transparent'
      }`}>
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              </div>
              <div className="hidden sm:block">
                <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  Zion Tech Group
                </div>
                <div className="text-xs text-gray-400">Revolutionary Technology Solutions</div>
              </div>
            </Link>
                    <span className="font-medium">{item.name}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} />
                                className="block p-3 rounded-xl hover:bg-purple-500/10 transition-colors duration-200 group"
                                onClick={() => setActiveDropdown(null)}
                              >
                                <div className="text-white font-medium group-hover:text-purple-300 transition-colors duration-200">
                                  {subItem.name}
                                </div>
                                <div className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-200">
                                  {subItem.description}
                                </div>
                              </Link>
                            ))}
                          <Link
                            href={item.href}
                            className="block w-full mt-4 p-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center font-medium rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-200"
                            onClick={() => setActiveDropdown(null)}
                          >
                            View All {item.name}
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              {/* Quick Links */}
                </Link>
                <Link href="/pricing" className="text-gray-300 hover:text-white transition-colors duration-200 font-medium">
                  Pricing
                </Link>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors duration-200 font-medium">
                  Contact
                </Link>
              </div>
            </div>
            <div className="hidden lg:flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200">
                <Phone className="w-4 h-4" />
                <span className="text-sm font-medium">{contactInfo.phone}</span>
              </div>
              <Link
                href="/contact"
                className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-200 transform hover:scale-105"
              >
                Get Started
              </Link>
            </div>

            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}

                {/* Quick Links */}
                <div className="space-y-3 pt-4">
                  <Link
                    href="/services"
                    className="block text-gray-300 hover:text-white transition-colors duration-200 font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    All Services
                  </Link>
                  <Link
                    href="/pricing"
                    className="block text-gray-300 hover:text-white transition-colors duration-200 font-medium"
                <div className="pt-6 border-t border-gray-700/50 space-y-3">
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Phone className="w-4 h-4" />
                    <span className="text-sm">{contactInfo.phone}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Mail className="w-4 h-4" />
                    <span className="text-sm">{contactInfo.email}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{contactInfo.address}</span>
                  </div>
                </div>
