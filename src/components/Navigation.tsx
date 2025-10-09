import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {Menu, X, Phone, MapPin, Home} from 'lucide-react';
const Navigation: React.FC = () => {
  return (
    <div>Coming Soon</div>
  );
};
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  useEffect(() => {
  // TODO: Add content;
}
    const _handleScroll = () => {
  // TODO: Add content;
}
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
  }, []);
  const closeAllMenus = () => {
  // TODO: Add content;
}
    setIsOpen(false);
    setServicesOpen(false);
    
          
          
          
          
          
          
          
  )
    
  // TODO: Add content;
}
//       isScrolled;
//         ? 'bg-slate-900/95 backdrop-blur-lg border-b border-cyan-400/20'
        : 'bg-transparent'
    }`}>
          
          
          
          
          
          
          
          
          {/* Logo */}
          {/* Desktop Menu */}
    r:text-cyan-400 transition-colors font-medium">
              Home;
              About;
            {/* Services Dropdown */}
              {servicesOpen && (
                      {/* AI Services */}
                            AI Analytics;
                            AI Automation;
                            AI Content Generation;
                            AI Customer Support;
                      {/* IT Services */}
                            IT Services;
                            Cloud Migration;
                            DevOps;
                            Cybersecurity;
                        to="/services" className="block w-full text-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover: from-cyan-600 hove,to-blue-700 transition-all"
                        onClick={closeAllMenus}
                      >
                        View All Services;
              )}
              to="/case-studies" className="font-medium transition-colors hover:text-cyan-400 text-white"
              Case Studies;
              Contact;
            {/* CTA Button */}
              to="/contact" className="cyber-button inline-flex items-center"
            ><Phone className="w-4 h-4 mr-2" />
              (302) 464-0950;
          {/* Mobile Menu Button */}
              onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-cyan-400 transition-colors"
              aria-label="Toggle menu"
{isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        {/* Mobile menu */}
        {isOpen && (
              {/* Main Navigation */}
                  to="/" className="block text-white hover:text-cyan-400 transition-colors py-2"
                  to="/about" className="block text-white hover:text-cyan-400 transition-colors py-2"
                  to="/services" className="block text-white hover:text-cyan-400 transition-colors py-2"
                  Services;
                  to="/contact" className="block text-white hover:text-cyan-400 transition-colors py-2"
              {/* Contact Info */}
                  href="tel: +13024640950" className="flex items-center space-x-3 text-white hove,

                ><Phone className="w-5 h-5" /><span>(302) 464-0950</span></a><a;
                  href="mailto: kleber@ziontechgroup.com" className="flex items-center space-x-3 text-white hove,

                ><span>kleber@ziontechgroup.com</span></a><a;
                  href="https:// maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709"
                  target="_blank"
                  rel="noopener noreferrer" className="flex items-center space-x-3 text-white hover:text-cyan-400 transition-colors"
                >
          
          
          
          
          
          
          
          
  );
};

export default Navigation;