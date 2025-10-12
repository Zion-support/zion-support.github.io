import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Globe, Twitter, Linkedin, Github, Zap, Brain, Cpu, Rocket, Shield, Network, BarChart3, Bot } from 'lucide-react'

export default function Footer() {
  const services = [
    { name: 'AI Services', href: '/ai-services', icon: <Brain className="w-4 h-4" /> },
    { name: 'IT Services', href: '/it-services', icon: <Cpu className="w-4 h-4" /> },
    { name: 'Micro SaaS', href: '/micro-saas-services', icon: <Rocket className="w-4 h-4" /> },
    { name: 'Cloud Services', href: '/cloud-services', icon: <Globe className="w-4 h-4" /> },
    { name: '5G Implementation', href: '/5g-implementation', icon: <Network className="w-4 h-4" /> },
    { name: 'Cybersecurity', href: '/cybersecurity', icon: <Shield className="w-4 h-4" /> },
    { name: 'Analytics', href: '/analytics', icon: <BarChart3 className="w-4 h-4" /> },
    { name: 'Automation', href: '/automation', icon: <Bot className="w-4 h-4" /> }
  ]

  return (
    <footer className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-cyber-grid opacity-20"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                Zion Tech Group
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Leading provider of AI-powered solutions, cybersecurity, cloud services, and digital transformation. 
                Transforming businesses with cutting-edge technology.
              </p>
              <div className="flex space-x-4">
                <a href="https://twitter.com/ziontechgroup" className="text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110" target="_blank" rel="noopener noreferrer">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="https://linkedin.com/company/ziontechgroup" className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="https://github.com/ziontechgroup" className="text-gray-400 hover:text-purple-400 transition-all duration-300 hover:scale-110" target="_blank" rel="noopener noreferrer">
                  <Github className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-cyan-400 flex items-center">
              <Zap className="w-5 h-5 mr-2" />
              Services
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {services.map((service, index) => (
                <Link
                  key={index}
                  to={service.href}
                  className="flex items-center text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:translate-x-1 group"
                >
                  <div className="text-cyan-400 mr-2 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <span className="text-sm">{service.name}</span>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-purple-400 flex items-center">
              <Globe className="w-5 h-5 mr-2" />
              Company
            </h3>
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
              <li>
                <a href="https://ziontechgroup.com/careers" className="text-gray-400 hover:text-purple-400 transition-all duration-300 hover:translate-x-1 block" target="_blank" rel="noopener noreferrer">
                  Careers
                </a>
              </li>
              <li>
                <a href="https://ziontechgroup.com/blog" className="text-gray-400 hover:text-purple-400 transition-all duration-300 hover:translate-x-1 block" target="_blank" rel="noopener noreferrer">
                  Blog
                </a>
              </li>
              <li>
                <a href="https://ziontechgroup.com/privacy" className="text-gray-400 hover:text-purple-400 transition-all duration-300 hover:translate-x-1 block" target="_blank" rel="noopener noreferrer">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-pink-400 flex items-center">
              <MapPin className="w-5 h-5 mr-2" />
              Contact Info
            </h3>
            <div className="space-y-4">
              <div className="flex items-start group">
                <Mail className="w-5 h-5 text-pink-400 mr-3 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-pink-400 transition-colors duration-300 block">
                    kleber@ziontechgroup.com
                  </a>
                  <p className="text-xs text-gray-500 mt-1">Primary Contact</p>
                </div>
              </div>
              <div className="flex items-start group">
                <Phone className="w-5 h-5 text-pink-400 mr-3 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <a href="tel:+13024640950" className="text-gray-300 hover:text-pink-400 transition-colors duration-300 block">
                    +1 302 464 0950
                  </a>
                  <p className="text-xs text-gray-500 mt-1">24/7 Support</p>
                </div>
              </div>
              <div className="flex items-start group">
                <MapPin className="w-5 h-5 text-pink-400 mr-3 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <span className="text-gray-300 block">
                    364 E Main St STE 1008<br />
                    Middletown, DE 19709
                  </span>
                  <p className="text-xs text-gray-500 mt-1">Headquarters</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-purple-500/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-gray-400 text-sm">
                © 2024 Zion Tech Group. All rights reserved.
              </p>
              <div className="flex items-center space-x-4 text-xs text-gray-500">
                <span>Powered by AI</span>
                <span>•</span>
                <span>Built with React</span>
                <span>•</span>
                <span>Deployed on Cloud</span>
              </div>
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="https://ziontechgroup.com/privacy" className="text-gray-400 hover:text-cyan-400 text-sm transition-all duration-300 hover:translate-y-[-2px]" target="_blank" rel="noopener noreferrer">
                Privacy Policy
              </a>
              <a href="https://ziontechgroup.com/terms" className="text-gray-400 hover:text-purple-400 text-sm transition-all duration-300 hover:translate-y-[-2px]" target="_blank" rel="noopener noreferrer">
                Terms of Service
              </a>
              <a href="https://ziontechgroup.com/sitemap" className="text-gray-400 hover:text-pink-400 text-sm transition-all duration-300 hover:translate-y-[-2px]" target="_blank" rel="noopener noreferrer">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}