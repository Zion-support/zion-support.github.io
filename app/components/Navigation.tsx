import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Star, Zap, Shield, Globe } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [technologiesOpen, setTechnologiesOpen] = useState(false);

  const services = [
    { name: 'Micro SAAS Solutions', url: '/micro-saas', icon: '💻', popular: true },
    { name: 'AI Services', url: '/ai-services', icon: '🤖', popular: true },
    { name: 'IT Services', url: '/it-services', icon: '⚙️', popular: true },
    { name: 'AI Marketing', url: '/ai-marketing', icon: '📢' },
    { name: 'AI Automation', url: '/ai-automation', icon: '🔄' },
    { name: 'AI Healthcare', url: '/ai-healthcare', icon: '🏥' },
    { name: 'AI Fintech', url: '/ai-fintech', icon: '💰' },
    { name: 'Quantum Computing', url: '/quantum-computing', icon: '⚛️' },
    { name: 'Autonomous Systems', url: '/autonomous-systems', icon: '🤖' },
    { name: 'Blockchain & Web3', url: '/blockchain-web3', icon: '🔗' },
    { name: 'Cybersecurity', url: '/cybersecurity', icon: '🔒' },
    { name: 'Business Intelligence', url: '/business-intelligence', icon: '📊' },
    { name: 'IoT & Edge Computing', url: '/iot-edge', icon: '📱' },
    { name: 'Robotics', url: '/robotics', icon: '🤖' }
  ];

  const technologies = [
    { name: 'Machine Learning', url: '/ai-services#machine-learning', icon: '🧠' },
    { name: 'Natural Language Processing', url: '/ai-services#nlp', icon: '💬' },
    { name: 'Computer Vision', url: '/ai-services#computer-vision', icon: '👁️' },
    { name: 'Cloud Computing', url: '/it-services#cloud', icon: '☁️' },
    { name: 'DevOps', url: '/it-services#devops', icon: '🔄' },
    { name: 'API Development', url: '/it-services#development', icon: '🔌' },
    { name: 'Data Analytics', url: '/ai-data-analytics', icon: '📊' },
    { name: 'Mobile Development', url: '/ai-mobile-app-development', icon: '📱' }
  ];

  const company = [
    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/team' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Enterprise', url: '/enterprise' },
    { name: 'Contact', url: '/contact' }
  ];

  const resources = [
    { name: 'Blog & Insights', url: '/blog' },
    { name: 'Technical Guides', url: '/guides' },
    { name: 'Privacy Policy', url: '/privacy' },
    { name: 'Terms of Service', url: '/terms' },
    { name: 'Documentation', url: 'https://docs.ziontechgroup.com' }
  ];

  return (
    <nav className="bg-slate-900/95 backdrop-blur-md border-b border-cyan-500/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-cyan-400 neon-text flex items-center">
            <span className="text-3xl mr-2">⚡</span>
            Zion Tech Group
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center font-medium"
              >
                Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-slate-800 rounded-lg shadow-xl border border-cyan-500/20 py-4 z-50">
                  <div className="grid grid-cols-2 gap-4 px-4">
                    <div>
                      <h3 className="font-semibold text-cyan-400 mb-3 flex items-center">
                        <Star className="w-4 h-4 mr-2" />
                        Popular Services
                      </h3>
                      {services.filter(s => s.popular).map((service, index) => (
                        <Link
                          key={index}
                          to={service.url}
                          className="block px-3 py-2 text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400 rounded transition-colors"
                          onClick={() => setServicesOpen(false)}
                        >
                          <span className="mr-2">{service.icon}</span>
                          {service.name}
                        </Link>
                      ))}
                    </div>
                    <div>
                      <h3 className="font-semibold text-cyan-400 mb-3">All Services</h3>
                      {services.filter(s => !s.popular).map((service, index) => (
                        <Link
                          key={index}
                          to={service.url}
                          className="block px-3 py-2 text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400 rounded transition-colors"
                          onClick={() => setServicesOpen(false)}
                        >
                          <span className="mr-2">{service.icon}</span>
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Technologies Dropdown */}
            <div className="relative">
              <button
                onClick={() => setTechnologiesOpen(!technologiesOpen)}
                className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center font-medium"
              >
                Technologies
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {technologiesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800 rounded-lg shadow-xl border border-cyan-500/20 py-4 z-50">
                  <div className="px-4">
                    {technologies.map((tech, index) => (
                      <Link
                        key={index}
                        to={tech.url}
                        className="block px-3 py-2 text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400 rounded transition-colors"
                        onClick={() => setTechnologiesOpen(false)}
                      >
                        <span className="mr-2">{tech.icon}</span>
                        {tech.name}
                      </Link>
                    ))}
                  </div>
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
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-cyan-500/20">
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
                <div className="text-cyan-400 font-semibold text-lg flex items-center">
                  <Star className="w-4 h-4 mr-2" />
                  Services
                </div>
                <div className="ml-4 space-y-2">
                  {services.slice(0, 8).map((service, index) => (
                    <Link
                      key={index}
                      to={service.url}
                      className="block text-gray-400 hover:text-cyan-400 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="mr-2">{service.icon}</span>
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Technologies Section */}
              <div className="space-y-2">
                <div className="text-cyan-400 font-semibold text-lg flex items-center">
                  <Zap className="w-4 h-4 mr-2" />
                  Technologies
                </div>
                <div className="ml-4 space-y-2">
                  {technologies.slice(0, 6).map((tech, index) => (
                    <Link
                      key={index}
                      to={tech.url}
                      className="block text-gray-400 hover:text-cyan-400 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="mr-2">{tech.icon}</span>
                      {tech.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Company Section */}
              <div className="space-y-2">
                <div className="text-cyan-400 font-semibold text-lg flex items-center">
                  <Globe className="w-4 h-4 mr-2" />
                  Company
                </div>
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
                <div className="text-cyan-400 font-semibold text-lg flex items-center">
                  <Shield className="w-4 h-4 mr-2" />
                  Resources
                </div>
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

              {/* Contact Info */}
              <div className="pt-4 border-t border-cyan-500/20">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 mr-3 text-cyan-400" />
                    <a href="tel:+13024640950" className="text-gray-300 hover:text-cyan-400 transition-colors">
                      +1 (302) 464-0950
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 mr-3 text-cyan-400" />
                    <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-cyan-400 transition-colors">
                      kleber@ziontechgroup.com
                    </a>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 mr-3 text-cyan-400" />
                    <span className="text-gray-300">364 E Main St STE 1008, Middletown DE 19709</span>
                  </div>
                </div>
              </div>

              <Link
                to="/contact"
                className="bg-cyan-600 text-white px-6 py-3 rounded-lg hover:bg-cyan-700 transition-colors font-medium text-center mt-4"
                onClick={() => setIsOpen(false)}
              >
                Get Free Consultation
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;