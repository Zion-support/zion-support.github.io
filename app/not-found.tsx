<<<<<<< HEAD
import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { Helmet } from 'react-helmet-async';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ef50

interface notfoundProps {
  className?: string;
  children?: React.ReactNode;
}

export default function notfound({ className = '', children }: notfoundProps) {
=======
const NotFoundPage = () => {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a9f6
  return (
<<<<<<< HEAD
    <div className={`${className}`}>
      {children}
=======
import { Helmet } from 'react-helmet-async';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>NotFound - Zion Tech Group</title>
        <meta name="description" content="NotFound solutions by Zion Tech Group" />
      </Helmet>

      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">NotFound</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive notfound solutions designed to meet your business needs.
=======
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>404 - Page Not Found | Zion Tech Group</title>
        <meta name="description" content="The page you are looking for could not be found." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
<<<<<<< HEAD
            404 - Page Not Found
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            The page you are looking for could not be found.
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ef50
=======
            Page Not Found
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            The page you're looking for doesn't exist.
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a9f6
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Expert Solutions</h3>
              <p className="text-gray-300">
                Our team of experts delivers tailored solutions for your specific requirements.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Cutting-Edge Technology</h3>
              <p className="text-gray-300">
                We use the latest technologies and best practices to ensure optimal performance.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
              <p className="text-gray-300">
                Get round-the-clock support from our dedicated team of professionals.
              </p>
            </div>
          </div>
        </div>
      </div>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8b27
    </div>
  );
}
=======
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a9f6
    </div>
  );
};

<<<<<<< HEAD
export default NotFoundPage;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ef50
=======

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Page not found</p>
        <a href="/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
          Go Home
        </a>
      </div>
    </div>
  );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
=======
export default NotFoundPage;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a9f6
