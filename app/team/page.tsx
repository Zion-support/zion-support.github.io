import React from 'react';
import SEOHead from '../components/SEOHead';

const TeamPage: React.FC = () => {
  return (
    <>
      <SEOHead 
        title="Our Team - Zion Tech Group"
        description="Meet the talented team behind Zion Tech Group. Our experts in AI, IT solutions, and technology innovation."
        keywords="team, about us, experts, AI specialists, IT professionals"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Our Team
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Meet the talented team behind Zion Tech Group. Our experts in AI, IT solutions, and technology innovation.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TeamPage;
