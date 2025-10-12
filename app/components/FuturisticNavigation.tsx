import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown, Zap, Cloud, Shield, Globe, Database, Code, Smartphone, Brain, Cpu, Network, Bot, BarChart3, Settings, Rocket, Lock, Wifi, BarChart, Users, Mail, Phone, MapPin, Sparkles, Star } from 'lucide-react'

const FuturisticNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigationItems = [
    {
      name: 'AI Services',
      path: '/ai-services',
      icon: Brain,
      color: 'from-cyan-400 to-blue-500',
      glowColor: 'shadow-cyan-500/25',
      dropdown: [
        { name: 'AI Customer Insights', path: '/micro-saas/ai-customer-insights' },
        { name: 'AI Workflow Automation', path: '/micro-saas/ai-workflow-automation' },
        { name: 'AI Financial Forecasting', path: '/micro-saas/ai-financial-forecasting' },
        { name: 'AI Content Generator', path: '/ai-content-generator' },
        { name: 'AI Chatbot Enterprise', path: '/ai-chatbot-enterprise' },
        { name: 'AI Analytics Dashboard', path: '/ai-analytics-dashboard' },
        { name: 'AI 3D Generation', path: '/ai-3d-generation' },
        { name: 'AI Cybersecurity Suite', path: '/ai-cybersecurity-suite' },
        { name: 'AI CRM Assistant', path: '/ai-crm-assistant' },
        { name: 'AI Email Marketing', path: '/ai-email-marketing' }
      ]
    },
    {
      name: 'IT Services',
      path: '/it-services',
      icon: Cloud,
      color: 'from-green-400 to-emerald-500',
      glowColor: 'shadow-green-500/25',
      dropdown: [
        { name: 'Cloud Migration', path: '/cloud-migration' },
        { name: 'DevOps Solutions', path: '/devops-solutions' },
        { name: 'Cybersecurity', path: '/cybersecurity' },
        { name: 'Mobile Development', path: '/mobile-development' },
        { name: 'API Development', path: '/api-development' },
        { name: 'Database Management', path: '/database-management' },
        { name: 'System Integration', path: '/system-integration' },
        { name: 'IT Consulting', path: '/it-consulting' },
        { name: 'Network Infrastructure', path: '/network-infrastructure' }
      ]
    },
    {
      name: 'Micro SAAS',
      path: '/micro-saas',
      icon: Code,
      color: 'from-purple-400 to-pink-500',
      glowColor: 'shadow-purple-500/25',
      dropdown: [
        { name: 'AI Customer Insights', path: '/micro-saas/ai-customer-insights' },
        { name: 'AI Workflow Automation', path: '/micro-saas/ai-workflow-automation' },
        { name: 'AI Financial Forecasting', path: '/micro-saas/ai-financial-forecasting' },
        { name: 'AI-Powered CRM', path: '/ai-crm' },
        { name: 'Smart Analytics', path: '/smart-analytics' },
        { name: 'Automated Testing', path: '/ai-automated-testing' },
        { name: 'Content Management', path: '/ai-content-management' },
        { name: 'Email Marketing', path: '/ai-email-marketing' },
        { name: 'Social Media Manager', path: '/ai-social-media-manager' },
        { name: 'Project Management', path: '/ai-project-management' }
      ]
    },
    {
      name: '5G Solutions',
      path: '/5g-implementation',
      icon: Wifi,
      color: 'from-orange-400 to-red-500',
      glowColor: 'shadow-orange-500/25',
      dropdown: [
        { name: '5G Network Infrastructure', path: '/5g-network-infrastructure' },
        { name: '5G Edge Computing', path: '/5g-edge-computing' },
        { name: '5G IoT Solutions', path: '/5g-iot-solutions' },
        { name: '5G Mobile Applications', path: '/5g-mobile-applications' },
        { name: '5G Private Networks', path: '/5g-private-networks' },
        { name: '5G Data Analytics', path: '/5g-data-analytics' }
      ]
    }
  ];

  const simpleLinks = [
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Blog', path: '/blog' },
    { name: 'Support', path: '/support' }
  ];

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-gray-900/95 backdrop-blur-xl border-b border-white/10 shadow-2xl' 
        : 'bg-transparent'
    }`}>
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.1)_0%,transparent_50%)] animate-pulse" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.1)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex items-center space-x-2 px-4 py-2">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:to-purple-300 transition-all duration-300">
                  Zion Tech Group
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-center space-x-1">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative group">
                  <button
                    className={`flex items-center text-gray-300 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/10 relative overflow-hidden group`}
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                    <item.icon className="w-4 h-4 mr-2 relative z-10" />
                    <span className="relative z-10">{item.name}</span>
                    <ChevronDown className="w-4 h-4 ml-1 group-hover:rotate-180 transition-transform duration-300 relative z-10" />
                  </button>
                  
                  {activeDropdown === item.name && (
                    <div className={`absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl z-50 ${item.glowColor}`}>
                      <div className="p-6">
                        <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                          <item.icon className={`w-5 h-5 mr-2 bg-gradient-to-r ${item.color} bg-clip-text text-transparent`} />
                          {item.name}
                        </h3>
                        <div className="grid grid-cols-1 gap-2">
                          {item.dropdown.map((dropdownItem, index) => (
                            <Link
                              key={index}
                              to={dropdownItem.path}
                              className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 group/item relative overflow-hidden"
                            >
                              <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover/item:opacity-5 transition-opacity duration-300`} />
                              <span className="relative z-10 group-hover/item:translate-x-2 transition-transform duration-300">
                                {dropdownItem.name}
                              </span>
                            </Link>
                          ))}
                        </div>
                        <div className="mt-4 pt-4 border-t border-white/10">
                          <Link
                            to={item.path}
                            className={`block w-full text-center bg-gradient-to-r ${item.color} text-white py-2 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 shadow-lg`}
                          >
                            View All {item.name}
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
              
              {simpleLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-gray-300 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/10 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10">{link.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/contact"
              className="relative bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 flex items-center space-x-2">
                <Sparkles className="w-4 h-4" />
                <span>Get Started</span>
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-4 pt-2 pb-6 space-y-1 bg-gray-900/95 backdrop-blur-xl border-t border-white/10">
              {navigationItems.map((item) => (
                <div key={item.name} className="space-y-1">
                  <div className="flex items-center text-gray-300 px-3 py-2 text-base font-medium">
                    <item.icon className={`w-5 h-5 mr-3 bg-gradient-to-r ${item.color} bg-clip-text text-transparent`} />
                    {item.name}
                  </div>
                  <div className="ml-8 space-y-1">
                    {item.dropdown.map((dropdownItem, index) => (
                      <Link
                        key={index}
                        to={dropdownItem.path}
                        className="block text-gray-400 hover:text-white px-3 py-2 rounded-lg text-sm transition-all duration-300"
                        onClick={() => setIsOpen(false)}
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                    <Link
                      to={item.path}
                      className={`block text-transparent bg-gradient-to-r ${item.color} bg-clip-text hover:opacity-80 px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-300`}
                      onClick={() => setIsOpen(false)}
                    >
                      View All {item.name} →
                    </Link>
                  </div>
                </div>
              ))}
              
              {simpleLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block text-gray-300 hover:text-white px-3 py-2 rounded-lg text-base font-medium transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              
              <Link
                to="/contact"
                className="block bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 mt-4"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default FuturisticNavigation