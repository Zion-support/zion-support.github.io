import React from 'react';

interface SkipLinkProps {
  className?: string;
  children?: React.ReactNode;
}

export default function SkipLink({ className = '', children }: SkipLinkProps) {
  return (
    <div className={`skiplink ${className}`}>
      {children || (
        <div className="p-4 text-center">
          <h3 className="text-lg font-semibold text-white mb-2">SkipLink</h3>
          <p className="text-gray-300">Component under construction</p>
        </div>
      )}
    </div>
  );
}