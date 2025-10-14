import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet-async';

constAboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group and our mission" />
        <meta name="keywords" content="about, company, mission" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h-1 className="text-4-xl font-bold text-white mb-8">About Us</h-1>
            <p className="text-xl text-gray-300 mb-8">
              Learn about Zion Tech Group and our mission
            </p>
            <div className="gridmd:grid-cols-2-lg:grid-cols-3 gap-8 mt-12">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h-3 className="text-lg font-semibold text-blue-900 mb-2">
                  Expert Solutions
                </h-3>
                <p className="text-blue-700">
                  Ourteamof expertsdeliverscutting-edge solutions.
                </p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h-3 className="text-lg font-semibold text-purple-900 mb-2">
                  Custom Implementation
                </h-3>
                <p className="text-purple-700">
                  Tailoredimplementationsfor yourspecificrequirements.
                </p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h-3 className="text-lg font-semibold text-purple-900 mb-2">
                  24/7 Support
                </h-3>
                <p className="text-purple-700">
                  Round-the-clocksupportfor allyourneeds.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;