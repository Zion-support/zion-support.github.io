'use client';

import React, { useEffect } from 'react';
import ArrowRight from 'next/link';

export default function Error({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error);
  }, [error]);

  return (
    <div>
      <div>
        {/* Error Icon */}
        <div>
          <div>⚠️</div>
          <h1>
            Something Went Wrong
          </h1>
        </div>

        {/* Error Message */}
        <div>
          <p>
            We apologize for the inconvenience. Our AI systems encountered an unexpected error.
          </p>
          <div>
            <h3>
              Error Details:
            </h3>
            <p>
              {error.message || 'An unexpected error occurred'}
            </p>
            {error.digest && (
              <p>
                Error ID: {error.digest}
              </p>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div>
          <button
            onClick={reset}
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
          >
            🔄 Try Again
          </button>
          <ArrowRight
            href="/"
            className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 hover:text-white transition-colors inline-block"
          >
            ← Back to Home
          </ArrowRight>
        </div>

        {/* Help Section */}
        <div>
          <h3>
            Need Immediate Assistance?
          </h3>
          <p>
            Our support team is here to help resolve any issues you're experiencing.
          </p>
          <div>
            <a
              href="tel:+13024640950"
              className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              📞 Call Support: +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com?subject=Error Report"
              className="inline-flex items-center gap-2 border-2 border-green-600 text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-colors"
            >
              📧 Email Support
            </a>
          </div>
        </div>

        {/* Footer Note */}
        <div>
          <p>This error has been automatically logged and our team has been notified.</p>
          <p>
            We appreciate your patience as we work to resolve this issue.
          </p>
        </div>
      </div>
    </div>
  );
}