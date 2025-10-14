import React from 'react';
import { Helmet } from 'react-helmet-async';

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group - Leading provider of AI and IT solutions" />
        <meta name="keywords" content="about, Zion Tech Group, AI, IT, solutions" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-8">About Zion Tech Group</h1>
            <p className="text-white text-lg mb-8">Leading provider of AI and IT solutions for modern businesses</p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">Our Mission</h3>
                <p className="text-gray-600">To empower businesses with cutting-edge AI and IT solutions that drive innovation and growth.</p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">Our Vision</h3>
                <p className="text-gray-600">To be the leading technology partner for businesses worldwide, transforming industries through innovation.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">Our Values</h3>
                <p className="text-gray-600">Excellence, innovation, integrity, and customer success are at the core of everything we do.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;