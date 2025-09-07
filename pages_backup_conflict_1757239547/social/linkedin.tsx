import React, { useEffect } from 'react';
import Head from 'next/head';
export default function LinkedInRedirect() {
export default function LinkedInRedirect() {

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.location.replace(
        'https://www.linkedin.com/company/zion-tech-group';
      );
    }
  }, []);
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto py-8">
        <h1 className="text-2xl font-bold mb-6">Page</h1>
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-600">Content coming soon.</p>
        </div>
      </div>
    </>
  );
