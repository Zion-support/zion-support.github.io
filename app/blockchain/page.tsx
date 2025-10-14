import React from "react";
import { Helmet } from "react-helmet-async";

const BlockchainPage = () => {
  return (
    <div>
      <Helmet>
        <title>Blockchain Page - Zion Tech Group</title>
        <meta name="description" content="Blockchain Page - Zion Tech Group" />
      </Helmet>
      <div>
        <div>
          <h1 className="text-4xl font-bold text-white mb-8">Blockchain Page</h1>
          <p className="text-gray-300 text-lg">
            This page is under construction. Please check back later.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlockchainPage;