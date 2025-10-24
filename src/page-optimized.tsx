import React from "react";

<<<<<<< HEAD
const SrcPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Src</h1>
        <p className="text-gray-600">This page is under construction. Please check back later.</p>
=======
interface PageOptimizedProps {
  // Add props here
}

const PageOptimized: React.FC<PageOptimizedProps> = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Page Optimized
        </h1>
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600">
            This is an optimized page component.
          </p>
        </div>
>>>>>>> origin/main
      </div>
    </div>
  );
};

export default PageOptimized;