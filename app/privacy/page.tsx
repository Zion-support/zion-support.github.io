import React from 'react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticBackground from '../components/FuturisticBackground';
import ResponsiveContainer from '../components/ResponsiveContainer';

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="Privacy - Zion Tech Group"
        description="Zion Tech Group privacy page"
        canonical="https://ziontechgroup.com/privacy"
      />
      <FuturisticBackground />

      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <ResponsiveContainer className="text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Privacy
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Coming soon - Privacy page content.
          </p>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default PrivacyPage;
