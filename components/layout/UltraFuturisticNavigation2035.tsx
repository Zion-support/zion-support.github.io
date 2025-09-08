import React from 'react';

const UltraFuturisticNavigation2035: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  }
  const closeDropdowns = () => {
    setActiveDropdown(null);  }
  const closeMobileMenu = () => {
    setIsOpen(false);
    closeDropdowns();    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll)
  }, []);
  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name)
  }
  const closeDropdowns = () => {
    setActiveDropdown(null)
  }
  const closeMobileMenu = () => {
    setIsOpen(false);
    closeDropdowns();
  }
    >
      {/* Background Effects */}
      <div className='absolute inset-0'>
        <div
          className={`absolute inset-0 transition-opacity duration-300 ${
            isScrolled ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className='absolute inset-0 bg-gradient-to-b from-black/95 via-black/90 to-black/95' />
          <div className='absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5' />
        </div>
      </div>
      <div className='relative z-10'>
        <div className='container mx-auto px-4'>
          <div className='flex items-center justify-between h-20'>
            {/* Logo */}
            <Link href='/' className='flex items-center gap-3 group'>
              <div className='w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                <Brain className='w-6 h-6 text-white' />
              </div>
              <div>
                <div className='text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>
                  Zion Tech Group
                </div>
                <div className='text-xs text-gray-400'>
                  Revolutionary Technology
                </div>              </div>
            </Link>
            {/* Desktop Navigation */}  }
  return (
    <nav aria-label="Primary" className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-black/95 backdrop-blur-xl border-b border-gray-800/50 shadow-2xl'
        : 'bg-transparent'
    }`}>
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className={`absolute inset-0 transition-opacity duration-300 ${
          isScrolled ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/90 to-black/95" />
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5" />
        </div>
      </div>
      <div className="relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Zion Tech Group
                </div>
                <div className="text-xs text-gray-400">Revolutionary Technology</div>
              </div>
            </Link>
            {/* Desktop Navigation */}
            <div className='hidden lg:flex items-center gap-8'>
              {navigationItems.map(item => (
                <div key={item.name} className='relative group'>
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className='flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200 group-hover:text-cyan-400'                  >
                    {item.icon}
                    <span>{item.name}</span>
                    {item.badge && (            <div className="hidden lg:flex items-center gap-8">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative group">
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200 group-hover:text-cyan-400"
                    {item.icon}
                    <span>{item.name}</span>
                    {item.badge && (
                      <span
                        className={`px-2 py-1 text-xs rounded-full ${
                          item.badge === 'New'
                            ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                            : item.badge === 'Hot'
                              ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                              : item.badge === 'Showcase'
                                ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                                : item.badge === 'Future'
                                  ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                                  : item.badge === 'Enterprise'
                                    ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                                    : item.badge === 'Industry'
                                      ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                                      : 'bg-gray-500/20 text-gray-400 border border-gray-500/30'
                        }`}>{item.badge}
                      </span>
                    )}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`}
                    />                  </button>                      <span className={`px-2 py-1 text-xs rounded-full ${
                        item.badge === 'New' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                        item.badge === 'Hot' ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
                        item.badge === 'Showcase' ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' :
                        item.badge === 'Future' ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' :
                        item.badge === 'Enterprise' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                        item.badge === 'Industry' ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' :
                        'bg-gray-500/20 text-gray-400 border border-gray-500/30'
                      }`}>
                        {item.badge}
                      </span>
                    )}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} />
                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className='absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl border border-gray-800/50 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden'
                        onMouseLeave={closeDropdowns}
                      >
                        <div className='p-6'>
                          <div className='flex items-center gap-3 mb-4'>
                            {item.icon}
                            <div>
                              <h3 className='font-semibold text-white'>
                                {item.title |item.name}
                              </h3>
                              {item.description && (
                                <p className='text-sm text-gray-400'>
                                  {item.description}
                                </p>
                              )}
                            </div>
                          </div>
                          <div className='space-y-2'>
                            {item.children?.map(child => (                              <Link
                                key={child.name}
                                href={child.href}
                                className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-200 ${
                                  child.featured
                                    ? 'bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 text-cyan-400 hover:bg-cyan-500/20'                                    : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                                }`}
                                onClick={closeDropdowns}
                              >                        onMouseLeave={closeDropdowns}
                      >
                        <div className="p-6">
                          <div className="flex items-center gap-3 mb-4">
                            {item.icon}
                            <div>
                              <h3 className="font-semibold text-white">{item.title |item.name}</h3>
                              {item.description && (
                                <p className="text-sm text-gray-400">{item.description}</p>
                              )}
                            </div>
                          </div>
                          <div className="space-y-2">
                            {item.children?.map((child) => (
                              <Link
                                key={child.name}
                                href={child.href}
                                className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-200 ${
                                  child.featured
                                    ? 'bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 text-cyan-400 hover:bg-cyan-500/20'                                  child.featured
                                    ? 'bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 text-cyan-400 hover:bg-cyan-500/20'
                                    : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                                }`}
                                onClick={closeDropdowns}
                              >
                                {child.featured && (
                                  <Star className='w-4 h-4 text-cyan-400' />
                                )}
                                <div className='flex-1'>
                                  <div className='font-medium'>
                                    {child.name}
                                  </div>
                                    <div className='text-sm opacity-75'>
                                      {child.description}
                                    </div>
                                  )}
                                </div>
                                <ArrowRight className='w-4 h-4 opacity-50' />                              </Link>                                <ArrowRight className="w-4 h-4 opacity-50" />
                              </Link>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
            {/* Right Side Actions */}
            <div className='hidden lg:flex items-center gap-4'>
              {/* Quick Actions */}
              <div className='flex items-center gap-2'>
                {quickActions.map(action => (                  <Link            <div className="hidden lg:flex items-center gap-4">
              {/* Quick Actions */}
              <div className="flex items-center gap-2">
                {quickActions.map((action) => (
                    key={action.name}
                    href={action.href}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                      action.primary
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600 shadow-lg shadow-cyan-500/25'
                        : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                    }`}>{action.icon}
                    <span>{action.name}</span>
                  </Link>
                ))}
              </div>
              {/* Contact Info */}
              <div className='flex items-center gap-4 text-sm text-gray-400'>
                <a
                  href={`tel:${contactInfo.mobile}`}
                  className='flex items-center gap-2 hover:text-cyan-400 transition-colors duration-200'><Phone className='w-4 h-4' />
                  <span className='hidden xl:inline'>{contactInfo.mobile}</span>
                </a>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className='flex items-center gap-2 hover:text-purple-400 transition-colors duration-200'
                >
                  <Mail className='w-4 h-4' />
                  <span className='hidden xl:inline'>{contactInfo.email}</span>                </a>              <div className="flex items-center gap-4 text-sm text-gray-400">
                <a href={`tel:${contactInfo.mobile}`} className="flex items-center gap-2 hover:text-cyan-400 transition-colors duration-200">
                  <Phone className="w-4 h-4" />
                  <span className="hidden xl:inline">{contactInfo.mobile}</span>
                </a>
                <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-2 hover:text-purple-400 transition-colors duration-200">
                  <Mail className="w-4 h-4" />
                  <span className="hidden xl:inline">{contactInfo.email}</span>
              </div>
            </div>
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='lg:hidden p-2 text-gray-300 hover:text-white transition-colors duration-200'
              aria-label='Toggle mobile menu'>{isOpen ? (
                <X className='w-6 h-6' />
              ) : (
                <Menu className='w-6 h-6' />
              )}            </button>              className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </div>
        </div>
        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className='lg:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-800/50'
              <div className='container mx-auto px-4 py-6'>
                <div className='space-y-6'>
                  {/* Mobile Navigation Items */}
                  {navigationItems.map(item => (
                    <div key={item.name}>
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className='flex items-center justify-between w-full p-3 text-left text-gray-300 hover:text-white transition-colors duration-200'
                      >
                        <div className='flex items-center gap-3'>
                          {item.icon}
                          <span>{item.name}</span>
                          {item.badge && (
                            <span
                              className={`px-2 py-1 text-xs rounded-full ${
                                item.badge === 'New'
                                  ? 'bg-green-500/20 text-green-400'
                                  : item.badge === 'Hot'
                                    ? 'bg-red-500/20 text-red-400'
                                    : item.badge === 'Showcase'
                                      ? 'bg-cyan-500/20 text-cyan-400'
                                      : 'bg-gray-500/20 text-gray-400'
                              }`}
                            >                              {item.badge}
                            </span>
                          )}
                        </div>                            <span className={`px-2 py-1 text-xs rounded-full ${
                              item.badge === 'New' ? 'bg-green-500/20 text-green-400' :
                              item.badge === 'Hot' ? 'bg-red-500/20 text-red-400' :
                              item.badge === 'Showcase' ? 'bg-cyan-500/20 text-cyan-400' :
                              'bg-gray-500/20 text-gray-400'
                            }`}>
                            </span>
                          )}
                        </div>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            activeDropdown === item.name ? 'rotate-180' : ''
                          }`}
                        />                      </button>                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} />
                      </button>
                      {/* Mobile Dropdown */}
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className='ml-6 mt-2 space-y-2'
                          >
                            {item.children?.map(child => (                              <Link
                                key={child.name}
                                href={child.href}
                                className={`block p-3 rounded-lg transition-colors duration-200 ${
                                  child.featured
                                    ? 'bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-400'                                    : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                                }`}
                                onClick={closeMobileMenu}
                              >                            className="ml-6 mt-2 space-y-2"
                          >
                            {item.children?.map((child) => (
                              <Link
                                key={child.name}
                                href={child.href}
                                className={`block p-3 rounded-lg transition-colors duration-200 ${
                                  child.featured
                                    ? 'bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-400'                                  child.featured
                                    ? 'bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-400'
                                    : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                                }`}
                                onClick={closeMobileMenu}
                              >
                                <div className='font-medium'>{child.name}</div>
                                {child.description && (
                                  <div className='text-sm opacity-75 mt-1'>
                                    {child.description}
                                  </div>                                )}                                <div className="font-medium">{child.name}</div>
                                {child.description && (
                                  <div className="text-sm opacity-75 mt-1">{child.description}</div>
                                )}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                  {/* Mobile Quick Actions */}
                  <div className='pt-4 border-t border-gray-800/50'>
                    <div className='space-y-3'>
                      {quickActions.map(action => (                        <Link                  <div className="pt-4 border-t border-gray-800/50">
                    <div className="space-y-3">
                      {quickActions.map((action) => (
                        <Link
                          key={action.name}
                          href={action.href}
                          className={`flex items-center gap-3 p-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                            action.primary
                              ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                              : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                          }`}
                          onClick={closeMobileMenu}>{action.icon}
                          <span>{action.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                  {/* Mobile Contact Info */}
                  <div className='pt-4 border-t border-gray-800/50'>
                    <div className='space-y-3 text-sm text-gray-400'>
                      <a
                        href={`tel:${contactInfo.mobile}`}
                        className='flex items-center gap-3 p-3 rounded-lg hover:text-cyan-400 hover:bg-gray-800/50 transition-all duration-200'
                      >
                        <Phone className='w-4 h-4' />
                        <span>{contactInfo.mobile}</span>
                      </a>
                      <a
                        href={`mailto:${contactInfo.email}`}
                        className='flex items-center gap-3 p-3 rounded-lg hover:text-purple-400 hover:bg-gray-800/50 transition-all duration-200'
                      >
                        <Mail className='w-4 h-4' />
                        <span>{contactInfo.email}</span>
                      </a>
                      <div className='flex items-center gap-3 p-3 rounded-lg'>
                        <MapPin className='w-4 h-4' />
                        <span className='text-sm'>{contactInfo.address}</span>                      </div>                        <span>{contactInfo.mobile}</span>
                      </a>
                      <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-3 p-3 rounded-lg hover:text-purple-400 hover:bg-gray-800/50 transition-all duration-200">
                        <Mail className="w-4 h-4" />
                        <span>{contactInfo.email}</span>
                      </a>
                      <div className="flex items-center gap-3 p-3 rounded-lg">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{contactInfo.address}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
}, []);
</div> <div> <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent" > Zion Tech Group </div> <div className="text-xs text-gray-400" >Revolutionary Technology</div> </div> </a> > {
  item.icon
}<span> {
  item.name
}</span> {
  item.badge && (<span className= {
  `px-2 py-1 text-xs rounded-full $ {
  item.badge === 'New' ? 'bg-green-500/20 text-green-400 border border-green-500/30' : item.badge === 'Hot' ? 'bg-red-500/20 text-red-400 border border-red-500/30' : item.badge === 'Showcase' ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' : item.badge === 'Future' ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' : item.badge === 'Enterprise' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' : item.badge === 'Industry' ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' : 'bg-gray-500/20 text-gray-400 border border-gray-500/30'
}`
}> {
  item.badge
}</span>)
}<ChevronDown className= {
  `w-4 h-4 transition-transform duration-200 $ {
  activeDropdown === item.name ? 'rotate-180' : ''
}`
}/> </button> {
  /* Dropdown Menu */
}<AnimatePresence> {
  activeDropdown === item.name && (<motion.div)
}</div> </div> <Link key= {
  child.name
}href= {
  child.href
}className= {
  `flex items-center gap-3 p-3 rounded-xl transition-all duration-200 $ {
  child.featured ? 'bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 text-cyan-400 hover:bg-cyan-500/20': 'text-gray-300 hover:text-white hover:bg-gray-800/50'
}`
}onClick= {
  closeDropdowns
}>)
}</div> <ArrowRight className="w-4 h-4 opacity-50" /> </a>) )
}</div> </div> </motion.div>)
}</AnimatePresence> </div>) )
}</div> <Link key= {
  action.name
}href= {
  action.href
}className= {
  `flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 $ {
  action.primary ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600 shadow-lg shadow-cyan-500/25': 'text-gray-300 hover:text-white hover:bg-gray-800/50'
}`
}> </a> </div> </div> {
  /* Mobile Menu Button */
}<button </button> </div> </div> {
  /* Mobile Menu */
}<AnimatePresence> <span className= {
  `px-2 py-1 text-xs rounded-full $ {
  item.badge === 'New'? 'bg-green-500/20 text-green-400': item.badge === 'Hot'? 'bg-red-500/20 text-red-400': item.badge === 'Showcase'? 'bg-cyan-500/20 text-cyan-400': 'bg-gray-500/20 text-gray-400'
}`
}> {
  item.badge
}</span>)
}</div> <ChevronDown className= {
  `w-4 h-4 transition-transform duration-200 $ {
  activeDropdown === item.name ? 'rotate-180': ''
}`
}/> </button> {
  /* Mobile Dropdown */
}<AnimatePresence> > {
  item.children?.map ( (child) => (<Link key= {
  child.name
}href= {
  child.href
}className= {
  `block p-3 rounded-lg transition-colors duration-200 $ {
  child.featured ? 'bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-400': 'text-gray-400 hover:text-white hover:bg-gray-800/50'
}`
}onClick= {
  closeMobileMenu
}>)
}</a>) )
}</motion.div>)
}</AnimatePresence> </div>) )
}<Link key= {
  action.name
}href= {
  action.href
}className= {
  `flex items-center gap-3 p-3 rounded-xl text-sm font-medium transition-all duration-200 $ {
  action.primary ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white': 'text-gray-300 hover:text-white hover:bg-gray-800/50'
}`
}onClick= {
  closeMobileMenu
}>) )
}</div> </div> </div> </div> </div> </div> </div> </motion.div>)
}</AnimatePresence> </div> </nav>)
}
export default UltraFuturisticNavigation2035;  )
}
export default UltraFuturisticNavigation2035;
