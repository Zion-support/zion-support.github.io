import React from 'react';
import { Helmet } from 'react-helmet-async';

const PrivacyPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Zion Tech Group</title>
        <meta name="description" content="Our privacy policy and data protection practices" />
        <meta name="keywords" content="privacy policy, data protection, privacy" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900"></div>
        <div className="container mx-autopx-4py-16"></div>
          <div className="text-center"></div>
            <h1 className="text-4xl font-boldtext-whitemb-8">Privacy Policy</h1>
            <div className="text-gray-400"></div>
              <p>Privacy policy content coming soon...</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PrivacyPage;