import React from 'react',
import Link from 'next/link',
import { Mail, Phone, MapPin, Globe, Zap, Bot, Cloud, Shield, ArrowRight } from 'lucide-react',

export default function FuturisticFooter() {
  const currentYear = new Date().getFullYear(),

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  },

  const quickLinks = [
    { name: 'Services', href: '/services' },
    { name: 'Micro SaaS', href: '/micro-saas' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/blog' }],

  const serviceCategories = [
    { name: 'AI & Machine Learning', href: '/services?category=AI%20%26%20Machine%20Learning' },
    { name: 'Cloud & Infrastructure', href: '/services?category=Cloud%20%26%20Infrastructure' },
    { name: 'Cybersecurity', href: '/services?category=Cybersecurity' },
    { name: 'Analytics & Business Intelligence', href: '/services?category=Analytics%20%26%20Business%20Intelligence' },
    { name: 'Robotics & Automation', href: '/services?category=Robotics%20%26%20Automation' },
    { name: 'Blockchain & Web3', href: '/services?category=Blockchain%20%26%20Web3' }],

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/zion-tech-group', icon: '' },
    { name: 'X', href: 'https://x.com/ziontechgroup', icon: '' },
    { name: 'GitHub', href: 'https://github.com/Zion-Holdings', icon: '' }],

  return (
    <footer className=&quot;relative bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden&quot;>
      {/* Animated background elements */}
      <div className=&quot;absolute inset-0&quot;>
        <div className=&quot;absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5&quot; />
        <div className=&quot;absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent&quot; />
        <div className=&quot;absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent&quot; />
      </div>

      <div className=&quot;relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16&quot;>
        {/* Main footer content */}
        <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12&quot;>
          {/* Company Info */}
          <div className=&quot;lg:col-span-1&quot;>
            <div className=&quot;flex items-center space-x-2 mb-6&quot;>
              <div className=&quot;w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center&quot;>
                <Zap className=&quot;w-6 h-6 text-white&quot; />              </div>
              <span className=&quot;text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent&quot;>
                Zion Tech Group
              </span>
            </div>
            <p className=&quot;text-gray-400 mb-6 leading-relaxed&quot;>
              Leading provider of AI-powered micro SaaS solutions, helping businesses automate, optimize, and scale their operations with cutting-edge technology.
            </p>
            <div className=&quot;flex space-x-4&quot;>
              {socialLinks.map(social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target=&quot;_blank&quot;
                  rel=&quot;noopener noreferrer&quot;
                  className=&quot;w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/40&quot;
                >
                  <span className=&quot;text-lg&quot;>{social.icon}</span>                </a>
              )}
            </div>
          </div>

          {_/* Quick Links */}
          <div>
            <h3 className=&quot;text-lg font-semibold text-white mb-6 flex items-center&quot;>
              <ArrowRight className=&quot;w-5 h-5 text-blue-400 mr-2&quot; />
              Quick Links
            </h3>
            <ul className=&quot;space-y-3&quot;>
              {quickLinks.map(link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className=&quot;text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block&quot;
                  >
                    {link.name}
                  </a>                </li>
              )}
            </ul>
          </div>

          {_/* Services */}
          <div>
            <h3 className=&quot;text-lg font-semibold text-white mb-6 flex items-center&quot;>
              <Cloud className=&quot;w-5 h-5 text-green-400 mr-2&quot; />
              Services
            </h3>
            <ul className=&quot;space-y-3&quot;>
              {serviceCategories.map(service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className=&quot;text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block&quot;
                  >
                    {service.name}
                  </a>                </li>
              )}
            </ul>
          </div>

          {_/* Contact Info */}
          <div>
            <h3 className=&quot;text-lg font-semibold text-white mb-6 flex items-center&quot;>
              <Shield className=&quot;w-5 h-5 text-purple-400 mr-2&quot; />
              Contact Us
            </h3>
            <div className=&quot;space-y-4&quot;>
              <div className=&quot;flex items-start space-x-3&quot;>
                <Phone className=&quot;w-5 h-5 text-blue-400 mt-1 flex-shrink-0&quot; />
                <div>
                  <p className=&quot;text-white font-medium&quot;>Phone</p>
                  <a 
                    href={`tel:${contactInfo.mobile}`}
                    className=&quot;text-gray-400 hover:text-blue-400 transition-colors duration-200&quot;                  >
                    {_contactInfo.mobile}
                  </a>
                </div>
              </div>

              <div className=&quot;flex items-start space-x-3&quot;>
                <Mail className=&quot;w-5 h-5 text-green-400 mt-1 flex-shrink-0&quot; />
                <div>
                  <p className=&quot;text-white font-medium&quot;>Email</p>
                  <a 
                    href={`mailto:${contactInfo.email}`}
                    className=&quot;text-gray-400 hover:text-green-400 transition-colors duration-200&quot;                  >
                    {_contactInfo.email}
                  </a>
                </div>
              </div>

              <div className=&quot;flex items-start space-x-3&quot;>
                <MapPin className=&quot;w-5 h-5 text-purple-400 mt-1 flex-shrink-0&quot; />
                <div>
                  <p className=&quot;text-white font-medium&quot;>Address</p>
                  <p className=&quot;text-gray-400 text-sm&quot;>
                    {contactInfo.address}                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className=&quot;pt-8 border-t border-gray-800&quot;>
          <div className=&quot;flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0&quot;>
            <div className=&quot;text-gray-400 text-sm&quot;>
               {currentYear} Zion Tech Group. All rights reserved.            </div>

            <div className=&quot;flex space-x-6 text-sm&quot;>
              <Link href=&quot;/privacy&quot; className=&quot;text-gray-400 hover:text-white transition-colors duration-200&quot;>
                Privacy Policy
              </a>
              <Link href=&quot;/terms&quot; className=&quot;text-gray-400 hover:text-white transition-colors duration-200&quot;>
                Terms of Service
              </a>
              <Link href=&quot;/cookies&quot; className=&quot;text-gray-400 hover:text-white transition-colors duration-200&quot;>
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className=&quot;absolute top-20 right-20 w-2 h-2 bg-blue-400 rounded-full animate-pulse&quot; />
      <div className=&quot;absolute bottom-32 left-32 w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-1000&quot; />
      <div className=&quot;absolute top-1/2 left-10 w-1 h-1 bg-green-400 rounded-full animate-pulse delay-500&quot; />    </footer>
  )}