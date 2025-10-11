'use client'
import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock, Zap, Brain, Cloud, Code, Users, ArrowRight, Globe, Shield, BarChart, Target, Settings, FileText, DollarSign, MessageCircle, Eye, Mic, TrendingUp, CheckCircle, Star } from 'lucide-react'

const Footer: React.FC = memo(() => {
  const currentYear = new Date().getFullYear()
  
  const aiServices = [
    { name: 'AI Email Marketing', url: '/ai-email-marketing-automation', description: 'AI-powered email automation' },
    { name: 'AI CRM Assistant', url: '/ai-crm-assistant', description: 'Intelligent CRM management' },
    { name: 'AI Expense Tracker', url: '/ai-expense-tracker', description: 'Smart expense management' },
    { name: 'AI Chatbots & NLP', url: '/ai-chatbot-builder', description: 'Conversational AI' },
    { name: 'AI Content Generation', url: '/ai-content-generation', description: 'Automated content' },
    { name: 'AI Data Analytics', url: '/ai-data-analytics', description: 'Business intelligence' },
    { name: 'AI Computer Vision', url: '/ai-computer-vision', description: 'Image analysis' },
    { name: 'AI Voice Solutions', url: '/ai-voice-solutions', description: 'Speech recognition' },
    { name: 'AI Workflow Automation', url: '/ai-automation', description: 'Process automation' },
    { name: 'AI Healthcare Solutions', url: '/ai-healthcare', description: 'Medical AI' },
    { name: 'AI Financial Services', url: '/ai-financial-services', description: 'Fintech AI' },
    { name: 'AI Document Processing', url: '/ai-document-processing', description: 'Document analysis' }
  ]

  const itServices = [
    { name: 'API Development', url: '/api-development', description: 'Professional API development' },
    { name: 'Cloud Infrastructure', url: '/cloud-infrastructure', description: 'AWS, Azure, GCP' },
    { name: 'DevOps & CI/CD', url: '/devops-cicd', description: 'Automation pipelines' },
    { name: 'Cybersecurity Solutions', url: '/cybersecurity-solutions', description: 'Security solutions' },
    { name: 'Web Development', url: '/web-development', description: 'Modern web apps' },
    { name: 'Mobile Development', url: '/mobile-development', description: 'iOS & Android' },
    { name: 'IT Support', url: '/it-support', description: '24/7 technical support' },
    { name: 'Data Analytics & BI', url: '/data-analytics-bi', description: 'Business intelligence' },
    { name: 'Custom Software', url: '/custom-software', description: 'Tailored solutions' },
    { name: 'Database Management', url: '/database-management', description: 'Database optimization' },
    { name: 'Network Infrastructure', url: '/network-infrastructure', description: 'Network setup' },
    { name: 'IT Asset Management', url: '/it-asset-management', description: 'Asset lifecycle' }
  ]

  const microSaasServices = [
    { name: 'Zion AI SEO Optimizer', url: '/zion-ai-seo-optimizer', description: 'AI SEO optimization' },
    { name: 'Zion AI Email Marketing', url: '/ai-email-marketing-automation', description: 'AI email automation' },
    { name: 'Zion AI CRM Assistant', url: '/ai-crm-assistant', description: 'Intelligent CRM' },
    { name: 'Zion AI Expense Tracker', url: '/ai-expense-tracker', description: 'Smart expense tracking' },
    { name: 'Zion Analytics Pro', url: '/zion-analytics-pro', description: 'Business intelligence' },
    { name: 'Zion Chat AI', url: '/zion-chat-ai', description: 'AI customer support' },
    { name: 'Zion Security Shield', url: '/zion-security-shield', description: 'Cybersecurity monitoring' },
    { name: 'Zion Cloud Vault', url: '/zion-cloud-vault', description: 'Cloud backup & recovery' },
    { name: 'Zion Content Studio', url: '/zion-content-studio', description: 'AI content creation' },
    { name: 'Zion CRM Intelligence', url: '/zion-crm-intelligence', description: 'AI-enhanced CRM' },
    { name: 'Zion Lead Magnet', url: '/zion-lead-magnet', description: 'Lead generation' },
    { name: 'Zion Project Master', url: '/zion-project-master', description: 'Project management' }
  ]

  const companyLinks = [
    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/team' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Careers', url: '/careers' },
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
    { name: 'Sitemap', url: '/sitemap' }
  ]

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 border-t border-cyan-500/20">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center glow-cyan">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white neon-text-enhanced">Zion Tech Group</span>
                <span className="text-xs text-cyan-400 font-medium tracking-wider">AI & IT SOLUTIONS</span>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of enterprise AI solutions, quantum computing, autonomous systems, 
              and digital transformation services. Transform your business with cutting-edge technology.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                <Phone className="w-4 h-4" />
                <a href="tel:+13024640950" className="text-sm">+1 (302) 464-0950</a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                <Mail className="w-4 h-4" />
                <a href="mailto:kleber@ziontechgroup.com" className="text-sm">kleber@ziontechgroup.com</a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">364 E Main St STE 1008<br />Middletown DE 19709</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Clock className="w-4 h-4" />
                <span className="text-sm">24/7 Support Available</span>
              </div>
            </div>
          </div>

          {/* AI Services */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 flex items-center">
              <Brain className="w-5 h-5 mr-2 text-cyan-400" />
              AI Services
            </h3>
            <ul className="space-y-3">
              {aiServices.slice(0, 8).map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.url} 
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 flex items-center">
              <Code className="w-5 h-5 mr-2 text-purple-400" />
              IT Services
            </h3>
            <ul className="space-y-3">
              {itServices.slice(0, 8).map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.url} 
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Micro SAAS & Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 flex items-center">
              <Target className="w-5 h-5 mr-2 text-pink-400" />
              Micro SAAS
            </h3>
            <ul className="space-y-3 mb-8">
              {microSaasServices.slice(0, 6).map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.url} 
                    className="text-gray-300 hover:text-pink-400 transition-colors duration-300 text-sm flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-sm font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {companyLinks.slice(0, 4).map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.url} 
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-xs"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 pt-8 border-t border-gray-700">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Stay Updated with Our Latest AI & IT Solutions</h3>
            <p className="text-gray-300 mb-6">
              Get the latest insights, tips, and updates on AI and IT technologies delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              />
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                <ArrowRight className="w-4 h-4 mr-2" />
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-6">
              {legalLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.url}
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
})

Footer.displayName = 'Footer'

export default Footer