
  const [isMenuOpen, setIsMenuOpen] = useState(false),
  const [isServicesOpen, setIsServicesOpen] = useState(false),
  const [isScrolled, setIsScrolled] = useState(false),
  const router = useRouter(),

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10),
    },


    }
  },


          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <span className={`text-2xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              className={`font-medium transition-colors duration-200 ${
                isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-300'
              }`}
            >
              Home
            </Link>

            <div className="relative">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className={`flex items-center space-x-1 font-medium transition-colors duration-200 ${
                  isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-300'
                }`}
              >
                <span>Services</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${
                  isServicesOpen ? 'rotate-180' : ''
                }`} />
              </button>

              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                  >
                    {servicesDropdown.map((service) => (
                      <button
                        key={service.title}
                        onClick={() => handleServiceClick(service.href)}
                        className="w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-start space-x-3">
                          <service.icon className="h-5 w-5 text-blue-600 mt-0.5" />
                          <div>
                            <div className="font-medium text-gray-900">{service.title}</div>
                            <div className="text-sm text-gray-500">{service.description}</div>
                          </div>
                        </div>
                      </button>
                    ))}

                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/about"
              className={`font-medium transition-colors duration-200 ${
                isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-300'
              }`}
            >
              About
            </Link>


      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}

                >
                  <span>Services</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${
                    isServicesOpen ? 'rotate-180' : ''
                  }`} />
                </button>
                
                {isServicesOpen && (
                  <div className="mt-2 space-y-1">
                    {servicesDropdown.map((service) => (
                      <button
                        key={service.title}
                        onClick={() => handleServiceClick(service.href)}
                        className="block w-full text-left px-6 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                      >
                        {service.title}
                      </button>
                    ))}
                  </div>
                )}
              </div>


    </header>
  ),
},

export default Header;