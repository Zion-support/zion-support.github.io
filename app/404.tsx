import React from 'react';
<<<<<<< HEAD

export default function NotFound404() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>This component is under construction.</p>
    </div>
  );
}
=======
import { Helmet } from 'react-helmet-async';

export default function AppPage() {
  return (
    <>
      <Helmet>
        <title>App - Zion Tech Group</title>
        <meta name="description" content="Professional app solutions for modern businesses." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">App</h1>
          <p className="text-lg text-gray-600">
            Professional app solutions for modern businesses.
          </p>
        </div>
      </div>
    </>
  );
}
>>>>>>> 82730201b6fc9753a1b36a2b09669d51935f2624
