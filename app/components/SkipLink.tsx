import React from 'react';

interface SkipLinkProps {
  className?: string;
  children?: React.ReactNode;
}

const SkipLink: React.FC<SkipLinkProps> = ({ className = '', children }) => {
  return (
    <div className={`skiplink-component ${className}`}>
      {children || (
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">SkipLink</h3>
          <p className="text-gray-600">This is the SkipLink component.</p>
        </div>
      )}
    </div>
  );
};

export default SkipLink;