import React from 'react';
import { Helmet } from 'react-helmet-async';
const Community = () => {
    return (<>
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
            <p className="text-gray-600 text-center">
              Community page coming soon. We're building a vibrant community platform.
            </p>
          </div>
        </div>
      </div>
    </>);
};
export default Community;
