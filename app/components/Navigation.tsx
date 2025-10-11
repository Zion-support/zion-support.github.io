import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown, Brain, Cloud, Shield, Globe, Database, Code, Zap } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  const aiServices = [
    { name: 'Machine Learning', path: '/ai-ml' },
    { name: 'Computer Vision', path: '/ai-vision' },
    { name: 'Natural Language Processing', path: '/ai-nlp' },
    { name: 'Predictive Analytics', path: '/ai-predictive-analytics' },
    { name: 'AI Chatbot Builder', path: '/ai-chatbot-builder' },
    { name: 'AI Content Generator', path: '/ai-content-generator' },
    { name: 'AI Analytics Dashboard', path: '/ai-analytics-dashboard' },
    { name: 'AI Cybersecurity', path: '/ai-cybersecurity' },
    { name: 'AI Healthcare Solutions', path: '/ai-healthcare-solutions' },
    { name: 'AI Financial Services', path: '/ai-financial-services' }
  ]

  const techServices = [
    { name: 'Cloud Solutions', path: '/ai-cloud-infrastructure' },
    { name: '5G Implementation', path: '/5g-implementation' },
    { name: 'Data Analytics', path: '/ai-data-analytics' },
    { name: 'Software Development', path: '/ai-mobile-app-development' },
    { name: 'API Management', path: '/ai-api-manager' },
    { name: 'DevOps & Automation', path: '/ai-automation' },
    { name: 'Blockchain Solutions', path: '/ai-blockchain-solutions' },
    { name: 'IoT Analytics', path: '/ai-iot-analytics' }
  ]

  const industrySolutions = [
    { name: 'Healthcare', path: '/ai-healthcare', icon: '🏥' },
    { name: 'Finance', path: '/ai-financial-services', icon: '💼' },
    { name: 'Manufacturing', path: '/ai-manufacturing', icon: '🏭' },
    { name: 'Retail', path: '/ai-ecommerce-optimizer', icon: '🛍️' },
    { name: 'Education', path: '/ai-education', icon: '🎓' },
    { name: 'Legal', path: '/ai-legal', icon: '⚖️' }
  ]

  return (
    <nav className="bg-white/10 backdrop-blur-lg fixed w-full top-0 z-50 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </Link>
          </div>

          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-1">
              <Link to="/" className="text-white hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-white hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                About
              </Link>
              
              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown('services')}
                  className="text-white hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
                >
                  Services
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                {activeDropdown === 'services' && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white/95 backdrop-blur-lg rounded-lg shadow-lg border border-white/20 py-2">
                    <div className="px-4 py-2">
                      <h3 className="text-sm font-semibold text-gray-900 mb-2">Core Services</h3>
                      <div className="space-y-1">
                        <Link to="/services" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">
                          All Services
                        </Link>
                        <Link to="/ai-services" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">
                          AI Solutions
                        </Link>
                        <Link to="/5g-implementation" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">
                          5G Implementation
                        </Link>
                      </div>
                    </div>
                    <div className="border-t border-gray-200 px-4 py-2">
                      <h3 className="text-sm font-semibold text-gray-900 mb-2">Technology Services</h3>
                      <div className="space-y-1">
                        {techServices.slice(0, 4).map((service, index) => (
                          <Link key={index} to={service.path} className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* AI Services Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown('ai')}
                  className="text-white hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
                >
                  AI Services
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                {activeDropdown === 'ai' && (
                  <div className="absolute top-full left-0 mt-1 w-72 bg-white/95 backdrop-blur-lg rounded-lg shadow-lg border border-white/20 py-2">
                    <div className="px-4 py-2">
                      <h3 className="text-sm font-semibold text-gray-900 mb-2">AI Solutions</h3>
                      <div className="grid grid-cols-2 gap-1">
                        {aiServices.slice(0, 8).map((service, index) => (
                          <Link key={index} to={service.path} className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">
                            {service.name}
                          </Link>
                        ))}
                      </div>
                      <Link to="/ai-services" className="block px-3 py-2 text-sm text-blue-600 hover:bg-gray-100 rounded font-medium">
                        View All AI Services →
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Industries Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown('industries')}
                  className="text-white hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
                >
                  Industries
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                {activeDropdown === 'industries' && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white/95 backdrop-blur-lg rounded-lg shadow-lg border border-white/20 py-2">
                    <div className="px-4 py-2">
                      <h3 className="text-sm font-semibold text-gray-900 mb-2">Industry Solutions</h3>
                      <div className="space-y-1">
                        {industrySolutions.map((industry, index) => (
                          <Link key={index} to={industry.path} className="flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">
                            <span className="mr-2">{industry.icon}</span>
                            {industry.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link to="/contact" className="text-white hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Contact
              </Link>
            </div>
          </div>

          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-purple-300 focus:outline-none focus:text-purple-300"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/10 backdrop-blur-lg border-t border-white/20">
            <Link to="/" className="text-white hover:text-purple-300 block px-3 py-2 rounded-md text-base font-medium">
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-purple-300 block px-3 py-2 rounded-md text-base font-medium">
              About
            </Link>
            <Link to="/services" className="text-white hover:text-purple-300 block px-3 py-2 rounded-md text-base font-medium">
              Services
            </Link>
            <Link to="/ai-services" className="text-white hover:text-purple-300 block px-3 py-2 rounded-md text-base font-medium">
              AI Services
            </Link>
            <Link to="/contact" className="text-white hover:text-purple-300 block px-3 py-2 rounded-md text-base font-medium">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}