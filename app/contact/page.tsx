import React from 'react';

export default function ContactPage() {
  return (
    <>
      <div className='min-h-screen bg-gradient-to-b from-gray-50 to-white py-16'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto'>
            <h1 className='text-5xl font-bold text-gray-900 mb-6 text-center'>
              Contact Us
            </h1>
            <p className='text-xl text-gray-600 text-center mb-12'>
              Get in touch with our team to discuss your project
            </p>

            <div className='grid md:grid-md-2 gap-8'>
              <div className='bg-white rounded-lg shadow-lg p-8'>
                <h2 className='text-2xl font-bold text-gray-900 mb-6'>
                  Get In Touch
                </h2>
                <div className='space-y-4'>
                  <div>
                    <h3 className='font-semibold text-gray-900 mb-2'>Email</h3>
                    <p className='text-gray-600'>
                      <a href='mailto:kleber@ziontechgroup.com' className='text-blue-600 hover:text-blue-700'>
                        kleber@ziontechgroup.com
                      </a>
                    </p>
                  </div>
                  <div>
                    <h3 className='font-semibold text-gray-900 mb-2'>Phone</h3>
                    <p className='text-gray-600'>
                      <a href='tel:+13024640950' className='text-blue-600 hover:text-blue-700'>
                        +1 (302) 464-0950
                      </a>
                    </p>
                  </div>
                  <div>
                    <h3 className='font-semibold text-gray-900 mb-2'>Address</h3>
                    <p className='text-gray-600'>
                      364 E Main St STE 1008<br />
                      Middletown, DE 19709<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>

              <div className='bg-white rounded-lg shadow-lg p-8'>
                <h2 className='text-2xl font-bold text-gray-900 mb-6'>
                  Business Hours
                </h2>
                <div className='space-y-3 text-gray-600'>
                  <div className='flex justify-between'>
                    <span>Monday - Friday:</span>
                    <span className='font-semibold'>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className='flex justify-between'>
                    <span>Saturday:</span>
                    <span className='font-semibold'>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className='flex justify-between'>
                    <span>Sunday:</span>
                    <span className='font-semibold'>Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}