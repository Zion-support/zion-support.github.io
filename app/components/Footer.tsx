<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react'
import Link from 'next/link'
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, ArrowRight, Brain, Cloud, Shield, Globe, Database, Smartphone, Zap, Sparkles, Star } from 'lucide-react'
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()
  const aiServices = [
    { name: 'AI Analytics & BI', url: '/ai-analytics', description: 'Business intelligence' },
    { name: 'AI Automation', url: '/ai-automation', description: 'Process automation' },
    { name: 'AI Chatbots & NLP', url: '/ai-chatbot-builder', description: 'Conversational AI' },
    { name: 'AI Content Generation', url: '/ai-content-generation', description: 'Automated content' },
    { name: 'AI Cybersecurity', url: '/ai-cybersecurity', description: 'AI security' },
    { name: 'Computer Vision', url: '/computer-vision', description: 'Image recognition' },
    { name: 'Predictive Analytics', url: '/predictive-analytics', description: 'Forecasting' },
    { name: 'Speech & Voice AI', url: '/ai-voice-assistant', description: 'Voice technology' }
  ]
  const itServices = [
    { name: 'Web Development', url: '/web-development', description: 'Custom websites' },
    { name: 'Mobile Development', url: '/mobile-development', description: 'iOS & Android apps' },
    { name: 'Cloud Migration', url: '/cloud-migration', description: 'Cloud solutions' },
    { name: 'Cybersecurity', url: '/cybersecurity', description: 'Security services' },
    { name: 'DevOps', url: '/devops', description: 'Development operations' },
    { name: 'Data Analytics', url: '/data-analytics', description: 'Data insights' },
    { name: 'IoT Solutions', url: '/iot-solutions', description: 'Internet of Things' },
    { name: 'Blockchain', url: '/blockchain', description: 'Blockchain technology' }
  ]
  const microSaas = [
    { name: 'AI Email Marketing', url: '/micro-saas/ai-email-marketing-automation', description: 'Email automation' },
    { name: 'AI Inventory Manager', url: '/micro-saas/ai-inventory-manager', description: 'Inventory tracking' },
    { name: 'AI Project Manager', url: '/micro-saas/ai-project-manager', description: 'Project management' },
    { name: 'AI Social Scheduler', url: '/micro-saas/ai-social-media-scheduler', description: 'Social media' }
  ]
  const company = [
=======
'use client'

import React, { memo } from 'react'
import Link from 'next/link'
import { Phone, Mail, MapPin, Brain, Facebook, Github, Linkedin, Twitter } from 'lucide-react'

const Footer: React.FC = memo(() => {
  const currentYear = new Date().getFullYear()
  
  const aiServices = [
    { name: 'AI Analytics & BI', url: '/ai-analytics' },
    { name: 'AI Automation', url: '/ai-automation' },
    { name: 'AI Chatbots & NLP', url: '/ai-chatbot-builder' },
    { name: 'AI Content Generation', url: '/ai-content-generation' },
    { name: 'AI Cybersecurity', url: '/ai-cybersecurity' },
    { name: 'Computer Vision', url: '/computer-vision' },
    { name: 'Predictive Analytics', url: '/predictive-analytics' },
    { name: 'Speech & Voice AI', url: '/ai-voice-assistant' }
  ]

  const itServices = [
    { name: 'Web Development', url: '/web-development' },
    { name: 'Mobile Development', url: '/mobile-development' },
    { name: 'Cloud Migration', url: '/cloud-migration' },
    { name: 'Cybersecurity', url: '/cybersecurity' },
    { name: 'DevOps', url: '/devops' },
    { name: 'Data Analytics', url: '/data-analytics' },
    { name: 'IoT Solutions', url: '/iot-solutions' },
    { name: 'Blockchain', url: '/blockchain' }
  ]

  const companyLinks = [
>>>>>>> 1c3bcb5bf864
    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/team' },
    { name: 'Careers', url: '/careers' },
    { name: 'News', url: '/news' },
    { name: 'Contact', url: '/contact' }
  ]
<<<<<<< HEAD
  const resources = [
=======

  const resourceLinks = [
>>>>>>> 1c3bcb5bf864
    { name: 'Documentation', url: '/docs' },
    { name: 'API Reference', url: '/api' },
    { name: 'Blog', url: '/blog' },
    { name: 'Tutorials', url: '/tutorials' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Support', url: '/support' }
  ]
<<<<<<< HEAD
  const legal = [
    { name: 'Privacy Policy', url: '/privacy' },
    { name: 'Terms of Service', url: '/terms' },
    { name: 'Cookie Policy', url: '/cookies' },
    { name: 'GDPR Compliance', url: '/gdpr' }
  ]
=======

  const legalLinks = [
    { name: 'Privacy Policy', url: '/privacy' },
    { name: 'Terms of Service', url: '/terms' },
    { name: 'Cookie Policy', url: '/cookies' }
  ]

>>>>>>> 1c3bcb5bf864
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-400 text-sm">
              Leading provider of AI and IT solutions, empowering businesses with cutting-edge technology and innovative digital transformation services.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover: text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover: text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover: text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          {/* AI Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center">
              <Brain className="w-5 h-5 mr-2 text-cyan-400" />
              AI Services
            </h3>
            <ul className="space-y-2">
              {aiServices.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.url}
                    className="text-gray-400 hover: text-white transition-colors text-sm flex items-center group"
                  >
<<<<<<< HEAD
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover: opacity-100 transition-opacity" />
=======
=======
import React from 'react'
import Link from 'next/link'
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, ArrowRight, Brain, Cloud, Shield, Globe, Database, Smartphone, Zap, Sparkles, Star } from 'lucide-react'
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()
  const aiServices = [
    { name: 'AI Analytics & BI', url: '/ai-analytics', description: 'Business intelligence' },
    { name: 'AI Automation', url: '/ai-automation', description: 'Process automation' },
    { name: 'AI Chatbots & NLP', url: '/ai-chatbot-builder', description: 'Conversational AI' },
    { name: 'AI Content Generation', url: '/ai-content-generation', description: 'Automated content' },
    { name: 'AI Cybersecurity', url: '/ai-cybersecurity', description: 'AI security' },
    { name: 'Computer Vision', url: '/computer-vision', description: 'Image recognition' },
    { name: 'Predictive Analytics', url: '/predictive-analytics', description: 'Forecasting' },
    { name: 'Speech & Voice AI', url: '/ai-voice-assistant', description: 'Voice technology' }
  ]
  const itServices = [
    { name: 'Web Development', url: '/web-development', description: 'Custom websites' },
    { name: 'Mobile Development', url: '/mobile-development', description: 'iOS & Android apps' },
    { name: 'Cloud Migration', url: '/cloud-migration', description: 'Cloud solutions' },
    { name: 'Cybersecurity', url: '/cybersecurity', description: 'Security services' },
    { name: 'DevOps', url: '/devops', description: 'Development operations' },
    { name: 'Data Analytics', url: '/data-analytics', description: 'Data insights' },
    { name: 'IoT Solutions', url: '/iot-solutions', description: 'Internet of Things' },
    { name: 'Blockchain', url: '/blockchain', description: 'Blockchain technology' }
  ]
  const microSaas = [
    { name: 'AI Email Marketing', url: '/micro-saas/ai-email-marketing-automation', description: 'Email automation' },
    { name: 'AI Inventory Manager', url: '/micro-saas/ai-inventory-manager', description: 'Inventory tracking' },
    { name: 'AI Project Manager', url: '/micro-saas/ai-project-manager', description: 'Project management' },
    { name: 'AI Social Scheduler', url: '/micro-saas/ai-social-media-scheduler', description: 'Social media' }
  ]
  const company = [
    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/team' },
    { name: 'Careers', url: '/careers' },
    { name: 'News', url: '/news' },
    { name: 'Contact', url: '/contact' }
  ]
  const resources = [
    { name: 'Documentation', url: '/docs' },
    { name: 'API Reference', url: '/api' },
    { name: 'Blog', url: '/blog' },
    { name: 'Tutorials', url: '/tutorials' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Support', url: '/support' }
  ]
  const legal = [
    { name: 'Privacy Policy', url: '/privacy' },
    { name: 'Terms of Service', url: '/terms' },
    { name: 'Cookie Policy', url: '/cookies' },
    { name: 'GDPR Compliance', url: '/gdpr' }
  ]
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-400 text-sm">
              Leading provider of AI and IT solutions, empowering businesses with cutting-edge technology and innovative digital transformation services.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover: text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover: text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover: text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          {/* AI Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center">
              <Brain className="w-5 h-5 mr-2 text-cyan-400" />
              AI Services
            </h3>
            <ul className="space-y-2">
              {aiServices.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.url}
                    className="text-gray-400 hover: text-white transition-colors text-sm flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover: opacity-100 transition-opacity" />
>>>>>>> 0a8d6a0455c0 (Fix TypeScript syntax errors and component export issues)
>>>>>>> 1c3bcb5bf864
                    {service.name}
=======
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'AI Solutions', href: '/ai-solutions' },
      { name: 'Cybersecurity', href: '/cybersecurity' },
      { name: 'Cloud Infrastructure', href: '/cloud-solutions' },
      { name: 'Digital Transformation', href: '/digital-transformation' },
      { name: 'Micro SaaS', href: '/micro-saas' },
      { name: '5G Solutions', href: '/5g-solutions' }
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Solutions', href: '/solutions' },
      { name: 'Pricing', href: '/pricing' },
      { name: 'Blog', href: '/blog' }
    ],
    support: [
      { name: 'Contact', href: '/contact' },
      { name: 'Support', href: '/support' },
      { name: 'Tutorials', href: '/tutorials' },
      { name: 'Demo', href: '/demo' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' }
    ]
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-700/50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-6 group">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <span className="text-white font-bold text-2xl">Zion Tech Group</span>
            </Link>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Transforming businesses through cutting-edge AI and IT solutions. 
              We help companies innovate and grow in the digital age with real, proven results.
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-gray-300">
                <PhoneIcon className="w-5 h-5 text-purple-400" />
                <span>+1-302-464-0950</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPinIcon className="w-5 h-5 text-purple-400" />
                <span>364 E Main St STE 1008, Middletown, DE 19709</span>
              </div>
            </div>
          </div>
<<<<<<< HEAD

          <div>
<<<<<<< HEAD
            <h3 className="text-white font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
=======
            <h3 className="text-lg font-semibold mb-4">IT Services</h3>
            <ul className="space-y-2">
              {itServices.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.url}
                    className="text-gray-300 hover:text-white transition-colors block"
                  >
=======
          {/* IT Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center">
              <Cloud className="w-5 h-5 mr-2 text-purple-400" />
              IT Services
            </h3>
            <ul className="space-y-2">
              {itServices.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.url}
                    className="text-gray-400 hover: text-white transition-colors text-sm flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover: opacity-100 transition-opacity" />
>>>>>>> 0a8d6a0455c0 (Fix TypeScript syntax errors and component export issues)
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
<<<<<<< HEAD

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
>>>>>>> 1c3bcb5bf864
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center group"
                  >
                    <ArrowRightIcon className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    {link.name}
>>>>>>> main
                  </Link>
                </li>
              ))}
            </ul>
          </div>
<<<<<<< HEAD
          {/* IT Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center">
              <Cloud className="w-5 h-5 mr-2 text-purple-400" />
              IT Services
            </h3>
            <ul className="space-y-2">
              {itServices.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.url}
                    className="text-gray-400 hover: text-white transition-colors text-sm flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover: opacity-100 transition-opacity" />
                    {service.name}
=======

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center group"
                  >
                    <ArrowRightIcon className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    {link.name}
>>>>>>> main
                  </Link>
                </li>
              ))}
            </ul>
          </div>
<<<<<<< HEAD
          {/* Company & Resources */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                {company.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.url}
                      className="text-gray-400 hover: text-white transition-colors text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                {resources.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.url}
                      className="text-gray-400 hover: text-white transition-colors text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
=======

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center group"
                  >
                    <ArrowRightIcon className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6">
              {footerLinks.legal.map((link) => (
                <Link 
                  key={link.name}
                  to={link.href} 
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
>>>>>>> main
            </div>
          </div>
        </div>
        {/* Contact Info */}
        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="grid grid-cols-1 md: grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-cyan-400" />
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="text-white">contact@ziontechgroup.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-purple-400" />
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <p className="text-white">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-green-400" />
              <div>
                <p className="text-sm text-gray-400">Location</p>
                <p className="text-white">San Francisco, CA</p>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-8 pt-6 flex flex-col md: flex-row justify-between items-center">
          <div className="flex flex-wrap gap-6 mb-4 md: mb-0">
            {legal.map((item, index) => (
              <Link
                key={index}
                href={item.url}
                className="text-gray-400 hover: text-white transition-colors text-sm"
              >
                {item.name}
              </Link>
            ))}
=======
          {/* Company & Resources */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                {company.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.url}
                      className="text-gray-400 hover: text-white transition-colors text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                {resources.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.url}
                      className="text-gray-400 hover: text-white transition-colors text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
>>>>>>> 0a8d6a0455c0 (Fix TypeScript syntax errors and component export issues)
          </div>
          <p className="text-gray-400 text-sm">
            © {currentYear} Zion Tech Group. All rights reserved.
          </p>
        </div>
        {/* Contact Info */}
        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="grid grid-cols-1 md: grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-cyan-400" />
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="text-white">contact@ziontechgroup.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-purple-400" />
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <p className="text-white">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-green-400" />
              <div>
                <p className="text-sm text-gray-400">Location</p>
                <p className="text-white">San Francisco, CA</p>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-8 pt-6 flex flex-col md: flex-row justify-between items-center">
          <div className="flex flex-wrap gap-6 mb-4 md: mb-0">
            {legal.map((item, index) => (
              <Link
                key={index}
                href={item.url}
                className="text-gray-400 hover: text-white transition-colors text-sm"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <p className="text-gray-400 text-sm">
            © {currentYear} Zion Tech Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
<<<<<<< HEAD
<<<<<<< HEAD
  )
}
export default Footer
=======
  );
}
>>>>>>> main
=======
  )
<<<<<<< HEAD
})

Footer.displayName = 'Footer'

=======
}
>>>>>>> 0a8d6a0455c0 (Fix TypeScript syntax errors and component export issues)
export default Footer
>>>>>>> 1c3bcb5bf864
