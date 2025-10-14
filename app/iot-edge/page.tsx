'use client';
import React from "react";
import { Helmet } from "react-helmet-async";

export default function Page() {
  return (
    <>
      <Helmet>
        <title>Iot Edge - Zion Tech Group</title>
        <meta name="description" content="Iot Edge services and solutions from Zion Tech Group" />
      </Helmet>
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Iot Edge</h1>
          <p className="text-xl text-gray-600">
            This page is under development. Please check back soon for more information about our iot edge services.
          </p>
        </div>
      </div>
    </>
  );
}