import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  Menu, 
  X, 
  ChevronDown, 
  Brain, 
  Cloud, 
  Shield, 
  Cpu, 
  Database, 
  Globe, 
  Lock, 
  Users, 
  Settings, 
  Code, 
  Palette, 
  Search, 
  MessageSquare, 
  FileText, 
  HelpCircle,
  Phone,
  Mail,
  MapPin,
  Clock
} from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const serviceCategories = [
    {
      title: 'AI Solutions',
      icon: Brain,
      bgColor: 'bg-gradient-to-r from-purple-500 to-pink-500',
      color: 'text-white',
      services: [
        { name: 'Machine Learning', path: '/ai-ml' },
        { name: 'Natural Language Processing', path: '/ai-nlp' },
        { name: 'Computer Vision', path: '/ai-vision' },
        { name: 'Predictive Analytics', path: '/ai-analytics' },
        { name: 'AI Automation', path: '/ai-automation' },
        { name: 'AI Chatbots', path: '/ai-chatbots' }
      ]
    },
    {
      title: 'IT Services',
      icon: Settings,
      bgColor: 'bg-gradient-to-r from-cyan-500 to-blue-500',
      color: 'text-white',
      services: [
        { name: 'Cloud Infrastructure', path: '/cloud-infrastructure' },
        { name: 'Cybersecurity', path: '/cybersecurity' },
        { name: 'DevOps & CI/CD', path: '/devops' },
        { name: 'Database Management', path: '/database' },
        { name: 'Network Security', path: '/network-security' },
        { name: 'IT Consulting', path: '/it-consulting' }
      ]
    },
    {
      title: 'Development',
      icon: Code,
      bgColor: 'bg-gradient-to-r from-green-500 to-teal-500',
      color: 'text-white',
      services: [
        { name: 'Web Development', path: '/web-development' },
        { name: 'Mobile Apps', path: '/mobile-development' },
        { name: 'API Development', path: '/api-development' },
        { name: 'Custom Software', path: '/custom-development' },
        { name: 'UI/UX Design', path: '/ui-ux-design' },
        { name: 'E-commerce', path: '/ecommerce' }
      ]
    },
    {
      title: 'Consulting',
      icon: Users,
      bgColor: 'bg-gradient-to-r from-orange-500 to-red-500',
      color: 'text-white',
      services: [
        { name: 'Digital Transformation', path: '/digital-transformation' },
        { name: 'Business Intelligence', path: '/business-intelligence' },
        { name: 'Process Optimization', path: '/process-optimization' },
        { name: 'Technology Strategy', path: '/technology-strategy' },
        { name: 'Change Management', path: '/change-management' },
        { name: 'Training & Support', path: '/training' }
      ]
    }
  ];

  const mainNavItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeAllMenus = () => {
    setIsOpen(false);
    setServicesOpen(false);
  };

  const handleServicesClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setServicesOpen(!servicesOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-md border-b border-cyan-400/20' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group" onClick={closeAllMenus}>
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-400/25">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-xl cyber-text">Zion Tech Group</span>
              <span className="text-cyan-400 text-xs font-medium">AI & IT Solutions</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
              onClick={closeAllMenus}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
              onClick={closeAllMenus}
            >
              About
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={handleServicesClick}
                className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-slate-900/95 backdrop-blur-md rounded-xl shadow-2xl border border-cyan-400/20 py-6 z-50">
                  <div className="grid grid-cols-2 gap-6 px-6">
                    {serviceCategories.map((category, index) => (
                      <div key={index} className="space-y-3">
                        <div className="flex items-center space-x-2 mb-3">
                          <div className={`w-8 h-8 ${category.bgColor} rounded-lg flex items-center justify-center`}>
                            <category.icon className={`w-4 h-4 ${category.color}`} />
                          </div>
                          <h3 className="font-semibold text-white text-sm">{category.title}</h3>
                        </div>
                        <div className="space-y-2">
                          {category.services.slice(0, 6).map((service, serviceIndex) => (
                            <Link
                              key={serviceIndex}
                              to={service.path}
                              className="block px-3 py-2 text-sm text-gray-300 hover:bg-cyan-400/20 hover:text-cyan-400 rounded-lg transition-colors"
                              onClick={closeAllMenus}
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/case-studies"
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
              onClick={closeAllMenus}
            >
              Case Studies
            </Link>
            <Link
              to="/blog"
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
              onClick={closeAllMenus}
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
              onClick={closeAllMenus}
            >
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/consultation"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-cyan-500/25"
              onClick={closeAllMenus}
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white hover:text-cyan-400 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-md border-t border-cyan-400/20 py-4 z-50">
            <div className="px-4 space-y-4">
              {mainNavItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className="block text-white hover:text-cyan-400 transition-colors duration-200 font-medium py-2"
                  onClick={closeAllMenus}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Services */}
              <div className="space-y-2">
                <div className="text-cyan-400 font-medium py-2">Services</div>
                {serviceCategories.map((category, categoryIndex) => (
                  <div key={categoryIndex} className="ml-4 space-y-1">
                    <div className="text-gray-300 font-medium py-1">{category.title}</div>
                    {category.services.slice(0, 3).map((service, serviceIndex) => (
                      <Link
                        key={serviceIndex}
                        to={service.path}
                        className="block text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm py-1 ml-4"
                        onClick={closeAllMenus}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-gray-700">
                <Link
                  to="/consultation"
                  className="block bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-medium text-center hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                  onClick={closeAllMenus}
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