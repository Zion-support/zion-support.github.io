import React from 'react';
'use client';

const ECommerceDevelopmentPage: React.FC = () => {
  return (
    <>
      <Helmet />
        <title  >E Commerce Development - Zion Tech Group</title>
        <meta name="description" content="E Commerce Development services by Zion Tech Group. Professional AI and IT solutions." / / />
        <meta name="keywords" content="e-commerce-development, AI solutions, IT services" / / />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" />
        <div className="container mx-auto px-4 py-16" />
          <div className="text-center mb-16" />
            <h1 className="text-4 xl md:text-6 xl font-bold text-white mb-6" />
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"  />E Commerce Development
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3 xl mx-auto">
              Professional e commerce development services by Zion Tech Group.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8 text-center" />
            <h2 className="text-2 xl font-bold text-white mb-4"  >Coming Soon</h2>
            <p className="text-gray-300 mb-6">
              We're working on bringing you comprehensive e commerce development solutions. 
              Contact us to learn more about our services.
            </p>
            <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"  />Contact Us
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ECommerceDevelopmentPage;