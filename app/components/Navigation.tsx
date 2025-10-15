import React, { useState, useEffect } from 'react';
import { Menu, X, Zap, Phone, Mail, MapPin } from 'lucide-react';

interface NavigationProps {
  onSidebarToggle: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onSidebarToggle }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/', current: true },
    { name: 'Services', href: '/services', current: false },
    { name: 'AI Solutions', href: '/ai-solutions', current: false },
    { name: 'IT Solutions', href: '/it-solutions', current: false },
    { name: 'Micro SAAS', href: '/micro-saas-solutions', current: false },
    { name: 'About', href: '/about', current: false },
    { name: 'Contact', href: '/contact', current: false },
  ];

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-purple-900 to-cyan-900 text-white py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <a href="tel:+13024640950" className="hover:text-cyan-300 transition-colors">
                +1 302 464 0950
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-300 transition-colors">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Middletown, DE 19709</span>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-4">
            <span className="text-xs">24/7 Support Available</span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' 
          : 'bg-slate-800/90 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <button
                onClick={onSidebarToggle}
                className="lg:hidden text-gray-400 hover:text-white transition-colors p-2"
              >
                <Menu className="w-6 h-6" />
              </button>
              <a href="/" className="flex items-center space-x-2 group">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold futuristic-text">Zion Tech Group</h1>
                  <p className="text-xs text-gray-400">AI & IT Solutions</p>
                </div>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 hover-glow ${
                    item.current
                      ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white'
                      : 'text-gray-300 hover:text-white hover:bg-slate-700/50'
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href="/contact"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300 hover-glow flex items-center gap-2"
              >
                Get Started
                <Zap className="w-4 h-4" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-gray-400 hover:text-white transition-colors p-2"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-700">
            <div className="px-4 py-6 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg transition-all duration-300 ${
                    item.current
                      ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white'
                      : 'text-gray-300 hover:text-white hover:bg-slate-700/50'
                  }`}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 border-t border-slate-700">
                <a
                  href="/contact"
                  className="block w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 text-center"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer for fixed navigation */}
      <div className="h-24"></div>
    </>
  );
};

export default Navigation;
