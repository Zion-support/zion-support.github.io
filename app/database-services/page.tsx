"use client";
import React from 'react';
import Head from 'next/head';

export default function PagePage() {
  return (
    <>
      <Head>
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Professional page services by Zion Tech Group." />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-white mb-6">Page</h1>
          <p className="text-gray-300 text-lg">
            Professional page services by Zion Tech Group.
          </p>
        </div>
      </div>
    </>
  );
};