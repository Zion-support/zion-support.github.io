import React from "react";
import { Helmet } from "react-helmet-async";

const CustomDevelopmentPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Custom Development - Zion Tech Group</title>
        <meta name="description" content="Professional custom development services by Zion Tech Group." />
        <meta name="keywords" content="custom development, software development, IT services" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Custom Development
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional custom development services designed to help your business grow and succeed.
          </p>
        </div>
        
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">Custom Solutions</h3>
            <p className="text-gray-300">
              Tailored software solutions built specifically for your business needs and requirements.
            </p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">Expert Development</h3>
            <p className="text-gray-300">
              Our experienced developers use cutting-edge technologies to deliver high-quality solutions.
            </p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">Ongoing Support</h3>
            <p className="text-gray-300">
              Continuous maintenance and support to ensure your custom solutions perform optimally.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomDevelopmentPage;