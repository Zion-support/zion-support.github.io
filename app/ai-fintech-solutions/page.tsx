'use client';
import React from "react";
import { Helmet } from "react-helmet-async";

export default function Page() {
  return (
    <>
      <Helmet>
        <title>AI Fintech Solutions - Zion Tech Group</title>
        <meta name="description" content="AI Fintech Solutions services and solutions from Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">AI Fintech Solutions</h1>
          <p className="text-xl text-gray-600">
            This page is under development. Please check back soon for more information about our AI fintech solutions services.
          </p>
        </div>
      </div>
    </>
  );
}