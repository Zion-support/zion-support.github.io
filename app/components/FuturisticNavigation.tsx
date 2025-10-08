import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Zap, Brain, Cpu, Shield, Cloud, Database, Code, BarChart3 } from 'lucide-react';

const FuturisticNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      title: 'AI Services',
      icon: Brain,
      href: '/ai-services',
      color: 'text-cyan-400',
      glow: 'shadow-cyan-500/50'
    },
    {
      title: 'Micro SAAS',
      icon: Zap,
      href: '/micro-saas',
      color: 'text-purple-400',
      glow: 'shadow-purple-500/50'
    },
    {
      title: 'IT Solutions',
      icon: Cpu,
      href: '/it-services',
      color: 'text-blue-400',
      glow: 'shadow-blue-500/50'
    },
    {
      title: 'Cybersecurity',
      icon: Shield,
      href: '/cybersecurity',
      color: 'text-red-400',
      glow: 'shadow-red-500/50'
    },
    {
      title: 'Cloud Services',
      icon: Cloud,
      href: '/cloud-services',
      color: 'text-green-400',
      glow: 'shadow-green-500/50'
    },
    {
      title: 'Data Analytics',
      icon: BarChart3,
      href: '/business-intelligence',
      color: 'text-yellow-400',
      glow: 'shadow-yellow-500/50'
    }
  ];

  const quickLinks = [
    { title: 'About Us', href: '/about' },
    { title: 'Case Studies', href: '/case-studies' },
    { title: 'Contact', href: '/contact' },
    { title: 'Blog', href: '/blog' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-black/80 backdrop-blur-md border-b border-cyan-500/20' 
        : 'bg-transparent'
    }`}>
      {/* Matrix background effect */}
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      
      {/* Quantum particles */}
      <div className="quantum-particle" style={{ top: '20%', left: '10%', animationDelay: '0s' }}></div>
      <div className="quantum-particle" style={{ top: '60%', right: '15%', animationDelay: '2s' }}></div>
      <div className="quantum-particle" style={{ top: '40%', left: '80%', animationDelay: '4s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 group"
            onMouseEnter={() => setActiveDropdown(null)}
          >
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg blur opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
            </div>
            <span className="text-xl font-bold text-gradient group-hover:neon-text transition-all duration-300">
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors duration-300 py-2"
                onMouseEnter={() => setActiveDropdown('services')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <span className="font-medium">Services</span>
                <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
              </button>
              
              {activeDropdown === 'services' && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-black/90 backdrop-blur-md border border-cyan-500/30 rounded-xl p-6 shadow-2xl">
                  <div className="grid grid-cols-2 gap-4">
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        to={service.href}
                        className={`group flex items-center space-x-3 p-3 rounded-lg hover:bg-cyan-500/10 transition-all duration-300 ${service.color}`}
                        onMouseEnter={() => setActiveDropdown('services')}
                      >
                        <service.icon className="w-5 h-5" />
                        <span className="font-medium">{service.title}</span>
                        <div className={`ml-auto w-2 h-2 rounded-full bg-current opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-cyan-500/20">
                    <Link
                      to="/services"
                      className="flex items-center justify-center w-full py-2 px-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg hover:from-cyan-400 hover:to-purple-400 transition-all duration-300"
                    >
                      View All Services
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Quick Links */}
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                to={link.href}
                className="text-white hover:text-cyan-400 transition-colors duration-300 font-medium"
                onMouseEnter={() => setActiveDropdown(null)}
              >
                {link.title}
              </Link>
            ))}

            {/* CTA Button */}
            <Link
              to="/contact"
              className="btn-neon ml-4"
              onMouseEnter={() => setActiveDropdown(null)}
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-cyan-400 transition-colors duration-300 p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-t border-cyan-500/20">
            <div className="px-4 py-6 space-y-4">
              {/* Services */}
              <div>
                <div className="text-cyan-400 font-semibold mb-3 flex items-center">
                  <Zap className="w-5 h-5 mr-2" />
                  Services
                </div>
                <div className="grid grid-cols-2 gap-2 ml-6">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      to={service.href}
                      className={`flex items-center space-x-2 p-2 rounded-lg hover:bg-cyan-500/10 transition-colors duration-300 ${service.color}`}
                      onClick={() => setIsOpen(false)}
                    >
                      <service.icon className="w-4 h-4" />
                      <span className="text-sm">{service.title}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <div className="text-cyan-400 font-semibold mb-3">Quick Links</div>
                <div className="space-y-2 ml-6">
                  {quickLinks.map((link, index) => (
                    <Link
                      key={index}
                      to={link.href}
                      className="block text-white hover:text-cyan-400 transition-colors duration-300 py-1"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile CTA */}
              <div className="pt-4 border-t border-cyan-500/20">
                <Link
                  to="/contact"
                  className="btn-neon w-full text-center block"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Cyber scan line */}
      <div className="cyber-scan-line"></div>
    </nav>
  );
};

export default FuturisticNavigation;
