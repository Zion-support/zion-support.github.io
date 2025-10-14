import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet-async';

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About - Zion Tech Group</title>
        <meta name="description" content="Learn about our company and mission" />
        <meta name="keywords" content="about, company, mission" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-8">About Us</h1>
            <p className="text-xl text-gray-300 mb-8">Learn about our company and mission</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Our Mission</h3>
                <p className="text-blue-700">Delivering innovative technology solutions that drive business success.</p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-2">Our Vision</h3>
                <p className="text-green-700">To be the leading technology partner for businesses worldwide.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-purple-900 mb-2">Our Values</h3>
                <p className="text-purple-700">Innovation, integrity, and excellence in everything we do.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
</>
  );
}

export default AboutPage;