import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown, Phone, Mail, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Globe, Database, Settings, Target, MessageSquare, Eye, Cpu, BarChart3, FileText, Search, Bot, Palette, Camera, Music, Video, ShoppingCart, CreditCard, Heart, Stethoscope, Briefcase, Calculator, Calendar, Smartphone } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { name: 'AI Solutions', icon: Brain, href: '/ai-solutions' },
    { name: 'Cloud Services', icon: Cloud, href: '/cloud-services' },
    { name: 'Cybersecurity', icon: Shield, href: '/cybersecurity' },
    { name: 'DevOps', icon: Code, href: '/devops' },
    { name: 'Data Analytics', icon: BarChart, href: '/data-analytics' },
    { name: 'Mobile Development', icon: Smartphone, href: '/mobile-development' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Brain className="w-8 h-8 text-cyan-400" />
            <span className="text-xl font-bold text-white">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-cyan-400 transition-colors duration-200">
              Home
            </Link>
            <Link href="/about" className="text-white hover:text-cyan-400 transition-colors duration-200">
              About
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors duration-200"
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-gray-900 rounded-lg shadow-lg py-2">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="flex items-center space-x-3 px-4 py-2 text-white hover:bg-gray-800 transition-colors duration-200"
                    >
                      <service.icon className="w-5 h-5" />
                      <span>{service.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/contact" className="text-white hover:text-cyan-400 transition-colors duration-200">
              Contact
            </Link>
            
            <Link
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900 rounded-lg mt-2 p-4">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-white hover:text-cyan-400 transition-colors duration-200">
                Home
              </Link>
              <Link href="/about" className="text-white hover:text-cyan-400 transition-colors duration-200">
                About
              </Link>
              <div className="space-y-2">
                <span className="text-white font-semibold">Services</span>
                {services.map((service) => (
                  <Link
                    key={service.name}
                    href={service.href}
                    className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200 ml-4"
                  >
                    <service.icon className="w-4 h-4" />
                    <span>{service.name}</span>
                  </Link>
                ))}
              </div>
              <Link href="/contact" className="text-white hover:text-cyan-400 transition-colors duration-200">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;