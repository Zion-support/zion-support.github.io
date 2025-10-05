import React from 'react';
import { Link } from 'react-router-dom';

const SiteFooter: React.FC = () => {
  return (
    <footer className='bg-gray-900 text-gray-300 mt-16'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          <div>
            <div className='flex items-center gap-2 mb-4'>
              <span className='text-2xl'>🚀</span>
              <span className='text-xl font-bold text-white'>
                Zion Tech Group
              </span>
            </div>
            <p className='text-gray-400'>
              Enterprise-grade AI micro SaaS and IT solutions. Transform your
              business with cutting-edge technology.
            </p>
          </div>

          <div>
            
            <ul className='space-y-2'>
              <li>
                <Link to='/services' className='hover:text-white'>
                  All Services
                </Link>
              </li>
              <li>
                <Link to='/it-services' className='hover:text-white'>
                  IT Services
                </Link>
              </li>
              <li>
                <Link to='/micro-saas' className='hover:text-white'>
                  Micro SaaS
                </Link>
              </li>
              <li>
                <Link to='/services/consulting' className='hover:text-white'>
                  Consulting
                </Link>
              </li>
            </ul>
          </div>

          <div>
            
            <ul className='space-y-2'>
              <li>
                <Link to='/solutions' className='hover:text-white'>
                  All Solutions
                </Link>
              </li>
              <li>
                <Link to='/solutions/enterprise' className='hover:text-white'>
                  Enterprise
                </Link>
              </li>
              <li>
                <Link to='/solutions/smb' className='hover:text-white'>
                  SMB
                </Link>
              </li>
              <li>
                <Link to='/solutions/startup' className='hover:text-white'>
                  Startup
                </Link>
              </li>
            </ul>
          </div>

          <div>
            
            <ul className='space-y-2'>
              <li>
                <Link to='/about' className='hover:text-white'>
                  About
                </Link>
              </li>
              <li>
                <Link to='/contact' className='hover:text-white'>
                  Contact
                </Link>
              </li>
              <li>
                <Link to='/careers' className='hover:text-white'>
                  Careers
                </Link>
              </li>
              <li>
                <Link to='/news' className='hover:text-white'>
                  News
                </Link>
              </li>
              <li>
                <Link to='/faq' className='hover:text-white'>
                  FAQ
                </Link>
              </li>
              <li>
                <Link to='/privacy' className='hover:text-white'>
                  Privacy
                </Link>
              </li>
              <li>
                <Link to='/terms' className='hover:text-white'>
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className='border-t border-gray-800 mt-8 pt-8 text-sm text-gray-400 text-center'>
          <p>
            © {new Date().getFullYear()} Zion Tech Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
