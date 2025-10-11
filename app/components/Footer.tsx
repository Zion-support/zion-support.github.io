'use client'
import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock, Zap, Brain, Cloud, Code, Users, ArrowRight } from 'lucide-react'

const Footer: React.FC = memo(() => {
  const currentYear = new Date().getFullYear()
  
  const aiServices = [
    { name: 'AI Solutions', url: '/ai-services', description: 'Comprehensive AI solutions' },
    { name: 'AI Marketing Automation', url: '/ai-marketing', description: 'AI-powered marketing automation' },
    { name: 'AI Customer Support', url: '/ai-customer-support', description: 'AI-powered customer service' },
    { name: 'AI Data Analytics', url: '/ai-data-analytics', description: 'AI-powered data analysis' },
    { name: 'AI Content Generation', url: '/ai-content-generation', description: 'AI content creation tools' },
    { name: 'AI Workflow Automation', url: '/ai-workflow-automation', description: 'AI process automation' }
  ]

  const itServices = [
    { name: 'Web Development', url: '/web-development', description: 'Modern web applications' },
    { name: 'Mobile Development', url: '/mobile-development', description: 'iOS and Android apps' },
    { name: 'Cloud Infrastructure', url: '/cloud-infrastructure', description: 'Scalable cloud solutions' },
    { name: 'Cybersecurity', url: '/cybersecurity-solutions', description: 'Security solutions' },
    { name: 'Data Analytics', url: '/data-analytics', description: 'Business intelligence' },
    { name: 'IT Consulting', url: '/it-consulting', description: 'Strategic IT guidance' }
  ]

  const microSaasServices = [
    { name: 'Analytics Dashboard', url: '/analytics-dashboard', description: 'Business intelligence tools' },
    { name: 'CRM Intelligence', url: '/crm-intelligence', description: 'AI-enhanced CRM' },
    { name: 'Content Studio', url: '/content-studio', description: 'AI content creation' },
    { name: 'Security Shield', url: '/security-shield', description: 'Cybersecurity monitoring' },
    { name: 'Project Master', url: '/project-master', description: 'AI project management' },
    { name: 'Email Automation', url: '/email-automation', description: 'Smart email marketing' }
  ]

  const companyLinks = [
    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/team' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Careers', url: '/careers' },
    { name: 'Blog', url: '/blog' },
    { name: 'Contact', url: '/contact' }
  ]

  const supportLinks = [
    { name: 'Help Center', url: '/support' },
    { name: 'Documentation', url: '/docs' },
    { name: 'Tutorials', url: '/tutorials' },
    { name: 'API Reference', url: '/api-docs' },
    { name: 'Status Page', url: '/status' },
    { name: 'Community', url: '/community' }
  ]

  const legalLinks = [
    { name: 'Privacy Policy', url: '/privacy' },
    { name: 'Terms of Service', url: '/terms' },
    { name: 'Cookie Policy', url: '/cookies' },
    { name: 'GDPR Compliance', url: '/gdpr' },
    { name: 'Security', url: '/security' },
    { name: 'Sitemap', url: '/sitemap' }
  ]

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mr-3">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of AI and IT solutions, transforming businesses through cutting-edge technology and innovative approaches.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 mr-3 text-cyan-400" />
                <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">
                  +1 (302) 464-0950
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-3 text-cyan-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-start text-gray-300">
                <MapPin className="w-4 h-4 mr-3 mt-1 text-cyan-400 flex-shrink-0" />
                <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Clock className="w-4 h-4 mr-3 text-cyan-400" />
                <span>24/7 Support Available</span>
              </div>
            </div>
          </div>

          {/* AI Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
              <Brain className="w-5 h-5 mr-2 text-cyan-400" />
              AI Services
            </h3>
            <ul className="space-y-3">
              {aiServices.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
              <Cloud className="w-5 h-5 mr-2 text-cyan-400" />
              IT Services
            </h3>
            <ul className="space-y-3">
              {itServices.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Micro SaaS */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
              <Code className="w-5 h-5 mr-2 text-cyan-400" />
              Micro SaaS
            </h3>
            <ul className="space-y-3">
              {microSaasServices.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Additional Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 pt-8 border-t border-white/10">
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Support</h3>
            <ul className="space-y-3">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Legal</h3>
            <ul className="space-y-3">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 rounded-2xl p-8 mb-12 border border-white/10">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated with Our Latest AI & IT Solutions
            </h3>
            <p className="text-gray-300 mb-6">
              Get exclusive insights, product updates, and industry news delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
              />
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
          <div className="text-gray-300 text-sm mb-4 md:mb-0">
            © {currentYear} Zion Tech Group. All rights reserved.
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex items-center text-gray-300 text-sm">
              <Users className="w-4 h-4 mr-2 text-cyan-400" />
              <span>500+ Happy Clients</span>
            </div>
            <div className="flex items-center text-gray-300 text-sm">
              <Zap className="w-4 h-4 mr-2 text-cyan-400" />
              <span>99.9% Uptime</span>
            </div>
            <div className="flex items-center text-gray-300 text-sm">
              <Brain className="w-4 h-4 mr-2 text-cyan-400" />
              <span>AI-Powered</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
})

Footer.displayName = 'Footer'

export default Footer
