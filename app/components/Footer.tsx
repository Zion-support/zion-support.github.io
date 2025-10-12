import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Twitter, 
  ArrowRight, 
  Brain, 
  Cloud, 
  Shield, 
  Globe, 
  Database, 
  Smartphone, 
  Zap, 
  Sparkles, 
  Star,
  Users,
  TrendingUp,
  Lock,
  Cpu,
  Wifi,
  BarChart3,
  MessageSquare,
  FileText,
  Camera,
  Mail as MailIcon,
  Phone as PhoneIcon,
  MapPin as MapPinIcon
} from 'lucide-react'

export default function Footer() {
  const aiServices = [
    { name: 'AI Content Generator Pro', path: '/ai-content-generator', price: '$299/mo' },
    { name: 'AI Chatbot Enterprise', path: '/ai-chatbot-enterprise', price: '$499/mo' },
    { name: 'AI Analytics Dashboard', path: '/ai-analytics-dashboard', price: '$399/mo' },
    { name: 'AI 3D Generation Studio', path: '/ai-3d-generation', price: '$799/mo' },
    { name: 'AI Drug Discovery Pro', path: '/ai-drug-discovery-pro', price: '$2,999/mo' },
    { name: 'AI Cybersecurity Suite', path: '/ai-cybersecurity-suite', price: '$1,299/mo' }
  ];

  const itServices = [
    { name: 'Cloud Migration', path: '/cloud-migration', price: 'From $5,000' },
    { name: 'DevOps Solutions', path: '/devops-solutions', price: 'From $3,500' },
    { name: 'Cybersecurity', path: '/cybersecurity', price: 'From $2,500' },
    { name: 'Mobile Development', path: '/mobile-development', price: 'From $8,000' },
    { name: 'API Development', path: '/api-development', price: 'From $4,000' },
    { name: 'Database Management', path: '/database-management', price: 'From $1,500' }
  ];

  const microSaasServices = [
    { name: 'AI-Powered CRM', path: '/ai-crm', price: '$99/mo' },
    { name: 'Smart Analytics Platform', path: '/smart-analytics', price: '$149/mo' },
    { name: 'Automated Testing Suite', path: '/ai-automated-testing', price: '$199/mo' },
    { name: 'Content Management System', path: '/ai-content-management', price: '$79/mo' },
    { name: 'Email Marketing Automation', path: '/ai-email-marketing', price: '$129/mo' },
    { name: 'Social Media Manager', path: '/ai-social-media-manager', price: '$89/mo' }
  ];

  const fiveGServices = [
    { name: '5G Network Infrastructure', path: '/5g-network-infrastructure', price: 'From $50,000' },
    { name: '5G Edge Computing', path: '/5g-edge-computing', price: 'From $25,000' },
    { name: '5G IoT Solutions', path: '/5g-iot-solutions', price: 'From $15,000' }
  ];

  const companyLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Careers', path: '/careers' },
    { name: 'Blog', path: '/blog' },
    { name: 'News', path: '/news' },
    { name: 'Investors', path: '/investors' },
    { name: 'Status', path: '/status' }
  ];

  const supportLinks = [
    { name: 'Contact Us', path: '/contact' },
    { name: 'Help Center', path: '/help' },
    { name: 'Documentation', path: '/docs' },
    { name: 'Support', path: '/support' },
    { name: 'System Status', path: '/system-status' },
    { name: 'SLA', path: '/sla' }
  ];

  const legalPages = [
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Terms of Service', path: '/terms-of-service' },
    { name: 'Cookie Policy', path: '/cookie-policy' },
    { name: 'GDPR Compliance', path: '/gdpr' }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
      
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center mb-6">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                    <Zap className="w-7 h-7 text-white" />
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-30"></div>
                </div>
                <div className="ml-4">
                  <span className="text-2xl font-bold">Zion Tech Group</span>
                  <div className="text-purple-300 text-sm font-medium">AI & IT Solutions</div>
                </div>
              </div>
              <p className="text-gray-300 mb-6 max-w-sm leading-relaxed">
                Leading provider of AI-powered solutions, IT services, 5G implementation, and micro SAAS platforms. 
                Transform your business with cutting-edge technology.
              </p>
              <div className="flex space-x-4">
                <a href="https://github.com/ziontechgroup" className="text-gray-400 hover:text-purple-400 transition-colors p-2 rounded-lg hover:bg-white/10">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com/company/ziontechgroup" className="text-gray-400 hover:text-purple-400 transition-colors p-2 rounded-lg hover:bg-white/10">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://twitter.com/ziontechgroup" className="text-gray-400 hover:text-purple-400 transition-colors p-2 rounded-lg hover:bg-white/10">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* AI Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6 flex items-center">
                <Brain className="w-5 h-5 mr-2 text-purple-400" />
                AI Services
              </h3>
              <ul className="space-y-3">
                {aiServices.map((service, index) => (
                  <li key={index}>
                    <Link
                      to={service.path}
                      className="text-gray-300 hover:text-purple-300 transition-colors flex items-center justify-between group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform">{service.name}</span>
                      <span className="text-purple-400 text-sm font-semibold">{service.price}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* IT Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6 flex items-center">
                <Code className="w-5 h-5 mr-2 text-blue-400" />
                IT Services
              </h3>
              <ul className="space-y-3">
                {itServices.map((service, index) => (
                  <li key={index}>
                    <Link
                      to={service.path}
                      className="text-gray-300 hover:text-blue-300 transition-colors flex items-center justify-between group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform">{service.name}</span>
                      <span className="text-blue-400 text-sm font-semibold">{service.price}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Micro SAAS Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6 flex items-center">
                <Cpu className="w-5 h-5 mr-2 text-green-400" />
                Micro SAAS
              </h3>
              <ul className="space-y-3">
                {microSaasServices.map((service, index) => (
                  <li key={index}>
                    <Link
                      to={service.path}
                      className="text-gray-300 hover:text-green-300 transition-colors flex items-center justify-between group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform">{service.name}</span>
                      <span className="text-green-400 text-sm font-semibold">{service.price}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* 5G Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6 flex items-center">
                <Wifi className="w-5 h-5 mr-2 text-yellow-400" />
                5G Solutions
              </h3>
              <ul className="space-y-3">
                {fiveGServices.map((service, index) => (
                  <li key={index}>
                    <Link
                      to={service.path}
                      className="text-gray-300 hover:text-yellow-300 transition-colors flex items-center justify-between group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform">{service.name}</span>
                      <span className="text-yellow-400 text-sm font-semibold">{service.price}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Company & Support Links */}
          <div className="border-t border-white/10 pt-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <Globe className="w-5 h-5 mr-2 text-cyan-400" />
                  Company
                </h3>
                <ul className="space-y-2">
                  {companyLinks.map((link, index) => (
                    <li key={index}>
                      <Link 
                        to={link.path} 
                        className="text-gray-400 hover:text-cyan-300 transition-colors flex items-center group"
                      >
                        <ArrowRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-red-400" />
                  Support
                </h3>
                <ul className="space-y-2">
                  {supportLinks.map((link, index) => (
                    <li key={index}>
                      <Link 
                        to={link.path} 
                        className="text-gray-400 hover:text-red-300 transition-colors flex items-center group"
                      >
                        <ArrowRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <Lock className="w-5 h-5 mr-2 text-orange-400" />
                  Legal
                </h3>
                <ul className="space-y-2">
                  {legalPages.map((page, index) => (
                    <li key={index}>
                      <Link 
                        to={page.path} 
                        className="text-gray-400 hover:text-orange-300 transition-colors flex items-center group"
                      >
                        <ArrowRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform" />
                        {page.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="border-t border-white/10 pt-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-center group">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                  <MailIcon className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Email</p>
                  <p className="text-white font-semibold">kleber@ziontechgroup.com</p>
                </div>
              </div>
              
              <div className="flex items-center group">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                  <PhoneIcon className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Phone</p>
                  <p className="text-white font-semibold">+1 302 464 0950</p>
                </div>
              </div>
              
              <div className="flex items-center group">
                <div className="w-12 h-12 bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                  <MapPinIcon className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Address</p>
                  <p className="text-white font-semibold">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="border-t border-white/10 pt-8 mb-8">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center justify-center">
                <Sparkles className="w-6 h-6 mr-2 text-purple-400" />
                Stay Updated
              </h3>
              <p className="text-gray-300 mb-6">
                Get the latest updates on AI technology, IT solutions, and industry insights delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm"
                />
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center group">
                  Subscribe
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 mb-4 md:mb-0">
                <p className="text-gray-400 text-sm">
                  © 2024 Zion Tech Group. All rights reserved.
                </p>
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span className="text-gray-400 text-sm">Trusted by 1,200+ businesses worldwide</span>
                </div>
              </div>
              <div className="flex flex-wrap justify-center md:justify-end space-x-6">
                {legalPages.map((page, index) => (
                  <Link 
                    key={index} 
                    to={page.path} 
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {page.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}