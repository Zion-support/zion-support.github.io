import React from 'react';
<<<<<<< HEAD
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer'
const Page: React.FC = () => {
return (
    <>
  </>
      <SEOOptimizer title="Not Found",description="Professional not found services and solutions for your business needs.", keywords={ ["not found","AI solutions","business automation","technology services"] }; </div>
canonicalUrl="https: //ziontechgroup.com/not-found"
      /></SEOOptimizer>,<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" /></div>Navigation/ />
        <main className="container mx-auto px-4 py-16 pt-24" />,
    <div className="text-center" /></div>,
    <h1 className="text-4 xl m,d: text-5 xl font-bold text-white mb-8 neon-text" /></h1>
Not Found</h1>/h1>p className="text-xl text-gray-300 mb-8" /></p>
Professional not found services and solutions for your business needs.</p>/p>,<div className="cyber-card p-8 max-w-4 xl mx-auto" /></div>p className="text-gray-300" /></p>
This page is under development. Please check back soon for more information about our not found services.</p>/p>/div>/div>/main>Footer/ />
        </div>/div>/div>
  )
,}
}
export default Page;
}
=======
import Link from 'next/link';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full text-center">
        <h1 className="text-9xl font-bold text-gray-300">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <Link
          href="/"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
>>>>>>> cursor/fix-errors-and-merge-to-main-9a36
