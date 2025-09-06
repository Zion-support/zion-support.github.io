import React from 'react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

import { Alert, AlertDescription } from '@/components/ui/alert';

interface AuthConfigurationErrorProps {
  onRetry?: () => void;
  showSetupButton?: boolean;

export function AuthConfigurationError({
  onRetry,
  showSetupButton = true,
}: AuthConfigurationErrorProps) {
  const handleRefresh = () => {
    if (onRetry) {
      onRetry();
    } else {
      window.location.reload();    }
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 flex items-center justify-center p-4'>
      <div className='max-w-2xl w-full'>

    }
  };

  return (

            </AlertDescription>
          </Alert>

          {/* Technical Details */}

              <li>• AUTH0_SECRET</li>

              <li>• AUTH0_BASE_URL</li>
              <li>• AUTH0_ISSUER_BASE_URL</li>
              <li>• AUTH0_CLIENT_ID</li>
              <li>• AUTH0_CLIENT_SECRET</li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className='flex flex-col sm:flex-row gap-3 mb-6'>

            {showSetupButton && (

              >
                <Settings className='w-4 h-4 mr-2' />
                Setup Guide
              </Button>
            )}

            >
              <RefreshCw className='w-4 h-4 mr-2' />              Check Again

              Check Again

            </Button>
          </div>

          {/* Quick Setup Steps */}
          <div className='border-t pt-6'>
            <h3 className='font-semibold text-gray-900 mb-3'>
              Quick Setup Steps:
            </h3>
            <ol className='space-y-3 text-sm'>
              <li className='flex items-start gap-3'>
                <span className='flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold'>
                  1
                </span>

                <div>
                  <strong>Create Auth0 Account:</strong>
                  <br />
                  <a
                    href='https://manage.auth0.com/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-600 hover:underline inline-flex items-center gap-1'
                  >
                    Visit Auth0 Dashboard <ExternalLink className='w-3 h-3' />
                  </a>
                </div>
              </li>

              <li className='flex items-start gap-3'>
                <span className='flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold'>
                  2
                </span>                <div>

                <div>

                  <strong>Create Application:</strong>
                  <br />
                  Create a "Regular Web Application" named "Zion AI Marketplace"
                </div>
              </li>

              <li className='flex items-start gap-3'>
                <span className='flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold'>
                  3
                </span>

                <div>
                  <strong>Configure Environment:</strong>
                  <br />
                  Copy credentials to{' '}
                  <code className='bg-gray-100 px-1 rounded'>
                    .env.local
                  </code>{' '}
                  file
                </div>
              </li>

              <li className='flex items-start gap-3'>
                <span className='flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold'>
                  4
                </span>
                <div>
                  <strong>Restart Application:</strong>
                  <br />
                  Run{' '}
                  <code className='bg-gray-100 px-1 rounded'>
                    npm run dev
                  </code>{' '}
                  to apply changes                </div>

                </div>

              </li>
            </ol>
          </div>
        </div>

        {/* Alternative Actions Card */}
        <div className='bg-blue-50 rounded-xl border border-blue-200 p-6'>
          <h3 className='font-semibold text-blue-900 mb-3'>
            Alternative Actions:
          </h3>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
            <Link
              href='/marketplace'
              className='flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-blue-700 hover:text-blue-800'
            >
              <span>Browse Marketplace</span>            >
              <span>Browse Marketplace</span>
              <ExternalLink className="w-4 h-4" />
            </Link>

            <Link 
              href="/talent" 
              className="flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-blue-700 hover:text-blue-800"
            >
              <span>View Talent Pool</span>
              <ExternalLink className="w-4 h-4" />
            </Link>

            <Link 
              href="/help" 
              className="flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-blue-700 hover:text-blue-800"
            >
              <span>Contact Support</span>
              <ExternalLink className="w-4 h-4" />
            </Link>

            <Link 
              href="/status" 
              className="flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-blue-700 hover:text-blue-800"
            >
              <span>System Status</span>

              <ExternalLink className='w-4 h-4' />
            </Link>

            <Link
              href='/talent'
              className='flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-blue-700 hover:text-blue-800'
            >
              <span>View Talent Pool</span>
              <ExternalLink className='w-4 h-4' />
            </Link>

            <Link
              href='/help'
              className='flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-blue-700 hover:text-blue-800'
            >
              <span>Contact Support</span>
              <ExternalLink className='w-4 h-4' />
            </Link>

            <Link
              href='/status'
              className='flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-blue-700 hover:text-blue-800'
            >
              <span>System Status</span>

            </Link>

          </div>
        </div>

        {/* Setup Script Info */}
        {showSetupButton && (
          <div className='mt-6 text-center'>
            <div className='bg-green-50 rounded-lg border border-green-200 p-4'>
              <div className='flex items-center justify-center gap-2 text-green-700 mb-2'>
                <CheckCircle className='w-5 h-5' />
                <span className='font-semibold'>Automated Setup Available</span>

              </div>
              <p className='text-sm text-green-600 mb-3'>
                Run the setup script to configure Auth0 interactively:
              </p>
              <code className='bg-green-100 text-green-800 px-3 py-1 rounded text-sm'>                npm run setup:auth0

                npm run setup:auth0

              </code>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className='mt-6 text-center text-sm text-gray-500'>
          <p>
            For detailed instructions, see{' '}
            <button
              onClick={() =>
                window.open('/AUTH0_SETUP_GUIDE_ISSUE_1.md', '_blank')
              }
              className='text-blue-600 hover:underline'            >

            >

              AUTH0_SETUP_GUIDE_ISSUE_1.md
            </button>
          </p>
        </div>
      </div>
    </div>
  );

export default AuthConfigurationError;