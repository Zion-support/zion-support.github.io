<<<<<<< HEAD
import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
=======
import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Phone, 
  Mail, 
  MapPin, 
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
} from 'lucide-react';
>>>>>>> b4d898fba518bac526c850fb09a7d1e502e98a14

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
<<<<<<< HEAD
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
=======
>>>>>>> b4d898fba518bac526c850fb09a7d1e502e98a14
  ogImage?: string;
  noIndex?: boolean;
}

<<<<<<< HEAD
const Layout: React.FC<LayoutProps> = ({
  children,
  title = "Zion Tech Group",
  description = "Leading technology solutions provider",
  keywords = "technology, AI, IT, micro SaaS, solutions",
  canonical = "https://ziontechgroup.com",
  ogTitle,
  ogDescription,
  ogImage,
  noIndex = false,
}) => {
=======
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

export default function Layout({
  children,
  title = 'Zion Tech Group - Leading AI & Technology Solutions',
  description = 'Transform your business with cutting-edge AI solutions, cloud services, and technology consulting. Expert team delivering innovative results.',
  keywords = 'AI solutions, cloud services, technology consulting, digital transformation, IT services, machine learning, cybersecurity',
  ogImage = '/og-image.jpg',
  noIndex = false
}: LayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

>>>>>>> b4d898fba518bac526c850fb09a7d1e502e98a14
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
<<<<<<< HEAD
        {canonical && <link rel="canonical" href={canonical} />}
        {ogTitle && <meta property="og:title" content={ogTitle} />}
        {ogDescription && <meta property="og:description" content={ogDescription} />}
        {ogImage && <meta property="og:image" content={ogImage} />}
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />
=======
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        
>>>>>>> b4d898fba518bac526c850fb09a7d1e502e98a14
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
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
<<<<<<< HEAD
};

export default Layout;
=======
}
>>>>>>> b4d898fba518bac526c850fb09a7d1e502e98a14
