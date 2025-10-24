'use client'

import React from 'react'
import { Link } from 'react-router-dom'
import { Facebook, Github, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react'

const Footer: React.FC = () => {
  const _currentYear = new Date().getFullYear()
  
  const _aiServices = [
    { name: 'AI Analytics & BI', url: '/ai-analytics', description: 'Business intelligence' },
    { name: 'AI Automation', url: '/ai-automation', description: 'Process automation' },
    { name: 'AI Chatbots & NLP', url: '/ai-chatbot-builder', description: 'Conversational AI' },
    { name: 'AI Content Generation', url: '/ai-content-generation', description: 'Automated content' },
    { name: 'AI Cybersecurity', url: '/ai-cybersecurity', description: 'AI security' },
    { name: 'Computer Vision', url: '/computer-vision', description: 'Image recognition' },
    { name: 'Predictive Analytics', url: '/predictive-analytics', description: 'Forecasting' },
    { name: 'Speech & Voice AI', url: '/ai-voice-assistant', description: 'Voice technology' }
  ]
  
  const _itServices = [
    { name: 'Web Development', url: '/web-development', description: 'Custom websites' },
    { name: 'Mobile Development', url: '/mobile-development', description: 'iOS & Android apps' },
    { name: 'Cloud Migration', url: '/cloud-migration', description: 'Cloud solutions' },
    { name: 'Cybersecurity', url: '/cybersecurity', description: 'Security services' },
    { name: 'DevOps', url: '/devops', description: 'Development operations' },
    { name: 'Data Analytics', url: '/data-analytics', description: 'Data insights' },
    { name: 'IoT Solutions', url: '/iot-solutions', description: 'Internet of Things' },
    { name: 'Blockchain', url: '/blockchain', description: 'Blockchain technology' }
  ]
  
  const _company = [
    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/team' },
    { name: 'Careers', url: '/careers' },
    { name: 'News', url: '/news' },
    { name: 'Contact', url: '/contact' }
  ]
  
  const _resources = [
    { name: 'Documentation', url: '/docs' },
    { name: 'API Reference', url: '/api' },
    { name: 'Tutorials', url: '/tutorials' },
    { name: 'Blog', url: '/blog' },
    { name: 'Support', url: '/support' }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <div className="text-xl font-bold">Zion Tech Group</div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading technology solutions provider helping businesses transform their digital
              presence with cutting-edge AI, cloud architecture and innovative development services.
            </p>
            <div className="flex space-x-4">
              <Link
                to="https://linkedin.com/company/ziontechgroup"
                className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                to="https://twitter.com/ziontechgroup"
                className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                to="https://github.com/ziontechgroup"
                className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </Link>
              <Link
                to="https://facebook.com/ziontechgroup"
                className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">AI Services</h3>
            <ul className="space-y-2">
              {_aiServices.slice(0, 6).map(service => (
                <li key={service.name}>
                  <Link to={service.url}>
                    <span className="text-gray-300 hover:text-white transition-colors">
                      {service.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">IT Services</h3>
            <ul className="space-y-2">
              {_itServices.slice(0, 6).map(service => (
                <li key={service.name}>
                  <Link to={service.url}>
                    <span className="text-gray-300 hover:text-white transition-colors">
                      {service.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {_company.map(item => (
                <li key={item.name}>
                  <Link to={item.url}>
                    <span className="text-gray-300 hover:text-white transition-colors">
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-blue-400" />
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="text-white">info@ziontechgroup.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-blue-400" />
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <p className="text-white">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-blue-400" />
              <div>
                <p className="text-sm text-gray-400">Address</p>
                <p className="text-white">123 Tech Street, Innovation City</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              &copy; {new Date().getFullYear()} Zion Tech Group. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/legal/privacy">
                <span className="text-gray-400 hover:text-white text-sm transition-colors">
                  Privacy Policy
                </span>
              </Link>
              <Link to="/legal/terms">
                <span className="text-gray-400 hover:text-white text-sm transition-colors">
                  Terms of Service
                </span>
              </Link>
              <Link to="/legal/cookies">
                <span className="text-gray-400 hover:text-white text-sm transition-colors">
                  Cookie Policy
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer