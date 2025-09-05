import React, {_useState, _useEffect} from 'react';
import {_Menu, _X, _ChevronDown, _Search, _User, _Settings, _LogOut, _Bell, _Globe, _Zap} from 'lucide-react';
import Link from 'next/link';

interface EnhancedNavigationProps {_className?: string;}

const EnhancedNavigation: React.FC<EnhancedNavigationProps> = (_{_className = ''}) => {_const [isOpen, _setIsOpen] = useState(false);
  const [isScrolled, _setIsScrolled] = useState(false);
  const [activeDropdown, _setActiveDropdown] = useState<string | null>(null);

  useEffect__(() => {
    const _handleScroll = () => {
      setIsScrolled(window.scrollY > 20);};

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const _navigationItems = [
    {_name: 'Services', _href: '/services', _icon: <Brain className="w-4 h-4" />, _dropdown: [
        { name: 'AI & Machine Learning', _href: '/services?category=ai-ml', _icon: <Brain className="w-4 h-4" />},
        {_name: 'Quantum Computing', _href: '/services?category=quantum', _icon: <Rocket className="w-4 h-4" />},
        {_name: 'Space Technology', _href: '/services?category=space', _icon: <Globe className="w-4 h-4" />},
        {_name: 'Biotech & Healthcare', _href: '/services?category=biotech', _icon: <Dna className="w-4 h-4" />},
        {_name: 'Financial Services', _href: '/services?category=finance', _icon: <DollarSign className="w-4 h-4" />},
        {_name: 'Cybersecurity', _href: '/services?category=security', _icon: <Lock className="w-4 h-4" />},
        {_name: 'IoT & Smart Devices', _href: '/services?category=iot', _icon: <Wifi className="w-4 h-4" />},
        {_name: 'Logistics & Supply Chain', _href: '/services?category=logistics', _icon: <Truck className="w-4 h-4" />},
        {_name: 'Metaverse & Gaming', _href: '/services?category=metaverse', _icon: <Gamepad2 className="w-4 h-4" />},
        {_name: 'Robotics & Automation', _href: '/services?category=robotics', _icon: <Bot className="w-4 h-4" />},
        {_name: 'Manufacturing', _href: '/services?category=manufacturing', _icon: <Factory className="w-4 h-4" />},
        {_name: 'Autonomous Vehicles', _href: '/services?category=vehicles', _icon: <Car className="w-4 h-4" />}
      ],
      hasDropdown: true,
      dropdownItems: [
        {_name: 'AI & Machine Learning', _href: '/services?category=ai-ml'},
        {_name: 'Quantum Computing', _href: '/services?category=quantum'},
        {_name: 'Space Technology', _href: '/services?category=space'},
        {_name: 'Biotech & Healthcare', _href: '/services?category=biotech'},
        {_name: 'Financial Services', _href: '/services?category=finance'},
        {_name: 'Cybersecurity', _href: '/services?category=security'},
        {_name: 'Edge Computing', _href: '/services?category=edge'},
        {_name: 'Blockchain', _href: '/services?category=blockchain'},
        {_name: 'View All Services', _href: '/services'}
      ]
    },
    {_name: 'Solutions', _href: '/solutions', _hasDropdown: true, _dropdownItems: [
        { name: 'Enterprise Solutions', _href: '/solutions?type=enterprise'},
        {_name: 'Startup Solutions', _href: '/solutions?type=startup'},
        {_name: 'Government Solutions', _href: '/solutions?type=government'},
        {_name: 'Healthcare Solutions', _href: '/solutions?type=healthcare'},
        {_name: 'Financial Solutions', _href: '/solutions?type=financial'}
      ]
    },
    {_name: 'Pricing', _href: '/pricing'},
    {_name: 'Resources', _href: '/resources'},
    {_name: 'Blog', _href: '/blog'},
    {_name: 'Contact', _href: '/contact'}
  ];

  const _contactInfo = {_mobile: '+1 302 464 0950', _email: 'kleber@ziontechgroup.com', _address: '364 E Main St STE 1008 Middletown DE 19709', _website: 'https://ziontechgroup.com'};

  return (_<nav className={_`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/80 backdrop-blur-xl border-b border-cyan-500/20 shadow-2xl shadow-cyan-500/10' 
        : 'bg-transparent'} ${_className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {_/* Logo */}
          <motion.div
            initial={_{ opacity: 0, _x: -20}}
            animate={_{ opacity: 1, _x: 0}}
            transition={_{ duration: 0.5}}
            className="flex items-center space-x-3"
          >
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
              </div>
              <div className="hidden sm:block">
                <div className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                  Zion Tech Group
                </div>
                <div className="text-xs text-cyan-400">Revolutionary Technology</div>
              </div>
            </Link>
          </motion.div>

          {_/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {_navigationItems.map((item, _index) => (_<motion.div
                key={item.name}
                initial={_{ opacity: 0, _y: -20}}
                animate={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.5, _delay: index * 0.1}}
                className="relative"
                onMouseEnter={_() => item.hasDropdown && setActiveDropdown(item.name)}
                onMouseLeave={_() => setActiveDropdown(null)}
              >
                {_item.hasDropdown ? (_<div className="relative">
                    <button className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2">
                      <span>{item.name}</span>
                      <ChevronDown className={_`w-4 h-4 transition-transform duration-300 ${
                        activeDropdown === item.name ? 'rotate-180' : ''}`} />
                    </button>
                    
                    <AnimatePresence>
                      {_activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, _y: 10, _scale: 0.95}}
                          animate={_{ opacity: 1, _y: 0, _scale: 1}}
                          exit={_{ opacity: 0, _y: 10, _scale: 0.95}}
                          transition={_{ duration: 0.2}}
                          className="absolute top-full left-0 mt-2 w-64 bg-black/90 backdrop-blur-xl border border-cyan-500/20 rounded-xl shadow-2xl shadow-cyan-500/20 overflow-hidden"
                        >
                          <div className="p-2">
                            {_item.dropdownItems?.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                href={_dropdownItem.href}
                                className="block px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all duration-300"
                              >
                                {_dropdownItem.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={_item.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2"
                  >
                    {_item.name}
                  </Link>
                )}
              </motion.div>
            ))}
          </div>

          {_/* Right side actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {_/* Search */}
            <motion.button
              initial={_{ opacity: 0, _scale: 0.8}}
              animate={_{ opacity: 1, _scale: 1}}
              transition={_{ duration: 0.5, _delay: 0.6}}
              className="p-2 text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all duration-300"
            >
              <Search className="w-5 h-5" />
            </motion.button>

            {_/* Notifications */}
            <motion.button
              initial={_{ opacity: 0, _scale: 0.8}}
              animate={_{ opacity: 1, _scale: 1}}
              transition={_{ duration: 0.5, _delay: 0.7}}
              className="p-2 text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all duration-300 relative"
            >
              <Bell className="w-5 h-5" />
              <div className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            </motion.button>

            {_/* CTA Button */}
            <motion.div
              initial={_{ opacity: 0, _scale: 0.8}}
              animate={_{ opacity: 1, _scale: 1}}
              transition={_{ duration: 0.5, _delay: 0.8}}
            >
              <Link
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                Get Started
              </Link>
            </motion.div>
          </div>

          {_/* Mobile menu button */}
          <motion.button
            initial={_{ opacity: 0, _scale: 0.8}}
            animate={_{ opacity: 1, _scale: 1}}
            transition={_{ duration: 0.5, _delay: 0.9}}
            onClick={_() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all duration-300"
          >
            {_isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {_/* Mobile Navigation */}
      <AnimatePresence>
        {_isOpen && (_<motion.div
            initial={{ opacity: 0, _height: 0}}
            animate={_{ opacity: 1, _height: 'auto'}}
            exit={_{ opacity: 0, _height: 0}}
            transition={_{ duration: 0.3}}
            className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-cyan-500/20"
          >
            <div className="px-4 py-6 space-y-4">
              {_/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
                />
              </div>

              {_/* Navigation Items */}
              {_navigationItems.map((item) => (_<div key={item.name} className="space-y-2">
                  <Link
                    href={_item.href}
                    onClick={_() => setIsOpen(false)}
                    className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2"
                  >
                    {_item.name}
                  </Link>
                  
                  {_item.hasDropdown && item.dropdownItems && (_<div className="ml-4 space-y-1">
                      {item.dropdownItems.map((dropdownItem) => (_<Link
                          key={dropdownItem.name}
                          href={_dropdownItem.href}
                          onClick={_() => setIsOpen(false)}
                          className="block text-gray-400 hover:text-cyan-400 transition-colors duration-300 py-1 text-sm"
                        >
                          {_dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {_/* Contact Info */}
              <div className="pt-4 border-t border-cyan-500/20">
                <div className="space-y-2 text-sm text-gray-400">
                  <div className="flex items-center space-x-2">
                    <Globe className="w-4 h-4" />
                    <span>{_contactInfo.website}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>{_contactInfo.email}</span>
                  </div>
                </div>
              </div>

              {_/* Mobile CTA */}
              <div className="pt-4">
                <Link
                  href="/contact"
                  onClick={_() => setIsOpen(false)}
                  className="block w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center px-6 py-3 rounded-lg font-medium transition-all duration-300"
                >
                  Get Started Today
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default EnhancedNavigation;
