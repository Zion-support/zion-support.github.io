import React, { useState, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Brain, 
  Shield, 
  Zap, 
  Globe, 
  ChevronDown,
  ChevronUp
} from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const toggleMenu = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const toggleDropdown = useCallback((dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  }, [activeDropdown]);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const mainServices = [
    { name: "AI Solutions", path: "/ai-services", icon: Brain },
    { name: "IT Services", path: "/services", icon: Shield },
    { name: "Micro SAAS", path: "/micro-saas", icon: Zap },
    { name: "5G Solutions", path: "/5g-solutions", icon: Globe },
  ];

  const aiServices = [
    { name: "AI Analytics", path: "/ai-analytics" },
    { name: "AI Cybersecurity", path: "/ai-cybersecurity" },
    { name: "AI Content Generation", path: "/ai-content-generation" },
    { name: "AI Customer Support", path: "/ai-customer-support" },
    { name: "AI Data Analytics", path: "/ai-data-analytics" },
    { name: "AI Marketing Automation", path: "/ai-marketing-automation" },
    { name: "AI Predictive Analytics", path: "/ai-predictive-analytics" },
    { name: "AI Voice Assistant", path: "/ai-voice-assistant" },
  ];

  const microSaasServices = [
    { name: "Zion Analytics Pro", path: "/zion-analytics-pro" },
    { name: "Zion Security Shield", path: "/zion-security-shield" },
    { name: "Zion Cloud Vault", path: "/zion-cloud-vault" },
    { name: "Zion AI CRM Pro", path: "/zion-ai-crm-pro" },
    { name: "Zion AI Marketing Automation Pro", path: "/zion-ai-marketing-automation-pro" },
    { name: "Zion AI Project Manager Pro", path: "/zion-ai-project-manager-pro" },
  ];

  const itServices = [
    { name: "Cloud Infrastructure", path: "/cloud-infrastructure" },
    { name: "Cybersecurity", path: "/cybersecurity" },
    { name: "Digital Transformation", path: "/digital-transformation" },
    { name: "IT Consulting", path: "/it-consulting" },
    { name: "System Integration", path: "/system-integration" },
    { name: "Data Management", path: "/data-management" },
  ];

  const companyLinks = [
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Blog", path: "/blog" },
    { name: "Careers", path: "/careers" },
  ];

  return (
    <nav className="bg-slate-900/95 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 group"
            onClick={closeMenu}
          >
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Main Services */}
            {mainServices.map((service) => (
              <div key={service.name} className="relative group">
                <button
                  className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors ${
                    isActive(service.path) 
                      ? 'text-cyan-400 bg-cyan-500/10' 
                      : 'text-gray-300 hover:text-white hover:bg-slate-800'
                  }`}
                  onClick={() => toggleDropdown(service.name)}
                >
                  <service.icon className="w-4 h-4" />
                  <span>{service.name}</span>
                  {activeDropdown === service.name ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>

                {/* Dropdown Menu */}
                {activeDropdown === service.name && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800 rounded-lg shadow-xl border border-slate-700 py-2 z-50">
                    {service.name === "AI Solutions" && (
                      <>
                        {aiServices.map((item) => (
                          <Link
                            key={item.name}
                            to={item.path}
                            className="block px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-slate-700 transition-colors"
                            onClick={closeMenu}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </>
                    )}
                    {service.name === "Micro SAAS" && (
                      <>
                        {microSaasServices.map((item) => (
                          <Link
                            key={item.name}
                            to={item.path}
                            className="block px-4 py-2 text-sm text-gray-300 hover:text-purple-400 hover:bg-slate-700 transition-colors"
                            onClick={closeMenu}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </>
                    )}
                    {service.name === "IT Services" && (
                      <>
                        {itServices.map((item) => (
                          <Link
                            key={item.name}
                            to={item.path}
                            className="block px-4 py-2 text-sm text-gray-300 hover:text-green-400 hover:bg-slate-700 transition-colors"
                            onClick={closeMenu}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </>
                    )}
                    {service.name === "5G Solutions" && (
                      <div className="px-4 py-2 text-sm text-gray-400">
                        Coming Soon - Advanced 5G Solutions
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}

            {/* Company Links */}
            {companyLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-3 py-2 rounded-lg transition-colors ${
                  isActive(link.path) 
                    ? 'text-cyan-400 bg-cyan-500/10' 
                    : 'text-gray-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/contact"
              className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-slate-700 py-4">
            <div className="space-y-2">
              {/* Main Services */}
              {mainServices.map((service) => (
                <div key={service.name}>
                  <button
                    className="w-full flex items-center justify-between px-4 py-3 text-left text-gray-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                    onClick={() => toggleDropdown(service.name)}
                  >
                    <div className="flex items-center space-x-2">
                      <service.icon className="w-4 h-4" />
                      <span>{service.name}</span>
                    </div>
                    {activeDropdown === service.name ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>

                  {/* Mobile Dropdown */}
                  {activeDropdown === service.name && (
                    <div className="ml-4 mt-2 space-y-1">
                      {service.name === "AI Solutions" && (
                        <>
                          {aiServices.map((item) => (
                            <Link
                              key={item.name}
                              to={item.path}
                              className="block px-4 py-2 text-sm text-gray-400 hover:text-cyan-400 hover:bg-slate-700 rounded-lg transition-colors"
                              onClick={closeMenu}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </>
                      )}
                      {service.name === "Micro SAAS" && (
                        <>
                          {microSaasServices.map((item) => (
                            <Link
                              key={item.name}
                              to={item.path}
                              className="block px-4 py-2 text-sm text-gray-400 hover:text-purple-400 hover:bg-slate-700 rounded-lg transition-colors"
                              onClick={closeMenu}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </>
                      )}
                      {service.name === "IT Services" && (
                        <>
                          {itServices.map((item) => (
                            <Link
                              key={item.name}
                              to={item.path}
                              className="block px-4 py-2 text-sm text-gray-400 hover:text-green-400 hover:bg-slate-700 rounded-lg transition-colors"
                              onClick={closeMenu}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </>
                      )}
                      {service.name === "5G Solutions" && (
                        <div className="px-4 py-2 text-sm text-gray-400">
                          Coming Soon - Advanced 5G Solutions
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}

              {/* Company Links */}
              {companyLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`block px-4 py-3 rounded-lg transition-colors ${
                    isActive(link.path) 
                      ? 'text-cyan-400 bg-cyan-500/10' 
                      : 'text-gray-300 hover:text-white hover:bg-slate-800'
                  }`}
                  onClick={closeMenu}
                >
                  {link.name}
                </Link>
              ))}

              {/* Mobile CTA */}
              <div className="pt-4 border-t border-slate-700">
                <Link
                  to="/contact"
                  className="block w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg text-center hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                  onClick={closeMenu}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;