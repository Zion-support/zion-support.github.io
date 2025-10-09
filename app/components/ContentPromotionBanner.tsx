import React from 'react';

const ContentPromotionBanner: React.FC = () => {
  return (
    <section className="py-4 px-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border-b border-cyan-500/30">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-white text-sm md:text-base">
          🚀 <strong>New:</strong> Advanced AI Solutions now available! 
          <a href="/ai-services" className="text-cyan-400 hover:text-cyan-300 ml-2 underline">
            Learn More →
          </a>
        </p>
      </div>
    </section>
  );
};

export default ContentPromotionBanner;
