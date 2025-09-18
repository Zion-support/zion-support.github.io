import React from 'react';
import { Helmet } from 'react-helmet-async';

const CommunityPage = () => {
  return (
    <>
      <Helmet>
        <title>Community - Zion Tech Group</title>
        <meta name="description" content="Join the Zion Tech Group community. Connect with technology professionals, share knowledge, and stay updated on industry trends."/>
      </Helmet>
      
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Community</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with technology professionals, share knowledge, and stay updated on industry trends.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Coming Soon</h2>
              <p className="text-gray-600 mb-6">
                Our community platform is currently under development. Soon you'll be able to connect with professionals, share knowledge, and participate in discussions.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💬</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Discussions</h3>
                  <p className="text-gray-600 text-sm">
                    Engage in meaningful conversations about technology
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">👥</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Networking</h3>
                  <p className="text-gray-600 text-sm">
                    Connect with like-minded professionals
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📚</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Knowledge Sharing</h3>
                  <p className="text-gray-600 text-sm">
                    Share insights and learn from others
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommunityPage;