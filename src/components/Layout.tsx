import React from 'react';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-sm border-b border-white/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-white">
                Zion Tech Group
              </h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="/" className="text-white hover:text-blue-300 transition-colors">
                Home
              </a>
              <a href="/services" className="text-white hover:text-blue-300 transition-colors">
                Services
              </a>
              <a href="/products" className="text-white hover:text-blue-300 transition-colors">
                Products
              </a>
              <a href="/about" className="text-white hover:text-blue-300 transition-colors">
                About
              </a>
              <a href="/contact" className="text-white hover:text-blue-300 transition-colors">
                Contact
              </a>
            </nav>
            <div className="flex items-center space-x-4">
              <a 
                href="tel:+13024640950" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
              >
                📞 Call Us
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white/10 backdrop-blur-sm border-t border-white/20 mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Zion Tech Group</h3>
              <p className="text-gray-300 mb-4">
                Pioneering the future with cutting-edge AI solutions, quantum technology, and innovative IT services.
              </p>
              <div className="flex space-x-4">
                <a href="https://linkedin.com/company/zion-tech-group" className="text-gray-400 hover:text-white transition-colors">
                  LinkedIn
                </a>
                <a href="https://twitter.com/ziontechgroup" className="text-gray-400 hover:text-white transition-colors">
                  Twitter
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="/services#ai" className="hover:text-white transition-colors">AI Development</a></li>
                <li><a href="/services#cloud" className="hover:text-white transition-colors">Cloud Solutions</a></li>
                <li><a href="/services#security" className="hover:text-white transition-colors">Cybersecurity</a></li>
                <li><a href="/services#web" className="hover:text-white transition-colors">Web Development</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Products</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="/products#ai" className="hover:text-white transition-colors">AI Solutions</a></li>
                <li><a href="/products#saas" className="hover:text-white transition-colors">SaaS Platforms</a></li>
                <li><a href="/products#security" className="hover:text-white transition-colors">Security Tools</a></li>
                <li><a href="/products#analytics" className="hover:text-white transition-colors">Analytics</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
              <div className="space-y-2 text-gray-300">
                <p>📞 +1 (302) 464-0950</p>
                <p>✉️ kleber@ziontechgroup.com</p>
                <p>📍 364 E Main St STE 1008<br />Middletown, DE 19709</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Zion Tech Group. All rights reserved.</p>
            <p className="mt-2">
              <a href="https://ziontechgroup.com" className="text-blue-400 hover:text-blue-300">
                https://ziontechgroup.com
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;