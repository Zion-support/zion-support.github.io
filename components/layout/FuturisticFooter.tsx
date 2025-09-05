import React from 'react';
import Link from 'next/link';

export default function FuturisticFooter() {_const _currentYear = new Date().getFullYear();
  
  const _contactInfo = {
    mobile: '+1 302 464 0950', _email: 'kleber@ziontechgroup.com', _address: '364 E Main St STE 1008 Middletown DE 19709', _website: 'https://ziontechgroup.com'};

  const _quickLinks = [
    {_name: 'Services', _href: '/services'},
    {_name: 'Micro SaaS', _href: '/micro-saas'},
    {_name: 'Pricing', _href: '/pricing'},
    {_name: 'About', _href: '/about'},
    {_name: 'Contact', _href: '/contact'},
    {_name: 'Blog', _href: '/blog'}];

  const _serviceCategories = [
    {_name: 'AI & Machine Learning', _href: '/services?category=AI%20%26%20Machine%20Learning'},
    {_name: 'Cloud & Infrastructure', _href: '/services?category=Cloud%20%26%20Infrastructure'},
    {_name: 'Cybersecurity', _href: '/services?category=Cybersecurity'},
    {_name: 'Analytics & Business Intelligence', _href: '/services?category=Analytics%20%26%20Business%20Intelligence'},
    {_name: 'Robotics & Automation', _href: '/services?category=Robotics%20%26%20Automation'},
    {_name: 'Blockchain & Web3', _href: '/services?category=Blockchain%20%26%20Web3'}];

  const _socialLinks = [
    {_name: 'LinkedIn', _href: 'https://www.linkedin.com/company/zion-tech-group', _icon: '💼'},
    {_name: 'X', _href: 'https://x.com/ziontechgroup', _icon: '🐦'},
    {_name: 'GitHub', _href: 'https://github.com/Zion-Holdings', _icon: '💻'}];

  return (_<footer className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
      {_/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {_/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {_/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Leading provider of AI-powered micro SaaS solutions, _helping businesses automate, _optimize, _and scale their operations with cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              {_socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={_social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/40"
                >
                  <span className="text-lg">{_social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {_/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
              <ArrowRight className="w-5 h-5 text-blue-400 mr-2" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {_quickLinks.map(_(link) => (
                <li key={link.name}>
                  <Link
                    href={_link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {_link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {_/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
              <Cloud className="w-5 h-5 text-green-400 mr-2" />
              Services
            </h3>
            <ul className="space-y-3">
              {_serviceCategories.map(_(service) => (
                <li key={service.name}>
                  <Link
                    href={_service.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {_service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {_/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
              <Shield className="w-5 h-5 text-purple-400 mr-2" />
              Contact Us
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Phone</p>
                  <a 
                    href={_`tel:${contactInfo.mobile}`}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    {_contactInfo.mobile}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Email</p>
                  <a 
                    href={_`mailto:${contactInfo.email}`}
                    className="text-gray-400 hover:text-green-400 transition-colors duration-200"
                  >
                    {_contactInfo.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Address</p>
                  <p className="text-gray-400 text-sm">
                    {_contactInfo.address}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {_/* Bottom section */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {_currentYear} Zion Tech Group. All rights reserved.
            </div>
            
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors duration-200">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>

      {_/* Floating elements */}
      <div className="absolute top-20 right-20 w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
      <div className="absolute bottom-32 left-32 w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-10 w-1 h-1 bg-green-400 rounded-full animate-pulse delay-500" />
    </footer>
  );
}