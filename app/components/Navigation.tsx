import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Phone, 
  Mail, 
  MapPin,
  Zap,
  Brain,
  Server,
  Cloud,
  Shield,
  Code,
  Database,
  Globe,
  Smartphone,
  BarChart3,
  Users,
  Settings,
  ArrowRight
} from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const serviceCategories = [
    {
      title: 'Micro SAAS Solutions',
      icon: <Zap className="w-5 h-5" />,
      path: '/micro-saas-solutions',
      services: [
        { name: 'AI Accounting Assistant', path: '/ai-accounting-assistant', price: '$29/mo' },
        { name: 'AI Content Moderation Pro', path: '/ai-content-moderation-pro', price: '$49/mo' },
        { name: 'AI Climate Solutions Pro', path: '/ai-climate-solutions-pro', price: '$79/mo' },
        { name: 'AI Agricultural Intelligence', path: '/ai-agricultural-intelligence-pro', price: '$99/mo' },
        { name: 'AI Business Intelligence Pro', path: '/ai-business-intelligence-pro', price: '$149/mo' },
        { name: 'AI Code Assistant Pro', path: '/ai-code-assistant-pro', price: '$199/mo' }
      ]
    },
    {
      title: 'AI Services',
      icon: <Brain className="w-5 h-5" />,
      path: '/ai-solutions',
      services: [
        { name: 'AI Chatbot Enterprise', path: '/ai-chatbot-enterprise', price: '$299/mo' },
        { name: 'AI Computer Vision', path: '/ai-computer-vision', price: '$399/mo' },
        { name: 'AI Content Generation Pro', path: '/ai-content-generation-pro', price: '$199/mo' },
        { name: 'AI Analytics Dashboard Pro', path: '/ai-analytics-dashboard-pro', price: '$349/mo' },
        { name: 'AI Automation Platform', path: '/ai-automation-platform', price: '$499/mo' },
        { name: 'AI Blockchain Solutions', path: '/ai-blockchain-solutions', price: '$599/mo' }
      ]
    },
    {
      title: 'IT Services',
      icon: <Server className="w-5 h-5" />,
      path: '/it-solutions',
      services: [
        { name: 'Cloud Infrastructure', path: '/cloud-infrastructure', price: 'Custom' },
        { name: 'Cybersecurity Solutions', path: '/cybersecurity-solutions', price: 'Custom' },
        { name: 'Web Development', path: '/web-development', price: 'From $5K' },
        { name: 'Mobile App Development', path: '/mobile-development', price: 'From $10K' },
        { name: 'API Development', path: '/api-development', price: 'From $3K' },
        { name: 'Database Management', path: '/database-management', price: 'From $2K' }
      ]
    },
    {
      title: '5G Solutions',
      icon: <Globe className="w-5 h-5" />,
      path: '/5g-solutions',
      services: [
        { name: '5G Implementation', path: '/5g-implementation', price: 'Custom' },
        { name: '5G IoT Solutions', path: '/5g-iot-solutions', price: 'Custom' },
        { name: '5G Smart City Solutions', path: '/5g-smart-city-solutions', price: 'Custom' },
        { name: '5G Edge Computing', path: '/5g-edge-computing', price: 'Custom' },
        { name: '5G Private Networks', path: '/5g-private-networks', price: 'Custom' },
        { name: '5G Network Optimization', path: '/5g-network-optimization', price: 'Custom' }
      ]
    }
  ];

  const mainNavItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      {/* Top Bar */}
      <div className="bg-slate-800 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-cyan-400" />
                <a href="tel:+13024640950" className="hover:text-cyan-300 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-cyan-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-300 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <span className="text-gray-300">Visit us at:</span>
              <a href="https://ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium">
                ziontechgroup.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/25 group-hover:shadow-cyan-500/50 transition-all duration-300 group-hover:scale-110">
                <span className="text-white font-bold text-xl group-hover:text-cyan-200 transition-colors">Z</span>
              </div>
              <div className="hidden sm:block">
                <span className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
                  Zion Tech Group
                </span>
                <div className="text-xs text-gray-300 group-hover:text-gray-200 transition-colors">
                  AI & IT Solutions
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {mainNavItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-white hover:text-cyan-300 transition-colors duration-300 font-medium ${
                    isActive(item.path) ? 'text-cyan-300 border-b-2 border-cyan-300 pb-1' : ''
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Services Dropdown */}
              <div className="relative group">
                <button className="flex items-center space-x-1 text-white hover:text-cyan-300 transition-colors duration-300 font-medium">
                  <span>Services</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-96 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="grid grid-cols-2 gap-6 p-6">
                    {serviceCategories.map((category, index) => (
                      <div key={index}>
                        <Link
                          to={category.path}
                          className="flex items-center space-x-2 text-gray-800 hover:text-cyan-600 transition-colors font-semibold mb-3"
                        >
                          {category.icon}
                          <span>{category.title}</span>
                        </Link>
                        <div className="space-y-2">
                          {category.services.slice(0, 3).map((service, serviceIndex) => (
                            <Link
                              key={serviceIndex}
                              to={service.path}
                              className="block text-sm text-gray-600 hover:text-cyan-600 transition-colors"
                            >
                              {service.name}
                            </Link>
                          ))}
                          <Link
                            to={category.path}
                            className="flex items-center text-sm text-cyan-600 hover:text-cyan-700 transition-colors font-medium"
                          >
                            View All <ArrowRight className="w-3 h-3 ml-1" />
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg shadow-cyan-500/25"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-white hover:text-cyan-300 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-white/20">
            <div className="container mx-auto px-4 py-4">
              <div className="space-y-4">
                {mainNavItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block text-white hover:text-cyan-300 transition-colors duration-300 font-medium py-2 ${
                      isActive(item.path) ? 'text-cyan-300' : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                
                {/* Mobile Services */}
                <div className="pt-4 border-t border-white/20">
                  <h3 className="text-white font-semibold mb-3">Our Services</h3>
                  <div className="space-y-3">
                    {serviceCategories.map((category, index) => (
                      <div key={index}>
                        <Link
                          to={category.path}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center space-x-2 text-cyan-300 hover:text-cyan-200 transition-colors font-medium mb-2"
                        >
                          {category.icon}
                          <span>{category.title}</span>
                        </Link>
                        <div className="ml-7 space-y-1">
                          {category.services.slice(0, 2).map((service, serviceIndex) => (
                            <Link
                              key={serviceIndex}
                              to={service.path}
                              onClick={() => setIsOpen(false)}
                              className="block text-sm text-gray-300 hover:text-white transition-colors"
                            >
                              {service.name} - {service.price}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/20">
                  <Link
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className="block w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 text-center"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;