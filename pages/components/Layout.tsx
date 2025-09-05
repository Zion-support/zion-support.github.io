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
    { name: 'Education', href: '/education', description: 'EdTech platforms' },
    { name: 'Manufacturing', href: '/manufacturing', description: 'Industrial automation and IoT' },
    { name: 'Retail', href: '/retail', description: 'Omnichannel retail solutions' },
    { name: 'Government', href: '/government', description: 'Public sector technology solutions' },
    { name: 'Non-Profit', href: '/nonprofit', description: 'Technology for social impact' }
  ];

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Support', href: '/support' },
    { name: 'Documentation', href: '/docs' },
    { name: 'API Reference', href: '/api-docs' }
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
                  <a href="tel:+13024640950" className="hover:text-blue-300 font-semibold">+1 302 464 0950</a>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:text-blue-300 font-semibold">kleber@ziontechgroup.com</a>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="text-blue-200">364 E Main St STE 1008, Middletown DE 19709</span>
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {/* Company Info */}
              <div className="lg:col-span-2">
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
                  We help businesses scale, automate, and innovate with cutting-edge technology including 
                  quantum computing, blockchain, edge computing, and autonomous systems.
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
                  {services.slice(0, 8).map((service, index) => (
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
                  {solutions.slice(0, 8).map((solution, index) => (
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
                <div className="flex space-x-6 text-sm">
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