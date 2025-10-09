import React, { useState, useEffect } from 'react';

const Navigation: React.FC = () =>{
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleServicesClose = () => {
    setServicesOpen(false);
  };
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-slate-900/95 backdrop-blur-lg border-b border-cyan-400/20' 
        : 'bg-transparent'
    }`}>
      <div>
        <div>
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div>
              <span className="text-white font-bold text-lg">Z</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-white cyber-text neon-pulse">Zion Tech Group</h1>
              <p className="text-xs text-cyan-400">AI & IT Solutions</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div>
            <Link to="/" className="text-white hover:text-cyan-400 transition-colors font-medium">Home</Link>
            <Link to="/about" className="text-white hover:text-cyan-400 transition-colors font-medium">About</Link>
            {/* Services Dropdown */}
            <div>
              <button className="flex items-center space-x-1 font-medium transition-colors hover:text-cyan-400 text-white">
                <span>Services</span>
                <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
              </button>
              
              {servicesOpen && (
                <div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-4 neon-text">Our Services</h3>
                    <div>
                      {/* AI Services */}
                      <div>
                        <h4 className="text-cyan-400 font-semibold mb-3 text-sm uppercase tracking-wide">AI Services</h4>
                        <div>
                          <Link to="/ai-analytics" className="block text-white hover:text-cyan-400 transition-colors text-sm py-1" onClick={closeAllMenus}>AI Analytics</Link>
                          <Link to="/ai-automation" className="block text-white hover:text-cyan-400 transition-colors text-sm py-1" onClick={closeAllMenus}>AI Automation</Link>
                          <Link to="/ai-content-generation" className="block text-white hover:text-cyan-400 transition-colors text-sm py-1" onClick={closeAllMenus}>AI Content Generation</Link>
                          <Link to="/ai-customer-support" className="block text-white hover:text-cyan-400 transition-colors text-sm py-1" onClick={closeAllMenus}>AI Customer Support</Link>
                        </div>
                      </div>
                      {/* IT Services */}
                      <div>
                        <h4 className="text-cyan-400 font-semibold mb-3 text-sm uppercase tracking-wide">IT Services</h4>
                        <div>
                          <Link to="/it-services" className="block text-white hover:text-cyan-400 transition-colors text-sm py-1" onClick={closeAllMenus}>IT Services</Link>
                          <Link to="/cloud-migration" className="block text-white hover:text-cyan-400 transition-colors text-sm py-1" onClick={closeAllMenus}>Cloud Migration</Link>
                          <Link to="/devops" className="block text-white hover:text-cyan-400 transition-colors text-sm py-1" onClick={closeAllMenus}>DevOps</Link>
                          <Link to="/cybersecurity" className="block text-white hover:text-cyan-400 transition-colors text-sm py-1" onClick={closeAllMenus}>Cybersecurity</Link>
                        </div>
                      </div>
                    </div>
                    <div>
                      <Link
                        to="/services"
                        className="block w-full text-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all"
                        onClick={closeAllMenus}
                      >View All Services</Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <Link
              to="/case-studies" 
              className="font-medium transition-colors hover:text-cyan-400 text-white"
              onClick={closeAllMenus}
            >Case Studies</Link>
            <Link to="/contact" className="text-white hover:text-cyan-400 transition-colors font-medium">Contact</Link>

            {/* CTA Button */}
            <Link
              to="/contact"
              className="cyber-button inline-flex items-center"
              onClick={closeAllMenus}
            >
              <Phone className="w-4 h-4 mr-2" />(302) 464-0950</Link>
          </div>
          {/* Mobile Menu Button */}
          <div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-cyan-400 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        {isOpen && (
          <div>
            <div>
              {/* Main Navigation */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-3 neon-text">Navigation</h3>
                <Link
                  to="/"
                  className="block text-white hover:text-cyan-400 transition-colors py-2"
                  onClick={closeAllMenus}
                >Home</Link>
                <Link
                  to="/about"
                  className="block text-white hover:text-cyan-400 transition-colors py-2"
                  onClick={closeAllMenus}
                >About</Link>
                <Link
                  to="/services"
                  className="block text-white hover:text-cyan-400 transition-colors py-2"
                  onClick={closeAllMenus}
                >Services</Link>
                <Link
                  to="/contact"
                  className="block text-white hover:text-cyan-400 transition-colors py-2"
                  onClick={closeAllMenus}
                >Contact</Link>
              </div>
              {/* Contact Info */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-3 neon-text">Contact</h3>
                <a
                  href="tel:+13024640950"
                  className="flex items-center space-x-3 text-white hover:text-cyan-400 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>(302) 464-0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="flex items-center space-x-3 text-white hover:text-cyan-400 transition-colors"
                >
                  <span>kleber@ziontechgroup.com</span>
                </a>
                <a
                  href="https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-white hover:text-cyan-400 transition-colors"
                >
                  <MapPin className="w-5 h-5" />
                  <span>364 E Main St STE 1008<br />Middletown, DE 19709</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>);
}
export default Navigation