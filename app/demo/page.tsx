import React from 'react';
import {Helmet} from 'react-helmet-async';;
const DemoPage: React.FC  = () => {return (
    <div className="min-h-screen bg-white">
"      <Helmet>
        <title>Demo - Zion Tech Group</title>
        <meta name="description" content="See our AI and IT solutions in action. Request a demo today." />"      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
"        <div className="text-center">"          <h1 className="text-4xl font-bold text-gray-900 mb-6">
"            Request a Demo
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">"            See our AI and IT solutions in action. Request a demo today to see how we can help your business.
          </p>
        </div>
      </div>
    </div>;
  );};
;
export default DemoPage;