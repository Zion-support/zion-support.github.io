import React from 'react';
'use client';

const CommunityPage: React.FC = () => {
  return (
    <>
      <Helmet></Helmet>
        <title>Community - Zion Tech Group</title>
        <meta name="description" content="Community services by Zion Tech Group. Professional AI and IT solutions." />
        <meta name="keywords" content="community, AI solutions, IT services" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <h1 className="w-5 h-5ml-2">Community
              </h1>
            <p className="w-5 h-5ml-2">Professional community services by Zion Tech Group.
            </p>
          </div>

          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <h2 className="text-2 xl font-boldtext-white mb-4">Coming Soon</h2>
            <p className="w-5 h-5ml-2">We're working on bringing you comprehensive community solutions. 
              Contact us to learn more about our services.
            </p>
            <button className="w-5 h-5ml-2">Contact Us
            </button>
          </div>
      </div>
    </>
  );
};

export default CommunityPage;