import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mr-2">
                <span className="text-white font-bold text-sm">Z</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 mb-4">
              Leading provider of AI-powered solutions, IT services, and digital transformation for modern businesses.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-gradient-purple-pink">AI Services</h3>
            <ul className="space-y-2">
              <li><Link to="/ai-chatbot-enterprise" className="text-gray-300 hover:text-purple-300 transition-colors">AI Chatbot Enterprise</Link></li>
              <li><Link to="/ai-cybersecurity-suite" className="text-gray-300 hover:text-purple-300 transition-colors">AI Cybersecurity Suite</Link></li>
              <li><Link to="/ai-cloud-infrastructure" className="text-gray-300 hover:text-purple-300 transition-colors">AI Cloud Infrastructure</Link></li>
              <li><Link to="/ai-content-generator" className="text-gray-300 hover:text-purple-300 transition-colors">AI Content Generator</Link></li>
              <li><Link to="/ai-analytics-dashboard" className="text-gray-300 hover:text-purple-300 transition-colors">AI Analytics Dashboard</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-gradient-blue-cyan">IT Services</h3>
            <ul className="space-y-2">
              <li><Link to="/it-infrastructure-management" className="text-gray-300 hover:text-blue-300 transition-colors">IT Infrastructure Management</Link></li>
              <li><Link to="/it-services" className="text-gray-300 hover:text-blue-300 transition-colors">IT Services</Link></li>
              <li><Link to="/cloud-services" className="text-gray-300 hover:text-blue-300 transition-colors">Cloud Services</Link></li>
              <li><Link to="/micro-saas-services" className="text-gray-300 hover:text-blue-300 transition-colors">Micro SAAS</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-gradient-green-blue">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-green-300 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-green-300 transition-colors">Contact</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-green-300 transition-colors">All Services</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-gradient-purple-pink">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center group">
                <Mail className="w-4 h-4 text-purple-400 mr-2 group-hover:text-purple-300 transition-colors" />
                <span className="text-gray-300 group-hover:text-white transition-colors">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center group">
                <Phone className="w-4 h-4 text-purple-400 mr-2 group-hover:text-purple-300 transition-colors" />
                <span className="text-gray-300 group-hover:text-white transition-colors">+1 302 464 0950</span>
              </div>
              <div className="flex items-center group">
                <MapPin className="w-4 h-4 text-purple-400 mr-2 group-hover:text-purple-300 transition-colors" />
                <span className="text-gray-300 group-hover:text-white transition-colors">364 E Main St STE 1008 Middletown DE 19709</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-purple-400/20 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 Zion Tech Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
