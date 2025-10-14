import React from 'react';

const CoreWebVitals: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Core Web Vitals
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Professional core web vitals solutions tailored to your business needs.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Performance Optimization</h3>
            <p className="text-gray-600">
              Optimize your website&apos;s performance metrics including LCP, FID, and CLS.
            </p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Monitoring & Analytics</h3>
            <p className="text-gray-600">
              Real-time monitoring and analytics for your core web vitals.
            </p>
          </div>
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Consultation</h3>
            <p className="text-gray-600">
              Get expert advice on improving your website&apos;s user experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreWebVitals;