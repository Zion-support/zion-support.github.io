import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import FuturisticBackground from '../components/FuturisticBackground';

const AIVideoGeneratorPage: React.FC = memo(() => {
  return (
    <>
      <SEOHead
        title="Zion AI Video Generator Pro - AI-Powered Video Creation"
        description="Create professional videos with AI technology. AI-powered video creation platform with automated editing, voice synthesis, and multi-format export."
        keywords="AI video generation, video creation, automated editing, voice synthesis, video marketing"
        canonicalUrl="https://ziontechgroup.com/ai-video-generator"
      />
      
      <div className="min-h-screen futuristic-bg relative">
        <FuturisticBackground />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold neon-text mb-6">
              Zion AI Video Generator Pro
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Create professional videos with AI technology. AI-powered video creation platform with 
              automated editing, voice synthesis, and multi-format export.
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

AIVideoGeneratorPage.displayName = 'AIVideoGeneratorPage';

export default AIVideoGeneratorPage;