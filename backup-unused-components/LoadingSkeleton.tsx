import React from 'react';
interface LoadingSkeletonProps {
  className?: string;
  children?: React.ReactNode;
}

export default function LoadingSkeleton({ className = '', children }: LoadingSkeletonProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}
import { Helmet } from "react-helmet-async"react-router-dom";
import { ArrowRight } from ";
export default function LoadingSkeleton()

export default function LoadingSkeleton() {
  return (
//     <>
//       <Helmet>
        <title>Loading Skeleton - Zion Tech Group</title>
//       </Helmet>
      <div className="loading-skeleton-container">
          <div className="skeleton-line"></div>
          <div className="skeleton-line"
          className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit" />
</Link>
</div>
//     </>
  );
