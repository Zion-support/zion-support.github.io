'use client'
import React, {memo} from 'react'
import {Link} from 'react-router-dom'
import {Phone, 
  Mail, 
  MapPin, 
  Brain, 
  Cloud, 
  Code} from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Advanced AI and IT solutions for modern businesses. We help companies transform their operations with cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center text-gray-400">
                <Phone className="w-4 h-4 mr-2" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
            </div>
            <div className="flex items-center text-gray-400 mt-2">
              <Mail className="w-4 h-4 mr-2" />
              <span className="text-sm">info@ziontech.com</span>
            </div>
            <div className="flex items-center text-gray-400 mt-2">
              <MapPin className="w-4 h-4 mr-2" />
              <span className="text-sm">123 Tech Street, Innovation City</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/ai-solutions" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  AI Solutions
                </Link>
              </li>
              <li>
                <Link to="/cloud-services" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Cloud Services
                </Link>
              </li>
              <li>
                <Link to="/cybersecurity" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link to="/custom-development" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Custom Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/help" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/documentation" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link to="/status" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  System Status
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Zion Tech Group. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="/sla" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                SLA
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default memo(Footer)