
    { name: 'Contact', href: '/contact' },

    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm: p x-6 lg: p x-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white"  />

            </div>
            <span className="text-xl font-bold text-white">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg: flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div
                    className="flex items-center space-x-1 text-gray-300 hover: tex t-white transition-colors cursor-pointer"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.name}</span>
                    <ChevronDown className="w-4 h-4"  />
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`flex items-center space-x-1 transition-colors ${
                      isActive(item.href)
                        ? 'text-blue-400'
                        : 'text-gray-300 hover: tex t-white'
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </Link>
                )}

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {activeDropdown === item.name && item.dropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 1 0 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 1 0 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-80 bg-slate-800 rounded-lg shadow-xl border border-slate-700 overflow-hidden"
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <div className="p-2">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.href}
                            className="flex items-start space-x-3 p-3 rounded-lg hover: b g-slate-700 transition-colors group"
                          >
                            <dropdownItem.icon className="w-5 h-5 text-blue-400 mt-0.5 group-hover: tex t-blue-300" />
                            <div>
                              <div className="text-white font-medium group-hover: tex t-blue-300">
                                {dropdownItem.name}
                              </div>
                              <div className="text-gray-400 text-sm">
                                {dropdownItem.description}
                              </div>
                            </div>
                            <ArrowRight className="w-4 h-4 text-gray-400 group-hover: tex t-white ml-auto mt-0.5"  />
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

    { name: 'About', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ];

  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm: p x-6 lg: p x-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">Z</span>
            </div>
            <span className="text-white font-bold text-xl">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md: flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative">
                <Link
                  href={item.href}
                  className="flex items-center space-x-1 text-gray-300 hover: tex t-white transition-colors duration-200"
                  onMouseEnter={() => item.hasDropdown && setIsServicesOpen(true)}
                  onMouseLeave={() => item.hasDropdown && setIsServicesOpen(false)}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                  {item.hasDropdown && <ChevronDown className="w-4 h-4"  />}
                </Link>

                {/* Services Dropdown */}
                {item.hasDropdown && (
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-full left-0 mt-2 w-64 bg-slate-800 rounded-lg shadow-lg border border-slate-700 py-2"
                        onMouseEnter={() => setIsServicesOpen(true)}
                        onMouseLeave={() => setIsServicesOpen(false)}
                      >
                        {serviceCategories.map((category) => (
                          <Link
                            key={category.name}
                            href={category.href}
                            className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover: tex t-white hover: b g-slate-700 transition-colors duration-200"
                          >
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <span>{category.name}</span>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>

            ))}
          </nav>

          {/* Contact Info */}
          <div className="hidden lg: flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-gray-300">
              <Phone className="w-4 h-4"  />
              <span className="text-sm">+1 302 464 0950</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300">
              <Mail className="w-4 h-4"  />
              <span className="text-sm">kleber@ziontechgroup.com</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}

    window.addEventListener("scroll", handleScroll)
}
    return () => window.removeEventListener("scroll", handleScroll)
}
  }, [])
}
  const navigation = []
    },"
    { name: "About", href: "/about", icon: User s },
    { "
      name: "Resources", "
      href: "#",
      icon: BookOpe n,
      dropdown: [",
        { name: "Blog", href: "/blog", icon: BookOpe n, description: "Latest insights and trends" },"
        { name: "Case Studies", href: "/case-studies", icon: Targe t, description: "Success stories" },"
        { name: "White Papers", href: "/white-papers", icon: FileTex t, description: "Research and insights" },"
        { name: "Webinars", href: "/webinars", icon: Calenda r, description: "Expert-led sessions" },"
        { name: "Pricing Guide", href: "/pricing-guide", icon: DollarSig n, description: "Comprehensive pricing info" }

      ]
    },"
    { name: "Team", href: "/team", icon: Awar d },"
    { name: "Contact", href: "/contact", icon: Phon e }

  ]
  const quickLinks = []
  const serviceCategories = []
  return (

                    </motion.div>
                  )}

                </AnimatePresence>
              </div>
            ))}

          </nav>
          {/* comment */}"
          <div className="hidden lg: flex items-center space-x-4">"
            <Button variant="outline" size="sm">"
              <Search className="w-4 h-4 mr-2"   />
              Search,
            </Button>"
            <Button size="sm" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
              Get Started,
            </Button>
          </div>
,
          {/* comment */}"
          <button onClick="{()" => setIsMenuOpen(!isMenuOpen)}"
            className="lg: hidden p-2 rounded-lg text-gray-300 hover: tex t-white hover: b g-slate-700 transition-colors"
          >",
            {isMenuOpen ? <X className="w-6 h-6"   /> : <Menu className="w-6 h-6"   />}

      {/* Main navigation */}
      <nav className="bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="text-2xl font-bold text-blue-900">Zion Tech Group</div>
            </Link>

            {/* Desktop Navigation */}

              {/* Services Dropdown */}
              <div className="relative group">
                <button className="text-gray-700 hover: tex t-blue-600 font-medium transition-colors flex items-center">
                  Services
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"  />
                  </svg>
                </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}

            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md: hidden bg-slate-900 border-t border-slate-700"
          >
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <div className="flex items-center space-x-2 text-gray-300 font-medium mb-2">
                        <item.icon className="w-5 h-5" />
                        <span>{item.name}</span>
                      </div>
                      <div className="ml-7 space-y-2">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.href}
                            className="flex items-center space-x-2 text-gray-400 hover: tex t-white transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <dropdownItem.icon className="w-4 h-4" />
                            <span>{dropdownItem.name}</span>
                          </Link>
                        ))}

                      </div>
                    </div>
                  ) : (
                    <Link

                      key={category.name}
                      href={category.href}
                      className="block px-4 py-2 text-gray-700 hover: b g-blue-50 hover: tex t-blue-600 transition-colors"
                    >
                      {category.name}
                    </Link>
                  ))}

                </div>

              </div>
</div>

              {/* Solutions Dropdown */}
              <div className="relative group">
                <button className="text-gray-700 hover: tex t-blue-600 font-medium transition-colors flex items-center">
                  Solutions
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"  />
                  </svg>
                </button>

                  {solutionCategories.map((category) => (
                    <Link
                      key={category.name}
                      href={category.href}

                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/case-studies"
                className="text-gray-700 hover: tex t-blue-600 font-medium transition-colors"
              >
                Case Studies
              </Link>

              <Link
                href="/contact"
                className="text-gray-700 hover: tex t-blue-600 font-medium transition-colors"
              >
                Contact
              </Link>

              {/* CTA Button */}
              <Link
                href="/contact"
                className="bg-blue-600 hover: b g-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
              >
                Get Quote
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg: hidden p-2 focus: outlin e-none focus: rin g-2 focus: rin g-blue-500 rounded"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
            >
              <motion.div
                animate={{ rotate: isMenuOpe n ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6 text-gray-700"  />
                ) : (
                  <Menu className="w-6 h-6 text-gray-700"  />
                )}
              </motion.div>
            </button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div 
                className="lg: hidden border-t border-gray-200 py-4"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
              <div className="flex flex-col space-y-4">

                {navigation.map((item) => (
                  <Link
                    href={item.href}
                    className="flex items-center space-x-3 text-gray-300 hover: tex t-white transition-colors duration-200 py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </Link>
                ))}
                
                {/* Mobile Services */}
                <div className="border-t border-gray-200 pt-4">

                <Link
                  href="/"
                  className="text-gray-700 hover: tex t-blue-600 font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>

                  {serviceCategories.map((category) => (
                    <Link
                      key={category.name}
                      href={category.href}

                      className="block py-2 text-gray-600 hover: tex t-blue-600 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <item.icon className="w-5 h-5" />
                      <span>{item.name}</span>
                    </Link>
                  )}
                </div>

                {/* Mobile Resources */}
                <div className="border-t border-gray-200 pt-4">
                  <div className="text-gray-700 font-medium mb-2">Resources</div>
                  {resourceCategories.map((category) => (
                    <Link
                      key={category.name}
                      href={category.href}
                      className="block py-2 text-gray-600 hover: tex t-blue-600 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>

                </Link>

                {/* Mobile CTA */}
                <Link
                  href="/contact"
                  className="bg-blue-600 hover: b g-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Quote

                      className="block py-2 pl-4 text-gray-600 hover: tex t-blue-600 transition-colors"

                      onClick={() => setIsMenuOpen(false)}
                    >

                      {category.name}
                    </Link>

                  ))}
                </div>

                {/* Mobile CTA */}
                <Link
                  href="/contact"
                  className="bg-blue-600 hover: b g-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Quote

                </Link>
                <Link
                  href="/case-studies"
                  className="text-gray-700 hover: tex t-blue-600 font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Case Studies
                </Link>
                <Link
                  href="/about"
                  className="text-gray-700 hover: tex t-blue-600 font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/careers"
                  className="text-gray-700 hover: tex t-blue-600 font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Careers
                </Link>
                <Link
                  href="/contact"
                  className="text-gray-700 hover: tex t-blue-600 font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact

to={item.href}
                      className={`flex items-center space-x-2 transition-colors ${                        isActive(item.href);
                          ? 'text-blue-400
                          : 'text-gray-300 hover: tex t-white
                      }}'                      onClick={() => setIsMenuOpen(false)}`                    >
                      <item.icon className="w-5 h-5 />                      <span>{item.name}</span>"                    </Link>)}
                </div>
              ))}
              
              <div className="pt-4 border-t border-slate-700 space-y-3>                <Button variant="outline" size="sm" className="w-full>                  <Search className="w-4 h-4 mr-2"  />"                  Search"                </Button>
                <Button size="sm" className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white>                  Get Started"                </Button></div>
            </div>

          </button>
        </div>
      {/* comment */}

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div,"
initial="{{" opacity: 0, height: 0 }}""
            animate="{{" opacity: 1, height: "auto" }}"
            exit="{{" opacity: 0, height: 0 }}"
            transition="{{" duration: 0.3 }}"
            className="lg: hidden bg-slate-900 border-t border-slate-700"
          >"
            <div className="px-4 py-6 space-y-4">
              {navigation.map((item) => (",
                <div key="{item.name}">
                  {item.dropdown ? (
                    <div>"
                      <div className="flex items-center space-x-2 text-gray-300 font-medium mb-2">"
                        <item.icon className="w-5 h-5" />
                        <span>{item.name}</span>
                      </div>"
                      <div className="ml-7 space-y-2">
                        {item.dropdown.map((dropdownItem) => ("
                          <Link key="{dropdownItem.name}""
                            to="{dropdownItem.href}""
                            className="flex items-center space-x-2 text-gray-400 hover: tex t-white transition-colors"">
                            onClick="{()" => setIsMenuOpen(false)}

                          >"
                            <dropdownItem.icon className="w-4 h-4" />
                            <span>{dropdownItem.name}</span>
                          </Link>
                        ))}

                      </div>
                  ) : ("
                    <Link key="{category.name}""
                      href="{category.href}""
                      className="block px-4 py-2 text-gray-700 hover: b g-blue-50 hover: tex t-blue-600 transition-colors"
                    >,
                      {category.name}

                    </Link>
                  ))}

                </div>
              {/* comment */}"
              <div className="flex items-center space-x-3">"
                <Link href="/contact""
                  className="bg-blue-600 hover: b g-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors hover: scal e-105"
                >
                  Get Quote,
                </Link>"
                <Link href="/contact?type=consultation""
                  className="bg-transparent border-2 border-blue-600 text-blue-600 hover: b g-blue-600 hover: tex t-white px-4 py-2 rounded-lg font-medium transition-colors hover: scal e-105"
                >
                  Free Consultation,

                </Link>

                {/* Mobile CTA */}
                <div className="border-t border-gray-200 pt-4">
                  <Link
                    href="/contact"
                    className="bg-blue-600 hover: b g-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors text-center block"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Get Quote
                  </Link>
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>

  );
};

,
            {/* comment */}"
            <button className="lg: hidden p-2 focus: outlin e-none focus: rin g-2 focus: rin g-blue-500 rounded"">
              onClick="{()" => setIsMenuOpen(!isMenuOpen)}""
              aria-label="{isMenuOpen" ? "Close menu" : "Open menu"}"
              aria-expanded="{isMenuOpen}"
            >
              <motion.div,"
animate="{{" rotate: isMenuOpe n ? 180 : 0 }}"
                transition="{{" duration: 0.3 }}

              >
                {isMenuOpen ? ("
                  <X className="w-6 h-6 text-gray-700"   />
                ) : ("
                  <Menu className="w-6 h-6 text-gray-700"   />
                )}

              </motion.div>
            </button>
          </div>
          {/* comment */}

          <AnimatePresence>
            {isMenuOpen && (
              <motion.div,"
className="lg: hidden border-t border-gray-200 py-4"">
                initial="{{" opacity: 0, height: 0 }}""
                animate="{{" opacity: 1, height: "auto" }}"
                exit="{{" opacity: 0, height: 0 }}"
                transition="{{" duration: 0.3 }}

              >"
              <div className="flex flex-col space-y-4">
                {navigation.map((item) => ("
                  <Link key="{item.name}""
                    href="{item.href}""
                    className="text-gray-700 hover: tex t-blue-600 font-medium transition-colors"">
                    onClick="{()" => setIsMenuOpen(false)}

                  >
                    {item.name}

                  </Link>
                ))}

                {/* comment */}"
                <div className="border-t border-gray-200 pt-4">"
                  <div className="text-gray-700 font-medium mb-2">Services</div>
                  {serviceCategories.map((category) => ("
                    <Link key="{category.name}""
                      href="{category.href}""
                      className="block py-2 text-gray-600 hover: tex t-blue-600 transition-colors"">
                      onClick="{()" => setIsMenuOpen(false)}

                    >"
                      <item.icon className="w-5 h-5" />
                      <span>{item.name}</span>
                    </Link>
                  )}

                </div>
              ))}

              "
              <div className="pt-4 border-t border-slate-700 space-y-3">"
                <Button variant="outline" size="sm" className="w-full">"
                  <Search className="w-4 h-4 mr-2"   />
                  Search,
                </Button>"
                <Button size="sm" className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                  Get Started,
                </Button>
              </div>

          </motion.div>
        )}

      </AnimatePresence>
    </header>
  )
}
""export default Header
