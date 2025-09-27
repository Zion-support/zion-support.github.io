import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SEO from '../src/components/SEO';
import { useAnalytics } from '../src/hooks/useAnalytics';

export default function About(): JSX.Element {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const { trackClick } = useAnalytics();

  return (
    <>
      <SEO 
        title='About Us - Zion Tech Group'
        description='Learn about Zion Tech Group and our mission to transform businesses through technology.'
        keywords='about, company, mission, technology'
      />
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <main className='min-h-screen bg-gray-50'>
        <div className='container mx-auto px-4 py-20'>
          <h1 className='text-4xl font-bold text-center mb-8'>About Zion Tech Group</h1>
          <div className='max-w-4xl mx-auto'>
            <p className='text-xl text-gray-600 mb-8'>
              We are a leading technology company dedicated to transforming businesses through innovative solutions.
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              <div className='bg-white p-6 rounded-lg shadow-md'>
                <h2 className='text-2xl font-bold mb-4'>Our Mission</h2>
                <p className='text-gray-600'>
                  To empower businesses with cutting-edge technology solutions that drive growth and innovation.
                </p>
              </div>
              <div className='bg-white p-6 rounded-lg shadow-md'>
                <h2 className='text-2xl font-bold mb-4'>Our Vision</h2>
                <p className='text-gray-600'>
                  To be the global leader in technology transformation and digital innovation.
                </p>
              </div>
            </div>
            <div className='text-center mt-12'>
              <Link 
                href='/contact'
                className='bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors'
                onClick={() => trackClick('about-contact', 'navigation')}
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
