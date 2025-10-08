import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function TermsPage() {
  return (
    <>
      <Helmet>
        <title>Terms of Service - Zion Tech Group</title>
        <meta name="description" content="Read Zion Tech Group's terms of service to understand the terms and conditions for using our AI-powered enterprise solutions and services." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://zion.app/terms" />
      </Helmet>
      <div className='min-h-screen bg-gray-50 py-16'>
      <div className='container mx-auto px-4 max-w-4xl'>
        <div className='bg-white rounded-lg shadow-lg p-8'>
          <h1 className='text-4xl font-bold text-gray-900 mb-8'>Terms of Service</h1>
          
          <div className='prose prose-lg max-w-none'>
            <p className='text-gray-600 mb-6'>
              <strong>Last updated:</strong> January 1, 2025
            </p>
            
            <section className='mb-8'>
              <h2 className='text-2xl font-semibold text-gray-900 mb-4'>1. Acceptance of Terms</h2>
              <p className='text-gray-600'>
                By accessing and using Zion Tech Group's services, you accept and agree to be bound by 
                the terms and provision of this agreement.
              </p>
            </section>
            
            <section className='mb-8'>
              <h2 className='text-2xl font-semibold text-gray-900 mb-4'>2. Use License</h2>
              <p className='text-gray-600 mb-4'>
                Permission is granted to temporarily download one copy of the materials on Zion Tech Group's 
                website for personal, non-commercial transitory viewing only. This is the grant of a license, 
                not a transfer of title, and under this license you may not:
              </p>
              <ul className='list-disc list-inside text-gray-600 space-y-2'>
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </section>
            
            <section className='mb-8'>
              <h2 className='text-2xl font-semibold text-gray-900 mb-4'>3. Service Availability</h2>
              <p className='text-gray-600'>
                We strive to maintain high service availability, but we do not guarantee uninterrupted access 
                to our services. We reserve the right to modify or discontinue services at any time.
              </p>
            </section>
            
            <section className='mb-8'>
              <h2 className='text-2xl font-semibold text-gray-900 mb-4'>4. Limitation of Liability</h2>
              <p className='text-gray-600'>
                In no event shall Zion Tech Group or its suppliers be liable for any damages (including, 
                without limitation, damages for loss of data or profit, or due to business interruption) 
                arising out of the use or inability to use the materials on our website.
              </p>
            </section>
            
            <section className='mb-8'>
              <h2 className='text-2xl font-semibold text-gray-900 mb-4'>5. ROI Guarantee</h2>
              <p className='text-gray-600'>
                Our 300% ROI guarantee applies to qualifying enterprise AI transformation projects. 
                Specific terms and conditions apply. Contact us for details.
              </p>
            </section>
            
            <section className='mb-8'>
              <h2 className='text-2xl font-semibold text-gray-900 mb-4'>6. Governing Law</h2>
              <p className='text-gray-600'>
                These terms and conditions are governed by and construed in accordance with the laws of 
                Delaware, United States, and you irrevocably submit to the exclusive jurisdiction of the 
                courts in that state or location.
              </p>
            </section>
            
            <section className='mb-8'>
              <h2 className='text-2xl font-semibold text-gray-900 mb-4'>7. Contact Information</h2>
              <p className='text-gray-600'>
                If you have any questions about these Terms of Service, please contact us:
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
