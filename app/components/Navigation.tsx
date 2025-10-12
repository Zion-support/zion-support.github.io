import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown, Zap, Cloud, Shield, Globe, Database, Code, Smartphone, Brain, Cpu, Network, Bot, BarChart3, Settings, Rocket, Lock, Wifi } from 'lucide-react'

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  const services = [
    {
      title: 'AI Services',
      href: '/ai-services',
      icon: Brain,
      description: 'Artificial Intelligence Solutions',
      submenu: [
        { title: 'AI Content Generator', href: '/ai-content-generator' },
        { title: 'AI Chatbot Builder', href: '/ai-chatbot-builder' },
        { title: 'AI Analytics Dashboard', href: '/ai-analytics-dashboard' },
        { title: 'AI Email Assistant', href: '/ai-email-assistant' },
        { title: 'AI Data Analytics', href: '/ai-data-analytics' },
        { title: 'AI Computer Vision', href: '/ai-computer-vision' }
      ]
    },
    {
      title: 'IT Services',
      href: '/it-services',
      icon: Cloud,
      description: 'Information Technology Solutions',
      submenu: [
        { title: 'Cloud Migration', href: '/cloud-migration' },
        { title: 'DevOps Solutions', href: '/devops-solutions' },
        { title: 'Cybersecurity', href: '/cybersecurity' },
        { title: 'Mobile Development', href: '/mobile-development' },
        { title: 'API Development', href: '/api-development' },
        { title: 'Database Management', href: '/database-management' }
      ]
    },
    {
      title: 'Micro SAAS',
      href: '/micro-saas-services',
      icon: Code,
      description: 'Micro Software as a Service',
      submenu: [
        { title: 'AI-Powered CRM', href: '/ai-crm' },
        { title: 'Smart Analytics', href: '/smart-analytics' },
        { title: 'Automated Testing', href: '/ai-automated-testing' },
        { title: 'Content Management', href: '/ai-content-management' },
        { title: 'Email Marketing', href: '/ai-email-marketing' },
        { title: 'Social Media Manager', href: '/ai-social-media-manager' }
      ]
    },
    {
      title: '5G Solutions',
      href: '/5g-implementation',
      icon: Wifi,
      description: '5G Network Solutions',
      submenu: [
        { title: '5G Network Infrastructure', href: '/5g-network-infrastructure' },
        { title: '5G Edge Computing', href: '/5g-edge-computing' },
        { title: '5G IoT Solutions', href: '/5g-iot-solutions' },
        { title: '5G Mobile Applications', href: '/5g-mobile-applications' },
        { title: '5G Private Networks', href: '/5g-private-networks' },
        { title: '5G Data Analytics', href: '/5g-data-analytics' }
      ]
    }
  ]

  const simpleLinks = [
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Blog', path: '/blog' }
  ]

  return (
    <nav className="bg-gray-900/95 backdrop-blur-lg border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 group">
              <span className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent group-hover:from-purple-300 group-hover:to-blue-300 transition-all duration-300">
                Zion Tech Group
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="relative group">
              <button
                className="flex items-center text-white hover:text-purple-300 transition-colors duration-200"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {isServicesOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-96 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <div className="grid grid-cols-2 gap-4 p-4">
                    {services.map((service, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center space-x-2 text-gray-900 font-semibold">
                          <service.icon className="h-4 w-4 text-purple-600" />
                          <span>{service.title}</span>
                        </div>
                        <div className="space-y-1">
                          {service.submenu.slice(0, 3).map((item, itemIndex) => (
                            <Link
                              key={itemIndex}
                              to={item.href}
                              className="block text-sm text-gray-600 hover:text-purple-600 transition-colors"
                            >
                              {item.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {simpleLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-white hover:text-purple-300 transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-purple-300 transition-colors duration-200"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-800 rounded-lg mt-2">
              <div className="space-y-1">
                <div className="text-white font-semibold px-3 py-2">Services</div>
                {services.map((service, index) => (
                  <div key={index} className="pl-4">
                    <Link
                      to={service.href}
                      className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md transition-colors"
                    >
                      {service.title}
                    </Link>
                    <div className="pl-4 space-y-1">
                      {service.submenu.slice(0, 3).map((item, itemIndex) => (
                        <Link
                          key={itemIndex}
                          to={item.href}
                          className="block px-3 py-1 text-sm text-gray-400 hover:text-white transition-colors"
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              
              {simpleLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation