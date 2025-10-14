import React from "react";
import { Helmet } from "react-helmet-async";

const SupportPage = () => {
  return (
    <div>
      <Helmet>
        <title>Support Page - Zion Tech Group</title>
        <meta name="description" content="Support Page - Zion Tech Group" />
      </Helmet>
      <div>
        <div>
          <h1 className="text-4xl font-bold text-white mb-8">Support Page</h1>
          <p className="text-gray-300 text-lg">
            This page is under construction. Please check back later.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;