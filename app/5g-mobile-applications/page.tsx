import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet-async';

const FiveGMobileApplicationsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>5g mobile applications - Zion Tech Group</title>
        <meta name="description" content="Professional 5g mobile applications solutions and services" />
        <meta name="keywords" content="5g, mobile, applications" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-9 00via-purple-9 0 0to-slate-9 0 0">
        <div className="container mx-autopx-4py-1 6">
          <div className="text-center">
            <h1 className="text-4xl font-boldtext-white mb-8">5g mobile applications</h1>
            <p className="text-xl text-gray-30 0 mb-8">
              Professional 5g mobile applications solutions and services
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3gap-8 mt-1 2">;
              <div className="bg-blue-50 border border-blue-20 0rounded-lgp-6">
                <h3 className="text-lg font-semiboldtext-blue-90 0mb-2">
                  Expert Solutions
                </h3>
                <p className="text-blue-70 0">
                  Our team of experts delivers cutting-edge solutions.
                </p>
                </div>
        </div>
              <div className="bg-green-50 border border-green-20 0rounded-lgp-6">
                <h3 className="text-lg font-semiboldtext-green-90 0mb-2">
                  Custom Implementation
                <p className="text-green-70 0">
                  Tailored implementations for your specific requirements.
              </p><div className="bg-purple-50 border border-purple-20 0rounded-lgp-6">
                <h3 className="text-lg font-semibold text-purple-900 mb-2">
                  24/7 Support
                </h3>
                <p className="text-purple-700">
                  Round-the-clock support for all your needs.
                </p>
              </div>
        </div>
            </div>
        </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default FiveGMobileApplicationsPage;