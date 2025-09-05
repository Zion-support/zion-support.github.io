import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  Code,
  Database,
  Cloud,
  Shield,
  Zap,
  Users,
  Building,
  ShoppingCart,
  Heart,
  GraduationCap,
  Briefcase,
  Home,
  Globe,
  BarChart3
} from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const servicesDropdown = [
    {
      title: 'Web Development',
      description: 'Custom websites and web applications',
      href: '/services/web-development',
      icon: Code
    },
    {
      title: 'Mobile Apps',
      description: 'iOS and Android applications',
      href: '/services/mobile-apps',
      icon: Smartphone
    },
    {
      title: 'Cloud Solutions',
      description: 'AWS, Azure, and Google Cloud services',
      href: '/services/cloud-solutions',
      icon: Cloud
    },
    {
      title: 'Database Management',
      description: 'Database design and optimization',
      href: '/services/database-management',
      icon: Database
    },
    {
      title: 'Cybersecurity',
      description: 'Security audits and protection',
      href: '/services/cybersecurity',
      icon: Shield
    },
    {
      title: 'AI & Automation',
      description: 'Artificial intelligence solutions',
      href: '/services/ai-automation',
      icon: Zap
    }
  ];

  const solutionsDropdown = [
    {
      title: 'E-commerce',
      description: 'Online stores and marketplaces',
      href: '/solutions/ecommerce',
      icon: ShoppingCart
    },
    {
      title: 'Healthcare',
      description: 'Medical software and systems',
      href: '/solutions/healthcare',
      icon: Heart
    },
    {
      title: 'Education',
      description: 'Learning management systems',
      href: '/solutions/education',
      icon: GraduationCap
    },
    {
      title: 'Enterprise',
      description: 'Large-scale business solutions',
      href: '/solutions/enterprise',
      icon: Building
    }
  ];

  const industriesDropdown = [
    { name: 'Technology', href: '/industries/technology', icon: Code },
    { name: 'Healthcare', href: '/industries/healthcare', icon: Heart },
    { name: 'Finance', href: '/industries/finance', icon: BarChart3 },
    { name: 'Education', href: '/industries/education', icon: GraduationCap },
    { name: 'Manufacturing', href: '/industries/manufacturing', icon: Building },
    { name: 'Retail', href: '/industries/retail', icon: ShoppingCart }
  ];

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Industries', href: '/industries' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="flex items-center space-x-6 mb-2 md:mb-0">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <a href="tel:+13024640950" className="hover:text-blue-300">+1 302 464 0950</a>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-blue-300">kleber@ziontechgroup.com</a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-blue-200">24/7 Support Available</span>
              <div className="flex space-x-2">
                <a href="#" className="hover:text-blue-300"><Facebook className="w-4 h-4" /></a>
                <a href="#" className="hover:text-blue-300"><Twitter className="w-4 h-4" /></a>
                <a href="#" className="hover:text-blue-300"><Linkedin className="w-4 h-4" /></a>
                <a href="#" className="hover:text-blue-300"><Instagram className="w-4 h-4" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">Z</span>
            </div>
            <div>
              <div className="text-xl font-bold text-gray-900">Zion Tech Group</div>
              <div className="text-xs text-gray-500">Technology Solutions</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 rounded-lg mt-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium"
                    onClick={closeMenu}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center px-6 py-3 rounded-lg font-medium transition-colors duration-200"
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;