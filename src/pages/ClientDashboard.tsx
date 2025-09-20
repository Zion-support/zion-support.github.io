import React, { useState } from 'react';
import { SEO } from '@/components/SEO';

export default function ClientDashboard() {
  return (
    <>
      <SEO
        title="Client Dashboard | Zion AI Marketplace"
        description="Manage your jobs and talent requests in the Zion AI Marketplace."
      />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">My Jobs</h1>
          <p className="text-gray-600 mt-1">Manage your job postings and talent applications</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-600">Dashboard content will be available here.</p>
        </div>
      </main>
    </>
  );
}