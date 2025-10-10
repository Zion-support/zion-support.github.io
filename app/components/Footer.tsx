'use client'
import React, { memo } from 'react';
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

const Footer: React.FC = memo(() => {
  return (
    <footer className="bg-slate-900 border-t border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-white font-bold text-xl">Zion Tech Group</span>
            </div>
            <p className="text-gray-400 text-sm">
              Advanced AI and IT Solutions for the future of business.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/about" className="block text-gray-400 hover:text-cyan-400 transition-colors">
                About
              </Link>
              <Link to="/services" className="block text-gray-400 hover:text-cyan-400 transition-colors">
                Services
              </Link>
              <Link to="/pricing" className="block text-gray-400 hover:text-cyan-400 transition-colors">
                Pricing
              </Link>
              <Link to="/contact" className="block text-gray-400 hover:text-cyan-400 transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Services</h3>
            <div className="space-y-2">
              <Link to="/ai-services" className="block text-gray-400 hover:text-cyan-400 transition-colors">
                AI Services
              </Link>
              <Link to="/it-services" className="block text-gray-400 hover:text-cyan-400 transition-colors">
                IT Services
              </Link>
              <Link to="/micro-saas" className="block text-gray-400 hover:text-cyan-400 transition-colors">
                Micro SaaS
              </Link>
              <Link to="/consultation" className="block text-gray-400 hover:text-cyan-400 transition-colors">
                Consultation
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span className="text-gray-400 text-sm">(302) 464-0950</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span className="text-gray-400 text-sm">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-cyan-400" />
                <span className="text-gray-400 text-sm">Mon-Fri 9AM-6PM EST</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Zion Tech Group. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
})

Footer.displayName = 'Footer'

export default Footer