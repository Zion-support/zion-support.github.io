import React from 'react';

export const CommunityTrust = () => {
  return (
    <div className="py-16 px-4 bg-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Trusted by the Community
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl mb-4">⭐</div>
            <h3 className="text-xl font-semibold mb-2">4.8/5 Rating</h3>
            <p className="text-gray-600">From thousands of users</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">👥</div>
            <h3 className="text-xl font-semibold mb-2">10K+ Users</h3>
            <p className="text-gray-600">Active community</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-xl font-semibold mb-2">100% Secure</h3>
            <p className="text-gray-600">Enterprise security</p>
          </div>
        </div>
      </div>
    </div>
  );
};