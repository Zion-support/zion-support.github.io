    icon: Target,
    color: 'from-green-600 via-yellow-600 to-orange-600',
    description: 'Cutting-edge micro solutions',
    services: [
      { name: 'AI Business Intelligence Suite 2030', href: '/ai-business-intelligence-suite-2030', description: 'AI-powered business analytics and insights', price: '$299/month' },
      { name: 'AI Customer Experience Platform 2030', href: '/ai-customer-experience-platform-2030', description: 'AI-powered customer experience management', price: '$199/month' },
      { name: 'AI Marketing Automation Suite 2030', href: '/ai-marketing-automation-2030', description: 'Intelligent marketing automation powered by AI', price: '$179/month' },
      { name: 'AI HR Management Suite 2030', href: '/ai-hr-management-suite-2030', description: 'Intelligent human resources management powered by AI', price: '$149/month' }
    ]
  }
];

const mainNavigation = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Services', href: '/services', icon: Briefcase },
  { name: 'Solutions', href: '/solutions', icon: Layers },
  { name: 'Pricing', href: '/pricing', icon: DollarSign },
  { name: 'Resources', href: '/resources', icon: BookOpen },
  { name: 'Blog', href: '/blog', icon: MessageCircle },
  { name: 'Contact', href: '/contact', icon: MessageCircle }
];

const quickLinks = [
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);


  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
      <div className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-cyan-400" />
              <span>{contactInfo.mobile}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-cyan-400" />
              <span>{contactInfo.email}</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-cyan-400" />
              <span>{contactInfo.address}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Globe className="w-4 h-4 text-cyan-400" />
              <a href={contactInfo.website} className="hover:text-cyan-400 transition-colors">
                {contactInfo.website.replace('https://', '')}
              </a>
            </div>
          </div>
        </div>
      </div>

      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-xl border-b border-purple-500/20 shadow-2xl' 
          : 'bg-gradient-to-r from-black/95 via-purple-900/95 to-black/95 backdrop-blur-sm'
      }`}>
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center transform group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-300">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    Zion Tech Group
                  </span>
                  <span className="text-xs text-gray-400 font-mono">2030 Future Technology</span>
                </div>
              </Link>
            </div>
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 group"
                >
                  <item.icon className="w-4 h-4 group-hover:text-purple-400 transition-colors" />
                  <span>{item.name}</span>
                </Link>
              ))}
                <div className="absolute top-full left-0 w-screen max-w-6xl bg-black/95 backdrop-blur-xl border border-purple-500/20 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-4">
                  <div className="p-8">
                    <div className="grid grid-cols-2 gap-8">
                      {serviceCategories.map((category, index) => (
                        <div key={index} className="space-y-4">
                          <div className="flex items-center space-x-3">
                            <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color}`}>
                              <category.icon className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                              <p className="text-sm text-gray-400">{category.description}</p>
                            </div>
                          </div>
                          <div className="space-y-2">
                            {category.services.map((service, serviceIndex) => (
                              <Link
                                key={serviceIndex}
                                href={service.href}
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
                    </Link>
                  ))}
                </div>

                        key={link.name}
                        href={link.href}
                        onClick={closeMenu}
                        className={`p-3 rounded-lg text-center transition-all duration-200 transform hover:shadow-xl hover:shadow-cyan-500/30 ${
                  <Link
                    href="/contact"
                    onClick={closeMenu}
                    className="block w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-center rounded-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-200"
                  >
                    Get Started
                  </Link>
                  <Link
                    href="/pricing"
                    onClick={closeMenu}
                    className="block w-full px-6 py-3 border border-purple-500/30 text-purple-400 text-center rounded-lg hover:bg-purple-500/10 transition-all duration-200"
                  >
                    View Pricing
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Spacer for fixed navigation */}
