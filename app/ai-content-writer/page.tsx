import React from 'react';
import { Helmet } from 'react-helmet-async';
export default function Page() {
  return (
    <React.Fragment>

      <Helmet>
        <title>Ai Content Writer - Zion Tech Group</title>
        <meta name="description" content="Professional ai content writer services by Zion Tech Group." />
      </Helmet>
      <div>
        <div>
          <h1 className="text-4xl font-bold text-white mb-4">Ai Content Writer</h1>
          <p className="text-gray-300">Coming soon...</p>
        </div>
      </div>
    </React.Fragment>
  );
}