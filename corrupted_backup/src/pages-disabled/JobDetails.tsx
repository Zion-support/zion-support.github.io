import React, { useState, useEffect } from 'react';
import useJobDetails from '@/hooks/useJobDetails';
import { ApplyToJobModal } from '@/components/messaging/job-application';
import { SEO } from '@/components/SEO';

export default function JobDetails() {
  return (
    <div className="min-h-screen bg-zion-blue">
      <SEO title="Job Details" description="Job opportunity details" />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-white text-center mb-8">
          Job Details
        </h1>
        <p className="text-zion-cyan text-center">
          Job details coming soon...
        </p>
      </div>
    </div>
  );
}