import React from 'react';

export const TechnologyStackSection: React.FC = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Technology Stack</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-4 bg-white/5 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Frontend</h3>
            <p className="text-zinc-300 text-sm">React, Vue, Angular</p>
          </div>
          <div className="text-center p-4 bg-white/5 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Backend</h3>
            <p className="text-zinc-300 text-sm">Node.js, Python, Java</p>
          </div>
          <div className="text-center p-4 bg-white/5 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Cloud</h3>
            <p className="text-zinc-300 text-sm">AWS, Azure, GCP</p>
          </div>
          <div className="text-center p-4 bg-white/5 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">AI/ML</h3>
            <p className="text-zinc-300 text-sm">TensorFlow, PyTorch</p>
          </div>
        </div>
      </div>
    </section>
  );
};