import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
<<<<<<< HEAD
import { ChevronDown, Phone, Mail, MapPin, Menu, X } from 'lucide-react';
const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
<<<<<<< HEAD
=======
=======
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap } from 'lucide-react';
=======
import { ChevronDown, Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
>>>>>>> cursor/fix-errors-and-merge-to-main-ea96

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aiServicesOpen, setAiServicesOpen] = useState(false);
  const [itServicesOpen, setItServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeAllMenus = () => {
    setServicesOpen(false);
    setAiServicesOpen(false);
    setItServicesOpen(false);
    setIsOpen(false);
  };

  const serviceCategories = [
    {
      title: 'AI Services',
      icon: Brain,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      services: [
        { name: 'AI Services', path: '/ai-services' },
        { name: 'AI Marketing', path: '/ai-marketing' },
        { name: 'AI Automation', path: '/ai-automation' },
        { name: 'AI Healthcare', path: '/ai-healthcare' },
        { name: 'AI Fintech', path: '/ai-fintech' },
        { name: 'AI Content Generation', path: '/ai-content' },
        { name: 'AI Analytics', path: '/ai-analytics' }
      ]
    },
    {
      title: 'IT Services',
      icon: Cloud,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      services: [
        { name: 'IT Services', path: '/it-services' },
        { name: 'Cloud Services', path: '/cloud-services' },
        { name: 'Cybersecurity', path: '/cybersecurity' },
        { name: 'DevOps', path: '/devops' },
        { name: 'Database Services', path: '/database' },
        { name: 'Network Services', path: '/networking' }
      ]
    },
    {
      title: 'Micro SAAS',
      icon: Code,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      services: [
        { name: 'Micro SAAS', path: '/micro-saas' },
        { name: 'Developer Tools', path: '/developer-tools' },
        { name: 'Business Apps', path: '/business-apps' },
        { name: 'Productivity Tools', path: '/productivity' },
        { name: 'Marketing Tools', path: '/marketing-tools' }
      ]
    },
    {
      title: 'Specialized',
      icon: Zap,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      services: [
        { name: 'Quantum Computing', path: '/quantum-computing' },
        { name: 'Autonomous Systems', path: '/autonomous-systems' },
        { name: 'Blockchain & Web3', path: '/blockchain-web3' },
        { name: 'IoT & Edge Computing', path: '/iot-edge-computing' },
        { name: 'Business Intelligence', path: '/business-intelligence' }
      ]
    }
  ];
<<<<<<< HEAD
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-1ed2
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-ea96

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-errors-and-merge-to-main-deb0
          <Link to="/" className="text-2xl font-bold text-blue-600 flex items-center">
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-ea96
          <Link to="/" className="text-2xl font-bold text-cyan-400 neon-text flex items-center">
            <span className="text-3xl mr-2">⚡</span>
            Zion Tech Group
=======
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-2xl font-bold"
            onClick={closeAllMenus}
          >
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className={`transition-colors ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              Zion Tech Group
            </span>
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-1ed2
          </Link>
          {/* Desktop Menu */}
<<<<<<< HEAD
<<<<<<< HEAD
          <div className="hidden lg:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Home
            </Link>
<<<<<<< HEAD
            <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">              About
            </Link>
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-ea96
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">
              Home
=======
            <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              About
>>>>>>> cursor/fix-errors-and-merge-to-main-deb0
            </Link>
=======
          <div className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`font-medium transition-colors hover:text-purple-600 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
              onClick={closeAllMenus}
            >
              Home
            </Link>
            
            <Link 
              to="/about" 
              className={`font-medium transition-colors hover:text-purple-600 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
              onClick={closeAllMenus}
            >
              About
            </Link>

>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-1ed2
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
<<<<<<< HEAD
<<<<<<< HEAD
                className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center font-medium"              >
=======
                className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center font-medium"
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
>>>>>>> cursor/fix-errors-and-merge-to-main-ea96
                Services
                <ChevronDown className="w-4 h-4 ml-1" />
=======
                className={`flex items-center space-x-1 font-medium transition-colors hover:text-purple-600 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-1ed2
              </button>
              
              {servicesOpen && (
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-ea96
                <div className="absolute top-full left-0 mt-2 w-96 bg-white rounded-lg shadow-xl border py-4 z-50">
                  <div className="grid grid-cols-2 gap-4 px-4">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Core Services</h3>
                      {services.slice(0, 8).map((service, index) => (
                        <Link
                          key={index}
                          to={service.url}
                          className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors"
                          onClick={() => setServicesOpen(false)}
                        >
<<<<<<< HEAD
                          {service.name}                        </Link>
=======
                          {service.name}
                        </Link>
>>>>>>> cursor/fix-errors-and-merge-to-main-ea96
                      ))}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Additional Services</h3>
                      {services.slice(8).map((service, index) => (
                        <Link
                          key={index}
                          to={service.url}
                          className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors"
                          onClick={() => setServicesOpen(false)}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
<<<<<<< HEAD
=======
                <div className="absolute top-full left-0 mt-2 w-96 bg-white rounded-xl shadow-2xl border border-gray-200 py-6 z-50">
                  <div className="grid grid-cols-2 gap-6 px-6">
                    {serviceCategories.map((category, index) => (
                      <div key={index} className="space-y-3">
                        <div className="flex items-center space-x-2 mb-3">
                          <div className={`w-8 h-8 ${category.bgColor} rounded-lg flex items-center justify-center`}>
                            <category.icon className={`w-4 h-4 ${category.color}`} />
                          </div>
                          <h3 className="font-semibold text-gray-900 text-sm">{category.title}</h3>
                        </div>
                        <div className="space-y-2">
                          {category.services.map((service, serviceIndex) => (
                            <Link
                              key={serviceIndex}
                              to={service.path}
                              className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-purple-600 rounded-lg transition-colors"
                              onClick={closeAllMenus}
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-gray-200 mt-6 pt-4 px-6">
                    <Link
                      to="/services"
                      className="block w-full text-center bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all"
                      onClick={closeAllMenus}
                    >
                      View All Services
                    </Link>
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-1ed2
                  </div>
<<<<<<< HEAD
=======
                </div>
              )}
            </div>

<<<<<<< HEAD
            <Link to="/case-studies" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Case Studies
=======
            <Link 
              to="/case-studies" 
              className={`font-medium transition-colors hover:text-purple-600 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
              onClick={closeAllMenus}
            >
              Case Studies
            </Link>
            
            <Link 
              to="/enterprise" 
              className={`font-medium transition-colors hover:text-purple-600 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
              onClick={closeAllMenus}
            >
              Enterprise
            </Link>
            
            <Link 
              to="/team" 
              className={`font-medium transition-colors hover:text-purple-600 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
              onClick={closeAllMenus}
            >
              Team
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-1ed2
            </Link>
            <Link to="/enterprise" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Enterprise
            </Link>
            <Link to="/team" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Team
            </Link>
            <Link to="/contact" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Contact
            </Link>
          </div>

<<<<<<< HEAD
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-700 hover:text-blue-600"
            aria-expanded={isOpen}
            aria-label="Toggle mobile menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Home
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                About
              </Link>
              
>>>>>>> cursor/fix-errors-and-merge-to-main-deb0
              {/* Services Section */}
              <div className="space-y-2">
                <div className="text-gray-700 font-semibold text-lg">Services</div>
                <div className="ml-4 space-y-2">
                  <Link to="/services" className="block text-gray-600 hover:text-blue-600 transition-colors">
                    All Services
                  </Link>
                  <Link to="/micro-saas" className="block text-gray-600 hover:text-blue-600 transition-colors">
                    Micro SAAS Solutions
                  </Link>
                  <Link to="/ai-services" className="block text-gray-600 hover:text-blue-600 transition-colors">
                    AI Services
                  </Link>
                  <Link to="/it-services" className="block text-gray-600 hover:text-blue-600 transition-colors">
                    IT Services
                  </Link>
                  <Link to="/quantum-computing" className="block text-gray-600 hover:text-blue-600 transition-colors">
                    Quantum Computing
                  </Link>
                  <Link to="/autonomous-systems" className="block text-gray-600 hover:text-blue-600 transition-colors">
                    Autonomous Systems
                  </Link>
                  <Link to="/blockchain-web3" className="block text-gray-600 hover:text-blue-600 transition-colors">
                    Blockchain & Web3
                  </Link>
                  <Link to="/cybersecurity" className="block text-gray-600 hover:text-blue-600 transition-colors">
                    Cybersecurity
                  </Link>
<<<<<<< HEAD
                </div>              </div>
=======
                </div>
              </div>
              
>>>>>>> cursor/fix-errors-and-merge-to-main-deb0
              <Link to="/case-studies" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Case Studies
              </Link>
              <Link to="/enterprise" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Enterprise
              </Link>
              <Link to="/team" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Team
              </Link>
              <Link to="/contact" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-center">
                Contact Us
              </Link>
            </div>
          </div>
<<<<<<< HEAD
=======
                  </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-ea96
                </div>
              )}
            </div>
            {/* Technologies Dropdown */}
            <div className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center font-medium"
              >
                Technologies
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border py-4 z-50">
                  <div className="px-4">
                    {technologies.map((tech, index) => (
                      <Link
                        key={index}
                        to={tech.url}
                        className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors"
                        onClick={() => setServicesOpen(false)}
                      >
                        {tech.name}
                      </Link>
<<<<<<< HEAD
                    ))}                  </div>
=======
                    ))}
                  </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-ea96
                </div>
              )}
            </div>
            <Link to="/case-studies" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">
              Case Studies
            </Link>
            <Link to="/enterprise" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">
              Enterprise
            </Link>
            <Link to="/team" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">
              Team
            </Link>
            <Link to="/contact" className="bg-cyan-600 text-white px-6 py-2 rounded-lg hover:bg-cyan-700 transition-colors font-medium">
              Contact
            </Link>
          </div>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-300 hover:text-cyan-400 transition-colors"
            aria-expanded={isOpen}
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
<<<<<<< HEAD
        )}
      </div>
=======

>>>>>>> cursor/fix-errors-and-merge-to-main-ea96
        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-gray-700">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-gray-300 hover:text-cyan-400 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              {/* Services Section */}
              <div className="space-y-2">
                <div className="text-gray-300 font-semibold text-lg">Services</div>
                <div className="ml-4 space-y-2">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      to={service.url}
                      className="block text-gray-400 hover:text-cyan-400 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
              {/* Technologies Section */}
              <div className="space-y-2">
                <div className="text-gray-300 font-semibold text-lg">Technologies</div>
                <div className="ml-4 space-y-2">
                  {technologies.map((tech, index) => (
                    <Link
                      key={index}
                      to={tech.url}
                      className="block text-gray-400 hover:text-cyan-400 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {tech.name}
                    </Link>
                  ))}
                </div>
              </div>
              {/* Company Section */}
              <div className="space-y-2">
                <div className="text-gray-300 font-semibold text-lg">Company</div>
                <div className="ml-4 space-y-2">
                  {company.map((item, index) => (
                    <Link
                      key={index}
                      to={item.url}
                      className="block text-gray-400 hover:text-cyan-400 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              {/* Resources Section */}
              <div className="space-y-2">
                <div className="text-gray-300 font-semibold text-lg">Resources</div>
                <div className="ml-4 space-y-2">
                  {resources.map((resource, index) => (
                    <Link
                      key={index}
                      to={resource.url}
                      className="block text-gray-400 hover:text-cyan-400 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {resource.name}
                    </Link>
                  ))}
                </div>
              </div>
              <Link
                to="/contact"
                className="bg-cyan-600 text-white px-6 py-2 rounded-lg hover:bg-cyan-700 transition-colors font-medium text-center mt-4"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-deb0
        )}
      </div>
    </nav>
<<<<<<< HEAD
  );
};
=======
            {/* Contact Button */}
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl"
              onClick={closeAllMenus}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled 
                ? 'text-gray-700 hover:bg-gray-100' 
                : 'text-white hover:bg-white/10'
            }`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden border-t border-gray-200 py-6 bg-white">
            <div className="space-y-6">
              <Link 
                to="/" 
                className="block text-lg font-medium text-gray-900 hover:text-purple-600 transition-colors"
                onClick={closeAllMenus}
              >
                Home
              </Link>
              
              <Link 
                to="/about" 
                className="block text-lg font-medium text-gray-900 hover:text-purple-600 transition-colors"
                onClick={closeAllMenus}
              >
                About
              </Link>

              {/* Mobile Services Section */}
              <div className="space-y-4">
                <div className="text-lg font-semibold text-gray-900">Services</div>
                <div className="grid grid-cols-1 gap-4 pl-4">
                  {serviceCategories.map((category, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <div className={`w-6 h-6 ${category.bgColor} rounded-lg flex items-center justify-center`}>
                          <category.icon className={`w-3 h-3 ${category.color}`} />
                        </div>
                        <h3 className="font-medium text-gray-700 text-sm">{category.title}</h3>
                      </div>
                      <div className="space-y-1 pl-8">
                        {category.services.map((service, serviceIndex) => (
                          <Link
                            key={serviceIndex}
                            to={service.path}
                            className="block text-sm text-gray-600 hover:text-purple-600 transition-colors"
                            onClick={closeAllMenus}
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <Link
                  to="/services"
                  className="block w-full text-center bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all mt-4"
                  onClick={closeAllMenus}
                >
                  View All Services
                </Link>
              </div>

              <Link 
                to="/case-studies" 
                className="block text-lg font-medium text-gray-900 hover:text-purple-600 transition-colors"
                onClick={closeAllMenus}
              >
                Case Studies
              </Link>
              
              <Link 
                to="/enterprise" 
                className="block text-lg font-medium text-gray-900 hover:text-purple-600 transition-colors"
                onClick={closeAllMenus}
              >
                Enterprise
              </Link>
              
              <Link 
                to="/team" 
                className="block text-lg font-medium text-gray-900 hover:text-purple-600 transition-colors"
                onClick={closeAllMenus}
              >
                Team
              </Link>

              <Link 
                to="/contact" 
                className="block w-full text-center bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all"
                onClick={closeAllMenus}
              >
                Contact Us
              </Link>

              {/* Contact Info */}
              <div className="border-t border-gray-200 pt-6 space-y-3">
                <div className="flex items-center space-x-3 text-sm text-gray-600">
                  <Phone className="w-4 h-4" />
                  <a href="tel:+13024640950" className="hover:text-purple-600 transition-colors">
                    +1 302 464 0950
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-600">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:text-purple-600 transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span>364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Overlay for mobile menu */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={closeAllMenus}
        />
      )}
    </nav>
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-ea96
  );
};

>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-1ed2
export default Navigation;