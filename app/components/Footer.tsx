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
  Target, 
  TrendingUp, 
  FileText, 
  MessageCircle, 
  Heart, 
  DollarSign, 
  Box, 
  Monitor, 
  Package, 
  Mic, 
  Workflow, 
  Eye, 
  Wifi, 
  MessageSquare, 
  ShoppingCart
} from 'lucide-react'

const Footer: React.FC = memo(() => {
  return (
    <footer className="bg-slate-900 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-white font-bold text-xl">Zion Tech Group</span>
            </div>
            <p className="text-gray-400 text-sm">
              Leading provider of enterprise AI solutions, quantum computing, autonomous systems, and digital transformation services.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Globe className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <MessageSquare className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Users className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/ai-services" className="text-gray-400 hover:text-white transition-colors text-sm">
                  AI Services
                </Link>
              </li>
              <li>
                <Link to="/it-services" className="text-gray-400 hover:text-white transition-colors text-sm">
                  IT Services
                </Link>
              </li>
              <li>
                <Link to="/cloud-services" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Cloud Services
                </Link>
              </li>
              <li>
                <Link to="/cybersecurity" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link to="/data-analytics" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Data Analytics
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/ai-solutions" className="text-gray-400 hover:text-white transition-colors text-sm">
                  AI Solutions
                </Link>
              </li>
              <li>
                <Link to="/cloud-solutions" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Cloud Solutions
                </Link>
              </li>
              <li>
                <Link to="/enterprise-solutions" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Enterprise Solutions
                </Link>
              </li>
              <li>
                <Link to="/digital-transformation" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Digital Transformation
                </Link>
              </li>
              <li>
                <Link to="/automation" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Automation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-gray-400" />
                <span className="text-gray-400 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-gray-400" />
                <span className="text-gray-400 text-sm">info@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-gray-400" />
                <span className="text-gray-400 text-sm">123 Tech Street, Silicon Valley, CA</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-gray-400" />
                <span className="text-gray-400 text-sm">Mon-Fri 9AM-6PM PST</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2024 Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-white transition-colors text-sm">
                Cookie Policy
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