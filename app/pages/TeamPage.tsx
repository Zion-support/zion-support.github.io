import React from 'react';
import { Helmet } from 'react-helmet-async';

const TeamPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Team - Zion Tech Group</title>
        <meta name="description" content="Meet our talented team of experts." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-8">
            Our Team
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Meet our talented team of experts in AI and IT.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;