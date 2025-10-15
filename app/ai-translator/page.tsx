import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import FuturisticBackground from '../components/FuturisticBackground';

const AITranslatorPage: React.FC = memo(() => {
  return (
    <>
      <SEOHead
        title="Zion AI Translator Pro - Professional AI Translation"
        description="Professional AI translation in 100+ languages with real-time translation, context-aware accuracy, and enterprise features."
        keywords="AI translation, language translation, real-time translation, multilingual, translation services"
        canonicalUrl="https://ziontechgroup.com/ai-translator"
      />
      
      <div className="min-h-screen futuristic-bg relative">
        <FuturisticBackground />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold neon-text mb-6">
              Zion AI Translator Pro
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Professional AI translation in 100+ languages with real-time translation, 
              context-aware accuracy, and enterprise features.
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

AITranslatorPage.displayName = 'AITranslatorPage';

export default AITranslatorPage;