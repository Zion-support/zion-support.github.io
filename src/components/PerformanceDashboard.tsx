<<<<<<< HEAD
import React from 'react';

const PerformanceDashboard = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">PerformanceDashboard</h2>
      <p className="text-gray-600">This component is under construction.</p>
=======
import React from "react";

interface PerformanceDashboardProps {
  // Add props here
}

const PerformanceDashboard: React.FC<PerformanceDashboardProps> = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          PerformanceDashboard
        </h1>
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600">
            This is a placeholder for the PerformanceDashboard page.
          </p>
        </div>
      </div>
>>>>>>> origin/main
    </div>
  );
};

export default PerformanceDashboard;
