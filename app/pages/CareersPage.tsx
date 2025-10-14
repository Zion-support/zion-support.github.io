import React from 'react';
import { Helmet } from 'react-helmet-async';
const CareersPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Join our team at Zion Tech Group. Explore career opportunities in AI, cybersecurity, and technology solutions." />
        <meta name="keywords" content="careers, jobs, employment, Zion Tech Group, technology careers" />
      </Helmet>
      <div className="min-h-screen bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Careers
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join our team of innovative professionals and help shape the future of technology.
          </p>
        </div>
      </div>
    </>
  );
};
export default CareersPage;