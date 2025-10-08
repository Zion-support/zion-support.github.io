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
      <div className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100'>
        <div className='container mx-auto px-4 py-16'>
          <div className='max-w-4xl mx-auto'>
            <div className='text-center mb-12'>
              <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
                Contact Us
              </h1>
              <p className='text-xl text-gray-600'>
                Get in touch with our team of experts
              </p>
            </div>

            <div className='bg-white rounded-lg shadow-lg p-8'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                <div>
                  <h2 className='text-2xl font-bold text-gray-900 mb-4'>
                    Get In Touch
                  </h2>
                  <div className='space-y-4'>
                    <p className='text-gray-600'>
                      Have a question or need assistance? We'd love to hear from you.
                    </p>
                    <p className='text-gray-600'>
                      Our team is available to help with your AI and IT solution needs.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className='text-xl font-semibold text-gray-900 mb-4'>
                    Our Location
                  </h3>
                  <div className='text-gray-600'>
                    <p className='mb-2'>
                      364 E Main St STE 1008<br />
                      Middletown, DE 19709<br />
                      United States
                    </p>
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