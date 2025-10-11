import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, ArrowRight, Globe, Shield, Clock, Star, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-lg">Z</span>
                </div>
                <span className="text-2xl font-bold">Zion Tech Group</span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Leading provider of AI-powered solutions, IT services, and digital transformation for modern businesses. 
                Transform your business with cutting-edge technology.
              </p>
              <div className="flex space-x-4">
                <a href="https://facebook.com/ziontechgroup" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://twitter.com/ziontechgroup" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com/company/ziontechgroup" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://instagram.com/ziontechgroup" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-white">Our Services</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/ai-services" className="text-gray-300 hover:text-purple-400 transition-colors flex items-center group">
                    <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    AI Services
                  </Link>
                </li>
                <li>
                  <Link to="/it-services" className="text-gray-300 hover:text-purple-400 transition-colors flex items-center group">
                    <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    IT Services
                  </Link>
                </li>
                <li>
                  <Link to="/cloud-services" className="text-gray-300 hover:text-purple-400 transition-colors flex items-center group">
                    <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    Cloud Services
                  </Link>
                </li>
                <li>
                  <Link to="/micro-saas-services" className="text-gray-300 hover:text-purple-400 transition-colors flex items-center group">
                    <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    Micro SAAS
                  </Link>
                </li>
                <li>
                  <Link to="/digital-transformation" className="text-gray-300 hover:text-purple-400 transition-colors flex items-center group">
                    <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    Digital Transformation
                  </Link>
                </li>
                <li>
                  <Link to="/5g-implementation" className="text-gray-300 hover:text-purple-400 transition-colors flex items-center group">
                    <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    5G Implementation
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-white">Company</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/about" className="text-gray-300 hover:text-purple-400 transition-colors flex items-center group">
                    <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-300 hover:text-purple-400 transition-colors flex items-center group">
                    <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-gray-300 hover:text-purple-400 transition-colors flex items-center group">
                    <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    All Services
                  </Link>
                </li>
                <li>
                  <a href="https://ziontechgroup.com/blog" className="text-gray-300 hover:text-purple-400 transition-colors flex items-center group">
                    <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    Blog
                  </a>
                </li>
                <li>
                  <a href="https://ziontechgroup.com/careers" className="text-gray-300 hover:text-purple-400 transition-colors flex items-center group">
                    <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    Careers
                  </a>
                </li>
                <li>
                  <a href="https://ziontechgroup.com/privacy" className="text-gray-300 hover:text-purple-400 transition-colors flex items-center group">
                    <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-white">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300">Email</p>
                    <a href="mailto:kleber@ziontechgroup.com" className="text-white hover:text-purple-400 transition-colors">
                      kleber@ziontechgroup.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300">Phone</p>
                    <a href="tel:+13024640950" className="text-white hover:text-purple-400 transition-colors">
                      +1 302 464 0950
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300">Address</p>
                    <p className="text-white">
                      364 E Main St STE 1008<br />
                      Middletown, DE 19709
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Globe className="w-5 h-5 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300">Website</p>
                    <a href="https://ziontechgroup.com" className="text-white hover:text-purple-400 transition-colors">
                      ziontechgroup.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="border-t border-white/20 pt-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-center justify-center md:justify-start">
                <Shield className="w-6 h-6 text-green-400 mr-3" />
                <div>
                  <p className="text-white font-semibold">Enterprise Security</p>
                  <p className="text-gray-400 text-sm">Bank-level protection</p>
                </div>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <Clock className="w-6 h-6 text-blue-400 mr-3" />
                <div>
                  <p className="text-white font-semibold">24/7 Support</p>
                  <p className="text-gray-400 text-sm">Always here to help</p>
                </div>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <Star className="w-6 h-6 text-yellow-400 mr-3" />
                <div>
                  <p className="text-white font-semibold">99.9% Uptime</p>
                  <p className="text-gray-400 text-sm">Reliable service</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2024 Zion Tech Group. All rights reserved. | 
                <a href="https://ziontechgroup.com/terms" className="hover:text-white transition-colors ml-1">Terms of Service</a> | 
                <a href="https://ziontechgroup.com/privacy" className="hover:text-white transition-colors ml-1">Privacy Policy</a>
              </p>
              <div className="flex items-center space-x-6">
                <span className="text-gray-400 text-sm">Powered by AI & Innovation</span>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                  <span className="text-green-400 text-sm font-medium">All Systems Operational</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
