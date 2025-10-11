<<<<<<< HEAD
import React from 'react'
import { Link } from 'react-router-dom'
<<<<<<< HEAD
import { Mail, Phone, MapPin } from 'lucide-react'
=======
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, ArrowRight, Brain, Cloud, Shield, Globe, Code, Smartphone } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-3732

export default function Footer() {
  const services = [
    { name: 'AI Services', href: '/ai-services', icon: <Brain className="w-4 h-4" /> },
    { name: 'IT Services', href: '/it-services', icon: <Code className="w-4 h-4" /> },
    { name: 'Micro SAAS', href: '/micro-saas-services', icon: <Smartphone className="w-4 h-4" /> },
    { name: 'Cloud Services', href: '/cloud-services', icon: <Cloud className="w-4 h-4" /> },
    { name: '5G Implementation', href: '/5g-implementation', icon: <Globe className="w-4 h-4" /> },
    { name: 'Digital Transformation', href: '/digital-transformation', icon: <Shield className="w-4 h-4" /> }
  ];

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/about#team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' }
  ];

  const support = [
    { name: 'Help Center', href: '/support' },
    { name: 'Documentation', href: '/docs' },
    { name: 'API Reference', href: '/api' },
    { name: 'Status', href: '/status' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mr-2">
                <span className="text-white font-bold text-sm">Z</span>
<<<<<<< HEAD
=======
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, ArrowRight, Brain, Cloud, Shield, Globe, Database, Code, Smartphone } from 'lucide-react';
=======
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, ArrowRight, Brain, Code, Smartphone } from 'lucide-react'
>>>>>>> cursor/fix-errors-and-merge-to-main-e951

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
<<<<<<< HEAD
    { name: 'AI Services', path: '/ai-services' },
    { name: 'IT Services', path: '/it-services' },
    { name: 'Micro SAAS', path: '/micro-saas-services' },
    { name: '5G Solutions', path: '/5g-implementation' },
    { name: 'Contact', path: '/contact' }
  ];

  const legal = [
=======
    { name: 'Contact', path: '/contact' },
    { name: 'Blog', path: '/blog' },
    { name: 'Careers', path: '/careers' },
>>>>>>> cursor/fix-errors-and-merge-to-main-e951
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' }
  ]

  return (
    <footer className="bg-gray-900 text-white">
<<<<<<< HEAD
<<<<<<< HEAD
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
<<<<<<< HEAD
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
=======
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
>>>>>>> cursor/fix-errors-and-merge-to-main-099c
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
=======
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
>>>>>>> cursor/fix-errors-and-merge-to-main-fec5
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-59b6
=======
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mr-2">
                <span className="text-white font-bold text-sm">Z</span>
>>>>>>> cursor/fix-errors-and-merge-to-main-e951
              </div>
              <span className="text-xl font-bold">Zion Tech Group</span>
            </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
              </div>
              <span className="text-xl font-bold">Zion Tech Group</span>
            </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-3732
            <p className="text-gray-400 mb-4">
              Advanced AI and IT solutions for modern businesses. Transforming ideas into reality with cutting-edge technology.
            </p>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
            <p className="text-gray-400 text-sm max-w-md">
              Leading provider of AI-powered solutions, 5G implementation, and enterprise IT services.
            </p>
>>>>>>> cursor/fix-errors-and-merge-to-main-099c
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-e951
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
=======
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
>>>>>>> cursor/fix-errors-and-merge-to-main-3732
              </a>
=======
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
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-4 h-4 mr-3" />
                <span>123 Tech Street, Innovation City, IC 12345</span>
              </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-fec5
            </div>
          </div>

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
          {/* Services */}
>>>>>>> cursor/fix-errors-and-merge-to-main-3732
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.href}
                    className="flex items-center text-gray-400 hover:text-white transition-colors"
                  >
                    {service.icon}
                    <span className="ml-2">{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {company.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
<<<<<<< HEAD
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="w-4 h-4 text-purple-400 mr-2" />
                <span className="text-gray-400">info@ziontechgroup.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 text-purple-400 mr-2" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 text-purple-400 mr-2" />
                <span className="text-gray-400">New York, NY</span>
=======
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-e951
          {/* AI Services */}
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
=======
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {support.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
>>>>>>> cursor/fix-errors-and-merge-to-main-3732
                  </Link>
                </li>
              ))}
            </ul>
          </div>
<<<<<<< HEAD

<<<<<<< HEAD
          {/* IT Services */}
<<<<<<< HEAD
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">IT Services</h3>
=======
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.path} 
                    className="text-gray-300 hover:text-purple-300 transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="text-gray-300 hover:text-purple-300 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
>>>>>>> cursor/fix-errors-and-merge-to-main-fec5
            <ul className="space-y-2">
              <li>
                <Link to="/it-services" className="text-gray-400 hover:text-white transition-colors text-sm font-semibold">
                  All IT Services
                </Link>
              </li>
              {itServices.slice(0, 5).map((service, index) => (
=======
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              {services.slice(0, 6).map((service, index) => (
>>>>>>> cursor/fix-errors-and-merge-to-main-099c
                <li key={index}>
<<<<<<< HEAD
                  <Link to={service.path} className="text-gray-400 hover:text-white transition-colors text-sm flex items-center group">
                    {service.name}
                    <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
=======
                  <Link 
                    to={resource.path} 
                    className="text-gray-300 hover:text-purple-300 transition-colors"
                  >
                    {resource.name}
>>>>>>> cursor/fix-errors-and-merge-to-main-fec5
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
                  </Link>
                </li>
              ))}
            </ul>
          </div>

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
>>>>>>> cursor/fix-errors-and-merge-to-main-e951
                  </Link>
                </li>
              ))}
            </ul>
<<<<<<< HEAD
          </div>
        </div>

<<<<<<< HEAD
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
=======
        {/* Quick Links */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-wrap justify-center gap-6">
            {quickLinks.map((link, index) => (
              <Link 
                key={index}
                to={link.path} 
                className="text-gray-400 hover:text-white transition-colors"
              >
                {link.name}
>>>>>>> cursor/fix-errors-and-merge-to-main-e951
              </Link>
            ))}
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-099c
          </div>
        </div>

<<<<<<< HEAD
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-blue-400" />
              <div>
                <p className="text-sm text-gray-400">Email</p>
<<<<<<< HEAD
                <p className="text-white font-medium">kleber@ziontechgroup.com</p>
=======
                <p className="text-white">contact@ziontechgroup.com</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-099c
              </div>
=======
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="flex items-center">
              <Mail className="w-5 h-5 text-blue-400 mr-3" />
              <span className="text-gray-400">contact@ziontechgroup.com</span>
>>>>>>> cursor/fix-errors-and-merge-to-main-3732
            </div>
            <div className="flex items-center">
              <Phone className="w-5 h-5 text-blue-400 mr-3" />
              <span className="text-gray-400">+1 (555) 123-4567</span>
            </div>
<<<<<<< HEAD
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-blue-400" />
              <div>
                <p className="text-sm text-gray-400">Location</p>
<<<<<<< HEAD
                <p className="text-white font-medium">364 E Main St STE 1008<br />Middletown DE 19709</p>
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-59b6
=======
                <p className="text-white">San Francisco, CA</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-099c
              </div>
=======
        {/* Contact Info */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center space-x-2 text-gray-400">
              <Mail className="h-5 w-5" />
              <span>contact@ziontechgroup.com</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-400">
              <Phone className="h-5 w-5" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-400">
              <MapPin className="h-5 w-5" />
              <span>New York, NY</span>
>>>>>>> cursor/fix-errors-and-merge-to-main-e951
=======
            <div className="flex items-center">
              <MapPin className="w-5 h-5 text-blue-400 mr-3" />
              <span className="text-gray-400">San Francisco, CA</span>
>>>>>>> cursor/fix-errors-and-merge-to-main-3732
            </div>
          </div>

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
        {/* Copyright */}
>>>>>>> cursor/fix-errors-and-merge-to-main-e951
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Zion Tech Group. All rights reserved.
          </p>
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-fec5
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
=======
          {/* Newsletter */}
          <div className="bg-gray-800 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
            <p className="text-gray-400 mb-4">Get the latest news and updates about our AI and IT services.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
>>>>>>> cursor/fix-errors-and-merge-to-main-3732
              />
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>

<<<<<<< HEAD
<<<<<<< HEAD
        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8">
=======
          {/* Bottom Bar */}
>>>>>>> cursor/fix-errors-and-merge-to-main-3732
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Zion Tech Group. All rights reserved.
            </p>
<<<<<<< HEAD
>>>>>>> cursor/fix-errors-and-merge-to-main-099c
=======
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
            </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-fec5
          </div>
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-59b6
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-e951
        </div>
      </div>
    </footer>
<<<<<<< HEAD
  )
<<<<<<< HEAD
=======
  );
>>>>>>> cursor/fix-errors-and-merge-to-main-099c
}
=======
}
>>>>>>> cursor/fix-errors-and-merge-to-main-e951
=======
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-3732
