import React from "react";
import { Helmet } from "react-helmet-async";

export default function Page() {
  return (
    <React.Fragment>
      <Helmet>
        <title>Penetration Testing - Zion Tech Group</title>
        <meta name="description" content="Professional penetration testing services by Zion Tech Group." />
      </Helmet>
      <div className="min-h-screen bg-gray-900">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-white mb-8">Penetration Testing</h1>
          <p className="text-gray-300 text-lg">
            Professional penetration testing services tailored to your business needs.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}