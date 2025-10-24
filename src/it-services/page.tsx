<<<<<<< HEAD
import React from 'react';

interface pageProps {
  className?: string;
}

const page: React.FC<pageProps> = ({ className = '' }) => {
  return (
    <div className={className}>
      <h2>page</h2>
      <p>This component is under construction.</p>
=======
import React from "react";

interface PagePageProps {
  // Add props here
}

const PagePage: React.FC<PagePageProps> = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          
        </h1>
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600">
            This is a placeholder for the  page.
          </p>
        </div>
      </div>
>>>>>>> origin/main
    </div>
  );
};

<<<<<<< HEAD
export default page;
=======
export default PagePage;
>>>>>>> origin/main
