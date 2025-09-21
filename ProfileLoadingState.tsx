import React from 'react';

export function ProfileLoadingState() {
  return (
    <div className="min-h-screen bg-zion-blue flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-zion-cyan mx-auto mb-4"></div>
        <p className="text-zion-cyan">Loading profile...</p>
      </div>
    </div>
  );
}