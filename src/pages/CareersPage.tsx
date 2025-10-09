import React from 'react';
import { Helmet } from 'react-helmet-async';

const CareersPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group | Join Our Team</title>
        <meta name="description" content="Join our team of AI and technology experts. Explore career opportunities at Zion Tech Group." />
        <link rel="canonical" href="https://ziontechgroup.com/careers" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="text-cyan-400">Careers</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Join our team of AI and technology experts. Explore exciting career opportunities 
                at Zion Tech Group and help shape the future of technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CareersPage;