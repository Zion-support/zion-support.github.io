import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function ServiceCardSkeleton() {
  return (
    <>
      <Helmet>
        <title>ServiceCardSkeleton - Zion Tech Group</title>
        <meta name="description" content="Professional ServiceCardSkeleton services by Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              ServiceCardSkeleton
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional ServiceCardSkeleton services delivered with excellence by our expert team.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}