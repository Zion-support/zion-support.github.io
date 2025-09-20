<<<<<<< HEAD
import React from 'react';
type EnhancedLoadingProps = any;
=======
import React from "react";
type EnhancedLoadingProps = {
  lines?: number;
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
export default function EnhancedLoading({ lines = 3 }: EnhancedLoadingProps) {
  return (
    <div className="space-y-2">
      {Array.from({ length: lines }).map((_, idx) => (
        <div key={idx} className="skeleton h-4 rounded" />
      ))}
    </div>
  );
}