<<<<<<< HEAD
import React from 'react'
import { Link } from 'react-router-dom'
<<<<<<< HEAD
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, ArrowRight } from 'lucide-react'
=======
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, ArrowRight, Brain, Cloud, Shield, Globe, Database, Code, Smartphone } from 'lucide-react';
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-5508

export default function Footer() {
  const aiServices = [
    { name: 'AI Content Generator', path: '/ai-content-generator' },
    { name: 'AI Chatbot Builder', path: '/ai-chatbot-builder' },
    { name: 'AI Analytics Dashboard', path: '/ai-analytics-dashboard' },
    { name: 'AI Email Assistant', path: '/ai-email-assistant' },
    { name: 'AI Voice Assistant', path: '/ai-voice-assistant' },
<<<<<<< HEAD
    { name: 'AI Automation Suite', path: '/ai-automation' }
=======
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
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-00bf
  ]
=======
    { name: 'AI Automation Suite', path: '/ai-automation' },
    { name: 'AI 3D Generation', path: '/ai-3d-generation' },
    { name: 'AI Drug Discovery Pro', path: '/ai-drug-discovery-pro' }
  ];
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-5508

  const itServices = [
<<<<<<< HEAD
    { name: 'Cloud Migration', path: '/cloud-migration' },
    { name: 'DevOps Solutions', path: '/devops-solutions' },
    { name: 'Cybersecurity', path: '/cybersecurity' },
    { name: 'Data Analytics', path: '/data-analytics' },
<<<<<<< HEAD
    { name: 'API Development', path: '/api-development' },
    { name: 'System Integration', path: '/system-integration' }
=======
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
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-00bf
  ]

<<<<<<< HEAD
  const companyLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Our Team', path: '/team' },
    { name: 'Careers', path: '/careers' },
    { name: 'Blog', path: '/blog' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Press Kit', path: '/press' }
  ]

  const supportLinks = [
    { name: 'Help Center', path: '/help' },
    { name: 'Documentation', path: '/docs' },
    { name: 'API Reference', path: '/api-docs' },
    { name: 'Status Page', path: '/status' },
    { name: 'Contact Support', path: '/contact' },
    { name: 'Community', path: '/community' }
=======
  const legalPages = [
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' }
  ]
=======
    { name: 'Mobile Development', path: '/mobile-development' },
    { name: 'Blockchain Solutions', path: '/blockchain' },
    { name: 'Quantum Computing', path: '/quantum-computing-solutions' }
  ];

  const microSaasServices = [
    { name: 'AI Task Manager', path: '/ai-task-manager' },
    { name: 'AI Expense Tracker', path: '/ai-expense-tracker' },
    { name: 'AI Password Manager', path: '/ai-password-manager' },
    { name: 'AI Invoice Generator', path: '/ai-invoice-generator' },
    { name: 'AI Health Tracker', path: '/ai-health-tracker' },
    { name: 'AI Smart Calendar', path: '/ai-smart-calendar' },
    { name: 'AI Climate Solutions', path: '/ai-climate-solutions-pro' }
  ];
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-5508

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
>>>>>>> cursor/website-audit-and-update-with-deployment-c78e
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
<<<<<<< HEAD
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Zion Tech Group</h3>
            <p className="text-gray-400 mb-4">
              Leading provider of AI-powered solutions, cybersecurity, and digital transformation services.
            </p>
<<<<<<< HEAD
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">GitHub</span>
                <Github className="w-5 h-5" />
              </a>
=======
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-3" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 mr-3" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-4 h-4 mr-3" />
                <span>364 E Main St STE 1008 Middletown DE 19709</span>
              </div>
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-5508
            </div>
          </div>

          {/* AI Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">AI Services</h3>
            <ul className="space-y-2">
              {aiServices.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.path} 
                    className="text-gray-400 hover:text-white transition-colors flex items-center"
                  >
                    <ArrowRight className="w-3 h-3 mr-2" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">IT Services</h3>
            <ul className="space-y-2">
              {itServices.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.path} 
                    className="text-gray-400 hover:text-white transition-colors flex items-center"
                  >
                    <ArrowRight className="w-3 h-3 mr-2" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 mb-6">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

<<<<<<< HEAD
          {/* Legal Pages */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {legalPages.map((page) => (
                <li key={page.name}>
                  <Link
                    to={page.path}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {page.name}
=======
        {/* Micro SAAS Services */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold mb-4">Micro SAAS Services</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <Link to="/micro-saas-services" className="text-gray-400 hover:text-white transition-colors text-sm font-semibold">
              All Micro SAAS
            </Link>
            {microSaasServices.map((service, index) => (
              <Link key={index} to={service.path} className="text-gray-400 hover:text-white transition-colors text-sm">
                {service.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-4">
              Get the latest updates on AI technology and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
=======
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
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-00bf
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-gray-400 text-sm">
                © 2024 Zion Tech Group. All rights reserved.
              </p>
              <div className="flex space-x-6">
                {legal.map((item, index) => (
                  <Link key={index} to={item.path} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {item.name}
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-5508
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center">
              <Mail className="w-5 h-5 text-gray-400 mr-3" />
              <span className="text-gray-400">contact@ziontech.com</span>
            </div>
<<<<<<< HEAD
            <div className="flex items-center">
              <Phone className="w-5 h-5 text-gray-400 mr-3" />
              <span className="text-gray-400">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 text-gray-400 mr-3" />
              <span className="text-gray-400">San Francisco, CA</span>
=======
            <div className="mt-4 md:mt-0">
              <p className="text-gray-500 text-xs">
                Built with ❤️ by Zion Tech Group
              </p>
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-5508
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Zion Tech Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
<<<<<<< HEAD
  )
=======
  );
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-5508
}