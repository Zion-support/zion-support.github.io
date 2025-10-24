'use client';
import React from 'react';
import Head from 'next/head';
export default function ServicePage() {
  return (
    <>
      <Head>
        <title>Cybersecurity Consulting | Zion Tech Group</title>
        <meta name="description" content="Professional cybersecurity consulting services and solutions for modern businesses." />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Cybersecurity Consulting | Zion Tech Group" />
        <meta property="og:description" content="Professional cybersecurity consulting services and solutions for modern businesses." />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Cybersecurity Consulting
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Professional cybersecurity consulting services and solutions for modern businesses.
          </p>
        </div>
      </div>
    </>
  );
}