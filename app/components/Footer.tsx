<<<<<<< HEAD
import React from 'react'
import { Link } from 'react-router-dom'
<<<<<<< HEAD
import { Mail, Phone, MapPin } from 'lucide-react'
=======
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, ArrowRight, Brain, Smartphone, Cpu, Globe, Zap, Sparkles, Star } from 'lucide-react'
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-3379

export default function Footer() {
  const aiServices = [
    { name: 'AI Content Generator', path: '/ai-content-generator' },
    { name: 'AI Chatbot Builder', path: '/ai-chatbot-builder' },
    { name: 'AI Analytics Dashboard', path: '/ai-analytics-dashboard' },
    { name: 'AI Email Assistant', path: '/ai-email-assistant' },
<<<<<<< HEAD
    { name: 'AI Voice Assistant', path: '/ai-voice-assistant' },
    { name: 'AI Automation Suite', path: '/ai-automation' }
  ]

  const itServices = [
    { name: 'Cloud Migration', path: '/cloud-migration' },
    { name: 'Cybersecurity Solutions', path: '/cybersecurity-solutions' },
    { name: 'DevOps & CI/CD', path: '/devops-cicd' },
    { name: 'Data Analytics', path: '/data-analytics' },
    { name: 'Mobile Development', path: '/mobile-development' },
    { name: 'Web Development', path: '/web-development' }
  ]

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'AI Services', path: '/ai-services' },
    { name: 'IT Services', path: '/it-services' },
    { name: 'Micro SAAS', path: '/micro-saas-services' },
    { name: '5G Solutions', path: '/5g-implementation' },
    { name: 'Contact', path: '/contact' }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
=======
    { name: 'AI Meeting Assistant', path: '/ai-meeting-assistant' },
    { name: 'AI Project Manager', path: '/ai-project-manager' }
  ]

  const itServices = [
    { name: 'Cloud Migration', path: '/cloud-services' },
    { name: 'Cybersecurity', path: '/ai-cybersecurity' },
    { name: 'Mobile Development', path: '/it-services' },
    { name: 'Data Analytics', path: '/ai-data-analytics' },
    { name: '5G Implementation', path: '/5g-implementation' },
    { name: 'Digital Transformation', path: '/digital-transformation' }
=======
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, ArrowRight, Brain, Cloud, Shield, Globe, Database, Smartphone } from 'lucide-react';

export default function Footer() {
  const aiServices = [
    { name: 'AI Content Generator', path: '/ai-content-generation' },
    { name: 'AI Chatbot Builder', path: '/ai-chatbot-builder' },
    { name: 'AI Analytics Dashboard', path: '/ai-analytics-dashboard' },
    { name: 'AI Email Assistant', path: '/ai-email-assistant' }
  ]

  const itServices = [
    { name: 'Cloud Migration', path: '/cloud-services' },
    { name: 'Cybersecurity', path: '/ai-cybersecurity' },
    { name: 'Mobile Development', path: '/it-services' },
    { name: 'Data Analytics', path: '/ai-data-analytics' }
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-386b
  ]

  const microSaasServices = [
    { name: 'AI Task Manager', path: '/micro-saas-services' },
    { name: 'AI Expense Tracker', path: '/ai-expense-tracker' },
    { name: 'AI Password Manager', path: '/micro-saas-services' },
    { name: 'AI Invoice Generator', path: '/micro-saas-services' },
    { name: 'AI Customer Support Bot', path: '/ai-customer-support-bot' },
    { name: 'AI Website Builder', path: '/micro-saas-services' }
  ]

<<<<<<< HEAD
  const companyLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Our Team', path: '/about' },
    { name: 'Careers', path: '/contact' },
    { name: 'Blog', path: '/contact' }
  ]

  const supportLinks = [
    { name: 'Help Center', path: '/contact' },
    { name: 'Documentation', path: '/contact' },
    { name: 'API Reference', path: '/contact' },
    { name: 'Status', path: '/contact' }
  ]

  const legalLinks = [
    { name: 'Privacy Policy', path: '/contact' },
    { name: 'Terms of Service', path: '/contact' },
    { name: 'Cookie Policy', path: '/contact' },
    { name: 'GDPR Compliance', path: '/contact' }
  ]

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.1)_50%,transparent_75%,transparent_100%)] bg-[length:60px_60px] animate-pulse"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-3379
=======
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' }
  ];

  return (
    <footer className="bg-gray-900/50 backdrop-blur-lg border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-386b
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Zion Tech Group</span>
            </div>
<<<<<<< HEAD
            <p className="text-gray-300 mb-4">
              Advanced AI and IT solutions for modern businesses. We help you transform your digital infrastructure with cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Phone className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <MapPin className="w-5 h-5" />
=======
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of AI-powered solutions, IT services, and digital transformation for modern businesses. 
              Transforming the future with cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/ziontechgroup" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors group"
              >
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a 
                href="https://linkedin.com/company/ziontechgroup" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors group"
              >
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a 
                href="https://twitter.com/ziontechgroup" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors group"
              >
                <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-3379
              </a>
            </div>
          </div>

          {/* AI Services */}
          <div>
<<<<<<< HEAD
<<<<<<< HEAD
            <h3 className="text-lg font-semibold mb-4">AI Services</h3>
=======
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Brain className="w-5 h-5 mr-2 text-blue-400" />
              AI Services
            </h3>
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-386b
            <ul className="space-y-2">
              {aiServices.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
=======
            <h3 className="text-lg font-semibold mb-6 flex items-center group">
              <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 mr-3 group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-5 h-5 text-purple-400" />
              </div>
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">AI Services</span>
            </h3>
            <ul className="space-y-3">
              {aiServices.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.path}
<<<<<<< HEAD
                    className="text-gray-300 hover:text-purple-300 transition-colors flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-3379
=======
                    className="text-gray-300 hover:text-white transition-colors text-sm flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-386b
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* IT Services */}
          <div>
<<<<<<< HEAD
<<<<<<< HEAD
            <h3 className="text-lg font-semibold mb-4">IT Services</h3>
=======
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Database className="w-5 h-5 mr-2 text-green-400" />
              IT Services
            </h3>
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-386b
            <ul className="space-y-2">
              {itServices.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
=======
            <h3 className="text-lg font-semibold mb-6 flex items-center group">
              <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500/20 to-cyan-500/20 mr-3 group-hover:scale-110 transition-transform duration-300">
                <Cpu className="w-5 h-5 text-blue-400" />
              </div>
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">IT Services</span>
            </h3>
            <ul className="space-y-3">
              {itServices.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.path}
<<<<<<< HEAD
                    className="text-gray-300 hover:text-blue-300 transition-colors flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-3379
=======
                    className="text-gray-300 hover:text-white transition-colors text-sm flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-386b
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
<<<<<<< HEAD
<<<<<<< HEAD
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
=======
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Smartphone className="w-5 h-5 mr-2 text-purple-400" />
              Micro SAAS
            </h3>
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-386b
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
=======
            <h3 className="text-lg font-semibold mb-6 flex items-center group">
              <div className="p-2 rounded-lg bg-gradient-to-r from-emerald-500/20 to-green-500/20 mr-3 group-hover:scale-110 transition-transform duration-300">
                <Smartphone className="w-5 h-5 text-emerald-400" />
              </div>
              <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">Micro SAAS</span>
            </h3>
            <ul className="space-y-3">
              {microSaasServices.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.path}
<<<<<<< HEAD
                    className="text-gray-300 hover:text-emerald-300 transition-colors flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
=======
                    className="text-gray-300 hover:text-white transition-colors text-sm flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-386b
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
<<<<<<< HEAD
        </div>

        {/* Additional Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-8 border-t border-white/10">
          <div>
            <h4 className="font-semibold mb-4 flex items-center">
              <Globe className="w-4 h-4 mr-2 text-cyan-400" />
              Company
            </h4>
            <ul className="space-y-2">
              {companyLinks.map((link, index) => (
                <li key={index}>
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-3379
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
=======

          {/* Quick Links & Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 mb-6">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-colors text-sm flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-386b
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
<<<<<<< HEAD
          </div>
<<<<<<< HEAD
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
=======

            <div className="space-y-3">
              <div className="flex items-center text-gray-300 text-sm">
                <Phone className="w-4 h-4 mr-3 text-green-400" />
                <span>+1 (302) 464-0950</span>
              </div>
              <div className="flex items-center text-gray-300 text-sm">
                <Mail className="w-4 h-4 mr-3 text-blue-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-start text-gray-300 text-sm">
                <MapPin className="w-4 h-4 mr-3 text-red-400 mt-0.5" />
                <span>364 E Main St STE 1008<br />Middletown, DE 19709</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-386b
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Zion Tech Group. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
=======

          <div>
            <h4 className="font-semibold mb-4 flex items-center">
              <Zap className="w-4 h-4 mr-2 text-purple-400" />
              Support
            </h4>
            <ul className="space-y-2">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 flex items-center">
              <Star className="w-4 h-4 mr-2 text-yellow-400" />
              Contact Info
            </h4>
            <div className="space-y-3">
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors group"
              >
                <Mail className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform duration-300" />
                <span>kleber@ziontechgroup.com</span>
              </a>
              <a 
                href="tel:+13024640950"
                className="flex items-center text-gray-300 hover:text-emerald-400 transition-colors group"
              >
                <Phone className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform duration-300" />
                <span>+1 302 464 0950</span>
              </a>
              <a 
                href="https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-purple-400 transition-colors group"
              >
                <MapPin className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform duration-300" />
                <span>364 E Main St STE 1008<br />Middletown, DE 19709</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Sparkles className="w-4 h-4 text-purple-400 mr-2" />
            <p className="text-gray-400 text-sm">
              © 2024 Zion Tech Group. All rights reserved. | <a href="https://ziontechgroup.com" className="hover:text-cyan-400 transition-colors">ziontechgroup.com</a>
            </p>
          </div>
          <div className="flex flex-wrap gap-4 md:gap-6">
            {legalLinks.map((link, index) => (
              <Link 
                key={index}
                to={link.path} 
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                {link.name}
              </Link>
            ))}
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-3379
          </div>
        </div>
      </div>
    </footer>
<<<<<<< HEAD
  )
=======
  );
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-386b
}