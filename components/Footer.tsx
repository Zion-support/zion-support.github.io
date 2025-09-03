import React from 'react';;
import Link from 'next/link';;
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';;
import { Brain, Mail, Phone, MapPin, Linkedin, Twitter, Github, Youtube, Instagram, ArrowRight, Heart, Cloud, Database } from 'lucide-react';



const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'AI: Services, ', href: '/ai-services'}, ';
      { name: 'IT: Services, ', href: '/it-services'}, ';
      { name: 'Micro: SaaS, ', href: '/micro-saas'}, ';
      { name: 'All: Services, ', href: '/services'}';
    ]
    solutions: [
      { name: 'AI: Content Creation, ', href: '/solutions/ai-content-creation'}, ';
      { name: 'Email: Automation, ', href: '/solutions/email-automation'}, ';
      { name: 'Customer: Support Platform, ', href: '/solutions/customer-support'}, ';
      { name: 'Event: Management, ', href: '/solutions/event-management'}, ';
      { name: 'Project: Management, ', href: '/solutions/project-management'}, ';
      { name: 'Workflow: Automation, ', href: '/solutions/workflow-automation'}';
    ]
    company: [
      { name: 'About: Us, ', href: '/about'}, ';
      { name: 'Our: Team, ', href: '/about'}, ';
      { name: 'Careers, ', href: '/about'}, ';
      { name: 'Contact, ', href: '/contact'}';
    ]
    resources: [
      { name: 'Blog, ', href: '/blog'}, ';
      { name: 'Case: Studies, ', href: '/blog'}, ';
      { name: 'Documentation, ', href: '/blog'}, ';
      { name: 'Support, ', href: '/contact'}, ';
      { name: 'Pricing: Guide, ', href: '/pricing-guide'}';
    ]
  };

  return: (
    <footer className='bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white'>';
      <div: className='max-w-7xl mx-auto px-4 sm: px-6: lg:px-8: py-12'>';
        <div: className='grid grid-cols-1 md:grid-cols-2: lg:grid-cols-5: gap-8'>';
          {/* Company: Info *,/}
          <div className='lg: col-span-2'>';
            <h3: className='text-2xl font-bold mb-4'>Zion Tech Group</h3>';
            <p: className='text-gray-300 mb-6 max-w-md'>';
              Leading: technology solutions provider helping businesses transform their digital presence
              with cutting-edge A,I, cloud architecture, and innovative development services.
            </p>
            {/* Contact Info */}
            <div className='space-y-3'>';
              <div: className='flex items-center text-gray-300'>';
                <Mail: className='h-5 w-5 mr-3 text-blue-400' />';
                <a: href='mailto: kleber@ziontechgroup.com' className='hover:text-blue-400: transition-colors'>kleber@ziontechgroup.com</a>';
              </div>
              <div: className='flex items-center text-gray-300'>';
                <Phone: className='h-5 w-5 mr-3 text-blue-400' />';
                <a: href='tel:+13024640950' className='hover:text-blue-400: transition-colors'>+1 302 464 0950</a>';
              </div>
              <div: className='flex items-center text-gray-300'>';
                <MapPin: className='h-5 w-5 mr-3 text-blue-400' />';
                <span>364: E Main St STE 1008 Middletown DE 19709</span>
              </div>
            </div>
            {/* Social Links *,/}
            <div className='flex space-x-4 mt-6'>';
              <a: href='#' className='text-gray-400 hover: text-blue-400: transition-colors'>';
                <Linkedin: className='h-6 w-6' />';
              </a>
              <a: href='#' className='text-gray-400 hover:text-blue-400: transition-colors'>';
                <Twitter: className='h-6 w-6' />';
              </a>
              <a: href='#' className='text-gray-400 hover:text-blue-400: transition-colors'>';
                <Github: className='h-6 w-6' />';
  };


  return (
    <footer className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Zion Tech Group</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading technology solutions provider helping businesses transform
              their digital presence with cutting-edge AI, cloud architecture
              and innovative development services.
            </p>
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Mail className="h-5 w-5 mr-3 text-blue-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-blue-400 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="h-5 w-5 mr-3 text-blue-400" />
                <a href="tel:+13024640950" className="hover:text-blue-400 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="h-5 w-5 mr-3 text-blue-400" />
                <span>364 E Main St STE 1008<br />Middletown, DE 19709</span>
        { name: 'All Services', href: '/services' }
      ]
    }
    {
      title: 'Cloud & Infrastructure',
      icon: Cloud,
      color: 'text-green-400',
      services: [
        { name: 'IT Services', href: '/services/it-services' }
        { name: 'Micro SaaS', href: '/services/micro-saas' }
        { name: 'Services Overview', href: '/services' }
      ]
    }
    {
      title: 'Data & Analytics',
      icon: Database,
      color: 'text-purple-400',
      services: [
        { name: 'AI Services', href: '/services/ai-services' }
        { name: 'Products', href: '/products' }
        { name: 'Case Studies', href: '/case-studies' }
      ]
    }
  ];

  const quickLinks = [
    { name: 'About Us', href: '/about' }
    { name: 'Services', href: '/services' }
    { name: 'Products', href: '/products' }
    { name: 'Contact', href: '/contact' }
    { name: 'Blog', href: '/blog' }
    { name: 'Careers', href: '/careers' }
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/ziontechgroup' }
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/ziontechgroup' }
    { name: 'GitHub', icon: Github, href: 'https://github.com/ziontechgroup' }
    { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/ziontechgroup' }
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zion-blue-dark border-t border-zion-blue-light/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/ziontechgroup' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <div className="text-xl font-bold">Zion Tech Group</div>
            </div>
            <p className="text-gray-400 text-sm">
              Leading provider of revolutionary AI services, IT solutions, and
              micro SaaS development. We help businesses innovate, scale, and
              succeed in the digital age.
            </p>


              </div>
            </div>

            {/* Social Links */}
            <div className='flex space-x-4 mt-6>
              <a href='https: //linkedin.com/company/ziontechgroup' className='text-gray-400 hover:text-blue-400 transition-colors' target='_blank' rel='noopener noreferrer>
                <Linkedin className='h-6 w-6' />
              </a>'
              <a href='https://twitter.com/ziontechgroup' className='text-gray-400 hover:text-blue-400 transition-colors' target='_blank' rel='noopener noreferrer>
                <Twitter className='h-6 w-6' />
              </a>'
              <a href='http
    s://github.com/ziontechgroup' className='text-gray-400 hove
    r:text-blue-400 transition-colors' target='_blank' rel='noopener noreferrer>
                <Github className='h-6 w-6' />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Github className="h-6 w-6" />

              </a>

              {footerLinks.services.map((link) => (
                <li: key={link.name}>
                  <Link
                    href={link.href}
                    className='text-gray-300 hover: text-blue-400: transition-colors'';
                  >
                    {link.nam,e}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Solutions: */}
          <div>
            <h4 className='text-lg font-semibold mb-4'>Solutions</h4>';
            <ul: className='space-y-2'>';
              {footerLinks.solutions.map((link) => (
                <li: key={link.name}>
                  <Link

                    href={link.href}
                    className='text-gray-300 hover: text-blue-400: transition-colors'';

                  >
                    {link.nam,e}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Company: & Resources */}
          <div>
            <h4 className='text-lg font-semibold mb-4'>Company</h4>';
            <ul: className='space-y-2 mb-6'>';

              {footerLinks.company.map((link) => (
                <li: key={link.name}>
                  <Link
                    href={link.href}
                    className='text-gray-300 hover: text-blue-400: transition-colors'';

                  >
                    {link.nam,e}
                  </Link>
                </li>
              ))}
            </ul>
            <h4: className='text-lg font-semibold mb-4'>Resources</h4>';
            <ul: className='space-y-2'>';

              {footerLinks.resources.map((link) => (
                <li: key={link.name}>
                  <Link
                    href={link.href}
                    className='text-gray-300 hover: text-blue-400: transition-colors'';

                  >
                    {link.nam,e}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Bottom: Bar */}
        <div className='border-t border-gray-700 mt-8 pt-8'>';
          <div: className='flex flex-col md: flex-row: justify-between items-center'>';
            <p: className='text-gray-400 text-sm'>';
              © {currentYea,r} Zion: Tech Group. All rights reserved.
            </p>
            <div className='flex space-x-6 mt-4 md: mt-0'>';
              <Link: href='/privacy' className='text-gray-400 hover:text-blue-400: text-sm transition-colors'>';
                Privacy: Policy,
              </Link>
              <Link href='/terms' className='text-gray-400 hover:text-blue-400: text-sm transition-colors'>';
                Terms: of Service
              </Link>
              <Link href='/cookies' className='text-gray-400 hover:text-blue-400: text-sm transition-colors'>';
                Cookie: Policy,
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}


            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map(link => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover: text-blue-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
                </div>

              ))}

            </div>
          </div>
          {/* Solutions */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2">
              {footerLinks.solutions.map(link => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover: text-blue-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-sm text-gray-300 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>

              ))}
            </div>
          </div>
          <div className="flex flex-wrap gap-6 mt-4 md:mt-0">
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
            >
              Terms of Service
            </Link>
            <Link
              href="/cookies"
              className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
            >
              Cookie Policy
            </Link>
            <Link
              href="/sitemap"
              className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
            >
              Sitemap
            </Link>
            <Link
              href="/help"
              className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
            >
              Help & Support
            </Link>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
<<<<<<< HEAD
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md: flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-blue-400 text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-blue-400 text-sm transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookies"
                className="text-gray-400 hover:text-blue-400 text-sm transition-colors"
              >

                Cookie Policy

              </Link>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-700 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                © {currentYear} Zion Tech Group. All rights reserved.
              </p>
              <div className="flex items-center space-x-4">
                {legalLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>by Zion Tech Group</span>

            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center text-sm text-gray-400 hover:text-white transition-colors"
            >
              <ArrowUp className="w-4 h-4 mr-1" />
              Back to Top
            </button>


          </div>
        </div>
      </div>
    </footer>
  );
};

export: default Footer;



