import React from 'react';

const CommunityPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-900 via-orange-900 to-red-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-8">Community</h1>
          <p className="text-xl text-gray-300 mb-8">
            Join our vibrant community of innovators and technologists.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 max-w-2xl mx-auto">
            <p className="text-lg">
              Connect with like-minded professionals, share knowledge, and 
              collaborate on cutting-edge technology projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;