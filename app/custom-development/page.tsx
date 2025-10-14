'use client';
import React from "react";
import { Helmet } from "react-helmet-async";

export default function Page() {
  return (
    <>
      <Helmet>
        <title>Custom Development - Zion Tech Group</title>
        <meta name="description" content="Professional custom development services by Zion Tech Group." />
        <meta name="keywords" content="custom development, software development, IT services" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4 xl md:text-6 xl font-bold text-white mb-6">
            Custom Development
          </h1>
          <p className="text-xl text-gray-300 max-w-3 xl mx-auto">
            Professional custom development services designed to help your business grow and succeed.
          </p>
        </div>
      </div>
    </>
  );
}
