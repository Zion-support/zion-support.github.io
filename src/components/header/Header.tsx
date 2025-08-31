import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MainNavigation } from './MainNavigation';
import { MobileMenu } from './MobileMenu';
import { Logo } from './Logo';
import { Menu, X, ChevronDown } from 'lucide-react';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Home', href: '/' },
    { 
      name: 'Services', 
      href: '/services-overview',
      dropdown: [
        { name: 'AI & Machine Learning', href: '/services/ai-business-intelligence-dashboard' },
        { name: 'IT Infrastructure', href: '/services/it-infrastructure-management' },
        { name: 'Micro SaaS', href: '/services/micro-saas-solutions-comprehensive' },
        { name: 'Cybersecurity', href: '/services/cybersecurity' },
        { name: 'Cloud & DevOps', href: '/services/cloud-devops' },
        { name: 'Quantum Computing', href: '/services/quantum-computing-solutions' },
        { name: 'Edge Computing', href: '/services/edge-computing-solutions' },
        { name: 'Blockchain', href: '/services/blockchain-enterprise-solutions' }
      ]
    },
    { 
      name: 'Solutions', 
      href: '/solutions',
      dropdown: [
        { name: 'Healthcare', href: '/solutions/healthcare' },
        { name: 'Financial', href: '/solutions/financial' },
        { name: 'Manufacturing', href: '/solutions/manufacturing' },
        { name: 'Government', href: '/solutions/government' },
        { name: 'Retail', href: '/solutions/retail' }
      ]
    },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { 
      name: 'Showcases', 
      href: '/innovative-services-showcase-2028',
      dropdown: [
        { name: '2028 Services', href: '/innovative-services-showcase-2028' },
        { name: '2025 Services', href: '/comprehensive-services-showcase-2025' },
        { name: '2026 Services', href: '/innovative-services-showcase-2026' },
        { name: '2027 Services', href: '/innovative-services-showcase-2027' }
      ]
    }
  ];

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      isScrolled 
        ? 'bg-zion-slate-dark/95 backdrop-blur-md shadow-lg shadow-zion-purple/20 border-b border-zion-purple/30' 
        : 'bg-zion-slate-dark/80 backdrop-blur-sm border-b border-zion-purple/20'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="group-hover:scale-110 transition-transform duration-300">
                <Logo />
              </div>
              <div className="hidden sm:block">
                <span className="text-xl font-bold text-white">Zion Tech Group</span>
                <div className="text-xs text-zion-cyan font-medium">Innovation • Technology • Growth</div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <div className="relative">
                    <button className="flex items-center space-x-1 text-zion-slate-light hover:text-white transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-zion-purple/20">
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                    </button>
                    
                    {/* Dropdown Menu */}
                    <div className="absolute top-full left-0 mt-2 w-64 bg-zion-slate-dark/95 backdrop-blur-md border border-zion-purple/30 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top scale-95 group-hover:scale-100">
                      <div className="p-2">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.href}
                            className={`block px-4 py-3 text-sm rounded-lg transition-all duration-200 ${
                              location.pathname === dropdownItem.href
                                ? 'bg-zion-purple/20 text-white'
                                : 'text-zion-slate-light hover:text-white hover:bg-zion-purple/10'
                            }`}
                            onClick={closeMobileMenu}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`text-zion-slate-light hover:text-white transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-zion-purple/20 ${
                      location.pathname === item.href ? 'text-white bg-zion-purple/20' : ''
                    }`}
                    onClick={closeMobileMenu}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            
            {/* CTA Button */}
            <Link
              to="/contact"
              className="bg-gradient-to-r from-zion-purple to-zion-cyan text-white px-6 py-2 rounded-lg font-semibold hover:from-zion-purple/90 hover:to-zion-cyan/90 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-zion-purple/25"
            >
              Get Started
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg p-3 text-zion-slate-light hover:bg-zion-purple/20 hover:text-white focus:outline-none focus:ring-2 focus:ring-zion-purple focus:ring-offset-2 focus:ring-offset-zion-slate-dark lg:hidden transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <span className="sr-only">Open main menu</span>
            {isMobileMenuOpen ? (
              <X className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="block h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <MobileMenu onClose={closeMobileMenu} />
      )}
    </header>
  );
}