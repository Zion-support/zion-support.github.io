'use client'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { 
  Menu, 
  X, 
  ChevronDown, 
  Brain, 
  Cloud, 
  Cpu, 
  Zap, 
  ArrowRight,
  Phone,
  Mail,
  MapPin
} from 'lucide-react'

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigationItems = [
    {
      name: 'AI Services',
      href: '/ai-services',
      icon: Brain,
      description: 'Advanced AI solutions',
      submenu: [
        { name: 'AI Chatbots', href: '/ai-chatbots' },
        { name: 'AI Content Generation', href: '/ai-content-generation' },
        { name: 'AI Data Analytics', href: '/ai-data-analytics' },
        { name: 'AI Computer Vision', href: '/ai-computer-vision' },
        { name: 'AI Workflow Automation', href: '/ai-workflow-automation' },
        { name: 'AI Fraud Detection', href: '/ai-fraud-detection' }
      ]
    },
    {
      name: 'IT Services',
      href: '/it-services',
      icon: Cloud,
      description: 'Comprehensive IT solutions',
      submenu: [
        { name: 'Web Development', href: '/web-development' },
        { name: 'Mobile Development', href: '/mobile-development' },
        { name: 'Cloud Infrastructure', href: '/cloud-infrastructure' },
        { name: 'Cybersecurity Solutions', href: '/cybersecurity-solutions' },
        { name: 'Data Analytics', href: '/data-analytics' },
        { name: 'IT Consulting', href: '/it-consulting' }
      ]
    },
    {
      name: 'Micro SaaS',
      href: '/micro-saas',
      icon: Cpu,
      description: 'Ready-to-use business tools',
      submenu: [
        { name: 'Analytics Dashboard', href: '/analytics-dashboard' },
        { name: 'CRM Intelligence', href: '/crm-intelligence' },
        { name: 'Content Studio', href: '/content-studio' },
        { name: 'Security Shield', href: '/security-shield' },
        { name: 'Project Master', href: '/project-master' },
        { name: 'Email Automation', href: '/email-automation' }
      ]
    },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-md border-b border-white/10' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.href}
                  className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-200 py-2"
                >
                  {item.icon && <item.icon className="w-4 h-4" />}
                  <span>{item.name}</span>
                  {item.submenu && <ChevronDown className="w-4 h-4" />}
                </Link>

                {/* Dropdown Menu */}
                {item.submenu && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-slate-900/95 backdrop-blur-md rounded-lg shadow-xl border border-white/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="p-4">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center">
                          <item.icon className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h3 className="text-white font-semibold">{item.name}</h3>
                          <p className="text-gray-400 text-sm">{item.description}</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="flex items-center justify-between text-gray-300 hover:text-cyan-400 hover:bg-white/5 px-3 py-2 rounded-lg transition-all duration-200 group"
                          >
                            <span>{subItem.name}</span>
                            <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+13024640950"
              className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">(302) 464-0950</span>
            </a>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Get Quote
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

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-white/10">
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.icon && <item.icon className="w-5 h-5" />}
                    <span className="text-lg">{item.name}</span>
                  </Link>
                  {item.submenu && (
                    <div className="ml-8 mt-2 space-y-2">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="block text-gray-400 hover:text-cyan-400 transition-colors py-1"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <div className="pt-4 border-t border-white/10 space-y-4">
                <a
                  href="tel:+13024640950"
                  className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>(302) 464-0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>kleber@ziontechgroup.com</span>
                </a>
                <div className="flex items-start space-x-3 text-gray-300">
                  <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                  <span className="text-sm">364 E Main St STE 1008<br />Middletown DE 19709</span>
                </div>
                <Link
                  to="/contact"
                  className="block w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white text-center px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Get Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
