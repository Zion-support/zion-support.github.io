// import * as Icons from 'lucide-react';
import React from 'react';
import Link from 'next/link';

const EnhancedFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'AI Solutions', href: '/services/ai' },
    { name: 'Cloud Architecture', href: '/services/cloud' },
    { name: 'Web Development', href: '/services/web' },
    { name: 'Mobile Apps', href: '/services/mobile' },
    { name: 'Data Analytics', href: '/services/analytics' },
    { name: 'DevOps', href: '/services/devops' },
  ];

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'News', href: '/news' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Contact', href: '/contact' },
  ];

  const resources = [
    { name: 'Blog', href: '/blog' },
    { name: 'Documentation', href: '/docs' },
    { name: 'API Reference', href: '/api' },
    { name: 'Tutorials', href: '/tutorials' },
    { name: 'Support', href: '/support' },
    { name: 'Community', href: '/community' },
  ];

  const legal = [
    { name: 'Privacy Policy', href: '/legal/privacy' },
    { name: 'Terms of Service', href: '/legal/terms' },
    { name: 'Cookie Policy', href: '/legal/cookies' },
  ];

  return (
    <footer className='bg-gray-900 text-white'>
      <div className='container mx-auto px-4 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8'>
          <div className='lg:col-span-2'>
            <div className='flex items-center space-x-2 mb-4'>
              <div className='w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center'>
                <span className='text-white font-bold text-xl'>Z</span>
              </div>
              <div className='text-xl font-bold'>Zion Tech Group</div>
            </div>
            <p className='text-gray-300 mb-6 max-w-md'>
              Leading technology solutions provider helping businesses transform
              their digital presence with cutting-edge AI, cloud architecture
              and innovative development services.
            </p>
            <div className='flex space-x-4'>
              <a
                href='https://linkedin.com/company/ziontechgroup'
                className='text-gray-400 hover:text-white transition-colors'
              >
                <span className='w-5 h-5'>in</span>
              </a>
              <a
                href='https://twitter.com/ziontechgroup'
                className='text-gray-400 hover:text-white transition-colors'
              >
                <span className='w-5 h-5'>🐦</span>
              </a>
              <a
                href='https://github.com/ziontechgroup'
                className='text-gray-400 hover:text-white transition-colors'
              >
                <span className='w-5 h-5'>⚡</span>
              </a>
              <a
                href='mailto:contact@ziontechgroup.com'
                className='text-gray-400 hover:text-white transition-colors'
              >
                <span className='w-5 h-5'>✉️</span>
              </a>
            </div>
          </div>
          <div>
            <h3 className='text-lg font-semibold mb-4'>Services</h3>
            <ul className='space-y-2'>
              {services.slice(0, 6).map(service => (
                <li key={service.name}>
                  <Link href={service.href}>
                    <span className='text-gray-400 hover:text-white text-sm transition-colors'>
                      {service.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className='text-lg font-semibold mb-4'>Company</h3>
            <ul className='space-y-2'>
              {company.slice(0, 6).map(item => (
                <li key={item.name}>
                  <Link href={item.href}>
                    <span className='text-gray-400 hover:text-white text-sm transition-colors'>
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className='text-lg font-semibold mb-4'>Resources</h3>
            <ul className='space-y-2'>
              {resources.slice(0, 6).map(resource => (
                <li key={resource.name}>
                  <Link href={resource.href}>
                    <span className='text-gray-400 hover:text-white text-sm transition-colors'>
                      {resource.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className='border-t border-gray-800 mt-12 pt-8'>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <div className='flex items-center space-x-6 mb-4 md:mb-0'>
              <div className='flex items-center space-x-2 text-gray-400'>
                <span className='w-4 h-4'>📍</span>
                <span className='text-sm'>New York, NY</span>
              </div>
              <div className='flex items-center space-x-2 text-gray-400'>
                <span className='w-4 h-4'>📞</span>
                <span className='text-sm'>+1 (555) 123-4567</span>
              </div>
              <div className='flex items-center space-x-2 text-gray-400'>
                <span className='w-4 h-4'>✉️</span>
                <span className='text-sm'>contact@ziontechgroup.com</span>
              </div>
            </div>
            <div className='flex space-x-6'>
              {legal.map(item => (
                <Link key={item.name} href={item.href}>
                  <span className='text-gray-400 hover:text-white text-sm transition-colors'>
                    {item.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
          <div className='mt-6 text-center text-gray-400 text-sm'>
            <p>&copy; {currentYear} Zion Tech Group. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default EnhancedFooter;