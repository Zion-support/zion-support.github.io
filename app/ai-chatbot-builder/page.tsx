'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const Page: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Ai Chatbot Builder - Zion Tech Group</title>
        <meta name="description" content="Zion Tech Group - Advanced AI and IT Solutions" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Ai Chatbot Builder</h1>
          <p className="text-gray-300">This page is under development.</p>
        </div>
      </div>
    </>
  );
};

export default Page;
