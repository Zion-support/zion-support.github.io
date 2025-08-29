import React from 'react';
import { SEO } from '../components/SEO';

const Community = () => {
    return (
      <>
        <SEO 
          title="Community - Zion Tech Group"
          description="Join the Zion Tech Group community. Connect with technology professionals, share knowledge, and stay updated on industry trends."
          canonical="/community"
          url="https://ziontechgroup.com/community"
        />
        
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-white mb-4">Community</h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Connect with technology professionals, share knowledge, and stay updated on industry trends.
              </p>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
              <p className="text-gray-300 text-center">
                Community page coming soon. We're building a vibrant community platform for our revolutionary 2030 services.
              </p>
            </div>
          </div>
        </div>
      </>
    );
};

export default Community;
