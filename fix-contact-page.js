#!/usr/bin/env node

import fs from 'fs';

// console.log('🔧 Fixing contact page JSX syntax errors...');

const fixedContent = `import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div className='min-h-screen bg-slate-50 py-16'>
      <div className='container mx-auto px-4'>
        <div className='max-w-4xl mx-auto'>
          <div className='text-center mb-12'>
            <h1 className='text-4xl font-bold text-gray-900 mb-4'>
              Contact Us
            </h1>
            <p className='text-xl text-gray-600'>
              Get in touch with our AI experts for a free consultation
            </p>
          </div>
          <div className='grid md:grid-cols-2 gap-8'>
            <div className='bg-white p-6 rounded-lg shadow-md'>
              <h2 className='text-2xl font-semibold mb-6'>Send us a message</h2>
              <form className='space-y-4'>
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>
                    Name
                  </label>
                  <input
                    type='text'
                    className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                    placeholder='Your name'
                  />
                </div>
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>
                    Email
                  </label>
                  <input
                    type='email'
                    className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                    placeholder='your.email@example.com'
                  />
                </div>
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>
                    Company
                  </label>
                  <input
                    type='text'
                    className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                    placeholder='Your company name'
                  />
                </div>
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                    placeholder='Tell us about your AI transformation needs...'
                  />
                </div>
                <button
                  type='submit'
                  className='w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors'
                >
                  Send Message
                </button>
              </form>
            </div>
            
            <div className='space-y-6'>
              <div className='bg-white p-6 rounded-lg shadow-md'>
                <h3 className='text-xl font-semibold mb-4'>Contact Information</h3>
                <div className='space-y-3'>
                  <div>
                    <h4 className='font-medium text-gray-900'>Email</h4>
                    <p className='text-gray-600'>contact@ziontechgroup.com</p>
                  </div>
                  <div>
                    <h4 className='font-medium text-gray-900'>Phone</h4>
                    <p className='text-gray-600'>+1 (302) 464-0950</p>
                  </div>
                  <div>
                    <h4 className='font-medium text-gray-900'>Address</h4>
                    <p className='text-gray-600'>
                      Wilmington, DE<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>
              
              <div className='bg-white p-6 rounded-lg shadow-md'>
                <h3 className='text-xl font-semibold mb-4'>Business Hours</h3>
                <div className='space-y-2'>
                  <div className='flex justify-between'>
                    <span className='text-gray-600'>Monday - Friday</span>
                    <span className='text-gray-900'>9:00 AM - 6:00 PM EST</span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-gray-600'>Saturday</span>
                    <span className='text-gray-900'>10:00 AM - 4:00 PM EST</span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-gray-600'>Sunday</span>
                    <span className='text-gray-900'>Closed</span>
                  </div>
                </div>
              </div>
              
              <div className='bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-lg text-white'>
                <h3 className='text-xl font-semibold mb-4'>Ready to Transform?</h3>
                <p className='text-blue-100 mb-4'>
                  Schedule a free consultation with our AI experts and discover how we can accelerate your digital transformation.
                </p>
                <button className='bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors'>
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
`;

// Write the fixed content
fs.writeFileSync('app/contact/page.tsx', fixedContent);

// console.log('✅ Fixed contact page JSX syntax errors');
