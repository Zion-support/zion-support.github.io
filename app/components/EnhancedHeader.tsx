import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Menu, X, ChevronDown, Brain, Shield, Zap, Globe, Database, Code, Smartphone, Building, Users, BarChart3 } from "lucide-react";

const EnhancedHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const services = [
    {
      title: "AI Services",
      icon: <Brain className="w-5 h-5" />,
      path: "/ai-services",
      description: "Artificial Intelligence Solutions",
      submenu: [
        { title: "AI Analytics", path: "/ai-analytics" },
        { title: "AI Automation", path: "/ai-automation" },
        { title: "AI Content Generation", path: "/ai-content-generation" },
        { title: "AI Customer Service", path: "/ai-customer-service" },
        { title: "AI Marketing", path: "/ai-marketing" },
        { title: "AI Cybersecurity", path: "/ai-cybersecurity" }
      ]
    },
    {
      title: "IT Services",
      icon: <Shield className="w-5 h-5" />,
      path: "/it-services",
      description: "Information Technology Solutions",
      submenu: [
        { title: "Cloud Computing", path: "/cloud-services" },
        { title: "Cybersecurity", path: "/cybersecurity" },
        { title: "Data Analytics", path: "/data-analytics" },
        { title: "Web Development", path: "/web-development" },
        { title: "Mobile Development", path: "/mobile-development" },
        { title: "IT Consulting", path: "/it-consulting" }
      ]
    },
    {
      title: "5G Solutions",
      icon: <Globe className="w-5 h-5" />,
      path: "/5g-solutions",
      description: "Next-Generation Connectivity",
      submenu: [
        { title: "5G Network Infrastructure", path: "/5g-network-infrastructure" },
        { title: "5G IoT Solutions", path: "/5g-iot-solutions" },
        { title: "5G Edge Computing", path: "/5g-edge-computing" },
        { title: "5G Smart Cities", path: "/5g-smart-city-solutions" },
        { title: "5G Mobile Applications", path: "/5g-mobile-applications" },
        { title: "5G Private Networks", path: "/5g-private-networks" }
      ]
    },
    {
      title: "Micro SAAS",
      icon: <Zap className="w-5 h-5" />,
      path: "/micro-saas",
      description: "Ready-to-Use Software Solutions",
      submenu: [
        { title: "AI Analytics Dashboard", path: "/ai-analytics-dashboard" },
        { title: "AI Content Generator", path: "/ai-content-generator" },
        { title: "AI Chatbot Builder", path: "/ai-chatbot-builder" },
        { title: "AI Business Intelligence", path: "/ai-business-intelligence" },
        { title: "AI CRM Assistant", path: "/ai-crm-assistant" },
        { title: "AI Project Management", path: "/ai-project-management" }
      ]
    }
  ];

  const companyPages = [
    { title: "About Us", path: "/about" },
    { title: "Our Team", path: "/team" },
    { title: "Careers", path: "/careers" },
    { title: "Case Studies", path: "/case-studies" },
    { title: "Blog", path: "/blog" },
    { title: "News", path: "/news" }
  ];

  const supportPages = [
    { title: "Help Center", path: "/support" },
    { title: "Documentation", path: "/docs" },
    { title: "Tutorials", path: "/tutorials" },
    { title: "API Reference", path: "/api" },
    { title: "Status", path: "/status" },
    { title: "Contact Support", path: "/contact" }
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = (service: string) => {
    setActiveDropdown(activeDropdown === service ? null : service);
  };

  return (
    <header className="bg-black/20 backdrop-blur-sm border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">Z</span>
            </div>
            <span className="text-2xl font-bold text-white">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors py-2"
                onMouseEnter={() => setActiveDropdown('services')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === 'services' && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-white/95 backdrop-blur-sm rounded-xl shadow-xl border border-white/20 p-6">
                  <div className="grid grid-cols-2 gap-6">
                    {services.map((service, index) => (
                      <div key={index} className="space-y-3">
                        <Link
                          to={service.path}
                          className="flex items-center space-x-2 text-gray-800 hover:text-cyan-600 transition-colors"
                        >
                          {service.icon}
                          <span className="font-semibold">{service.title}</span>
                        </Link>
                        <p className="text-sm text-gray-600">{service.description}</p>
                        <div className="space-y-1">
                          {service.submenu.slice(0, 3).map((item, itemIndex) => (
                            <Link
                              key={itemIndex}
                              to={item.path}
                              className="block text-sm text-gray-600 hover:text-cyan-600 transition-colors"
                            >
                              {item.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Company Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors py-2"
                onMouseEnter={() => setActiveDropdown('company')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <span>Company</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === 'company' && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white/95 backdrop-blur-sm rounded-xl shadow-xl border border-white/20 p-4">
                  {companyPages.map((page, index) => (
                    <Link
                      key={index}
                      to={page.path}
                      className="block py-2 text-gray-800 hover:text-cyan-600 transition-colors"
                    >
                      {page.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Support Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors py-2"
                onMouseEnter={() => setActiveDropdown('support')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <span>Support</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === 'support' && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white/95 backdrop-blur-sm rounded-xl shadow-xl border border-white/20 p-4">
                  {supportPages.map((page, index) => (
                    <Link
                      key={index}
                      to={page.path}
                      className="block py-2 text-gray-800 hover:text-cyan-600 transition-colors"
                    >
                      {page.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Direct Links */}
            <Link
              to="/pricing"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Pricing
            </Link>
            <Link
              to="/demo"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Demo
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              Get Started
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-white/10 py-4">
            <div className="space-y-4">
              {/* Services */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Services</h3>
                <div className="grid grid-cols-2 gap-3">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      to={service.path}
                      className="flex items-center space-x-2 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {service.icon}
                      <span className="text-white text-sm">{service.title}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Company */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Company</h3>
                <div className="space-y-2">
                  {companyPages.map((page, index) => (
                    <Link
                      key={index}
                      to={page.path}
                      className="block py-2 text-gray-300 hover:text-white transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {page.title}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Support */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Support</h3>
                <div className="space-y-2">
                  {supportPages.map((page, index) => (
                    <Link
                      key={index}
                      to={page.path}
                      className="block py-2 text-gray-300 hover:text-white transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {page.title}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Direct Links */}
              <div className="flex space-x-4">
                <Link
                  to="/pricing"
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Pricing
                </Link>
                <Link
                  to="/demo"
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Demo
                </Link>
              </div>

              {/* Mobile CTA */}
              <Link
                to="/contact"
                className="block w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default EnhancedHeader;