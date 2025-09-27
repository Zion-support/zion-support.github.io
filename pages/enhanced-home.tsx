import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SEO from '../src/components/SEO';
import { useAnalytics } from '../src/hooks/useAnalytics';

export default function Home(): JSX.Element {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const { trackClick } = useAnalytics();

  return (
    <>
      <SEO 
        title='Zion Tech Group - Enhanced Home'
        description='Enhanced home page with modern design and functionality'
        keywords='technology, solutions, enhanced'
      />
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <main className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100'>
        <div className='container mx-auto px-4 py-20'>
          <h1 className='text-4xl font-bold text-center mb-8'>
            Enhanced Home Page
          </h1>
          <p className='text-xl text-center text-gray-600 mb-8'>
            Welcome to our enhanced home page with modern design and functionality.
          </p>
          <div className='text-center'>
            <Link 
              href='/services'
              className='bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors'
              onClick={() => trackClick('enhanced-home-services', 'navigation')}
            >
              View Services
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};
