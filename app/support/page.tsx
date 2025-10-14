import React from 'react';
import {Helmet} from 'react-helmet-async';;
const SupportPage: React.FC  = () => {return (
    <div className="min-h-screen bg-white">
"      <Helmet>
        <title>Support - Zion Tech Group</title>
        <meta name="description" content="Get support for your AI and IT solutions. We're here to help." />"      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
"        <div className="text-center">"          <h1 className="text-4xl font-bold text-gray-900 mb-6">
"            Support
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">"            Get support for your AI and IT solutions. We're here to help you succeed.
'          </p>
        </div>
      </div>
    </div>;
  );};
;
export default SupportPage;