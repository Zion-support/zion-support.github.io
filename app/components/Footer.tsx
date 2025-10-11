import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight, 
  Sparkles, 
  Brain, 
  Zap, 
  Code, 
  Cloud, 
  Wifi, 
  Server,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Github,
  Globe
} from 'lucide-react'

export default function Footer() {
  const services = [
    { name: 'AI Services', href: '/ai-services', icon: Brain },
    { name: 'Micro SAAS', href: '/micro-saas-services', icon: Zap },
    { name: 'IT Services', href: '/it-services', icon: Code },
    { name: 'Cloud Services', href: '/cloud-services', icon: Cloud },
    { name: '5G Implementation', href: '/5g-implementation', icon: Wifi },
    { name: 'Digital Transformation', href: '/digital-transformation', icon: Server }
  ]

  const specialServices = [
    { name: 'AI Quantum Financial Oracle', href: '/ai-quantum-financial-oracle', badge: 'NEW' },
    { name: 'AI Holographic Workspace', href: '/ai-holographic-workspace', badge: 'FUTURE' },
    { name: 'AI Telepathic Interface', href: '/ai-telepathic-interface', badge: 'EXPERIMENTAL' }
  ]

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Press', href: '/press' },
    { name: 'Blog', href: '/blog' }
  ]

  const support = [
    { name: 'Help Center', href: '/help' },
    { name: 'Documentation', href: '/docs' },
    { name: 'API Reference', href: '/api' },
    { name: 'Status', href: '/status' },
    { name: 'Contact Support', href: '/contact' }
  ]

  const socialLinks = [
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github }
  ]

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 border-t border-white/10">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 group mb-6">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                  Zion Tech Group
                </h3>
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  Future Technology Solutions
                </p>
              </div>
            </Link>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Pioneering the future of technology with cutting-edge AI, quantum computing, 
              and innovative micro SAAS solutions that transform businesses worldwide.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300 hover:text-blue-300 transition-colors duration-300">
                <Phone className="w-4 h-4 text-blue-400" />
                <a href="tel:+13024640950" className="text-sm">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 hover:text-blue-300 transition-colors duration-300">
                <Mail className="w-4 h-4 text-blue-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="text-sm">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-start space-x-3 text-gray-300">
                <MapPin className="w-4 h-4 text-blue-400 mt-0.5" />
                <div className="text-sm">
                  <div>364 E Main St STE 1008</div>
                  <div>Middletown, DE 19709</div>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-6 flex items-center">
              <Zap className="w-5 h-5 mr-2 text-blue-400" />
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.href}
                    className="flex items-center space-x-2 text-gray-300 hover:text-blue-300 transition-colors duration-300 group"
                  >
                    <service.icon className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-sm">{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Special Services */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <h5 className="text-white font-medium mb-4 flex items-center">
                <Sparkles className="w-4 h-4 mr-2 text-yellow-400" />
                Specialized Solutions
              </h5>
              <ul className="space-y-2">
                {specialServices.map((service, index) => (
                  <li key={index}>
                    <Link 
                      to={service.href}
                      className="flex items-center justify-between text-gray-300 hover:text-blue-300 transition-colors duration-300 group"
                    >
                      <span className="text-sm">{service.name}</span>
                      <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                        {service.badge}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-6 flex items-center">
              <Globe className="w-5 h-5 mr-2 text-green-400" />
              Company
            </h4>
            <ul className="space-y-3">
              {company.map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item.href}
                    className="text-gray-300 hover:text-blue-300 transition-colors duration-300 text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-6 flex items-center">
              <Brain className="w-5 h-5 mr-2 text-purple-400" />
              Support
            </h4>
            <ul className="space-y-3">
              {support.map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item.href}
                    className="text-gray-300 hover:text-blue-300 transition-colors duration-300 text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <h5 className="text-white font-medium mb-4">Follow Us</h5>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-gray-300 hover:text-blue-300 hover:bg-blue-500/20 transition-all duration-300 group"
                  >
                    <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-white/20">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-2">
                Stay Updated with Future Tech
              </h3>
              <p className="text-gray-300 mb-6">
                Get the latest insights on AI, quantum computing, and cutting-edge technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group">
                  Subscribe
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Zion Tech Group. All rights reserved. | 
              <a href="https://ziontechgroup.com" className="hover:text-blue-300 transition-colors duration-300 ml-1">
                ziontechgroup.com
              </a>
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-blue-300 transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-blue-300 transition-colors duration-300">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-blue-300 transition-colors duration-300">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
