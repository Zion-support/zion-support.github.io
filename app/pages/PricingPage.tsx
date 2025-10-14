import React from 'react';
import { Helmet } from 'react-helmet-async';

const PricingPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Transparent pricing for our AI and IT solutions" />
        <meta name="keywords" content="pricing, plans, cost, subscription" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900"></div>
        <div className="container mx-autopx-4py-16"></div>
          <div className="text-center"></div>
            <h1 className="text-4xl font-boldtext-whitemb-8">Pricing</h1>
            <div className="text-gray-400"></div>
              <p>Pricing information coming soon...</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PricingPage;