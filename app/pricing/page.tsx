import React from 'react';
import {Helmet} from 'react-helmet-async';;
const PricingPage: React.FC  = () => {return (
    <div className="min-h-screen bg-white">
"      <Helmet>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Transparent pricing for our AI and IT solutions. Choose the plan that fits your needs." />"      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
"        <div className="text-center">"          <h1 className="text-4xl font-bold text-gray-900 mb-6">
"            Pricing
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">"            Transparent pricing for our AI and IT solutions. Choose the plan that fits your needs.
          </p>
        </div>
      </div>
    </div>;
  );};
;
export default PricingPage;