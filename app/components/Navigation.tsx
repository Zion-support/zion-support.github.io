import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown, Zap, Cloud, Shield, Globe, Database, Code, Smartphone, Brain, Cpu, Network, Bot, BarChart3, Settings, Rocket, Lock, Wifi, BarChart, Users, Mail, Phone, MapPin } from 'lucide-react'

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const navigationItems = [
    {
      name: 'AI Services',
      path: '/ai-services',
      icon: Brain,
      color: 'from-cyan-500 to-blue-500',
      dropdown: [
        { name: 'AI Content Generator', path: '/ai-content-generator', price: '$299/month' },
        { name: 'AI Chatbot Enterprise', path: '/ai-chatbot-enterprise', price: '$499/month' },
        { name: 'AI Analytics Dashboard', path: '/ai-analytics-dashboard', price: '$399/month' },
        { name: 'AI 3D Generation', path: '/ai-3d-generation', price: '$599/month' },
        { name: 'AI Drug Discovery Pro', path: '/ai-drug-discovery-pro', price: '$1,999/month' },
        { name: 'AI Cybersecurity Suite', path: '/ai-cybersecurity-suite', price: '$799/month' },
        { name: 'AI CRM Assistant', path: '/ai-crm-assistant', price: '$199/month' },
        { name: 'AI Email Marketing', path: '/ai-email-marketing', price: '$149/month' },
        { name: 'AI Document Processing', path: '/ai-document-processing', price: '$249/month' },
        { name: 'AI Voice Assistant', path: '/ai-voice-assistant', price: '$349/month' }
      ]
    },
    {
      name: 'IT Services',
      path: '/it-services',
      icon: Cloud,
      color: 'from-emerald-500 to-teal-500',
      dropdown: [
        { name: 'Cloud Migration', path: '/cloud-migration', price: '$2,500/project' },
        { name: 'DevOps Solutions', path: '/devops-solutions', price: '$1,800/month' },
        { name: 'Cybersecurity', path: '/cybersecurity', price: '$1,500/month' },
        { name: 'Mobile Development', path: '/mobile-development', price: '$3,000/project' },
        { name: 'API Development', path: '/api-development', price: '$2,200/project' },
        { name: 'Database Management', path: '/database-management', price: '$900/month' },
        { name: 'System Integration', path: '/system-integration', price: '$2,800/project' },
        { name: 'IT Consulting', path: '/it-consulting', price: '$150/hour' },
        { name: 'Network Infrastructure', path: '/network-infrastructure', price: '$1,200/month' }
      ]
    },
    {
      name: 'Micro SAAS',
      path: '/micro-saas',
      icon: Code,
      color: 'from-violet-500 to-purple-500',
      dropdown: [
        { name: 'AI Customer Insights', path: '/micro-saas/ai-customer-insights', price: '$299/month' },
        { name: 'AI Workflow Automation', path: '/micro-saas/ai-workflow-automation', price: '$199/month' },
        { name: 'AI Financial Forecasting', path: '/micro-saas/ai-financial-forecasting', price: '$399/month' },
        { name: 'AI Inventory Optimizer', path: '/micro-saas/ai-inventory-optimizer', price: '$249/month' },
        { name: 'AI Social Scheduler', path: '/micro-saas/ai-social-scheduler', price: '$129/month' },
        { name: 'AI-Powered CRM', path: '/ai-crm', price: '$99/month' },
        { name: 'Smart Analytics', path: '/smart-analytics', price: '$79/month' },
        { name: 'Automated Testing', path: '/ai-automated-testing', price: '$129/month' },
        { name: 'Content Management', path: '/ai-content-management', price: '$89/month' },
        { name: 'Email Marketing', path: '/ai-email-marketing', price: '$59/month' },
        { name: 'Social Media Manager', path: '/ai-social-media-manager', price: '$119/month' },
        { name: 'Project Management', path: '/ai-project-management', price: '$69/month' },
        { name: 'Customer Support', path: '/ai-customer-support', price: '$149/month' },
        { name: 'Invoice Generator', path: '/ai-invoice-generator', price: '$39/month' },
        { name: 'Task Manager', path: '/ai-task-manager', price: '$49/month' }
      ]
    },
    {
      name: '5G Solutions',
      path: '/5g-implementation',
      icon: Wifi,
      color: 'from-rose-500 to-pink-500',
      dropdown: [
        { name: '5G Network Infrastructure', path: '/5g-network-infrastructure', price: '$3,500/month' },
        { name: '5G Edge Computing', path: '/5g-edge-computing', price: '$2,800/month' },
        { name: '5G IoT Solutions', path: '/5g-iot-solutions', price: '$2,200/month' },
        { name: '5G Mobile Applications', path: '/5g-mobile-applications', price: '$4,000/project' },
        { name: '5G Private Networks', path: '/5g-private-networks', price: '$3,200/month' },
        { name: '5G Data Analytics', path: '/5g-data-analytics', price: '$1,800/month' }
      ]
    }
  ];

  const simpleLinks = [
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Pricing', path: '/pricing' }
  ];

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  return (
    <nav className="bg-gradient-to-r from-gray-900/95 via-slate-900/95 to-gray-900/95 backdrop-blur-lg border-b border-cyan-500/20 sticky top-0 z-50 shadow-lg shadow-cyan-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 group">
              <span className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:via-purple-300 group-hover:to-pink-300 transition-all duration-300">
                Zion Tech Group
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-center space-x-1">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative group">
                  <button
                    className="flex items-center text-gray-300 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/10"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <item.icon className="w-4 h-4 mr-2" />
                    {item.name}
                    <ChevronDown className="w-4 h-4 ml-1 group-hover:rotate-180 transition-transform duration-300" />
                  </button>
                  
                  {activeDropdown === item.name && (
                    <div className="absolute top-full left-0 mt-2 w-96 bg-gradient-to-br from-gray-900/95 to-slate-900/95 backdrop-blur-lg rounded-2xl border border-cyan-500/20 shadow-2xl shadow-cyan-500/10 z-50">
                      <div className="p-6">
                        <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                          <div className={`p-2 rounded-lg bg-gradient-to-r ${item.color} mr-3`}>
                            <item.icon className="w-5 h-5 text-white" />
                          </div>
                          {item.name}
                        </h3>
                        <div className="grid grid-cols-1 gap-2">
                          {item.dropdown.map((dropdownItem, index) => (
                            <Link
                              key={index}
                              to={dropdownItem.path}
                              className="group block px-4 py-3 text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-blue-500/10 rounded-lg transition-all duration-300 border border-transparent hover:border-cyan-500/20"
                            >
                              <div className="flex justify-between items-center">
                                <span className="group-hover:translate-x-2 transition-transform duration-300">
                                  {dropdownItem.name}
                                </span>
                                <span className="text-cyan-400 text-sm font-semibold group-hover:text-cyan-300">
                                  {dropdownItem.price}
                                </span>
                              </div>
                            </Link>
                          ))}
                        </div>
                        <div className="mt-4 pt-4 border-t border-cyan-500/20">
                          <Link
                            to={item.path}
                            className={`block w-full text-center bg-gradient-to-r ${item.color} text-white py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg`}
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
                  className="text-gray-300 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/10"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-4 pt-2 pb-6 space-y-1 bg-gradient-to-br from-gray-900/95 to-slate-900/95 backdrop-blur-lg border-t border-cyan-500/20">
              {navigationItems.map((item) => (
                <div key={item.name} className="space-y-1">
                  <div className="flex items-center text-gray-300 px-3 py-2 text-base font-medium">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${item.color} mr-3`}>
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    {item.name}
                  </div>
                  <div className="ml-8 space-y-1">
                    {item.dropdown.map((dropdownItem, index) => (
                      <Link
                        key={index}
                        to={dropdownItem.path}
                        className="group block text-gray-400 hover:text-white px-3 py-2 rounded-lg text-sm transition-all duration-300 hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-blue-500/10"
                        onClick={() => setIsOpen(false)}
                      >
                        <div className="flex justify-between items-center">
                          <span className="group-hover:translate-x-2 transition-transform duration-300">
                            {dropdownItem.name}
                          </span>
                          <span className="text-cyan-400 text-xs font-semibold">
                            {dropdownItem.price}
                          </span>
                        </div>
                      </Link>
                    ))}
                    <Link
                      to={item.path}
                      className={`block bg-gradient-to-r ${item.color} text-white px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-300 text-center`}
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
                  className="block text-gray-300 hover:text-white px-3 py-2 rounded-lg text-base font-medium transition-all duration-300 hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-blue-500/10"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              
              <Link
                to="/contact"
                className="block bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold text-center hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 mt-4 shadow-lg"
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

export default Navigation
