import React from 'react';

export default function TalentProfileSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
        <div className="h-32 bg-white/20 rounded-lg mb-4"></div>
        <div className="h-6 bg-white/20 rounded mb-2"></div>
        <div className="h-4 bg-white/20 rounded mb-4"></div>
        <div className="space-y-2">
          <div className="h-4 bg-white/20 rounded"></div>
          <div className="h-4 bg-white/20 rounded w-3/4"></div>
        </div>
      </div>
    </div>
  );
}
