import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Enterprise Solutions - Zion Tech Group',
  description: 'Comprehensive AI and IT solutions for enterprise organizations. Transform your business with our advanced technology stack.',
};

const EnterprisePage: React.FC = () => {
  const features = [
    {
      title: 'Autonomous Systems',
      description: 'Self-managing enterprise operations with AI-powered automation',
      icon: '🤖'
    },
    {
      title: 'Quantum Computing',
      description: 'Next-generation computing power for complex business problems',
      icon: '⚛️'
    },
    {
      title: 'Enterprise AI',
      description: 'Custom AI solutions tailored to your business needs',
      icon: '🧠'
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud architecture',
      icon: '☁️'
    },
    {
      title: 'Data Analytics',
      description: 'Advanced analytics and business intelligence',
      icon: '📊'
    },
    {
      title: 'Cybersecurity',
      description: 'Enterprise-grade security solutions',
      icon: '🔒'
    },
  ];

  return (
    <>
      <div className='min-h-screen bg-gradient-to-br from-gray-50 to-gray-100'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
          <div className='text-center mb-12'>
            <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
              Enterprise Solutions
            </h1>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Transform your enterprise with cutting-edge AI and IT solutions designed for scale and performance
            </p>
          </div>

          <div className='bg-white rounded-lg shadow-lg p-8 mb-12'>
            <h2 className='text-2xl font-bold text-gray-900 mb-6'>
              Why Choose Zion Tech Group?
            </h2>
            <p className='text-gray-600 mb-4'>
              We deliver enterprise-grade solutions that help Fortune 500 companies and rapidly growing businesses 
              achieve their digital transformation goals. Our team of experts combines deep technical expertise 
              with industry knowledge to deliver solutions that drive measurable business outcomes.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12'>
            {features.map((feature, index) => (
              <div key={index} className='bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow'>
                <div className='text-4xl mb-4'>{feature.icon}</div>
                <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                  {feature.title}
                </h3>
                <p className='text-gray-600'>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <section className='py-12'>
            <div className='bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white'>
              <h2 className='text-3xl font-bold mb-4'>
                Ready to Transform Your Enterprise?
              </h2>
              <p className='text-xl mb-8 opacity-90'>
                Let&apos;s discuss how our solutions can help you achieve your business goals
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <Link
                  href='/contact'
                  className='inline-block px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-medium'
                >
                  Schedule a Consultation
                </Link>
                <Link
                  href='/services'
                  className='inline-block px-8 py-3 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-lg hover:bg-white/20 transition-colors font-medium'
                >
                  View All Services
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default EnterprisePage;