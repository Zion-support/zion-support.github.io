'use client'
import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock, Zap, Brain, Cloud, Code, Users, ArrowRight, Shield, BarChart, MessageCircle, FileText, Target, Calendar, Package, DollarSign, Settings, Monitor, Globe, Eye, Mic, Workflow, CheckCircle, TrendingUp, Award, Star } from 'lucide-react'

const Footer: React.FC = memo(() => {
  const currentYear = new Date().getFullYear()
  
  const aiServices = [
    { name: 'AI Analytics', url: '/ai-analytics', description: 'Advanced data insights' },
    { name: 'AI Automation', url: '/ai-automation', description: 'Streamline workflows' },
    { name: 'AI Chatbot Builder', url: '/ai-chatbot-builder', description: 'Intelligent conversations' },
    { name: 'AI CRM', url: '/ai-crm', description: 'Customer relationship management' },
    { name: 'AI Cybersecurity', url: '/ai-cybersecurity', description: 'Advanced threat protection' },
    { name: 'AI Data Analytics', url: '/ai-data-analytics', description: 'Data-driven insights' },
    { name: 'AI Healthcare', url: '/ai-healthcare', description: 'Medical AI solutions' },
    { name: 'AI Financial Services', url: '/ai-financial-services', description: 'Financial technology' }
  ]

  const itServices = [
    { name: 'Cloud Infrastructure', url: '/cloud-infrastructure', description: 'Scalable cloud solutions' },
    { name: 'Cybersecurity Solutions', url: '/cybersecurity-solutions', description: 'Comprehensive security' },
    { name: 'Web Development', url: '/web-development', description: 'Modern web applications' },
    { name: 'Mobile Development', url: '/mobile-development', description: 'iOS & Android apps' },
    { name: 'DevOps & CI/CD', url: '/devops-cicd', description: 'Automated deployment' },
    { name: 'Data Analytics & BI', url: '/data-analytics-bi', description: 'Business intelligence' },
    { name: 'API Development', url: '/api-development', description: 'API development & management' },
    { name: 'Custom Software', url: '/custom-software', description: 'Tailored solutions' }
  ]

  const microSaasServices = [
    { name: 'Zion Analytics Pro', url: '/zion-analytics-pro', description: 'Business intelligence platform' },
    { name: 'Zion Chat AI', url: '/zion-chat-ai', description: 'AI customer support' },
    { name: 'Zion Security Shield', url: '/zion-security-shield', description: 'Cybersecurity monitoring' },
    { name: 'Zion Cloud Vault', url: '/zion-cloud-vault', description: 'Cloud backup & recovery' },
    { name: 'Zion Content Studio', url: '/zion-content-studio', description: 'AI content creation' },
    { name: 'Zion CRM Intelligence', url: '/zion-crm-intelligence', description: 'AI-enhanced CRM' },
    { name: 'Zion Lead Magnet', url: '/zion-lead-magnet', description: 'Lead generation platform' },
    { name: 'Zion Project Master', url: '/zion-project-master', description: 'Project management AI' }
  ]

  const companyLinks = [
    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/team' },
    { name: 'Careers', url: '/careers' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Blog', url: '/blog' },
    { name: 'Tutorials', url: '/tutorials' }
  ]

  const supportLinks = [
    { name: 'Contact Us', url: '/contact' },
    { name: 'Support Center', url: '/support' },
    { name: 'Documentation', url: '/docs' },
    { name: 'API Reference', url: '/api-docs' },
    { name: 'Status Page', url: '/status' },
    { name: 'System Status', url: '/system-status' }
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
    <footer className="bg-slate-900/95 backdrop-blur-md border-t border-cyan-500/20">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">Zion Tech Group</div>
                <div className="text-xs text-cyan-400 font-medium tracking-wider">AI & IT SOLUTIONS</div>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-sm">
              Leading provider of enterprise AI solutions, quantum computing, autonomous systems, 
              and digital transformation services.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-4 h-4 text-cyan-400" />
                <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors duration-300">
                  +1 (302) 464-0950
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-4 h-4 text-cyan-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors duration-300">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-start space-x-3 text-gray-300">
                <MapPin className="w-4 h-4 text-cyan-400 mt-1" />
                <div>
                  <div>364 E Main St STE 1008</div>
                  <div>Middletown, DE 19709</div>
                </div>
              </div>
            </div>
          </div>

          {/* AI Services */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 flex items-center">
              <Brain className="w-5 h-5 text-cyan-400 mr-2" />
              AI Services
            </h3>
            <ul className="space-y-3">
              {aiServices.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div>
                      <div className="font-medium">{service.name}</div>
                      <div className="text-xs text-gray-400">{service.description}</div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              to="/ai-services"
              className="inline-flex items-center mt-4 text-cyan-400 hover:text-cyan-300 font-medium text-sm group"
            >
              View All AI Services
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>

          {/* IT Services */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 flex items-center">
              <Cloud className="w-5 h-5 text-cyan-400 mr-2" />
              IT Services
            </h3>
            <ul className="space-y-3">
              {itServices.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div>
                      <div className="font-medium">{service.name}</div>
                      <div className="text-xs text-gray-400">{service.description}</div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              to="/it-services"
              className="inline-flex items-center mt-4 text-cyan-400 hover:text-cyan-300 font-medium text-sm group"
            >
              View All IT Services
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>

          {/* Micro SAAS */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 flex items-center">
              <Zap className="w-5 h-5 text-cyan-400 mr-2" />
              Micro SAAS
            </h3>
            <ul className="space-y-3">
              {microSaasServices.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div>
                      <div className="font-medium">{service.name}</div>
                      <div className="text-xs text-gray-400">{service.description}</div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              to="/micro-saas"
              className="inline-flex items-center mt-4 text-cyan-400 hover:text-cyan-300 font-medium text-sm group"
            >
              View All Micro SAAS
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>

        {/* Additional Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-8 border-t border-cyan-500/20">
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Support</h4>
            <ul className="space-y-2">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-cyan-500/20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-gray-300 text-sm mb-4 md:mb-0">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-gray-300 text-sm">
                <Clock className="w-4 h-4 text-cyan-400" />
                <span>24/7 Support Available</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300 text-sm">
                <Shield className="w-4 h-4 text-cyan-400" />
                <span>SOC 2 Compliant</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300 text-sm">
                <Award className="w-4 h-4 text-cyan-400" />
                <span>ISO 27001 Certified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
})

Footer.displayName = 'Footer'

export default Footer