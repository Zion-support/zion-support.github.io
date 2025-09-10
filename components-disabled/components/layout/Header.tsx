          {/* Mobile Menu Button */}
          <div className=""lg":hidden">"
            <button,
onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 "hover":text-blue-600 transition-colors duration-200""


            </svg>
          </button>
        </div>
      </div>
    </header>
  )
},




const Header = () => {
  }
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const router = useRouter();

const navigation = [;
    {
      }
      "name": 'Services','
      "href": '/services','
      "hasDropdown": true,
      "children": [
        { "name": 'AI Services', "href": '/ai-services', "icon": Brain },'
        { "name": 'IT Services', "href": '/it-services', "icon": Server },'
        { "name": 'Micro SaaS', "href": '/micro-saas', "icon": Zap },'
        { "name": 'Security', "href": '/security', "icon": Shield },'
        { "name": 'Cloud Solutions', "href": '/cloud-solutions', "icon": Cloud },'
        { "name": 'Database Solutions', "href": '/database-solutions', "icon": Database }'
      ]
    },
    {
      }
      "name": 'Solutions','
      "href": '/solutions','
      "hasDropdown": true,
      "children": [
        { "name": 'Enterprise Solutions', "href": '/enterprise-solutions', "icon": Building2 },'
        { "name": 'Startup Solutions', "href": '/startup-solutions', "icon": Rocket },'
        { "name": 'Digital Transformation', "href": '/solutions/digital-transformation', "icon": Workflow },'
        { "name": 'Cloud Migration', "href": '/solutions/cloud-migration', "icon": Cloud },'
        { "name": 'AI Implementation', "href": '/solutions/ai-implementation', "icon": Brain },'
        { "name": 'Cybersecurity', "href": '/solutions/cybersecurity', "icon": Shield }'
      ]
    },
    {
      }
      "name": 'Industries','
      "href": '/industries','
      "hasDropdown": true,
      "children": [
        { "name": 'Healthcare', "href": '/industries/healthcare', "icon": Heart },'
        { "name": 'Finance', "href": '/industries/finance', "icon": DollarSign },'
        { "name": 'Manufacturing', "href": '/industries/manufacturing', "icon": Factory },'
        { "name": 'Retail', "href": '/industries/retail', "icon": ShoppingCart },'
        { "name": 'Education', "href": '/industries/education', "icon": BookOpen },'
        { "name": 'Government', "href": '/industries/government', "icon": Building }'
      ]
    },
    { "name": 'About', "href": '/about' },'
    { "name": 'Contact', "href": '/contact' }'
  ];

  const isActive = ("href": string) => router.pathname === href;

return (;
    <header className="bg-white shadow-lg sticky top-0 z-50">"
      {/* Top Contact Bar */}
      <div className="bg-gray-900 text-white py-2">"
        <div className="max-w-7xl mx-auto px-4 "sm":px-6 "lg":px-8">"
          <div className="flex justify-between items-center text-sm">"
            <div className="flex items-center space-x-6">"
              <div className="flex items-center">"
                <Phone className="h-4 w-4 mr-2" />"
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">"
                <Mail className="h-4 w-4 mr-2" />"
                <span>info@ziontechgroup.com</span>
              </div>
            </div>
            <div className="hidden "md":flex items-center space-x-4">"
              <span>Trusted by 500+ companies</span>
              <div className="flex items-center">"
                <Star className="h-4 w-4 text-yellow-400 mr-1" />"
                <span>4.9/5 Rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto px-4 "sm":px-6 "lg":px-8">"
        <div className="flex justify-between items-center h-16">"
          {/* Logo */}
          <div className="flex items-center">"
            <Link href="/" className="flex items-center">"
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">"
                <span className="text-white font-bold text-xl">Z</span>"
              </div>
              <span className="ml-3 text-2xl font-bold text-gray-900">Zion Tech Group</span>"
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden "lg":flex items-center space-x-8">"
            {navigation.map((item) => (
              <div key={item.name} className="relative">"
                {item.hasDropdown ? (
                  <div
}
className="flex items-center space-x-1 text-gray-700 "hover":text-blue-600 cursor-pointer transition-colors duration-200""
                    onMouseEnter={() => {
                      }
                      if (item.name === 'Services') setIsServicesOpen(true);'
                      if (item.name === 'Solutions') setIsSolutionsOpen(true);'
                    }
                    onMouseLeave={() => {
                      }
                      if (item.name === 'Services') setIsServicesOpen(false);'
                      if (item.name === 'Solutions') setIsSolutionsOpen(false);'
                    }
                  >
                    <span className="font-medium">{item.name}</span>"
                    <ChevronDown className="h-4 w-4" />"
                  </div>
                ) : (
                  <Link,
href={item.href}
                    className={`font-medium transition-colors duration-200 ${`                      }
                      isActive(item.href) ? 'text-blue-600' : 'text-gray-700 "hover":text-blue-600''
                    }`}`                  >
                    {item.name}
                  </Link>
                )}
                {/* Services Dropdown */}
                {item.name === 'Services' && ('
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
}
initial={ "opacity": 0, "y": 10 }
                        animate={ "opacity": 1, "y": 0 }
                        exit={ "opacity": 0, "y": 10 }
                        className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-4""
                        onMouseEnter={() => setIsServicesOpen(true)}
                        onMouseLeave={() => setIsServicesOpen(false)}
                      >
                        <div className="grid grid-cols-2 gap-2">"
                          {item.children?.map((child) => (
                            <Link
}
key={child.name}
                              href={child.href}
                              className="flex items-center px-4 py-3 text-gray-700 "hover":bg-gray-50 "hover":text-blue-600 transition-colors duration-200""
                            >
                              <child.icon className="h-5 w-5 mr-3 text-blue-500" />"
                              <span className="text-sm font-medium">{child.name}</span>"
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
                {/* Solutions Dropdown */}
                {item.name === 'Solutions' && ('
                  <AnimatePresence>
                    {isSolutionsOpen && (
                      <motion.div
}
initial={ "opacity": 0, "y": 10 }
                        animate={ "opacity": 1, "y": 0 }
                        exit={ "opacity": 0, "y": 10 }
                        className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-4""
                        onMouseEnter={() => setIsSolutionsOpen(true)}
                        onMouseLeave={() => setIsSolutionsOpen(false)}
                      >
                        <div className="grid grid-cols-2 gap-2">"
                          {item.children?.map((child) => (
                            <Link
}
key={child.name}
                              href={child.href}
                              className="flex items-center px-4 py-3 text-gray-700 "hover":bg-gray-50 "hover":text-blue-600 transition-colors duration-200""
                            >
                              <child.icon className="h-5 w-5 mr-3 text-blue-500" />"
                              <span className="text-sm font-medium">{child.name}</span>"
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden "lg":flex items-center space-x-4">"
            <Link,
href="/contact""
              className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg "hover":from-blue-700 "hover":to-purple-700 transition-all duration-300 shadow-lg "hover":shadow-xl""
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />"
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className=""lg":hidden">"
            <button,
onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 "hover":text-blue-600 transition-colors duration-200""
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}"
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {/* Mobile Navigation */}
        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
}
initial={ "opacity": 0, "height": 0 }
              animate={ "opacity": 1, "height": 'auto' }'
              exit={ "opacity": 0, "height": 0 }
              className=""lg":hidden border-t border-gray-200""
            >
