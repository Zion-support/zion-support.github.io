import React from "react";
import { Helmet } from "react-helmet-async";

export default function Page() {
  return (
    <React.Fragment>
      <Helmet>
        <title>Ai Fintech Solutions - Zion Tech Group</title>
        <meta name="description" content="Professional ai fintech solutions services by Zion Tech Group." />
      </Helmet>
      
      <div>
        <div>
          <h1 className="text-4xl font-bold text-white mb-4">Ai Fintech Solutions</h1>
          <p className="text-gray-300">Coming soon...</p>
        </div>
      </div>
    </React.Fragment>
  );
}
