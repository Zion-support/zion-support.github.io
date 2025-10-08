import React, { useState, useEffect } from 'react';

const FuturisticHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Home', href: '/', icon: '🏠' },
    { name: 'Services', href: '/services', icon: '⚡' },
    { name: 'Micro SAAS', href: '/micro-saas', icon: '🚀' },
    { name: 'AI Services', href: '/ai-services', icon: '🤖' },
    { name: 'IT Services', href: '/it-services', icon: '💻' },
    { name: 'About', href: '/about', icon: '👥' },
    { name: 'Contact', href: '/contact', icon: '📞' },
  ];

  return (
    <>
      {/* Animated Background Particles */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-black/80 backdrop-blur-md border-b border-cyan-500/20'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="neon-glow p-2 rounded-lg">
                <span className="text-2xl font-bold holographic">Z</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">Zion Tech Group</h1>
                <p className="text-xs text-cyan-400">Advanced AI Solutions</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-2 text-white hover:text-cyan-400 transition-colors duration-300 group"
                >
                  <span className="text-lg group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </span>
                  <span className="font-medium">{item.name}</span>
                </a>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href="tel:+13024640950"
                className="cyber-button px-6 py-2 rounded-lg text-sm font-semibold"
              >
                Call Now
              </a>
              <a
                href="/contact"
                className="bg-transparent border-2 border-cyan-400 text-cyan-400 px-6 py-2 rounded-lg text-sm font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300"
              >
                Get Quote
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-white hover:text-cyan-400 transition-colors duration-300"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden absolute top-16 left-0 right-0 bg-black/95 backdrop-blur-md border-t border-cyan-500/20">
              <nav className="py-4 space-y-2">
                {navigationItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center space-x-3 px-4 py-3 text-white hover:bg-cyan-500/20 hover:text-cyan-400 transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span className="font-medium">{item.name}</span>
                  </a>
                ))}
                <div className="px-4 pt-4 border-t border-cyan-500/20">
                  <a
                    href="tel:+13024640950"
                    className="block w-full cyber-button px-6 py-3 rounded-lg text-center font-semibold mb-3"
                  >
                    Call: (302) 464-0950
                  </a>
                  <a
                    href="/contact"
                    className="block w-full bg-transparent border-2 border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg text-center font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300"
                  >
                    Get Free Quote
                  </a>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Contact Info Bar */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-2 text-center text-sm">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0 sm:space-x-6">
          <div className="flex items-center space-x-2">
            <span>📞</span>
            <a href="tel:+13024640950" className="hover:text-cyan-200 transition-colors">
              (302) 464-0950
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <span>✉️</span>
            <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-200 transition-colors">
              kleber@ziontechgroup.com
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <span>📍</span>
            <span>364 E Main St STE 1008, Middletown DE 19709</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default FuturisticHeader;