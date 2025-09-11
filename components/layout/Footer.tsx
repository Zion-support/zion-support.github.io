import React from 'react';
import Link from 'next/link';
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Code,
  Smartphone,
  Cloud,
  Database,
  Shield,
  Zap,
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'Web Development', href: '/services/web-development' },
    { name: 'Mobile Apps', href: '/services/mobile-apps' },
    { name: 'AI Solutions', href: '/services/ai-solutions' },
    { name: 'Cloud Services', href: '/services/cloud-services' },
  ];

  const solutions = [
    { name: 'E-commerce', href: '/solutions/ecommerce' },
    { name: 'CRM Systems', href: '/solutions/crm' },
    { name: 'Data Analytics', href: '/solutions/analytics' },
    { name: 'Automation', href: '/solutions/automation' },
  ];

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ];

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: Facebook },
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'LinkedIn', href: '#', icon: Linkedin },
    { name: 'Instagram', href: '#', icon: Instagram },
  ];

  return (
    <footer className='bg-gray-900 text-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {/* Company Info */}
          <div className='space-y-4'>
            <h3 className='text-lg font-semibold'>Zion Tech Group</h3>
            <p className='text-gray-300 text-sm'>
              Leading provider of innovative technology solutions and services.
            </p>
            <div className='flex space-x-4'>
              {socialLinks.map(social => (
                <a
                  key={social.name}
                  href={social.href}
                  className='text-gray-400 hover:text-white transition-colors'
                  aria-label={social.name}
                >
                  <social.icon className='h-5 w-5' />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className='space-y-4'>
            <h3 className='text-lg font-semibold'>Services</h3>
            <ul className='space-y-2'>
              {services.map(service => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className='text-gray-300 hover:text-white transition-colors text-sm'
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className='space-y-4'>
            <h3 className='text-lg font-semibold'>Solutions</h3>
            <ul className='space-y-2'>
              {solutions.map(solution => (
                <li key={solution.name}>
                  <Link
                    href={solution.href}
                    className='text-gray-300 hover:text-white transition-colors text-sm'
                  >
                    {solution.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className='space-y-4'>
            <h3 className='text-lg font-semibold'>Company</h3>
            <ul className='space-y-2'>
              {company.map(item => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className='text-gray-300 hover:text-white transition-colors text-sm'
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className='mt-8 pt-8 border-t border-gray-800'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-300'>
            <div className='flex items-center space-x-2'>
              <Phone className='h-4 w-4' />
              <span>+1 (302) 464-0950</span>
            </div>
            <div className='flex items-center space-x-2'>
              <Mail className='h-4 w-4' />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className='flex items-center space-x-2'>
              <MapPin className='h-4 w-4' />
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className='mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400'>
          <p>&copy; {currentYear} Zion Tech Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
