<<<<<<< HEAD
=======
import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Settings, 
  Brain, 
  Network, 
  Cloud, 
  Globe, 
  Shield, 
  Building, 
  Heart, 
  DollarSign, 
  ShoppingCart, 
  BookOpen, 
  Zap, 
  Video, 
  Users, 
  Rocket, 
  MessageSquare, 
  Phone, 
  FileText,
  BarChart3,
  Cpu,
  Car,
  Code,
  HelpCircle,
  Clock,
  Atom,
  Link as LinkIcon
} from 'lucide-react';

const navigation = [
  {
    name: 'Services',
    href: '/services',
    icon: Settings,
    children: [
      { name: 'AI Solutions', href: '/ai-services', icon: Brain, count: '150+' },
      { name: 'IT Services', href: '/it-services', icon: Network, count: '80+' },
      { name: 'Micro SaaS', href: '/micro-saas', icon: Cloud, count: '200+' },
      { name: 'All Services', href: '/services', icon: Globe, count: '430+' }
    ]
  },
  {
    name: 'Solutions',
    href: '/solutions',
    icon: Rocket,
    children: [
      { name: 'Startup Solutions', href: '/solutions/startup', icon: Zap },
      { name: 'Digital Transformation', href: '/solutions/digital-transformation', icon: Cpu },
      { name: 'Cloud Migration', href: '/solutions/cloud-migration', icon: Cloud },
      { name: 'Custom Solutions', href: '/solutions/custom', icon: Code }
    ]
  },
  {
    name: 'Industries',
    href: '/industries',
    icon: Building,
    children: [
      { name: 'Finance', href: '/industries/finance', icon: DollarSign },
      { name: 'Education', href: '/industries/education', icon: BookOpen },
      { name: 'Healthcare', href: '/industries/healthcare', icon: Heart },
      { name: 'Manufacturing', href: '/industries/manufacturing', icon: Cpu },
      { name: 'Retail', href: '/industries/retail', icon: ShoppingCart },
      { name: 'Government', href: '/industries/government', icon: Shield }
    ]
  },
  {
    name: 'Resources',
    href: '/resources',
    icon: BookOpen,
    children: [
      { name: 'API Documentation', href: '/api-docs', icon: Code },
      { name: 'Case Studies', href: '/case-studies', icon: BarChart3 },
      { name: 'White Papers', href: '/white-papers', icon: FileText },
      { name: 'Blog', href: '/blog', icon: MessageSquare },
      { name: 'Help Center', href: '/help', icon: HelpCircle }
    ]
  }
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleDropdownToggle = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>

                <AnimatePresence>
                  {activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50"
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      {item.children?.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="flex items-center space-x-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors duration-200"
                        >
                          <child.icon className="w-4 h-4" />
                          <span className="flex-1">{child.name}</span>
                          {child.count && (
                            <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                              {child.count}
                            </span>
                          )}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Phone className="w-4 h-4" />
              <span>+1 302 464 0950</span>
            </div>
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-blue-600 p-2"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-gray-200"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <button
                      onClick={() => handleDropdownToggle(item.name)}
                      className="flex items-center justify-between w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                    >
                      <div className="flex items-center space-x-2">
                        <item.icon className="w-4 h-4" />
                        <span>{item.name}</span>
                      </div>
                      <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                    </button>
                    
                    <AnimatePresence>
                      {activeDropdown === item.name && item.children && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="ml-4 space-y-1"
                        >
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="flex items-center space-x-3 px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              <child.icon className="w-4 h-4" />
                              <span className="flex-1">{child.name}</span>
                              {child.count && (
                                <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                                  {child.count}
                                </span>
                              )}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
                
                {/* Mobile Contact Info */}
                <div className="pt-4 border-t border-gray-200">
                  <div className="px-3 py-2">
                    <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
                      <Phone className="w-4 h-4" />
                      <span>+1 302 464 0950</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600 mb-3">
                      <MessageSquare className="w-4 h-4" />
                      <span>kleber@ziontechgroup.com</span>
                    </div>
                    <Link
                      href="/contact"
                      className="block w-full bg-blue-600 text-white text-center px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
>>>>>>> fd81623f34e3b84c2b325c5baeabd49310d8e0d9
