import React from 'react';
import Link from 'next/link';
import { Brain, Mail, Phone, MapPin, Linkedin, Twitter, Github, Youtube, Instagram, ArrowRight, Heart, Cloud, Database } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const serviceCategories = [
    {
      title: 'AI & Automation',
      icon: Brain,
      color: 'text-blue-400',
      services: [
        { name: 'AI Services', href: '/ai-services' },
        { name: 'IT Services', href: '/it-services' },
        { name: 'Micro SaaS', href: '/micro-saas' },
        { name: 'All Services', href: '/services' }
      ]
    },
    {
      title: 'Cloud & Infrastructure',
      icon: Cloud,
      color: 'text-green-400',
      services: [
        { name: 'IT Services', href: '/it-services' },
        { name: 'Micro SaaS', href: '/micro-saas' },
        { name: 'Services Overview', href: '/services' }
      ]
    },
    {
      title: 'Data & Analytics',
      icon: Database,
      color: 'text-purple-400',
      services: [
        { name: 'AI Services', href: '/ai-services' },
        { name: 'Products', href: '/products' },
        { name: 'Case Studies', href: '/case-studies' }
      ]
    }
  ];

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'White Papers', href: '/whitepapers' },
    { name: 'Webinars', href: '/webinars' },
    { name: 'Pricing', href: '/pricing' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'Sitemap', href: '/sitemap' }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github },
    { name: 'YouTube', href: 'https://youtube.com/ziontechgroup', icon: Youtube },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram }
  ];

  const contactInfo = {
    email: 'contact@ziontechgroup.com',
    phone: '+1 (555) 123-4567',
    address: '123 Technology Drive, San Francisco, CA 94105'
  };

  return (
    <footer className='bg-slate-900 border-t border-slate-700'>
      {/* Main Footer Content */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-12'>
          {/* Company Info */}
          <div className='lg:col-span-1'>
            <Link href='/' className='flex items-center space-x-2 mb-6'>
              <div className='w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center'>
                <Brain className='w-6 h-6 text-white' />
              </div>
              <span className='text-2xl font-bold text-white'>Zion Tech Group</span>
            </Link>
            <p className='text-gray-300 mb-6 leading-relaxed'>
              Leading provider of AI-powered solutions and technology services.
              We help businesses transform and innovate with cutting-edge artificial intelligence.
            </p>
            <div className='space-y-3 mb-6'>
              <div className='flex items-center text-gray-300'>
                <Mail className='w-4 h-4 mr-3 text-blue-400' />
                <a href={`mailto:${contactInfo.email}`} className='hover:text-white transition-colors'>
                  {contactInfo.email}
                </a>
              </div>
              <div className='flex items-center text-gray-300'>
                <Phone className='w-4 h-4 mr-3 text-blue-400' />
                <a href={`tel:${contactInfo.phone}`} className='hover:text-white transition-colors'>
                  {contactInfo.phone}
                </a>
              </div>
              <div className='flex items-center text-gray-300'>
                <MapPin className='w-4 h-4 mr-3 text-blue-400' />
                <span>{contactInfo.address}</span>
              </div>
            </div>
            {/* Social Links */}
            <div className='flex space-x-4'>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-gray-400 hover:text-white transition-colors'
                  aria-label={social.name}
                >
                  <social.icon className='w-5 h-5' />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className='lg:col-span-2'>
            <h3 className='text-xl font-bold text-white mb-6'>Our Services</h3>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              {serviceCategories.map((category) => (
                <div key={category.title}>
                  <div className='flex items-center mb-4'>
                    <category.icon className={`w-5 h-5 mr-2 ${category.color}`} />
                    <h4 className='text-white font-semibold'>{category.title}</h4>
                  </div>
                  <ul className='space-y-2'>
                    {category.services.map((service) => (
                      <li key={service.name}>
                        <Link
                          href={service.href}
                          className='text-gray-300 hover:text-white transition-colors text-sm flex items-center group'
                        >
                          <ArrowRight className='w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity' />
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className='lg:col-span-1'>
            <h3 className='text-xl font-bold text-white mb-6'>Quick Links</h3>
            <div className='space-y-4'>
              <div>
                <h4 className='text-white font-semibold mb-3'>Company</h4>
                <ul className='space-y-2'>
                  {quickLinks.slice(0, 4).map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className='text-gray-300 hover:text-white transition-colors text-sm'>
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className='text-white font-semibold mb-3'>Resources</h4>
                <ul className='space-y-2'>
                  {quickLinks.slice(4).map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className='text-gray-300 hover:text-white transition-colors text-sm'>
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className='border-t border-slate-700'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6'>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <div className='text-gray-400 text-sm mb-4 md:mb-0'>
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className='flex space-x-6'>
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className='text-gray-400 hover:text-white transition-colors text-sm'
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div className='mt-4 text-center text-gray-500 text-xs'>
            Made with <Heart className='w-3 h-3 inline text-red-500' /> by Zion Tech Group
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;