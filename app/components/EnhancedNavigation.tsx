import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, Brain, Shield, Zap, Globe, Menu, X } from 'lucide-react';

const EnhancedNavigation = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const services = [
    {
      title: "AI Services",
      description: "Artificial Intelligence Solutions",
      icon: <Brain className="w-5 h-5" />,
      color: "from-blue-500 to-cyan-500",
      links: [
        { name: "AI Business Intelligence", href: "/ai-business-intelligence" },
        { name: "AI Customer Support", href: "/ai-customer-support" },
        { name: "AI Content Generation", href: "/ai-content-generation" },
        { name: "AI Cybersecurity", href: "/ai-cybersecurity" },
        { name: "All AI Services", href: "/ai-services" }
      ]
    },
    {
      title: "IT Services",
      description: "Technology Infrastructure",
      icon: <Shield className="w-5 h-5" />,
      color: "from-green-500 to-emerald-500",
      links: [
        { name: "Cloud Infrastructure", href: "/cloud-infrastructure" },
        { name: "Cybersecurity Solutions", href: "/cybersecurity-solutions" },
        { name: "Web Development", href: "/web-development" },
        { name: "Mobile Development", href: "/mobile-development" },
        { name: "All IT Services", href: "/services" }
      ]
    },
    {
      title: "Micro SAAS",
      description: "Ready-to-Use Solutions",
      icon: <Zap className="w-5 h-5" />,
      color: "from-purple-500 to-pink-500",
      links: [
        { name: "Zion Analytics Pro", href: "/zion-analytics-pro" },
        { name: "Zion Security Shield", href: "/zion-security-shield" },
        { name: "Zion Cloud Vault", href: "/zion-cloud-vault" },
        { name: "All Micro SAAS", href: "/micro-saas" }
      ]
    },
    {
      title: "5G Solutions",
      description: "Next-Gen Connectivity",
      icon: <Globe className="w-5 h-5" />,
      color: "from-orange-500 to-red-500",
      links: [
        { name: "5G Implementation", href: "/5g-implementation" },
        { name: "5G Edge Computing", href: "/5g-edge-computing" },
        { name: "5G Smart Cities", href: "/5g-smart-city-solutions" },
        { name: "All 5G Solutions", href: "/5g-solutions" }
      ]
    }
  ];

  const mainNavItems = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services", hasDropdown: true },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" }
  ];

  return (
    <header className="bg-black/20 backdrop-blur-sm border-b border-white/10 relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-white group">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:from-cyan-300 group-hover:to-purple-300 transition-all duration-300">
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {mainNavItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.href}
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 relative group flex items-center"
                  onMouseEnter={() => item.hasDropdown && setIsServicesOpen(true)}
                  onMouseLeave={() => item.hasDropdown && setIsServicesOpen(false)}
                >
                  {item.name}
                  {item.hasDropdown && (
                    <ChevronDown className="w-4 h-4 ml-1 group-hover:rotate-180 transition-transform duration-300" />
                  )}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
                </Link>

                {/* Services Dropdown */}
                {item.hasDropdown && isServicesOpen && (
                  <div
                    className="absolute top-full left-0 mt-2 w-screen max-w-4xl bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl border border-white/20 p-6 z-50"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {services.map((service, index) => (
                        <div key={index} className="space-y-3">
                          <div className="flex items-center space-x-3">
                            <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                              {service.icon}
                            </div>
                            <div>
                              <h3 className="font-semibold text-gray-900">{service.title}</h3>
                              <p className="text-sm text-gray-600">{service.description}</p>
                            </div>
                          </div>
                          <ul className="space-y-2">
                            {service.links.map((link, linkIndex) => (
                              <li key={linkIndex}>
                                <Link
                                  to={link.href}
                                  className="text-sm text-gray-700 hover:text-cyan-600 transition-colors duration-200 flex items-center group"
                                >
                                  {link.name}
                                  <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Link
              to="/consultation"
              className="hidden sm:flex group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Free Consultation
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-white hover:text-cyan-400 transition-colors duration-300"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-sm border-t border-white/10 py-4 z-50">
            <div className="px-4 space-y-4">
              {mainNavItems.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.hasDropdown && (
                    <div className="ml-4 space-y-2 mt-2">
                      {services.map((service, serviceIndex) => (
                        <div key={serviceIndex} className="space-y-1">
                          <h4 className="text-sm font-semibold text-cyan-400">{service.title}</h4>
                          {service.links.map((link, linkIndex) => (
                            <Link
                              key={linkIndex}
                              to={link.href}
                              className="block text-sm text-gray-400 hover:text-cyan-300 transition-colors duration-200 py-1"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {link.name}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-white/10">
                <Link
                  to="/consultation"
                  className="block bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Free Consultation
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default EnhancedNavigation;