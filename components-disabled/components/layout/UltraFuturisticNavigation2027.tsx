import { 
  Menu, X, Zap, Sparkles, ChevronDown, ChevronRight, 
  Brain, Atom, Globe, Shield, Cpu, Database, 
  Cloud, Smartphone, Palette, Search, MessageSquare, 
const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};
const companyLinks = [
  { name: '🏠 Home', href: '/', icon: Home },
  { name: '🚀 2028 Services', href: '/ultimate-2028-services-showcase', icon: Rocket },
  { name: '⭐ Ultimate 2028', href: '/ultimate-2028-services-showcase', icon: Star },
  { name: '💰 2028 Pricing', href: '/revolutionary-2028-pricing', icon: DollarSign },
  { name: '📊 Case Studies', href: '/case-studies', icon: Briefcase },
  { name: '📚 Blog & Resources', href: '/blog', icon: BookOpen },
  { name: '📈 Reports', href: '/reports', icon: TrendingUp },
  { name: '🔧 Solutions', href: '/solutions', icon: Layers },
  { name: '💼 Careers', href: '/careers', icon: Users },
  { name: '🤖 AI Services', href: '/ai-services', icon: Brain },
  { name: '⚛️ Quantum Services', href: '/quantum-services', icon: Atom },
  { name: '☁️ Cloud Platform', href: '/cloud-platform', icon: Cloud },
  { name: '🔒 Cybersecurity', href: '/cybersecurity', icon: Lock },
  { name: '📊 Analytics', href: '/analytics', icon: Database },
  { name: '🔄 Automation', href: '/automation', icon: Cpu }
    {
      name: 'Quantum Technology',
      href: '/services?category=Quantum%20Computing',
      description: '50+ Quantum Solutions',
          href: '/services?category=Quantum%20Computing',
          description: 'Explore quantum solutions',
          icon: '🚀'
        }
      ]
    {
      name: 'Emerging Tech',
      href: '/services?category=Emerging%20Technology',
      description: '100+ Future Solutions',
          href: '/services?category=Emerging%20Technology',
          description: 'Explore future solutions',
          icon: '🚀'
        }
      ]
    {
      name: 'Business Solutions',
      href: '/services?category=Business%20Operations',
      description: '150+ Business Tools',
          href: '/services/smart-inventory-manager',
          description: 'AI-powered inventory optimization',
          price: '$199/month',
          icon: '📦'
          href: '/services/customer-success-automation',
          description: 'Automated customer retention',
          price: '$399/month',
          icon: '🎯'
          href: '/services/ai-sales-coach',
          description: 'Intelligent sales training',
          price: '$249/month',
          icon: '📞'
          href: '/services/smart-hr-assistant',
          description: 'AI-powered HR automation',
          price: '$349/month',
          icon: '👥'
          href: '/services?category=Business%20Operations',
          description: 'Explore business tools',
          icon: '🚀'
        }
      ]
    {
      name: 'Cybersecurity',
      href: '/services?category=Cybersecurity',
      description: '75+ Security Solutions',
          href: '/services?category=Cybersecurity',
          description: 'Explore security tools',
          icon: '🚀'
        }
      ]
    {
      name: 'Enterprise IT',
      href: '/services?category=Enterprise%20IT',
      description: '100+ Enterprise Solutions',
  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
      <div className="relative container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group relative z-10">
            <motion.div 
              className="w-12 h-12 bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg shadow-cyan-500/30"
              whileHover={{ rotate: 5, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Zap className="w-7 h-7 text-white" />
            </motion.div>
            <div className="hidden sm:block">
              <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:via-purple-300 group-hover:to-pink-300 transition-all duration-300">
                Zion Tech Group
              </div>
              <div className="text-xs text-gray-400 group-hover:text-cyan-300 transition-colors">
                Revolutionary Technology Solutions
              </div>
            </div>
          </Link>

            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <motion.button
                  className="flex items-center space-x-2 px-4 py-3 text-gray-300 hover:text-white transition-all duration-300 rounded-xl hover:bg-gray-800/50 hover:shadow-lg hover:shadow-cyan-500/20"
                    {item.icon}
                  </div>
                  <span className="font-medium">{item.name}</span>
                  <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                      <div className="p-4">
                        <div className="flex items-center space-x-3 mb-4">
                          <div className={`p-3 rounded-xl bg-gradient-to-br ${item.color} shadow-lg`}>
                            {item.icon}
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-white">{item.name}</h3>
                            <p className="text-sm text-gray-400">{item.description}</p>
                          </div>
                        </div>
                              className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-800/50 transition-all duration-200 group"
                            >
                              <span className="text-2xl">{child.icon}</span>
                              <div className="flex-1">
                                <div className="font-medium text-white group-hover:text-cyan-300 transition-colors">
                                  {child.name}
                                </div>
                                <div className="text-sm text-gray-400">{child.description}</div>
                              </div>
                              <div className="text-right">
                                <div className="text-sm font-medium text-cyan-400">{child.price}</div>
                                <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors" />
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Right Side */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
                href="/contact"
                className="hidden lg:inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-xl shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/40 transition-all duration-300"
              >
                <Rocket className="w-4 h-4" />
                <span>Get Started</span>
              </Link>
            </motion.div>

            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
                            {item.icon}
                          </div>
                          <div>
                            <div className="font-medium text-white">{item.name}</div>
                            <div className="text-sm text-gray-400">{item.description}</div>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Links & Contact */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                    <div className="space-y-2">
                      {quickLinks.map((link) => (
                        <Link
                    <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
                    <div className="space-y-3">
                      <a 
                        href={`tel:${contactInfo.mobile}`}
                        className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-800/50 transition-all duration-200"
                      >
                        <Phone className="w-4 h-4 text-cyan-400" />
                        <span className="text-white">{contactInfo.mobile}</span>
                      </a>
                        href={`mailto:${contactInfo.email}`}
                        className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-800/50 transition-all duration-200"
                      >
                        <Mail className="w-4 h-4 text-cyan-400" />
                        <span className="text-white">{contactInfo.email}</span>
                      </a>
                      <div className="flex items-center space-x-3 p-3 rounded-xl">
                        <MapPin className="w-4 h-4 text-cyan-400" />
                        <span className="text-white text-sm">{contactInfo.address}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
