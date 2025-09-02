import React from 'react';
import {SEO } from '@/components/SEO';

export default function CommunityPage() {return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <SEO title="CommunityPage - Zion Tech Group" description="Professional CommunityPage services by Zion Tech Group" />
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-white mb-8">CommunityPage</h1>
        <p className="text-gray-300 text-lg">
          Professional CommunityPage services to help your business grow.
        </p>
      </div>
    </div>
  );
}