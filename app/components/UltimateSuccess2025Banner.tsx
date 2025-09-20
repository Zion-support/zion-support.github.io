import React from 'react';
import Link from 'next/link';

const UltimateSuccess2025Banner: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-green-900 to-blue-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-4">Fortune 500 Manufacturing</h3>
            <p className="text-gray-300 mb-4">
              "Zion Tech Group's AI automation solution reduced our operational costs by 60% and increased productivity by 340%. The ROI was achieved within 12 months."
            </p>
            <div className="text-sm text-gray-400">
              - CEO, Fortune 500 Manufacturing Company
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-4">Global Logistics Company</h3>
            <p className="text-gray-300 mb-4">
              "Their quantum AI optimization transformed our supply chain operations. We saw a 500% ROI and 85% reduction in unplanned downtime."
            </p>
            <div className="text-sm text-gray-400">
              - CTO, Global Logistics Company
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-4">Healthcare Enterprise</h3>
            <p className="text-gray-300 mb-4">
              "The AI-powered analytics platform revolutionized our patient care. We achieved 99.7% accuracy in diagnostics and 70% faster decision-making."
            </p>
            <div className="text-sm text-gray-400">
              - Medical Director, Healthcare Enterprise
            </div>
          </div>
        </div>
        <div className="text-center mt-12">
          <Link
            href="/case-studies"
            className="bg-white text-green-900 px-8 py-4 rounded-lg font-semibold hover: bg-gray-100 transition-colors"
          >
            Read More Success Stories
          </Link>
        </div>
      </div>
    </section>
  );
  };

export default UltimateSuccess2025Banner;