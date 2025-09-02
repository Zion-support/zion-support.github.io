import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'AI Services', href: '/ai-services' },
      { name: 'IT Services', href: '/it-services' },
      { name: 'Micro SaaS', href: '/micro-saas' },
      { name: 'All Services', href: '/services' }
    ],
    solutions: [
      { name: 'AI Content Creation', href: '/solutions/ai-content-creation' },
      { name: 'Email Automation', href: '/solutions/email-automation' },
      { name: 'Customer Support Platform', href: '/solutions/customer-support' },
      { name: 'Event Management', href: '/solutions/event-management' },
      { name: 'Project Management', href: '/solutions/project-management' },
      { name: 'Workflow Automation', href: '/solutions/workflow-automation' },
      { name: 'Affiliate Marketing Tracking', href: '/solutions/affiliate-tracking' },
      { name: 'Financial Analytics', href: '/solutions/financial-analytics' },
      { name: 'HR Management', href: '/solutions/hr-management' },
      { name: 'Helpdesk & Support', href: '/solutions/helpdesk-support' }
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Team', href: '/about' },
      { name: 'Careers', href: '/about' },
      { name: 'Contact', href: '/contact' }
    ],
    resources: [
      { name: 'Blog', href: '/blog' },
      { name: 'Case Studies', href: '/blog' },
      { name: 'Documentation', href: '/blog' },
      { name: 'Support', href: '/contact' },
      { name: 'Pricing Guide', href: '/pricing' }
    ]
  };

  return (
    <footer className='bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8'>
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
                <a href='mailto:kleber@ziontechgroup.com' className='hover:text-blue-400 transition-colors'>kleber@ziontechgroup.com</a>
              </div>
              <div className='flex items-center text-gray-300'>
                <Phone className='h-5 w-5 mr-3 text-blue-400' />
                <a href='tel:+13024640950' className='hover:text-blue-400 transition-colors'>+1 302 464 0950</a>
              </div>
              <div className='flex items-center text-gray-300'>
                <MapPin className='h-5 w-5 mr-3 text-blue-400' />
                <span>364 E Main St STE 1008 Middletown DE 19709</span>
              </div>
            </div>
            {/* Social Links */}
            <div className='flex space-x-4 mt-6'>
              <a href='https://linkedin.com/company/ziontechgroup' className='text-gray-400 hover:text-blue-400 transition-colors' target='_blank' rel='noopener noreferrer'>
                <Linkedin className='h-6 w-6' />
              </a>
              <a href='https://twitter.com/ziontechgroup' className='text-gray-400 hover:text-blue-400 transition-colors' target='_blank' rel='noopener noreferrer'>
                <Twitter className='h-6 w-6' />
              </a>
              <a href='https://github.com/ziontechgroup' className='text-gray-400 hover:text-blue-400 transition-colors' target='_blank' rel='noopener noreferrer'>
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
                  <Link
                    href={link.href}
                    className='text-gray-300 hover:text-blue-400 transition-colors'
                  >
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
                  <Link
                    href={link.href}
                    className='text-gray-300 hover:text-blue-400 transition-colors'
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Company */}
          <div>
            <h4 className='text-lg font-semibold mb-4'>Company</h4>
            <ul className='space-y-2'>
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className='text-gray-300 hover:text-blue-400 transition-colors'
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Resources */}
          <div>
            <h4 className='text-lg font-semibold mb-4'>Resources</h4>
            <ul className='space-y-2'>
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className='text-gray-300 hover:text-blue-400 transition-colors'
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Contact CTA */}
          <div className='lg:col-span-1'>
            <h4 className='text-lg font-semibold mb-4'>Get Started Today</h4>
            <p className='text-gray-300 mb-4 text-sm'>
              Ready to transform your business with cutting-edge technology?
            </p>
            <div className='space-y-3'>
              <a
                href='tel:+13024640950'
                className='block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-center text-sm font-medium transition-colors'
              >
                Call Now: +1 302 464 0950
              </a>
              <a
                href='mailto:kleber@ziontechgroup.com'
                className='block bg-transparent border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-4 py-2 rounded-md text-center text-sm font-medium transition-colors'
              >
                Email Us
              </a>
            </div>
            <div className='mt-4 text-xs text-gray-400'>
              <p>Available 24/7 for urgent support</p>
              <p>Response time: &lt; 2 hours</p>
            </div>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className='border-t border-gray-700 mt-8 pt-8'>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <p className='text-gray-400 text-sm'>
              © {currentYear} Zion Tech Group. All rights reserved.
            </p>
            <div className='flex space-x-6 mt-4 md:mt-0'>
              <Link href='/privacy' className='text-gray-400 hover:text-blue-400 text-sm transition-colors'>
                Privacy Policy
              </Link>
              <Link href='/terms' className='text-gray-400 hover:text-blue-400 text-sm transition-colors'>
                Terms of Service
              </Link>
              <Link href='/cookies' className='text-gray-400 hover:text-blue-400 text-sm transition-colors'>
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;