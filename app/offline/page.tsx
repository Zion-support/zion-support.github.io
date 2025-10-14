'use client';
import React from "react";
import { Helmet } from "react-helmet-async";

export default function Page() {
  return (
    <>
      <Helmet>
        <title>Offline - Zion Tech Group</title>
        <meta name="description" content="Offline page from Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">You're Offline</h1>
          <p className="text-xl text-gray-600">
            Please check your internet connection and try again.
          </p>
        </div>
      </div>
    </>
  );
}