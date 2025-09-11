import React from 'react';

export function ApplicationsTracker() {
  return (
    <div className="space-y-4">
      <div className="text-center py-8">
        <h3 className="text-lg font-semibold text-white mb-2">No Applications Yet</h3>
        <p className="text-gray-300 mb-4">
          You haven't applied to any jobs yet. Start exploring opportunities!
        </p>
        <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
          Browse Jobs
        </button>
      </div>
    </div>
  );
}