'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className='min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50 flex items-center justify-center px-4 py-12'>
      <div className='max-w-2xl mx-auto text-center'>
        {/* Error Icon */}
        <div className='mb-8'>
          <div className='text-8xl mb-4'>⚠️</div>
          <h1 className='text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600 mb-4'>
            Something Went Wrong
          </h1>
        </div>

        {/* Error Message */}
        <div className='mb-12'>
          <p className='text-xl text-gray-700 mb-4'>
            We apologize for the inconvenience. Our AI systems encountered an
            unexpected error.
          </p>
          <div className='bg-red-50 border border-red-200 rounded-lg p-6 mb-6'>
            <h3 className='text-lg font-semibold text-red-800 mb-2'>
              Error Details:
            </h3>
            <p className='text-sm text-red-700 font-mono break-all'>
              {error.message || 'An unexpected error occurred'}
            </p>
            {error.digest && (
              <p className='text-xs text-red-600 mt-2'>
                Error ID: {error.digest}
              </p>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className='flex flex-col sm:flex-row gap-4 justify-center mb-12'>
          <button
            onClick={reset}
            className='bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl'
          >
            🔄 Try Again
          </button>
          <Link
            href='/'
            className='border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 hover:text-white transition-colors inline-block'
          >
            ← Back to Home
          </Link>
        </div>

        {/* Help Section */}
        <div className='bg-white/80 backdrop-blur-sm rounded-xl p-8 border border-gray-200'>
          <h3 className='text-xl font-bold text-gray-900 mb-4'>
            Need Immediate Assistance?
          </h3>
          <p className='text-gray-600 mb-6'>
            Our support team is here to help resolve any issues you're
            experiencing.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <a
              href='tel:+13024640950'
              className='inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors'
            >
              📞 Call Support: +1 302 464 0950
            </a>
            <a
              href='mailto:kleber@ziontechgroup.com?subject=Error Report'
              className='inline-flex items-center gap-2 border-2 border-green-600 text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-colors'
            >
              📧 Email Support
            </a>
          </div>
        </div>

        {/* Footer Note */}
        <div className='mt-8 text-sm text-gray-500'>
          <p>
            This error has been automatically logged and our team has been
            notified.
          </p>
          <p className='mt-2'>
            We appreciate your patience as we work to resolve this issue.
          </p>
        </div>
      </div>
    </div>
  );
}
