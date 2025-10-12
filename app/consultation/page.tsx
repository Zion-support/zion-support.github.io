import React from 'react';
'use client';

const ConsultationPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Consultation - Zion Tech Group</title>
        <meta name="description" content="Consultation services by Zion Tech Group. Professional AI and IT solutions." /  />
        <meta name="keywords" content="consultation, AI solutions, IT services" /  />
      </Helmet>
      
      <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            <h1 className="w-5h-5 ml-2" />
              <span className="w-5h-5 ml-2" />Consultation
              </span>
            </h1>
            <p className="w-5h-5 ml-2" />
              Professional consultation services by Zion Tech Group.
            </p>
          </div>

          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            <h2 className="te xt-2 xl font-boldtext-white mb-4"  >Coming Soon</h2>
            <p className="w-5h-5 ml-2" />
              We're working on bringing you comprehensive consultation solutions. 
              Contact us to learn more about our services.
            </p>
            <button className="w-5h-5 ml-2" />Contact Us
            </button>
          </div>
      </div>
    </>
  );
};

export default ConsultationPage;