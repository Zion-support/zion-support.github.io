import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Network,
  FileText,
  Clock,
  ChevronDown, 
  Phone, 
  Mail, 
  MapPin,
  Brain, 
  Cloud, 
  Shield, 
  Code, 
  BarChart
} from 'lucide-react';

interface NavigationProps {
  onSidebarToggle?: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onSidebarToggle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const toggleDropdown = useCallback((dropdown: string) => {
    setActiveDropdown(prev => prev === dropdown ? null : dropdown);
  }, []);

  const [microSaasOpen, setMicroSaasOpen] = useState(false);

  const handleResize = () => {
    if (window.innerWidth >= 1024) {
      setIsMenuOpen(false);
    }
  };

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    onSidebarToggle();
  };

  const navigation = [
    { name: 'Home', href: '/', icon: null },
    { name: 'About', href: '/about', icon: null },
    { 
      name: 'Services', 
      href: '/services', 
      icon: null,
      submenu: [
        { name: 'AI Solutions', href: '/ai-services', icon: Brain },
        { name: 'Cloud Services', href: '/cloud-services', icon: Cloud },
        { name: 'Cybersecurity', href: '/cybersecurity', icon: Shield },
        { name: 'Data Analytics', href: '/data-analytics', icon: BarChart },
        { name: 'Web Development', href: '/web-development', icon: Code },
        { name: '5G Solutions', href: '/5g-solutions', icon: Network }
      ]
    },
    { name: 'Contact', href: '/contact', icon: null }
  ];

  return (
    <nav className="bg-slate-900/95 backdrop-blur-sm border-b border-slate-700/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                Zion Tech Group
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-white hover:text-blue-300 transition-colors">
              Home
            </a>
            <a href="#services" className="text-white hover:text-blue-300 transition-colors">
              Services
            </a>
            <a href="#about" className="text-white hover:text-blue-300 transition-colors">
              About
            </a>
            <a href="#contact" className="text-white hover:text-blue-300 transition-colors">
              Contact
            </a>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-blue-300 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
=======
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    onSidebarToggle?.();
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-gray-900">
              Zion Tech
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </a>
            <a href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
              About
            </a>
            <a href="/services" className="text-gray-700 hover:text-blue-600 transition-colors">
              Services
            </a>
            <a href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </a>
            <div className="flex items-center space-x-4">
              <a href="tel:+15551234567" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors">
                <Phone className="w-4 h-4 mr-1" />
                +1 (555) 123-4567
              </a>
              <a href="mailto:info@ziontech.com" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors">
                <Mail className="w-4 h-4 mr-1" />
                info@ziontech.com
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="/" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">
                Home
              </a>
              <a href="/about" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">
                About
              </a>
              <a href="/services" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">
                Services
              </a>
              <a href="/contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">
                Contact
              </a>
              <div className="px-3 py-2 border-t">
                <a href="tel:+15551234567" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors">
                  <Phone className="w-4 h-4 mr-2" />
                  +1 (555) 123-4567
                </a>
                <a href="mailto:info@ziontech.com" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors mt-2">
                  <Mail className="w-4 h-4 mr-2" />
                  info@ziontech.com
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;