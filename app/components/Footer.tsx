import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, ArrowRight, Star, Sparkles, Globe, Shield, Database, Code, Cloud, Smartphone, Brain, Cpu, Network, Layers } from 'lucide-react'

export default function Footer() {
  const microSAASServices = [
    { name: 'AI Content Generator', href: '/ai-content-generator', icon: Brain },
    { name: 'CyberGuard Security', href: '/cybersecurity-suite', icon: Shield },
    { name: 'DataViz Analytics', href: '/analytics-platform', icon: Database },
    { name: 'CloudOps Management', href: '/cloud-management', icon: Cloud },
    { name: 'DevOps Automation', href: '/devops-automation', icon: Code },
    { name: 'API Gateway Pro', href: '/api-gateway', icon: Network }
  ]

  const aiServices = [
    { name: 'AI Chatbot Enterprise', href: '/ai-chatbot-enterprise', icon: Brain },
    { name: 'Computer Vision', href: '/computer-vision-solutions', icon: Cpu },
    { name: 'ML Platform', href: '/machine-learning-platform', icon: Layers }
  ]

  const itServices = [
    { name: 'Cybersecurity Consulting', href: '/cybersecurity-consulting', icon: Shield },
    { name: 'Database Management', href: '/database-management', icon: Database },
    { name: 'Network Infrastructure', href: '/network-infrastructure', icon: Network }
  ]

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center mr-3 shadow-lg">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Zion Tech Group</span>
                <div className="text-sm text-gray-400 font-medium">AI & IT Solutions</div>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of AI-powered solutions, IT services, and digital transformation for modern businesses. 
              <span className="text-cyan-400 font-semibold"> Real solutions. Real results.</span>
            </p>
            <div className="flex space-x-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">500+</div>
                <div className="text-xs text-gray-400">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">50+</div>
                <div className="text-xs text-gray-400">Services</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-pink-400">24/7</div>
                <div className="text-xs text-gray-400">Support</div>
              </div>
            </div>
          </div>

          {/* Micro SAAS Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-cyan-400 flex items-center">
              <Smartphone className="w-5 h-5 mr-2" />
              Micro SAAS
            </h3>
            <ul className="space-y-3">
              {microSAASServices.map((service) => {
                const IconComponent = service.icon
                return (
                  <li key={service.href}>
                    <Link 
                      to={service.href} 
                      className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center group"
                    >
                      <IconComponent className="w-4 h-4 mr-2 text-gray-500 group-hover:text-cyan-400 transition-colors" />
                      {service.name}
                      <ArrowRight className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* AI Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-purple-400 flex items-center">
              <Brain className="w-5 h-5 mr-2" />
              AI Services
            </h3>
            <ul className="space-y-3">
              {aiServices.map((service) => {
                const IconComponent = service.icon
                return (
                  <li key={service.href}>
                    <Link 
                      to={service.href} 
                      className="text-gray-300 hover:text-purple-400 transition-colors flex items-center group"
                    >
                      <IconComponent className="w-4 h-4 mr-2 text-gray-500 group-hover:text-purple-400 transition-colors" />
                      {service.name}
                      <ArrowRight className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* IT Services & Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-pink-400 flex items-center">
              <Code className="w-5 h-5 mr-2" />
              IT Services
            </h3>
            <ul className="space-y-3 mb-6">
              {itServices.map((service) => {
                const IconComponent = service.icon
                return (
                  <li key={service.href}>
                    <Link 
                      to={service.href} 
                      className="text-gray-300 hover:text-pink-400 transition-colors flex items-center group"
                    >
                      <IconComponent className="w-4 h-4 mr-2 text-gray-500 group-hover:text-pink-400 transition-colors" />
                      {service.name}
                      <ArrowRight className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                )
              })}
            </ul>
            
            <div>
              <h4 className="text-sm font-semibold mb-4 text-gray-300">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-center group">
                  <Mail className="w-4 h-4 text-cyan-400 mr-3 group-hover:text-cyan-300 transition-colors" />
                  <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="flex items-center group">
                  <Phone className="w-4 h-4 text-purple-400 mr-3 group-hover:text-purple-300 transition-colors" />
                  <a href="tel:+13024640950" className="text-gray-300 hover:text-purple-400 transition-colors text-sm">
                    +1 302 464 0950
                  </a>
                </div>
                <div className="flex items-start group">
                  <MapPin className="w-4 h-4 text-pink-400 mr-3 mt-0.5 group-hover:text-pink-300 transition-colors" />
                  <span className="text-gray-300 text-sm">
                    364 E Main St STE 1008<br />
                    Middletown DE 19709
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Zion Tech Group. All rights reserved.
            </p>
            <div className="flex items-center mt-4 md:mt-0">
              <span className="text-gray-400 text-sm mr-4">Powered by</span>
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-yellow-400" />
                <span className="text-cyan-400 font-semibold text-sm">AI Technology</span>
                <Sparkles className="w-4 h-4 text-purple-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
