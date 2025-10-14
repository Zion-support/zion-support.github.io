import React from 'react';
import { Helmet } from 'react-helmet-async';

const MicroSaaSPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group</title>
        <meta name="description" content="Innovative micro SaaS solutions for modern businesses" />
        <meta name="keywords" content="micro saas, saas solutions, software as a service" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900"></div>
        <div className="container mx-autopx-4py-16"></div>
          <div className="text-center"></div>
            <h1 className="text-4xl font-boldtext-whitemb-8">Micro SaaS Solutions</h1>
            <div className="text-gray-400"></div>
              <p>Micro SaaS solutions coming soon...</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MicroSaaSPage;