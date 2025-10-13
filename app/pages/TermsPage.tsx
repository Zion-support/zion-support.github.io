import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function TermsPage() {
  return (
    <>
      <Helmet>
        <title>TermsPage - Zion Tech Group</title>
        <meta name="description" content="Zion Tech Group TermsPage page" />
      </Helmet>
      
      <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              TermsPage
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Coming Soon
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
