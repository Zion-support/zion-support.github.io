import React from 'react';
import Head from 'next/head';

<<<<<<< HEAD
export default function AccessibilityScannerPage() {
  return (
    <>
      <SEO
        title='Accessibility Scanner'
        description='Automated WCAG scanning and remediation guidance.'
        canonical='/accessibility-scanner'
      />
      <section className='relative pt-28 pb-16 md:pt-36 md:pb-24'>
        <div className='container mx-auto px-4 max-w-3xl'>
          <h1 className='text-3xl md:text-5xl font-extrabold tracking-tight gradient-text-cyan-purple'>
            Accessibility Scanner
          </h1>
          <p className='mt-4 text-gray-300'>
            Continuously scan your sites and apps for accessibility issues and
            prioritize fixes.
          </p>
          <div className='mt-8 flex gap-3'>
            <a
              href='/services'
              className='px-4 py-2 rounded-lg bg-white text-black font-medium'
            >
              Explore Services
            </a>
            <a
              href='/contact'
              className='px-4 py-2 rounded-lg border border-white/10 text-gray-200'
            >
              Contact Sales
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
=======
const AccessibilityScannerPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Accessibility Scanner - Zion Tech Group</title>
        <meta name="description" content="Accessibility scanning tools and services" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-white mb-8">Accessibility Scanner</h1>
            <p className="text-xl text-gray-300 mb-8">
              Comprehensive accessibility scanning and testing tools for your applications.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccessibilityScannerPage;
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
