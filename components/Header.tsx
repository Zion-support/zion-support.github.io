<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu, X, Search } from 'lucide-react';

const navigation = {
  'Services': [
    { name: 'AI Services', href: '/ai-services' },
    { name: 'IT Services', href: '/it-services' },
    { name: 'Micro SaaS', href: '/micro-saas' },
    { name: 'Cloud Solutions', href: '/cloud-solutions' }
  ],
  'Company': [
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Careers', href: '/careers' }
  ],
  'Resources': [
    { name: 'API Docs', href: '/api-docs' },
    { name: 'Guides', href: '/guides' },
    { name: 'Blog', href: '/blog' }
  ]
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const router = useRouter();
=======
<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
=======
import React, { useState } from 'react';
>>>>>>> 380d5be269a380502c5b88f5cbeaaaacd40bbf12
import Link from 'next/link';
<<<<<<< HEAD
import { motion, AnimatePresence } from 'framer-motion';
<<<<<<< HEAD
import { Menu, X, ChevronDown, Brain, Network, Cloud, Shield, Code, Zap, Building, Phone, Mail, MapPin, Search } from 'lucide-react';
=======
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
=======
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  Search, 
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
  Phone, 
  FileText,
  BarChart3,
  Cpu,
  Shield,
  Cloud,
  Database,
  Zap,
  Users,
  CheckCircle,
  ArrowRight,
  Star,
  TrendingUp,
  Target,
  Rocket,
  Code,
  Network,
  Atom,
  Workflow,
  MessageCircle,
  ArrowUp,
  Sparkles,
  Home,
  Truck,
  BookOpen,
  Leaf,
  Satellite,
  HelpCircle,
  Building2,
  Factory,
  Building,
  DollarSign,
  ShoppingCart,
  Heart,
  Eye,
  Server,
  Lock,
  ChevronDown
} from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const router = useRouter();

<<<<<<< HEAD
export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
>>>>>>> main
=======
  const navigation = [
    {
      name: 'Services',
      href: '/services',
      hasDropdown: true,
      children: [
        { name: 'AI Services', href: '/ai-services', icon: Brain },
        { name: 'IT Services', href: '/it-services', icon: Server },
        { name: 'Micro SaaS', href: '/micro-saas', icon: Zap },
        { name: 'Security', href: '/security', icon: Shield },
        { name: 'Cloud Solutions', href: '/cloud-solutions', icon: Cloud },
        { name: 'Database Solutions', href: '/database-solutions', icon: Database }
      ]
    },
    {
      name: 'Solutions',
      href: '/solutions',
      hasDropdown: true,
      children: [
        { name: 'Enterprise Solutions', href: '/enterprise-solutions', icon: Building2 },
        { name: 'Startup Solutions', href: '/startup-solutions', icon: Rocket },
        { name: 'Digital Transformation', href: '/solutions/digital-transformation', icon: Workflow },
        { name: 'Cloud Migration', href: '/solutions/cloud-migration', icon: Cloud },
        { name: 'AI Implementation', href: '/solutions/ai-implementation', icon: Brain },
        { name: 'Cybersecurity', href: '/solutions/cybersecurity', icon: Shield }
      ]
    },
    {
      name: 'Industries',
      href: '/industries',
      hasDropdown: true,
      children: [
        { name: 'Healthcare', href: '/industries/healthcare', icon: Heart },
        { name: 'Finance', href: '/industries/finance', icon: DollarSign },
        { name: 'Manufacturing', href: '/industries/manufacturing', icon: Factory },
        { name: 'Retail', href: '/industries/retail', icon: ShoppingCart },
        { name: 'Education', href: '/industries/education', icon: BookOpen },
        { name: 'Government', href: '/industries/government', icon: Building }
      ]
    },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  const quickLinks = [
    { name: 'Blog', href: '/blog', icon: FileText },
    { name: 'Case Studies', href: '/case-studies', icon: BarChart3 },
    { name: 'White Papers', href: '/white-papers', icon: FileText },
    { name: 'Webinars', href: '/webinars', icon: Users },
    { name: 'Documentation', href: '/docs', icon: BookOpen },
    { name: 'API Docs', href: '/api-docs', icon: Code },
    { name: 'Team', href: '/team', icon: Users },
    { name: 'Careers', href: '/careers', icon: Briefcase },
    { name: 'Partners', href: '/partners', icon: Handshake },
    { name: 'News', href: '/news', icon: Newspaper },
    { name: 'Pricing', href: '/pricing', icon: DollarSign },
    { name: 'Support', href: '/support', icon: HelpCircle }
  ];

  const isActive = (href: string) => router.pathname === href;
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Contact Bar */}
      <div className="bg-gray-900 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>info@ziontechgroup.com</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <span>Trusted by 500+ companies</span>
              <div className="flex items-center">
                <Star className="h-4 w-4 text-yellow-400 mr-1" />
                <span>4.9/5 Rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <span className="ml-3 text-2xl font-bold text-gray-900">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
<<<<<<< HEAD
<<<<<<< HEAD
          <nav className="hidden md:flex space-x-8">
            {Object.entries(navigation).map(([category, links]) => (
              <div key={category} className="relative group">
                <button className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                  {category}
=======
          <nav className="hidden lg:flex space-x-8">
=======
          <div className="hidden lg:flex items-center space-x-8">
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div
                    className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 cursor-pointer transition-colors duration-200"
                    onMouseEnter={() => {
                      if (item.name === 'Services') setIsServicesOpen(true);
                      if (item.name === 'Solutions') setIsSolutionsOpen(true);
                    }}
                    onMouseLeave={() => {
                      if (item.name === 'Services') setIsServicesOpen(false);
                      if (item.name === 'Solutions') setIsSolutionsOpen(false);
                    }}
                  >
                    <span className="font-medium">{item.name}</span>
                    <ChevronDown className="h-4 w-4" />
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`font-medium transition-colors duration-200 ${
                      isActive(item.href) ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}

                {/* Services Dropdown */}
                {item.name === 'Services' && (
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-4"
                        onMouseEnter={() => setIsServicesOpen(true)}
                        onMouseLeave={() => setIsServicesOpen(false)}
                      >
                        <div className="grid grid-cols-2 gap-2">
                          {item.children?.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors duration-200"
                            >
                              <child.icon className="h-5 w-5 mr-3 text-blue-500" />
                              <span className="text-sm font-medium">{child.name}</span>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}

                {/* Solutions Dropdown */}
                {item.name === 'Solutions' && (
                  <AnimatePresence>
                    {isSolutionsOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-4"
                        onMouseEnter={() => setIsSolutionsOpen(true)}
                        onMouseLeave={() => setIsSolutionsOpen(false)}
                      >
                        <div className="grid grid-cols-2 gap-2">
                          {item.children?.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors duration-200"
                            >
                              <child.icon className="h-5 w-5 mr-3 text-blue-500" />
                              <span className="text-sm font-medium">{child.name}</span>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
<<<<<<< HEAD
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
=======
import { Menu, X, ChevronDown, Brain, Network, Cloud, Shield, Code, Zap, Building, Phone, Mail, MapPin } from 'lucide-react';
>>>>>>> 380d5be269a380502c5b88f5cbeaaaacd40bbf12
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
    "icon": Network,
    "title": 'IT Consulting',
    "description": 'Strategic technology planning and implementation',
    "href": '/it-services',
  },
  {
    "icon": Zap,
    "title": 'Micro SaaS Solutions',
    "description": 'Scalable software-as-a-service platforms',
    "href": '/micro-saas',
  }
];

<<<<<<< HEAD
const navigation = [
  { "name": 'Home', "href": '/' },
  { "name": 'About', "href": '/about' },
  { "name": 'Services', "href": '/services', "hasDropdown": true, "dropdownItems": servicesDropdown },
  { "name": 'Solutions', "href": '/solutions' },
  { "name": 'Case Studies', "href": '/case-studies' },
  { "name": 'Careers', "href": '/careers' },
  { "name": 'Contact', "href": '/contact' }
];

=======
>>>>>>> 380d5be269a380502c5b88f5cbeaaaacd40bbf12
const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
<<<<<<< HEAD

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
=======
import { useRouter } from 'next/navigation';
import { 
  Menu, 
  X, 
  Search, 
  Phone, 
  Mail, 
  MapPin,
  ChevronDown,
  Building2
} from 'lucide-react';

const navigation = {
  'Services': [
    { name: 'AI Services', href: '/ai-services' },
    { name: 'IT Services', href: '/it-services' },
    { name: 'Micro SaaS', href: '/micro-saas' },
    { name: 'Cloud Solutions', href: '/cloud-solutions' },
    { name: 'Cybersecurity', href: '/cybersecurity' },
    { name: 'Quantum Computing', href: '/quantum-computing' },
    { name: 'Blockchain Solutions', href: '/blockchain' },
    { name: 'IoT Solutions', href: '/iot-solutions' },
    { name: 'Edge Computing', href: '/edge-computing' },
    { name: '5G Networks', href: '/5g-networks' }
  ],
  'Solutions': [
    { name: 'Enterprise Solutions', href: '/solutions/enterprise' },
    { name: 'Startup Solutions', href: '/solutions/startup' },
    { name: 'Digital Transformation', href: '/solutions/digital-transformation' },
    { name: 'Custom Development', href: '/solutions/custom' }
  ],
  'Industries': [
    { name: 'Healthcare', href: '/industries/healthcare' },
    { name: 'Finance', href: '/industries/finance' },
    { name: 'Education', href: '/industries/education' },
    { name: 'Government', href: '/industries/government' },
    { name: 'Manufacturing', href: '/industries/manufacturing' },
    { name: 'Retail', href: '/industries/retail' },
    { name: 'Agriculture', href: '/industries/agriculture' },
    { name: 'Energy', href: '/industries/energy' }
  ],
  'Resources': [
    { name: 'Blog', href: '/blog' },
    { name: 'Documentation', href: '/docs' },
    { name: 'API Documentation', href: '/docs/api' },
    { name: 'Tutorials', href: '/tutorials' },
    { name: 'White Papers', href: '/white-papers' },
    { name: 'Webinars', href: '/webinars' },
    { name: 'Training', href: '/training' },
    { name: 'FAQ', href: '/faq' }
  ],
  'Company': [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'News', href: '/news' },
    { name: 'Partners', href: '/partners' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' }
  ]
};
>>>>>>> main

const quickLinks = [
  { name: 'Free Consultation', href: '/consultation' },
  { name: 'Get Quote', href: '/quote' },
  { name: 'Support', href: '/support' }
];

export default function Header({ onMenuClick }: { onMenuClick: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDropdownToggle = (item: string) => {
    setActiveDropdown(activeDropdown === item ? null : item);
  };

<<<<<<< HEAD
  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
              <Brain className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className="flex items-center space-x-1 text-gray-700 hover:text-purple-600 transition-colors font-medium"
                  onMouseEnter={() => item.hasDropdown && setIsServicesOpen(true)}
                  onMouseLeave={() => item.hasDropdown && setIsServicesOpen(false)}
                >
                  <span>{item.name}</span>
                  {item.hasDropdown && <ChevronDown className="h-4 w-4" />}
                </Link>

                {/* Services Dropdown */}
                {item.hasDropdown && (
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-200 py-4"
                        onMouseEnter={() => setIsServicesOpen(true)}
                        onMouseLeave={() => setIsServicesOpen(false)}
                      >
                        <div className="grid grid-cols-1 gap-2">
                          {item.dropdownItems?.map((service, index) => (
                            <Link
                              key={index}
                              href={service.href}
                              className="flex items-start space-x-3 p-3 hover:bg-gray-50 transition-colors"
                            >
                              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                <service.icon className="h-5 w-5 text-purple-600" />
                              </div>
                              <div>
                                <h3 className="font-semibold text-gray-900">{service.title}</h3>
                                <p className="text-sm text-gray-600">{service.description}</p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/contact"
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
            >
=======

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Brain className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={toggleServices}
                className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
              >
                Services
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-96 bg-white rounded-lg shadow-xl border border-gray-200 py-4"
                  >
                    <div className="grid grid-cols-2 gap-4 px-6">
                      {servicesDropdown.map((service, index) => (
                        <Link
                          key={index}
                          href={service.href}
                          className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                          onClick={closeMenu}
                        >
                          <div className="flex-shrink-0">
                            <service.icon className="h-6 w-6 text-blue-600" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 text-sm">{service.title}</h3>
                            <p className="text-gray-600 text-xs mt-1">{service.description}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </Link>
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-0b51
            <Link
              href="/contact"
              className="px-6 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium"
            >
<<<<<<< HEAD
              Get Quote
            </Link>
            <Link
              href="/contact"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-0b51
>>>>>>> 380d5be269a380502c5b88f5cbeaaaacd40bbf12
              Get Started
            </Link>
          </div>

<<<<<<< HEAD
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
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
              className="lg:hidden bg-white border-t border-gray-200"
            >
              <div className="px-4 py-6 space-y-4">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      className="block py-2 text-gray-700 hover:text-purple-600 transition-colors font-medium"
                      onClick={closeMenu}
                    >
                      {item.name}
                    </Link>
                    {item.hasDropdown && item.dropdownItems && (
                      <div className="ml-4 space-y-2 mt-2">
                        {item.dropdownItems.map((service, index) => (
                          <Link
                            key={index}
                            href={service.href}
                            className="block py-1 text-sm text-gray-600 hover:text-purple-600 transition-colors"
                            onClick={closeMenu}
                          >
                            {service.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-4 border-t border-gray-200">
                  <Link
                    href="/contact"
                    className="block w-full bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors text-center"
                    onClick={closeMenu}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
=======
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
              <Building2 className="w-8 h-8 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {Object.entries(navigation).map(([title, links]) => (
              <div key={title} className="relative group">
                <button
                  className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors"
                  onMouseEnter={() => setActiveDropdown(title)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <span>{title}</span>
                  <ChevronDown className="w-4 h-4" />
>>>>>>> main
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-1">
                    {links.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </nav>

<<<<<<< HEAD
          {/* Search and CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-gray-400 hover:text-gray-500"
            >
              <Search className="h-5 w-5" />
            </button>
=======
          {/* Quick Links */}
          <div className="hidden lg:flex items-center space-x-4">
            {quickLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                {link.name}
              </Link>
            ))}
>>>>>>> main
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Started
=======
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
            </Link>
          </div>

<<<<<<< HEAD
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-400 hover:text-gray-500"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {Object.entries(navigation).map(([category, links]) => (
                <div key={category}>
                  <div className="text-gray-500 px-3 py-2 text-sm font-medium">{category}</div>
                  {links.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="block px-6 py-2 text-base text-gray-700 hover:bg-gray-100"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="md:absolute md:top-16 md:left-0 md:right-0 md:bg-white md:shadow-lg md:border-t">
            <div className="max-w-7xl mx-auto px-4 py-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search services, solutions..."
                  className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>
        )}
=======
          {/* Mobile Menu Button */}
<<<<<<< HEAD
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
>>>>>>> main
      </div>
>>>>>>> main
    </header>
  );
<<<<<<< HEAD
}
=======
}
=======
<<<<<<< HEAD
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
=======
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-gray-200"
            >
              <div className="py-4 space-y-4">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.hasDropdown ? (
                      <div>
                        <div className="flex items-center justify-between px-4 py-2 text-gray-700 font-medium">
                          <span>{item.name}</span>
                          <ChevronDown className="h-4 w-4" />
                        </div>
                        <div className="pl-4 space-y-2">
                          {item.children?.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="flex items-center px-4 py-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
                            >
                              <child.icon className="h-4 w-4 mr-3 text-blue-500" />
                              <span className="text-sm">{child.name}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className={`block px-4 py-2 font-medium transition-colors duration-200 ${
                          isActive(item.href) ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                        }`}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                
                <div className="pt-4 border-t border-gray-200">
                  <Link
                    href="/contact"
                    className="block mx-4 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg text-center hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                  >
                    Get Started
                  </Link>
                </div>
<<<<<<< HEAD
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
=======
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-200"
            >
              <div className="px-4 py-6 space-y-4">
                <Link
                  href="/"
                  className="block text-gray-700 hover:text-blue-600 transition-colors"
                  onClick={closeMenu}
                >
                  Home
                </Link>
                
                <div>
                  <button
                    onClick={toggleServices}
                    className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    Services
                    <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="ml-4 mt-2 space-y-2"
                      >
                        {servicesDropdown.map((service, index) => (
                          <Link
                            key={index}
                            href={service.href}
                            className="block text-gray-600 hover:text-blue-600 transition-colors text-sm"
                            onClick={closeMenu}
                          >
                            {service.title}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link
                  href="/about"
                  className="block text-gray-700 hover:text-blue-600 transition-colors"
                  onClick={closeMenu}
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="block text-gray-700 hover:text-blue-600 transition-colors"
                  onClick={closeMenu}
                >
                  Contact
                </Link>
                <Link
                  href="/contact"
                  className="block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors text-center"
                  onClick={closeMenu}
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
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-0b51
>>>>>>> 380d5be269a380502c5b88f5cbeaaaacd40bbf12
>>>>>>> main
=======
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
