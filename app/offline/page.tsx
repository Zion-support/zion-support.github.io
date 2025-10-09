'use client';
import React from 'react';
import Link from 'next/link';
/**
 * Offline Page
 * Displayed when the user is offline and tries to access a page
 */
// Metadata removed for client component
const OfflinePage: React.FC = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4'>
      <div className='max-w-md w-full text-center'>
        <div className='mb-8'>
          <div className='mx-auto w-24 h-24 bg-indigo-100 rounded-full flex items-center justify-center mb-6'>
            <svg
              className='w-12 h-12 text-indigo-600'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238m7.824 2.167a1 1 0 111.414 1.414m-1.414-1.414L3 3m8.293 8.293l1.414 1.414'
              />
            </svg>
          </div>
          <h1 className='text-4xl font-bold text-gray-900 mb-4'>
            You&apos;re Offline
          </h1>
          <p className='text-xl text-gray-600 mb-8'>
            It looks like you&apos;ve lost your internet connection. Please check your
            network settings and try again.
          </p>
        </div>
        <div className='bg-white rounded-lg shadow-lg p-6 mb-6'>
          <h2 className='text-lg font-semibold text-gray-900 mb-4'>
            What you can do:
          </h2>
          <ul className='text-left space-y-3 text-gray-600'>
            <li className='flex items-start'>
              <svg
                className='w-5 h-5 text-indigo-600 mr-3 mt-0.5 flex-shrink-0'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
              <span>Check your WiFi or mobile data connection</span>
            </li>
            <li className='flex items-start'>
              <svg
                className='w-5 h-5 text-indigo-600 mr-3 mt-0.5 flex-shrink-0'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
              <span>Try turning airplane mode on and off</span>
            </li>
            <li className='flex items-start'>
              <svg
                className='w-5 h-5 text-indigo-600 mr-3 mt-0.5 flex-shrink-0'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
              <span>Restart your router if using WiFi</span>
            </li>
          </ul>
        </div>
        <div className='space-y-3'>
          <button
            onClick={() => window.location.reload()}
            className='w-full px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
          >
            Try Again
          </button>
          <Link
            href="/"
            className="block w-full px-6 py-3 bg-white text-indigo-600 font-medium rounded-lg border-2 border-indigo-600 hover:bg-indigo-50 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Go to Homepage
          </Link>
        </div>
        <div className='mt-8 text-sm text-gray-500'>
          <p>
            Need help?{' '}
            <a href='tel:+13024640950'
              className='text-indigo-600 hover:text-indigo-700 font-medium'
            >
              Call +1 302 464 0950
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default OfflinePage;
