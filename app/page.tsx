'use client';

import React, { useState, useCallback, Suspense } from 'react';
import Link from 'next/link';

// Loading fallback component
const LoadingFallback: React.FC<{ height?: string }> = ({
  height = 'h-32',
}) => (
  <div className={`flex items-center justify-center ${height} w-full`}>
    <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600'></div>
  </div>
);

const HomePage: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Analytics tracking for phone clicks
  const handlePhoneClick = useCallback(() => {
    if (
      typeof window !== 'undefined' &&
      (
        window as unknown as {
          gtag?: (
            command: string,
            action: string,
            parameters: Record<string, unknown>
          ) => void;
        }
      ).gtag
    ) {
      (
        window as unknown as {
          gtag: (
            command: string,
            action: string,
            parameters: Record<string, unknown>
          ) => void;
        }
      ).gtag('event', 'phone_click', {
        event_category: 'engagement',
        event_label: 'main_phone_number',
      });
    }
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  return (
    <>
      <div className='min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600'>
        {/* Hero Section */}
        <section className='py-20 px-4'>
          <div className='container mx-auto max-w-6xl text-center'>
            <h1 className='text-5xl md:text-6xl font-bold text-white mb-6'>
              Welcome to Zion Tech Group
            </h1>
            <p className='text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto'>
              Leading provider of advanced AI and IT solutions. Transform your business with cutting-edge technology.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                href='/contact'
                className='inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl'
              >
                Get Started
              </Link>
              <Link
                href='/about'
                className='inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white border border-white/30 rounded-xl font-bold hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1'
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className='py-16 bg-white'>
          <div className='container mx-auto px-4 max-w-6xl'>
            <h2 className='text-4xl font-bold text-gray-900 text-center mb-12'>
              Our Services
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {[
                {
                  title: 'AI Solutions',
                  description: 'Advanced machine learning and AI integration for your business',
                  icon: '🤖',
                },
                {
                  title: 'Cloud Services',
                  description: 'Scalable cloud infrastructure and migration services',
                  icon: '☁️',
                },
                {
                  title: 'Business Intelligence',
                  description: 'Data-driven insights and analytics solutions',
                  icon: '📊',
                },
                {
                  title: 'Automation',
                  description: 'Process automation and optimization services',
                  icon: '⚙️',
                },
                {
                  title: 'Consulting',
                  description: 'Expert technology consulting and strategy',
                  icon: '💼',
                },
                {
                  title: 'Support',
                  description: '24/7 technical support and maintenance',
                  icon: '🛠️',
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className='bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200'
                >
                  <div className='text-5xl mb-4'>{service.icon}</div>
                  <h3 className='text-2xl font-bold text-gray-900 mb-3'>
                    {service.title}
                  </h3>
                  <p className='text-gray-600'>{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='py-20 px-4 bg-gradient-to-br from-blue-600 to-cyan-600'>
          <div className='container mx-auto max-w-4xl text-center'>
            <h2 className='text-4xl font-bold text-white mb-6'>
              Ready to Transform Your Business?
            </h2>
            <p className='text-xl text-white/90 mb-8'>
              Contact us today to learn how we can help you achieve your goals
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <a
                href='tel:+13024640950'
                onClick={handlePhoneClick}
                className='inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl'
              >
                📞 Call Now
              </a>
              <Link
                href='/contact'
                className='inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white border border-white/30 rounded-xl font-bold hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1'
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;