import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className='bg-gray-800 text-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          <div>
            <h3 className='text-lg font-semibold mb-4'>Zion Tech Group</h3>
            <p className='text-gray-300'>
              Advanced AI and IT Solutions for modern businesses.
            </p>
          </div>
          <div>
            
            <ul className='space-y-2 text-gray-300'>
              <li>AI Solutions</li>
              <li>IT Infrastructure</li>
              <li>Cloud Services</li>
              
            </ul>
          </div>
          <div>
            
            <ul className='space-y-2 text-gray-300'>
              <li>About Us</li>

            </ul>
          </div>
          <div>
            
            <p className='text-gray-300'>
              Email: info@ziontechgroup.com
              <br />
              Phone: +1 (302) 464-0950
            </p>
          </div>
        </div>
        <div className='border-t border-gray-700 mt-8 pt-8 text-center text-gray-300'>
          <p>&copy; 2025 Zion Tech Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
