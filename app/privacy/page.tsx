import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function PrivacyPage() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Zion Tech Group</title>
        <meta name="description" content="Read Zion Tech Group's privacy policy to understand how we collect, use, and protect your personal information when using our AI-powered enterprise solutions." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://zion.app/privacy" />
      </Helmet>
      <div className='min-h-screen bg-gray-50 py-16'>
      <div className='container mx-auto px-4 max-w-4xl'>
        <div className='bg-white rounded-lg shadow-lg p-8'>
          <h1 className='text-4xl font-bold text-gray-900 mb-8'>Privacy Policy</h1>
          
          <div className='prose prose-lg max-w-none'>
            <p className='text-gray-600 mb-6'>
              <strong>Last updated:</strong> January 1, 2025
            </p>
            
            <section className='mb-8'>
              <h2 className='text-2xl font-semibold text-gray-900 mb-4'>1. Information We Collect</h2>
              <p className='text-gray-600 mb-4'>
                We collect information you provide directly to us, such as when you create an account, 
                contact us, or use our services. This may include:
              </p>
              <ul className='list-disc list-inside text-gray-600 space-y-2'>
                <li>Name and contact information</li>
                <li>Company information</li>
                <li>Communication preferences</li>
                <li>Service usage data</li>
              </ul>
            </section>
            
            <section className='mb-8'>
              <h2 className='text-2xl font-semibold text-gray-900 mb-4'>2. How We Use Your Information</h2>
              <p className='text-gray-600 mb-4'>
                We use the information we collect to:
              </p>
              <ul className='list-disc list-inside text-gray-600 space-y-2'>
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send technical notices and support messages</li>
                <li>Respond to your comments and questions</li>
                <li>Develop new products and services</li>
              </ul>
            </section>
            
            <section className='mb-8'>
              <h2 className='text-2xl font-semibold text-gray-900 mb-4'>3. Information Sharing</h2>
              <p className='text-gray-600'>
                We do not sell, trade, or otherwise transfer your personal information to third parties 
                without your consent, except as described in this policy or as required by law.
              </p>
            </section>
            
            <section className='mb-8'>
              <h2 className='text-2xl font-semibold text-gray-900 mb-4'>4. Data Security</h2>
              <p className='text-gray-600'>
                We implement appropriate security measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>
            
            <section className='mb-8'>
              <h2 className='text-2xl font-semibold text-gray-900 mb-4'>5. Contact Us</h2>
              <p className='text-gray-600'>
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className='mt-4 p-4 bg-gray-100 rounded-lg'>
                <p className='text-gray-700'>
                  <strong>Email:</strong> kleber@ziontechgroup.com<br />
                  <strong>Phone:</strong> +1 302 464 0950<br />
                  <strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
