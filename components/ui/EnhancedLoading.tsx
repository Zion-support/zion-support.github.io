import React from 'react';

type EnhancedLoadingProps = {
  lines?: number;
};

export default function EnhancedLoading({ lines = 3 }: EnhancedLoadingProps) {
  return (
    <div className="space-y-2">
        <div key={idx} className="skeleton h-4 rounded" />
      ))}
    </div>
  );
}