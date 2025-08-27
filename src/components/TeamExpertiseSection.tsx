import React from 'react';

export const TeamExpertiseSection: React.FC = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Team Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-white/5 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">AI Engineers</h3>
            <p className="text-zinc-300">Machine learning specialists</p>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Cloud Architects</h3>
            <p className="text-zinc-300">Infrastructure experts</p>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Security Analysts</h3>
            <p className="text-zinc-300">Cybersecurity professionals</p>
          </div>
        </div>
      </div>
    </section>
  );
};