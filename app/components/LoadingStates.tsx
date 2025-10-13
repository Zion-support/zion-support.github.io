import React from 'react';

export const PageLoader: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
          <div className="w-8 h-8 bg-white rounded-full animate-pulse"></div>
        </div>
        <p className="text-lg text-gray-300">Loading...</p>
      </div>
    </div>
  );
};

export const ComponentLoader: React.FC = () => {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-400"></div>
    </div>
  );
};

export const InlineLoader: React.FC = () => {
  return (
    <div className="inline-flex items-center">
      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current mr-2"></div>
      <span>Loading...</span>
    </div>
  );
};

export default function LoadingStates() {
  return <PageLoader />;
}