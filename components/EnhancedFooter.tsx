'use client';
import React from 'react';

interface EnhancedFooterProps {
  className?: string;
}

const EnhancedFooter: React.FC<EnhancedFooterProps> = ({ className }) => {
  return (
    <footer className={className}>
      <div className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Zion Tech Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default EnhancedFooter;
