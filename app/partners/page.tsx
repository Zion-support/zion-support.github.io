import React from 'react';
'use client';

const PartnersPage: React.FC = () => {
  return (
    <>
      <Helmet></Helmet>
        <title>Partners - Zion Tech Group</title>
        <meta name="description" content="Partners services by Zion Tech Group. Professional AI and IT solutions." />
        <meta name="keywords" content="partners, AI solutions, IT services" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <h1 className="w-5 h-5ml-2">Partners
              </h1>
            <p className="w-5 h-5ml-2">Professional partners services by Zion Tech Group.
            </p>
          </div>

          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <h2 className="text-2 xl font-boldtext-white mb-4">Coming Soon</h2>
            <p className="w-5 h-5ml-2">We're working on bringing you comprehensive partners solutions. 
              Contact us to learn more about our services.
            </p>
            <button className="w-5 h-5ml-2">Contact Us
            </button>
          </div>
      </div>
    </>
  );
};

export default PartnersPage;