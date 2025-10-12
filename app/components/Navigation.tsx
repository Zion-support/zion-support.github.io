import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { Menu, X, ChevronDown, Zap, Cloud, Globe, Code, Smartphone, Brain, Wifi } from 'lucide-react';
=======
import { ChevronDown, Menu, X, ArrowRight, MessageSquare, ShoppingCart } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-1443

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
    { name: 'AI Analytics & BI', url: '/ai-analytics', icon: <Brain className="w-4 h-4" /> },
    { name: 'AI Automation', url: '/ai-automation', icon: <Zap className="w-4 h-4" /> },
    { name: 'AI Chatbots', url: '/ai-chatbot-builder', icon: <Smartphone className="w-4 h-4" /> },
    { name: 'AI Content Generation', url: '/ai-content-generation', icon: <Code className="w-4 h-4" /> },
    { name: 'AI Cybersecurity', url: '/ai-cybersecurity', icon: <Globe className="w-4 h-4" /> },
    { name: 'AI Data Analytics', url: '/ai-data-analytics', icon: <Brain className="w-4 h-4" /> }
  ];

  const itServices = [
    { name: 'Cloud Migration', url: '/cloud-migration', icon: <Cloud className="w-4 h-4" /> },
    { name: 'Cybersecurity', url: '/cybersecurity', icon: <Globe className="w-4 h-4" /> },
    { name: 'Web Development', url: '/web-development', icon: <Code className="w-4 h-4" /> },
    { name: 'Mobile Development', url: '/mobile-development', icon: <Smartphone className="w-4 h-4" /> },
    { name: 'DevOps', url: '/devops', icon: <Wifi className="w-4 h-4" /> },
    { name: 'Database Management', url: '/database-management', icon: <Brain className="w-4 h-4" /> }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-cyan-400 transition-colors">
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={toggleServices}
                className="flex items-center text-white hover:text-cyan-400 transition-colors"
              >
                Services
                <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-gray-900 rounded-lg shadow-xl border border-gray-700 p-6">
                  <div className="grid grid-cols-2 gap-6">
                    {/* AI Services */}
                    <div>
                      <h3 className="text-sm font-semibold text-cyan-400 mb-3 flex items-center">
                        <Zap className="w-4 h-4 mr-2" />
                        AI Services
                      </h3>
                      <ul className="space-y-2">
                        {aiServices.map((service, index) => (
                          <li key={index}>
                            <Link
                              to={service.url}
                              className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                              onClick={() => setServicesOpen(false)}
                            >
                              {service.icon}
                              <span className="ml-2">{service.name}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* IT Services */}
                    <div>
                      <h3 className="text-sm font-semibold text-blue-400 mb-3 flex items-center">
                        <Cloud className="w-4 h-4 mr-2" />
                        IT Services
                      </h3>
                      <ul className="space-y-2">
                        {itServices.map((service, index) => (
                          <li key={index}>
                            <Link
                              to={service.url}
                              className="flex items-center text-gray-300 hover:text-blue-400 transition-colors text-sm"
                              onClick={() => setServicesOpen(false)}
                            >
                              {service.icon}
                              <span className="ml-2">{service.name}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link to="/about" className="text-white hover:text-cyan-400 transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-white hover:text-cyan-400 transition-colors">
              Contact
            </Link>
            
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-cyan-400 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900 rounded-lg mt-2">
              <Link
                to="/"
                className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              
              {/* Mobile Services */}
              <div className="px-3 py-2">
                <div className="text-white font-medium mb-2">AI Services</div>
                <div className="ml-4 space-y-1">
                  {aiServices.slice(0, 4).map((service, index) => (
                    <Link
                      key={index}
                      to={service.url}
                      className="block text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                      onClick={() => setIsOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
              
              <div className="px-3 py-2">
                <div className="text-white font-medium mb-2">IT Services</div>
                <div className="ml-4 space-y-1">
                  {itServices.slice(0, 4).map((service, index) => (
                    <Link
                      key={index}
                      to={service.url}
                      className="block text-gray-300 hover:text-blue-400 transition-colors text-sm"
                      onClick={() => setIsOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
              
              <Link
                to="/about"
                className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              
              <Link
                to="/contact"
                className="block mx-3 mt-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold text-center hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;