import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Zion Tech Group',
  description: 'Get in touch with Zion Tech Group for AI and IT solutions.',
};

const ContactPage: React.FC = () => {
  return (
    <div className='min-h-screen bg-gray-50 py-12'>
      <div className='max-w-7xl mx-auto px-4'>
        <h1 className='text-4xl font-bold text-center mb-8'>Contact Us</h1>
        <div className='bg-white rounded-lg shadow-lg p-8'>
          <p className='text-gray-600 mb-4'>
            364 E Main St STE 1008<br />
            Middletown, DE 19709<br />
            United States
          </p>
          <p className='text-gray-600'>
            Phone: <a href='tel:+13024640950'>+1 (302) 464-0950</a><br />
            Email: <a href='mailto:kleber@ziontechgroup.com'>kleber@ziontechgroup.com</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
