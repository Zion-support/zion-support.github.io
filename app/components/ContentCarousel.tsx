import React from 'react';

const ContentCarousel: React.FC = () => {
  return (
    <>
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
          Featured Content
        </h2>
        
        <div className="cyber-card hologram-card p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-white mb-3">AI Innovation</h3>
              <p className="text-gray-300 mb-4">
                Discover how AI is transforming industries and creating new opportunities for growth.
              </p>
              <a href="/ai-services" className="text-cyan-400 hover:text-cyan-300 font-medium">
                Learn More →
              </a>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-white mb-3">Digital Transformation</h3>
              <p className="text-gray-300 mb-4">
                Accelerate your business transformation with our cutting-edge digital solutions.
              </p>
              <a href="/it-services" className="text-cyan-400 hover:text-cyan-300 font-medium">
                Learn More →
              </a>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">🔮</div>
              <h3 className="text-xl font-bold text-white mb-3">Future Technologies</h3>
              <p className="text-gray-300 mb-4">
                Explore emerging technologies that will shape the future of business.
              </p>
              <a href="/quantum-computing" className="text-cyan-400 hover:text-cyan-300 font-medium">
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default ContentCarousel;