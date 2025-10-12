<<<<<<< HEAD
import { useState, useEffect } from 'react';
=======
import React, { useState, useEffect } from 'react';
>>>>>>> cursor/fix-errors-and-merge-to-main-ba0d
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Zap, Cloud, Globe, Code, Smartphone, Brain, Wifi } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleServices = () => {
    setServicesOpen(!servicesOpen);
  };

  const aiServices = [
<<<<<<< HEAD
    { name: 'AI Analytics & BI', url: '/ai-analytics', icon: <Brain className="w-4 h-4" /> },
    { name: 'AI Automation', url: '/ai-automation', icon: <Zap className="w-4 h-4" /> },
    { name: 'AI Chatbots', url: '/ai-chatbot-builder', icon: <Globe className="w-4 h-4" /> },
    { name: 'AI Content Generation', url: '/ai-content-generator', icon: <Code className="w-4 h-4" /> },
    { name: 'AI Cybersecurity', url: '/ai-cybersecurity', icon: <Wifi className="w-4 h-4" /> },
    { name: 'AI Voice Assistant', url: '/ai-voice-assistant', icon: <Smartphone className="w-4 h-4" /> }
  ];

  const itServices = [
    { name: 'Cloud Migration', url: '/cloud-migration', icon: <Cloud className="w-4 h-4" /> },
    { name: 'DevOps & CI/CD', url: '/devops', icon: <Code className="w-4 h-4" /> },
    { name: 'Cybersecurity', url: '/cybersecurity', icon: <Wifi className="w-4 h-4" /> },
    { name: 'Database Management', url: '/database', icon: <Globe className="w-4 h-4" /> },
    { name: 'API Development', url: '/api', icon: <Code className="w-4 h-4" /> },
    { name: 'Mobile Development', url: '/mobile-development', icon: <Smartphone className="w-4 h-4" /> }
=======
    { name: 'AI Analytics & BI', url: '/ai-analytics', icon: Zap },
    { name: 'AI Automation', url: '/ai-automation', icon: Brain },
    { name: 'AI Chatbots', url: '/ai-chatbot-builder', icon: Smartphone },
    { name: 'AI Content Generation', url: '/ai-content-generator', icon: Code },
    { name: 'AI Cybersecurity', url: '/ai-cybersecurity', icon: Globe },
    { name: 'AI Data Analytics', url: '/ai-data-analytics', icon: Wifi }
  ];

  const itServices = [
    { name: 'Cloud Migration', url: '/cloud-migration', icon: Cloud },
    { name: 'Cybersecurity', url: '/cybersecurity', icon: Globe },
    { name: 'Web Development', url: '/web-development', icon: Code },
    { name: 'Mobile Development', url: '/mobile-development', icon: Smartphone },
    { name: 'DevOps', url: '/devops', icon: Wifi },
    { name: 'Database Management', url: '/database-management', icon: Cloud }
>>>>>>> cursor/fix-errors-and-merge-to-main-ba0d
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
<<<<<<< HEAD
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
=======
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-purple-400 transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-purple-400 transition-colors">
>>>>>>> cursor/fix-errors-and-merge-to-main-ba0d
              About
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={toggleServices}
<<<<<<< HEAD
                className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors duration-300"
=======
                className="flex items-center text-white hover:text-purple-400 transition-colors"
>>>>>>> cursor/fix-errors-and-merge-to-main-ba0d
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {servicesOpen && (
<<<<<<< HEAD
                <div className="absolute top-full left-0 mt-2 w-96 bg-white rounded-lg shadow-xl border border-gray-200 py-4 z-50">
                  <div className="px-6 py-2">
                    <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <Brain className="w-4 h-4 text-blue-500" />
                      AI Services
                    </h3>
                    <div className="grid grid-cols-1 gap-2 mb-4">
                      {aiServices.map((service, index) => (
                        <Link
                          key={index}
                          to={service.url}
                          className="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                          onClick={() => setServicesOpen(false)}
                        >
                          {service.icon}
                          {service.name}
                        </Link>
                      ))}
                    </div>
                    
                    <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <Cloud className="w-4 h-4 text-green-500" />
                      IT Services
                    </h3>
                    <div className="grid grid-cols-1 gap-2">
                      {itServices.map((service, index) => (
                        <Link
                          key={index}
                          to={service.url}
                          className="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                          onClick={() => setServicesOpen(false)}
                        >
                          {service.icon}
                          {service.name}
                        </Link>
                      ))}
=======
                <div className="absolute top-full left-0 mt-2 w-96 bg-gray-900 rounded-lg shadow-xl border border-gray-700 p-6">
                  <div className="grid grid-cols-2 gap-6">
                    {/* AI Services */}
                    <div>
                      <h3 className="text-sm font-semibold text-purple-400 mb-3 flex items-center">
                        <Zap className="h-4 w-4 mr-2" />
                        AI Services
                      </h3>
                      <ul className="space-y-2">
                        {aiServices.map((service, index) => (
                          <li key={index}>
                            <Link
                              to={service.url}
                              className="flex items-center text-gray-300 hover:text-white transition-colors text-sm"
                              onClick={() => setServicesOpen(false)}
                            >
                              <service.icon className="h-4 w-4 mr-2" />
                              {service.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* IT Services */}
                    <div>
                      <h3 className="text-sm font-semibold text-cyan-400 mb-3 flex items-center">
                        <Cloud className="h-4 w-4 mr-2" />
                        IT Services
                      </h3>
                      <ul className="space-y-2">
                        {itServices.map((service, index) => (
                          <li key={index}>
                            <Link
                              to={service.url}
                              className="flex items-center text-gray-300 hover:text-white transition-colors text-sm"
                              onClick={() => setServicesOpen(false)}
                            >
                              <service.icon className="h-4 w-4 mr-2" />
                              {service.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
>>>>>>> cursor/fix-errors-and-merge-to-main-ba0d
                    </div>
                  </div>
                </div>
              )}
            </div>

<<<<<<< HEAD
            <Link
              to="/contact"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              Contact
            </Link>
            <Link
              to="/news"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              News
=======
            <Link to="/contact" className="text-white hover:text-purple-400 transition-colors">
              Contact
            </Link>
            <Link to="/blog" className="text-white hover:text-purple-400 transition-colors">
              Blog
>>>>>>> cursor/fix-errors-and-merge-to-main-ba0d
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/contact"
<<<<<<< HEAD
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
=======
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
>>>>>>> cursor/fix-errors-and-merge-to-main-ba0d
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
<<<<<<< HEAD
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
=======
          <button
            onClick={toggleMenu}
            className="lg:hidden text-white hover:text-purple-400 transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
>>>>>>> cursor/fix-errors-and-merge-to-main-ba0d
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
<<<<<<< HEAD
          <div className="md:hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-300"
=======
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900 rounded-lg mt-2">
              <Link
                to="/"
                className="block px-3 py-2 text-white hover:text-purple-400 transition-colors"
>>>>>>> cursor/fix-errors-and-merge-to-main-ba0d
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
<<<<<<< HEAD
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-300"
=======
                className="block px-3 py-2 text-white hover:text-purple-400 transition-colors"
>>>>>>> cursor/fix-errors-and-merge-to-main-ba0d
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              
              {/* Mobile Services */}
              <div className="px-3 py-2">
<<<<<<< HEAD
                <div className="text-gray-300 font-medium mb-2">AI Services</div>
                <div className="ml-4 space-y-1">
                  {aiServices.map((service, index) => (
                    <Link
                      key={index}
                      to={service.url}
                      className="block px-3 py-1 text-sm text-gray-400 hover:text-white transition-colors duration-300"
=======
                <div className="text-white font-medium mb-2">Services</div>
                <div className="pl-4 space-y-2">
                  <div className="text-purple-400 text-sm font-medium mb-2">AI Services</div>
                  {aiServices.slice(0, 3).map((service, index) => (
                    <Link
                      key={index}
                      to={service.url}
                      className="block text-gray-300 hover:text-white transition-colors text-sm"
>>>>>>> cursor/fix-errors-and-merge-to-main-ba0d
                      onClick={() => setIsOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
<<<<<<< HEAD
                </div>
              </div>
              
              <div className="px-3 py-2">
                <div className="text-gray-300 font-medium mb-2">IT Services</div>
                <div className="ml-4 space-y-1">
                  {itServices.map((service, index) => (
                    <Link
                      key={index}
                      to={service.url}
                      className="block px-3 py-1 text-sm text-gray-400 hover:text-white transition-colors duration-300"
=======
                  <div className="text-cyan-400 text-sm font-medium mb-2 mt-4">IT Services</div>
                  {itServices.slice(0, 3).map((service, index) => (
                    <Link
                      key={index}
                      to={service.url}
                      className="block text-gray-300 hover:text-white transition-colors text-sm"
>>>>>>> cursor/fix-errors-and-merge-to-main-ba0d
                      onClick={() => setIsOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
<<<<<<< HEAD
                to="/contact"
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-300"
=======
                to="/contact"
                className="block px-3 py-2 text-white hover:text-purple-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link
                to="/blog"
                className="block px-3 py-2 text-white hover:text-purple-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold text-center"
>>>>>>> cursor/fix-errors-and-merge-to-main-ba0d
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
<<<<<<< HEAD
              <Link
                to="/news"
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                News
              </Link>
              
              <div className="px-3 py-2">
                <Link
                  to="/contact"
                  className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-medium text-center hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </Link>
              </div>
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-ba0d
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;