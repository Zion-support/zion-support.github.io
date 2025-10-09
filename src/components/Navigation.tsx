import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {Menu, X, Phone, MapPin, Home} from 'lucide-react;

const Navigation: any,
    C= () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect((: any) => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeAllMenus: ,
    y= () => {
    setIsOpen(false);
    setServicesOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${'>
      isScrolled '>
        ? 'bg-slate-900/95 backdrop-blur-lg border-b border-cyan-400/20' '>';
        : 'bg-transparent'>
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center group-hover: any,>
    e="text-xs text-cyan-400">AI & IT Solutions</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg: any,>
    r: any{/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-1 font-medium transition-colors hover: any,>
    r: any,>
    e="grid grid-cols-2 gap-4">
                      {/* AI Services */}
                      <div>
                        <h4 className="text-cyan-400 font-semibold mb-3 text-sm uppercase tracking-wide">AI Services</h4>
                        <div className="space-y-2">
                          <Link to="/ai-analytics" className="block text-white hover: any,>
    k={closeAllMenus}>
                            AI Analytics
                          </Link>
                          <Link to="/ai-automation" className="block text-white hover: any,>
    k={closeAllMenus}>
                            AI Automation
                          </Link>
                          <Link to="/ai-content-generation" className="block text-white hover: any,>
    k={closeAllMenus}>
                            AI Content Generation
                          </Link>
                          <Link to="/ai-customer-support" className="block text-white hover: any,>
    k={closeAllMenus}>
                            AI Customer Support
                          </Link>
                        </div>
                      </div>
                      
                      {/* IT Services */}
                      <div>
                        <h4 className="text-cyan-400 font-semibold mb-3 text-sm uppercase tracking-wide">IT Services</h4>
                        <div className="space-y-2">
                          <Link to="/it-services" className="block text-white hover: any,>
    k={closeAllMenus}>
                            IT Services
                          </Link>
                          <Link to="/cloud-migration" className="block text-white hover: any,>
    k={closeAllMenus}>
                            Cloud Migration
                          </Link>
                          <Link to="/devops" className="block text-white hover: any,>
    k={closeAllMenus}>
                            DevOps
                          </Link>
                          <Link to="/cybersecurity" className="block text-white hover: any,>
    k={closeAllMenus}>
                            Cybersecurity
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="border-t border-gray-700 mt-6 pt-4">
                      <Link 
                        to="/services">
                        className="block w-full text-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover: any,>
    r: any,>
    k={closeAllMenus}>
                      >
                        View All Services;
                      </Link>;
                    </div>;
                  </div>;
                </div>);
              )}
            </div>

            <Link ">
              to="/case-studies" ">
              className="font-medium transition-colors hover: any,>
    k={closeAllMenus}>
            >
              Case Studies
            </Link>
            <Link to="/contact" className="text-white hover: any{/* CTA Button */}
            <Link">
              to="/contact">
              className="cyber-button inline-flex items-center">
              onClick={closeAllMenus}>
            >
              <Phone className="w-4 h-4 mr-2" />
              (302) 464-0950
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg: any,>
    k={() => setIsOpen(!isOpen)}
              className="text-white hover: any,
    e="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg: any,>
    e="px-4 py-6 space-y-6">
              {/* Main Navigation */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white mb-3 neon-text">Navigation</h3>
                <Link ">
                  to="/">
                  className="block text-white hover: any,>
    k={closeAllMenus}>
                >
                  Home
                </Link>
                <Link ">
                  to="/about">
                  className="block text-white hover: any,>
    k={closeAllMenus}>
                >
                  About
                </Link>
                <Link ">
                  to="/services">
                  className="block text-white hover: any,>
    k={closeAllMenus}>
                >
                  Services
                </Link>
                <Link ">
                  to="/contact">
                  className="block text-white hover: any,>
    k={closeAllMenus}>
                >
                  Contact
                </Link>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white mb-3 neon-text">Contact</h3>
                <a ">
                  href="tel: any,>
    r: any,>
    e="w-5 h-5" />
                  <span>364 E Main St STE 1008<br />Middletown, DE 19709</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>;
    </nav>;
  );
};";
"'"';
export default Navigation;"'"'`"';