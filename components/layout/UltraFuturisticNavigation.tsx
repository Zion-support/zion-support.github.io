import React, {_useState, _useEffect} from 'react';
import Link from 'next/link';

interface UltraFuturisticNavigationProps {_className?: string;}

export default function UltraFuturisticNavigation(_{_className = ''}: UltraFuturisticNavigationProps) {_const [isOpen, _setIsOpen] = useState(false);
  const [isScrolled, _setIsScrolled] = useState(false);
  const [activeDropdown, _setActiveDropdown] = useState<string | null>(null);

  useEffect__(() => {
    const _handleScroll = () => {
      setIsScrolled(window.scrollY > 20);};

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const _navigationItems = [
    {_name: 'Services', _href: '/services', _hasDropdown: true, _dropdownItems: [
        { name: 'AI & Machine Learning', _href: '/services/ai-ml', _icon: Brain, _color: 'from-purple-500 to-pink-600'},
        {_name: 'Quantum Computing', _href: '/services/quantum', _icon: Atom, _color: 'from-cyan-500 to-blue-600'},
        {_name: 'Cybersecurity', _href: '/services/cybersecurity', _icon: Shield, _color: 'from-red-500 to-pink-600'},
        {_name: 'IT Solutions', _href: '/services/it-solutions', _icon: Rocket, _color: 'from-green-500 to-emerald-600'},
        {_name: 'View All Services', _href: '/services', _icon: Rocket, _color: 'from-gray-500 to-gray-600'}
      ]
    },
    {_name: 'Solutions', _href: '/solutions'},
    {_name: 'About', _href: '/about'},
    {_name: 'Contact', _href: '/contact'},
    {_name: 'Pricing', _href: '/pricing'}
  ];

  const _contactInfo = {_mobile: '+1 302 464 0950', _email: 'kleber@ziontechgroup.com', _address: '364 E Main St STE 1008 Middletown DE 19709'};

  return (_<nav className={_`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-gray-900/95 backdrop-blur-xl border-b border-gray-700/50 shadow-2xl' 
        : 'bg-transparent'} ${_className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {_/* Logo */}
          <motion.div
            initial={_{ opacity: 0, _x: -20}}
            animate={_{ opacity: 1, _x: 0}}
            transition={_{ duration: 0.6}}
            className="flex items-center space-x-3"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center shadow-2xl">
              <Rocket className="w-7 h-7 text-white" />
            </div>
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Zion Tech Group
              </div>
              <div className="text-xs text-gray-400 -mt-1">Revolutionary Technology</div>
            </div>
          </motion.div>

          {_/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {_navigationItems.map((item, _index) => (_<div key={item.name} className="relative group">
                {_item.hasDropdown ? (
                  <div
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={_() => setActiveDropdown(null)}
                  >
                    <button className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors duration-300 py-2 px-3 rounded-lg hover:bg-gray-800/50">
                      <span>{_item.name}</span>
                      <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                    </button>
                    
                    {_/* Dropdown Menu */}
                    <AnimatePresence>
                      {_activeDropdown === item.name && (_<motion.div
                          initial={{ opacity: 0, _y: 10, _scale: 0.95}}
                          animate={_{ opacity: 1, _y: 0, _scale: 1}}
                          exit={_{ opacity: 0, _y: 10, _scale: 0.95}}
                          transition={_{ duration: 0.2}}
                          className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl overflow-hidden"
                        >
                          <div className="p-4">
                            <div className="grid gap-3">
                              {_item.dropdownItems?.map((dropdownItem, _idx) => (
                                <Link
                                  key={dropdownItem.name}
                                  href={_dropdownItem.href}
                                  className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-800/50 transition-all duration-300 group/item"
                                >
                                  <div className={_`w-10 h-10 bg-gradient-to-r ${dropdownItem.color} rounded-lg flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300`}>
                                    <dropdownItem.icon className="w-5 h-5 text-white" />
                                  </div>
                                  <div>
                                    <div className="text-white font-medium group-hover/item:text-cyan-300 transition-colors">
                                      {_dropdownItem.name}
                                    </div>
                                    {_dropdownItem.name === 'View All Services' && (
                                      <div className="text-xs text-gray-400">Explore our complete portfolio</div>
                                    )}
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={_item.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 py-2 px-3 rounded-lg hover:bg-gray-800/50"
                  >
                    {_item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {_/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            {_/* Contact Info */}
            <div className="flex items-center space-x-4 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>{_contactInfo.mobile}</span>
              </div>
            </div>

            {_/* CTA Button */}
            <motion.div
              whileHover={_{ scale: 1.05}}
              whileTap={_{ scale: 0.95}}
            >
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/30"
              >
                <Rocket className="w-4 h-4 mr-2" />
                Get Started
              </Link>
            </motion.div>
          </div>

          {_/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={_() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white transition-colors duration-300 p-2 rounded-lg hover:bg-gray-800/50"
            >
              {_isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {_/* Mobile Menu */}
      <AnimatePresence>
        {_isOpen && (_<motion.div
            initial={{ opacity: 0, _height: 0}}
            animate={_{ opacity: 1, _height: 'auto'}}
            exit={_{ opacity: 0, _height: 0}}
            transition={_{ duration: 0.3}}
            className="lg:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-700/50 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {_/* Mobile Navigation Items */}
              {_navigationItems.map((item) => (_<div key={item.name}>
                  {_item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                        className="flex items-center justify-between w-full text-left text-gray-300 hover:text-white transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-gray-800/50"
                      >
                        <span>{_item.name}</span>
                        <ChevronDown className={_`w-4 h-4 transition-transform duration-300 ${
                          activeDropdown === item.name ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {_activeDropdown === item.name && (_<motion.div
                          initial={{ opacity: 0, _y: -10}}
                          animate={_{ opacity: 1, _y: 0}}
                          exit={_{ opacity: 0, _y: -10}}
                          transition={_{ duration: 0.2}}
                          className="ml-4 mt-2 space-y-2"
                        >
                          {_item.dropdownItems?.map((dropdownItem) => (_<Link
                              key={dropdownItem.name}
                              href={_dropdownItem.href}
                              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800/50 transition-all duration-300"
                              onClick={_() => setIsOpen(false)}
                            >
                              <div className={_`w-8 h-8 bg-gradient-to-r ${dropdownItem.color} rounded-lg flex items-center justify-center`}>
                                <dropdownItem.icon className="w-4 h-4 text-white" />
                              </div>
                              <span className="text-gray-300 hover:text-white transition-colors">
                                {_dropdownItem.name}
                              </span>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </div>
                  ) : (_<Link
                      href={_item.href}
                      className="block text-gray-300 hover:text-white transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-gray-800/50"
                      onClick={_() => setIsOpen(false)}
                    >
                      {_item.name}
                    </Link>
                  )}
                </div>
              ))}

              {_/* Mobile Contact Info */}
              <div className="pt-6 border-t border-gray-700/50 space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span>{_contactInfo.mobile}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-4 h-4 text-purple-400" />
                  <span>{_contactInfo.email}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-4 h-4 text-green-400" />
                  <span className="text-sm">{_contactInfo.address}</span>
                </div>
              </div>

              {_/* Mobile CTA */}
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                  onClick={_() => setIsOpen(false)}
                >
                  <Rocket className="w-5 h-5 inline mr-2" />
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}