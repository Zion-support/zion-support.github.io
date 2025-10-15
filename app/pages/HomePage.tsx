import React from 'react';
import { Helmet } from 'react-helmet-async';

const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions</title>
        <meta name="description" content="Leading provider of AI and IT solutions for modern businesses" />
      </Helmet>
      <div className="min-h-screen bg-gray-50">
        <main id="main-content" className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center mb-8">Welcome to Zion Tech Group</h1>
          <p className="text-lg text-center text-gray-600 mb-8">
            Advanced AI and IT Solutions for Modern Businesses
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">AI Development</h2>
              <p className="text-gray-600">Custom AI solutions tailored to your business needs</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Web Development</h2>
              <p className="text-gray-600">Modern, responsive web applications</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">IT Consulting</h2>
              <p className="text-gray-600">Strategic IT guidance and implementation</p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default HomePage;