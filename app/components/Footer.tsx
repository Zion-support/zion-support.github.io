import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, ArrowRight, Brain, Cloud, Shield, Globe, Database, Code, Smartphone, Zap, Sparkles, Star } from 'lucide-react'

export default function Footer() {
  const aiServices = [
    { name: 'AI Content Generator', path: '/ai-content-generation' },
    { name: 'AI Chatbot Builder', path: '/ai-chatbot-builder' },
    { name: 'AI Analytics Dashboard', path: '/ai-analytics-dashboard' },
    { name: 'AI Email Assistant', path: '/ai-email-assistant' },
    { name: 'AI Voice Assistant', path: '/ai-voice-assistant' },
    { name: 'AI Automation Suite', path: '/ai-automation' },
    { name: 'AI 3D Generation', path: '/ai-3d-generation' },
    { name: 'AI Drug Discovery Pro', path: '/ai-drug-discovery-pro' },
    { name: 'AI Climate Solutions', path: '/ai-climate-solutions-pro' }
  ]

  const itServices = [
    { name: 'Cloud Migration', path: '/cloud-migration' },
    { name: 'Cybersecurity Solutions', path: '/cybersecurity-solutions' },
    { name: 'DevOps & CI/CD', path: '/devops-cicd' },
    { name: 'Data Analytics', path: '/data-analytics' },
    { name: 'Mobile Development', path: '/mobile-development' },
    { name: 'Web Development', path: '/web-development' },
    { name: 'Blockchain Solutions', path: '/blockchain-solutions' },
    { name: 'Quantum Computing', path: '/quantum-computing-solutions' }
  ]

  const microSaasServices = [
    { name: 'AI Task Manager Pro', path: '/ai-task-manager-pro' },
    { name: 'AI Expense Tracker', path: '/ai-expense-tracker' },
    { name: 'AI Password Manager', path: '/ai-password-manager' },
    { name: 'AI Invoice Generator', path: '/ai-invoice-generator' },
    { name: 'AI Health Tracker', path: '/ai-health-tracker' },
    { name: 'AI Smart Calendar', path: '/ai-smart-calendar' },
    { name: 'AI Website Builder', path: '/ai-website-builder' },
    { name: 'AI Lead Generator', path: '/ai-lead-generator' }
  ]

  const companyLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Our Team', path: '/team' },
    { name: 'Careers', path: '/careers' },
    { name: 'Press', path: '/press' },
    { name: 'Blog', path: '/blog' },
    { name: 'Case Studies', path: '/case-studies' }
  ]

  const supportLinks = [
    { name: 'Help Center', path: '/help' },
    { name: 'Documentation', path: '/docs' },
    { name: 'API Reference', path: '/api' },
    { name: 'Status', path: '/status' },
    { name: 'Contact Support', path: '/contact' },
    { name: 'Community', path: '/community' }
  ]

  const legalLinks = [
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
    { name: 'Cookie Policy', path: '/cookies' },
    { name: 'GDPR Compliance', path: '/gdpr' },
    { name: 'Security', path: '/security' },
    { name: 'SLA', path: '/sla' }
  ]

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Zion Tech Group</h3>
                <p className="text-sm text-gray-400">AI & IT Solutions</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading provider of AI-powered solutions and IT services, helping businesses 
              transform through cutting-edge technology and innovation.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* AI Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 flex items-center">
              <Brain className="w-5 h-5 mr-2 text-cyan-400" />
              AI Services
            </h4>
            <ul className="space-y-3">
              {aiServices.slice(0, 6).map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.path} 
                    className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  to="/ai-services" 
                  className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium flex items-center"
                >
                  View All AI Services
                  <ArrowRight className="w-3 h-3 ml-1" />
                </Link>
              </li>
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 flex items-center">
              <Cloud className="w-5 h-5 mr-2 text-green-400" />
              IT Services
            </h4>
            <ul className="space-y-3">
              {itServices.slice(0, 6).map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.path} 
                    className="text-gray-300 hover:text-green-400 transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  to="/it-services" 
                  className="text-green-400 hover:text-green-300 transition-colors text-sm font-medium flex items-center"
                >
                  View All IT Services
                  <ArrowRight className="w-3 h-3 ml-1" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Micro SAAS */}
          <div>
            <h4 className="text-lg font-semibold mb-6 flex items-center">
              <Smartphone className="w-5 h-5 mr-2 text-purple-400" />
              Micro SAAS
            </h4>
            <ul className="space-y-3">
              {microSaasServices.slice(0, 6).map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.path} 
                    className="text-gray-300 hover:text-purple-400 transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  to="/micro-saas-services" 
                  className="text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium flex items-center"
                >
                  View All Micro SAAS
                  <ArrowRight className="w-3 h-3 ml-1" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Support */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <h4 className="text-lg font-semibold mb-6 mt-8">Support</h4>
            <ul className="space-y-3">
              {supportLinks.map((link, index) => (
                <li key={index}>
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

        {/* Contact Information */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-cyan-400" />
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <a href="mailto:kleber@ziontechgroup.com" className="text-white hover:text-cyan-400 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-green-400" />
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <a href="tel:+13024640950" className="text-white hover:text-green-400 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-purple-400" />
              <div>
                <p className="text-sm text-gray-400">Address</p>
                <p className="text-white">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-wrap gap-6 mb-4 md:mb-0">
              {legalLinks.map((link, index) => (
                <Link 
                  key={index}
                  to={link.path} 
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>© 2024 Zion Tech Group. All rights reserved.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
