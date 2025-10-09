import React, { memo, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Star, Settings, Calendar, CheckSquare, FileText, Mail } from 'lucide-react';

const Navigation: React.FC = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
        setServicesOpen(false);
      }
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setServicesOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-lg border-b border-white/10' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group" onClick={closeMenu}>
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-lg blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-white cyber-text neon-pulse">Zion Tech Group</h1>
              <p className="text-xs text-cyan-400 neon-glow">AI & IT Solutions</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8">
            <Link to="/" className="text-white hover:text-cyan-400 transition-colors font-medium neon-glow">
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-cyan-400 transition-colors font-medium neon-glow">
              About
            </Link>
            <Link to="/services" className="text-white hover:text-cyan-400 transition-colors font-medium neon-glow">
              Services
            </Link>
            <Link to="/ai-services" className="text-white hover:text-cyan-400 transition-colors font-medium neon-glow">
              AI Services
            </Link>
            <Link to="/micro-saas" className="text-white hover:text-cyan-400 transition-colors font-medium neon-glow">
              Micro SaaS
            </Link>
            <Link to="/it-services" className="text-white hover:text-cyan-400 transition-colors font-medium neon-glow">
              IT Services
            </Link>
            <Link to="/pricing" className="text-white hover:text-cyan-400 transition-colors font-medium neon-glow">
              Pricing
            </Link>
            <Link to="/contact" className="text-white hover:text-cyan-400 transition-colors font-medium neon-glow">
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span>(302) 464-0950</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-white hover:text-cyan-400 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden absolute top-16 left-0 right-0 bg-slate-900/95 backdrop-blur-lg border-b border-white/10">
            <div className="container mx-auto px-4 py-4 space-y-4">
              <Link
                to="/"
                className="block text-white hover:text-cyan-400 transition-colors font-medium py-2"
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block text-white hover:text-cyan-400 transition-colors font-medium py-2"
                onClick={closeMenu}
              >
                About
              </Link>
              <Link
                to="/services"
                className="block text-white hover:text-cyan-400 transition-colors font-medium py-2"
                onClick={closeMenu}
              >
                Services
              </Link>
              <Link
                to="/ai-services"
                className="block text-white hover:text-cyan-400 transition-colors font-medium py-2"
                onClick={closeMenu}
              >
                AI Services
              </Link>
              <Link
                to="/micro-saas"
                className="block text-white hover:text-cyan-400 transition-colors font-medium py-2"
                onClick={closeMenu}
              >
                Micro SaaS
              </Link>
              <Link
                to="/it-services"
                className="block text-white hover:text-cyan-400 transition-colors font-medium py-2"
                onClick={closeMenu}
              >
                IT Services
              </Link>
              <Link
                to="/pricing"
                className="block text-white hover:text-cyan-400 transition-colors font-medium py-2"
                onClick={closeMenu}
              >
                Pricing
              </Link>
              <Link
                to="/contact"
                className="block text-white hover:text-cyan-400 transition-colors font-medium py-2"
                onClick={closeMenu}
              >
                Contact
              </Link>
              <div className="pt-4 border-t border-white/10">
                <a
                  href="tel:+13024640950"
                  className="block bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 text-center"
                >
                  <Phone className="w-4 h-4 inline mr-2" />
                  (302) 464-0950
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
});

Navigation.displayName = 'Navigation';

export default Navigation;