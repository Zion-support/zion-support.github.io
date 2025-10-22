'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const StatusPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>System Status - Zion Tech Group</title>
        <meta name="description" content="Check the current status of our systems and services." />
      </Helmet>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-8">System Status</h1>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
            All systems are operational. Check back here for any service updates or maintenance notifications.
          </p>
        </div>
      </div>
    </>
  );
};

export default StatusPage;