'use client';

import React from 'react';
import { Metadata } from 'next';

const ContactPage: React.FC = () => {
  return (
    <>
      <div className='min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto'>
            <div className='text-center mb-12'>
              <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
                Contact Us
              </h1>
              <p className='text-xl text-gray-600'>
                Get in touch with Zion Tech Group for AI and IT solutions
              </p>
            </div>

            <div className='bg-white rounded-lg shadow-lg p-8'>
              <div className='grid md:grid-cols-2 gap-8'>
                <div>
                  <h2 className='text-2xl font-bold text-gray-900 mb-4'>
                    Get In Touch
                  </h2>
                  <p className='text-gray-600 mb-6'>
                    Contact our experts for consultation and support.
                  </p>
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