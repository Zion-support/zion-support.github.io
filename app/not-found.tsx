'use client';

// import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  const popularPages = [
    {
      title: 'AI Services',
      description: 'Explore our comprehensive AI and IT solutions',
      href: '/services',
      icon: '🤖',
    },
    {
      title: 'Blog & Insights',
      description: 'Read about latest AI trends and innovations',
      href: '/blog',
      icon: '📚',
    },
    {
      title: 'Case Studies',
      description: 'See our success stories and client results',
      href: '/case-studies',
      icon: '📊',
    },
    {
      title: 'Contact Us',
      description: 'Get in touch with our AI experts',
      href: '/contact',
      icon: '📞',
    },
  ];

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center'>
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
        {/* 404 Error */}
        <div className='mb-12'>
          <h1 className='text-9xl font-extrabold text-white mb-4'>
            <span className='bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent'>
              404
            </span>
          </h1>
          <h2 className='text-4xl font-bold text-white mb-6'>Page Not Found</h2>
          <p className='text-xl text-gray-300 max-w-2xl mx-auto'>
            The page you're looking for doesn't exist or has been moved. Let's
            get you back on track with our AI-powered solutions.
          </p>
        </div>

        {/* Popular Pages */}
        <div className='mb-12'>
          <h3 className='text-2xl font-bold text-white mb-8'>Popular Pages</h3>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {popularPages.map((page, index) => (
              <Link
                key={index}
                href={page.href}
                className='group bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-500 transform hover:-translate-y-2'
              >
                <div className='text-4xl mb-4'>{page.icon}</div>
                <h4 className='text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors'>
                  {page.title}
                </h4>
                <p className='text-gray-300 text-sm'>{page.description}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
          >
            ← Back to Home
          </Link>
          <a
            href="tel:+13024640950"
            className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 hover:text-white transition-colors"
          >
            Call Support: +1 302 464 0950
          </a>
        </div>

        {/* Help Section */}
        <div>
          <h3>
            Still need help?
          </h3>
          <p className='text-gray-300 mb-6'>
            Our AI experts are here to help you navigate our solutions and find
            exactly what you need.
          </p>
          <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
            <Link
              href='/'
              className='group flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1'
            >
              <span className='text-xl'>🏠</span>
              <span>Go Home</span>
            </Link>

            <Link
              href='/contact'
              className='group flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 border border-white/30'
            >
              <span>Contact Support</span>
              <span className='group-hover:translate-x-1 transition-transform'>
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
