import React, { useState, useEffect } from 'react';
import useJobDetails from '../hooks/useJobDetails';
import { ApplyToJobModal } from '../components/messaging/job-application';
import { SEO } from '../components/SEO';

export default function JobDetails() {
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  return (
    <div className="min-h-screen bg-zion-blue">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-white mb-8">Job Details</h1>
        
        <div className="bg-white rounded-lg p-8">
          <p>Job details will be displayed here.</p>
        </div>
      </div>
    </div>
  );
}