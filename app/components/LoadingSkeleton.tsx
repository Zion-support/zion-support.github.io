import React from 'react';

interface LoadingSkeletonProps {
  // Add props here
}

export default function LoadingSkeleton({}: LoadingSkeletonProps) {
  return (
    <div className="loadingskeleton">
      <h2>LoadingSkeleton</h2>
      <p>Component under development.</p>
    </div>
  );
}