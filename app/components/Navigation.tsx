import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Zap,
  Brain,
  Cpu,
  Cloud,
  Shield,
  Smartphone,
  BarChart3,
  Users,
  Phone,
  Mail
} from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const mainNavItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' }
  ];

  const serviceCategories = [
    {
      title: 'AI Solutions',
      icon: Brain,
      items: [
        { name: 'AI Services', path: '/ai-services' },
        { name: 'AI Solutions', path: '/ai-solutions' },
        { name: 'Machine Learning', path: '/machine-learning' },
        { name: 'Computer Vision', path: '/computer-vision' },
        { name: 'NLP Solutions', path: '/nlp' }
      ]
    },
    {
      title: 'Micro SAAS',
      icon: Cpu,
      items: [
        { name: 'Micro SAAS Solutions', path: '/micro-saas-solutions' },
        { name: 'AI Project Manager', path: '/micro-saas/ai-project-manager' },
        { name: 'AI Content Writer', path: '/micro-saas/ai-content-writer' },
        { name: 'AI Analytics Dashboard', path: '/micro-saas/analytics-dashboard' },
        { name: 'AI Email Marketing', path: '/micro-saas/ai-email-marketing' }
      ]
    },
    {
      title: 'IT Services',
      icon: Cloud,
      items: [
        { name: 'IT Services', path: '/it-services' },
        { name: 'IT Solutions', path: '/it-solutions' },
        { name: 'Cloud Infrastructure', path: '/cloud-infrastructure' },
        { name: 'Cybersecurity', path: '/cybersecurity' },
        { name: 'Network Solutions', path: '/network-solutions' }
      ]
    },
    {
      title: 'Development',
      icon: Smartphone,
      items: [
        { name: 'Mobile Development', path: '/mobile-development' },
        { name: 'Web Development', path: '/software-development' },
        { name: 'Custom Development', path: '/custom-development' },
        { name: 'API Development', path: '/api-development' }
      ]
    },
    {
      title: 'Analytics',
      icon: BarChart3,
      items: [
        { name: 'Data Analytics', path: '/data-analytics' },
        { name: 'Business Intelligence', path: '/business-intelligence' },
        { name: 'Performance Monitoring', path: '/performance-monitoring' },
        { name: 'Predictive Analytics', path: '/predictive-analytics' }
      ]
    }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <Helmet>
        <title>Navigation - Zion Tech Group</title>
        <meta name="description" content="Navigate through Zion Tech Group's comprehensive AI and IT solutions" />
      </Helmet>
      
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50' 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group" onClick={closeMenu}>
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/25 group-hover:shadow-cyan-500/50 transition-all duration-300 group-hover:scale-110">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
                Zion Tech Group
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {mainNavItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative font-medium transition-colors duration-300 ${
                    isActive(item.path)
                      ? 'text-cyan-400'
                      : 'text-white hover:text-cyan-300'
                  }`}
                >
                  {item.name}
                  {isActive(item.path) && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400"></div>
                  )}
                </Link>
              ))}
              
              {/* Services Dropdown */}
              <div className="relative group">
                <button
                  className="flex items-center space-x-1 font-medium text-white hover:text-cyan-300 transition-colors duration-300"
                  onMouseEnter={() => setActiveDropdown('services')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <span>Services</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {activeDropdown === 'services' && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-screen max-w-6xl bg-slate-800/95 backdrop-blur-md border border-slate-700/50 rounded-xl shadow-2xl p-6"
                    onMouseEnter={() => setActiveDropdown('services')}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                      {serviceCategories.map((category, index) => (
                        <div key={index} className="space-y-3">
                          <div className="flex items-center space-x-2 text-cyan-400 font-semibold">
                            <category.icon className="w-5 h-5" />
                            <span>{category.title}</span>
                          </div>
                          <ul className="space-y-2">
                            {category.items.map((item, itemIndex) => (
                              <li key={itemIndex}>
                                <Link
                                  to={item.path}
                                  className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm py-1"
                                  onClick={closeMenu}
                                >
                                  {item.name}
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

              {/* CTA Button */}
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden text-white hover:text-cyan-300 transition-colors duration-300"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50">
              <div className="container mx-auto px-4 py-6">
                <div className="space-y-4">
                  {mainNavItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className={`block font-medium transition-colors duration-300 ${
                        isActive(item.path)
                          ? 'text-cyan-400'
                          : 'text-white hover:text-cyan-300'
                      }`}
                      onClick={closeMenu}
                    >
                      {item.name}
                    </Link>
                  ))}
                  
                  {/* Mobile Services */}
                  <div className="pt-4 border-t border-slate-700">
                    <div className="text-cyan-400 font-semibold mb-3">Services</div>
                    <div className="space-y-3">
                      {serviceCategories.map((category, index) => (
                        <div key={index}>
                          <div className="flex items-center space-x-2 text-white font-medium mb-2">
                            <category.icon className="w-4 h-4" />
                            <span>{category.title}</span>
                          </div>
                          <div className="ml-6 space-y-2">
                            {category.items.slice(0, 3).map((item, itemIndex) => (
                              <Link
                                key={itemIndex}
                                to={item.path}
                                className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                                onClick={closeMenu}
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Mobile CTA */}
                  <div className="pt-4 border-t border-slate-700">
                    <Link
                      to="/contact"
                      className="block bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 text-center"
                      onClick={closeMenu}
                    >
                      Get Started
                    </Link>
                  </div>

                  {/* Contact Info */}
                  <div className="pt-4 border-t border-slate-700">
                    <div className="flex items-center space-x-3 text-gray-300 mb-2">
                      <Phone className="w-4 h-4" />
                      <a href="tel:+13024640950" className="hover:text-cyan-300 transition-colors">
                        +1 302 464 0950
                      </a>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-300">
                      <Mail className="w-4 h-4" />
                      <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-300 transition-colors">
                        kleber@ziontechgroup.com
                      </a>
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