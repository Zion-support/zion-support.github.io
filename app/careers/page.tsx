'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Users, MapPin, Clock, Briefcase } from 'lucide-react';

const CareersPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group | Join Our Team</title>
        <meta name="description" content="Join Zion Tech Group and be part of a team that's shaping the future of technology. Explore career opportunities in AI, IT, and innovation." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Team</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Be part of a team that's shaping the future of technology. Explore exciting career opportunities in AI, IT, and innovation.
            </p>
            <div className="text-center py-12">
              <div className="text-gray-400 text-lg mb-4">Career opportunities coming soon</div>
              <p className="text-gray-500">We're expanding our team and will have exciting positions available</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CareersPage;
