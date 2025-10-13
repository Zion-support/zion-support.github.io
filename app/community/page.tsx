import { Helmet } from "react-helmet-async";
import React from 'react';

const CommunityPage = () => {
  return (
    <>
      <Helmet>
        <title>Community - Zion Tech Group</title>
        <meta name="description" content="Join our community of AI and technology enthusiasts and professionals." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Community</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Connect with like-minded professionals and stay updated with the latest trends.
            </p>
          </div>
          
          <div className="text-center text-gray-300">
            <p>Community features coming soon...</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommunityPage;
