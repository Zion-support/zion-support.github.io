'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const ServiceCardSkeletonPage: React.FC = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>ServiceCardSkeleton - Zion Tech Group</title>
        <meta name="description" content="Professional ServiceCardSkeleton services by Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-6">ServiceCardSkeleton</h1>
          <p className="text-lg text-gray-300">
            This page is currently under development. Please check back soon for more information.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ServiceCardSkeletonPage;
