'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const Page: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>PAGE_NAME - Zion Tech Group</title>
        <meta name="description" content="PAGE_DESCRIPTION" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-white mb-8">PAGE_TITLE</h1>
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <p className="text-gray-300 text-lg leading-relaxed">
                PAGE_CONTENT
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
