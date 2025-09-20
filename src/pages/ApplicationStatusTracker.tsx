import React from 'react';
import { SEO } from '@/components/SEO';
import { ProtectedRoute } from "@/components/ProtectedRoute";

function ApplicationStatusTrackerContent() {
  return (
    <>
      <SEO
        title='Application Status Tracker | Zion AI Marketplace'
        description='Track the status of your job applications in the Zion AI marketplace.'
      />
      <div className='container mx-auto px-4 py-8'>
        <div className='text-center'>
          <h1 className='text-3xl font-bold text-white mb-4'>
            Application Status Tracker
          </h1>
          <p className='text-gray-300'>
            Track your job applications and their current status.
          </p>
        </div>
      </div>
    </>
  );
}

export default function ApplicationStatusTracker() {
  return (
    <ProtectedRoute>
      <ApplicationStatusTrackerContent />
    </ProtectedRoute>
  );
}