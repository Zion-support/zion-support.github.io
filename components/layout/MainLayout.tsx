import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';

interface MainLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({ 
  children, 
  title = 'Zion Tech Group - Leading Technology Solutions',
  description = 'Zion Tech Group provides cutting-edge technology solutions for modern businesses. From AI development to cloud architecture, we help companies transform their digital presence.'
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
      </Head>
      
      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-lg sticky top-0 z-50">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center py-4">
              <Link href="/">
                <span className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xl">Z</span>
                  </div>
                  <span className="text-xl font-bold text-gray-800">Zion Tech Group</span>
                </span>
              </Link>
              
              {/* Desktop Navigation */}
              <nav className="hidden md:flex space-x-8">
                <Link href="/">
                  <span className="text-gray-600 hover:text-blue-600 transition-colors font-medium cursor-pointer">
                    Home
                  </span>
                </Link>
                <Link href="/services">
                  <span className="text-gray-600 hover:text-blue-600 transition-colors font-medium cursor-pointer">
                    Services
                  </span>
                </Link>
                <Link href="/products">
                  <span className="text-gray-600 hover:text-blue-600 transition-colors font-medium cursor-pointer">
                    Products
                  </span>
                </Link>
                <Link href="/about">
                  <span className="text-gray-600 hover:text-blue-600 transition-colors font-medium cursor-pointer">
                    About
                  </span>
                </Link>
                <Link href="/blog">
                  <span className="text-gray-600 hover:text-blue-600 transition-colors font-medium cursor-pointer">
                    Blog
                  </span>
                </Link>
                <Link href="/contact">
                  <span className="text-gray-600 hover:text-blue-600 transition-colors font-medium cursor-pointer">
                    Contact
                  </span>
                </Link>
              </nav>
              
              {/* Mobile menu button */}
              <button className="md:hidden p-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white">
          <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Company Info */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">Z</span>
                  </div>
                  <span className="text-xl font-bold">Zion Tech Group</span>
                </div>
                <p className="text-gray-300 text-sm">
                  Leading technology solutions for modern businesses. We help companies transform their digital presence with cutting-edge AI, cloud architecture, and innovative development services.
                </p>
              </div>

              {/* Services */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Services</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li><Link href="/services"><span className="hover:text-white transition-colors cursor-pointer">AI Development</span></Link></li>
                  <li><Link href="/services"><span className="hover:text-white transition-colors cursor-pointer">Cloud Solutions</span></Link></li>
                  <li><Link href="/services"><span className="hover:text-white transition-colors cursor-pointer">Web Development</span></Link></li>
                  <li><Link href="/services"><span className="hover:text-white transition-colors cursor-pointer">Mobile Apps</span></Link></li>
                  <li><Link href="/services"><span className="hover:text-white transition-colors cursor-pointer">Blockchain Solutions</span></Link></li>
                </ul>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li><Link href="/about"><span className="hover:text-white transition-colors cursor-pointer">About Us</span></Link></li>
                  <li><Link href="/blog"><span className="hover:text-white transition-colors cursor-pointer">Blog</span></Link></li>
                  <li><Link href="/products"><span className="hover:text-white transition-colors cursor-pointer">Products</span></Link></li>
                  <li><Link href="/contact"><span className="hover:text-white transition-colors cursor-pointer">Contact</span></Link></li>
                  <li><Link href="/privacy"><span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span></Link></li>
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact</h3>
                <div className="space-y-3 text-gray-300 text-sm">
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4" />
                    <span>info@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>123 Tech Street, Innovation City</span>
                  </div>
                </div>
                
                {/* Social Links */}
                <div className="mt-6">
                  <h4 className="text-sm font-semibold mb-3">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300 text-sm">
              <p>&copy; 2024 Zion Tech Group. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default MainLayout;