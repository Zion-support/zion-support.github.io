import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Menu, 
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
  const [isOpen, setIsOpen] = useState(false);

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
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Home
              </a>
              <a href="/about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                About
              </a>
              <a href="/services" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Services
              </a>
              <a href="/case-studies" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Case Studies
              </a>
              <a href="/careers" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Careers
              </a>
              <a href="/contact" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:+1234567890" className="flex items-center text-gray-300 hover:text-white transition-colors">
              <Phone className="w-4 h-4 mr-2" />
              <span className="text-sm">+1 (234) 567-890</span>
            </a>
            <a href="mailto:info@ziontechgroup.com" className="flex items-center text-gray-300 hover:text-white transition-colors">
              <Mail className="w-4 h-4 mr-2" />
              <span className="text-sm">info@ziontechgroup.com</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white p-2 rounded-md transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800/95 backdrop-blur-lg rounded-lg mt-2">
              <a href="/" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Home
              </a>
              <a href="/about" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                About
              </a>
              <a href="/services" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Services
              </a>
              <a href="/case-studies" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Case Studies
              </a>
              <a href="/careers" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Careers
              </a>
              <a href="/contact" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Contact
              </a>
              <div className="border-t border-white/10 pt-4 mt-4">
                <a href="tel:+1234567890" className="flex items-center text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium">
                  <Phone className="w-4 h-4 mr-2" />
                  +1 (234) 567-890
                </a>
                <a href="mailto:info@ziontechgroup.com" className="flex items-center text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium">
                  <Mail className="w-4 h-4 mr-2" />
                  info@ziontechgroup.com
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