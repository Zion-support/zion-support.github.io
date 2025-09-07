
  const priceRanges = [
    { id: 'all', name: 'All Prices', icon: '💰' },
    { id: 'under-500', name: 'Under $500/month', icon: '💵' },
    { id: '500-1000', name: '$500 - $1,000/month', icon: '💵' },
    { id: '1000-2500', name: '$1,000 - $2,500/month', icon: '💵' },
    { id: 'over-2500', name: 'Over $2,500/month', icon: '💵' }
  ];

import React from 'react';
import Head from 'next/head';

export default function SearchPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Head>
        <title>Search | Zion Tech Group</title>
        <meta name="description" content="Professional search solutions for your business." />
      </Head>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Search
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional search solutions for your business.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Feature 1</h3>
            <p className="text-gray-300">
              Professional solutions for your business needs.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Feature 2</h3>
            <p className="text-gray-300">
              Advanced technology solutions.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Feature 3</h3>
            <p className="text-gray-300">
              Scalable and reliable solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
