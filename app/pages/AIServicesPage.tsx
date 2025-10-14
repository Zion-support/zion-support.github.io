import React from "react";
import { Helmet } from "react-helmet-async";

const AIServicesPage: React.FC = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>AIServices - Zion Tech Group</title>
        <meta name="description" content="Professional aiservices services by Zion Tech Group." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">AIServices</h1>
            <p className="text-gray-300 text-lg mb-8">Professional aiservices services by Zion Tech Group.</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );

};

export default AIServicesPage;