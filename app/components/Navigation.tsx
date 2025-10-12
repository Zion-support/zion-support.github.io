import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  Menu, 
  X, 
  ChevronDown, 
  Brain, 
  Cloud, 
  Shield, 
  Code, 
  Wifi, 
  BarChart3, 
  Bot, 
  Zap,
  Cpu,
  Database,
  Globe,
  Rocket,
  Lock,
  Settings,
  Smartphone,
  Server,
  Network
} from 'lucide-react'

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  const services = [
    {
      name: 'AI Services',
      href: '/ai-services',
      icon: <Brain className="w-4 h-4" />,
      description: 'Advanced AI Solutions',
      color: 'text-blue-400',
      submenu: [
        { title: 'AI Content Generator', href: '/ai-content-generator' },
        { title: 'AI Chatbot Builder', href: '/ai-chatbot-builder' },
        { title: 'AI Analytics Dashboard', href: '/ai-analytics-dashboard' },
        { title: 'AI 3D Generation', href: '/ai-3d-generation' },
        { title: 'AI Drug Discovery Pro', href: '/ai-drug-discovery-pro' },
        { title: 'AI Cybersecurity Suite', href: '/ai-cybersecurity-suite' },
        { title: 'AI Voice Assistant', href: '/ai-voice-assistant' },
        { title: 'AI Email Assistant', href: '/ai-email-assistant' }
      ]
    },
    {
      name: 'IT Services',
      href: '/it-services',
      icon: <Server className="w-4 h-4" />,
      description: 'IT Infrastructure Solutions',
      color: 'text-green-400',
      submenu: [
        { title: 'Cloud Migration', href: '/cloud-migration' },
        { title: 'Cybersecurity Solutions', href: '/cybersecurity' },
        { title: 'DevOps & CI/CD', href: '/devops' },
        { title: 'Database Management', href: '/database-services' },
        { title: 'Mobile Development', href: '/mobile-development' },
        { title: 'Web Development', href: '/web-development' },
        { title: 'API Development', href: '/api-development' }
      ]
    },
    {
      name: 'Micro SaaS',
      href: '/micro-saas',
      icon: <Rocket className="w-4 h-4" />,
      description: 'Ready-to-Use SaaS Apps',
      color: 'text-purple-400',
      submenu: [
        { title: 'AI Task Manager', href: '/ai-task-manager' },
        { title: 'AI Expense Tracker', href: '/ai-expense-tracker' },
        { title: 'AI Password Manager', href: '/ai-password-manager' },
        { title: 'Analytics Dashboard', href: '/micro-saas/analytics-dashboard' },
        { title: 'Appointment Scheduler', href: '/micro-saas/appointment-scheduler' },
        { title: 'Content Generator', href: '/micro-saas/content-generator' },
        { title: 'Email Marketing', href: '/micro-saas/email-marketing' },
        { title: 'SEO Optimizer', href: '/micro-saas/seo-optimizer' }
      ]
    },
    {
      name: '5G Solutions',
      href: '/5g-implementation',
      icon: <Wifi className="w-4 h-4" />,
      description: '5G Network Solutions',
      color: 'text-orange-400',
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

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' }
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent group-hover:from-purple-300 group-hover:to-blue-300 transition-all duration-300">
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {services.map((service) => (
              <div key={service.name} className="relative group">
                <button
                  onClick={() => toggleDropdown(service.name)}
                  className="flex items-center space-x-2 text-gray-300 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/10 group"
                >
                  <span className={service.color}>{service.icon}</span>
                  <span>{service.name}</span>
                  <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                </button>
                
                {activeDropdown === service.name && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-lg rounded-xl border border-white/20 shadow-2xl z-50">
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <span className={service.color}>{service.icon}</span>
                        <h3 className="text-lg font-semibold text-white ml-3">{service.name}</h3>
                      </div>
                      <p className="text-sm text-gray-300 mb-4">{service.description}</p>
                      <div className="grid grid-cols-1 gap-2">
                        {service.submenu.map((item, index) => (
                          <Link
                            key={index}
                            to={item.href}
                            className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 group"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <span className="group-hover:translate-x-2 transition-transform duration-300">
                              {item.title}
                            </span>
                          </Link>
                        ))}
                      </div>
                      <div className="mt-4 pt-4 border-t border-white/10">
                        <Link
                          to={service.href}
                          className="block w-full text-center bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
                          onClick={() => setActiveDropdown(null)}
                        >
                          View All {service.name}
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            {company.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-gray-300 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/10"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-gray-900/95 backdrop-blur-lg border-t border-white/10">
            <div className="px-4 py-6 space-y-4">
              {services.map((service) => (
                <div key={service.name}>
                  <button
                    onClick={() => toggleDropdown(service.name)}
                    className="flex items-center justify-between w-full text-left text-gray-300 hover:text-white px-4 py-3 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <span className={service.color}>{service.icon}</span>
                      <span className="font-medium">{service.name}</span>
                    </div>
                    <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === service.name ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {activeDropdown === service.name && (
                    <div className="ml-8 mt-2 space-y-2">
                      {service.submenu.map((item, index) => (
                        <Link
                          key={index}
                          to={item.href}
                          className="block px-4 py-2 text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
                          onClick={() => {
                            setActiveDropdown(null)
                            setIsOpen(false)
                          }}
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {company.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block text-gray-300 hover:text-white px-4 py-3 rounded-lg hover:bg-white/10 transition-colors"
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
