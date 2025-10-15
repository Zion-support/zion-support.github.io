import React from 'react';
import { Helmet } from 'react-helmet-async';

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission and expertise in AI and IT solutions" />
      </Helmet>
      <div className="min-h-screen bg-gray-50">
        <main id="main-content" className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center mb-8">About Zion Tech Group</h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 mb-6">
              Zion Tech Group is a leading provider of advanced AI and IT solutions, 
              dedicated to helping businesses transform through innovative technology.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Our team of experts combines deep technical knowledge with business acumen 
              to deliver solutions that drive real results.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Our Mission</h2>
                <p className="text-gray-600">
                  To empower businesses with cutting-edge AI and IT solutions that drive 
                  innovation and growth.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Our Vision</h2>
                <p className="text-gray-600">
                  To be the global leader in AI and IT transformation, creating a 
                  future where technology serves humanity.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default AboutPage;