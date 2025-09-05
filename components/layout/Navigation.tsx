import React, {_useState, _useEffect} from 'react';
import {_Menu, _X, _Home, _Brain, _Cpu, _Rocket, _Phone, _Mail, _MapPin, _Globe, _ChevronDown} from 'lucide-react';
import Link from 'next/link';

const Navigation: React.FC = () => {_const [isOpen, _setIsOpen] = useState(false);
  const [isScrolled, _setIsScrolled] = useState(false);
  const [activeDropdown, _setActiveDropdown] = useState<string | null>(null);

  useEffect__(() => {
    const _handleScroll = () => {
      setIsScrolled(window.scrollY > 50);};

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const _navigationItems = [
    {_name: 'Home', _href: '/', _icon: Home},
    {_name: 'Services', _href: '/services', _icon: Rocket, _dropdown: [
        { name: 'AI Services', _href: '/ai-services', _icon: Brain, _description: 'Revolutionary AI solutions'},
        {_name: 'IT Services', _href: '/it-services', _icon: Cpu, _description: 'Enterprise IT solutions'},
        {_name: 'Micro SaaS', _href: '/micro-saas', _icon: Rocket, _description: 'Specialized software solutions'},
        {_name: 'Innovative Showcase', _href: '/innovative-services-showcase', _icon: Globe, _description: 'Cutting-edge technology'}
      ]
    },
    {_name: 'Solutions', _href: '/solutions', _icon: Cpu},
    {_name: 'About', _href: '/about', _icon: Globe},
    {_name: 'Contact', _href: '/contact', _icon: Phone}
  ];

  const _contactInfo = {_mobile: '+1 302 464 0950', _email: 'kleber@ziontechgroup.com', _address: '364 E Main St STE 1008 Middletown DE 19709', _website: 'https://ziontechgroup.com'};

  return (_<>
      {_/* Navigation Bar */}
      <motion.nav
        initial={_{ y: -100}}
        animate={_{ y: 0}}
        transition={_{ duration: 0.5}}
        className={_`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-gray-900/95 backdrop-blur-xl border-b border-cyan-500/20 shadow-2xl shadow-cyan-500/10' 
            : 'bg-transparent'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {_/* Logo */}
            <motion.div
              whileHover={_{ scale: 1.05}}
              className="flex items-center space-x-2"
            >
              <Link href="/" className="flex items-center space-x-2 group">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center group-hover:shadow-lg group-hover:shadow-cyan-400/25 transition-all duration-300">
                  <span className="text-white font-bold text-lg lg:text-xl">Z</span>
                </div>
                <div className="hidden sm:block">
                  <div className="text-white font-bold text-lg lg:text-xl">Zion Tech Group</div>
                  <div className="text-cyan-400 text-xs">Revolutionary Technology</div>
                </div>
              </Link>
            </motion.div>

            {_/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {_navigationItems.map((item) => (_<div key={item.name} className="relative group">
                  {_item.dropdown ? (
                    <div
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={_() => setActiveDropdown(null)}
                      className="flex items-center space-x-1 cursor-pointer text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      <span className="font-medium">{_item.name}</span>
                      <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                      
                      {_/* Dropdown Menu */}
                      <AnimatePresence>
                        {_activeDropdown === item.name && (_<motion.div
                            initial={{ opacity: 0, _y: 10, _scale: 0.95}}
                            animate={_{ opacity: 1, _y: 0, _scale: 1}}
                            exit={_{ opacity: 0, _y: 10, _scale: 0.95}}
                            transition={_{ duration: 0.2}}
                            className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl rounded-2xl border border-cyan-500/20 shadow-2xl shadow-cyan-500/25 p-4"
                          >
                            <div className="grid grid-cols-1 gap-3">
                              {_item.dropdown.map((dropdownItem) => {
                                const _Icon = dropdownItem.icon;
                                return (
                                  <Link
                                    key={dropdownItem.name}
                                    href={_dropdownItem.href}
                                    className="flex items-center space-x-3 p-3 rounded-xl hover:bg-cyan-500/10 hover:border border-cyan-500/30 transition-all duration-300 group/item"
                                  >
                                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center group-hover/item:bg-gradient-to-r group-hover/item:from-cyan-500/30 group-hover/item:to-purple-500/30 transition-all duration-300">
                                      <Icon className="w-5 h-5 text-cyan-400" />
                                    </div>
                                    <div>
                                      <div className="text-white font-medium group-hover/item:text-cyan-400 transition-colors duration-300">
                                        {_dropdownItem.name}
                                      </div>
                                      <div className="text-gray-400 text-sm">
                                        {_dropdownItem.description}
                                      </div>
                                    </div>
                                  </Link>
                                );
                              })}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={_item.href}
                      className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300 group"
                    >
                      <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                      <span className="font-medium">{_item.name}</span>
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {_/* CTA Button */}
            <div className="hidden lg:block">
              <motion.a
                href="/contact"
                whileHover={_{ scale: 1.05}}
                whileTap={_{ scale: 0.95}}
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold py-2 px-6 rounded-full transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40"
              >
                Get Started
              </motion.a>
            </div>

            {_/* Mobile Menu Button */}
            <div className="lg:hidden">
              <motion.button
                whileTap={_{ scale: 0.95}}
                onClick={_() => setIsOpen(!isOpen)}
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                {_isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {_/* Mobile Navigation */}
      <AnimatePresence>
        {_isOpen && (_<motion.div
            initial={{ opacity: 0, _x: '100%'}}
            animate={_{ opacity: 1, _x: 0}}
            exit={_{ opacity: 0, _x: '100%'}}
            transition={_{ duration: 0.3}}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {_/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={_() => setIsOpen(false)}
            />
            
            {_/* Mobile Menu */}
            <motion.div
              initial={_{ x: '100%'}}
              animate={_{ x: 0}}
              exit={_{ x: '100%'}}
              transition={_{ duration: 0.3}}
              className="absolute right-0 top-0 h-full w-80 bg-gray-900/95 backdrop-blur-xl border-l border-cyan-500/20 shadow-2xl"
            >
              <div className="p-6">
                {_/* Close Button */}
                <div className="flex justify-end mb-6">
                  <motion.button
                    whileTap={_{ scale: 0.95}}
                    onClick={_() => setIsOpen(false)}
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    <X className="w-6 h-6" />
                  </motion.button>
                </div>

                {_/* Mobile Menu Items */}
                <div className="space-y-4">
                  {_navigationItems.map(_(item) => (_<div key={item.name}>
                      {_item.dropdown ? (
                        <div className="space-y-2">
                          <div className="text-gray-400 font-medium text-sm uppercase tracking-wider">
                            {item.name}
                          </div>
                          <div className="pl-4 space-y-2">
                            {_item.dropdown.map((dropdownItem) => {
                              const _Icon = dropdownItem.icon;
                              return (_<Link
                                  key={dropdownItem.name}
                                  href={_dropdownItem.href}
                                  onClick={_() => setIsOpen(false)}
                                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
                                >
                                  <Icon className="w-5 h-5 text-cyan-400" />
                                  <div>
                                    <div className="text-white font-medium">{_dropdownItem.name}</div>
                                    <div className="text-gray-400 text-sm">{_dropdownItem.description}</div>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      ) : (_<Link
                          href={_item.href}
                          onClick={_() => setIsOpen(false)}
                          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
                        >
                          <item.icon className="w-5 h-5 text-cyan-400" />
                          <span className="text-white font-medium">{_item.name}</span>
                        </Link>
                      )}
                    </div>
                  ))}
                </div>

                {_/* Contact Information */}
                <div className="mt-8 p-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl border border-cyan-500/20">
                  <h3 className="text-cyan-400 font-semibold mb-3">Contact Information</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2 text-gray-300">
                      <Phone className="w-4 h-4 text-cyan-400" />
                      <span>{_contactInfo.mobile}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-300">
                      <Mail className="w-4 h-4 text-purple-400" />
                      <span>{_contactInfo.email}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-300">
                      <MapPin className="w-4 h-4 text-pink-400" />
                      <span className="text-xs">{_contactInfo.address}</span>
                    </div>
                  </div>
                </div>

                {_/* Mobile CTA */}
                <div className="mt-6">
                  <motion.a
                    href="/contact"
                    whileTap={_{ scale: 0.95}}
                    onClick={_() => setIsOpen(false)}
                    className="block w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold py-3 px-6 rounded-xl text-center transition-all duration-300 shadow-lg shadow-cyan-500/25"
                  >
                    Get Started Today
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;