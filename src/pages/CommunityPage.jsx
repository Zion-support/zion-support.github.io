import React from 'react';
import SEO from '@/components/SEO';
import Header from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function CommunityPage() {
  return (
    <>
      <SEO
        title="Community - Zion Tech Group"
        description="Join our community of developers, entrepreneurs, and technology enthusiasts."
        keywords="community, developers, entrepreneurs, technology, networking"
        canonical="https://ziontechgroup.com/community"
      />
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-white mb-4">Community</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join our community of developers, entrepreneurs, and technology enthusiasts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 rounded-lg p-6 border border-blue-500/20">
              <h3 className="text-xl font-semibold text-white mb-4">Developer Forum</h3>
              <p className="text-gray-300 mb-4">
                Connect with fellow developers, share knowledge, and get help with your projects.
              </p>
              <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors">
                Join Forum
              </button>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-6 border border-blue-500/20">
              <h3 className="text-xl font-semibold text-white mb-4">Events & Meetups</h3>
              <p className="text-gray-300 mb-4">
                Attend virtual and in-person events to network and learn from industry experts.
              </p>
              <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors">
                View Events
              </button>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-6 border border-blue-500/20">
              <h3 className="text-xl font-semibold text-white mb-4">Mentorship Program</h3>
              <p className="text-gray-300 mb-4">
                Get paired with experienced mentors or become a mentor to help others grow.
              </p>
              <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
}