import React from 'react';
import { Helmet } from 'react-helmet-async';

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission to revolutionize technology through AI and innovation." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-white mb-8">About Zion Tech Group</h1>
          <p className="text-xl text-gray-300 mb-8">
            We are a leading technology company specializing in AI solutions, blockchain technology, and digital transformation.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutPage;