import React from 'react';
import Link from 'next/link';
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Zap,
  Bot,
  Cloud,
  Shield,
  ArrowRight,;
} from 'lucide-react';

export default function FuturisticFooter() {
  const currentYear = new Date().getFullYear();
<<<<<<< HEAD
=======

=======
import { Mail, Phone, MapPin, Globe, Zap, Bot, Cloud, Shield, ArrowRight } from 'lucide-react';

export default function FuturisticFooter() {
  const currentYear = new Date().getFullYear();
  
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
import { Mail, Phone, MapPin, Globe, Zap, Bot, Cloud, Shield, ArrowRight } from 'lucide-react';

export default function FuturisticFooter() {
  const currentYear = new Date().getFullYear();
  
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
<<<<<<< HEAD
    website: 'https://ziontechgroup.com',  };
=======
<<<<<<< HEAD
<<<<<<< HEAD
    website: 'https://ziontechgroup.com',
=======
    website: 'https://ziontechgroup.com'
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    website: 'https://ziontechgroup.com'
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  };
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

  const quickLinks = [
    { name: 'Services', href: '/services' },
    { name: 'Micro SaaS', href: '/micro-saas' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
<<<<<<< HEAD
    { name: 'Blog', href: '/blog' },
  ];

=======
<<<<<<< HEAD
<<<<<<< HEAD
    { name: 'Blog', href: '/blog' },
  ];

=======
    { name: 'Blog', href: '/blog' }],
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  const serviceCategories = [
    {
      name: 'AI & Machine Learning',
      href: '/services?category=AI%20%26%20Machine%20Learning',
    },
    {
      name: 'Cloud & Infrastructure',
      href: '/services?category=Cloud%20%26%20Infrastructure',
    },
    { name: 'Cybersecurity', href: '/services?category=Cybersecurity' },
    {
      name: 'Analytics & Business Intelligence',
      href: '/services?category=Analytics%20%26%20Business%20Intelligence',
    },
    {
      name: 'Robotics & Automation',
      href: '/services?category=Robotics%20%26%20Automation',
    },
    {
      name: 'Blockchain & Web3',
      href: '/services?category=Blockchain%20%26%20Web3',
    },
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/zion-tech-group',
      icon: '💼',
    },
    { name: 'X', href: 'https://x.com/ziontechgroup', icon: '🐦' },
    { name: 'GitHub', href: 'https://github.com/Zion-Holdings', icon: '💻' },
  ];

  return (
    <footer className='relative bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden'>
      {/* Animated background elements */}
      <div className='absolute inset-0'>
        <div className='absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5' />
        <div className='absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent' />
        <div className='absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent' />
      </div>

      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        {/* Main footer content */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12'>
          {/* Company Info */}
          <div className='lg:col-span-1'>
            <div className='flex items-center space-x-2 mb-6'>
              <div className='w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center'>
                <Zap className='w-6 h-6 text-white' />
              </div>
              <span className='text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent'>
                Zion Tech Group
              </span>
            </div>
            <p className='text-gray-400 mb-6 leading-relaxed'>
              Leading provider of AI-powered micro SaaS solutions, helping
              businesses automate, optimize, and scale their operations with
              cutting-edge technology.
            </p>
            <div className='flex space-x-4'>
              {socialLinks.map(social => (
                <a
                  key={social.name}
                  href={social.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/40'
                >
<<<<<<< HEAD
                  <span className='text-lg'>{social.icon}</span>                </a>
=======
<<<<<<< HEAD
                  <span className='text-lg'>{social.icon}</span>
=======
    { name: 'Blog', href: '/blog' }],
  const serviceCategories = [
    { name: 'AI & Machine Learning', href: '/services?category=AI%20%26%20Machine%20Learning' },
    { name: 'Cloud & Infrastructure', href: '/services?category=Cloud%20%26%20Infrastructure' },
    { name: 'Cybersecurity', href: '/services?category=Cybersecurity' },
    { name: 'Analytics & Business Intelligence', href: '/services?category=Analytics%20%26%20Business%20Intelligence' },
    { name: 'Robotics & Automation', href: '/services?category=Robotics%20%26%20Automation' },
    { name: 'Blockchain & Web3', href: '/services?category=Blockchain%20%26%20Web3' }],
  const socialLinks = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/zion-tech-group', icon: '💼' },
    { name: 'X', href: 'https://x.com/ziontechgroup', icon: '🐦' },
    { name: 'GitHub', href: 'https://github.com/Zion-Holdings', icon: '💻' }],
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
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
              Leading provider of AI-powered micro SaaS solutions, helping businesses automate, optimize, and scale their operations with cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/40"
                >
                  <span className="text-lg">{social.icon}</span>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                  <span className="text-lg">{social.icon}</span>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                </a>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
<<<<<<< HEAD
            <h3 className='text-lg font-semibold text-white mb-6 flex items-center'>
              <ArrowRight className='w-5 h-5 text-blue-400 mr-2' />
=======
<<<<<<< HEAD
<<<<<<< HEAD
            <h3 className='text-lg font-semibold text-white mb-6 flex items-center'>
              <ArrowRight className='w-5 h-5 text-blue-400 mr-2' />
=======
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
              <ArrowRight className="w-5 h-5 text-blue-400 mr-2" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              Quick Links
            </h3>
            <ul className='space-y-3'>
              {quickLinks.map(link => (
                <li key={link.name}>
                  <Link
                    href={link.href}
<<<<<<< HEAD
                    className='text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block'                  >
=======
<<<<<<< HEAD
                    className='text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block'
=======
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
              <ArrowRight className="w-5 h-5 text-blue-400 mr-2" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                    className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  >
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
<<<<<<< HEAD
            <h3 className='text-lg font-semibold text-white mb-6 flex items-center'>
              <Cloud className='w-5 h-5 text-green-400 mr-2' />
=======
<<<<<<< HEAD
<<<<<<< HEAD
            <h3 className='text-lg font-semibold text-white mb-6 flex items-center'>
              <Cloud className='w-5 h-5 text-green-400 mr-2' />
=======
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
              <Cloud className="w-5 h-5 text-green-400 mr-2" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              Services
            </h3>
            <ul className='space-y-3'>
              {serviceCategories.map(service => (
                <li key={service.name}>
                  <Link
                    href={service.href}
<<<<<<< HEAD
                    className='text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block'                  >
=======
<<<<<<< HEAD
                    className='text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block'
=======
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
              <Cloud className="w-5 h-5 text-green-400 mr-2" />
              Services
            </h3>
            <ul className="space-y-3">
              {serviceCategories.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                    className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  >
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
<<<<<<< HEAD
            <h3 className='text-lg font-semibold text-white mb-6 flex items-center'>
              <Shield className='w-5 h-5 text-purple-400 mr-2' />
=======
<<<<<<< HEAD
<<<<<<< HEAD
            <h3 className='text-lg font-semibold text-white mb-6 flex items-center'>
              <Shield className='w-5 h-5 text-purple-400 mr-2' />
=======
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
              <Shield className="w-5 h-5 text-purple-400 mr-2" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              Contact Us
            </h3>
            <div className='space-y-4'>
              <div className='flex items-start space-x-3'>
                <Phone className='w-5 h-5 text-blue-400 mt-1 flex-shrink-0' />
                <div>
                  <p className='text-white font-medium'>Phone</p>
                  <a
                    href={`tel:${contactInfo.mobile}`}
<<<<<<< HEAD
                    className='text-gray-400 hover:text-blue-400 transition-colors duration-200'                  >
=======
<<<<<<< HEAD
                    className='text-gray-400 hover:text-blue-400 transition-colors duration-200'
=======
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
                    href={`tel:${contactInfo.mobile}`}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  >
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                    {contactInfo.mobile}
                  </a>
                </div>
              </div>
<<<<<<< HEAD

              <div className='flex items-start space-x-3'>
                <Mail className='w-5 h-5 text-green-400 mt-1 flex-shrink-0' />
=======
<<<<<<< HEAD
<<<<<<< HEAD

              <div className='flex items-start space-x-3'>
                <Mail className='w-5 h-5 text-green-400 mt-1 flex-shrink-0' />
=======
              
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                <div>
                  <p className='text-white font-medium'>Email</p>
                  <a
                    href={`mailto:${contactInfo.email}`}
<<<<<<< HEAD
                    className='text-gray-400 hover:text-green-400 transition-colors duration-200'                  >
=======
<<<<<<< HEAD
                    className='text-gray-400 hover:text-green-400 transition-colors duration-200'
=======
              
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Email</p>
                  <a 
                    href={`mailto:${contactInfo.email}`}
                    className="text-gray-400 hover:text-green-400 transition-colors duration-200"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                    className="text-gray-400 hover:text-green-400 transition-colors duration-200"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  >
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                    {contactInfo.email}
                  </a>
                </div>
              </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

              <div className='flex items-start space-x-3'>
                <MapPin className='w-5 h-5 text-purple-400 mt-1 flex-shrink-0' />
                <div>
                  <p className='text-white font-medium'>Address</p>
<<<<<<< HEAD
                  <p className='text-gray-400 text-sm'>{contactInfo.address}</p>                </div>
=======
                  <p className='text-gray-400 text-sm'>{contactInfo.address}</p>
=======
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                <div>
=======
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                <div>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  <p className="text-white font-medium">Address</p>
                  <p className="text-gray-400 text-sm">
                    {contactInfo.address}
                  </p>
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                </div>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
<<<<<<< HEAD
        <div className='pt-8 border-t border-gray-800'>
          <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
            <div className='text-gray-400 text-sm'>
=======
<<<<<<< HEAD
<<<<<<< HEAD
        <div className='pt-8 border-t border-gray-800'>
          <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
            <div className='text-gray-400 text-sm'>
=======
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>

            <div className='flex space-x-6 text-sm'>
              <Link
                href='/privacy'
                className='text-gray-400 hover:text-white transition-colors duration-200'
              >
                Privacy Policy
              </Link>
              <Link
                href='/terms'
                className='text-gray-400 hover:text-white transition-colors duration-200'
              >
                Terms of Service
              </Link>
<<<<<<< HEAD
              <Link
                href='/cookies'
                className='text-gray-400 hover:text-white transition-colors duration-200'
              >                Cookie Policy
=======
<<<<<<< HEAD
              <Link
                href='/cookies'
                className='text-gray-400 hover:text-white transition-colors duration-200'
              >
=======
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors duration-200">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
              <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors duration-200">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                Cookie Policy
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      <div className='absolute top-20 right-20 w-2 h-2 bg-blue-400 rounded-full animate-pulse' />
      <div className='absolute bottom-32 left-32 w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-1000' />
      <div className='absolute top-1/2 left-10 w-1 h-1 bg-green-400 rounded-full animate-pulse delay-500' />
    </footer>
<<<<<<< HEAD
  );
=======
  );
=======
      <div className="absolute top-20 right-20 w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
      <div className="absolute bottom-32 left-32 w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-10 w-1 h-1 bg-green-400 rounded-full animate-pulse delay-500" />
    </footer>
  );
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      <div className="absolute top-20 right-20 w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
      <div className="absolute bottom-32 left-32 w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-10 w-1 h-1 bg-green-400 rounded-full animate-pulse delay-500" />
    </footer>
  );
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
