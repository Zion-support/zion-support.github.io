'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function TermsPage() {
  return (
    <React.Fragment>
      <Helmet>
        <title>TermsPage - Zion Tech Group</title>
        <meta name="description" content="TermsPage services by Zion Tech Group" />
      </Helmet>
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">TermsPage</h1>
          <p className="text-gray-300">This page is under construction.</p>
        </div>
      </div>
    </React.Fragment>
  );
}