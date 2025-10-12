import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, ArrowRight, Brain, Smartphone, Cpu, Globe, Zap } from 'lucide-react'

export default function Footer() {
  const aiServices = [
    { name: 'AI Content Generator', path: '/ai-content-generation' },
    { name: 'AI Chatbot Builder', path: '/ai-chatbot-builder' },
    { name: 'AI Meeting Assistant', path: '/ai-meeting-assistant' },
    { name: 'AI Project Manager', path: '/ai-project-manager' },
    { name: 'AI Customer Support Bot', path: '/ai-customer-support-bot' }
  ]

  const itServices = [
    { name: 'Cloud Migration', path: '/cloud-services' },
    { name: 'Cybersecurity Solutions', path: '/it-services' },
    { name: 'DevOps & CI/CD', path: '/it-services' },
    { name: 'Data Analytics', path: '/it-services' },
    { name: 'Mobile Development', path: '/it-services' }
  ]

  const microSaasServices = [
    { name: 'Business Intelligence', path: '/business-intelligence' },
    { name: 'Project Management', path: '/micro-saas-services' },
    { name: 'Customer Analytics', path: '/micro-saas-services' },
    { name: 'Workflow Automation', path: '/micro-saas-services' }
  ]

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'AI Services', path: '/ai-services' },
    { name: 'IT Services', path: '/it-services' },
    { name: 'Micro SaaS', path: '/micro-saas-services' },
    { name: '5G Solutions', path: '/5g-implementation' },
    { name: 'Contact', path: '/contact' }
  ]

  return (
    <footer className="bg-black/40 backdrop-blur-md border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-white font-bold text-xl">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-sm">
              Leading provider of AI and IT solutions. We help businesses transform with cutting-edge technology.
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
            <h3 className="text-white font-semibold mb-4 flex items-center">
              <Brain className="w-5 h-5 mr-2 text-purple-400" />
              AI Services
            </h3>
            <ul className="space-y-2">
              {aiServices.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.path} 
                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center"
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
            <h3 className="text-white font-semibold mb-4 flex items-center">
              <Cpu className="w-5 h-5 mr-2 text-green-400" />
              IT Services
            </h3>
            <ul className="space-y-2">
              {itServices.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.path} 
                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center"
                  >
                    <ArrowRight className="w-3 h-3 mr-2" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 flex items-center">
              <Globe className="w-5 h-5 mr-2 text-blue-400" />
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center"
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
        <div className="border-t border-white/10 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center">
              <Mail className="w-5 h-5 text-purple-400 mr-3" />
              <div>
                <div className="text-white font-medium">Email</div>
                <div className="text-gray-300">contact@ziontechgroup.com</div>
              </div>
            </div>
            <div className="flex items-center">
              <Phone className="w-5 h-5 text-green-400 mr-3" />
              <div>
                <div className="text-white font-medium">Phone</div>
                <div className="text-gray-300">+1 (555) 123-4567</div>
              </div>
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 text-blue-400 mr-3" />
              <div>
                <div className="text-white font-medium">Location</div>
                <div className="text-gray-300">San Francisco, CA</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-300 text-sm">
            © 2024 Zion Tech Group. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-300 hover:text-white text-sm transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-300 hover:text-white text-sm transition-colors duration-200">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-gray-300 hover:text-white text-sm transition-colors duration-200">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}