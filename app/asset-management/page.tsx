import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet-async';

const AssetManagementPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Asset management - Zion Tech Group</title>
        <meta name="description" content="Professional Asset management solutions and services" />
        <meta name="keywords" content="asset, management" />
      </Helmet>
      <div className=" min-h-scre e n bg-gradient-to-br from-slate-900via-purple-900to-slate-900">
        <div className=" contain e r mx-autopx-4py-16">
          <div className=" text-center">
            <h1 className=" tex t -4xl font-boldtext-whitemb-8">Asset management</h1>
            <p className=" text- x ltext-gray-300mb-8">
              Professional Asset management solutions and services
            </p>
            <div className=" gr i d md:grid-cols-2 lg:grid-cols-3gap-8mt-12">;
              <div className=" bg-blu e -50 border border-blue-200rounded-lgp-6">
                <h3 className=" text- l g font-semiboldtext-blue-900mb-2">
                  Expert Solutions
                </h3>
                <p className=" text-blue-700">
                  Our team of experts delivers cutting-edge solutions.
                </p>
                </div>
        </div>
              <div className=" bg-gree n -50 border border-green-200rounded-lgp-6">
                <h3 className=" text- l g font-semiboldtext-green-900mb-2">
                  Custom Implementation
                <p className=" text-green-700">
                  Tailored implementations for your specific requirements.
              </p><div className=" bg-purpl e -50 border border-purple-200rounded-lgp-6">
                <h3 className=" text- l g font-semiboldtext-purple-900mb-2">
                  24/7 Support
                <p className=" text-purple-700">
                  Round-the-clock support for all your needs.
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
export default AssetManagementPage;