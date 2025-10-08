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
      <div className='min-h-screen bg-slate-50 py-16'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto'>
            <div className='text-center mb-12'>
              <h1 className='text-4xl font-bold text-gray-900 mb-4'>
                Contact Us
              </h1>
              <p className='text-xl text-gray-600'>
                Get in touch with our team for AI and IT solutions
              </p>
            </div>

            <div className='bg-white rounded-lg shadow-lg p-8'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                <div>
                  <h2 className='text-2xl font-bold text-gray-900 mb-6'>
                    Get In Touch
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
                        Phone
                      </h3>
                      <p className='text-gray-600'>
                        <a href='tel:+13024640950' className='hover:text-blue-600'>
                          +1 (302) 464-0950
                        </a>
                      </p>
                    </div>
                    <div>
                      <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                        Email
                      </h3>
                      <p className='text-gray-600'>
                        <a href='mailto:info@ziontechgroup.com' className='hover:text-blue-600'>
                          info@ziontechgroup.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <h2 className='text-2xl font-bold text-gray-900 mb-6'>
                    Business Hours
                  </h2>
                  <div className='space-y-2 text-gray-600'>
                    <p>Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                    <p>Saturday: 10:00 AM - 4:00 PM EST</p>
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