import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Clock, Globe, MessageCircle } from 'lucide-react'

export default function Footer() {
  const aiServices = [
    { name: 'AI Content Generator Pro', path: '/ai-content-generator' },
    { name: 'AI Chatbot Builder Enterprise', path: '/ai-chatbot-builder' },
    { name: 'AI Analytics Dashboard Pro', path: '/ai-analytics-dashboard' },
    { name: 'AI Email Marketing Suite', path: '/ai-email-assistant' },
    { name: 'AI Voice Assistant Pro', path: '/ai-voice-assistant' },
    { name: 'AI Automation Suite Pro', path: '/ai-automation' },
    { name: 'AI Computer Vision Platform', path: '/ai-computer-vision' },
    { name: 'AI Customer Support Suite', path: '/ai-customer-support' }
  ]

  const itServices = [
    { name: 'Cloud Migration & Management', path: '/cloud-migration' },
    { name: 'Enterprise Cybersecurity Suite', path: '/cybersecurity-solutions' },
    { name: 'DevOps & CI/CD Automation', path: '/devops-cicd' },
    { name: 'Advanced Data Analytics Platform', path: '/data-analytics' },
    { name: 'Mobile & Web Development', path: '/mobile-development' },
    { name: 'Infrastructure Management Pro', path: '/infrastructure-management' },
    { name: 'Network Security & Monitoring', path: '/network-security' },
    { name: 'IT Consulting & Strategy', path: '/it-consulting' }
  ]

  const microSaasServices = [
    { name: 'AI Analytics Dashboard Pro', path: '/micro-saas/analytics-dashboard' },
    { name: 'AI-Powered CRM Suite', path: '/micro-saas/lead-scoring' },
    { name: 'Enterprise Security Monitor', path: '/micro-saas/support-bot' },
    { name: 'Cloud Backup Enterprise', path: '/micro-saas/document-processor' },
    { name: 'Marketing Automation Hub', path: '/micro-saas/email-marketing' },
    { name: 'Financial Analytics Suite', path: '/micro-saas/expense-tracker' },
    { name: 'HR Management Pro', path: '/micro-saas/appointment-scheduler' },
    { name: 'Project Management Hub', path: '/micro-saas/inventory-management' }
  ]

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'AI Services', path: '/ai-services' },
    { name: 'IT Services', path: '/it-services' },
    { name: 'Micro SAAS', path: '/micro-saas-services' },
    { name: '5G Solutions', path: '/5g-implementation' },
    { name: 'Cloud Services', path: '/cloud-services' },
    { name: 'Digital Transformation', path: '/digital-transformation' },
    { name: 'Contact', path: '/contact' }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-2xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              Leading provider of AI-powered solutions, 5G implementation, and enterprise IT services. 
              We help businesses transform their digital infrastructure with cutting-edge technology and innovative solutions.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-purple-400 mr-3" />
                <a href="tel:+13024640950" className="text-gray-300 hover:text-white transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-purple-400 mr-3" />
                <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-white transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-purple-400 mr-3 mt-1" />
                <div className="text-gray-300">
                  <div>364 E Main St STE 1008</div>
                  <div>Middletown, DE 19709</div>
                </div>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-purple-400 mr-3" />
                <span className="text-gray-300">24/7 Support Available</span>
              </div>
              <div className="flex items-center">
                <Globe className="w-5 h-5 text-purple-400 mr-3" />
                <a href="https://ziontechgroup.com" className="text-gray-300 hover:text-white transition-colors">
                  ziontechgroup.com
                </a>
              </div>
            </div>
          </div>

          {/* AI Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-purple-400">AI Services</h3>
            <ul className="space-y-3">
              {aiServices.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-purple-400">IT Services</h3>
            <ul className="space-y-3">
              {itServices.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Micro SAAS & Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-purple-400">Micro SAAS</h3>
            <ul className="space-y-3 mb-8">
              {microSaasServices.slice(0, 4).map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <h3 className="text-lg font-semibold mb-6 text-purple-400">Quick Links</h3>
            <ul className="space-y-3">
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
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-gray-400 text-sm">
                © 2024 Zion Tech Group. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Terms of Service
                </Link>
                <Link to="/sitemap" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Sitemap
                </Link>
              </div>
            </div>
            <div className="mt-4 lg:mt-0">
              <div className="flex items-center space-x-4">
                <span className="text-gray-400 text-sm">Follow us:</span>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Globe className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}