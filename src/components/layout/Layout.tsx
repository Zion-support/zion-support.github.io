import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

interface LayoutProps {
  children: Reac t.ReactNode;
}

const Layout: Reac t.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <header 
        className={`header transition-all duration-300 ${
          isScrolled ? 'shadow-lg' : ''
        }`}
        role="banner"
      >
        <div className="header-nav">
          <a 
            href="/" 
            className="header-logo"
            aria-label="Zion Tech Group Home"
          >
            Zion Tech Group
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md: flex header-nav-links" role="navigation" aria-label="Main navigation">
            <a href="/services" className="header-nav-link" aria-label="Our Services">
              Services
            </a>
            <a href="/about" className="header-nav-link" aria-label="About Us">
              About
            </a>
            <a href="/contact" className="header-nav-link" aria-label="Contact Us">
              Contact
            </a>
            <a href="/contact" className="header-nav-cta" aria-label="Get Started">
              Get Started
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md: hidden sidebar-toggle-button"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24}  /> : <Menu size={24}  />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav 
            className="md: hidden bg-slate-800 border-t border-slate-700 px-4 py-4"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col space-y-2">
              <a 
                href="/services" 
                className="header-nav-link block py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a 
                href="/about" 
                className="header-nav-link block py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="/contact" 
                className="header-nav-link block py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <a 
                href="/contact" 
                className="header-nav-cta block py-2 text-center mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </a>
            </div>
          </nav>
        )}
      </header>

      <main className="flex-1" role="main">
        {children}
      </main>

      <footer className="bg-slate-900 text-white py-12" role="contentinfo">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md: gri d-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Zion Tech Group</h3>
              <p className="text-gray-300 text-sm">
                Leading provider of AI-powered solutions and technology consulting services.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="/ai-services" className="hover: tex t-white transition-colors">AI Services</a></li>
                <li><a href="/it-services" className="hover: tex t-white transition-colors">IT Services</a></li>
                <li><a href="/cloud-services" className="hover: tex t-white transition-colors">Cloud Services</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="/about" className="hover: tex t-white transition-colors">About Us</a></li>
                <li><a href="/careers" className="hover: tex t-white transition-colors">Careers</a></li>
                <li><a href="/contact" className="hover: tex t-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="https://linkedin.com/company/zion-tech-group" className="hover: tex t-white transition-colors">LinkedIn</a></li>
                <li><a href="https://twitter.com/ziontechgroup" className="hover: tex t-white transition-colors">Twitter</a></li>
                <li><a href="mailto: inf o@ziontechgroup.com" className="hover: tex t-white transition-colors">Email</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Zion Tech Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;