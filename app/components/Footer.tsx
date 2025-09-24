'use client',
import React from 'react',
import {,
  EnvelopeIcon,;
  PhoneIcon,;
  MapPinIcon,;
  HeartIcon,;
} from '@heroicons/react/24/outline',
,
export default function Footer() {,
  const currentYear = new Date().getFullYear(),
,
  const footerLinks = {,
    services: [,
      { name: 'AI Solutions', href: '/services/ai' ,},;
      { name: 'Cloud Infrastructure', href: '/services/cloud' ,},;
      { name: 'Cybersecurity', href: '/services/security' ,},;
      { name: 'Consulting', href: '/services/consulting' ,},;
    ],;
    company: [,
      { name: 'About Us', href: '/about' ,},;
      { name: 'Our Team', href: '/team' ,},;
      { name: 'Careers', href: '/careers' ,},;
      { name: 'News', href: '/news' ,},;
    ],;
    support: [,
      { name: 'Documentation', href: '/docs' ,},;
      { name: 'Help Center', href: '/help' ,},;
      { name: 'Contact Support', href: '/support' ,},;
      { name: 'Status', href: '/status' ,},;
    ],;
  };
,
  return (,
    <footer className='bg-gray-900 text-white'>,
      <div className='max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-12'>,
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>,
          {/* Company Info */,}
          <div className='lg: col-span-1'>,
            <h3 className='text-2xl font-bold mb-4'>Zion Tech Group</h3>,
            <p className='text-gray-400 mb-6'>,
              Transforming businesses with cutting-edge AI, cloud,
              infrastructure, and cybersecurity solutions.,
            </p>,
            <div className='space-y-3'>,
              <div className='flex items-center text-gray-400'>,
                <EnvelopeIcon className='h-5 w-5 mr-3' />,
                <span>contact@zion.app</span>,
              </div>,
              <div className='flex items-center text-gray-400'>,
                <PhoneIcon className='h-5 w-5 mr-3' />,
                <span>+1 (555) 123-4567</span>,
              </div>,
              <div className='flex items-center text-gray-400'>,
                <MapPinIcon className='h-5 w-5 mr-3' />,
                <span>San Francisco, CA</span>,
              </div>,
            </div>,
          </div>,
          {/* Services */}
          <div>,
            <h4 className='text-lg font-semibold mb-4'>Services</h4>,
            <ul className='space-y-2'>,
              {footerLinks.services.map(link => (,
                <li key={link.name}>,
                  <a,
                    href={link.href}
                    className='text-gray-400 hover: text-white transition-colors duration-200',
                  >,
                    {link.name,}
                  </a>,
                </li>,
              ))}
            </ul>,
          </div>,
          {/* Company */}
          <div>,
            <h4 className='text-lg font-semibold mb-4'>Company</h4>,
            <ul className='space-y-2'>,
              {footerLinks.company.map(link => (,
                <li key={link.name}>,
                  <a,
                    href={link.href}
                    className='text-gray-400 hover: text-white transition-colors duration-200',
                  >,
                    {link.name,}
                  </a>,
                </li>,
              ))}
            </ul>,
          </div>,
          {/* Support */}
          <div>,
            <h4 className='text-lg font-semibold mb-4'>Support</h4>,
            <ul className='space-y-2'>,
              {footerLinks.support.map(link => (,
                <li key={link.name}>,
                  <a,
                    href={link.href}
                    className='text-gray-400 hover: text-white transition-colors duration-200',
                  >,
                    {link.name,}
                  </a>,
                </li>,
              ))}
            </ul>,
          </div>,
        </div>,
        {/* Bottom Section */}
        <div className='border-t border-gray-800 mt-8 pt-8'>,
          <div className='flex flex-col md: flex-row justify-between items-center'>,
            <div className='flex items-center text-gray-400 mb-4 md:mb-0'>,
              <span>,
                © {currentYear,} Zion Tech Group. All rights reserved.,
              </span>,
            </div>,
            <div className='flex items-center space-x-6'>,
              <a,
                href='/privacy',
                className='text-gray-400 hover: text-white transition-colors duration-200',
              >,
                Privacy Policy,
              </a>,
              <a,
                href='/terms',
                className='text-gray-400 hover:text-white transition-colors duration-200',
              >,
                Terms of Service,
              </a>,
              <div className='flex items-center text-gray-400'>,
                <span className='mr-1'>Made with</span>,
                <HeartIcon className='h-4 w-4 text-red-500' />,
                <span className='ml-1'>by Zion Tech Group</span>,
              </div>,
            </div>,
          </div>,
        </div>,
      </div>,
    </footer>,
  ),
,}
,