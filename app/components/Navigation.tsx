<<<<<<< HEAD
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
            Zion Tech Group
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors">Home</Link>
            <Link to="/about" className="text-gray-600 hover:text-blue-600 transition-colors">About</Link>
            <Link to="/services" className="text-gray-600 hover:text-blue-600 transition-colors">Services</Link>
            <Link to="/blog" className="text-gray-600 hover:text-blue-600 transition-colors">Blog</Link>
            <Link to="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-600 hover:text-gray-900 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
=======
import React, { useState, useCallback, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Globe, 
  Users, 
  Code, 
  Mail, 
  Brain, 
  Shield, 
  Zap, 
  ArrowRight, 
  Star, 
  Award, 
  BarChart3, 
  Cloud, 
  Sparkles, 
  Mail as MailIcon, 
  Smartphone, 
  Monitor 
} from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 10);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navItems = [
    { name: 'Home', href: '/', icon: Globe },
    { name: 'About', href: '/about', icon: Users },
    { name: 'Services', href: '/services', icon: Code },
    { name: 'Blog', href: '/blog', icon: Mail },
    { name: 'Contact', href: '/contact', icon: MailIcon }
  ];

  const serviceItems = [
    { name: 'AI Solutions', href: '/ai-solutions', icon: Brain },
    { name: 'Cybersecurity', href: '/cybersecurity', icon: Shield },
    { name: 'Cloud Services', href: '/cloud-services', icon: Cloud },
    { name: 'Digital Transformation', href: '/services', icon: Zap }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === item.href
                    ? 'text-cyan-400 bg-cyan-400/10'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.name}</span>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center"
            >
              Get Started
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-e238
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
<<<<<<< HEAD
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors" onClick={toggleMenu}>Home</Link>
              <Link to="/about" className="text-gray-600 hover:text-blue-600 transition-colors" onClick={toggleMenu}>About</Link>
              <Link to="/services" className="text-gray-600 hover:text-blue-600 transition-colors" onClick={toggleMenu}>Services</Link>
              <Link to="/blog" className="text-gray-600 hover:text-blue-600 transition-colors" onClick={toggleMenu}>Blog</Link>
              <Link to="/contact" className="text-gray-600 hover:text-blue-600 transition-colors" onClick={toggleMenu}>Contact</Link>
=======
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900/95 backdrop-blur-sm rounded-lg mt-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={closeMenu}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    location.pathname === item.href
                      ? 'text-cyan-400 bg-cyan-400/10'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </Link>
              ))}
              
              {/* Services Dropdown */}
              <div className="px-3 py-2">
                <div className="text-sm font-semibold text-gray-400 mb-2">Services</div>
                <div className="space-y-1">
                  {serviceItems.map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      onClick={closeMenu}
                      className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
                    >
                      <service.icon className="w-4 h-4" />
                      <span>{service.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile CTA */}
              <div className="px-3 py-2">
                <Link
                  to="/contact"
                  onClick={closeMenu}
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-e238
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;