import React from 'react';
'use client';

const PartnersPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Partners - Zion Tech Group</title>
        <meta name="description" content="Partners services by Zion Tech Group. Professional AI and IT solutions." />
        <meta name="keywords" content="partners, AI solutions, IT services" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            <h1 className="w-5 h-5 ml-2" />
              <span className="w-5 h-5 ml-2" />Partners
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Professional partners services by Zion Tech Group.
            </p>
          </div>

          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            <h2 className="text-2 xl font-bold text-white mb-4"  >Coming Soon</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">We're working on bringing you comprehensive partners solutions. 
              Contact us to learn more about our services.
            </p>
            <button className="w-5 h-5 ml-2">Contact Us
            </button>
          </div>
      </div>
    </>
  );
};

export default PartnersPage;