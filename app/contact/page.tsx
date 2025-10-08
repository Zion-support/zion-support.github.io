import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Zion Tech Group',
  description:
    'Get in touch with Zion Tech Group for AI and IT solutions. Contact our experts for consultation and support.',
};

const ContactPage: React.FC = () => {
  return (
    <>
      <div className='min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-12'>
            <h1 className='text-4xl font-bold text-gray-900 mb-4'>
              Contact Us
            </h1>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Get in touch with our team for AI and IT solutions consultation
            </p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
            <div className='bg-white rounded-lg shadow-lg p-8'>
              <h2 className='text-2xl font-bold text-gray-900 mb-6'>
                Get in Touch
              </h2>
              <form className='space-y-6'>
                <div>
                  <label htmlFor='name' className='block text-sm font-medium text-gray-700 mb-1'>
                    Name
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                    placeholder='Your name'
                  />
                </div>
                <div>
                  <label htmlFor='email' className='block text-sm font-medium text-gray-700 mb-1'>
                    Email
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                    placeholder='your@email.com'
                  />
                </div>
                <div>
                  <label htmlFor='subject' className='block text-sm font-medium text-gray-700 mb-1'>
                    Subject
                  </label>
                  <input
                    type='text'
                    id='subject'
                    name='subject'
                    className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                    placeholder='How can we help?'
                  />
                </div>
                <div>
                  <label htmlFor='message' className='block text-sm font-medium text-gray-700 mb-1'>
                    Message
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    rows={6}
                    className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                    placeholder='Tell us more about your needs...'
                  />
                </div>
                <button
                  type='submit'
                  className='w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200'
                >
                  Send Message
                </button>
              </form>
            </div>

            <div>
              <div className='bg-white rounded-lg shadow-lg p-8 mb-6'>
                <h2 className='text-2xl font-bold text-gray-900 mb-6'>
                  Contact Information
                </h2>
                <div className='space-y-6'>
                  <div>
                    <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                      Address
                    </h3>
                    <p className='text-gray-600'>
                      364 E Main St STE 1008<br />
                      Middletown, DE 19709<br />
                      United States
                    </p>
                  </div>
                  <div>
                    <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                      Email
                    </h3>
                    <p className='text-gray-600'>
                      <a href='mailto:info@ziontechgroup.com' className='text-blue-600 hover:text-blue-700'>
                        info@ziontechgroup.com
                      </a>
                    </p>
                  </div>
                  <div>
                    <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                      Phone
                    </h3>
                    <p className='text-gray-600'>
                      <a href='tel:+1234567890' className='text-blue-600 hover:text-blue-700'>
                        +1 (234) 567-890
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className='bg-white rounded-lg shadow-lg p-8'>
                <h2 className='text-2xl font-bold text-gray-900 mb-4'>
                  Business Hours
                </h2>
                <div className='space-y-2 text-gray-600'>
                  <div className='flex justify-between'>
                    <span className='font-medium'>Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM EST</span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='font-medium'>Saturday:</span>
                    <span>10:00 AM - 4:00 PM EST</span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='font-medium'>Sunday:</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;