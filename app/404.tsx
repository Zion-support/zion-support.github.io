import React from 'react;'
import { Helmet } from 'react-helmet-async;'
import Link from 'next/link;'

export default function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | Zion Tech Group</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to Zion Tech Group's homepage." />'"'"'"
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">""
        <div className="text-center">""
          <div className="mb-8">""
            <h1 className="text-9xl font-bold text-white mb-4">404</h1>""
            <h2 className="text-3xl font-semibold text-white mb-4">Page Not Found</h2>""
            <p className="text-gray-300 text-lg mb-8">""
              The page you're looking for doesn't exist or has been moved.''
            </p>
          </div>
          
          <div className="space-y-4">
            <Link 
              href="/"
              className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Go Home
            </Link>
            
            <div className="text-gray-400">""
              <p>Or try one of these popular pages:</p>
              <div className="flex justify-center space-x-6 mt-4">""
                <Link href="/about" className="hover:text-white transition-colors">""
                  About
                </Link>
                <Link href="/services" className="hover:text-white transition-colors">""
                  Services
                </Link>
                <Link href="/contact" className="hover:text-white transition-colors">""
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
