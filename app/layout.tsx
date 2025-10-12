import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions</title>
        <meta name="description" content="Leading provider of AI-powered solutions, IT services, and digital transformation for modern businesses." />
        <meta name="keywords" content="AI solutions, IT services, digital transformation, business automation, technology consulting" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Navigation */}
        <nav className="bg-black/20 backdrop-blur-sm border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <Link to="/" className="text-2xl font-bold text-white">
                  Zion Tech Group
                </Link>
              </div>
              
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link
                    to="/"
                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Home
                  </Link>
                  <Link
                    to="/about"
                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    About
                  </Link>
                  <Link
                    to="/services"
                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Services
                  </Link>
                  <Link
                    to="/contact"
                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Contact
                  </Link>
                </div>
              </div>
              
              <div className="md:hidden">
                <button className="text-gray-300 hover:text-white">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main>
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-black/20 backdrop-blur-sm border-t border-white/10">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-1 md:col-span-2">
                <h3 className="text-2xl font-bold text-white mb-4">Zion Tech Group</h3>
                <p className="text-gray-300 mb-4">
                  Leading provider of AI-powered solutions, IT services, and digital transformation 
                  for modern businesses.
                </p>
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
                >
                  Contact Us
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
                <ul className="space-y-2">
                  <li><Link to="/ai-solutions" className="text-gray-300 hover:text-white">AI Solutions</Link></li>
                  <li><Link to="/it-services" className="text-gray-300 hover:text-white">IT Services</Link></li>
                  <li><Link to="/micro-saas" className="text-gray-300 hover:text-white">Micro SAAS</Link></li>
                  <li><Link to="/5g-solutions" className="text-gray-300 hover:text-white">5G Solutions</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
                <ul className="space-y-2">
                  <li><Link to="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
                  <li><Link to="/careers" className="text-gray-300 hover:text-white">Careers</Link></li>
                  <li><Link to="/blog" className="text-gray-300 hover:text-white">Blog</Link></li>
                  <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-gray-400 text-center">
                © 2024 Zion Tech Group. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Layout;