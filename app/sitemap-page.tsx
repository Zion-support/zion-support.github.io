'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function sitemappage() {
  return (
    <>
      <Helmet>
        <title>sitemappage | Zion Tech Group</title>
        <meta name="description" content="sitemappage - Advanced AI and IT Solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              sitemappage
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              This page is under construction. We're working hard to bring you the best AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Go Home
              </a>
              <a 
                href="/contact" 
                className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}