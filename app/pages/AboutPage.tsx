import React from 'react';
import { Helmet } from 'react-helmet-async';

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission and team" />
      </Helmet>
      <div className="min-h-screen bg-slate-900 text-white p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">About Zion Tech Group</h1>
          <p className="text-lg text-gray-300">
            We are a leading technology company specializing in AI solutions, cybersecurity, and digital transformation.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
