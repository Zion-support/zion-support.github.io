import React from 'react';
'use client';

const CaseStudiesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Case Studies services by Zion Tech Group. Professional AI and IT solutions." /  />
        <meta name="keywords" content="case-studies, AI solutions, IT services" /  />
      </Helmet>
      
      <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            <h1 className="w-5h-5 ml-2" />
              <span className="w-5h-5 ml-2" />Case Studies
              </span>
            </h1>
            <p className="w-5h-5 ml-2" />
              Professional case studies services by Zion Tech Group.
            </p>
          </div>

          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            <h2 className="te xt-2 xl font-boldtext-white mb-4"  >Coming Soon</h2>
            <p className="w-5h-5 ml-2" />
              We're working on bringing you comprehensive case studies solutions. 
              Contact us to learn more about our services.
            </p>
            <button className="w-5h-5 ml-2" />Contact Us
            </button>
          </div>
      </div>
    </>
  );
};

export default CaseStudiesPage;