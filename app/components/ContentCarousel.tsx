import React from 'react';

const ContentCarousel: React.FC = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-8 neon-text">
          Featured Content
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="cyber-card hologram-card p-6">
            <h3 className="text-xl font-semibold text-white mb-4">AI Solutions</h3>
            <p className="text-gray-300 mb-4">Discover our latest AI innovations and solutions.</p>
            <a href="/ai-services" className="text-cyan-400 hover:text-cyan-300">Learn More →</a>
          </div>
          <div className="cyber-card hologram-card p-6">
            <h3 className="text-xl font-semibold text-white mb-4">IT Services</h3>
            <p className="text-gray-300 mb-4">Comprehensive IT infrastructure and support services.</p>
            <a href="/it-services" className="text-cyan-400 hover:text-cyan-300">Learn More →</a>
          </div>
          <div className="cyber-card hologram-card p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Micro SAAS</h3>
            <p className="text-gray-300 mb-4">Powerful, affordable tools for modern businesses.</p>
            <a href="/micro-saas" className="text-cyan-400 hover:text-cyan-300">Learn More →</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentCarousel;
