import React from "react";
import { Helmet } from "react-helmet-async";

const AppPage = () => {
  return (
    <div>
      <Helmet>
        <title>App Page - Zion Tech Group</title>
        <meta name="description" content="App Page - Zion Tech Group" />
      </Helmet>
      <div>
        <div>
          <h1 className="text-4xl font-bold text-white mb-8">App Page</h1>
          <p className="text-gray-300 text-lg">
            This page is under construction. Please check back later.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AppPage;