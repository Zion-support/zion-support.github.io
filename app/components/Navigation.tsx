import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Zap, 
  Brain, 
  Server, 
  Cloud, 
  Shield, 
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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
        { name: 'AI Accounting Assistant', path: '/ai-accounting-assistant', price: '$29/month' },
        { name: 'AI Content Moderation Pro', path: '/ai-content-moderation-pro', price: '$49/month' },
        { name: 'AI Climate Solutions Pro', path: '/ai-climate-solutions-pro', price: '$79/month' },
        { name: 'AI Agricultural Intelligence Pro', path: '/ai-agricultural-intelligence-pro', price: '$99/month' },
        { name: 'AI Business Intelligence Pro', path: '/ai-business-intelligence-pro', price: '$149/month' },
        { name: 'AI Code Assistant Pro', path: '/ai-code-assistant-pro', price: '$199/month' }
      ]
    },
    {
      title: 'AI Services',
      icon: <Brain className="w-5 h-5" />,
      path: '/ai-solutions',
      services: [
        { name: 'AI Smart Contracts', path: '/ai-smart-contracts', price: 'Custom' },
        { name: 'AI Voice Assistant', path: '/ai-voice-assistant', price: 'Custom' },
        { name: 'AI Predictive Maintenance', path: '/ai-predictive-maintenance', price: 'Custom' },
        { name: 'AI Personalized Learning', path: '/ai-personalized-learning', price: 'Custom' },
        { name: 'AI Computer Vision', path: '/ai-computer-vision', price: 'Custom' },
        { name: 'AI Content Generation Pro', path: '/ai-content-generation-pro', price: 'Custom' }
      ]
    },
    {
      title: 'IT Services',
      icon: <Server className="w-5 h-5" />,
      path: '/it-solutions',
      services: [
        { name: 'Cloud Infrastructure', path: '/cloud-infrastructure', price: 'Custom' },
        { name: 'Cybersecurity Solutions', path: '/cybersecurity', price: 'Custom' },
        { name: 'Web Development', path: '/web-development', price: 'Custom' },
        { name: 'Mobile Development', path: '/mobile-development', price: 'Custom' },
        { name: 'DevOps & Automation', path: '/devops-automation', price: 'Custom' },
        { name: 'Digital Transformation', path: '/digital-transformation', price: 'Custom' }
      ]
    },
    {
      title: '5G Solutions',
      icon: <Cloud className="w-5 h-5" />,
      path: '/5g-solutions',
      services: [
        { name: '5G Implementation', path: '/5g-implementation', price: 'Custom' },
        { name: '5G Network Infrastructure', path: '/5g-network-infrastructure', price: 'Custom' },
        { name: '5G IoT Solutions', path: '/5g-iot-solutions', price: 'Custom' },
        { name: '5G Smart City Solutions', path: '/5g-smart-city-solutions', price: 'Custom' },
        { name: '5G Edge Computing', path: '/5g-edge-computing', price: 'Custom' },
        { name: '5G Private Networks', path: '/5g-private-networks', price: 'Custom' }
      ]
    }
  ];

  const mainNavItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions</title>
        <meta name="description" content="Leading provider of AI-powered micro SAAS solutions, IT services, and innovative technology solutions. Transform your business with cutting-edge technology." />
        <meta name="keywords" content="AI solutions, micro SAAS, IT services, 5G solutions, cloud infrastructure, cybersecurity, digital transformation" />
      </Helmet>
      
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-900/95 backdrop-blur-md border-b border-cyan-500/20 shadow-2xl shadow-cyan-500/10' 
          : 'bg-transparent'
      }`}>
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-cyan-500/5 opacity-50"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/25 group-hover:shadow-cyan-500/50 transition-all duration-300 group-hover:scale-110">
                  <span className="text-white font-bold text-xl group-hover:text-cyan-200 transition-colors">Z</span>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
              </div>
              <div className="hidden sm:block">
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:to-purple-300 transition-all duration-300">
                  Zion Tech Group
                </span>
                <div className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
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
                  className={`relative px-4 py-2 rounded-lg transition-all duration-300 group ${
                    isActive(item.path)
                      ? 'text-cyan-400 bg-cyan-500/10 shadow-lg shadow-cyan-500/20'
                      : 'text-gray-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>
                  {isActive(item.path) && (
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg blur-sm"></div>
                  )}
                </Link>
              ))}

              {/* Service Dropdowns */}
              {serviceCategories.map((category) => (
                <div
                  key={category.title}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(category.title)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={category.path}
                    className="flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-slate-800/50 transition-all duration-300 group"
                  >
                    {category.icon}
                    <span>{category.title}</span>
                    <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                  </Link>

                  {/* Dropdown Menu */}
                  {activeDropdown === category.title && (
                    <div className="absolute top-full left-0 mt-2 w-80 bg-slate-900/95 backdrop-blur-md border border-cyan-500/20 rounded-xl shadow-2xl shadow-cyan-500/10 overflow-hidden">
                      <div className="p-4">
                        <h3 className="text-lg font-semibold text-cyan-400 mb-3 flex items-center">
                          {category.icon}
                          <span className="ml-2">{category.title}</span>
                        </h3>
                        <div className="grid grid-cols-1 gap-2">
                          {category.services.map((service, index) => (
                            <Link
                              key={index}
                              to={service.path}
                              className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-800/50 transition-all duration-200 group"
                            >
                              <div>
                                <div className="text-white group-hover:text-cyan-300 transition-colors">
                                  {service.name}
                                </div>
                                <div className="text-xs text-gray-400 group-hover:text-gray-300">
                                  {service.price}
                                </div>
                              </div>
                              <div className="w-2 h-2 bg-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </Link>
                          ))}
                        </div>
                        <div className="mt-4 pt-4 border-t border-slate-700">
                          <Link
                            to={category.path}
                            className="block w-full text-center py-2 px-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                          >
                            View All {category.title}
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* Contact Button */}
              <div className="flex items-center space-x-4">
                <a
                  href="tel:+13024640950"
                  className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg shadow-green-500/25 hover:shadow-green-500/50"
                >
                  <Phone className="w-4 h-4" />
                  <span className="hidden sm:inline">Call Now</span>
                </a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-slate-800/50 transition-all duration-300"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-md border-t border-cyan-500/20 shadow-2xl">
              <div className="px-4 py-6 space-y-4">
                {mainNavItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-lg transition-all duration-300 ${
                      isActive(item.path)
                        ? 'text-cyan-400 bg-cyan-500/10'
                        : 'text-gray-300 hover:text-white hover:bg-slate-800/50'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}

                {/* Mobile Service Categories */}
                {serviceCategories.map((category) => (
                  <div key={category.title} className="space-y-2">
                    <Link
                      to={category.path}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center space-x-2 px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-slate-800/50 transition-all duration-300"
                    >
                      {category.icon}
                      <span>{category.title}</span>
                    </Link>
                    <div className="ml-6 space-y-1">
                      {category.services.slice(0, 3).map((service, index) => (
                        <Link
                          key={index}
                          to={service.path}
                          onClick={() => setIsOpen(false)}
                          className="block px-4 py-2 text-sm text-gray-400 hover:text-cyan-300 transition-colors"
                        >
                          {service.name} - {service.price}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}

                {/* Mobile Contact Info */}
                <div className="pt-4 border-t border-slate-700">
                  <div className="space-y-3">
                    <a
                      href="tel:+13024640950"
                      className="flex items-center space-x-3 px-4 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300"
                    >
                      <Phone className="w-5 h-5" />
                      <span>+1 302 464 0950</span>
                    </a>
                    <a
                      href="mailto:kleber@ziontechgroup.com"
                      className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-white transition-colors"
                    >
                      <Mail className="w-5 h-5" />
                      <span>kleber@ziontechgroup.com</span>
                    </a>
                    <div className="flex items-start space-x-3 px-4 py-3 text-gray-300">
                      <MapPin className="w-5 h-5 mt-1" />
                      <div className="text-sm">
                        <div>364 E Main St STE 1008</div>
                        <div>Middletown DE 19709</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navigation;