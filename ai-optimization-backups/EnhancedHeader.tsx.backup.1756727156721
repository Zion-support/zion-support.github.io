import {  import { innovativeServices2025 } from '../data/innovativeServices2025';
import { motion, AnimatePresence  } from 'framer-motion';

 params - Function parameters
 * @returns {*} Function return value
 */
function EnhancedHeader () {export function EnhancedHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  
  useEffect(() => {
    
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll)}, []);

  const handleSearch = async(e: React.FormEvent) => {

    e.preventDefault();    if(searchQuery.trim()) {

      setIsSearching(true);
      try {
        await new Promise(resolve => setTimeout (resolve, 1000) ) ;
        window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim () ) }`} finally {

        setIsSearching(false)}    }
  };

  // Enhanced navigation with better organization
  
  // Enhanced services by category with better organization
  
  // Service categories for mega menu
  
  return ()    <>
      {/* Matrix Rain Background */}
      <div  className="matrix -rain"></div>
      {/* Enhanced Header */}
      <motion.header`
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled'
            ? 'bg-black/95 backdrop-blur-xl border-b border-cyan-500/30 shadow-2xl''
            : 'bg-transparent'`
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >"
        <div className="container mx-auto px-4">"
          <div className="flex items-center justify-between h-20">
            {/* Enhanced Logo */}"
            <Link to="/" className="flex items-center space-x-3 group">
              <motion.div"
                className="relative"
                whileHover={{ scale: 1.05, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >"
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/50">"
                  <Zap className="w-7 h-7 text-white"  />
                </div>"                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg" />
              </motion.div>"
              <div className="flex flex-col">"
                <span className="text-3xl font-bold font-orbitron bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Zion Tech
                </span>"
                <span className="text-xs text-cyan-400 font-medium font-rajdhani tracking-wider">
                  Innovation Group
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}"
            <nav className="hidden xl:flex items-center space-x-8">
              {navigation.slice(0, 6).map(item => (
                <Link
                  key={item.name}
                  to={item.href}`
                  className={`nav-link font-medium transition-all duration-300 ${item.current'
                      ? 'text-cyan-400 border-b-2 border-cyan-400''
                      : 'text-gray-300 hover:text-cyan-400'`
                  }`}
                >
                  {item.name}
                </Link>) ) }

              {/* Enhanced Services Mega Menu */}"
              <div className="relative group">
                <button"
                  className="nav-link flex items-center space-x-2 font-medium text-gray-300 hover:text-cyan-400 transition-all duration-300"
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                >
                  <span>Services</span>"
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180 duration-300"  />                </button>

                <AnimatePresence>
                  {servicesDropdownOpen && (
                    <motion.div"
                      className="absolute top-full left-0 mt-4 w-[1200px] bg-black/95 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-8 shadow-2xl shadow-cyan-500/20"
                      initial={{ opacity: 0, y: -20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -20, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      onMouseEnter={ () => setServicesDropdownOpen(true) }
                      onMouseLeave={ () => setServicesDropdownOpen(false) }
                    >
                      {/* Featured Services */}"
                      <div className="mb-8">"
                        <h3 className="text-xl font-semibold text-cyan-400 mb-6 font-orbitron">
                          Featured Services
                        </h3>"
                        <div className="grid grid-cols-3 gap-6">
                          {services
                            .filter(s => s.featured)
                            .map(service => (
                              <Link
                                key={service.name}
                                to={service.href}"
                                className="group p-6 rounded-xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:bg-gray-800/70"
                              >"
                                <div className="flex items-center space-x-3 mb-3">"
                                  <service.icon className="w-6 h-6 text-cyan-400" />"
                                  <span className="text-lg font-medium text-white group-hover:text-cyan-400 transition-colors">
                                    {service.name}
                                  </span>
                                </div>"
                                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors mb-3">
                                  {service.description}
                                </p>
                                {service.badge && (
                                  <span`
                                    className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${service.badge === 'New''
                                        ? 'bg-green-500/20 text-green-400''
                                        : service.badge === 'Popular''
                                          ? 'bg-blue-500/20 text-blue-400''
                                          : service.badge === 'Featured''
                                            ? 'bg-purple-500/20 text-purple-400''
                                            : 'bg-cyan-500/20 text-cyan-400'`
                                    }`}
                                  >
                                    {service.badge}
                                  </span>
                                )}
                              </Link>
                            ))}
                        </div>
                      </div>

                      {/* Service Categories Grid */}"
                      <div className="grid grid-cols-2 gap-8">
                        {serviceCategories.map(category => (
                          <div key={category.name}>"
                            <div className="flex items-center space-x-3 mb-4">
                              <div`
                                className={`w-8 h-8 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center`}
                              >"
                                <category.icon className="w-5 h-5 text-white" />
                              </div>"
                              <h4 className="text-lg font-semibold text-gray-300 font-rajdhani">
                                {category.name}
                              </h4>
                            </div>"
                            <div className="space-y-2">
                              {category.services.slice(0, 3).map(service => (
                                <Link
                                  key={service.name}
                                  to={service.href}"
                                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800/50 transition-colors group"
                                >"
                                  <service.icon className="w-4 h-4 text-cyan-400 group-hover:text-cyan-300 transition-colors" />"
                                  <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                                    {service.name}
                                  </span>
                                  {service.badge && (
                                    <span`
                                      className={`ml-auto px-2 py-1 text-xs font-medium rounded-full ${service.badge === 'New''
                                          ? 'bg-green-500/20 text-green-400''
                                          : service.badge === 'Popular''
                                            ? 'bg-blue-500/20 text-blue-400''
                                            : 'bg-cyan-500/20 text-cyan-400'`
                                      }`}
                                    >
                                      {service.badge}
                                    </span>
                                  )}
                                </Link>
                              ))}
                              {category.services.length > 3 && (
                                <Link
                                  to={category.href}"
                                  className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium group"
                                >
                                  View All {category.name}"
                                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"  />                                </Link>
                              )}
                            </div>
                          </div>) ) }
                      </div>

                      {/* View All Services Link */}"
                      <div className="mt-8 pt-6 border-t border-gray-700">"
                        <div className="flex items-center justify-between">
                          <Link"
                            to="/innovative-services-showcase-2025"
                            className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors font-medium group text-lg"
                          >
                            View All Innovative Services 2025"
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"  />
                          </Link>"                          <div className="flex items-center space-x-4 text-sm text-gray-400">
                            <span>50+ Services Available</span>
                            <span>•</span>
                            <span > Proven ROI</span>
                            <span>•</span>
                            <span > 24 / 7 Support</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>) }
                </AnimatePresence>
              </div>

              {/* Additional Navigation Items */}
              {navigation.slice(6, 10).map(item => (
                <Link
                  key={item.name}
                  to={item.href}`
                  className={`nav-link font-medium transition-all duration-300 ${item.current'
                      ? 'text-cyan-400 border-b-2 border-cyan-400''
                      : 'text-gray-300 hover:text-cyan-400'`
                  }`}
                >
                  {item.name}
                </Link>) ) }
            </nav>

            {/* Right Side Actions */}"
            <div className="hidden xl:flex items-center space-x-6">
              {/* Enhanced Search */}"
              <form onSubmit={handleSearch} className="relative">"
                <div className="relative">"
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"  />
                  <input"
                    type="text"
                    placeholder="Search services..."                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}"
                    className="w-64 pl-10 pr-4 py-2 bg-black/30 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                  />
                  {isSearching && ("
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">"
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-cyan-400"></div>
                    </div>
                  )}
                </div>
              </form>

              {/* Contact Button */}
              <a"
                href="tel:+13024640950"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 group"
              >"
                <Phone className="w-4 h-4 group-hover:scale-110 transition-transform"  />
                <span>Call Now</span>
              </a>

              {/* User Menu */}"
              <div className="relative group">"
                <button className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">"
                  <User className="w-5 h-5"  />"
                  <span className="hidden lg:block">Account</span>"
                  <ChevronDown className="w-4 h-4"  />
                </button>"
                <div className="absolute top-full right-0 mt-2 w-48 bg-black/95 backdrop-blur-xl border border-cyan-500/30 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">"                  <div className="py-2">
                    <a"
                      href="/login"
                      className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors"
                    >
                      Sign In
                    </a>
                    <a"
                      href="/contact"
                      className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors"
                    >
                      Contact Sales
                    </a>
                    <a"
                      href="/help"
                      className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors"
                    >
                      Help Center
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}"
              className="xl:hidden p-2 text-gray-300 hover:text-white transition-colors"
            >
              {mobileMenuOpen ? ("
                <X className="w-6 h-6"  />
              ) : ("
                <Menu className="w-6 h-6"  />
              )}            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div"
              className="xl:hidden bg-black/95 backdrop-blur-xl border-t border-cyan-500/30"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >"
              <div className="container mx-auto px-4 py-6">"
                <div className="space-y-4">
                  {navigation.map(item => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setMobileMenuOpen(false)}`
                      className={`block py-2 text-lg font-medium transition-colors ${item.current'
                          ? 'text-cyan-400''
                          : 'text-gray-300 hover:text-cyan-400'`
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}

                  {/* Mobile Services Section */}"
                  <div className="pt-4 border-t border-gray-700">"
                    <h3 className="text-lg font-semibold text-cyan-400 mb-4">
                      Services
                    </h3>"
                    <div className="grid grid-cols-1 gap-3">
                      {serviceCategories.slice(0, 6).map(category => (
                        <Link
                          key={category.name}
                          to={category.href}
                          onClick={() => setMobileMenuOpen(false)}"
                          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800/50 transition-colors"
                        >
                          <div`
                            className={`w-8 h-8 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center`}
                          >"
                            <category.icon className="w-5 h-5 text-white" />
                          </div>"
                          <span className="text-gray-300">{category.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Mobile Contact Section */}"
                  <div className="pt-4 border-t border-gray-700">"
                    <h3 className="text-lg font-semibold text-cyan-400 mb-4">
                      Contact
                    </h3>"
                    <div className="space-y-3">
                      <a"
                        href="tel:+13024640950"
                        className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors"
                      >"
                        <Phone className="w-5 h-5"  />                        <span>+1 302 464 0950</span>
                      </a>
                      <a"
                        href="mailto:kleber@ziontechgroup.com"
                        className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors"
                      >"
                        <Mail className="w-5 h-5"  />                        <span>kleber@ziontechgroup.com</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>) }
        </AnimatePresence>
      </motion.header>
    </>) }
export default EnhancedHeader;
'"`