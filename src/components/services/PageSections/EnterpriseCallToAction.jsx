import React from 'react';

export const EnterpriseCallToAction = () => {
  return (
    <div className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Transform Your IT Infrastructure?
        </h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Join hundreds of enterprises that trust Zion Tech Group for their IT needs. 
          Get started today with a free consultation and customized solution plan.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg">
            Get Free Consultation
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-lg">
            View Case Studies
          </button>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-3xl mb-2">🏢</div>
            <h3 className="text-lg font-semibold mb-2">Enterprise Solutions</h3>
            <p className="text-blue-100">Scalable IT infrastructure for large organizations</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">🔒</div>
            <h3 className="text-lg font-semibold mb-2">Security First</h3>
            <p className="text-blue-100">Enterprise-grade security and compliance</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">📈</div>
            <h3 className="text-lg font-semibold mb-2">24/7 Support</h3>
            <p className="text-blue-100">Round-the-clock technical support</p>
          </div>
        </div>
      </div>
    </div>
  );
};