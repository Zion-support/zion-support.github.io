import React from 'react';
import { Helmet } from 'react-helmet-async';

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group and our mission to provide cutting-edge AI and IT solutions." />
      </Helmet>
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-8">About Zion Tech Group</h1>
            <p className="text-xl text-gray-300 mb-8">
              We are a leading provider of advanced AI and IT solutions.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;