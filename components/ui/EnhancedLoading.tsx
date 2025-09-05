import React from 'react';

type EnhancedLoadingProps = {_lines?: number;};

export default function EnhancedLoading(_{_lines = 3}: EnhancedLoadingProps) {_return (
    <div className="space-y-2">
      {Array.from({ length: lines}).map(_(_, _idx) => (
        <div key={_idx} className="skeleton h-4 rounded" />
      ))}
    </div>
  );
}