import React from "react";
import { Helmet } from "react-helmet-async";

const WebdevelopmentPage = () => {
  return (
    <div>
      <Helmet>
        <title>Web development Page - Zion Tech Group</title>
        <meta name="description" content="Web development Page - Zion Tech Group" />
      </Helmet>
      <div>
        <div>
          <h1 className="text-4xl font-bold text-white mb-8">Web development Page</h1>
          <p className="text-gray-300 text-lg">
            This page is under construction. Please check back later.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WebdevelopmentPage;