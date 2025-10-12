'use client';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Zap, Brain, Cloud, Code, Users, Cpu, ArrowRight, Github, Linkedin, Twitter, Shield, Globe, Database, Smartphone, Sparkles, Star } from 'lucide-react';

const Footer: React.FC = memo(() => {
  const currentYear = new Date().getFullYear();
  
  const aiServices = [
    { name: 'AI Content Generator', path: '/ai-content-generation' },
    { name: 'AI Chatbot Builder', path: '/ai-chatbot-builder' },
    { name: 'AI Analytics Dashboard Pro', path: '/ai-analytics-dashboard-pro' },
    { name: 'AI Smart Scheduler', path: '/ai-smart-scheduler' },
    { name: 'AI Content Moderation Pro', path: '/ai-content-moderation-pro' },
    { name: 'AI Computer Vision', path: '/ai-computer-vision' },
    { name: 'AI Data Analytics', path: '/ai-data-analytics' },
    { name: 'AI Automation', path: '/ai-automation' }
  ];

  const itServices = [
    { name: 'Web Development', path: '/web-development' },
    { name: 'Mobile Development', path: '/mobile-development' },
    { name: 'Cloud Migration Pro', path: '/cloud-migration-pro' },
    { name: 'DevOps', path: '/devops' },
    { name: 'Data Analytics', path: '/data-analytics' },
    { name: 'Cloud Services', path: '/cloud-services' },
    { name: 'Cybersecurity', path: '/cybersecurity' }
  ];

  const microSaasServices = [
    { name: 'AI E-commerce Optimizer Pro', path: '/ai-ecommerce-optimizer-pro' },
    { name: 'AI Social Media Manager', path: '/ai-social-media-manager' },
    { name: 'AI Email Marketing Automation', path: '/ai-email-marketing-automation' },
    { name: 'AI Project Management Pro', path: '/ai-project-management-pro' },
    { name: 'AI Customer Support Chatbot', path: '/ai-customer-support-chatbot' },
    { name: 'AI Invoice Generator', path: '/ai-invoice-generator' },
    { name: 'AI Expense Tracker', path: '/ai-expense-tracker' },
    { name: 'AI Video Editor', path: '/ai-video-editor' },
    { name: 'Advanced Security Suite', path: '/advanced-security-suite' },
    { name: 'AI Smart Scheduler', path: '/ai-smart-scheduler' },
    { name: 'AI Content Moderation Pro', path: '/ai-content-moderation-pro' },
    { name: 'AI Analytics Dashboard Pro', path: '/ai-analytics-dashboard-pro' },
    { name: 'Cloud Migration Pro', path: '/cloud-migration-pro' }
  ];

  const fiveGServices = [
    { name: '5G Smart City Solutions', path: '/5g-smart-city-solutions' },
    { name: '5G Implementation', path: '/5g-implementation' },
    { name: '5G Network Infrastructure', path: '/5g-network-infrastructure' },
    { name: '5G IoT Solutions', path: '/5g-iot-solutions' },
    { name: '5G Edge Computing', path: '/5g-edge-computing' },
    { name: '5G Private Networks', path: '/5g-private-networks' }
  ];

  const companyLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Our Team', path: '/team' },
    { name: 'Careers', path: '/careers' },
    { name: 'Blog', path: '/blog' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Partners', path: '/partners' }
  ];

  const supportLinks = [
    { name: 'Contact Us', path: '/contact' },
    { name: 'Help Center', path: '/help' },
    { name: 'Documentation', path: '/docs' },
    { name: 'API Reference', path: '/api-docs' },
    { name: 'Status Page', path: '/status' },
    { name: 'Contact Support', path: '/contact' },
    { name: 'Community', path: '/community' }
  ];

  const legalPages = [
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' }
  ];


  return (
    <footer className="relative bg-slate-900 text-gray-300 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
=======
    { name: 'AI Content Generator', path: '/ai-content-generation' },
    { name: 'AI Chatbot Builder', path: '/ai-chatbot-builder' },
    { name: 'AI Analytics Dashboard Pro', path: '/ai-analytics-dashboard-pro' },
    { name: 'AI Smart Scheduler', path: '/ai-smart-scheduler' },
    { name: 'AI Content Moderation Pro', path: '/ai-content-moderation-pro' },
    { name: 'AI Computer Vision', path: '/ai-computer-vision' },
    { name: 'AI Data Analytics', path: '/ai-data-analytics' },
    { name: 'AI Automation', path: '/ai-automation' }
  ]

  const itServices = [
    { name: 'Web Development', path: '/web-development' },
    { name: 'Mobile Development', path: '/mobile-development' },
    { name: 'Cloud Migration Pro', path: '/cloud-migration-pro' },
    { name: 'DevOps', path: '/devops' },
    { name: 'Data Analytics', path: '/data-analytics' },
    { name: 'Cloud Services', path: '/cloud-services' },
    { name: 'Cybersecurity', path: '/cybersecurity' }
  ]

  const microSaasServices = [
    { name: 'AI E-commerce Optimizer Pro', path: '/ai-ecommerce-optimizer-pro' },
    { name: 'AI Social Media Manager', path: '/ai-social-media-manager' },
    { name: 'AI Email Marketing Automation', path: '/ai-email-marketing-automation' },
    { name: 'AI Project Management Pro', path: '/ai-project-management-pro' },
    { name: 'AI Customer Support Chatbot', path: '/ai-customer-support-chatbot' },
    { name: 'AI Invoice Generator', path: '/ai-invoice-generator' },
    { name: 'AI Expense Tracker', path: '/ai-expense-tracker' },
    { name: 'AI Video Editor', path: '/ai-video-editor' },
    { name: 'Advanced Security Suite', path: '/advanced-security-suite' },
    { name: 'AI Smart Scheduler', path: '/ai-smart-scheduler' },
    { name: 'AI Content Moderation Pro', path: '/ai-content-moderation-pro' },
    { name: 'AI Analytics Dashboard Pro', path: '/ai-analytics-dashboard-pro' },
    { name: 'Cloud Migration Pro', path: '/cloud-migration-pro' }
  ]

  const fiveGServices = [
    { name: '5G Smart City Solutions', path: '/5g-smart-city-solutions' },
    { name: '5G Implementation', path: '/5g-implementation' },
    { name: '5G Network Infrastructure', path: '/5g-network-infrastructure' },
    { name: '5G IoT Solutions', path: '/5g-iot-solutions' },
    { name: '5G Edge Computing', path: '/5g-edge-computing' },
    { name: '5G Private Networks', path: '/5g-private-networks' }
  ]

  const companyLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Our Team', path: '/team' },
    { name: 'Careers', path: '/careers' },
    { name: 'Blog', path: '/blog' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Partners', path: '/partners' }
  ]

  const supportLinks = [
    { name: 'Contact Us', path: '/contact' },
    { name: 'Help Center', path: '/help' },
    { name: 'Documentation', path: '/docs' },
<<<<<<< HEAD
    { name: 'Support', path: '/support' },
    { name: 'Status', path: '/status' },
    { name: 'SLA', path: '/sla' }
  ]
=======
    { name: 'API Reference', path: '/api-docs' },
    { name: 'Status Page', path: '/status' },
    { name: 'Contact Support', path: '/contact' },
    { name: 'Community', path: '/community' }
  ]

  const legalPages = [
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' }
  ]

  // const quickLinks = [
  //   { name: 'Home', path: '/' },
  //   { name: 'About', path: '/about' },
  //   { name: 'AI Services', path: '/ai-services' },
  //   { name: 'IT Services', path: '/it-services' },
  //   { name: 'Micro SAAS', path: '/micro-saas-services' },
  //   { name: '5G Solutions', path: '/5g-implementation' },
  //   { name: 'Contact', path: '/contact' }
  // ]
>>>>>>> cursor/fix-errors-and-merge-to-main-33db

  return (
    <footer className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-dfc2
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg shadow-cyan-500/25">
                <Brain className="w-7 h-7 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold neon-text-enhanced group-hover:glow">Zion Tech Group</span>
                <span className="text-sm text-cyan-400 font-medium tracking-wider">AI & IT SOLUTIONS</span>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Leading provider of AI and IT solutions that transform businesses through cutting-edge technology, 
              innovation, and exceptional service delivery.
            </p>
<<<<<<< HEAD
            <div className="space-y-4">
              <div className="flex items-center text-sm text-gray-300 group">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors font-medium">+1 302 464 0950</a>
              </div>
              <div className="flex items-center text-sm text-gray-300 group">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors font-medium">kleber@ziontechgroup.com</a>
              </div>
              <div className="flex items-start text-sm text-gray-300 group">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mr-3 mt-0.5 group-hover:scale-110 transition-transform">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <div>
                  <span className="font-medium">364 E Main St STE 1008</span><br />
                  <span className="text-gray-400">Middletown DE 19709</span>
                </div>
              </div>
              <div className="flex items-center text-sm text-gray-300 group">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                  <Clock className="w-4 h-4 text-white" />
                </div>
                <span className="font-medium">Mon-Fri: 9AM-6PM EST | 24/7 Emergency Support</span>
              </div>
=======
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-dfc2
            </div>
          </div>

          {/* AI Services */}
<<<<<<< HEAD
          <div className="cyber-card-enhanced p-6 rounded-2xl">
            <h3 className="text-lg font-bold mb-6 text-cyan-400 flex items-center neon-text-enhanced">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-3">
                <Brain className="w-5 h-5 text-white" />
              </div>
=======
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <Brain className="w-5 h-5 mr-2 text-cyan-400" />
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-dfc2
              AI Services
            </h3>
            <ul className="space-y-3">
              {aiServices.slice(0, 6).map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-all duration-300 text-sm group flex items-center">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 group-hover:scale-150 transition-transform"></div>
                    {service.name}
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-cyan-500/20">
                <Link 
                  to="/ai-services"
                  className="text-cyan-400 hover:text-cyan-300 transition-all duration-300 text-sm font-semibold flex items-center group">
                  View All AI Services
                  <Zap className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </li>
            </ul>
          </div>

          {/* IT Services */}
<<<<<<< HEAD
          <div className="cyber-card-enhanced p-6 rounded-2xl">
            <h3 className="text-lg font-bold mb-6 text-purple-400 flex items-center neon-text-enhanced">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-3">
                <Cloud className="w-5 h-5 text-white" />
              </div>
=======
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <Database className="w-5 h-5 mr-2 text-purple-400" />
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-dfc2
              IT Services
            </h3>
            <ul className="space-y-3">
              {itServices.slice(0, 6).map((service, index) => (
                <li key={index}>
<<<<<<< HEAD
                  <Link 
                    to={service.url}
                    className="text-gray-300 hover:text-purple-400 transition-all duration-300 text-sm group flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 group-hover:scale-150 transition-transform"></div>
                    {service.name}
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-purple-500/20">
                <Link 
                  to="/it-services"
                  className="text-purple-400 hover:text-purple-300 transition-all duration-300 text-sm font-semibold flex items-center group">
                  View All IT Services
                  <Zap className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Micro SAAS */}
          <div className="cyber-card-enhanced p-6 rounded-2xl">
            <h3 className="text-lg font-bold mb-6 text-green-400 flex items-center neon-text-enhanced">
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mr-3">
                <Code className="w-5 h-5 text-white" />
              </div>
              Micro SAAS
            </h3>
            <ul className="space-y-3">
              {microSaasServices.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.url}
                    className="text-gray-300 hover:text-green-400 transition-all duration-300 text-sm group flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3 group-hover:scale-150 transition-transform"></div>
=======
                  <Link
                    to={service.path}
                    className="text-gray-300 hover:text-purple-400 transition-colors flex items-center"
                  >
                    <ArrowRight className="w-3 h-3 mr-2" />
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-dfc2
                    {service.name}
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-green-500/20">
                <Link 
                  to="/micro-saas"
                  className="text-green-400 hover:text-green-300 transition-all duration-300 text-sm font-semibold flex items-center group">
                  View All Micro SAAS
                  <Zap className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

<<<<<<< HEAD
        {/* Additional Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mt-12 pt-8 border-t border-gray-700">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((link, index) => (
=======
          {/* Micro SAAS Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <Sparkles className="w-5 h-5 mr-2 text-yellow-400" />
              Micro SAAS
            </h3>
            <ul className="space-y-3">
              {microSaasServices.map((service, index) => (
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-dfc2
                <li key={index}>
                  <Link 
                    to={link.url} 
                    className="text-gray-300 hover:text-cyan-400 text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

<<<<<<< HEAD
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">Resources</h3>
            <ul className="space-y-2">
              {resourcesLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.url} 
                    className="text-gray-300 hover:text-cyan-400 text-sm transition-colors"
                  >
                    {link.name}
=======
          {/* 5G Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <Zap className="w-5 h-5 mr-2 text-blue-400" />
              5G Solutions
            </h3>
            <ul className="space-y-3">
              {fiveGServices.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.path}
                    className="text-gray-300 hover:text-blue-400 transition-colors flex items-center"
                  >
                    <ArrowRight className="w-3 h-3 mr-2" />
                    {service.name}
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-dfc2
                  </Link>
                </li>
              ))}
            </ul>
          </div>

<<<<<<< HEAD
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">Enterprise</h3>
            <ul className="space-y-2">
              {enterpriseLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.url} 
                    className="text-gray-300 hover:text-cyan-400 text-sm transition-colors"
                  >
=======
          {/* Company & Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <Globe className="w-5 h-5 mr-2 text-green-400" />
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-green-400 transition-colors flex items-center"
                  >
                    <ArrowRight className="w-3 h-3 mr-2" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-lg font-semibold mb-6 mt-8 flex items-center">
              <Shield className="w-5 h-5 mr-2 text-red-400" />
              Support
            </h3>
            <ul className="space-y-3">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-red-400 transition-colors flex items-center"
                  >
                    <ArrowRight className="w-3 h-3 mr-2" />
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-dfc2
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

<<<<<<< HEAD
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/consultation" className="text-gray-300 hover:text-cyan-400 text-sm transition-colors">
                  Free Consultation
                </Link>
              </li>
              <li>
                <Link to="/demo" className="text-gray-300 hover:text-cyan-400 text-sm transition-colors">
                  Request Demo
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-cyan-400 text-sm transition-colors">
                  Contact Sales
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-gray-300 hover:text-cyan-400 text-sm transition-colors">
                  Technical Support
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-cyan-400 text-sm transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-cyan-400 text-sm transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">Connect</h3>
            <div className="space-y-3">
              <div className="flex space-x-4">
                <a href="https://linkedin.com/company/ziontechgroup" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  LinkedIn
                </a>
                <a href="https://twitter.com/ziontechgroup" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  Twitter
                </a>
              </div>
              <div className="flex space-x-4">
                <a href="https://github.com/ziontechgroup" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  GitHub
                </a>
                <a href="https://youtube.com/ziontechgroup" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  YouTube
                </a>
=======
        {/* Contact Info */}
          <div className="border-t border-gray-700 mt-12 pt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
            <div className="flex items-center">
              <Mail className="w-5 h-5 text-cyan-400 mr-3" />
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="text-white">kleber@ziontechgroup.com</p>
              </div>
            </div>
            <div className="flex items-center">
              <Phone className="w-5 h-5 text-purple-400 mr-3" />
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <p className="text-white">+1 302 464 0950</p>
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-dfc2
              </div>
              <div className="text-sm text-gray-400">
                <p>📧 kleber@ziontechgroup.com</p>
                <p>📞 +1 302 464 0950</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm mb-4 md:mb-0 flex items-center">
              <div className="w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-3">
                <Brain className="w-4 h-4 text-white" />
              </div>
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 gap-y-2">
              <Link to="/privacy" className="text-sm text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-105">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-105">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-sm text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-105">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
<<<<<<< HEAD
  );
});

Footer.displayName = 'Footer';

export default Footer;
=======
  )
}
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-dfc2
