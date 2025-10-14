import React from 'react';
import { Helmet } from 'react-helmet-async';

const SupportPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Support - Zion Tech Group</title>
        <meta name="description" content="Get help and support from our expert team" />
        <meta name="keywords" content="support, help, customer service, technical support" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900"></div>
        <div className="container mx-autopx-4py-16"></div>
          <div className="text-center"></div>
            <h1 className="text-4xl font-boldtext-whitemb-8">Support</h1>
            <div className="text-gray-400"></div>
              <p>Support information coming soon...</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SupportPage;