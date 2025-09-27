import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import SEO from '../src/components/SEO';
import { useAnalytics } from '../src/hooks/useAnalytics';

const Home = React.memo(function Home(): JSX.Element {
  const [isVisible, setIsVisible] = useState(false);
  const [performanceMetrics, setPerformanceMetrics] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const isFeaturesInView = useInView(featuresRef, { once: true });

  useEffect(() => {
    setIsVisible(true);
    setIsLoading(false);
  }, []);

  const handleGetStarted = useCallback(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click', {
        event_category: 'engagement',
        event_label: 'get_started_button'
      });
    }
  }, []);

  const features = useMemo(() => [
    {
      title: 'AI-Powered Solutions',
      description: 'Leverage cutting-edge artificial intelligence to transform your business operations.',
      icon: '🤖',
      color: 'blue',
      delay: 0.1
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable, secure, and reliable cloud solutions.',
      icon: '☁️',
      color: 'green',
      delay: 0.2
    }
  ], []);

  return (
    <>
      <SEO 
        title='Zion Tech Group - Leading Technology Solutions'
        description='Transform your business with cutting-edge technology solutions.'
        keywords='technology solutions, AI, cloud computing'
      />
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <main className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100'>
        <section className='relative min-h-screen flex items-center justify-center px-4'>
          <div className='max-w-7xl mx-auto text-center'>
            <h1 className='text-5xl md:text-7xl font-bold text-gray-900 mb-6'>
              Transform Your Business
            </h1>
            <p className='text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto'>
              Leading technology solutions for the modern enterprise.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link href='/services' className='bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors'>
                Explore Services
              </Link>
              <Link href='/contact' className='border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors'>
                Get Started
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )}