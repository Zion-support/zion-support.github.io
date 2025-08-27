<<<<<<< HEAD
import React from 'react';
import Header from './Header';
import Footer from './Footer';
=======
import type { ReactNode } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

>>>>>>> 5de4620e97688b5970e7272b9ca46e6d1d512b87
interface LayoutProps {
  children: ReactNode;
}
<<<<<<< HEAD
export default function Layout({ children }: LayoutProps) {
=======

const Layout = ({ children }: LayoutProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'Services', href: '/services', current: false },
    { name: 'Products', href: '/products', current: false },
    { name: 'About', href: '/about', current: false },
    { name: 'Contact', href: '/contact', current: false },
  ];

  const services = [
    { name: 'AI Development', href: '/services#ai-development' },
    { name: 'Cloud Migration', href: '/services#cloud-migration' },
    { name: 'Web Development', href: '/services#web-development' },
    { name: 'Mobile Apps', href: '/services#mobile-development' },
    { name: 'Cybersecurity', href: '/services#cybersecurity' },
    { name: 'Data Analytics', href: '/services#data-analytics' },
    { name: 'Blockchain', href: '/services#blockchain' },
    { name: 'IoT Platforms', href: '/services#iot-platforms' },
  ];

  const products = [
    { name: 'ZionAI Content Studio', href: '/products#zionai-content-studio' },
    { name: 'SmartLead Pro', href: '/products#smartlead-pro' },
    { name: 'CodeGenius AI', href: '/products#codegenius-ai' },
    { name: 'TaskMaster AI', href: '/products#taskmaster-ai' },
    { name: 'SecureShield Pro', href: '/products#secureshield-pro' },
    { name: 'BlockchainForge', href: '/products#blockchainforge' },
  ];

>>>>>>> 5de4620e97688b5970e7272b9ca46e6d1d512b87
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Zion Tech Group - Leading technology solutions provider specializing in AI, cloud, cybersecurity, and emerging technologies." />
        <meta name="keywords" content="Zion Tech Group, technology solutions, AI development, cloud migration, cybersecurity" />
        <meta name="author" content="Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:title" content="Zion Tech Group - Technology Solutions Provider" />
        <meta property="og:description" content="Leading technology solutions provider specializing in AI, cloud, cybersecurity, and emerging technologies." />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://ziontechgroup.com" />
        <meta property="twitter:title" content="Zion Tech Group - Technology Solutions Provider" />
        <meta property="twitter:description" content="Leading technology solutions provider specializing in AI, cloud, cybersecurity, and emerging technologies." />
        <meta property="twitter:image" content="https://ziontechgroup.com/og-image.jpg" />
      </Head>

      {/* Navigation */}
      <nav className="bg-white/10 backdrop-blur-sm border-b border-white/20 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-white hover:text-blue-300 transition-colors">
                Zion Tech Group
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-blue-300 transition-colors font-medium"
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Services Dropdown */}
              <div className="relative group">
                <button className="text-white hover:text-blue-300 transition-colors font-medium flex items-center">
                  Services
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-sm rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="py-2">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Products Dropdown */}
              <div className="relative group">
                <button className="text-white hover:text-blue-300 transition-colors font-medium flex items-center">
                  Products
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-sm rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="py-2">
                    {products.map((product) => (
                      <Link
                        key={product.name}
                        href={product.href}
                        className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      >
                        {product.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact Button */}
              <a
                href="tel:+13024640950"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
              >
                📞 Call Now
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-blue-300 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-white/95 backdrop-blur-sm rounded-lg mt-2 mb-4 shadow-xl">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                
                {/* Mobile Services */}
                <div className="border-t border-gray-200 pt-2">
                  <div className="px-3 py-2 text-sm font-semibold text-gray-600">Services</div>
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="block px-6 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>

                {/* Mobile Products */}
                <div className="border-t border-gray-200 pt-2">
                  <div className="px-3 py-2 text-sm font-semibold text-gray-600">Products</div>
                  {products.map((product) => (
                    <Link
                      key={product.name}
                      href={product.href}
                      className="block px-6 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {product.name}
                    </Link>
                  ))}
                </div>

                {/* Mobile Contact */}
                <div className="border-t border-gray-200 pt-2">
                  <a
                    href="tel:+13024640950"
                    className="block px-3 py-2 bg-blue-600 text-white rounded-md text-center font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    📞 Call +1 (302) 464-0950
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-white/10 backdrop-blur-sm border-t border-white/20 mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-white mb-4">Zion Tech Group</h3>
              <p className="text-gray-300 mb-4">
                Leading technology solutions provider helping businesses transform their digital presence 
                with cutting-edge AI, cloud architecture, cybersecurity, and innovative development services.
              </p>
              <div className="flex space-x-4">
                <a href="tel:+13024640950" className="text-blue-400 hover:text-blue-300">
                  📞 +1 (302) 464-0950
                </a>
                <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:text-blue-300">
                  ✉️ kleber@ziontechgroup.com
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-300 hover:text-blue-400 transition-colors">Home</Link></li>
                <li><Link href="/about" className="text-gray-300 hover:text-blue-400 transition-colors">About Us</Link></li>
                <li><Link href="/services" className="text-gray-300 hover:text-blue-400 transition-colors">Services</Link></li>
                <li><Link href="/products" className="text-gray-300 hover:text-blue-400 transition-colors">Products</Link></li>
                <li><Link href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
              <ul className="space-y-2">
                <li><Link href="/services#ai-development" className="text-gray-300 hover:text-blue-400 transition-colors">AI Development</Link></li>
                <li><Link href="/services#cloud-migration" className="text-gray-300 hover:text-blue-400 transition-colors">Cloud Migration</Link></li>
                <li><Link href="/services#cybersecurity" className="text-gray-300 hover:text-blue-400 transition-colors">Cybersecurity</Link></li>
                <li><Link href="/services#web-development" className="text-gray-300 hover:text-blue-400 transition-colors">Web Development</Link></li>
                <li><Link href="/services#blockchain" className="text-gray-300 hover:text-blue-400 transition-colors">Blockchain</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Zion Tech Group. All rights reserved. | 
              Address: 364 E Main St STE 1008, Middletown DE 19709 | 
              Website: <a href="https://ziontechgroup.com" className="text-blue-400 hover:text-blue-300">https://ziontechgroup.com</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
