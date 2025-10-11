import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Github, ArrowRight } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const services = [
    { name: 'AI Services', href: '/ai-services' },
    { name: 'IT Services', href: '/it-services' },
    { name: 'Micro SaaS', href: '/micro-saas-services' },
    { name: 'Cloud Services', href: '/cloud-services' },
    { name: '5G Implementation', href: '/5g-implementation' },
    { name: 'Digital Transformation', href: '/digital-transformation' }
  ]

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Blog', href: '/blog' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Partners', href: '/partners' }
  ]

  const support = [
    { name: 'Contact Us', href: '/contact' },
    { name: 'Help Center', href: '/help' },
    { name: 'Documentation', href: '/docs' },
    { name: 'API Reference', href: '/api' },
    { name: 'Status Page', href: '/status' },
    { name: 'System Requirements', href: '/requirements' }
  ]

  const legal = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'GDPR Compliance', href: '/gdpr' },
    { name: 'Security', href: '/security' },
    { name: 'SLA', href: '/sla' }
  ]

  const socialLinks = [
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github }
  ]

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">Z</span>
                </div>
                <span className="text-2xl font-bold text-white">Zion Tech Group</span>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Leading provider of AI and IT solutions. We transform businesses with cutting-edge technology, 
                innovative micro SaaS applications, and comprehensive digital services.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <Phone className="w-5 h-5 mr-3 text-purple-400" />
                  <a href="tel:+13024640950" className="hover:text-white transition-colors">
                    +1 302 464 0950
                  </a>
                </div>
                <div className="flex items-center text-gray-300">
                  <Mail className="w-5 h-5 mr-3 text-purple-400" />
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:text-white transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="flex items-start text-gray-300">
                  <MapPin className="w-5 h-5 mr-3 mt-1 text-purple-400 flex-shrink-0" />
                  <span>
                    364 E Main St STE 1008<br />
                    Middletown DE 19709
                  </span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 mt-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-purple-600 hover:text-white transition-all duration-300"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Services</h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link
                      to={service.href}
                      className="text-gray-300 hover:text-purple-400 transition-colors flex items-center group"
                    >
                      {service.name}
                      <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Company</h3>
              <ul className="space-y-3">
                {company.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.href}
                      className="text-gray-300 hover:text-purple-400 transition-colors flex items-center group"
                    >
                      {item.name}
                      <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Support</h3>
              <ul className="space-y-3">
                {support.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.href}
                      className="text-gray-300 hover:text-purple-400 transition-colors flex items-center group"
                    >
                      {item.name}
                      <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Legal</h3>
              <ul className="space-y-3">
                {legal.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.href}
                      className="text-gray-300 hover:text-purple-400 transition-colors flex items-center group"
                    >
                      {item.name}
                      <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="py-8 border-t border-gray-800">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-xl font-semibold text-white mb-4">
              Stay Updated with Our Latest Services
            </h3>
            <p className="text-gray-300 mb-6">
              Get the latest updates on new AI tools, IT solutions, and micro SaaS applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>Made with ❤️ in Delaware, USA</span>
              <span>•</span>
              <span>ISO 27001 Certified</span>
              <span>•</span>
              <span>SOC 2 Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
