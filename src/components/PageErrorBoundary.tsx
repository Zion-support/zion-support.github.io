import React from 'react',
import Link from 'next/link';
import { ErrorBoundary, FallbackProps  } from 'react-error-boundary';
import { AlertTriangle, Home, RefreshCw, Settings } from 'lucide-react'

import { logErrorToProduction } from '@/utils/productionLogger'
import {
  logInfo
  logErrorToProduction as prodLogError
} from '@/utils/productionLogger'
interface PageErrorFallbackProps extends FallbackProps {
  pageName?: string
function PageErrorFallback({
  error
  resetErrorBoundary
  pageName
}: PageErrorFallbackProps) {
  const isAuthConfigError =
    error?.message?.includes('Auth0') |
    error?.message?.includes('AUTH0') |
    error?.message?.includes('authentication') |
    error?.message?.includes('environment')
  const handleRefresh = () => {
    if (resetErrorBoundary) {
      resetErrorBoundary()
    } else {
      window.location.reload()
    }
  }
import React from 'react';
import Link from 'next/link';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import { AlertTriangle, Home, RefreshCw, Settings } from 'lucide-react';
import {logErrorToProduction} from '@/utils/productionLogger',;
import { logInfo, logErrorToProduction as prodLogError } from '@/utils/productionLogger',;
interface PageErrorFallbackProps extends FallbackProps {;
  pageName?: string;
}
;
function PageErrorFallback({ error, resetErrorBoundary, pageName }: PageErrorFallbackProps) {;
  const isAuthConfigError = error?.message?.includes('Auth0') ||;
                           error?.message?.includes('AUTH0') ||;
                           error?.message?.includes('authentication') ||;
                           error?.message?.includes('environment'),;
  const handleRefresh = () => {;
    if (resetErrorBoundary) {;
      resetErrorBoundary();
    } else {;
      window.location.reload();
    }

  },

              Go Home
            </Link>
          </div>
              className='flex-1 bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center px-4 py-2 rounded-lg font-medium transition-colors'             aria-label="Button">;
              <RefreshCw className='w-4 h-4 mr-2' />;
              Try Again;
            </button>;

            <Link
              href='/'
              className='flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center px-4 py-2 rounded-lg font-medium transition-colors'>;
              <Home className='w-4 h-4 mr-2' />;
              Go Home;
            </Link>;
          </div>;

          {/* Navigation Options */}
          <div className='border-t pt-6'>;
            <h3 className='font-semibold text-gray-900 mb-3'>;
              You can also visit:;
            </h3>;
            <div className='grid grid-cols-2 md:grid-cols-4 gap-3 text-sm'>;
              <Link
                href='/marketplace'

                className='text-blue-600 hover:underline'>;
                Marketplace;
              </Link>;
              <Link href='/talent' className='text-blue-600 hover:underline'>;
                Talent;
              </Link>;
              <Link href='/services' className='text-blue-600 hover:underline'>;
                Services;
              </Link>;
              <Link href='/about' className='text-blue-600 hover:underline'>;
              </pre>;
            </details>)}
          {/* Action Buttons */}
          <div className='flex flex - col sm:flex - row gap - 3 mb - 6'>;
            <button;
              on_click={handle_refresh}
              className='flex - 1 bg - blue - 600 hover:bg - blue - 700 text - white flex items - center justify - center px - 4 py - 2 rounded - lg font - medium transition - colors'            >;
              <RefreshCw className='w - 4 h - 4 mr - 2' />;
              Try Again;
            </button>;
            <Link;
              href='/';
              className='flex - 1 bg - gray - 100 hover:bg - gray - 200 text - gray - 700 flex items - center justify - center px - 4 py - 2 rounded - lg font - medium transition - colors';
            >;
              <Home className='w - 4 h - 4 mr - 2' />;
              Go Home;
            </Link>;
          </div>;
          {/* Navigation Options */}
          <div className='border - t pt - 6'>;
            <h3 className='font - semibold text - gray - 900 mb - 3'>;
              You can also visit:;
            </h3>;
            <div className='grid grid - cols - 2 md:grid - cols - 4 gap - 3 text - sm'>;
              <Link;
                href='/marketplace';
                className='text - blue - 600 hover:underline';
              >;
                Marketplace;
              </Link>;
              <Link href='/talent' className='text - blue - 600 hover:underline'>;
                Talent;
              </Link>;
              <Link href='/services' className='text - blue - 600 hover:underline'>;
                Services;
              </Link>;
              <Link href='/about' className='text - blue - 600 hover:underline'>;

                About;
              </Link>;
            </div>;
          </div>;
        </div>;

              href='mailto:support@zion && zion.tech'
              className='text-blue-400 hover:underline'>;
              support@zion && zion.tech;

        logInfo(`Resetting error boundary for ${pageName || 'page'}`)


}
