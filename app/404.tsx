import React from 'react';
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | Zion Tech Group</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to Zion Tech Group's homepage." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-white mb-4">404</h1>
            <h2 className="text-3xl font-semibold text-white mb-4">Page Not Found</h2>
            <p className="text-gray-300 text-lg mb-8">
              The page you're looking for doesn't exist or has been moved.
            </p>
          </div>
          
          <div className="space-y-4">
            <Link 
              href="/"
              className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Go Home
            </Link>
            
            <div className="text-gray-400">
              <p>Or try one of these popular pages:</p>
              <div className="flex justify-center space-x-6 mt-4">
                <Link href="/about" className="hover:text-white transition-colors">
                  About
                </Link>
                <Link href="/services" className="hover:text-white transition-colors">
                  Services
                </Link>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </div>
            </div>
          </div>
=======
import SEOHead from '../../components/SEOHead';

const AppPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="App - Zion Tech Group"
        description="Professional app solutions for modern businesses"
      />
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">App</h1>
          <p className="text-gray-300">Professional solutions coming soon...</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-7017
        </div>
      </div>
    </>
  );
<<<<<<< HEAD
}
=======
};

export default AppPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-7017
