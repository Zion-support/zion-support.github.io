import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { 
  Menu, 
  X, 
  Search, 
  Sun, 
  Moon, 
  User, 
  Phone, 
  Mail,
  ChevronDown,
  Zap,
  Brain,
  Shield,
  Cloud,
  Users,
  FileText,
  HelpCircle,
  DollarSign
} from 'lucide-react';

const navigation = [{
    name: 'Services',
    href: '/services',
    icon: Settings,
    children: [
      { name: 'AI Solutions', href: '/ai-services', icon: Brain, count: '20+' },
      { name: 'IT Services', href: '/it-services', icon: Network, count: '20+' },
      { name: 'Micro SaaS', href: '/micro-saas', icon: Cloud, count: '25+' },
      { name: 'All Services', href: '/services', icon: Globe, count: '65+' }
    ]
  },
  {
    name: 'Solutions',
    href: '/solutions',
    icon: Shield,
    children: [{ name: 'Enterprise Solutions', href: '/solutions/enterprise', icon: Shield },
      { name: 'Startup Solutions', href: '/solutions/startup', icon: Rocket },
      { name: 'Industry Solutions', href: '/solutions/industry', icon: BarChart3 },
      { name: 'Custom Development', href: '/solutions/custom', icon: Settings }
    ]
  },
  {
    name: 'Resources',
    href: '/resources',
    icon: FileText,
    children: [{ name: 'Documentation', href: '/docs', icon: FileText },
      { name: 'Case Studies', href: '/case-studies', icon: BarChart3 },
      { name: 'Blog', href: '/blog', icon: MessageSquare },
      { name: 'API Reference', href: '/api-docs', icon: Settings }
    ]
  },
  {
    name: 'About',
    href: '/about',
    icon: Users
  },
  {
    name: 'Contact',
    href: '/contact',
    icon: Phone
  }
];

const contactInfo = {
  phone: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008, Middletown, DE 19709'
};

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const navigationItems = [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'Services',
      href: '/services',
      hasDropdown: true,
      dropdownItems: [
        { label: 'All Services', href: '/services' },
        { label: 'AI Services', href: '/ai-services' },
        { label: 'IT Services', href: '/it-services' },
        { label: 'Micro SaaS', href: '/micro-saas' },
        { label: 'Cloud & DevOps', href: '/services/cloud-devops' },
        { label: 'Cybersecurity', href: '/services/cybersecurity' },
        { label: 'Data Analytics', href: '/services/data-analytics' },
      ]
    },
    {
      label: 'Solutions',
      href: '/solutions',
      hasDropdown: true,
      dropdownItems: [
        { label: 'All Solutions', href: '/solutions' },
        { label: 'Enterprise Solutions', href: '/solutions/enterprise' },
        { label: 'Healthcare', href: '/solutions/healthcare' },
        { label: 'Finance', href: '/solutions/finance' },
        { label: 'Retail', href: '/solutions/retail' },
        { label: 'Education', href: '/solutions/education' },
        { label: 'Government', href: '/solutions/government' },
      ]
    },
    {
      label: 'Company',
      href: '/about',
      hasDropdown: true,
      dropdownItems: [
        { label: 'About Us', href: '/about' },
        { label: 'Our Team', href: '/team' },
        { label: 'Careers', href: '/careers' },
        { label: 'News', href: '/news' },
        { label: 'Contact', href: '/contact' },
      ]
    },
    {
      label: 'Industries',
      href: '/industries',
      hasDropdown: true,
      dropdownItems: [
        { label: 'All Industries', href: '/industries' },
        { label: 'Healthcare', href: '/industries/healthcare' },
        { label: 'Finance', href: '/industries/finance' },
        { label: 'Education', href: '/industries/education' },
        { label: 'Government', href: '/industries/government' },
        { label: 'Manufacturing', href: '/industries/manufacturing' },
        { label: 'Retail', href: '/industries/retail' },
      ]
    },
    {
      label: 'Resources',
      href: '/resources',
      hasDropdown: true,
      dropdownItems: [
        { label: 'Blog', href: '/blog' },
        { label: 'White Papers', href: '/white-papers' },
        { label: 'Case Studies', href: '/case-studies' },
        { label: 'Webinars', href: '/webinars' },
        { label: 'Help Center', href: '/help' },
        { label: 'FAQ', href: '/faq' },
      ]
    },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-gray-900/95 backdrop-blur-md border-b border-gray-800/50' 
        : 'bg-transparent'
    } ${className || ''}`}>
      {/* Top Bar */}
      <div className="bg-gray-900 text-gray-300 text-sm py-2">
        <div className="container mx-auto px-4">
<div className="flex flex-col sm:flex-row justify-between items-center text-sm">
            <div className="flex flex-col sm:flex-row gap-4 mb-2 sm:mb-0">
              <div className="flex items-center gap-2">ursor/add-new-services-and-deploy-updates-1b90
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>contact@ziontechgroup.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span>Free Consultation Available</span>
              <Link href="/contact" className="text-blue-400 hover:text-blue-300">
                Schedule Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white/95 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Mobile Menu Button */}
            <button
              onClick={onMenuClick}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
            >
              <Menu className="w-6 h-6 text-gray-700" />
            </button>

            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>
            </Link>

{/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium transition-colors"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                  {item.children && <ChevronDown className="w-4 h-4" />}
                </Link>

                {/* Dropdown Menu */}
                {item.children && (
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50"
                        onMouseEnter={() => setActiveDropdown(item.name)}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                          >
                            <div className="flex items-center space-x-3">
                              <child.icon className="w-4 h-4" />
                              <span>{child.name}</span>
                            </div>
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
                )}
              </div>

              {/* CTA Button */}
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Get Started
              </Link>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

{/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/contact"
              className="px-6 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium"
            >
              Get Quote
            </Link>
            <Link
              href="/contact"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Free Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-gray-200 bg-white"
            >
              <div className="py-4 space-y-2">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      className="flex items-center space-x-2 px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors font-medium"
                      onClick={closeMenu}
                    >
                      <item.icon className="w-4 h-4" />
                      <span>{item.name}</span>
                    </Link>
                    {item.children && (
                      <div className="ml-8 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="flex items-center justify-between px-4 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                            onClick={closeMenu}
                          >
                            <div className="flex items-center space-x-2">
                              <child.icon className="w-3 h-3" />
                              <span>{child.name}</span>
                            </div>
                            {child.count && (
                              <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                                {child.count}
                              </span>
                            )}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                
                {/* Mobile CTA Buttons */}
                <div className="px-4 pt-4 border-t border-gray-200 space-y-2">
                  <Link
                    href="/contact"
                    className="block w-full px-4 py-3 text-center border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium"
                    onClick={closeMenu}
                  >
                    Get Quote
                  </Link>
                  <Link
                    href="/contact"
                    className="block w-full px-4 py-3 text-center bg-blue-600 text-white rounded-lg hover: bg-blue-700 transition-colors font-medium"
                    onClick={closeMenu}
                  >
                    Free Consultationursor/add-new-services-and-deploy-updates-1b90
                  </Link>
                  {item.hasDropdown && item.dropdownItems && (
                    <div className="ml-4 space-y-2 mt-2">
                      {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                        <Link
                          key={dropdownIndex}
                          href={dropdownItem.href}
                          className="block py-1 text-sm text-gray-600 hover:text-blue-600"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {dropdownItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}