import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div className='min-h-screen bg-gray-50 py-16'>
      <div className='container mx-auto px-4'>
        <div className='max-w-2xl mx-auto'>
          <h1 className='text-4xl font-bold text-gray-900 mb-8 text-center'>
            Contact Us
          </h1>
          <div className='bg-white rounded-lg shadow-lg p-8'>
            <p className='text-lg text-gray-600 mb-6 text-center'>
              Get in touch with Zion Tech Group to learn how we can help transform your business.
            </p>
            <div className='space-y-6'>
              <div>
                <h2 className='text-xl font-semibold text-gray-900 mb-2'>Email</h2>
                <a href='mailto:kleber@ziontechgroup.com' className='text-blue-600 hover:text-blue-700'>
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div>
                <h2 className='text-xl font-semibold text-gray-900 mb-2'>Phone</h2>
                <a href='tel:+13024640950' className='text-blue-600 hover:text-blue-700'>
                  +1 (302) 464-0950
                </a>
              </div>
              <div>
                <h2 className='text-xl font-semibold text-gray-900 mb-2'>Address</h2>
                <address className='not-italic text-gray-600'>
                  364 E Main St STE 1008<br />
                  Middletown, DE 19709<br />
                  United States
                </address>
              </div>
              <div>
                <h2 className='text-xl font-semibold text-gray-900 mb-2'>Business Hours</h2>
                <p className='text-gray-600'>
                  Monday - Friday: 9:00 AM - 5:00 PM EST<br />
                  Weekend: Closed
                </p>
              </div>
            </div>
            <div className='mt-8 pt-8 border-t border-gray-200'>
              <p className='text-center text-gray-600'>
                Looking forward to hearing from you!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
