<<<<<<< HEAD
import React from 'react'
import Link from 'next/link'
import { Facebook, Github, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()
  
  const aiServices = [
=======
'use client'

import React from 'react'
import { Link } from 'react-router-dom'
import { Facebook, Github, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react'

const Footer: React.FC = () => {
  const _currentYear = new Date().getFullYear()
  
  const _aiServices = [
>>>>>>> cursor/fix-errors-and-merge-to-main-2480
    { name: 'AI Analytics & BI', url: '/ai-analytics', description: 'Business intelligence' },
    { name: 'AI Automation', url: '/ai-automation', description: 'Process automation' },
    { name: 'AI Chatbots & NLP', url: '/ai-chatbot-builder', description: 'Conversational AI' },
    { name: 'AI Content Generation', url: '/ai-content-generation', description: 'Automated content' },
    { name: 'AI Cybersecurity', url: '/ai-cybersecurity', description: 'AI security' },
    { name: 'Computer Vision', url: '/computer-vision', description: 'Image recognition' },
    { name: 'Predictive Analytics', url: '/predictive-analytics', description: 'Forecasting' },
    { name: 'Speech & Voice AI', url: '/ai-voice-assistant', description: 'Voice technology' }
  ]
<<<<<<< HEAD

  const itServices = [
=======
  
  const _itServices = [
>>>>>>> cursor/fix-errors-and-merge-to-main-2480
    { name: 'Web Development', url: '/web-development', description: 'Custom websites' },
    { name: 'Mobile Development', url: '/mobile-development', description: 'iOS & Android apps' },
    { name: 'Cloud Migration', url: '/cloud-migration', description: 'Cloud solutions' },
    { name: 'Cybersecurity', url: '/cybersecurity', description: 'Security services' },
    { name: 'DevOps', url: '/devops', description: 'Development operations' },
    { name: 'Data Analytics', url: '/data-analytics', description: 'Data insights' },
    { name: 'IoT Solutions', url: '/iot-solutions', description: 'Internet of Things' },
    { name: 'Blockchain', url: '/blockchain', description: 'Blockchain technology' }
  ]
<<<<<<< HEAD

  const company = [
=======
  
  const _company = [
>>>>>>> cursor/fix-errors-and-merge-to-main-2480
    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/team' },
    { name: 'Careers', url: '/careers' },
    { name: 'News', url: '/news' },
    { name: 'Contact', url: '/contact' }
  ]
<<<<<<< HEAD

  const resources = [
=======
  
  const _resources = [
>>>>>>> cursor/fix-errors-and-merge-to-main-2480
    { name: 'Documentation', url: '/docs' },
    { name: 'API Reference', url: '/api' },
    { name: 'Tutorials', url: '/tutorials' },
    { name: 'Blog', url: '/blog' },
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
>>>>>>> cursor/fix-errors-and-merge-to-main-2480

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
<<<<<<< HEAD
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
=======
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
>>>>>>> cursor/fix-errors-and-merge-to-main-2480
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <div className="text-xl font-bold">Zion Tech Group</div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading technology solutions provider helping businesses transform their digital
              presence with cutting-edge AI, cloud architecture and innovative development services.
            </p>
            <div className="flex space-x-4">
              <Link
<<<<<<< HEAD
                href="https://linkedin.com/company/ziontechgroup"
=======
                to="https://linkedin.com/company/ziontechgroup"
>>>>>>> cursor/fix-errors-and-merge-to-main-2480
                className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
<<<<<<< HEAD
                href="https://twitter.com/ziontechgroup"
=======
                to="https://twitter.com/ziontechgroup"
>>>>>>> cursor/fix-errors-and-merge-to-main-2480
                className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
<<<<<<< HEAD
                href="https://github.com/ziontechgroup"
=======
                to="https://github.com/ziontechgroup"
>>>>>>> cursor/fix-errors-and-merge-to-main-2480
                className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </Link>
              <Link
<<<<<<< HEAD
                href="https://facebook.com/ziontechgroup"
=======
                to="https://facebook.com/ziontechgroup"
>>>>>>> cursor/fix-errors-and-merge-to-main-2480
                className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
            </div>
          </div>
<<<<<<< HEAD

          {/* AI Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">AI Services</h3>
            <ul className="space-y-2">
              {aiServices.map(service => (
                <li key={service.name}>
                  <Link
                    href={service.url}
                    className="text-gray-300 hover:text-white transition-colors block">
                    {service.name}
=======
          
          <div>
            <h3 className="text-lg font-semibold mb-4">AI Services</h3>
            <ul className="space-y-2">
              {_aiServices.slice(0, 6).map(service => (
                <li key={service.name}>
                  <Link to={service.url}>
                    <span className="text-gray-300 hover:text-white transition-colors">
                      {service.name}
                    </span>
>>>>>>> cursor/fix-errors-and-merge-to-main-2480
                  </Link>
                </li>
              ))}
            </ul>
          </div>
<<<<<<< HEAD

          {/* IT Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">IT Services</h3>
            <ul className="space-y-2">
              {itServices.map(service => (
                <li key={service.name}>
                  <Link
                    href={service.url}
                    className="text-gray-300 hover:text-white transition-colors block">
                    {service.name}
=======
          
          <div>
            <h3 className="text-lg font-semibold mb-4">IT Services</h3>
            <ul className="space-y-2">
              {_itServices.slice(0, 6).map(service => (
                <li key={service.name}>
                  <Link to={service.url}>
                    <span className="text-gray-300 hover:text-white transition-colors">
                      {service.name}
                    </span>
>>>>>>> cursor/fix-errors-and-merge-to-main-2480
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
              {company.map(item => (
                <li key={item.name}>
                  <Link
                    href={item.url}
                    className="text-gray-300 hover:text-white transition-colors block">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {resources.map(item => (
                <li key={item.name}>
                  <Link
                    href={item.url}
                    className="text-gray-300 hover:text-white transition-colors block">
                    {item.name}
=======
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {_company.map(item => (
                <li key={item.name}>
                  <Link to={item.url}>
                    <span className="text-gray-300 hover:text-white transition-colors">
                      {item.name}
                    </span>
>>>>>>> cursor/fix-errors-and-merge-to-main-2480
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
<<<<<<< HEAD

        {/* Contact Info */}
=======
        
>>>>>>> cursor/fix-errors-and-merge-to-main-2480
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-blue-400" />
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="text-white">info@ziontechgroup.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-blue-400" />
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <p className="text-white">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-blue-400" />
              <div>
                <p className="text-sm text-gray-400">Address</p>
                <p className="text-white">123 Tech Street, Innovation City</p>
              </div>
            </div>
          </div>
        </div>
<<<<<<< HEAD

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              &copy; {currentYear} Zion Tech Group. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {legal.map(item => (
                <Link
                  key={item.name}
                  href={item.url}
                  className="text-gray-400 hover:text-white text-sm transition-colors">
                  {item.name}
                </Link>
              ))}
=======
        
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              &copy; {new Date().getFullYear()} Zion Tech Group. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/legal/privacy">
                <span className="text-gray-400 hover:text-white text-sm transition-colors">
                  Privacy Policy
                </span>
              </Link>
              <Link to="/legal/terms">
                <span className="text-gray-400 hover:text-white text-sm transition-colors">
                  Terms of Service
                </span>
              </Link>
              <Link to="/legal/cookies">
                <span className="text-gray-400 hover:text-white text-sm transition-colors">
                  Cookie Policy
                </span>
              </Link>
>>>>>>> cursor/fix-errors-and-merge-to-main-2480
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer