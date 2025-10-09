import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'AI Services', href: '/ai-services' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const serviceDropdownItems = [
    { name: 'AI Services', href: '/ai-services' },
    { name: 'AI Marketing', href: '/ai-marketing' },
    { name: 'AI Automation', href: '/ai-automation' },
    { name: 'AI Healthcare', href: '/ai-healthcare' },
    { name: 'AI Fintech', href: '/ai-fintech' },
    { name: 'IT Services', href: '/it-services' },
    { name: 'Micro SAAS', href: '/micro-saas' },
    { name: 'Quantum Computing', href: '/quantum-computing' },
    { name: 'Cybersecurity', href: '/cybersecurity' },
    { name: 'Cloud Services', href: '/cloud-services' },
    { name: 'Digital Transformation', href: '/digital-transformation' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-slate-800 text-white py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>(302) 464-0950</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>info@ziontechgroup.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>Delaware, USA</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/careers" className="hover:text-cyan-400 transition-colors">
              Careers
            </Link>
            <Link to="/privacy" className="hover:text-cyan-400 transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-cyan-400 transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <span className="text-white font-bold text-xl">Zion Tech Group</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-white hover:text-cyan-400 transition-colors font-medium ${
                    location.pathname === item.href ? 'text-cyan-400' : ''
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Services Dropdown */}
              <div className="relative group">
                <button className="text-white hover:text-cyan-400 transition-colors font-medium flex items-center space-x-1">
                  <span>Services</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="py-2">
                    {serviceDropdownItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="block px-4 py-2 text-white hover:bg-slate-700 hover:text-cyan-400 transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 font-medium"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-white p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-700">
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-4">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-white hover:text-cyan-400 transition-colors font-medium py-2 ${
                      location.pathname === item.href ? 'text-cyan-400' : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                
                {/* Mobile Services */}
                <div className="pt-4 border-t border-slate-700">
                  <h3 className="text-white font-semibold mb-3">Our Services</h3>
                  <div className="grid grid-cols-1 gap-2">
                    {serviceDropdownItems.slice(0, 6).map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        onClick={() => setIsOpen(false)}
                        className="text-gray-300 hover:text-cyan-400 transition-colors py-1 text-sm"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 font-medium text-center mt-4"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navigation;