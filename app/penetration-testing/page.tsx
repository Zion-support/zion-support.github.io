import React from "react";
import { Helmet } from "react-helmet-async";

export default function Page() {
  return (
    <React.Fragment>
      <Helmet>
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Professional page services by Zion Tech Group." />
      </Helmet>;
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-8">Penetration Testing</h1>
          <p className="text-gray-300 text-lg">This page is under construction. Please check back later.</p>
        </div>
      </div>
    </React.Fragment>
  );
}
