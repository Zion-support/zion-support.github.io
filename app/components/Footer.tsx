'use client'
import React from 'react'
import { Link } from 'react-router-dom'
import { Zap, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Github, Sparkles, Brain, Cloud, Shield, Code, Users, BarChart3 } from 'lucide-react'
import { NeonText, NeonButton } from './NeonEffects'
import { allServices } from '../data/services'

export default function Footer() {
  const aiServices = allServices.filter(s => s.category === 'ai').slice(0, 4)
  const microSaasServices = allServices.filter(s => s.category === 'micro-saas').slice(0, 4)
  const itServices = allServices.filter(s => s.category === 'it').slice(0, 4)

  return (
    <footer className="bg-slate-900 border-t border-cyan-500/20 shadow-[0_0_30px_rgba(6,182,212,0.1)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 group">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(139,92,246,0.3)]">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                <NeonText intensity="low">Zion Tech Group</NeonText>
              </span>
            </div>
            <p className="text-gray-300 text-sm">
              Leading provider of AI and IT solutions for modern businesses. 
              We help companies transform their operations with cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com/ziontechgroup" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/ziontechgroup" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com/ziontechgroup" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* AI Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-cyan-400 flex items-center">
              <Sparkles className="w-4 h-4 mr-2" />
              AI Services
            </h3>
            <ul className="space-y-2">
              {aiServices.map((service) => (
                <li key={service.id}>
                  <Link to={service.path} className="text-gray-300 hover:text-cyan-400 transition-colors text-sm flex items-center group">
                    <Brain className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/ai-services" className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium">
                  View All AI Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Micro SAAS */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-purple-400 flex items-center">
              <Zap className="w-4 h-4 mr-2" />
              Micro SAAS
            </h3>
            <ul className="space-y-2">
              {microSaasServices.map((service) => (
                <li key={service.id}>
                  <Link to={service.path} className="text-gray-300 hover:text-purple-400 transition-colors text-sm flex items-center group">
                    <Users className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/micro-saas" className="text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium">
                  View All Micro SAAS →
                </Link>
              </li>
            </ul>
          </div>

          {/* IT Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-400 flex items-center">
              <Server className="w-4 h-4 mr-2" />
              IT Services
            </h3>
            <ul className="space-y-2">
              {itServices.map((service) => (
                <li key={service.id}>
                  <Link to={service.path} className="text-gray-300 hover:text-blue-400 transition-colors text-sm flex items-center group">
                    <Code className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/it-services" className="text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium">
                  View All IT Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white flex items-center">
              <Phone className="w-4 h-4 mr-2" />
              Contact Us
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 group">
                <Mail className="w-4 h-4 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center space-x-2 group">
                <Phone className="w-4 h-4 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                <a href="tel:+13024640950" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center space-x-2 group">
                <MapPin className="w-4 h-4 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                <span className="text-gray-300 text-sm">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </span>
              </div>
            </div>
            <div className="pt-4">
              <NeonButton 
                variant="primary" 
                size="sm"
                onClick={() => window.location.href = '/contact'}
                className="w-full"
              >
                Get Free Consultation
              </NeonButton>
            </div>
          </div>
        </div>

        <div className="border-t border-cyan-500/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Zion Tech Group. All rights reserved. | 
              <span className="text-cyan-400 ml-1">Transforming businesses with AI & IT solutions</span>
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}