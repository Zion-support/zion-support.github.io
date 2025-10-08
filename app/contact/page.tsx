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
      <div className='bg-gradient-to-b from-gray-50 to-white min-h-screen'>
        <div className='container mx-auto px-4 py-12'>
          <div className='max-w-4xl mx-auto'>
            <div className='mb-12 text-center'>
              <h1 className='text-4xl font-bold text-gray-900 mb-4'>
                Contact Us
              </h1>
              <p className='text-xl text-gray-600'>
                Get in touch with our team of experts
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              <div className='bg-white rounded-lg shadow-lg p-8'>
                <h2 className='text-2xl font-bold text-gray-900 mb-4'>
                  Get In Touch
                </h2>
                <div className='space-y-4'>
                  <div>
                    <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                      Email
                    </h3>
                    <p className='text-gray-600'>
                      <a
                        href='mailto:kleber@ziontechgroup.com'
                        className='text-blue-600 hover:text-blue-700'
                      >
                        kleber@ziontechgroup.com
                      </a>
                    </p>
                  </div>
                  <div>
                    <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                      Phone
                    </h3>
                    <p className='text-gray-600'>
                      <a
                        href='tel:+13024640950'
                        className='text-blue-600 hover:text-blue-700'
                      >
                        +1 (302) 464-0950
                      </a>
                    </p>
                  </div>
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
                </div>
              </div>

              <div className='bg-white rounded-lg shadow-lg p-8'>
                <h2 className='text-2xl font-bold text-gray-900 mb-4'>
                  Send Us a Message
                </h2>
                <form className='space-y-4'>
                  <div>
                    <label
                      htmlFor='name'
                      className='block text-sm font-medium text-gray-700 mb-1'
                    >
                      Name
                    </label>
                    <input
                      type='text'
                      id='name'
                      name='name'
                      className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500'
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor='email'
                      className='block text-sm font-medium text-gray-700 mb-1'
                    >
                      Email
                    </label>
                    <input
                      type='email'
                      id='email'
                      name='email'
                      className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500'
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor='message'
                      className='block text-sm font-medium text-gray-700 mb-1'
                    >
                      Message
                    </label>
                    <textarea
                      id='message'
                      name='message'
                      rows={4}
                      className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500'
                      required
                    />
                  </div>
                  <button
                    type='submit'
                    className='w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors'
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;