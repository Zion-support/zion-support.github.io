import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Zion Tech Group',
  description: 'Get in touch with Zion Tech Group for AI and IT solutions. Contact our experts for consultation and support.',
};

const ContactPage: React.FC = () => {
  return (
    <>

      <div className='min-h-screen bg-slate-50 py-16'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto'>
            <div className='text-center mb-16'>
              <h1 className='text-4xl font-bold text-gray-900 mb-4'>
                Contact Us
              </h1>
              <p className='text-xl text-gray-600'>
                Ready to transform your business? Let&apos;s discuss your needs.
              </p>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
              <div className='bg-white rounded-lg shadow-lg p-8'>
                <h2 className='text-2xl font-bold text-gray-900 mb-6'>
                  Get in Touch
                </h2>
                <form className='space-y-6'>
                  <div>
                    <label
                      htmlFor='name'
                      className='block text-sm font-medium text-gray-700 mb-2'
                    >
                      Name
                    </label>
                    <input
                      type='text'
                      id='name'
                      name='name'
                      className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor='email'
                      className='block text-sm font-medium text-gray-700 mb-2'
                    >
                      Email
                    </label>
                    <input
                      type='email'
                      id='email'
                      name='email'
                      className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor='company'
                      className='block text-sm font-medium text-gray-700 mb-2'
                    >
                      Company
                    </label>
                    <input
                      type='text'
                      id='company'
                      name='company'
                      className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                    />
                  </div>
                  <div>
                    <label
                      htmlFor='message'
                      className='block text-sm font-medium text-gray-700 mb-2'
                    >
                      Message
                    </label>
                    <textarea
                      id='message'
                      name='message'
                      rows={4}
                      className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                      required
                    ></textarea>
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
                <div className='bg-white rounded-lg shadow-lg p-8'>
                  <h3 className='text-xl font-bold text-gray-900 mb-4'>
                    Contact Information
                  </h3>
                  <div className='space-y-4'>
                    <div>
                      <h4 className='font-semibold text-gray-900'>Email</h4>
                      <p className='text-gray-600'>contact@ziontechgroup.com</p>
                    </div>
                    <div>
                      <h4 className='font-semibold text-gray-900'>Phone</h4>
                      <p className='text-gray-600'>+1 (555) 123-4567</p>
                    </div>
                    <div>
                      <h4 className='font-semibold text-gray-900'>Address</h4>
                      <p className='text-gray-600'>
                        123 Tech Street
                        <br />
                        San Francisco, CA 94105
                      </p>
                    </div>
                  </div>
                </div>

                <div className='bg-white rounded-lg shadow-lg p-8'>
                  <h3 className='text-xl font-bold text-gray-900 mb-4'>
                    Business Hours
                  </h3>
                  <div className='space-y-2 text-gray-600'>
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
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
