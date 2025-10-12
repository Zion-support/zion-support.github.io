import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const aiServices = [
    { name: 'AI Content Generator Pro', path: '/ai-content-generator' },
    { name: 'AI Chatbot Builder Enterprise', path: '/ai-chatbot-builder' },
    { name: 'AI Analytics Dashboard Pro', path: '/ai-analytics-dashboard' },
    { name: 'AI Email Marketing Suite', path: '/ai-email-assistant' },
    { name: 'AI Voice Assistant Pro', path: '/ai-voice-assistant' },
    { name: 'AI Automation Suite Enterprise', path: '/ai-automation' },
    { name: 'AI Computer Vision Platform', path: '/ai-computer-vision' },
    { name: 'AI Cybersecurity Suite', path: '/ai-cybersecurity' }
  ]

  const itServices = [
    { name: 'Cloud Migration & Management', path: '/cloud-migration' },
    { name: 'Cybersecurity Solutions Suite', path: '/cybersecurity-solutions' },
    { name: 'DevOps & CI/CD Platform', path: '/devops-cicd' },
    { name: 'Data Analytics & BI', path: '/data-analytics' },
    { name: 'Mobile & Web Development', path: '/mobile-development' },
    { name: 'Infrastructure Management', path: '/infrastructure-management' },
    { name: 'Network Security & Monitoring', path: '/network-security' },
    { name: 'IT Consulting & Strategy', path: '/it-consulting' }
  ]

  const microSaasServices = [
    { name: 'AI Task Manager Pro', path: '/ai-task-manager' },
    { name: 'AI Expense Tracker Plus', path: '/ai-expense-tracker' },
    { name: 'AI Password Manager Enterprise', path: '/ai-password-manager' },
    { name: 'AI Invoice Generator Pro', path: '/ai-invoice-generator' },
    { name: 'AI Health Tracker Premium', path: '/ai-health-tracker' },
    { name: 'AI Smart Calendar Pro', path: '/ai-smart-calendar' },
    { name: 'AI Document Processor', path: '/ai-document-processor' },
    { name: 'AI Customer Support Bot', path: '/ai-customer-support-bot' }
  ]

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'AI Services', path: '/ai-services' },
    { name: 'IT Services', path: '/it-services' },
    { name: 'Micro SAAS', path: '/micro-saas-services' },
    { name: '5G Solutions', path: '/5g-implementation' },
    { name: 'Cloud Services', path: '/cloud-services' },
    { name: 'Contact', path: '/contact' }
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
            <p className="text-gray-300 mb-4 text-sm">
              Advanced AI and IT solutions for modern businesses. We help you transform your digital infrastructure with cutting-edge technology.
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <a href="tel:+13024640950" className="hover:text-white transition-colors">+1 302 464 0950</a>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-white transition-colors">kleber@ziontechgroup.com</a>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
              </div>
            </div>
          </div>

          {/* AI Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">AI Services</h3>
            <ul className="space-y-2">
              {aiServices.slice(0, 6).map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/ai-services"
                  className="text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium"
                >
                  View All AI Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">IT Services</h3>
            <ul className="space-y-2">
              {itServices.slice(0, 6).map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/it-services"
                  className="text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium"
                >
                  View All IT Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Micro SaaS Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Micro SaaS</h3>
            <ul className="space-y-2">
              {microSaasServices.slice(0, 6).map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/micro-saas-services"
                  className="text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium"
                >
                  View All Micro SaaS →
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Zion Tech Group. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}