import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Brain, Cloud, Shield, Database, Code, Smartphone } from 'lucide-react'

export default function Footer() {
  const services = [
    { name: 'AI Services', href: '/ai-services', icon: <Brain className="w-4 h-4" /> },
    { name: 'IT Services', href: '/it-services', icon: <Code className="w-4 h-4" /> },
    { name: 'Micro SaaS', href: '/micro-saas-services', icon: <Smartphone className="w-4 h-4" /> },
    { name: 'Cloud Services', href: '/cloud-services', icon: <Cloud className="w-4 h-4" /> },
    { name: '5G Implementation', href: '/5g-implementation', icon: <Database className="w-4 h-4" /> },
    { name: 'Digital Transformation', href: '/digital-transformation', icon: <Shield className="w-4 h-4" /> }
  ]

  return (
    <footer className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-cyber-grid opacity-20"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of AI-powered solutions, IT services, and digital transformation for modern businesses.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-cyan-400">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    to={service.href} 
                    className="flex items-center text-gray-400 hover:text-purple-400 transition-all duration-300 hover:translate-x-1"
                  >
                    {service.icon}
                    <span className="ml-2">{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-cyan-400">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-purple-400 transition-all duration-300 hover:translate-x-1 block">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-purple-400 transition-all duration-300 hover:translate-x-1 block">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-cyan-400">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-purple-400 mr-3" />
                <span className="text-gray-300">+1 (302) 464-0950</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-purple-400 mr-3" />
                <span className="text-gray-300">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-purple-400 mr-3 mt-1" />
                <span className="text-gray-300">
                  364 E Main St STE 1008<br />
                  Middletown, DE 19709
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Zion Tech Group. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
