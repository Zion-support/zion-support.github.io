import React from "react";
import { Helmet } from "react-helmet-async";

const MainPage = () => {
  return (
    <>
      <Helmet>
        <title>Main - Zion Tech Group</title>
        <meta name="description" content="Main - Zion Tech Group" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-8">Main</h1>
            <p>This page is under construction. Please check back later.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
