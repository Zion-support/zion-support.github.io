'use client'
import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Brain, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Github, 
  Youtube, 
  ArrowRight, 
  CheckCircle, 
  Shield, 
  Zap, 
  Target, 
  BarChart, 
  Settings, 
  HelpCircle, 
  Star, 
  Award, 
  TrendingUp, 
  Lightbulb, 
  Code, 
  Database, 
  Cloud, 
  Smartphone, 
  Monitor, 
  Server, 
  Lock, 
  Key, 
  Wifi, 
  MessageSquare, 
  ShoppingCart} from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <>
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
              <p className="text-gray-300 mb-6 max-w-md">
                Leading provider of AI and IT solutions, empowering businesses with cutting-edge technology and innovative approaches to digital transformation.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* AI Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4">AI Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/ai-analytics" className="text-gray-300 hover:text-white transition-colors">
                    AI Analytics
                  </Link>
                </li>
                <li>
                  <Link to="/ai-automation" className="text-gray-300 hover:text-white transition-colors">
                    AI Automation
                  </Link>
                </li>
                <li>
                  <Link to="/ai-content-generation" className="text-gray-300 hover:text-white transition-colors">
                    Content Generation
                  </Link>
                </li>
                <li>
                  <Link to="/ai-customer-support" className="text-gray-300 hover:text-white transition-colors">
                    Customer Support
                  </Link>
                </li>
                <li>
                  <Link to="/ai-services" className="text-gray-300 hover:text-white transition-colors">
                    View All AI Services
                  </Link>
                </li>
              </ul>
            </div>

            {/* IT Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4">IT Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/cloud-services" className="text-gray-300 hover:text-white transition-colors">
                    Cloud Services
                  </Link>
                </li>
                <li>
                  <Link to="/cybersecurity" className="text-gray-300 hover:text-white transition-colors">
                    Cybersecurity
                  </Link>
                </li>
                <li>
                  <Link to="/devops" className="text-gray-300 hover:text-white transition-colors">
                    DevOps
                  </Link>
                </li>
                <li>
                  <Link to="/data-analytics" className="text-gray-300 hover:text-white transition-colors">
                    Data Analytics
                  </Link>
                </li>
                <li>
                  <Link to="/it-services" className="text-gray-300 hover:text-white transition-colors">
                    View All IT Services
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/careers" className="text-gray-300 hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="text-gray-300 hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/case-studies" className="text-gray-300 hover:text-white transition-colors">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="border-t border-gray-700 mt-12 pt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-cyan-400" />
                <span className="text-gray-300">info@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-cyan-400" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-cyan-400" />
                <span className="text-gray-300">San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Zion Tech Group. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer