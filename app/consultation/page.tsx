import React from 'react';
import SEOOptimizer from '../components/SEOOptimizer';

const ConsultationPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer
        title="Free Consultation - Zion Tech Group | Expert Technology Consulting"
        description="Get a free consultation with our technology experts. Discuss your AI, cybersecurity, and digital transformation needs with Zion Tech Group."
        keywords="free consultation, technology consulting, AI consultation, cybersecurity consultation, digital transformation"
        canonical="https://ziontechgroup.com/consultation"
      />
      
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Free Consultation
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Schedule a free consultation with our technology experts to discuss your project needs.
          </p>
          <a
            href="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
          >
            Schedule Consultation
          </a>
        </div>
      </div>
    </div>
  );
};

export default ConsultationPage;
