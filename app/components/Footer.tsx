import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Clock, Globe, Shield, Award, TrendingUp, Star, ArrowRight, CheckCircle } from 'lucide-react'

export default function Footer() {
  const aiServices = [
    { name: 'AI Content Generator Pro', path: '/ai-content-generator', price: '$29/mo' },
    { name: 'AI Chatbot Builder', path: '/ai-chatbot-builder', price: '$49/mo' },
    { name: 'AI Analytics Dashboard', path: '/ai-analytics-dashboard', price: '$79/mo' },
    { name: 'AI Email Assistant', path: '/ai-email-assistant', price: '$39/mo' },
    { name: 'AI Voice Assistant', path: '/ai-voice-assistant', price: '$79/mo' },
    { name: 'AI Automation Suite', path: '/ai-automation', price: '$99/mo' },
    { name: 'Machine Learning Platform', path: '/ai-ml-platform', price: '$199/mo' },
    { name: 'Computer Vision API', path: '/ai-computer-vision', price: '$99/mo' }
  ]

  const microSaasServices = [
    { name: 'AI Smart Calendar', path: '/ai-smart-calendar', price: '$19/mo' },
    { name: 'AI Expense Tracker', path: '/ai-expense-tracker', price: '$15/mo' },
    { name: 'AI Task Manager', path: '/ai-task-manager', price: '$9/mo' },
    { name: 'AI Password Manager', path: '/ai-password-manager', price: '$12/mo' },
    { name: 'AI Invoice Generator', path: '/ai-invoice-generator', price: '$15/mo' },
    { name: 'AI Health Tracker', path: '/ai-health-tracker', price: '$8/mo' }
  ]

  const itServices = [
    { name: 'Cloud Migration', path: '/cloud-migration', price: '$2,500/mo' },
    { name: 'Cybersecurity Suite', path: '/cybersecurity-solutions', price: '$1,800/mo' },
    { name: 'DevOps & CI/CD', path: '/devops-cicd', price: '$2,200/mo' },
    { name: 'Data Analytics Platform', path: '/data-analytics', price: '$1,500/mo' },
    { name: 'Mobile Development', path: '/mobile-development', price: '$3,000/mo' },
    { name: 'Infrastructure Management', path: '/infrastructure-management', price: '$1,200/mo' }
  ]

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'AI Services', path: '/ai-services' },
    { name: 'IT Services', path: '/it-services' },
    { name: 'Micro SaaS', path: '/micro-saas-services' },
    { name: '5G Implementation', path: '/5g-implementation' },
    { name: 'Cloud Services', path: '/cloud-services' },
    { name: 'Digital Transformation', path: '/digital-transformation' }
  ]

  const companyInfo = [
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
    { name: 'Cookie Policy', path: '/cookies' },
    { name: 'GDPR Compliance', path: '/gdpr' },
    { name: 'Security', path: '/security' },
    { name: 'Careers', path: '/careers' }
  ]

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5"></div>
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-lg">Z</span>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Leading provider of AI-powered solutions, enterprise IT services, and innovative micro SaaS applications. 
                We transform businesses with cutting-edge technology and drive digital transformation.
              </p>
              
              {/* Contact Information */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors">
                  <Phone className="w-5 h-5 mr-3 text-cyan-400" />
                  <a href="tel:+13024640950" className="hover:underline">+1 302 464 0950</a>
                </div>
                <div className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors">
                  <Mail className="w-5 h-5 mr-3 text-cyan-400" />
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:underline">kleber@ziontechgroup.com</a>
                </div>
                <div className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors">
                  <MapPin className="w-5 h-5 mr-3 text-cyan-400" />
                  <span>364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Clock className="w-5 h-5 mr-3 text-cyan-400" />
                  <span>24/7 Support Available</span>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center text-sm text-gray-400">
                  <Shield className="w-4 h-4 mr-2 text-green-400" />
                  <span>Enterprise Security</span>
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <Award className="w-4 h-4 mr-2 text-yellow-400" />
                  <span>Industry Certified</span>
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <TrendingUp className="w-4 h-4 mr-2 text-blue-400" />
                  <span>Proven Results</span>
                </div>
              </div>
            </div>

            {/* AI Services */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-cyan-400">AI Services</h3>
              <ul className="space-y-3">
                {aiServices.map((service) => (
                  <li key={service.name}>
                    <Link
                      to={service.path}
                      className="group flex items-center justify-between text-gray-300 hover:text-cyan-400 transition-colors"
                    >
                      <span className="group-hover:translate-x-1 transition-transform">{service.name}</span>
                      <div className="flex items-center">
                        <span className="text-xs text-gray-500 mr-2">{service.price}</span>
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Micro SaaS Services */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-purple-400">Micro SaaS</h3>
              <ul className="space-y-3">
                {microSaasServices.map((service) => (
                  <li key={service.name}>
                    <Link
                      to={service.path}
                      className="group flex items-center justify-between text-gray-300 hover:text-purple-400 transition-colors"
                    >
                      <span className="group-hover:translate-x-1 transition-transform">{service.name}</span>
                      <div className="flex items-center">
                        <span className="text-xs text-gray-500 mr-2">{service.price}</span>
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* IT Services & Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-blue-400">IT Services</h3>
              <ul className="space-y-3 mb-8">
                {itServices.map((service) => (
                  <li key={service.name}>
                    <Link
                      to={service.path}
                      className="group flex items-center justify-between text-gray-300 hover:text-blue-400 transition-colors"
                    >
                      <span className="group-hover:translate-x-1 transition-transform">{service.name}</span>
                      <div className="flex items-center">
                        <span className="text-xs text-gray-500 mr-2">{service.price}</span>
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
              
              <h3 className="text-lg font-bold mb-6 text-green-400">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="group flex items-center text-gray-300 hover:text-green-400 transition-colors"
                    >
                      <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                      <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-8 mb-12 border border-cyan-500/20">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Stay Updated with Latest Tech Trends
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Get exclusive insights, product updates, and industry news delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                />
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                  Subscribe
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-center">
              <div className="flex flex-col lg:flex-row items-center gap-4 mb-4 lg:mb-0">
                <p className="text-gray-400 text-sm">
                  © 2024 Zion Tech Group. All rights reserved.
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Globe className="w-4 h-4" />
                  <span>Global Technology Solutions</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-6">
                {companyInfo.map((info) => (
                  <Link 
                    key={info.name} 
                    to={info.path} 
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {info.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}