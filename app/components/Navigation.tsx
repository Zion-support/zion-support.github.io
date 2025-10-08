import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Mail, MapPin, Menu, X } from 'lucide-react';
const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

const services = [
    { name: 'All Services', url: '/services' },
    { name: 'AI Services', url: '/ai-services' },
    { name: 'AI Marketing', url: '/ai-marketing' },
    { name: 'AI Automation', url: '/ai-automation' },
    { name: 'AI Healthcare', url: '/ai-healthcare' },
    { name: 'AI Fintech', url: '/ai-fintech' },
    { name: 'AI Data Analytics', url: '/ai-data-analytics' },
    { name: 'AI Cybersecurity', url: '/ai-cybersecurity' },
    { name: 'AI Workflow Automation', url: '/ai-workflow-automation' },
    { name: 'AI Cloud Infrastructure', url: '/ai-cloud-infrastructure' },
    { name: 'AI E-commerce Solutions', url: '/ai-ecommerce-solutions' },
    { name: 'AI Mobile App Development', url: '/ai-mobile-app-development' },
    { name: 'IT Services', url: '/it-services' },
    { name: 'Micro SAAS', url: '/micro-saas' },
    { name: 'Cybersecurity', url: '/cybersecurity' },
  ];

  const technologies = [
    { name: 'Quantum Computing', url: '/quantum-computing' },
    { name: 'Autonomous Systems', url: '/autonomous-systems' },
    { name: 'Business Intelligence', url: '/business-intelligence' },
    { name: 'Blockchain & Web3', url: '/blockchain-web3' },
    { name: 'IoT & Edge Computing', url: '/iot-edge-computing' },
  ];

  const company = [
    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/team' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Enterprise Solutions', url: '/enterprise' },
    { name: 'Contact Us', url: '/contact' },
  ];

  const resources = [
    { name: 'Blog', url: '/blog' },
    { name: 'Technical Guides', url: '/guides' },
    { name: 'Privacy Policy', url: '/privacy' },
    { name: 'Terms of Service', url: '/terms' },
    { name: 'Sitemap', url: '/sitemap' },
  ];
          <Link to="/" className="text-2xl font-bold text-blue-600 flex items-center">
          <Link to="/" className="text-2xl font-bold text-cyan-400 neon-text flex items-center">
            <span className="text-3xl mr-2">⚡</span>
            Zion Tech Group
          </Link>
          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8">
<Link to="/" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">
              Home
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">
              About
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center font-medium"
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
                Services
                <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-white rounded-lg shadow-xl border py-4 z-50">
<div className="grid grid-cols-3 gap-4 px-4">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Core Services</h3>
                      <Link to="/services" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors">
                        All Services
                      </Link>
                      <Link to="/micro-saas" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors">
                        Micro SAAS Solutions
                      </Link>
                      <Link to="/ai-services" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors">
                        AI Services
                      </Link>
                      <Link to="/it-services" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors">
                        IT Services
                      </Link>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">AI Solutions</h3>
                      <Link to="/ai-data-analytics" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors">
                        AI Data Analytics
                      </Link>
                      <Link to="/ai-cybersecurity" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors">
                        AI Cybersecurity
                      </Link>
                      <Link to="/ai-workflow-automation" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors">
                        AI Workflow Automation
                      </Link>
                      <Link to="/ai-cloud-infrastructure" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors">
                        AI Cloud Infrastructure
                      </Link>
                      <Link to="/ai-ecommerce-solutions" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors">
                        AI E-commerce Solutions
                      </Link>
                      <Link to="/ai-mobile-app-development" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors">
                        AI Mobile App Development
                      </Link>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Specialized</h3>
                      <Link to="/quantum-computing" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors">
                        Quantum Computing
                      </Link>
                      <Link to="/autonomous-systems" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors">
                        Autonomous Systems
                      </Link>
                      <Link to="/blockchain-web3" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors">
                        Blockchain & Web3
                      </Link>
                      <Link to="/cybersecurity" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors">
                        Cybersecurity
                      </Link>
                    </div>
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
            <Link to="/contact" className="cyber-button">
              Contact
            </Link>
          </div>

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
<div className="lg:hidden py-4 border-t border-cyan-500/20">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-gray-300 hover:text-cyan-400 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="text-gray-300 hover:text-cyan-400 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
{/* Services Section */}
              <div className="space-y-2">
                <div className="text-gray-300 font-semibold text-lg">Services</div>
                <div className="ml-4 space-y-2">
                  <Link to="/services" className="block text-gray-400 hover:text-cyan-400 transition-colors" onClick={() => setIsOpen(false)}>
                    All Services
                  </Link>
                  <Link to="/micro-saas" className="block text-gray-400 hover:text-cyan-400 transition-colors" onClick={() => setIsOpen(false)}>
                    Micro SAAS Solutions
                  </Link>
                  <Link to="/ai-services" className="block text-gray-400 hover:text-cyan-400 transition-colors" onClick={() => setIsOpen(false)}>
                    AI Services
                  </Link>
                  <Link to="/it-services" className="block text-gray-400 hover:text-cyan-400 transition-colors" onClick={() => setIsOpen(false)}>
                    IT Services
                  </Link>
                  <Link to="/ai-data-analytics" className="block text-gray-400 hover:text-cyan-400 transition-colors" onClick={() => setIsOpen(false)}>
                    AI Data Analytics
                  </Link>
                  <Link to="/ai-cybersecurity" className="block text-gray-400 hover:text-cyan-400 transition-colors" onClick={() => setIsOpen(false)}>
                    AI Cybersecurity
                  </Link>
                  <Link to="/ai-workflow-automation" className="block text-gray-400 hover:text-cyan-400 transition-colors" onClick={() => setIsOpen(false)}>
                    AI Workflow Automation
                  </Link>
                  <Link to="/ai-cloud-infrastructure" className="block text-gray-400 hover:text-cyan-400 transition-colors" onClick={() => setIsOpen(false)}>
                    AI Cloud Infrastructure
                  </Link>
                  <Link to="/ai-ecommerce-solutions" className="block text-gray-400 hover:text-cyan-400 transition-colors" onClick={() => setIsOpen(false)}>
                    AI E-commerce Solutions
                  </Link>
                  <Link to="/ai-mobile-app-development" className="block text-gray-400 hover:text-cyan-400 transition-colors" onClick={() => setIsOpen(false)}>
                    AI Mobile App Development
                  </Link>
                  <Link to="/quantum-computing" className="block text-gray-400 hover:text-cyan-400 transition-colors" onClick={() => setIsOpen(false)}>
                    Quantum Computing
                  </Link>
                  <Link to="/autonomous-systems" className="block text-gray-400 hover:text-cyan-400 transition-colors" onClick={() => setIsOpen(false)}>
                    Autonomous Systems
                  </Link>
                  <Link to="/blockchain-web3" className="block text-gray-400 hover:text-cyan-400 transition-colors" onClick={() => setIsOpen(false)}>
                    Blockchain & Web3
                  </Link>
                  <Link to="/cybersecurity" className="block text-gray-400 hover:text-cyan-400 transition-colors" onClick={() => setIsOpen(false)}>
                    Cybersecurity
                  </Link>
                </div>
              </div>
              
              <Link 
                to="/case-studies" 
                className="text-gray-300 hover:text-cyan-400 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Case Studies
              </Link>
              <Link 
                to="/enterprise" 
                className="text-gray-300 hover:text-cyan-400 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Enterprise
              </Link>
              <Link 
                to="/team" 
                className="text-gray-300 hover:text-cyan-400 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Team
              </Link>
<Link 
                to="/contact" 
                className="cyber-button text-center"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>

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
                    ))}                  </div>
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
        )}
      </div>
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

        )}
      </div>
    </nav>
  );
};
export default Navigation;