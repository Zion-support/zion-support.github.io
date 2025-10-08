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
      <div className='min-h-screen bg-gradient-to-br from-gray-50 to-gray-100'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
          <div className='text-center mb-12'>
            <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
              Contact Us
            </h1>
            <p className='text-xl text-gray-600'>
              Get in touch with our team of experts
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div className='bg-white rounded-lg shadow-lg p-8'>
              <h2 className='text-2xl font-bold text-gray-900 mb-6'>
                Contact Information
              </h2>
              
              <div className='space-y-4'>
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
              <h2 className='text-2xl font-bold text-gray-900 mb-6'>
                Send Us a Message
              </h2>
              <p className='text-gray-600'>
                Fill out our contact form or reach out to us directly via email or phone. 
                Our team is here to help you transform your business with cutting-edge AI solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;