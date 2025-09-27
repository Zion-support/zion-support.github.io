import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import SEO from '../src/components/SEO';
import { useAnalytics } from '../src/hooks/useAnalytics';

export default function PrivacyPolicy(): JSX.Element {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const { trackClick } = useAnalytics();

  return (
    <>
      <SEO 
        title='Privacy Policy - Zion Tech Group'
        description='Learn about how we collect, use, and protect your personal information.'
        keywords='privacy policy, data protection, privacy'
      />
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <main className='min-h-screen bg-gray-50 py-20'>
        <div className='container mx-auto px-4'>
          <h1 className='text-4xl font-bold text-center mb-8'>Privacy Policy</h1>
          <div className='max-w-4xl mx-auto'>
            <div className='bg-white rounded-lg shadow-md p-8'>
              <h2 className='text-2xl font-bold mb-4'>Information We Collect</h2>
              <p className='text-gray-600 mb-6'>
                We collect information you provide directly to us, such as when you create an account, 
                use our services, or contact us for support.
              </p>
              
              <h2 className='text-2xl font-bold mb-4'>How We Use Your Information</h2>
              <p className='text-gray-600 mb-6'>
                We use the information we collect to provide, maintain, and improve our services, 
                process transactions, and communicate with you.
              </p>
              
              <h2 className='text-2xl font-bold mb-4'>Information Sharing</h2>
              <p className='text-gray-600 mb-6'>
                We do not sell, trade, or otherwise transfer your personal information to third parties 
                without your consent, except as described in this policy.
              </p>
              
              <h2 className='text-2xl font-bold mb-4'>Data Security</h2>
              <p className='text-gray-600 mb-6'>
                We implement appropriate security measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction.
              </p>
              
              <h2 className='text-2xl font-bold mb-4'>Contact Us</h2>
              <p className='text-gray-600'>
                If you have any questions about this Privacy Policy, please contact us at privacy@ziontechgroup.com
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
