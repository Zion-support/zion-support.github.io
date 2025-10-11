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
  ArrowRight, 
  Shield, 
  BarChart, 
  Database, 
  Globe, 
  Smartphone, 
  Settings, 
  Calendar, 
  FileText, 
  MessageCircle, 
  Heart, 
  DollarSign, 
  Box, 
  Monitor, 
  Target, 
  TrendingUp, 
  CheckCircle, 
  Package, 
  Mic, 
  Workflow, 
  Eye, 
  Wifi, 
  MessageSquare, 
  ShoppingCart 
} from 'lucide-react'
import React, { memo } from 'react'
import { Phone, Mail, MapPin, Clock, Zap, Brain, Cloud, Code, Users, ArrowRight } from 'lucide-react'
const currentYear = new Date().getFullYear()
const aiServices = [
  { name: 'AI Chatbots & NLP', url: '/ai-chatbot-builder', description: 'Conversational AI' },
  { name: 'AI Content Generation', url: '/ai-content-generation', description: 'Automated content' },
  { name: 'AI Data Analytics', url: '/ai-data-analytics', description: 'Intelligent insights' },
  { name: 'AI Automation', url: '/ai-automation', description: 'Process automation' },
  { name: 'AI Computer Vision', url: '/ai-computer-vision', description: 'Image recognition' },
  { name: 'AI Voice Solutions', url: '/ai-voice-solutions', description: 'Speech processing' }
]
const itServices = [
  { name: 'Cloud Architecture', url: '/cloud-services', description: 'Scalable infrastructure' },
  { name: 'Web Development', url: '/web-development', description: 'Modern web apps' },
  { name: 'Mobile Development', url: '/mobile-development', description: 'iOS & Android' },
  { name: 'DevOps & CI/CD', url: '/devops', description: 'Deployment automation' },
  { name: 'API Development', url: '/api-development', description: 'RESTful services' },
  { name: 'Database Design', url: '/database-design', description: 'Data architecture' }
]
const companyLinks = [
  { name: 'About Us', url: '/about' },
  { name: 'Our Team', url: '/team' },
  { name: 'Careers', url: '/careers' },
  { name: 'Case Studies', url: '/case-studies' },
  { name: 'Blog', url: '/blog' },
  { name: 'Press Kit', url: '/press' }
]
const supportLinks = [
  { name: 'Documentation', url: '/docs' },
  { name: 'API Reference', url: '/api-docs' },
  { name: 'Support Center', url: '/support' },
  { name: 'Contact Us', url: '/contact' },
  { name: 'Status Page', url: '/status' },
  { name: 'Community', url: '/community' }
]

const Footer: React.FC = memo(() => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Zion Tech Group</h3>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading the future of AI and IT solutions. We help businesses transform their digital presence with cutting-edge technology and innovative development services.
            </p>
            <div className="flex space-x-4">
<a href="https://linkedin.com/company/ziontechgroup" className="text-gray-400 hover:text-white transition-colors">
                <Users className="w-5 h-5" />
              </a>
              <a href="https://github.com/ziontechgroup" className="text-gray-400 hover:text-white transition-colors">
                <Code className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/ziontechgroup" className="text-gray-400 hover:text-white transition-colors">
                <Cloud className="w-5 h-5" />
              </a>
            </div>
          </div>
          {/* Services */}
          <div>
<h4 className="text-lg font-semibold mb-4 flex items-center">
              <Brain className="w-5 h-5 mr-2 text-blue-400" />
              AI Services
            </h4>
            <ul className="space-y-3">
              {aiServices.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.url} 
                    className="text-gray-300 hover:text-white transition-colors group flex items-center"
                  >
                    <span className="group-hover:text-blue-400 transition-colors">{service.name}</span>
                    <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* IT Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center">
              <Cloud className="w-5 h-5 mr-2 text-purple-400" />
              IT Services
            </h4>
            <ul className="space-y-3">
              {itServices.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.url} 
                    className="text-gray-300 hover:text-white transition-colors group flex items-center"
                  >
                    <span className="group-hover:text-purple-400 transition-colors">{service.name}</span>
                    <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Company & Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/pricing" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/consultation" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                  Consultation
                </Link>
              </li>
              <li>
                <Link to="/demo" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                  Demo
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                  Support
                </Link>
              </li>
              <li>
                <Link to="/tutorials" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                  Tutorials
                </Link>
              </li>
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span className="text-gray-300 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span className="text-gray-300 text-sm">info@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span className="text-gray-300 text-sm">123 Tech Street, Silicon Valley, CA 94000</span>
              </div>
            </div>
          </div>
        </div>
{/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              &copy; {currentYear} Zion Tech Group. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
})

Footer.displayName = 'Footer'
export default Footer
