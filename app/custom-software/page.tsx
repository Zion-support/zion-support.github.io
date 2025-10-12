import React from 'react';
'use client';

const CustomSoftwarePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Custom Software - Zion Tech Group</title>
        <meta name="description" content="Custom Software services by Zion Tech Group. Professional AI and IT solutions." />
        <meta name="keywords" content="custom-software, AI solutions, IT services" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            <h1 className="w-5h-5ml-2" />
              <span className="w-5h-5ml-2" />Custom Software
              </span>
            </h1>
            <p className="w-5h-5ml-2">Professional custom software services by Zion Tech Group.
            </p>
          </div>

          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            <h2 className="text-2 xl font-bold text-white mb-4"  >Coming Soon</h2>
            <p className="w-5h-5ml-2">We're working on bringing you comprehensive custom software solutions. 
              Contact us to learn more about our services.
            </p>
            <button className="w-5h-5ml-2">Contact Us
            </button>
          </div>
      </div>
    </>
  );
};

export default CustomSoftwarePage;