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
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  Github,
  Globe,
  ArrowRight,
  CheckCircle,
  Star
} from 'lucide-react';

interface LayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
  keywords?: string;
}

export default function Layout({ title, description, children, keywords }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

  const services = [
    { name: 'AI Services', href: '/ai-services', description: 'Machine Learning, NLP, Computer Vision, Quantum AI' },
    { name: 'IT Services', href: '/it-services', description: 'Cloud, DevOps, Cybersecurity, Quantum Computing' },
    { name: 'Micro SaaS', href: '/micro-saas', description: 'CRM, Project Management, E-commerce, HR Systems' },
    { name: 'Blockchain', href: '/blockchain', description: 'Smart Contracts, DeFi, NFTs, Cryptocurrency' },
    { name: 'IoT Solutions', href: '/iot', description: 'Connected Devices, Edge Computing, Real-time Analytics' },
    { name: 'Cybersecurity', href: '/cybersecurity', description: 'Security Audits, Compliance, Threat Detection' },
    { name: 'Quantum Computing', href: '/quantum-computing', description: 'Quantum Algorithms, Optimization, Simulation' },
    { name: 'Edge Computing', href: '/edge-computing', description: 'Distributed Computing, Low Latency, 5G' }
  ];

  const solutions = [
    { name: 'Enterprise Solutions', href: '/enterprise', description: 'Large-scale business solutions' },
    { name: 'Startup Solutions', href: '/startup', description: 'Scalable startup platforms' },
    { name: 'E-commerce', href: '/ecommerce', description: 'Online store solutions' },
    { name: 'Healthcare', href: '/healthcare', description: 'Medical technology solutions' },
    { name: 'Finance', href: '/finance', description: 'Fintech and banking solutions' },
    { name: 'Education', href: '/education', description: 'EdTech and learning platforms' },
    { name: 'Real Estate', href: '/real-estate', description: 'Property management solutions' },
    { name: 'Retail', href: '/retail', description: 'Retail technology solutions' }
  ];

  return (
    <>
      <Head>
        <title>{title} | Zion Tech Group</title>
        <meta name="description" content={description} />
        {keywords && <meta name="keywords" content={keywords} />}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <div className="flex-shrink-0">
                <Link href="/" className="flex items-center">
                  <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">Z</span>
                  </div>
                  <span className="ml-2 text-xl font-bold text-gray-900">Zion Tech Group</span>
                </Link>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex space-x-8">
                <Link href="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                  Home
                </Link>
                
                {/* Services Dropdown */}
                <div className="relative">
                  <button
                    className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium flex items-center"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    Services
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute left-0 mt-2 w-80 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50"
                        onMouseEnter={() => setIsServicesOpen(true)}
                        onMouseLeave={() => setIsServicesOpen(false)}
                      >
                        <div className="py-1">
                          {services.map((service) => (
                            <Link
                              key={service.name}
                              href={service.href}
                              className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50"
                            >
                              <div className="font-medium">{service.name}</div>
                              <div className="text-gray-500 text-xs">{service.description}</div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Solutions Dropdown */}
                <div className="relative">
                  <button
                    className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium flex items-center"
                    onMouseEnter={() => setIsSolutionsOpen(true)}
                    onMouseLeave={() => setIsSolutionsOpen(false)}
                  >
                    Solutions
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  
                  <AnimatePresence>
                    {isSolutionsOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute left-0 mt-2 w-80 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50"
                        onMouseEnter={() => setIsSolutionsOpen(true)}
                        onMouseLeave={() => setIsSolutionsOpen(false)}
                      >
                        <div className="py-1">
                          {solutions.map((solution) => (
                            <Link
                              key={solution.name}
                              href={solution.href}
                              className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50"
                            >
                              <div className="font-medium">{solution.name}</div>
                              <div className="text-gray-500 text-xs">{solution.description}</div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link href="/about" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                  About
                </Link>
                <Link href="/contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                  Contact
                </Link>
              </nav>

              {/* CTA Button */}
              <div className="hidden md:flex items-center space-x-4">
                <Link
                  href="/quote"
                  className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
                >
                  Get Quote
                </Link>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-gray-700 hover:text-blue-600 p-2"
                >
                  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
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
                <div className="px-2 pt-2 pb-3 space-y-1">
                  <Link href="/" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">
                    Home
                  </Link>
                  <Link href="/about" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">
                    About
                  </Link>
                  <Link href="/contact" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">
                    Contact
                  </Link>
                  <Link href="/quote" className="block px-3 py-2 text-base font-medium text-blue-600 hover:text-blue-700">
                    Get Quote
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        {/* Main Content */}
        <main className="flex-1">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Company Info */}
              <div className="col-span-1 md:col-span-2">
                <div className="flex items-center mb-4">
                  <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">Z</span>
                  </div>
                  <span className="ml-2 text-xl font-bold">Zion Tech Group</span>
                </div>
                <p className="text-gray-300 mb-4 max-w-md">
                  Leading provider of AI, IT services, and innovative technology solutions for businesses worldwide.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-white">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white">
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
              </div>

              {/* Services */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Services</h3>
                <ul className="space-y-2">
                  <li><Link href="/ai-services" className="text-gray-300 hover:text-white">AI Services</Link></li>
                  <li><Link href="/it-services" className="text-gray-300 hover:text-white">IT Services</Link></li>
                  <li><Link href="/micro-saas" className="text-gray-300 hover:text-white">Micro SaaS</Link></li>
                  <li><Link href="/blockchain" className="text-gray-300 hover:text-white">Blockchain</Link></li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-2" />
                    <span className="text-gray-300">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-2" />
                    <span className="text-gray-300">info@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span className="text-gray-300">New York, NY</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-8 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-400 text-sm">
                  © 2024 Zion Tech Group. All rights reserved.
                </p>
                <div className="flex space-x-6 mt-4 md:mt-0">
                  <Link href="/privacy" className="text-gray-400 hover:text-white text-sm">Privacy Policy</Link>
                  <Link href="/terms" className="text-gray-400 hover:text-white text-sm">Terms of Service</Link>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}