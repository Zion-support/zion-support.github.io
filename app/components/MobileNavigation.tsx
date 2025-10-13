import React, { useState, useCallback, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Zap, Cloud, Shield, Database, Code, Brain, BarChart3, Star, ArrowRight, Home, Phone, Mail, MapPin } from 'lucide-react';

const MobileNavigation = React.memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMicroSaasOpen, setIsMicroSaasOpen] = useState(false);
  const location = useLocation();
  
  const toggleMenu = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const toggleServices = useCallback(() => {
    setIsServicesOpen(!isServicesOpen);
  }, [isServicesOpen]);

  const toggleMicroSaas = useCallback(() => {
    setIsMicroSaasOpen(!isMicroSaasOpen);
  }, [isMicroSaasOpen]);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
    setIsServicesOpen(false);
    setIsMicroSaasOpen(false);
  }, []);

  const aiServices = useMemo(() => [
    { name: 'AI Analytics Dashboard', path: '/ai-analytics-dashboard-pro', icon: <BarChart3 className="w-4 h-4" /> },
    { name: 'AI Content Generator', path: '/ai-content-generator', icon: <Brain className="w-4 h-4" /> },
    { name: 'AI Cybersecurity Suite', path: '/ai-cybersecurity-suite-pro', icon: <Shield className="w-4 h-4" /> },
    { name: 'AI Customer Support', path: '/ai-customer-support-chatbot', icon: <Zap className="w-4 h-4" /> },
    { name: 'AI Code Assistant', path: '/ai-code-assistant-pro', icon: <Code className="w-4 h-4" /> },
    { name: 'AI Business Intelligence', path: '/ai-business-intelligence-pro', icon: <Database className="w-4 h-4" /> }
  ], []);

  const microSaasServices = useMemo(() => [
    { name: 'Zion Analytics Pro', path: '/zion-analytics-pro', icon: <BarChart3 className="w-4 h-4" />, featured: true },
    { name: 'Zion Security Shield', path: '/zion-security-shield', icon: <Shield className="w-4 h-4" />, featured: true },
    { name: 'Zion Cloud Vault', path: '/zion-cloud-vault', icon: <Cloud className="w-4 h-4" />, featured: true },
    { name: 'Zion Content Studio', path: '/zion-content-studio', icon: <Brain className="w-4 h-4" /> },
    { name: 'Zion Data Sync', path: '/zion-data-sync', icon: <Database className="w-4 h-4" /> },
    { name: 'Zion Lead Magnet', path: '/zion-lead-magnet', icon: <Zap className="w-4 h-4" /> },
    { name: 'Zion Project Master', path: '/zion-project-master', icon: <Code className="w-4 h-4" /> },
    { name: 'Zion Email Automation', path: '/zion-email-automation', icon: <Zap className="w-4 h-4" /> }
  ], []);

  const mainNavItems = useMemo(() => [
    { name: 'Home', path: '/', icon: <Home className="w-5 h-5" /> },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ], []);

  const contactInfo = useMemo(() => [
    { icon: <Phone className="w-4 h-4" />, text: '+1 (302) 464-0950', href: 'tel:+13024640950' },
    { icon: <Mail className="w-4 h-4" />, text: 'kleber@ziontechgroup.com', href: 'mailto:kleber@ziontechgroup.com' },
    { icon: <MapPin className="w-4 h-4" />, text: '364 E Main St STE 1008, Middletown, DE 19709', href: 'https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709' }
  ], []);

  // Close menu when route changes
  React.useEffect(() => {
    closeMenu();
  }, [location.pathname, closeMenu]);

  // Prevent body scroll when menu is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      {/* Mobile menu button */}
      <div className="lg:hidden">
        <button
          onClick={toggleMenu}
          className="text-white hover:text-cyan-400 transition-colors p-2 rounded-lg hover:bg-cyan-500/10 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-slate-900"
          aria-label="Toggle mobile menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={closeMenu}
            aria-hidden="true"
          />
          
          {/* Menu panel */}
          <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-slate-900 shadow-2xl transform transition-transform duration-300 ease-in-out">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-cyan-500/20">
                <Link 
                  to="/" 
                  className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
                  onClick={closeMenu}
                >
                  Zion Tech Group
                </Link>
                <button
                  onClick={closeMenu}
                  className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-700"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation content */}
              <div className="flex-1 overflow-y-auto">
                <nav className="p-4 space-y-2">
                  {/* Main navigation */}
                  {mainNavItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                        location.pathname === item.path
                          ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                          : 'text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400'
                      }`}
                      onClick={closeMenu}
                    >
                      {item.icon && <span className="text-cyan-400">{item.icon}</span>}
                      <span className="font-medium">{item.name}</span>
                    </Link>
                  ))}

                  {/* AI Services */}
                  <div className="pt-4">
                    <button
                      onClick={toggleServices}
                      className="flex items-center justify-between w-full px-4 py-3 rounded-lg text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400 transition-all duration-300"
                    >
                      <div className="flex items-center space-x-3">
                        <Brain className="w-5 h-5 text-cyan-400" />
                        <span className="font-medium">AI Services</span>
                      </div>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {isServicesOpen && (
                      <div className="ml-4 mt-2 space-y-1">
                        {aiServices.map((service) => (
                          <Link
                            key={service.name}
                            to={service.path}
                            className="flex items-center space-x-3 px-4 py-2 text-gray-400 hover:text-cyan-400 transition-colors rounded-lg hover:bg-cyan-500/10"
                            onClick={closeMenu}
                          >
                            <span className="text-cyan-400">{service.icon}</span>
                            <span className="text-sm">{service.name}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Micro SAAS */}
                  <div className="pt-2">
                    <button
                      onClick={toggleMicroSaas}
                      className="flex items-center justify-between w-full px-4 py-3 rounded-lg text-gray-300 hover:bg-purple-500/10 hover:text-purple-400 transition-all duration-300"
                    >
                      <div className="flex items-center space-x-3">
                        <Zap className="w-5 h-5 text-purple-400" />
                        <span className="font-medium">Micro SAAS</span>
                      </div>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isMicroSaasOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {isMicroSaasOpen && (
                      <div className="ml-4 mt-2 space-y-1">
                        {microSaasServices.map((service) => (
                          <Link
                            key={service.name}
                            to={service.path}
                            className="flex items-center space-x-3 px-4 py-2 text-gray-400 hover:text-purple-400 transition-colors rounded-lg hover:bg-purple-500/10"
                            onClick={closeMenu}
                          >
                            <span className="text-purple-400">{service.icon}</span>
                            <span className="text-sm flex-1">{service.name}</span>
                            {service.featured && <Star className="w-3 h-3 text-yellow-400 fill-current" />}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </nav>

                {/* Contact Information */}
                <div className="p-4 border-t border-gray-700">
                  <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                    Contact Us
                  </h3>
                  <div className="space-y-2">
                    {contactInfo.map((contact, index) => (
                      <a
                        key={index}
                        href={contact.href}
                        className="flex items-center space-x-3 text-sm text-gray-300 hover:text-cyan-400 transition-colors"
                        onClick={closeMenu}
                      >
                        <span className="text-cyan-400">{contact.icon}</span>
                        <span>{contact.text}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="p-4 border-t border-gray-700">
                <Link
                  to="/consultation"
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-6 py-3 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 font-semibold group"
                  onClick={closeMenu}
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
});

MobileNavigation.displayName = 'MobileNavigation';

export default MobileNavigation;