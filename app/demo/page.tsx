import React from 'react';
import { Helmet } from 'react-helmet-async';

const PagePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Page | Zion Tech Group</title>
        <meta name="description" content="Page - Professional services from Zion Tech Group" />
        <meta name="keywords" content="page, services, solutions, technology" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              Page
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Professional page services to help your business succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                Get Started
              </button>
              <button className="border border-blue-400 text-blue-400 px-8 py-3 rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300">
                Learn More
              </button>
          </div>
      </div>
    </>);
};

export default PagePage</section>
      </div>