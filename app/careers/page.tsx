import React from 'react';
import { Helmet } from 'react-helmet-async';

const CareersPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Join our team and help shape the future of AI and IT solutions." />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Join Our Team</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Be part of the future of AI and IT innovation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Senior AI Engineer</h3>
              <p className="text-gray-600 mb-4">
                Lead the development of cutting-edge AI solutions and machine learning models.
              </p>
              <div className="text-sm text-blue-600">Apply now →</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Cloud Solutions Architect</h3>
              <p className="text-gray-600 mb-4">
                Design and implement scalable cloud infrastructure solutions for our clients.
              </p>
              <div className="text-sm text-blue-600">Apply now →</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CareersPage;
