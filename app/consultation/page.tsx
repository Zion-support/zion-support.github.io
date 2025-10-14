import React from "react";
import { Helmet } from "react-helmet-async";

export default function Page() {
  return (
    <div>
      <Helmet>
        <title>Consultation - Zion Tech Group</title>
        <meta name="description" content="Professional consultation services by Zion Tech Group." />
      </Helmet>
      <div>
        <div>
          <h1 className="text-4xl font-bold text-white mb-8">Consultation</h1>
          <p className="text-gray-300 text-lg">
            This page is under construction. Please check back later.
          </p>
        </div>
      </div>
    </div>
  );
}
