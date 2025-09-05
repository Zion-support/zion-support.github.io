<<<<<<< HEAD
import React, { useState } from 'react';
import Head from 'next/head';
<<<<<<< HEAD
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Phone, 
  Mail, 
  MapPin, 
<<<<<<< HEAD
  ArrowRight,
  Brain,
  Cloud,
  Network,
  Shield,
  Zap,
  Globe,
  Code,
  Database,
  Settings,
  Users,
  Award,
  TrendingUp,
  Building,
  Rocket,
  Target,
  Heart,
  Star,
  CheckCircle
=======
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  Github,
  Globe,
  ArrowRight,
  CheckCircle,
  Star
>>>>>>> c1f19efa26544fbb335493082b33a55c1d58d4f8
} from 'lucide-react';

interface LayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
  keywords?: string;
<<<<<<< HEAD
=======
import Header from './Header';
import Sidebar from './Sidebar';
=======
import React from 'react';
import Head from 'next/head';
import Header from './Header';
>>>>>>> pr-11935
import Footer from './Footer';

interface LayoutProps {
  title?: string;
  description?: string;
<<<<<<< HEAD
  keywords?: string;
>>>>>>> pr-11914
=======
  children: React.ReactNode;
  keywords?: string;
>>>>>>> pr-11935
  ogImage?: string;
  noIndex?: boolean;
}

<<<<<<< HEAD
<<<<<<< HEAD
const navigation = [
  { name: 'Home', href: '/' },
  { name: 'AI Services', href: '/ai-services' },
  { name: 'IT Services', href: '/it-services' },
  { name: 'Micro SaaS', href: '/micro-saas' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
  { name: 'Pricing', href: '/pricing' }
];

const services = [
  {
    name: 'AI Services',
    href: '/ai-services',
    description: 'Cutting-edge artificial intelligence solutions',
    icon: Brain
  },
  {
    name: 'IT Services',
    href: '/it-services',
    description: 'Comprehensive technology infrastructure',
    icon: Network
  },
  {
    name: 'Micro SaaS',
    href: '/micro-saas',
    description: 'Innovative software-as-a-service solutions',
    icon: Cloud
  }
];

=======
>>>>>>> pr-11914
export default function Layout({
  children,
  title = 'Zion Tech Group - Leading AI & Technology Solutions',
  description = 'Transform your business with cutting-edge AI solutions, cloud services, and technology consulting. Expert team delivering innovative results.',
<<<<<<< HEAD
  keywords = 'AI solutions, cloud services, technology consulting, digital transformation, IT services, machine learning, cybersecurity',
  ogImage = '/og-image.jpg',
  noIndex = false
}: LayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
=======
  keywords = 'AI solutions, technology consulting, cloud services, automation, cybersecurity, web development, mobile development',
  ogImage = '/og-image.jpg',
  noIndex = false
}: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
>>>>>>> pr-11914
=======
export default function Layout({
  children,
  title = 'Zion Tech Group - Leading Technology Solutions',
  description = 'Comprehensive AI, IT, and Micro SAAS services for modern businesses. Expert solutions for digital transformation, cloud computing, and innovation.',
  keywords = 'AI services, IT solutions, Micro SAAS, cloud computing, digital transformation, technology consulting',
  ogImage = '/og-image.jpg',
  noIndex = false
}: LayoutProps) {
  return (
    <>
>>>>>>> pr-11935
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
<<<<<<< HEAD
<<<<<<< HEAD
        <link rel="icon" href="/favicon.ico" />
=======
        <meta name="robots" content={noIndex ? "noindex,nofollow" : "index,follow"} />
>>>>>>> pr-11914
        
        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:type" content="website" />
<<<<<<< HEAD
        <meta property="og:url" content="https://ziontechgroup.com" />
        
        {/* Twitter */}
=======
        <meta property="og:site_name" content="Zion Tech Group" />
        
        {/* Twitter Card */}
>>>>>>> pr-11914
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        
<<<<<<< HEAD
        {noIndex && <meta name="robots" content="noindex, nofollow" />}
      </Head>

      {/* Header */}
      <header className="relative z-50">
        <nav className="bg-black/20 backdrop-blur-sm border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <div className="flex-shrink-0">
                <Link href="/" className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <Brain className="h-6 w-6 text-white" />
                  </div>
                  <span className="ml-3 text-xl font-bold text-white">ZionTech Group</span>
                </Link>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div className="hidden md:block">
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                  className="text-gray-300 hover:text-white p-2"
                >
                  {isSidebarOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="fixed inset-0 bg-black/50" onClick={() => setIsSidebarOpen(false)} />
            <div className="relative flex-1 flex flex-col max-w-xs w-full bg-slate-900">
              <div className="absolute top-0 right-0 -mr-12 pt-2">
                <button
                  onClick={() => setIsSidebarOpen(false)}
                  className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                >
                  <X className="h-6 w-6 text-white" />
                </button>
              </div>
              <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                <div className="flex-shrink-0 flex items-center px-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <Brain className="h-6 w-6 text-white" />
                  </div>
                  <span className="ml-3 text-xl font-bold text-white">ZionTech Group</span>
                </div>
                <nav className="mt-5 px-2 space-y-1">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md"
                      onClick={() => setIsSidebarOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-black/40 backdrop-blur-sm border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <span className="ml-3 text-2xl font-bold text-white">ZionTech Group</span>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Leading provider of AI services, IT solutions, and micro SaaS platforms. 
                Transforming businesses with cutting-edge technology and innovative solutions.
              </p>
              <div className="flex space-x-4">
                <a href="tel:+13024640950" className="text-gray-400 hover:text-white transition-colors">
                  <Phone className="h-5 w-5" />
                </a>
                <a href="mailto:kleber@ziontechgroup.com" className="text-gray-400 hover:text-white transition-colors">
                  <Mail className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <MapPin className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service.name}>
                    <Link
                      href={service.href}
                      className="text-gray-300 hover:text-white transition-colors flex items-center"
                    >
                      <service.icon className="h-4 w-4 mr-2" />
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
              <div className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Mail className="h-4 w-4 mr-2" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-start text-gray-300">
                  <MapPin className="h-4 w-4 mr-2 mt-1 flex-shrink-0" />
                  <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © 2024 ZionTech Group. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Terms of Service
                </Link>
=======
}

export default function Layout({ title, description, children, keywords }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

  const services = [
    { name: 'AI Services', href: '/ai-services', description: 'Machine Learning, NLP, Computer Vision' },
    { name: 'IT Services', href: '/it-services', description: 'Cloud, DevOps, Cybersecurity' },
    { name: 'Micro SaaS', href: '/micro-saas', description: 'Custom SaaS Solutions' },
    { name: 'Blockchain', href: '/blockchain', description: 'Smart Contracts, DeFi, NFTs' },
    { name: 'IoT Solutions', href: '/iot', description: 'Connected Devices, Edge Computing' },
    { name: 'Cybersecurity', href: '/cybersecurity', description: 'Security Audits, Compliance' }
  ];

  const solutions = [
    { name: 'Enterprise Solutions', href: '/enterprise', description: 'Large-scale business solutions' },
    { name: 'Startup Solutions', href: '/solutions/startup', description: 'Scalable startup platforms' },
    { name: 'E-commerce', href: '/ecommerce', description: 'Online store solutions' },
    { name: 'Healthcare', href: '/industries/healthcare', description: 'Medical technology solutions' },
    { name: 'Finance', href: '/industries/finance', description: 'Fintech and banking solutions' },
    { name: 'Education', href: '/industries/education', description: 'EdTech platforms' }
  ];

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords || "AI services, IT solutions, micro SaaS, technology consulting, digital transformation"} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gray-50">
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
>>>>>>> c1f19efa26544fbb335493082b33a55c1d58d4f8
              </div>
            </div>
          </div>
        </div>
<<<<<<< HEAD
      </footer>
    </div>
  );
}
=======

        {/* Main Navigation */}
        <nav className="bg-white shadow-lg sticky top-0 z-50">
          <div className="container mx-auto px-4">
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
              <div className="hidden lg:flex items-center space-x-8">
                <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                  Home
                </Link>
                
                {/* Services Dropdown */}
                <div className="relative group">
                  <button 
                    className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    Services
                    <ChevronDown className="w-4 h-4 ml-1" />
                  </button>
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
                        <div className="grid grid-cols-2 gap-4 px-6">
                          {services.map((service, index) => (
                            <Link
                              key={index}
                              href={service.href}
                              className="p-3 rounded-lg hover:bg-blue-50 transition-colors group"
                            >
                              <div className="font-medium text-gray-900 group-hover:text-blue-600">
                                {service.name}
                              </div>
                              <div className="text-sm text-gray-500 mt-1">
                                {service.description}
                              </div>
                            </Link>
                          ))}
                        </div>
                        <div className="border-t border-gray-200 mt-4 pt-4 px-6">
                          <Link 
                            href="/services" 
                            className="flex items-center text-blue-600 hover:text-blue-700 font-medium"
                          >
                            View All Services
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Solutions Dropdown */}
                <div className="relative group">
                  <button 
                    className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors"
                    onMouseEnter={() => setIsSolutionsOpen(true)}
                    onMouseLeave={() => setIsSolutionsOpen(false)}
                  >
                    Solutions
                    <ChevronDown className="w-4 h-4 ml-1" />
                  </button>
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
                        <div className="grid grid-cols-2 gap-4 px-6">
                          {solutions.map((solution, index) => (
                            <Link
                              key={index}
                              href={solution.href}
                              className="p-3 rounded-lg hover:bg-blue-50 transition-colors group"
                            >
                              <div className="font-medium text-gray-900 group-hover:text-blue-600">
                                {solution.name}
                              </div>
                              <div className="text-sm text-gray-500 mt-1">
                                {solution.description}
                              </div>
                            </Link>
                          ))}
                        </div>
                        <div className="border-t border-gray-200 mt-4 pt-4 px-6">
                          <Link 
                            href="/solutions" 
                            className="flex items-center text-blue-600 hover:text-blue-700 font-medium"
                          >
                            View All Solutions
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link href="/pricing" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                  Pricing
                </Link>
                <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                  About
                </Link>
                <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                  Contact
                </Link>
              </div>

              {/* CTA Buttons */}
              <div className="hidden lg:flex items-center space-x-4">
                <Link 
                  href="/contact" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                >
                  Get Started
                </Link>
                <a 
                  href="tel:+13024640950" 
                  className="bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-2 rounded-lg font-medium transition-colors"
                >
                  Call Now
                </a>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
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
                  className="lg:hidden border-t border-gray-200"
                >
                  <div className="py-4 space-y-2">
                    <Link 
                      href="/" 
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Home
                    </Link>
                    <div className="px-4 py-2">
                      <div className="font-medium text-gray-900 mb-2">Services</div>
                      <div className="space-y-1 ml-4">
                        {services.map((service, index) => (
                          <Link
                            key={index}
                            href={service.href}
                            className="block py-1 text-sm text-gray-600 hover:text-blue-600"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                    <div className="px-4 py-2">
                      <div className="font-medium text-gray-900 mb-2">Solutions</div>
                      <div className="space-y-1 ml-4">
                        {solutions.map((solution, index) => (
                          <Link
                            key={index}
                            href={solution.href}
                            className="block py-1 text-sm text-gray-600 hover:text-blue-600"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {solution.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                    <Link 
                      href="/pricing" 
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Pricing
                    </Link>
                    <Link 
                      href="/about" 
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      About
                    </Link>
                    <Link 
                      href="/contact" 
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Contact
                    </Link>
                    <div className="px-4 py-2 space-y-2">
                      <Link 
                        href="/contact" 
                        className="block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium text-center"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Get Started
                      </Link>
                      <a 
                        href="tel:+13024640950" 
                        className="block bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-4 py-2 rounded-lg font-medium text-center"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Call Now
                      </a>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* Main Content */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white">
          <div className="container mx-auto px-4 py-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Company Info */}
              <div className="lg:col-span-1">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xl">Z</span>
                  </div>
                  <div>
                    <div className="text-xl font-bold">Zion Tech Group</div>
                    <div className="text-sm text-gray-400">Technology Solutions</div>
                  </div>
                </div>
                <p className="text-gray-400 mb-6">
                  Leading provider of AI services, IT solutions, and innovative micro SAAS platforms. 
                  We help businesses scale, automate, and innovate with cutting-edge technology.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Services */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Services</h3>
                <ul className="space-y-2">
                  {services.slice(0, 6).map((service, index) => (
                    <li key={index}>
                      <Link 
                        href={service.href} 
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Solutions */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Solutions</h3>
                <ul className="space-y-2">
                  {solutions.slice(0, 6).map((solution, index) => (
                    <li key={index}>
                      <Link 
                        href={solution.href} 
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {solution.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Phone className="w-5 h-5 mr-3 mt-1 text-blue-400" />
                    <div>
                      <div className="text-gray-400">Phone</div>
                      <a href="tel:+13024640950" className="text-white hover:text-blue-400">
                        +1 302 464 0950
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="w-5 h-5 mr-3 mt-1 text-blue-400" />
                    <div>
                      <div className="text-gray-400">Email</div>
                      <a href="mailto:kleber@ziontechgroup.com" className="text-white hover:text-blue-400">
                        kleber@ziontechgroup.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 mr-3 mt-1 text-blue-400" />
                    <div>
                      <div className="text-gray-400">Address</div>
                      <div className="text-white">
                        364 E Main St STE 1008<br />
                        Middletown DE 19709
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800 mt-12 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="text-gray-400 text-sm mb-4 md:mb-0">
                  © 2025 Zion Tech Group. All rights reserved.
                </div>
                <div className="flex flex-wrap justify-center gap-6 text-sm">
                  <Link href="/sitemap" className="text-gray-400 hover:text-white transition-colors">
                    Sitemap
                  </Link>
                  <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                  <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                  <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors">
                    Cookie Policy
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
>>>>>>> c1f19efa26544fbb335493082b33a55c1d58d4f8
=======
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Security headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        
        {/* Performance hints */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      </Head>
      
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header onMenuClick={toggleSidebar} />
        
        <div className="flex flex-1">
          <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
          
          <main className="flex-1 overflow-x-hidden">
            {children}
          </main>
        </div>
        
=======
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://ziontechgroup.com" />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={ogImage} />
        
        {/* SEO */}
        {noIndex && <meta name="robots" content="noindex,nofollow" />}
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Zion Tech Group",
              "url": "https://ziontechgroup.com",
              "logo": "https://ziontechgroup.com/logo.png",
              "description": description,
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "364 E Main St STE 1008",
                "addressLocality": "Middletown",
                "addressRegion": "DE",
                "postalCode": "19709",
                "addressCountry": "US"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-302-464-0950",
                "contactType": "customer service",
                "email": "kleber@ziontechgroup.com"
              },
              "sameAs": [
                "https://ziontechgroup.com"
              ]
            })
          }}
        />
      </Head>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="flex-1">
          {children}
        </main>
>>>>>>> pr-11935
        <Footer />
      </div>
    </>
  );
<<<<<<< HEAD
}
>>>>>>> pr-11914
=======
}
>>>>>>> pr-11935
