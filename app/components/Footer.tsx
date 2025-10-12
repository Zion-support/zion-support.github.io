import React from 'react'
import { Link } from 'react-router-dom'
<<<<<<< HEAD
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Zion Tech Group</h3>
            <p className="text-gray-400 mb-4">
              Leading provider of AI-powered solutions, cybersecurity, and digital transformation services.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/ai-services" className="text-gray-400 hover:text-white transition-colors">AI Services</Link></li>
              <li><Link to="/it-services" className="text-gray-400 hover:text-white transition-colors">IT Services</Link></li>
              <li><Link to="/micro-saas" className="text-gray-400 hover:text-white transition-colors">Micro SaaS</Link></li>
              <li><Link to="/cloud-services" className="text-gray-400 hover:text-white transition-colors">Cloud Services</Link></li>
              <li><Link to="/5g-implementation" className="text-gray-400 hover:text-white transition-colors">5G Implementation</Link></li>
              <li><Link to="/digital-transformation" className="text-gray-400 hover:text-white transition-colors">Digital Transformation</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/case-studies" className="text-gray-400 hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link to="/whitepapers" className="text-gray-400 hover:text-white transition-colors">Whitepapers</Link></li>
              <li><Link to="/api-docs" className="text-gray-400 hover:text-white transition-colors">API Documentation</Link></li>
              <li><Link to="/support" className="text-gray-400 hover:text-white transition-colors">Support Center</Link></li>
              <li><Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="w-4 h-4 text-gray-400 mr-3" />
                <span className="text-gray-400">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 text-gray-400 mr-3" />
                <span className="text-gray-400">+1 302 464 0950</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 text-gray-400 mr-3" />
                <span className="text-gray-400">364 E Main St STE 1008 Middletown DE 19709</span>
              </div>
=======
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, ArrowRight, Brain, Cloud, Shield, Globe, Database, Code, Smartphone } from 'lucide-react';
=======
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, ArrowRight, Brain, Code, Smartphone } from 'lucide-react'
>>>>>>> cursor/analyze-improve-and-deploy-application-b46d

export default function Footer() {
  const aiServices = [
    { name: 'AI Content Generator', path: '/ai-content-generator' },
    { name: 'AI Chatbot Builder', path: '/ai-chatbot-builder' },
    { name: 'AI Analytics Dashboard', path: '/ai-analytics-dashboard' },
    { name: 'AI Email Assistant', path: '/ai-email-assistant' },
    { name: 'AI Voice Assistant', path: '/ai-voice-assistant' },
    { name: 'AI Automation Suite', path: '/ai-automation' }
  ]

  const itServices = [
    { name: 'Cloud Migration', path: '/cloud-migration' },
    { name: 'Cybersecurity Solutions', path: '/cybersecurity-solutions' },
    { name: 'DevOps & CI/CD', path: '/devops-cicd' },
    { name: 'Data Analytics', path: '/data-analytics' },
    { name: 'Mobile Development', path: '/mobile-development' },
    { name: 'Blockchain Solutions', path: '/blockchain' }
  ]

  const microSaasServices = [
    { name: 'AI Task Manager', path: '/ai-task-manager' },
    { name: 'AI Expense Tracker', path: '/ai-expense-tracker' },
    { name: 'AI Password Manager', path: '/ai-password-manager' },
    { name: 'AI Invoice Generator', path: '/ai-invoice-generator' },
    { name: 'AI Health Tracker', path: '/ai-health-tracker' },
    { name: 'AI Smart Calendar', path: '/ai-smart-calendar' }
  ]

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Blog', path: '/blog' },
    { name: 'Careers', path: '/careers' }
  ]

  const legal = [
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' }
  ]

  return (
    <footer className="bg-gray-900 text-white">
<<<<<<< HEAD
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
=======
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mr-2">
                <span className="text-white font-bold text-sm">Z</span>
>>>>>>> cursor/analyze-improve-and-deploy-application-b46d
              </div>
              <span className="text-xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading provider of AI-powered solutions, 5G implementation, and enterprise IT services. 
              Transform your business with cutting-edge technology.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-3" />
                <span>contact@ziontechgroup.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 mr-3" />
                <span>+1 (302) 464-0950</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-4 h-4 mr-3" />
                <span>364 E Main St STE 1008, Middletown, DE 19709</span>
              </div>
            </div>
          </div>

          {/* AI Services */}
<<<<<<< HEAD
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">AI Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/ai-services" className="text-gray-400 hover:text-white transition-colors text-sm font-semibold">
                  All AI Services
                </Link>
              </li>
              {aiServices.slice(0, 5).map((service, index) => (
                <li key={index}>
                  <Link to={service.path} className="text-gray-400 hover:text-white transition-colors text-sm flex items-center group">
                    {service.name}
                    <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
=======
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Brain className="h-5 w-5 mr-2 text-purple-400" />
              AI Services
            </h3>
            <ul className="space-y-2">
              {aiServices.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.path} 
                    className="text-gray-400 hover:text-white transition-colors flex items-center group"
                  >
                    <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
>>>>>>> cursor/analyze-improve-and-deploy-application-b46d
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* IT Services */}
<<<<<<< HEAD
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">IT Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/it-services" className="text-gray-400 hover:text-white transition-colors text-sm font-semibold">
                  All IT Services
                </Link>
              </li>
              {itServices.slice(0, 5).map((service, index) => (
                <li key={index}>
                  <Link to={service.path} className="text-gray-400 hover:text-white transition-colors text-sm flex items-center group">
                    {service.name}
                    <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
=======
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Code className="h-5 w-5 mr-2 text-blue-400" />
              IT Services
            </h3>
            <ul className="space-y-2">
              {itServices.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.path} 
                    className="text-gray-400 hover:text-white transition-colors flex items-center group"
                  >
                    <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
>>>>>>> cursor/analyze-improve-and-deploy-application-b46d
                  </Link>
                </li>
              ))}
            </ul>
<<<<<<< HEAD
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
=======
>>>>>>> cursor/analyze-improve-and-deploy-application-b46d
          </div>

<<<<<<< HEAD
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
>>>>>>> cursor/website-audit-and-update-with-deployment-e118
            </div>
          </div>
        </div>

<<<<<<< HEAD
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Zion Tech Group. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
=======
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
                  </Link>
                ))}
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <p className="text-gray-500 text-xs">
                Built with ❤️ by Zion Tech Group
              </p>
>>>>>>> cursor/website-audit-and-update-with-deployment-e118
=======
          {/* Micro SaaS Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Smartphone className="h-5 w-5 mr-2 text-green-400" />
              Micro SaaS
            </h3>
            <ul className="space-y-2">
              {microSaasServices.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.path} 
                    className="text-gray-400 hover:text-white transition-colors flex items-center group"
                  >
                    <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Zion Tech Group. All rights reserved.
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4 mb-4 md:mb-0">
              <a href="#" className="text-gray-400 hover:text-purple-300 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-300 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-300 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap gap-4 text-sm">
              {legal.map((item, index) => (
                <Link 
                  key={index}
                  to={item.path} 
                  className="text-gray-400 hover:text-purple-300 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
>>>>>>> cursor/analyze-improve-and-deploy-application-b46d
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
<<<<<<< HEAD
}
=======
  );
}
>>>>>>> cursor/website-audit-and-update-with-deployment-e118
=======
}
>>>>>>> cursor/analyze-improve-and-deploy-application-b46d
