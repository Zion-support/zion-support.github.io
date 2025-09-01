import React from 'react';''
import Head from 'next/head';''
import Link from 'next/link';

const OfflinePage: React.FC = () => {
  return()
    <>
      <Head>'
        <title>Offline - Zion Tech Group</title>''
        <meta name="description" content="You're currently offline. Check your connection and try again." />""
        <meta name="robots" content="noindex, nofollow" />
      </Head>"
""
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-4">""
        <div className="max-w-md w-full text-center">"
          {/* Offline Icon */}""
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-yellow-100 dark:bg-yellow-900 mb-6">"
            <svg""
              className="h-8 w-8 text-yellow-600 dark:text-yellow-400"""
              fill="none"""
              viewBox="0 0 24 24"""
              stroke="currentColor"
            >"
              <path""
                strokeLinecap="round"""
                strokeLinejoin="round""
                strokeWidth={2}""
                d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z"
              />
            </svg>
          </div>
"
          {/* Offline Message */}"'"
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">''
            You're Offline
          </h1>"
          "'"
          <p className="text-gray-600 dark:text-gray-400 mb-6">''
            It looks like you've lost your internet connection. Don't worry - some features are still available offline.
          </p>
"
          {/* Offline Features */}""
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 mb-6 text-left">""
            <h2 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
              Available Offline:"
            </h2>""
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">""
              <li className="flex items-center">""
                <svg className="h-4 w-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">""
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Previously viewed pages"
              </li>""
              <li className="flex items-center">""
                <svg className="h-4 w-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">""
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Cached images and resources"
              </li>""
              <li className="flex items-center">""
                <svg className="h-4 w-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">""
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Basic navigation
              </li>
            </ul>
          </div>
"
          {/* Action Buttons */}""
          <div className="space-y-3">
            <button"
              onClick={() => window.location.reload()}""
              className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition-colors"
            >
              Try Again
            </button>
            "
            <Link""
              href="/"""
              className="block w-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-md font-medium transition-colors"
            >
              Go to Homepage
            </Link>
          </div>
"
          {/* Connection Status */}""
          <div className="mt-6 text-xs text-gray-500 dark:text-gray-400">"
            <p>Connection status will be checked automatically</p>""
            <p className="mt-1">Last checked: {new Date().toLocaleTimeString()}</p>
          </div>
"
          {/* Helpful Tips */}""
          <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">""
            <h3 className="text-sm font-medium text-blue-900 dark:text-blue-100 mb-2">
              💡 Quick Tips:"
            </h3>""
            <ul className="text-xs text-blue-800 dark:text-blue-200 space-y-1">
              <li>• Check your Wi-Fi or mobile data connection</li>
              <li>• Try refreshing the page</li>
              <li>• Restart your router if needed</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
'"
export default OfflinePage;'"'"