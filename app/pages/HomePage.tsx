import React from "react";
import { Helmet } from "react-helmet-async";

const HomePage = () => {
  return (
    <div>
      <Helmet>
        <title>HomePage - Zion Tech Group</title>
        <meta name="description" content="HomePage - Zion Tech Group" />
      </Helmet>
      <div>
        <div>
          <h1 className="text-4xl font-bold text-white mb-8">HomePage</h1>
          <p className="text-gray-300 text-lg">
            This page is under construction. Please check back later.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;