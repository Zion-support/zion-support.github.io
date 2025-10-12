import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Globe, Twitter, Linkedin, Github, Zap, Brain, Cpu, Rocket, Shield, Network, BarChart3, Bot, ArrowRight, Sparkles, Star, TrendingUp } from 'lucide-react'

const FuturisticFooter: React.FC = () => {
  const aiServices = [
    { name: 'AI Customer Insights', path: '/micro-saas/ai-customer-insights' },
    { name: 'AI Workflow Automation', path: '/micro-saas/ai-workflow-automation' },
    { name: 'AI Financial Forecasting', path: '/micro-saas/ai-financial-forecasting' },
    { name: 'AI Content Generator', path: '/ai-content-generator' },
    { name: 'AI Chatbot Enterprise', path: '/ai-chatbot-enterprise' },
    { name: 'AI Analytics Dashboard', path: '/ai-analytics-dashboard' },
    { name: 'AI 3D Generation', path: '/ai-3d-generation' },
    { name: 'AI Cybersecurity Suite', path: '/ai-cybersecurity-suite' }
  ];

  const itServices = [
    { name: 'Cloud Migration', path: '/cloud-migration' },
    { name: 'DevOps Solutions', path: '/devops-solutions' },
    { name: 'Cybersecurity', path: '/cybersecurity' },
    { name: 'Mobile Development', path: '/mobile-development' },
    { name: 'API Development', path: '/api-development' },
    { name: 'Database Management', path: '/database-management' },
    { name: 'System Integration', path: '/system-integration' },
    { name: 'IT Consulting', path: '/it-consulting' }
  ];

  const microSaasServices = [
    { name: 'AI Customer Insights', path: '/micro-saas/ai-customer-insights' },
    { name: 'AI Workflow Automation', path: '/micro-saas/ai-workflow-automation' },
    { name: 'AI Financial Forecasting', path: '/micro-saas/ai-financial-forecasting' },
    { name: 'AI-Powered CRM', path: '/ai-crm' },
    { name: 'Smart Analytics', path: '/smart-analytics' },
    { name: 'Automated Testing', path: '/ai-automated-testing' },
    { name: 'Content Management', path: '/ai-content-management' },
    { name: 'Email Marketing', path: '/ai-email-marketing' }
  ];

  const companyLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Our Team', path: '/team' },
    { name: 'Careers', path: '/careers' },
    { name: 'Blog', path: '/blog' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Press Kit', path: '/press' },
    { name: 'Partners', path: '/partners' }
  ];

  const supportLinks = [
    { name: 'Help Center', path: '/help' },
    { name: 'Documentation', path: '/docs' },
    { name: 'API Reference', path: '/api-docs' },
    { name: 'Status Page', path: '/status' },
    { name: 'Contact Support', path: '/contact' },
    { name: 'Community', path: '/community' }
  ];

  const legalPages = [
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Terms of Service', path: '/terms-of-service' },
    { name: 'Cookie Policy', path: '/cookie-policy' },
    { name: 'GDPR Compliance', path: '/gdpr-compliance' }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.1)_0%,transparent_50%)] animate-pulse" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.1)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg blur-lg opacity-75" />
              <div className="relative w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Zion Tech Group
              </h3>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Leading provider of AI-powered solutions, cybersecurity, and digital transformation services. 
              Empowering businesses to thrive in the digital age with cutting-edge technology and innovative solutions.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com/ziontechgroup" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 hover:scale-110 transform">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/company/ziontechgroup" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:scale-110 transform">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com/ziontechgroup" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 hover:scale-110 transform">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* AI Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Brain className="w-5 h-5 mr-2 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent" />
              AI Services
            </h3>
            <ul className="space-y-2">
              {aiServices.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.path} 
                    className="text-gray-400 hover:text-cyan-400 transition-all duration-300 flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Cloud className="w-5 h-5 mr-2 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent" />
              IT Services
            </h3>
            <ul className="space-y-2">
              {itServices.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.path} 
                    className="text-gray-400 hover:text-green-400 transition-all duration-300 flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Micro SAAS Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Code className="w-5 h-5 mr-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent" />
              Micro SAAS
            </h3>
            <ul className="space-y-2">
              {microSaasServices.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.path} 
                    className="text-gray-400 hover:text-purple-400 transition-all duration-300 flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Company & Support Links */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <Building className="w-5 h-5 mr-2 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent" />
                Company
              </h3>
              <ul className="space-y-2">
                {companyLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.path} 
                      className="text-gray-400 hover:text-orange-400 transition-all duration-300 group"
                    >
                      <span className="group-hover:translate-x-2 transition-transform duration-300">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <Shield className="w-5 h-5 mr-2 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent" />
                Support
              </h3>
              <ul className="space-y-2">
                {supportLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.path} 
                      className="text-gray-400 hover:text-blue-400 transition-all duration-300 group"
                    >
                      <span className="group-hover:translate-x-2 transition-transform duration-300">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center group">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-sm text-gray-400">Email</div>
                <div className="text-white font-medium">kleber@ziontechgroup.com</div>
              </div>
            </div>
            <div className="flex items-center group">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-sm text-gray-400">Phone</div>
                <div className="text-white font-medium">+1 302 464 0950</div>
              </div>
            </div>
            <div className="flex items-center group">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-sm text-gray-400">Address</div>
                <div className="text-white font-medium">364 E Main St STE 1008<br />Middletown DE 19709</div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm flex items-center">
              <span>© 2024 Zion Tech Group. All rights reserved.</span>
              <Sparkles className="w-4 h-4 ml-2 text-cyan-400" />
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {legalPages.map((page, index) => (
                <Link key={index} to={page.path} className="text-gray-400 hover:text-white text-sm transition-colors duration-300 hover:scale-105 transform">
                  {page.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FuturisticFooter