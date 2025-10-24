'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Sparkles, Shield, Zap, Globe, Users, TrendingUp } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { name: 'AI Solutions', href: '/ai-services', icon: <Sparkles className="w-4 h-4" /> },
    { name: 'Cybersecurity', href: '/cybersecurity', icon: <Shield className="w-4 h-4" /> },
    { name: 'Cloud Services', href: '/cloud-solutions', icon: <Globe className="w-4 h-4" /> },
    { name: 'IT Services', href: '/it-services', icon: <Zap className="w-4 h-4" /> },
    { name: 'Data Analytics', href: '/analytics', icon: <TrendingUp className="w-4 h-4" /> },
    { name: 'Consulting', href: '/consulting', icon: <Users className="w-4 h-4" /> }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/90 backdrop-blur-lg border-b border-white/20' 
        : 'bg-black/20 backdrop-blur-md border-b border-white/10'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold text-white hover:text-cyan-400 transition-colors group">
            <span className="group-hover:scale-105 transition-transform duration-300">
              Zion Tech
            </span>
          </Link>
          
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/about" className="text-white hover:text-cyan-400 transition-colors relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            
            <div className="relative group">
              <button 
                className="flex items-center text-white hover:text-cyan-400 transition-colors"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                Services
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              
              {isServicesOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-64 bg-gray-900/95 backdrop-blur-lg rounded-lg border border-gray-700 shadow-xl py-2"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      href={service.href}
                      className="flex items-center px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors"
                    >
                      {service.icon}
                      <span className="ml-3">{service.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <Link href="/solutions" className="text-white hover:text-cyan-400 transition-colors relative group">
              Solutions
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            
            <Link href="/blog" className="text-white hover:text-cyan-400 transition-colors relative group">
              Blog
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            
            <Link href="/contact" className="text-white hover:text-cyan-400 transition-colors relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <Link 
              href="/contact" 
              className="px-6 py-2 bg-gradient-to-r from-cyan-600 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </Link>
          </div>

          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/10 bg-black/90 backdrop-blur-lg">
            <nav className="flex flex-col space-y-4">
              <Link 
                href="/about" 
                className="text-white hover:text-cyan-400 transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              
              <div className="px-4">
                <div className="text-white font-medium mb-2">Services</div>
                <div className="ml-4 space-y-2">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      href={service.href}
                      className="flex items-center text-gray-300 hover:text-white transition-colors py-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {service.icon}
                      <span className="ml-2">{service.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
              
              <Link 
                href="/solutions" 
                className="text-white hover:text-cyan-400 transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Solutions
              </Link>
              
              <Link 
                href="/blog" 
                className="text-white hover:text-cyan-400 transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              
              <Link 
                href="/contact" 
                className="text-white hover:text-cyan-400 transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              
              <div className="px-4 pt-4">
                <Link 
                  href="/contact" 
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;