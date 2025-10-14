'use client';
import React from "react";
import { Helmet } from "react-helmet-async";

const AdAnalytics = () => {
  return (
    <>
      <Helmet>
        <title>Ad Analytics - Zion Tech Group</title>
        <meta name="description" content="Ad Analytics services and solutions from Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Ad Analytics</h1>
          <p className="text-xl text-gray-600">
            This component is under development. Please check back soon for more information about our ad analytics services.
          </p>
        </div>
      </div>
    </>
  );
};

export default AdAnalytics;