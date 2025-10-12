import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, ArrowRight, Zap, Sparkles, Rocket, Brain, Server, Cloud, Shield, Globe, Star } from 'lucide-react'

export default function Footer() {
  const microSAASServices = [
    { name: 'AI Content Generator Pro', path: '/ai-content-generator', price: '$29/mo', popular: true },
    { name: 'AI Code Assistant', path: '/ai-code-assistant', price: '$49/mo', popular: false },
    { name: 'Smart Analytics Dashboard', path: '/ai-analytics-dashboard', price: '$39/mo', popular: true },
    { name: 'AI Security Monitor', path: '/ai-cybersecurity-monitor', price: '$59/mo', popular: false },
    { name: 'AI Chatbot Builder', path: '/ai-chatbot-builder', price: '$19/mo', popular: true },
    { name: 'AI Marketing Automation', path: '/ai-marketing-automation', price: '$79/mo', popular: false }
  ]

  const itServices = [
    { name: 'Cloud Migration & Management', path: '/cloud-services', price: 'From $2,500/mo' },
    { name: 'Infrastructure as Code', path: '/it-services', price: 'From $1,800/mo' },
    { name: 'Cybersecurity Solutions', path: '/cybersecurity', price: 'From $3,200/mo' },
    { name: '5G Network Implementation', path: '/5g-implementation', price: 'From $5,000/mo' },
    { name: 'Digital Transformation', path: '/digital-transformation', price: 'Custom pricing' },
    { name: 'Data Analytics & BI', path: '/data-analytics', price: 'From $2,200/mo' }
  ]

  const companyLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Our Team', path: '/team' },
    { name: 'Careers', path: '/careers' },
    { name: 'Blog', path: '/blog' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Press Kit', path: '/press' }
  ]

  const supportLinks = [
    { name: 'Help Center', path: '/help' },
    { name: 'Documentation', path: '/docs' },
    { name: 'API Reference', path: '/api-docs' },
    { name: 'Status Page', path: '/status' },
    { name: 'Contact Support', path: '/contact' },
    { name: 'Community', path: '/community' }
  ]

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute w-64 h-64 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/25">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Zion Tech</h3>
                <p className="text-cyan-400 text-sm font-medium">AI & IT Solutions</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of AI-powered micro SAAS services, enterprise IT solutions, 
              cybersecurity, and digital transformation. Trusted by 200+ businesses worldwide.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors">
                <Phone className="w-4 h-4 mr-3 text-cyan-400" />
                <span className="font-semibold">+1 302 464 0950</span>
              </div>
              <div className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors">
                <Mail className="w-4 h-4 mr-3 text-cyan-400" />
                <span className="font-semibold">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors">
                <MapPin className="w-4 h-4 mr-3 text-cyan-400" />
                <span className="font-semibold">Middletown, DE 19709</span>
              </div>
            </div>

            <div className="flex space-x-4">
              <a href="https://linkedin.com/company/ziontechgroup" className="text-gray-400 hover:text-cyan-400 transition-colors group">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://twitter.com/ziontechgroup" className="text-gray-400 hover:text-cyan-400 transition-colors group">
                <span className="sr-only">Twitter</span>
                <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://github.com/ziontechgroup" className="text-gray-400 hover:text-cyan-400 transition-colors group">
                <span className="sr-only">GitHub</span>
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Micro SAAS Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <Rocket className="w-5 h-5 mr-2 text-cyan-400" />
              Micro SAAS Services
            </h3>
            <ul className="space-y-3">
              {microSAASServices.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.path} 
                    className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center justify-between group"
                  >
                    <div className="flex items-center">
                      <ArrowRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform" />
                      <span className="text-sm">{service.name}</span>
                      {service.popular && (
                        <Star className="w-3 h-3 ml-2 text-yellow-400" />
                      )}
                    </div>
                    <span className="text-cyan-400 text-xs font-semibold">{service.price}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <Server className="w-5 h-5 mr-2 text-emerald-400" />
              Enterprise IT Services
            </h3>
            <ul className="space-y-3">
              {itServices.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.path} 
                    className="text-gray-300 hover:text-emerald-400 transition-colors flex items-center justify-between group"
                  >
                    <div className="flex items-center">
                      <ArrowRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform" />
                      <span className="text-sm">{service.name}</span>
                    </div>
                    <span className="text-emerald-400 text-xs font-semibold">{service.price}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <Globe className="w-5 h-5 mr-2 text-purple-400" />
              Company & Support
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-semibold text-purple-400 mb-3">Company</h4>
                <ul className="space-y-2">
                  {companyLinks.map((link, index) => (
                    <li key={index}>
                      <Link 
                        to={link.path} 
                        className="text-gray-300 hover:text-purple-400 transition-colors text-sm flex items-center group"
                      >
                        <ArrowRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold text-purple-400 mb-3">Support</h4>
                <ul className="space-y-2">
                  {supportLinks.map((link, index) => (
                    <li key={index}>
                      <Link 
                        to={link.path} 
                        className="text-gray-300 hover:text-purple-400 transition-colors text-sm flex items-center group"
                      >
                        <ArrowRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-16 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                © 2024 Zion Tech Group. All rights reserved. | 
                <span className="ml-2 text-cyan-400">Privacy Policy</span> | 
                <span className="ml-2 text-cyan-400">Terms of Service</span>
              </p>
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span className="flex items-center">
                <Shield className="w-4 h-4 mr-2 text-green-400" />
                SOC2 Compliant
              </span>
              <span className="flex items-center">
                <Zap className="w-4 h-4 mr-2 text-yellow-400" />
                99.9% Uptime
              </span>
              <span className="flex items-center">
                <Star className="w-4 h-4 mr-2 text-yellow-400" />
                4.9/5 Rating
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}