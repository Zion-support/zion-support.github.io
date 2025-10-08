import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, Brain, Zap, Shield, Star } from 'lucide-react';

const FuturisticHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Home', href: '/', icon: '🏠' },
    { name: 'AI Services', href: '/ai-services', icon: '🤖' },
    { name: 'IT Services', href: '/it-services', icon: '⚙️' },
    { name: 'Micro SAAS', href: '/micro-saas', icon: '💻' },
    { name: 'Quantum Computing', href: '/quantum-computing', icon: '⚛️' },
    { name: 'Autonomous Systems', href: '/autonomous-systems', icon: '🔄' },
    { name: 'Blockchain & Web3', href: '/blockchain-web3', icon: '⛓️' },
    { name: 'IoT & Edge', href: '/iot-edge-computing', icon: '📡' },
    { name: 'Cybersecurity', href: '/cybersecurity', icon: '🔒' },
    { name: 'Business Intelligence', href: '/business-intelligence', icon: '📊' },
    { name: 'About', href: '/about', icon: 'ℹ️' },
    { name: 'Contact', href: '/contact', icon: '📞' }
  ];

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-purple-900 to-indigo-900 text-white py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center space-y-1 sm:space-y-0">
          <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-6">
            <a href="tel:+13024640950" className="flex items-center hover:text-cyan-400 transition-colors">
              <Phone className="w-4 h-4 mr-2" />
              +1 302 464 0950
            </a>
            <a href="mailto:kleber@ziontechgroup.com" className="flex items-center hover:text-cyan-400 transition-colors">
              <Mail className="w-4 h-4 mr-2" />
              kleber@ziontechgroup.com
            </a>
            <div className="flex items-center text-gray-300">
              <MapPin className="w-4 h-4 mr-2" />
              364 E Main St STE 1008, Middletown DE 19709
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-xs">24/7 Support Available</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-md border-b border-cyan-500/30' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="flex items-center space-x-3 group">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center neon-glow-blue">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-xl font-bold gradient-text">Zion Tech Group</h1>
                  <p className="text-xs text-gray-400">Advanced AI Solutions</p>
                </div>
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="px-3 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 hover:neon-glow-blue group relative"
                >
                  <span className="flex items-center space-x-2">
                    <span className="text-lg group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </span>
                    <span>{item.name}</span>
                  </span>
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </a>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href="/contact"
                className="cyber-button text-sm"
              >
                Get Quote
              </a>
              <a
                href="tel:+13024640950"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 neon-glow-purple"
              >
                Call Now
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-black/95 backdrop-blur-md border-t border-cyan-500/30">
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 group"
                >
                  <span className="text-xl group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </span>
                  <span className="font-medium">{item.name}</span>
                </a>
              ))}
              <div className="pt-4 border-t border-gray-700 space-y-3">
                <a
                  href="/contact"
                  className="block w-full cyber-button text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Quote
                </a>
                <a
                  href="tel:+13024640950"
                  className="block w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-3 rounded-lg font-semibold text-center hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-40 space-y-3">
        <a
          href="tel:+13024640950"
          className="block w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 neon-glow-pink floating"
          title="Call Now"
        >
          <Phone className="w-6 h-6" />
        </a>
        <a
          href="mailto:kleber@ziontechgroup.com"
          className="block w-14 h-14 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 neon-glow-blue floating"
          style={{ animationDelay: '1s' }}
          title="Email Us"
        >
          <Mail className="w-6 h-6" />
        </a>
        <a
          href="/contact"
          className="block w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 neon-glow-purple floating"
          style={{ animationDelay: '2s' }}
          title="Contact Form"
        >
          <Star className="w-6 h-6" />
        </a>
      </div>

      {/* Scan Line Effect */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50 scan-line z-50"></div>
    </>
  );
};

export default FuturisticHeader;
