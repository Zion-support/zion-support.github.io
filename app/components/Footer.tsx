<<<<<<< HEAD
import React from 'react'
import { Link } from 'react-router-dom'
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
  ]
=======
    { name: 'AI Automation Suite', path: '/ai-automation' },
    { name: 'AI 3D Generation', path: '/ai-3d-generation' },
    { name: 'AI Drug Discovery Pro', path: '/ai-drug-discovery-pro' }
  ];
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-5508

  const itServices = [
    { name: 'Cloud Migration', path: '/cloud-migration' },
    { name: 'DevOps Solutions', path: '/devops-solutions' },
    { name: 'Cybersecurity', path: '/cybersecurity' },
    { name: 'Data Analytics', path: '/data-analytics' },
<<<<<<< HEAD
    { name: 'API Development', path: '/api-development' },
    { name: 'System Integration', path: '/system-integration' }
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
    { name: 'Contact', path: '/contact' }
>>>>>>> cursor/website-audit-and-update-with-deployment-c78e
  ]

  return (
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