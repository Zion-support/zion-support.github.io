'use client'
import React from 'react'
import { Link } from 'react-router-dom'
import { Brain, Phone, Mail, MapPin, ArrowRight } from 'lucide-react'

const Footer: React.FC = () => {
  const aiServices = [
    { name: 'AI Chatbot Builder', href: '/ai-chatbot-builder' },
    { name: 'AI Content Generator', href: '/ai-content-generator' },
    { name: 'AI Data Visualizer', href: '/ai-data-visualizer' },
    { name: 'AI Document Intelligence', href: '/ai-document-intelligence' },
    { name: 'AI Financial Forecasting', href: '/ai-financial-forecasting' },
    { name: 'AI Fraud Detection', href: '/ai-fraud-detection' }
  ]

  const itServices = [
    { name: 'Web Development', href: '/web-development' },
    { name: 'Mobile Development', href: '/mobile-development' },
    { name: 'API Development', href: '/api-development' },
    { name: 'Cloud Solutions', href: '/cloud-solutions' },
    { name: 'Cybersecurity', href: '/cybersecurity' },
    { name: 'Data Analytics', href: '/data-analytics' }
  ]

  const microSaas = [
    { name: 'Analytics Dashboard', href: '/analytics-dashboard' },
    { name: 'Expense Tracker Pro', href: '/expense-tracker-pro' },
    { name: 'Inventory Manager', href: '/inventory-manager' },
    { name: 'Task Manager Pro', href: '/task-manager-pro' },
    { name: 'Social Media Scheduler', href: '/social-media-scheduler' }
  ]

  const companyLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Partnerships', href: '/partnerships' }
  ]

  const supportLinks = [
    { name: 'Help Center', href: '/help' },
    { name: 'Documentation', href: '/docs' },
    { name: 'Tutorials', href: '/tutorials' },
    { name: 'API Documentation', href: '/api-docs' },
    { name: 'Status Page', href: '/status' }
  ]

  const quickLinks = [
    { name: 'Free Consultation', href: '/consultation' },
    { name: 'Request Demo', href: '/demo' },
    { name: 'Contact Sales', href: '/contact' },
    { name: 'Technical Support', href: '/support' }
  ]

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Leading provider of AI and IT solutions for modern businesses.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-gray-300">
                <Phone className="w-4 h-4 mr-2" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <Mail className="w-4 h-4 mr-2" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-start text-sm text-gray-300">
                <MapPin className="w-4 h-4 mr-2 mt-0.5" />
                <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
              </div>
            </div>
          </div>

          {/* AI Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">AI Services</h3>
            <ul className="space-y-2">
              {aiServices.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/ai-services"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm font-medium flex items-center"
                >
                  View All AI Services
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </li>
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">IT Services</h3>
            <ul className="space-y-2">
              {itServices.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/it-services"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm font-medium flex items-center"
                >
                  View All IT Services
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Micro SAAS */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Micro SAAS</h3>
            <ul className="space-y-2">
              {microSaas.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/micro-saas-solutions"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm font-medium flex items-center"
                >
                  View All Micro SAAS
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Additional Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <h3 className="text-lg font-semibold mb-4 mt-6">Support</h3>
            <ul className="space-y-2">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-8 pt-8 border-t border-slate-700">
          <div className="flex flex-wrap gap-4 justify-center">
            {quickLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-gray-300 hover:text-white text-sm transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-6 flex justify-center space-x-6">
          <a href="https://github.com/ziontechgroup" className="text-gray-300 hover:text-white transition-colors">
            GitHub
         </a>
          <a href="https://linkedin.com/company/ziontechgroup" className="text-gray-300 hover:text-white transition-colors">
            LinkedIn
         </a>
          <a href="https://twitter.com/ziontechgroup" className="text-gray-300 hover:text-white transition-colors">
            Twitter
         </a>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-slate-700 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-400">
            © 2024 Zion Tech Group. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

Footer.displayName = 'Footer'
export default Footer