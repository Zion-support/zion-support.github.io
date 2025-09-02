import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  title = 'Zion Tech Solutions',
  description = 'Leading technology solutions for modern businesses',
  showNavigation = true
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0a0a1a" />
      </Head>
      
      {showNavigation && (
        <nav className="bg-black/20 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              <Link 
                href="/" 
                className="text-2xl font-bold text-white hover:text-blue-400 transition-colors"
                aria-label="Zion Tech Solutions Home"
              >
                Zion Tech
              </Link>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-8">
                {navigationItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-white hover:text-blue-400 transition-colors font-medium"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              
              {/* Mobile Menu Button */}
              <button
                className="md:hidden text-white hover:text-blue-400 transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle navigation menu"
                aria-expanded={isMenuOpen}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
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
                className="md:hidden bg-black/40 backdrop-blur-md border-t border-white/10"
              >
                <div className="container mx-auto px-4 py-4 space-y-4">
                  {navigationItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block text-white hover:text-blue-400 transition-colors font-medium py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      )}
      
      <main role="main">
        {children}
      </main>
      
      {showNavigation && (
        <footer className="bg-black/20 backdrop-blur-md border-t border-white/10 mt-16">
          <div className="container mx-auto px-4 py-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Zion Tech Solutions</h3>
                <p className="text-gray-300">
                  Leading technology solutions provider helping businesses transform their digital presence.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                <div className="space-y-2">
                  {navigationItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block text-gray-300 hover:text-blue-400 transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
                <p className="text-gray-300">
                  Ready to transform your business?<br />
                  <Link href="/contact" className="text-blue-400 hover:text-blue-300 transition-colors">
                    Get in touch today
                  </Link>
                </p>
              </div>
            </div>
            <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2024 Zion Tech Solutions. All rights reserved.</p>
            </div>
          </div>
        </footer>
      )}
    </>
  );
};

export default Layout;