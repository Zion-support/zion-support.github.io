import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function FiveGSolutionsPage() {
  return (
    <>
      <Helmet>
        <title>5G Solutions - Zion Tech Group</title>
        <meta name="description" content="Next-generation 5G technology solutions for ultra-fast connectivity." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        <main className="relative z-10">
          <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                5G Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                Next-generation 5G technology solutions for ultra-fast connectivity.
              </p>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
