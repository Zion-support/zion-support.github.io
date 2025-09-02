import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'AI Services', href: '/services#ai' },
      { name: 'Cloud Platforms', href: '/services#cloud' },
      { name: 'Cybersecurity', href: '/services#cybersecurity' },
      { name: 'Micro SaaS', href: '/services#saas' },
      { name: 'AI Chatbots', href: '/services#ai-chatbots' },
      { name: 'Blockchain Integration', href: '/services#blockchain' }
    ], 
    solutions: [
      { name: 'IoT Solutions', href: '/services#iot' }, 
      { name: 'AR/VR Applications', href: '/services#ar-vr' }, 
      { name: 'Predictive Analytics', href: '/services#predictive-analytics' },
      { name: 'API Management', href: '/services#api-management' }
    ], 
    company: [
      { name: 'About Us', href: '/about' }, 
      { name: 'Pricing Guide', href: '/pricing-guide' }, 
      { name: 'Contact', href: '/contact' }
    ], 
    resources: [
      { name: 'Documentation', href: '/docs' }, 
      { name: 'Support', href: '/contact' }, 
      { name: 'Privacy Policy', href: '/privacy' }, 
      { name: 'Terms of Service', href: '/terms' }
    ]
  };

  return (
    <footer className='bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8'>
          {/* Company Info */}
          <div className='lg:col-span-2'>
            <h3 className='text-2xl font-bold mb-4'>Zion Tech Group</h3>
            <p className='text-gray-300 mb-6 max-w-md'>
              Leading technology solutions provider helping businesses transform their digital presence
              with cutting-edge AI, cloud architecture, and innovative development services.
            </p>
            {/* Contact Info */}
            <div className='space-y-3'>
              <div className='flex items-center text-gray-300'>
                <Mail className='h-5 w-5 mr-3 text-blue-400' />
                <a href='mailto:kleber@ziontechgroup.com' className='hover:text-blue-300 transition-colors'>
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className='flex items-center text-gray-300'>
                <Phone className='h-5 w-5 mr-3 text-blue-400' />
                <a href='tel:+13024640950' className='hover:text-blue-300 transition-colors'>
                  +1 302 464 0950
                </a>
              </div>
              <div className='flex items-center text-gray-300'>
                <MapPin className='h-5 w-5 mr-3 text-blue-400' />
                <span>364 E Main St STE 1008<br />Middletown, DE 19709</span>
              </div>
            </div>
            {/* Social Links */}
            <div className='flex space-x-4 mt-6'>
              <a href='https://linkedin.com/company/ziontechgroup' className='text-gray-400 hover:text-blue-400 transition-colors' target='_blank' rel='noreferrer'>
                <Linkedin className='h-6 w-6' />
              </a>
              <a href='https://twitter.com/ziontechgroup' className='text-gray-400 hover:text-blue-400 transition-colors' target='_blank' rel='noreferrer'>
                <Twitter className='h-6 w-6' />
              </a>
              <a href='https://github.com/ziontechgroup' className='text-gray-400 hover:text-blue-400 transition-colors' target='_blank' rel='noreferrer'>
                <Github className='h-6 w-6' />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className='text-lg font-semibold mb-4'>Services</h4>
            <ul className='space-y-2'>
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className='text-gray-300 hover:text-blue-300 transition-colors'>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className='text-lg font-semibold mb-4'>Solutions</h4>
            <ul className='space-y-2'>
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className='text-gray-300 hover:text-blue-300 transition-colors'>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Resources */}
          <div>
            <h4 className='text-lg font-semibold mb-4'>Company</h4>
            <ul className='space-y-2 mb-6'>
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className='text-gray-300 hover:text-blue-300 transition-colors'>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className='text-lg font-semibold mb-4'>Resources</h4>
            <ul className='space-y-2'>
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className='text-gray-300 hover:text-blue-300 transition-colors'>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className='border-t border-gray-700 mt-8 pt-8'>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <div className='text-gray-400 text-sm mb-4 md:mb-0'>
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className='flex space-x-6 text-sm'>
              <Link href='/privacy' className='text-gray-400 hover:text-blue-300 transition-colors'>
                Privacy Policy
              </Link>
              <Link href='/terms' className='text-gray-400 hover:text-blue-300 transition-colors'>
                Terms of Service
              </Link>
              <Link href='/contact' className='text-gray-400 hover:text-blue-300 transition-colors'>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;