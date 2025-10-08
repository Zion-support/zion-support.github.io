import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Mail, MapPin } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const services = [
    {
      title: 'AI Services',
      href: '/ai-services',
      description: 'Advanced AI solutions and machine learning services'
    },
    {
      title: 'IT Services',
      href: '/it-services',
      description: 'Comprehensive IT infrastructure and support'
    },
    {
      title: 'Micro SAAS',
      href: '/micro-saas',
      description: 'Innovative micro software-as-a-service solutions'
    }
  ];

  const solutions = [
    {
      title: 'Enterprise Solutions',
      href: '/enterprise',
      description: 'Large-scale business transformation'
    },
    {
      title: 'Case Studies',
      href: '/case-studies',
      description: 'Success stories and implementations'
    },
    {
      title: 'Guides',
      href: '/guides',
      description: 'Technical guides and best practices'
    }
  ];

  const company = [
    {
      title: 'About Us',
      href: '/about',
      description: 'Learn about our mission and team'
    },
    {
      title: 'Team',
      href: '/team',
      description: 'Meet our expert professionals'
    },
    {
      title: 'Contact',
      href: '/contact',
      description: 'Get in touch with our team'
    }
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-indigo-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
            <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-6">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <a href="tel:+13024640950" className="hover:text-indigo-200 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-indigo-200 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
            <div className="flex items-center space-x-4 mt-2 sm:mt-0">
              <a href="https://linkedin.com/company/ziontechgroup" className="hover:text-indigo-200 transition-colors">
                LinkedIn
              </a>
              <a href="https://twitter.com/ziontechgroup" className="hover:text-indigo-200 transition-colors">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white shadow-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center">
                <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-xl">Z</span>
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-xl font-bold text-gray-900">Zion Tech Group</h1>
                  <p className="text-sm text-gray-600">AI & IT Solutions</p>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              <Link
                to="/"
                className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Home
              </Link>

              {/* Services Dropdown */}
              <div className="relative group">
                <button
                  className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
                  onMouseEnter={() => setActiveDropdown('services')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  Services
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                {activeDropdown === 'services' && (
                  <div className="absolute left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 py-4 z-50">
                    <div className="px-4 py-2">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Our Services</h3>
                      <div className="space-y-3">
                        {services.map((service, index) => (
                          <Link
                            key={index}
                            to={service.href}
                            className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <div className="font-medium text-gray-900">{service.title}</div>
                            <div className="text-sm text-gray-600">{service.description}</div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Solutions Dropdown */}
              <div className="relative group">
                <button
                  className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
                  onMouseEnter={() => setActiveDropdown('solutions')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  Solutions
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                {activeDropdown === 'solutions' && (
                  <div className="absolute left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 py-4 z-50">
                    <div className="px-4 py-2">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Our Solutions</h3>
                      <div className="space-y-3">
                        {solutions.map((solution, index) => (
                          <Link
                            key={index}
                            to={solution.href}
                            className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <div className="font-medium text-gray-900">{solution.title}</div>
                            <div className="text-sm text-gray-600">{solution.description}</div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Company Dropdown */}
              <div className="relative group">
                <button
                  className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
                  onMouseEnter={() => setActiveDropdown('company')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  Company
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                {activeDropdown === 'company' && (
                  <div className="absolute left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 py-4 z-50">
                    <div className="px-4 py-2">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">About Zion Tech Group</h3>
                      <div className="space-y-3">
                        {company.map((item, index) => (
                          <Link
                            key={index}
                            to={item.href}
                            className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <div className="font-medium text-gray-900">{item.title}</div>
                            <div className="text-sm text-gray-600">{item.description}</div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link
                to="/blog"
                className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Blog
              </Link>
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href="tel:+13024640950"
                className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
              >
                Get Quote
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-700 hover:text-indigo-600 p-2 rounded-md transition-colors"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-6 space-y-4">
              <Link
                to="/"
                className="block text-gray-700 hover:text-indigo-600 py-2 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>

              <div>
                <button
                  onClick={() => toggleDropdown('mobile-services')}
                  className="flex items-center justify-between w-full text-gray-700 hover:text-indigo-600 py-2 font-medium"
                >
                  Services
                  <ChevronDown className="w-4 h-4" />
                </button>
                {activeDropdown === 'mobile-services' && (
                  <div className="ml-4 mt-2 space-y-2">
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        to={service.href}
                        className="block text-gray-600 hover:text-indigo-600 py-1"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <button
                  onClick={() => toggleDropdown('mobile-solutions')}
                  className="flex items-center justify-between w-full text-gray-700 hover:text-indigo-600 py-2 font-medium"
                >
                  Solutions
                  <ChevronDown className="w-4 h-4" />
                </button>
                {activeDropdown === 'mobile-solutions' && (
                  <div className="ml-4 mt-2 space-y-2">
                    {solutions.map((solution, index) => (
                      <Link
                        key={index}
                        to={solution.href}
                        className="block text-gray-600 hover:text-indigo-600 py-1"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {solution.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <button
                  onClick={() => toggleDropdown('mobile-company')}
                  className="flex items-center justify-between w-full text-gray-700 hover:text-indigo-600 py-2 font-medium"
                >
                  Company
                  <ChevronDown className="w-4 h-4" />
                </button>
                {activeDropdown === 'mobile-company' && (
                  <div className="ml-4 mt-2 space-y-2">
                    {company.map((item, index) => (
                      <Link
                        key={index}
                        to={item.href}
                        className="block text-gray-600 hover:text-indigo-600 py-1"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/blog"
                className="block text-gray-700 hover:text-indigo-600 py-2 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>

              <div className="pt-4 border-t border-gray-200">
                <a
                  href="tel:+13024640950"
                  className="block w-full bg-indigo-600 text-white text-center px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
                >
                  Get Quote
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
