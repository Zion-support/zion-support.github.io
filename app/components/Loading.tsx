'use client';

import React from 'react';
<<<<<<< HEAD

const Loading: React.FC = () => {
=======
interface LoadingProps {
  className?: string;
  children?: React.ReactNode;
}
export default function Loading({ className = '', children, ...props }: LoadingProps) {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0314
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Loading...</h2>
        <p className="text-gray-600">Please wait while we load the content</p>
      </div>
    </div>
  );
<<<<<<< HEAD
};

export default Loading;
=======
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0314
