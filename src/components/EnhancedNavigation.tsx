
    const handleScroll = () => {;
      setIsScrolled(window.scrollY > 10) ;
    };

    window.addEventListener('scroll', handleScroll) ;
    return () => window.removeEventListener('scroll', handleScroll) ;
  }, []) ;

  useEffect(() => {
  // TODO: Add dependencies if needed

  return () => {
    // Cleanup function
  };
}, []);, []);
    setIsOpen(false) ;
    setActiveDropdown(null) ;
  }, [location]) ;

  const handleThemeChange = useCallback((newTheme: any'light' | 'dark' | 'system') => {;
    setTheme(newTheme) ;
    onThemeChange?.(newTheme) ;

    const root = document.documentElement;
    root.classList.remove('light', 'dark') ;

    if(newTheme = == 'system') {;
      const systemTheme = window.matchMedia(' (prefers - color - scheme: dark) ') .matches ? 'dark' : 'light';
      root.classList.add(systemTheme) ;
    } else {
      root.classList.add(newTheme) ;
    }

    localStorage.setItem('zion - theme', newTheme) ;
  }, [onThemeChange]) ;

      root.classList.add(newTheme)}
    '
    localStorage.setItem('zion-theme', newTheme)}, [onThemeChange])}};

  return ()    <nav className = {`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${  const contactInfo = {
    phone: "+1 302 464 0950",
    email: "kleber@ziontechgroup.com",
    website: "https://ziontechgroup.com",
    address: "364 E Main St STE 1008 Middletown DE 19709"
  };

  return (<nav className = {`fixed top - 0 left - 0 right - 0 z - 50 transition - all duration - 300 ${isScrolled
        ? 'bg-white / 95 dark:bg-slate - 900 / 95 backdrop - blur - md shadow-lg'
        : 'bg-transparent'
    } ${className}`}>
      <div  className="max - w-7xl mx - auto px-4 sm:px-6 lg:px-8">
        <div  className="flex justify - between items - center h-16">
          {/* Logo */}
          <div  className="flex - shrink -0">
            <Link to="/" className="flex items - center space - x-2">
              <div  className="w-8 h-8 bg-gradient - to - r from - blue - 600 to - purple - 600 rounded-lg flex items - center justify -center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font - bold text-gray - 900 dark:text-white">                Zion Tech Group
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}"
          <div className="hidden lg: anyflex items-center space-x-8">
            {navigationItems.map((item)  => ("
              <div key={item.label} className="relative group">
                {item.children ? (
                  <button
                    onClick={() => toggleDropdown(item.label)}"
                    className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <span>{item.label}</span>"
                    <ChevronDown className="w-4 h-4"  />                  </button>
                ) : (
                  <Link
                    to={item.href}"
                    className="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {item.label}
                  </Link>) }

                {/* Dropdown Menu */}
                {item.children && (<AnimatePresence>
                    {activeDropdown === item.label && (<motion.div
                        initial = {

  { opacity: 0,
  y: -10

}}
                        animate = {

  { opacity: 1,
  y: 0

}}
                        exit = {

  { opacity: 0,
  y: -10

}}
                        transition={{ duration: 0.2 }}"
                        className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-md border border-slate-700/50 rounded-xl shadow-2xl py-2 z-50"
                      >"
                        <div className="px-4 py-2 border-b border-slate-700/50">"
                          <h3 className="text-sm font-semibold text-cyan-400 flex items-center space-x-2">
                            {item.icon}
                            <span>{item.label}</span>
                          </h3>
                        </div>"
                        <div className="max-h-96 overflow-y-auto">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              to={child.href}"
                              className="flex items-center space-x-3 px-4 py-3 text-slate-300 hover:text-white hover:bg-slate-700/50 transition-colors duration-200 group"
                            >"
                              <div className="w-2 h-2 bg-slate-500 rounded-full group-hover:bg-cyan-400 transition-colors duration-200"></div>"
                              <span className="text-sm font-medium">{child.label}</span>
                            </Link>
                          ))}
                        </div>
                      </motion.div>) }
                  </AnimatePresence>) }
              </div>) ) }
          </div>

          {/* Right Side Actions */}
          <div  className="hidden lg:flex items - center space - x-4">
            {/* Theme Toggle */}
            <div  className="flex items - center space - x-2 bg-gray - 100 dark:bg-slate - 800 rounded-lg p -1">
              <button     onClick={ () => handleThemeChange('light') }
                className={`p - 2 rounded-md transition - colors ${theme === 'light'
                    ? 'bg-white dark:bg-slate - 700 text-blue - 600 shadow-sm'
                    : 'text-gray - 500 dark:text-gray - 400 hover:text-gray - 700 dark:hover:text-gray - 300'
                }`}
              >
                <Sun className="w-4 h-4" />
              </button>
              <button     onClick={ () => handleThemeChange('dark') }
                className={`p - 2 rounded-md transition - colors ${theme === 'dark'
                    ? 'bg-white dark:bg-slate - 700 text-blue - 600 shadow-sm'
                    : 'text-gray - 500 dark:text-gray - 400 hover:text-gray - 700 dark:hover:text-gray - 300'
                }`}
              >
                <Moon className="w-4 h-4" />
              </button>
              <button     onClick={ () => handleThemeChange('system') }
                className={`p - 2 rounded-md transition - colors ${theme === 'system'
                    ? 'bg-white dark:bg-slate - 700 text-blue - 600 shadow-sm'
                    : 'text-gray - 500 dark:text-gray - 400 hover:text-gray - 700 dark:hover:text-gray - 300'                }`}
              >"
                <Monitor className="w-4 h-4"  />              </button>
            </div>

            {/* Contact Button */}
            <Link"
              to="/contact"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >"
              <Phone className="w-4 h-4 mr-2"  />              Get Quote
            </Link>
          </div>

          {/* Mobile menu button */}"
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
            >"
              {isOpen ? <X className="w-6 h-6"  /> : <Menu className="w-6 h-6"  />}            </button>
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
                    transition={{ duration: 0.3 }}"
                    className="lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-700/50"
                  >"
                    <div className="px-4 py-6 space-y-4">
                      {navigationItems.map((item) => (
                        <div key={item.label}>
                          {item.children ? (
                            <div>
                              <button
                                onClick={() => toggleDropdown(item.label)}"
                                className="flex items-center justify-between w-full text-left text-slate-300 hover:text-white px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900"
                                aria-expanded={activeDropdown === item.label}"
                                aria-haspopup="true"
                              >"
                                <div className="flex items-center space-x-2">
                                  {item.icon}
                                  <span>{item.label}</span>
                                </div>
                                <ChevronDown className={`w-5 h-5 transition - transform duration - 200 ${activeDropdown === item.label ? 'rotate - 180' : ''
                                }`} />
                              </button>
                              {activeDropdown === item.label && (<motion.div
                                  initial={{ opacity: 0, y: -10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, y: -10 }}
                                  transition={{ duration: 0.2 }}"
                                  className="ml-4 mt-2 space-y-2 border-l border-slate-700/50 pl-4"
                                >
                                  {item.children.map((child) => (<Link
                                      key={child.href}
                                      to={child.href}"
                                      className="block text-slate-400 hover:text-white px-3 py-2 rounded-md text-sm transition-colors duration-200 flex items-center space-x-2"
                                    >"
                                      <div className="w-1.5 h-1.5 bg-slate-500 rounded-full"></div>
                                      <span>{child.label}</span>
                                    </Link>
                                  ))}
                                </motion.div>
                              )}
                            </div>
                          ) : (
                            <Link
                              to={item.href}"
                              className="block text-slate-300 hover:text-white px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900"
                            >
                              {item.label}
                            </Link>) }
                        </div>) ) }

              {/* Mobile Actions */}"
              <div className="pt-4 border-t border-slate-700/50 space-y-3">"
                <div className="flex items-center space-x-4 text-slate-400">"
                  <Phone className="w-4 h-4"  />
                  <span>+1(555) 123-4567</span>
                </div>"
                <div className="flex items-center space-x-4 text-slate-400">"
                  <Mail className="w-4 h-4"  />
                  <span>info@ziontechgroup.com</span>
                </div>"
                <div className="flex items-center space-x-4 text-slate-400">"
                  <MapPin className="w-4 h-4"  />                  <span>123 Tech Street, Digital City</span>
                </div>
                <Link"
                  to="/contact"
                  className="mt-4 inline-flex items-center justify-center w-full px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                >"
                  <Phone className="w-4 h-4 mr-2"  />                  Get Quote
                </Link>
              </div>
            </div>
          </motion.div>) }
      </AnimatePresence>
    </nav>
  )};'"`

;,"});,})";

