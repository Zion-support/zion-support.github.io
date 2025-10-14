import React from "react";
import { Helmet } from "react-helmet-async";

export default function Page() {
  return (
    <React.Fragment>
      <Helmet>
        <title>5GSolutions - Zion Tech Group</title>
        <meta name="description" content="Professional 5gsolutions services by Zion Tech Group." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">5GSolutions</h1>
            <p className="text-gray-300 text-lg mb-8">Professional 5gsolutions services by Zion Tech Group.</p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <p className="text-gray-200">
                This page is under development. Please check back soon for more information about our 5gsolutions services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}