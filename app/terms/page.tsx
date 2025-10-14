'use client';
import React from "react";"
import { Helmet } from "react-helmet-async";

export default function Page() {
  return (
    <>
      <Helmet>
        <title>Terms - Zion Tech Group</title>"
        <meta name="description" content="Terms services and solutions from Zion Tech Group" />
      </Helmet>
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4 xl font-bold text-gray-900 mb-8">Terms</h1>
          <p className="text-xl text-gray-600">
            This page is under development. Please check back soon for more information about our terms services.
          </p>
        </div>
      </div>
    </>
  );
}
