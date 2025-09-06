import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Phone, Mail, MapPin, Search, User, ShoppingCart, Bell } from 'lucide-react';
const EnhancedHeader: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services', dropdown: [
      { name: 'AI Solutions', href: '/services/ai-services', description: 'Cutting-edge AI services' },
      { name: 'IT & Security', href: '/services/it-services', description: 'Enterprise security & infrastructure' },
      { name: 'Blockchain & Web3', href: '/services/blockchain-services', description: 'Next-gen blockchain solutions' },
      { name: 'Sustainability', href: '/services/sustainability', description: 'Green tech solutions' }
    ]},
    { name: 'Solutions', href: '/solutions', dropdown: [
      { name: 'Enterprise', href: '/solutions/enterprise', description: 'Large-scale business solutions' },
      { name: 'Startups', href: '/solutions/startups', description: 'Growth-focused solutions' },
      { name: 'Healthcare', href: '/solutions/healthcare', description: 'Medical technology solutions' },
      { name: 'Financial Services', href: '/solutions/financial', description: 'Fintech and banking solutions' }
    ]},
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ];
  const contactInfo = [
    { icon: 'Phone', text: '+1 302 464 0950', href: 'tel:+13024640950' },
    { icon: 'Mail', text: 'kleber@ziontechgroup.com', href: 'mailto:kleber@ziontechgroup.com' },
    { icon: 'MapPin', text: '364 E Main St STE 1008, Middletown DE 19709', href: '#' }
  ];
  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  }
  const closeMobileMenu = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  }
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Handle search logic here
      // console.log('Searching for:', searchQuery);
    }
  }
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">Z</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>
          </Link>
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <span>{item.name}</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                ) : (
                  <Link href={item.href} className="text-gray-700 hover:text-blue-600 transition-colors">
                    {item.name}
                  </Link>
                )}
                {/* Dropdown Menu */}
                <AnimatePresence>
                  {item.dropdown && activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2"
                    >
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                        >
                          <div className="font-medium">{dropdownItem.name}</div>
                          {dropdownItem.description && (
                            <div className="text-sm text-gray-500">{dropdownItem.description}</div>
                          )}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>
          {/* Search and Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="w-64 px-4 py-2 pl-10 pr-4 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            </form>
            <div className="flex items-center space-x-2">
              <button className="p-2 text-gray-700 hover:text-blue-600 transition-colors">
                <User className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-700 hover:text-blue-600 transition-colors">
                <ShoppingCart className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-700 hover:text-blue-600 transition-colors">
                <Bell className="w-5 h-5" />
              </button>
            </div>
          </div>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-gray-200"
            >
              <div className="px-4 py-4 space-y-4">
                {/* Mobile Search */}
                <form onSubmit={handleSearch} className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search..."
                    className="w-full px-4 py-2 pl-10 pr-4 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                </form>
                {/* Mobile Navigation */}
                {navigationItems.map((item) => (
                  <div key={item.name}>
                    {item.dropdown ? (
                      <div>
                        <button
                          onClick={() => toggleDropdown(item.name)}
                          className="flex items-center justify-between w-full text-left text-gray-700 hover:text-blue-600 transition-colors py-2"
                        >
                          <span>{item.name}</span>
                          <ChevronDown className="w-4 h-4" />
                        </button>
                        {activeDropdown === item.name && (
                          <div className="ml-4 space-y-2">
                            {item.dropdown.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                onClick={closeMobileMenu}
                                className="block text-gray-600 hover:text-blue-600 transition-colors py-1"
                              >
                                {dropdownItem.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={closeMobileMenu}
                        className="block text-gray-700 hover:text-blue-600 transition-colors py-2"
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                {/* Contact Info */}
                <div className="pt-4 border-t border-gray-200">
                  <div className="space-y-2">
                    {contactInfo.map((info, index) => (
                      <div key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                        {info.icon === 'Phone' && <Phone className="w-4 h-4" />}
                        {info.icon === 'Mail' && <Mail className="w-4 h-4" />}
                        {info.icon === 'MapPin' && <MapPin className="w-4 h-4" />}
                        <span>{info.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
export default EnhancedHeader;