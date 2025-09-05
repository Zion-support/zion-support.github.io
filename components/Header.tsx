import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
<<<<<<< HEAD
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
  Code
} from 'lucide-react';

const navigation = [
  {
    name: 'Services',
    href: '/services',
    icon: Settings,
    children: [
      { name: 'AI Solutions', href: '/ai-services', icon: Brain, count: '80+' },
      { name: 'IT Services', href: '/it-services', icon: Network, count: '60+' },
      { name: 'Micro SaaS', href: '/micro-saas', icon: Cloud, count: '100+' },
      { name: 'All Services', href: '/services', icon: Globe, count: '240+' }
    ]
  },
  {
    name: 'Solutions',
    href: '/solutions',
    icon: Shield,
    children: [
      { name: 'Digital Transformation', href: '/solutions/digital-transformation', icon: Zap },
      { name: 'Cloud Migration', href: '/solutions/cloud-migration', icon: Cloud },
      { name: 'AI Implementation', href: '/solutions/ai-implementation', icon: Brain },
      { name: 'Cybersecurity', href: '/solutions/cybersecurity', icon: Shield },
      { name: 'Data Analytics', href: '/solutions/data-analytics', icon: BarChart3 },
      { name: 'IoT Solutions', href: '/solutions/iot', icon: Cpu }
    ]
  },
  {
    name: 'Industries',
    href: '/industries',
    icon: Building,
    children: [
      { name: 'Healthcare', href: '/industries/healthcare', icon: Heart },
      { name: 'Finance', href: '/industries/finance', icon: DollarSign },
      { name: 'Manufacturing', href: '/industries/manufacturing', icon: Settings },
      { name: 'Retail', href: '/industries/retail', icon: ShoppingCart },
      { name: 'Education', href: '/industries/education', icon: BookOpen },
      { name: 'Government', href: '/industries/government', icon: Building },
      { name: 'Energy', href: '/industries/energy', icon: Zap },
      { name: 'Transportation', href: '/industries/transportation', icon: Car }
    ]
  },
  {
    name: 'Resources',
    href: '/resources',
    icon: FileText,
    children: [
      { name: 'White Papers', href: '/white-papers', icon: FileText },
      { name: 'Webinars', href: '/webinars', icon: Video },
      { name: 'Case Studies', href: '/case-studies', icon: BookOpen },
      { name: 'Blog', href: '/blog', icon: MessageSquare },
      { name: 'Documentation', href: '/docs', icon: FileText },
      { name: 'API Reference', href: '/api-docs', icon: Code }
    ]
  },
  {
    name: 'Company',
    href: '/about',
    icon: Users,
    children: [
      { name: 'About Us', href: '/about', icon: Users },
      { name: 'Our Team', href: '/team', icon: Users },
      { name: 'Careers', href: '/careers', icon: Rocket },
      { name: 'Partners', href: '/partners', icon: Network },
      { name: 'News', href: '/news', icon: MessageSquare },
      { name: 'Contact', href: '/contact', icon: Phone }
    ]
  },
  {
    name: 'Pricing',
    href: '/pricing',
    icon: DollarSign
  },
  {
    name: 'Contact',
    href: '/contact',
    icon: Phone
  }
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">Z</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  onMouseEnter={() => setOpenDropdown(item.name)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                  {item.children && <ChevronDown className="w-4 h-4" />}
                </button>

                {item.children && (
                  <AnimatePresence>
                    {openDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                        onMouseEnter={() => setOpenDropdown(item.name)}
                        onMouseLeave={() => setOpenDropdown(null)}
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="flex items-center justify-between px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
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
            ))}
          </nav>

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
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-200"
          >
            <div className="px-4 py-2 space-y-1">
              {navigation.map((item) => (
                <div key={item.name}>
                  <button
                    className="flex items-center justify-between w-full px-3 py-2 text-left text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md text-sm font-medium"
                    onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                  >
                    <div className="flex items-center space-x-2">
                      <item.icon className="w-4 h-4" />
                      <span>{item.name}</span>
                    </div>
                    {item.children && <ChevronDown className="w-4 h-4" />}
                  </button>
                  
                  {item.children && openDropdown === item.name && (
                    <div className="ml-4 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="flex items-center justify-between px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <div className="flex items-center space-x-2">
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
                    </div>
                  )}
                </div>
              ))}
            </div>
=======
import { Menu, X, ChevronDown, Brain, Network, Cloud, Shield, Code, Zap, Building, Phone, Mail, MapPin } from 'lucide-react';
import { useRouter } from 'next/router';

const servicesDropdown = [
  {
    "icon": Brain,
    "title": 'AI & Machine Learning',
    "description": 'Intelligent solutions for business automation',
    "href": '/ai-services',
  },
  {
    "icon": Shield,
    "title": 'Cybersecurity',
    "description": 'Advanced security and threat protection',
    "href": '/it-services',
  },
  {
    "icon": Cloud,
    "title": 'Cloud Infrastructure',
    "description": 'Scalable cloud solutions and migration',
    "href": '/it-services',
  },
  {
    "icon": Code,
    "title": 'Custom Software Development',
    "description": 'Tailored applications to meet your specific business needs',
    "href": '/services',
  },
  {
    "icon": Building,
    "title": 'Micro SaaS Solutions',
    "description": 'Scalable software as a service solutions',
    "href": '/micro-saas',
  },
  {
    "icon": Zap,
    "title": 'Quantum Computing',
    "description": 'Next-generation computational power',
    "href": '/services',
  }
];

const navigation = [
  { "name": 'Home', "href": '/' },
  { "name": 'About', "href": '/about' },
  { "name": 'Services', "href": '/services', "hasDropdown": true, "dropdownItems": servicesDropdown },
  { "name": 'Solutions', "href": '/solutions' },
  { "name": 'Pricing', "href": '/pricing' },
  { "name": 'Blog', "href": '/blog' },
  { "name": 'Contact', "href": '/contact' },
];

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesDropdownOpen(false);
  }, [router.asPath]);

  return (
    <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white shadow-lg z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Zap className="h-8 w-8 text-purple-400" />
          <span className="text-2xl font-bold text-white">Zion Tech Group</span>
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => (
            <div key={item.name} className="relative">
              {item.hasDropdown ? (
                <button
                  className="flex items-center text-lg font-medium hover:text-purple-400 transition-colors"
                  onMouseEnter={() => setIsServicesDropdownOpen(true)}
                  onMouseLeave={() => setIsServicesDropdownOpen(false)}
                >
                  {item.name} <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
              ) : (
                <Link href={item.href} className="text-lg font-medium hover:text-purple-400 transition-colors">
                  {item.name}
                </Link>
              )}
              {item.hasDropdown && isServicesDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-1/2 -translate-x-1/2 mt-4 w-80 bg-slate-800 rounded-lg shadow-xl p-4 grid grid-cols-1 gap-4"
                  onMouseEnter={() => setIsServicesDropdownOpen(true)}
                  onMouseLeave={() => setIsServicesDropdownOpen(false)}
                >
                  {item.dropdownItems?.map((dropdownItem) => {
                    const IconComponent = dropdownItem.icon;
                    return (
                      <Link
                        key={dropdownItem.title}
                        href={dropdownItem.href}
                        className="flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-700 transition-colors group"
                      >
                        <IconComponent className="w-6 h-6 text-purple-400 group-hover:text-blue-400 transition-colors" />
                        <div>
                          <h4 className="text-white font-semibold">{dropdownItem.title}</h4>
                          <p className="text-gray-400 text-sm">{dropdownItem.description}</p>
                        </div>
                      </Link>
                    );
                  })}
                </motion.div>
              )}
            </div>
          ))}
        </nav>
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMobileMenuOpen(true)} className="p-2 rounded-md text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-400">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 z-50 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-64 bg-slate-900 shadow-lg p-6 overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-8">
                <span className="text-xl font-bold text-white">Menu</span>
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 rounded-md text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-400">
                  <X className="h-6 w-6" />
                </button>
              </div>
              <nav className="space-y-4">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.hasDropdown ? (
                      <>
                        <button
                          className="flex items-center w-full text-left text-lg font-medium text-white hover:text-purple-400 transition-colors py-2"
                          onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                        >
                          {item.name} <ChevronDown className={`w-4 h-4 ml-auto transition-transform ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence>
                          {isServicesDropdownOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="pl-4 mt-2 space-y-2"
                            >
                              {item.dropdownItems?.map((dropdownItem) => {
                                const IconComponent = dropdownItem.icon;
                                return (
                                  <Link
                                    key={dropdownItem.title}
                                    href={dropdownItem.href}
                                    className="flex items-center space-x-3 p-2 rounded-lg hover:bg-slate-800 transition-colors text-gray-300 hover:text-white"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                  >
                                    <IconComponent className="w-5 h-5 text-purple-300" />
                                    <span>{dropdownItem.title}</span>
                                  </Link>
                                );
                              })}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className="block text-lg font-medium text-white hover:text-purple-400 transition-colors py-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>
              <div className="mt-8 pt-6 border-t border-slate-700">
                <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
                <div className="space-y-3">
                  <a href="tel:+13024640950" className="flex items-center text-gray-300 hover:text-purple-400 transition-colors">
                    <Phone className="w-5 h-5 mr-3" /> +1 302 464 0950
                  </a>
                  <a href="mailto:kleber@ziontechgroup.com" className="flex items-center text-gray-300 hover:text-purple-400 transition-colors">
                    <Mail className="w-5 h-5 mr-3" /> kleber@ziontechgroup.com
                  </a>
                  <div className="flex items-start text-gray-300">
                    <MapPin className="w-5 h-5 mr-3 mt-0.5" />
                    <span className="text-sm">364 E Main St STE 1008<br /> Middletown, DE 19709</span>
                  </div>
                </div>
              </div>
            </motion.div>
>>>>>>> fff1a961f4ef4a979058d66e8db4fd365994ab84
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
<<<<<<< HEAD
}
=======
};

export default Header;
>>>>>>> fff1a961f4ef4a979058d66e8db4fd365994ab84
