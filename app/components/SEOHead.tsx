"use client";
import React from 'react';

interface SEOHeadProps {
  className?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({ className = '' }) => {
  return (
    <div className={`p-4 ${className}`}>
      <h2 className="text-xl font-semibold text-gray-800">
        SEOHead
      </h2>
      <p className="text-gray-600">
        This component is under construction.
      </p>
    </div>
  );
};

export default SEOHead;