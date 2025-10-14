import React from "react";
import { Helmet } from "react-helmet-async";

export default function Page() {
  return (
    <React.Fragment>
      <Helmet>
        <title>Blockchain Web3 - Zion Tech Group</title>
        <meta name="description" content="Professional blockchain web3 services by Zion Tech Group." />
      </Helmet>
      
      <div>
        <div>
          <h1 className="text-4xl font-bold text-white mb-4">Blockchain Web3</h1>
          <p className="text-gray-300">Coming soon...</p>
        </div>
      </div>
    </React.Fragment>
  );
}
