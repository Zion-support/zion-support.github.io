import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Sparkles, ArrowRight, Star } from 'lucide-react';

export default function Footer() {
  const services = [
    { name: 'AI Content Generator Pro', href: '/micro-saas-services/ai-content-generator' },
    { name: 'Analytics Dashboard Pro', href: '/micro-saas-services/ai-analytics-dashboard' },
    { name: 'AI Lead Generation Suite', href: '/micro-saas-services/ai-lead-generation' },
    { name: 'AI Chatbot Builder', href: '/micro-saas-services/ai-chatbot-builder' },
    { name: 'Cloud Migration Services', href: '/cloud-migration-services' },
    { name: 'Cybersecurity Solutions', href: '/cybersecurity-solutions' },
    { name: '5G Implementation', href: '/5g-implementation' },
    { name: 'Custom Development', href: '/custom-development' }
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
    { name: 'AI Services', href: '/ai-services' },
    { name: 'IT Services', href: '/it-services' }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/5 rounded-full blur-2xl animate-pulse delay-2000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-500/25">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Advanced AI and IT solutions for modern businesses. We help companies leverage cutting-edge technology to achieve their goals and drive digital transformation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 p-2 rounded-lg hover:bg-white/10">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 p-2 rounded-lg hover:bg-white/10">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 p-2 rounded-lg hover:bg-white/10">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white flex items-center">
              <Sparkles className="w-5 h-5 mr-2 text-cyan-400" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href} 
                    className="text-gray-400 hover:text-cyan-300 transition-colors duration-300 text-sm flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white flex items-center">
              <Star className="w-5 h-5 mr-2 text-purple-400" />
              Popular Services
            </h3>
            <ul className="space-y-3">
              {services.slice(0, 6).map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.href} 
                    className="text-gray-400 hover:text-purple-300 transition-colors duration-300 text-sm flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white flex items-center">
              <Phone className="w-5 h-5 mr-2 text-green-400" />
              Contact Info
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <Mail className="w-5 h-5 text-cyan-400 mt-0.5 group-hover:text-cyan-300 transition-colors duration-300" />
                <div>
                  <span className="text-gray-400 text-sm block">Email</span>
                  <a href="mailto:kleber@ziontechgroup.com" className="text-white hover:text-cyan-300 transition-colors duration-300 text-sm">
                    kleber@ziontechgroup.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3 group">
                <Phone className="w-5 h-5 text-green-400 mt-0.5 group-hover:text-green-300 transition-colors duration-300" />
                <div>
                  <span className="text-gray-400 text-sm block">Phone</span>
                  <a href="tel:+13024640950" className="text-white hover:text-green-300 transition-colors duration-300 text-sm">
                    +1 302 464 0950
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3 group">
                <MapPin className="w-5 h-5 text-purple-400 mt-0.5 group-hover:text-purple-300 transition-colors duration-300" />
                <div>
                  <span className="text-gray-400 text-sm block">Address</span>
                  <span className="text-white text-sm">
                    364 E Main St STE 1008<br />
                    Middletown DE 19709
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-8 mb-12 border border-cyan-400/20">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center justify-center">
              <Sparkles className="w-6 h-6 mr-2 text-cyan-400" />
              Stay Updated
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Get the latest updates on our AI and IT solutions, industry insights, and exclusive offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
              />
              <button className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Zion Tech Group. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-cyan-300 transition-colors duration-300 text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-300 transition-colors duration-300 text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-300 transition-colors duration-300 text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}