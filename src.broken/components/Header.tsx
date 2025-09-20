
 * Header function
 * @param {*} params - Function parameters
 * @returns {*} Function return value
 */
function Header({ className }: HeaderProps) {

  // Add your props here

    
    // You can add theme switching logic here
  }}};

    // Add search logic here'
    // console.log('Searching for:', searchQuery)};

  return ()
    <header 
      className={cn()
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled "
          ? "bg-black/95 backdrop-blur-md border-b border-gray-800/50 shadow-lg"
          : "bg-transparent",
        className
      )}
    >"
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">"
        <div className="flex items-center justify-between h-16 lg:h-20">
          
          {/* Logo */}"
          <Link to="/" className="flex items-center space-x-3 group">"
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">"
              <Zap className="w-6 h-6 lg:w-7 lg:h-7 text-white"  />
            </div>"
            <div className="hidden sm:block">"
              <h1 className="text-xl lg:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
              onClick={() => setIsSearchOpen(!isSearchOpen)}"
              className="p-2 text-gray-300 hover:text-blue-400 transition-colors"
              
            >"
              <Search className="w-5 h-5"  />
              onClick={toggleTheme}"
              className="p-2 text-gray-300 hover:text-blue-400 transition-colors"
              
            >'"
              {theme === 'dark' ? <Sun className="w-5 h-5"  /> : <Moon className="w-5 h-5"  />}
              <AnimatePresence>
                {isUserMenuOpen && (<motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}"
                    className="absolute right-0 mt-2 w-64 bg-gray-900 border border-gray-700 rounded-lg shadow-xl z-50"
                  >"
                    <div className="p-4 border-b border-gray-700">"
                      <div className="flex items-center space-x-3">"
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">"
                          <User className="w-5 h-5 text-white"  />
                        </div>
                        <div>"
                          <p className="text-white font-medium">John Doe</p>"
                          <p className="text-gray-400 text-sm">john@ziontech.com</p>
                        </div>
                      </div>
                    </div>"
                    <div className="py-2">
                      <Link"
                        to="/profile"
                        className="flex items-center space-x-3 px-4 py-2 text-gray-300 hover:text-blue-400 hover:bg-gray-800 transition-colors"
                        onClick={() => setIsUserMenuOpen(false)}
                      >"
                        <User className="w-4 h-4"  />
                        <span>Profile</span>
                      </Link>
                      <Link"
                        to="/dashboard"
                        className="flex items-center space-x-3 px-4 py-2 text-gray-300 hover:text-blue-400 hover:bg-gray-800 transition-colors"
                        onClick={() => setIsUserMenuOpen(false)}
                      >"
                        <BarChart3 className="w-4 h-4" />
                        <span>Dashboard</span>
                      </Link>
                      <Link"
                        to="/settings"
                        className="flex items-center space-x-3 px-4 py-2 text-gray-300 hover:text-blue-400 hover:bg-gray-800 transition-colors"
                        onClick={() => setIsUserMenuOpen(false)}
                      >"
                        <Settings className="w-4 h-4"  />
                        <span>Settings</span>
                      </Link>"
                      <div className="border-t border-gray-700 my-2"></div>
                      <button"
                        className="flex items-center space-x-3 px-4 py-2 text-gray-300 hover:text-red-400 hover:bg-gray-800 transition-colors w-full text-left"
                        onClick={() => {
                          // Add logout logic here
                          setIsUserMenuOpen(false) }}
                      >"
                        <LogOut className="w-4 h-4"  />
                        <span>Logout</span>
                      </button>
                    </div>
                  </motion.div>) }
              </AnimatePresence>
              onClick={toggleMobileMenu}"
              className="lg:hidden p-2 text-gray-300 hover:text-blue-400 transition-colors"
              
            >"
              {isMobileMenuOpen ? <X className="w-6 h-6"  /> : <Menu className="w-6 h-6"  />}
      {/* Enhanced Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}"
            className="lg:hidden bg-gray-900 border-t border-gray-700"
          >"
            <div className="px-4 py-6 space-y-6">
              
              {/* Mobile Navigation Links */}"
              <div className="space-y-4">
                <Link"
                  to="/"
                  className="block text-white hover:text-blue-400 transition-colors text-lg font-medium"
                  onClick={closeMobileMenu}
                >
                  Home
                </Link>
                "
                <div className="space-y-2">"
                  <h3 className="text-blue-400 font-semibold text-sm uppercase tracking-wider">Services</h3>"
                  <div className="pl-4 space-y-2">
                    <Link"
                      to="/ai-services"
                      className="block text-gray-300 hover:text-blue-400 transition-colors"
                      onClick={closeMobileMenu}
                    >
                      AI Services
                    </Link>
                    <Link"
                      to="/it-services"
                      className="block text-gray-300 hover:text-blue-400 transition-colors"
                      onClick={closeMobileMenu}
                    >
                      IT Services
                    </Link>
                    <Link"
                      to="/micro-saas"
                      className="block text-gray-300 hover:text-blue-400 transition-colors"
                      onClick={closeMobileMenu}
                    >
                      Micro SAAS
                    </Link>
                    <Link"
                      to="/cloud-devops"
                      className="block text-gray-300 hover:text-blue-400 transition-colors"
                      onClick={closeMobileMenu}
                    >
                      Cloud & DevOps
                    </Link>
                    <Link"
                      to="/cybersecurity"
                      className="block text-gray-300 hover:text-blue-400 transition-colors"
                      onClick={closeMobileMenu}
                    >
                      Cybersecurity
                    </Link>
                  </div>
                </div>
"
                <div className="space-y-2">"
                  <h3 className="text-blue-400 font-semibold text-sm uppercase tracking-wider">Solutions</h3>"
                  <div className="pl-4 space-y-2">
                    <Link"
                      to="/enterprise"
                      className="block text-gray-300 hover:text-blue-400 transition-colors"
                      onClick={closeMobileMenu}
                    >
                      Enterprise
                    </Link>
                    <Link"
                      to="/healthcare"
                      className="block text-gray-300 hover:text-blue-400 transition-colors"
                      onClick={closeMobileMenu}
                    >
                      Healthcare
                    </Link>
                    <Link"
                      to="/financial"
                      className="block text-gray-300 hover:text-blue-400 transition-colors"
                      onClick={closeMobileMenu}
                    >
                      Financial
                    </Link>
                    <Link"
                      to="/government"
                      className="block text-gray-300 hover:text-blue-400 transition-colors"
                      onClick={closeMobileMenu}
                    >
                      Government
                    </Link>
                  </div>
                </div>
"
                <div className="space-y-2">"
                  <h3 className="text-blue-400 font-semibold text-sm uppercase tracking-wider">Company</h3>"
                  <div className="pl-4 space-y-2">
                    <Link"
                      to="/about"
                      className="block text-gray-300 hover:text-blue-400 transition-colors"
                      onClick={closeMobileMenu}
                    >
                      About Us
                    </Link>
                    <Link"
                      to="/contact"
                      className="block text-gray-300 hover:text-blue-400 transition-colors"
                      onClick={closeMobileMenu}
                    >
                      Contact
                    </Link>
                    <Link"
                      to="/careers"
                      className="block text-gray-300 hover:text-blue-400 transition-colors"
                      onClick={closeMobileMenu}
                    >
                      Careers
                    </Link>
                    <Link"
                      to="/blog"
                      className="block text-gray-300 hover:text-blue-400 transition-colors"
                      onClick={closeMobileMenu}
                    >
                      Blog
                    </Link>
                  </div>
                </div>
"
                <div className="space-y-2">"
                  <h3 className="text-blue-400 font-semibold text-sm uppercase tracking-wider">Support</h3>"
                  <div className="pl-4 space-y-2">
                    <Link"
                      to="/help"
                      className="block text-gray-300 hover:text-blue-400 transition-colors"
                      onClick={closeMobileMenu}
                    >
                      Help Center
                    </Link>
                    <Link"
                      to="/documentation"
                      className="block text-gray-300 hover:text-blue-400 transition-colors"
                      onClick={closeMobileMenu}
                    >
                      Documentation
                    </Link>
                    <Link"
                      to="/api"
                      className="block text-gray-300 hover:text-blue-400 transition-colors"
                      onClick={closeMobileMenu}
                    >
                      API Reference
                    </Link>
                  </div>
                </div>
              </div>

              {/* Contact Info */}"
              <div className="pt-4 border-t border-gray-700 space-y-3">"
                <div className="flex items-center space-x-3 text-gray-300">"
                  <Phone className="w-4 h-4"  />"
                  <span className="text-sm">+1(555) 123-4567</span>
                </div>"
                <div className="flex items-center space-x-3 text-gray-300">"
                  <Mail className="w-4 h-4"  />"
                  <span className="text-sm">contact@ziontechgroup.com</span>
                </div>"
                <div className="flex items-center space-x-3 text-gray-300">"
                  <MapPin className="w-4 h-4"  />"
                  <span className="text-sm">San Francisco, CA</span>
                </div>
              </div>

              {/* Mobile CTA */}"
              <div className="pt-4 border-t border-gray-700 space-y-3">
                <Link"
                  to="/contact"
                  className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-3 px-6 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                  onClick={closeMobileMenu}
                >
                  Get Started
                </Link>
                <Link"
                  to="/demo"
                  className="block w-full border border-gray-600 text-white text-center py-3 px-6 rounded-lg font-medium hover:bg-gray-800 transition-all duration-300"
                  onClick={closeMobileMenu}
                >
                  Request Demo
                </Link>
              </div>
            </div>
          </motion.div>) }
      </AnimatePresence>
    </header>) }
'"
