import React from 'react';
// import { Metadata } from 'next'; // Removed for Vite

const metadata: Metadata = {
  title: 'Terms of Service - Zion Tech Group',
  description:
    'Terms of service and usage agreement for Zion Tech Group services and website.',
};

export { metadata };

const TermsPage: React.FC = () => {
  return (
    <>
      <div className='min-h-screen bg-slate-50 py-16'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto'>
            <div className='bg-white rounded-lg shadow-lg p-8'>
              <h1 className='text-4xl font-bold text-gray-900 mb-8'>
                Terms of Service
              </h1>

              <div className='prose prose-lg max-w-none'>
                <p className='text-gray-600 mb-6'>
                  <strong>Last updated:</strong>{' '}
                  {new Date().toLocaleDateString()}
                </p>

                <section className='mb-8'>
                  <h2 className='text-2xl font-bold text-gray-900 mb-4'>
                    Acceptance of Terms
                  </h2>
                  <p className='text-gray-600 mb-4'>
                    By accessing and using our services, you accept and agree to
                    be bound by the terms and provision of this agreement.
                  </p>
                </section>

                <section className='mb-8'>
                  <h2 className='text-2xl font-bold text-gray-900 mb-4'>
                    Use License
                  </h2>
                  <p className='text-gray-600 mb-4'>
                    Permission is granted to temporarily download one copy of
                    our materials for personal, non-commercial transitory
                    viewing only.
                  </p>
                  <p className='text-gray-600 mb-4'>
                    This is the grant of a license, not a transfer of title, and
                    under this license you may not:
                  </p>
                  <ul className='list-disc list-inside text-gray-600 space-y-2'>
                    <li>Modify or copy the materials</li>
                    <li>
                      Use the materials for any commercial purpose or for any
                      public display
                    </li>
                    <li>
                      Attempt to reverse engineer any software contained on our
                      website
                    </li>
                    <li>
                      Remove any copyright or other proprietary notations from
                      the materials
                    </li>
                  </ul>
                </section>

                <section className='mb-8'>
                  <h2 className='text-2xl font-bold text-gray-900 mb-4'>
                    Service Availability
                  </h2>
                  <p className='text-gray-600 mb-4'>
                    We strive to maintain high availability of our services, but
                    we do not guarantee uninterrupted access. We reserve the
                    right to modify or discontinue services at any time.
                  </p>
                </section>

                <section className='mb-8'>
                  <h2 className='text-2xl font-bold text-gray-900 mb-4'>
                    User Responsibilities
                  </h2>
                  <p className='text-gray-600 mb-4'>
                    Users are responsible for:
                  </p>
                  <ul className='list-disc list-inside text-gray-600 space-y-2'>
                    <li>
                      Maintaining the confidentiality of their account
                      information
                    </li>
                    <li>All activities that occur under their account</li>
                    <li>Complying with all applicable laws and regulations</li>
                    <li>
                      Not using our services for any unlawful or prohibited
                      purpose
                    </li>
                  </ul>
                </section>

                <section className='mb-8'>
                  <h2 className='text-2xl font-bold text-gray-900 mb-4'>
                    Limitation of Liability
                  </h2>
                  <p className='text-gray-600 mb-4'>
                    In no event shall Zion Tech Group or its suppliers be liable
                    for any damages (including, without limitation, damages for
                    loss of data or profit, or due to business interruption)
                    arising out of the use or inability to use our services.
                  </p>
                </section>

                <section className='mb-8'>
                  <h2 className='text-2xl font-bold text-gray-900 mb-4'>
                    Contact Information
                  </h2>
                  <p className='text-gray-600'>
                    If you have any questions about these Terms of Service,
                    please contact us at:
                  </p>
                  <div className='mt-4 p-4 bg-gray-50 rounded-lg'>
                    <p className='text-gray-600'>
                      <strong>Email:</strong> legal@ziontechgroup.com
                      <br />
                      <strong>Phone:</strong> +1 (555) 123-4567
                      <br />
                      <strong>Address:</strong> 123 Tech Street, San Francisco,
                      CA 94105
                    </p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsPage;
