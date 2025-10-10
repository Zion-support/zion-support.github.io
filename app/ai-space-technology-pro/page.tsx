'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function AISpaceTechnologyProPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Space Technology Pro - Coming Soon | Zion Tech Group</title>
        <meta 
          name="description" 
          content="AI-powered space technology service coming soon. Advanced space solutions with AI technology." 
        />
      </Helmet>
      
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">AI Space Technology Pro</h1>
          <p className="text-gray-300 mb-8">Coming Soon</p>
          <p className="text-gray-400">This service is under development</p>
        </div>
      </div>
    </div>
  );
}