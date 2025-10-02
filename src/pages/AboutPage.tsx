import React from 'react';
import { Helmet } from 'react-helmet-async';

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group, a leading provider of revolutionary AI breakthroughs and enterprise technology solutions." />
      </Helmet>
      
      <div className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">About Zion Tech Group</h1>
          <p className="text-xl text-gray-600 mb-8">
            Leading the AI revolution with breakthrough technologies
          </p>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <p className="text-gray-600">
              Zion Tech Group is at the forefront of AI innovation, delivering revolutionary breakthroughs that transform businesses and drive unprecedented growth.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;