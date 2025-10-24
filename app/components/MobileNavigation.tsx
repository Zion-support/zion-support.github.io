'use client'
import React from 'react';

interface MobileNavigationProps {
  className?: string;
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2 className="text-xl font-semibold mb-4">Mobile Navigation</h2>
      <p className="text-gray-600">This is a placeholder component for Mobile Navigation.</p>
    </div>
  );
};

export default MobileNavigation;
