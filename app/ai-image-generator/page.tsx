import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import FuturisticBackground from '../components/FuturisticBackground';

const AIImageGeneratorPage: React.FC = memo(() => {
  return (
    <>
      <SEOHead
        title="Zion AI Image Generator Pro - AI-Powered Image Creation"
        description="Create stunning images with AI technology. Advanced AI image generation and editing platform with style transfer, upscaling, and creative tools."
        keywords="AI image generation, image editing, style transfer, upscaling, creative tools, AI art"
        canonicalUrl="https://ziontechgroup.com/ai-image-generator"
      />
      
      <div className="min-h-screen futuristic-bg relative">
        <FuturisticBackground />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold neon-text mb-6">
              Zion AI Image Generator Pro
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Create stunning images with AI technology. Advanced AI image generation and editing platform 
              with style transfer, upscaling, and creative tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="neon-button hover-lift">
                Try Free Demo
              </button>
              <Link to="/contact" className="neon-button hover-lift" style={{borderColor: '#bf00ff', color: '#bf00ff'}}>
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

AIImageGeneratorPage.displayName = 'AIImageGeneratorPage';

export default AIImageGeneratorPage;