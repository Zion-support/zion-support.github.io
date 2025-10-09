import React from 'react';

const DynamicContentShowcase: React.FC = () => {
  return (
    <>
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
          Dynamic Content Showcase
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-xl font-bold text-white mb-3">AI-Powered Solutions</h3>
            <p className="text-gray-300 mb-4">
              Discover how our AI solutions are transforming businesses across industries.
            </p>
            <a href="/ai-services" className="text-cyan-400 hover:text-cyan-300 font-medium">
              Explore AI Services →
            </a>
          </div>
          
          <div className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold text-white mb-3">Micro SAAS Tools</h3>
            <p className="text-gray-300 mb-4">
              Access 50+ ready-to-use AI tools that can transform your business operations.
            </p>
            <a href="/micro-saas" className="text-cyan-400 hover:text-cyan-300 font-medium">
              View Micro SAAS →
            </a>
          </div>
          
          <div className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4">🔮</div>
            <h3 className="text-xl font-bold text-white mb-3">Future Technologies</h3>
            <p className="text-gray-300 mb-4">
              Explore quantum computing, robotics, and other cutting-edge technologies.
            </p>
            <a href="/quantum-computing" className="text-cyan-400 hover:text-cyan-300 font-medium">
              Learn More →
            </a>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default DynamicContentShowcase;