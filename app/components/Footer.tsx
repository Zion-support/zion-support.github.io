'use client'
import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Zap, 
  Brain, 
  Cloud, 
  Code, 
  Users, 
  ArrowRight 
} from 'lucide-react'

const Footer: React.FC = memo(() => {
  const currentYear = new Date().getFullYear()
  
  const aiServices = [
    { name: 'AI Chatbots & NLP', url: '/ai-chatbot-builder', description: 'Conversational AI' },
    { name: 'AI Content Generation', url: '/ai-content-generation', description: 'Automated content' },
    { name: 'AI Data Analytics', url: '/ai-data-analytics', description: 'Intelligent insights' },
    { name: 'AI Automation', url: '/ai-automation', description: 'Process automation' },
    { name: 'AI Consulting', url: '/ai-consulting', description: 'Strategic guidance' },
    { name: 'AI Integration', url: '/ai-integration', description: 'Seamless integration' }
  ]

  const itServices = [
    { name: 'Cloud Infrastructure', url: '/cloud-infrastructure', description: 'Scalable cloud solutions' },
    { name: 'Web Development', url: '/web-development', description: 'Modern web applications' },
    { name: 'Mobile Development', url: '/mobile-development', description: 'Native & cross-platform' },
    { name: 'Cybersecurity', url: '/cybersecurity', description: 'Security solutions' },
    { name: 'Data Analytics', url: '/data-analytics', description: 'Business intelligence' },
    { name: 'DevOps & CI/CD', url: '/devops', description: 'Deployment automation' }
  ]

  const company = [
    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/team' },
    { name: 'Careers', url: '/careers' },
    { name: 'Press', url: '/press' },
    { name: 'Blog', url: '/blog' },
    { name: 'Case Studies', url: '/case-studies' }
  ]

  const support = [
    { name: 'Help Center', url: '/help' },
    { name: 'Documentation', url: '/docs' },
    { name: 'API Reference', url: '/api-docs' },
    { name: 'Community', url: '/community' },
    { name: 'Contact Support', url: '/contact' },
    { name: 'Status Page', url: '/status' }
  ]

  const contactInfo = [
    { icon: Phone, text: '+1 (555) 123-4567', href: 'tel:+15551234567' },
    { icon: Mail, text: 'info@ziontechgroup.com', href: 'mailto:info@ziontechgroup.com' },
    { icon: MapPin, text: '123 Tech Street, Innovation City', href: '#' },
    { icon: Clock, text: 'Mon-Fri 9AM-6PM EST', href: '#' }
  ]

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-cyan-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-xs">
              Leading provider of AI and IT solutions that transform businesses and drive innovation.
            </p>
            <div className="space-y-2">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                >
                  <info.icon className="w-4 h-4" />
                  <span className="text-sm">{info.text}</span>
                </a>
              ))}
            </div>
          </div>

          {/* AI Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">AI Services</h3>
            <ul className="space-y-2">
              {aiServices.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 block"
                  >
                    {service.name}
                  </Link>
                  <p className="text-xs text-gray-500 ml-0">{service.description}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">IT Services</h3>
            <ul className="space-y-2">
              {itServices.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 block"
                  >
                    {service.name}
                  </Link>
                  <p className="text-xs text-gray-500 ml-0">{service.description}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {company.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {support.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
            <p className="text-gray-300 mb-4">Get the latest news and updates from Zion Tech Group</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-l-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-600"
              />
              <button className="bg-cyan-600 text-white px-6 py-2 rounded-r-lg hover:bg-cyan-700 transition-colors duration-300 flex items-center">
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Zion Tech Group. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
})

Footer.displayName = 'Footer'

export default Footer