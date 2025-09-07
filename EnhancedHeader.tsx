import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown, Phone, Mail, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navigation_items = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services', dropdown: [
    { name: 'AI Development', href: '/services/ai-development' },
    { name: 'Cloud Services', href: '/services/cloud-services' },
    { name: 'Blockchain', href: '/services/blockchain' },
    { name: 'Data Analytics', href: '/services/data-analytics' },
  ]},
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

const contact_info = [
  { icon: 'Phone', text: '+1 302 464 0950', href: 'tel:+13024640950' },
  { icon: 'Mail', text: 'kleber@ziontechgroup.com', href: 'mailto:kleber@ziontechgroup.com' },
  { icon: 'MapPin', text: '364 E Main St STE 1008, Middletown DE 19709', href: '#' }
];

export default function EnhancedHeader() {
  const [is_scrolled, setIsScrolled] = useState(false);
  const [is_open, setIsOpen] = useState(false);
  const [active_dropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggle_dropdown = (itemName: string) => {
    setActiveDropdown(active_dropdown === itemName ? null : itemName);
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      is_scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">Z</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>
          </Link>

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation_items.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <button
                    onClick={() => toggle_dropdown(item.name)}
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
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!is_open)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        {/* Mobile Menu */}
        <AnimatePresence>
          {is_open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-gray-200"
            >
              <div className="px-4 py-4 space-y-4">
                {/* Mobile Navigation */}
                {navigation_items.map((item) => (
                  <div key={item.name}>
                    {item.dropdown ? (
                      <div>
                        <button
                          onClick={() => toggle_dropdown(item.name)}
                          className="flex items-center justify-between w-full text-left text-gray-700 hover:text-blue-600 transition-colors py-2"
                        >
                          <span>{item.name}</span>
                          <ChevronDown className="w-4 h-4" />
                        </button>
                        {active_dropdown === item.name && (
                          <div className="ml-4 space-y-2">
                            {item.dropdown.map((dropdown_item) => (
                              <Link
                                key={dropdown_item.name}
                                href={dropdown_item.href}
                                onClick={closeMobileMenu}
                                className="block text-gray-600 hover:text-blue-600 transition-colors py-1"
                              >
                                {dropdown_item.name}
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
                    {contact_info.map((info, index) => (
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