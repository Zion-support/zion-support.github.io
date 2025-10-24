"use client";
import React from 'react';
import Head from 'next/head';

export default function SitemapPage() {
  return (
    <>
      <Head>
        <title>Sitemap - Zion Tech Group</title>
        <meta name="description" content="Sitemap for Zion Tech Group website." />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-white mb-6">Sitemap</h1>
          <p className="text-gray-300 text-lg">
            Sitemap for Zion Tech Group website.
          </p>
        </div>
      </div>
    </>
  );
};