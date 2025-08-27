import React from 'react';

export const TechSolutionsSection: React.FC = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Technology Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-white/5 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">AI & ML</h3>
            <p className="text-zinc-300">Advanced artificial intelligence</p>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Cloud Computing</h3>
            <p className="text-zinc-300">Scalable cloud solutions</p>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Cybersecurity</h3>
            <p className="text-zinc-300">Enterprise security</p>
          </div>
        </div>
      </div>
    </section>
  );
};