import React from "react";
import { Helmet } from "react-helmet-async";

export default function MicroSaasPage() {
  return (
    <React.Fragment>
      <Helmet>
        <title>Micro Saas - Zion Tech Group</title>
        <meta name="description" content="Professional micro saas services by Zion Tech Group." />
      </Helmet>
      
      <div>
        <div>
          <h1 className="text-4xl font-bold text-white mb-8">Micro Saas</h1>
          <p className="text-gray-300 text-lg">
            This page is under construction. Please check back later.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}