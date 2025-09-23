import React from 'react';

type EnhancedLoadingProps = {
  lines?: number;
};

export default function EnhancedLoading({ lines = 3 }: EnhancedLoadingProps) {
  return (
    <div className="space-y-2">
<<<<<<< HEAD
      {Array.from({ length: lines }).map((_, idx) => (
=======
      {Array.from({ length: lines }).map((_idx) => (
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
        <div key={idx} className="skeleton h-4 rounded" />
      ))}
    </div>
  );
}