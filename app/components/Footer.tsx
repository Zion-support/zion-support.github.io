import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, ArrowRight, Star, Shield, Zap, Brain, Cloud, Smartphone, Database, BarChart3, Users, Settings, Globe, Lock, Code2, MessageSquare, Target, TrendingUp } from 'lucide-react'

export default function Footer() {
  const aiServices = [
    { name: 'AI Content Generator Pro', path: '/ai-content-generator', price: '$29/month' },
    { name: 'AI Chatbot Builder Enterprise', path: '/ai-chatbot-builder', price: '$49/month' },
    { name: 'AI Analytics Dashboard', path: '/ai-analytics-dashboard', price: '$79/month' },
    { name: 'AI Email Assistant', path: '/ai-email-assistant', price: '$39/month' },
    { name: 'AI Voice Assistant', path: '/ai-voice-assistant', price: '$59/month' },
    { name: 'AI Automation Suite', path: '/ai-automation', price: '$99/month' },
    { name: 'AI Code Assistant', path: '/ai-code-assistant', price: '$69/month' },
    { name: 'AI Cybersecurity Suite', path: '/ai-cybersecurity', price: '$149/month' }
  ]

  const itServices = [
    { name: 'Cloud Migration', path: '/cloud-migration', price: '$2,500/month' },
    { name: 'Cybersecurity Solutions', path: '/cybersecurity', price: '$1,800/month' },
    { name: 'DevOps & CI/CD', path: '/devops-cicd', price: '$2,200/month' },
    { name: 'Data Analytics Pro', path: '/data-analytics', price: '$1,500/month' },
    { name: 'Mobile Development', path: '/mobile-development', price: '$3,000/month' },
    { name: 'Web Development', path: '/web-development', price: '$2,000/project' },
    { name: 'API Development', path: '/api-development', price: '$1,500/project' },
    { name: 'Blockchain Solutions', path: '/blockchain', price: '$5,000/project' }
  ]

  const microSaasServices = [
    { name: 'AI Task Manager', path: '/ai-task-manager', price: '$9/month' },
    { name: 'AI Expense Tracker', path: '/ai-expense-tracker', price: '$7/month' },
    { name: 'AI Password Manager', path: '/ai-password-manager', price: '$12/month' },
    { name: 'AI Invoice Generator', path: '/ai-invoice-generator', price: '$15/month' },
    { name: 'AI Health Tracker', path: '/ai-health-tracker', price: '$8/month' },
    { name: 'AI Smart Calendar', path: '/ai-smart-calendar', price: '$10/month' }
  ]

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'AI Services', path: '/ai-services' },
    { name: 'IT Services', path: '/it-services' },
    { name: 'Micro SAAS', path: '/micro-saas-services' },
    { name: '5G Solutions', path: '/5g-implementation' },
    { name: 'Cloud Services', path: '/cloud-services' },
    { name: 'Digital Transformation', path: '/digital-transformation' },
    { name: 'Contact', path: '/contact' }
  ]

  const companyInfo = [
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
    { name: 'Cookie Policy', path: '/cookies' },
    { name: 'GDPR Compliance', path: '/gdpr' },
    { name: 'Security', path: '/security' },
    { name: 'Careers', path: '/careers' }
  ]

  return (
    <footer className="bg-futuristic-dark border-t border-neon-cyan/20 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-hologram-overlay opacity-10"></div>
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-neon-cyan to-neon-pink rounded-lg flex items-center justify-center mr-3 shadow-neon-cyan/50">
                  <span className="text-futuristic-dark font-bold text-lg">Z</span>
                </div>
                <div>
                  <span className="text-xl font-bold text-white">Zion Tech Group</span>
                  <div className="text-xs text-neon-cyan/70 font-mono">AI & IT Solutions</div>
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Advanced AI and IT solutions for modern businesses. We help you transform your digital infrastructure with cutting-edge technology. 
                <span className="text-neon-cyan font-semibold"> 300% ROI guaranteed or your money back.</span>
              </p>
              <div className="flex space-x-4 mb-6">
                <a href="mailto:kleber@ziontechgroup.com" className="text-neon-cyan hover:text-neon-pink transition-colors hover:scale-110 transform">
                  <Mail className="w-5 h-5" />
                </a>
                <a href="tel:+13024640950" className="text-neon-cyan hover:text-neon-pink transition-colors hover:scale-110 transform">
                  <Phone className="w-5 h-5" />
                </a>
                <a href="https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709" className="text-neon-cyan hover:text-neon-pink transition-colors hover:scale-110 transform">
                  <MapPin className="w-5 h-5" />
                </a>
              </div>
              <div className="text-sm text-gray-400">
                <p>📞 <a href="tel:+13024640950" className="text-neon-cyan hover:text-neon-pink transition-colors">+1 302 464 0950</a></p>
                <p>📧 <a href="mailto:kleber@ziontechgroup.com" className="text-neon-cyan hover:text-neon-pink transition-colors">kleber@ziontechgroup.com</a></p>
                <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
              </div>
            </div>

            {/* AI Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-neon-cyan flex items-center">
                <Brain className="w-5 h-5 mr-2" />
                AI Services
              </h3>
              <ul className="space-y-2">
                {aiServices.map((service) => (
                  <li key={service.name}>
                    <Link
                      to={service.path}
                      className="text-gray-300 hover:text-neon-cyan transition-colors group flex items-center justify-between"
                    >
                      <span className="group-hover:text-neon-cyan transition-colors">{service.name}</span>
                      <span className="text-xs text-neon-cyan/70 group-hover:text-neon-cyan transition-colors">{service.price}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* IT Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-neon-green flex items-center">
                <Cpu className="w-5 h-5 mr-2" />
                IT Services
              </h3>
              <ul className="space-y-2">
                {itServices.map((service) => (
                  <li key={service.name}>
                    <Link
                      to={service.path}
                      className="text-gray-300 hover:text-neon-green transition-colors group flex items-center justify-between"
                    >
                      <span className="group-hover:text-neon-green transition-colors">{service.name}</span>
                      <span className="text-xs text-neon-green/70 group-hover:text-neon-green transition-colors">{service.price}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Micro SaaS Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-neon-pink flex items-center">
                <Smartphone className="w-5 h-5 mr-2" />
                Micro SaaS
              </h3>
              <ul className="space-y-2">
                {microSaasServices.map((service) => (
                  <li key={service.name}>
                    <Link
                      to={service.path}
                      className="text-gray-300 hover:text-neon-pink transition-colors group flex items-center justify-between"
                    >
                      <span className="group-hover:text-neon-pink transition-colors">{service.name}</span>
                      <span className="text-xs text-neon-pink/70 group-hover:text-neon-pink transition-colors">{service.price}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-neon-yellow flex items-center">
                <Zap className="w-5 h-5 mr-2" />
                Quick Links
              </h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-neon-yellow transition-colors group flex items-center"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="group-hover:text-neon-yellow transition-colors">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-neon-cyan/20 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-4 mb-4 md:mb-0">
                <p className="text-gray-400 text-sm">
                  © 2024 Zion Tech Group. All rights reserved.
                </p>
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm text-gray-400">4.9/5 Rating</span>
                </div>
              </div>
              <div className="flex flex-wrap justify-center space-x-6">
                {companyInfo.map((info) => (
                  <Link 
                    key={info.name} 
                    to={info.path} 
                    className="text-gray-400 hover:text-neon-cyan text-sm transition-colors hover:scale-105 transform"
                  >
                    {info.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="mt-4 text-center">
              <p className="text-xs text-gray-500">
                🚀 Powered by cutting-edge AI and IT solutions | 300% ROI Guaranteed | 24/7 Support
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}