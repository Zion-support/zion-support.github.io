import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Mail, MapPin } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      category: 'AI & Research',
      items: [
        { name: 'AI Autonomous Research Assistant', path: '/services/ai-autonomous-research-assistant', icon: <Brain className="w-4 h-4" /> },
        { name: 'AI Content Marketing Suite', path: '/services/ai-content-marketing-suite', icon: <FileText className="w-4 h-4" /> },
        { name: 'AI Supply Chain Optimization', path: '/services/ai-supply-chain-optimization', icon: <Network className="w-4 h-4" /> }
      ]
    },
    {
      category: 'Quantum & Advanced',
      items: [
        { name: 'AI Quantum Hybrid Platform', path: '/services/ai-quantum-hybrid-platform', icon: <Cpu className="w-4 h-4" /> },
        { name: 'AI Cybersecurity Platform', path: '/services/ai-cybersecurity-platform', icon: <Shield className="w-4 h-4" /> },
        { name: 'AI Healthcare Platform', path: '/services/ai-healthcare-platform', icon: <Heart className="w-4 h-4" /> }
      ]
    },
    {
      category: 'Innovation Hub',
      items: [
        { name: 'Innovative Services Showcase', path: '/innovative-services-showcase-2028', icon: <Sparkles className="w-4 h-4" /> },
        { name: 'Comprehensive Pricing 2028', path: '/comprehensive-pricing-2028', icon: <BarChart3 className="w-4 h-4" /> },
        { name: 'All Services', path: '/services', icon: <Globe className="w-4 h-4" /> }
      ]
    }
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="flex items-center space-x-6 mb-2 md:mb-0">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>364 E Main St STE 1008, Middletown, DE 19709</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">Z</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Zion Tech Group</h1>
              <p className="text-sm text-gray-600">AI & Technology Solutions</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Services Dropdown */}
            <div className="relative group">
              <button
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
                className="flex items-center space-x-2 text-white hover:text-cyan-400 transition-colors duration-200 py-2"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                    className="absolute top-full left-0 mt-2 w-96 bg-slate-900/95 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl p-4"
                  >
                    <div className="grid grid-cols-1 gap-4">
                      {services.map((category, index) => (
                        <div key={index}>
                          <h3 className="text-sm font-semibold text-cyan-400 mb-2 px-2">
                            {category.category}
                          </h3>
                          <div className="space-y-1">
                            {category.items.map((service, serviceIndex) => (
                              <Link
                                key={serviceIndex}
                                to={service.path}
                                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/5 transition-colors duration-200 group"
                                onClick={() => setIsServicesOpen(false)}
                              >
                                <div className="text-gray-400 group-hover:text-cyan-400 transition-colors duration-200">
                                  {service.icon}
                                </div>
                                <span className="text-gray-300 group-hover:text-white transition-colors duration-200">
                                  {service.name}
                                </span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link 
              to="/solutions" 
              className={`text-white hover:text-cyan-400 transition-colors duration-200 py-2 ${
                isActive('/solutions') ? 'text-cyan-400' : ''
              }`}
            >
              Solutions
            </Link>
            
            <Link 
              to="/about" 
              className={`text-white hover:text-cyan-400 transition-colors duration-200 py-2 ${
                isActive('/about') ? 'text-cyan-400' : ''
              }`}
            >
              About
            </Link>
            
            <Link 
              to="/blog" 
              className={`text-white hover:text-cyan-400 transition-colors duration-200 py-2 ${
                isActive('/blog') ? 'text-cyan-400' : ''
              }`}
            >
              Blog
            </Link>
            
            <Link 
              to="/contact" 
              className={`text-white hover:text-cyan-400 transition-colors duration-200 py-2 ${
                isActive('/contact') ? 'text-cyan-400' : ''
              }`}
            >
              Contact
            </Link>

            {/* CTA Button */}
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 border-t border-gray-200 pt-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <Link
                to="/contact"
                className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;