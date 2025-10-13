import React from 'react';
<<<<<<< HEAD

interface ImprovedErrorBoundaryProps {
  className?: string;
  children?: React.ReactNode;
}

export default function ImprovedErrorBoundary({ className = '', children }: ImprovedErrorBoundaryProps) {
=======
import { Helmet } from 'react-helmet-async';

export default function ImprovedErrorBoundaryPage() {
>>>>>>> cursor/fix-errors-and-merge-to-main-1dc1
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>ImprovedErrorBoundary - Zion Tech Group</title>
        <meta name="description" content="Advanced ImprovedErrorBoundary solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            ImprovedErrorBoundary
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            This page is under development. Please check back later.
          </p>
        </div>
      </div>
    </div>
  );
}