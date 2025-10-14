import React from "react";
import { Helmet } from "react-helmet-async";

const CloudInfrastructurePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Cloud Infrastructure - Zion Tech Group</title>
        <meta name="description" content="Professional cloud infrastructure solutions by Zion Tech Group." />
        <meta name="keywords" content="cloud infrastructure, cloud services, AWS, Azure, Google Cloud, cloud migration" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Cloud Infrastructure
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Scalable and secure cloud infrastructure solutions designed to power your business growth.
          </p>
        </div>
        
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">Cloud Migration</h3>
            <p className="text-gray-300">
              Seamlessly migrate your applications and data to the cloud with minimal downtime.
            </p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">Scalable Architecture</h3>
            <p className="text-gray-300">
              Build cloud-native applications that scale automatically with your business needs.
            </p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">Security & Compliance</h3>
            <p className="text-gray-300">
              Enterprise-grade security and compliance solutions for your cloud infrastructure.
            </p>
        </div>
      </div>
    </>
  );
"
}
};

export default CloudInfrastructurePage;
