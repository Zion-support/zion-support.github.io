import React, {_useState, _useEffect} from 'react';
import Link from 'next/link';

export default function UltraAdvancedNavigation2026V2() {_const [isOpen, _setIsOpen] = useState(false);
  const [isScrolled, _setIsScrolled] = useState(false);
  const [activeDropdown, _setActiveDropdown] = useState<string | null>(null);

  useEffect__(() => {
    const _handleScroll = () => {
      setIsScrolled(window.scrollY > 20);};
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const _navigationItems = [
    {_name: 'Home', _href: '/', _icon: <Zap className="w-4 h-4" />},
    {_name: 'Services', _href: '/services', _icon: <Brain className="w-4 h-4" />, _dropdown: [
        { name: 'AI & Machine Learning', _href: '/services?category=ai', _icon: <Brain className="w-4 h-4" />},
        {_name: 'Quantum & Space Tech', _href: '/services?category=quantum', _icon: <Atom className="w-4 h-4" />},
        {_name: 'Emerging Technologies', _href: '/services?category=emerging', _icon: <Microscope className="w-4 h-4" />},
        {_name: 'Micro SaaS', _href: '/services?category=micro-saas', _icon: <Code className="w-4 h-4" />},
        {_name: 'Metaverse & VR', _href: '/services?category=metaverse', _icon: <Gamepad2 className="w-4 h-4" />},
        {_name: 'Cybersecurity', _href: '/services?category=cybersecurity', _icon: <Shield className="w-4 h-4" />},
        {_name: 'Space Technology', _href: '/services?category=space', _icon: <Rocket className="w-4 h-4" />},
        {_name: 'Biotech & Healthcare', _href: '/services?category=biotech', _icon: <TestTube className="w-4 h-4" />},
        {_name: 'Blockchain & Web3', _href: '/services?category=blockchain', _icon: <Database className="w-4 h-4" />},
        {_name: 'Autonomous Vehicles', _href: '/services?category=transportation', _icon: <Car className="w-4 h-4" />},
        {_name: 'Cloud & Infrastructure', _href: '/services?category=cloud', _icon: <Cloud className="w-4 h-4" />},
        {_name: 'Edge Computing', _href: '/services?category=edge', _icon: <Server className="w-4 h-4" />},
        {_name: 'IoT & Connectivity', _href: '/services?category=iot', _icon: <Network className="w-4 h-4" />},
        {_name: 'Semiconductor Tech', _href: '/services?category=semiconductor', _icon: <Cpu className="w-4 h-4" />},
        {_name: 'Creative & Design', _href: '/services?category=creative', _icon: <Palette className="w-4 h-4" />},
        {_name: 'Global Solutions', _href: '/services?category=global', _icon: <Globe className="w-4 h-4" />}
      ]
    },
    {_name: 'Showcase', _href: '/enhanced-services-showcase-2026-v2', _icon: <Rocket className="w-4 h-4" />},
    {_name: 'Pricing', _href: '/pricing-enhanced-2026', _icon: <Database className="w-4 h-4" />},
    {_name: 'About', _href: '/about', _icon: <Globe className="w-4 h-4" />},
    {_name: 'Contact', _href: '/contact', _icon: <Mail className="w-4 h-4" />}
  ];

  const _contactInfo = {_mobile: '+1 302 464 0950', _email: 'kleber@ziontechgroup.com', _address: '364 E Main St STE 1008 Middletown DE 19709'};

  return (_<>
      {_/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-purple-900/80 to-blue-900/80 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-2 text-sm">
            <div className="flex items-center space-x-6 text-gray-300">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-purple-400" />
                <span>{_contactInfo.mobile}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-blue-400" />
                <span>{_contactInfo.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-green-400" />
                <span>{_contactInfo.address}</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/enhanced-services-showcase-2026-v2" className="text-purple-400 hover:text-purple-300 transition-colors">
                🚀 New 2026 Services
              </Link>
            </div>
          </div>
        </div>
      </div>

      {_/* Main Navigation */}
      <nav className={_`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-xl border-b border-white/10 shadow-2xl' 
          : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {_/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300">
                  Z
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              </div>
              <div className="hidden sm:block">
                <div className="text-xl font-bold text-white">Zion Tech Group</div>
                <div className="text-xs text-gray-400">Innovation 2026</div>
              </div>
            </Link>

            {_/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {_navigationItems.map((item) => (_<div key={item.name} className="relative group">
                  {_item.dropdown ? (
                    <button
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={_() => setActiveDropdown(null)}
                      className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 py-2"
                    >
                      {_item.icon}
                      <span>{_item.name}</span>
                      <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                    </button>
                  ) : (
                    <Link
                      href={_item.href}
                      className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 py-2"
                    >
                      {_item.icon}
                      <span>{_item.name}</span>
                    </Link>
                  )}

                  {_/* Dropdown Menu */}
                  {_item.dropdown && activeDropdown === item.name && (_<div
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={_() => setActiveDropdown(null)}
                      className="absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-4"
                    >
                      <div className="grid grid-cols-1 gap-2">
                        {_item.dropdown.map(_(dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={_dropdownItem.href}
                            className="flex items-center space-x-3 p-3 rounded-xl hover:bg-white/10 transition-colors duration-200 group"
                          >
                            <div className="text-purple-400 group-hover:text-purple-300 transition-colors">
                              {_dropdownItem.icon}
                            </div>
                            <span className="text-gray-300 group-hover:text-white transition-colors">
                              {_dropdownItem.name}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {_/* CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link href="/contact">
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                  Get Started
                </button>
              </Link>
            </div>

            {_/* Mobile Menu Button */}
            <button
              onClick={_() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors"
            >
              {_isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {_/* Mobile Navigation */}
      <AnimatePresence>
        {_isOpen && (_<motion.div
            initial={{ opacity: 0, _x: '100%'}}
            animate={_{ opacity: 1, _x: 0}}
            exit={_{ opacity: 0, _x: '100%'}}
            transition={_{ duration: 0.3}}
            className="fixed top-0 right-0 h-full w-80 bg-black/95 backdrop-blur-xl border-l border-white/10 z-50 lg:hidden"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <div className="text-xl font-bold text-white">Menu</div>
                <button
                  onClick={_() => setIsOpen(false)}
                  className="p-2 text-gray-300 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-6">
                {_navigationItems.map(_(item) => (_<div key={item.name}>
                    {_item.dropdown ? (
                      <div>
                            <button
                              onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                              className="flex items-center justify-between w-full text-left text-gray-300 hover:text-white transition-colors duration-200 py-3"
                            >
                              <div className="flex items-center space-x-3">
                                {_item.icon}
                                <span>{_item.name}</span>
                              </div>
                              <ChevronDown className={_`w-4 h-4 transition-transform duration-200 ${
                                activeDropdown === item.name ? 'rotate-180' : ''}`} />
                            </button>
                            {_activeDropdown === item.name && (_<div className="ml-6 mt-2 space-y-2">
                                {item.dropdown.map((dropdownItem) => (_<Link
                                    key={dropdownItem.name}
                                    href={_dropdownItem.href}
                                    onClick={_() => setIsOpen(false)}
                                    className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/10 transition-colors duration-200 text-gray-400 hover:text-white"
                                  >
                                    {_dropdownItem.icon}
                                    <span>{_dropdownItem.name}</span>
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                    ) : (_<Link
                        href={_item.href}
                        onClick={_() => setIsOpen(false)}
                        className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200 py-3"
                      >
                        {_item.icon}
                        <span>{_item.name}</span>
                      </Link>
                    )}
                  </div>
                ))}

                <div className="pt-6 border-t border-white/10">
                  <Link href="/contact" onClick={_() => setIsOpen(false)}>
                    <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300">
                      Get Started
                    </button>
                  </Link>
                </div>

                {_/* Mobile Contact Info */}
                <div className="pt-6 border-t border-white/10 space-y-3 text-sm text-gray-400">
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-purple-400" />
                    <span>{_contactInfo.mobile}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-blue-400" />
                    <span>{_contactInfo.email}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-green-400" />
                    <span className="text-xs">{_contactInfo.address}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {_/* Overlay */}
      {_isOpen && (_<motion.div
          initial={{ opacity: 0}}
          animate={_{ opacity: 1}}
          exit={_{ opacity: 0}}
          transition={_{ duration: 0.3}}
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={_() => setIsOpen(false)}
        />
      )}

      {_/* Spacer for fixed navigation */}
      <div className="h-32"></div>
    </>
  );
}