import React from "react";
import { Helmet } from "react-helmet-async";

const TermsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Terms of service for Zion Tech Group." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Terms of Service</h1>
          <p className="text-gray-300">Coming soon...</p>
        </div>
      </div>
    </>
  );
}

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Terms - Zion Tech Group"
        description="Advanced Terms solutions for modern businesses."
        canonical="https://ziontechgroup.com/terms"
      />
      
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Terms
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Advanced Terms solutions designed to transform your business.
          </p>
        </div>
      </section>
    </div>
  );
};

export default TermsPage;
