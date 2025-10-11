import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, ArrowRight, Brain, Cloud, Globe, Code } from 'lucide-react'

export default function Footer() {
  const aiServices = [
    { name: 'AI Content Generator', path: '/ai-content-generator' },
    { name: 'AI Chatbot Builder', path: '/ai-chatbot-builder' },
    { name: 'AI Analytics Dashboard', path: '/ai-analytics-dashboard' },
    { name: 'AI Email Assistant', path: '/ai-email-assistant' },
    { name: 'AI Voice Assistant', path: '/ai-voice-assistant' },
    { name: 'AI Automation Suite', path: '/ai-automation' }
  ]

  const itServices = [
    { name: 'Cloud Migration', path: '/cloud-services' },
    { name: 'Cybersecurity', path: '/cybersecurity' },
    { name: 'Custom Development', path: '/custom-development' },
    { name: 'Data Analytics', path: '/data-analytics' },
    { name: 'Mobile Development', path: '/mobile-development' },
    { name: 'DevOps & CI/CD', path: '/devops' }
  ]

  const microSaasServices = [
    { name: 'AI Task Manager', path: '/micro-saas/ai-task-manager' },
    { name: 'AI Expense Tracker', path: '/micro-saas/ai-expense-tracker' },
    { name: 'AI Password Manager', path: '/micro-saas/ai-password-manager' },
    { name: 'AI Invoice Generator', path: '/micro-saas/ai-invoice-generator' },
    { name: 'AI Analytics Dashboard', path: '/micro-saas/analytics-dashboard' },
    { name: 'AI Content Generator', path: '/micro-saas/content-generator' }
  ]

  const companyLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Our Team', path: '/team' },
    { name: 'Careers', path: '/careers' },
    { name: 'News', path: '/news' },
    { name: 'Contact', path: '/contact' },
    { name: 'Support', path: '/support' }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mr-2">
                <span className="text-white font-bold text-sm">Z</span>
              </div>
              <span className="text-xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-400 mb-4">
              Leading provider of AI-powered solutions, IT services, and digital transformation for modern businesses.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* AI Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Brain className="w-5 h-5 mr-2 text-purple-400" />
              AI Services
            </h3>
            <ul className="space-y-2">
              {aiServices.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.path}
                    className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center"
                  >
                    <ArrowRight className="w-3 h-3 mr-2" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Cloud className="w-5 h-5 mr-2 text-blue-400" />
              IT Services
            </h3>
            <ul className="space-y-2">
              {itServices.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.path}
                    className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center"
                  >
                    <ArrowRight className="w-3 h-3 mr-2" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Micro SAAS */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Code className="w-5 h-5 mr-2 text-green-400" />
              Micro SAAS
            </h3>
            <ul className="space-y-2">
              {microSaasServices.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.path}
                    className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center"
                  >
                    <ArrowRight className="w-3 h-3 mr-2" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Globe className="w-5 h-5 mr-2 text-orange-400" />
              Company
            </h3>
            <ul className="space-y-2">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center"
                  >
                    <ArrowRight className="w-3 h-3 mr-2" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center">
              <Mail className="w-5 h-5 text-purple-400 mr-3" />
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="text-white">contact@ziontechgroup.com</p>
              </div>
            </div>
            <div className="flex items-center">
              <Phone className="w-5 h-5 text-purple-400 mr-3" />
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <p className="text-white">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 text-purple-400 mr-3" />
              <div>
                <p className="text-sm text-gray-400">Location</p>
                <p className="text-white">San Francisco, CA</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Zion Tech Group. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}