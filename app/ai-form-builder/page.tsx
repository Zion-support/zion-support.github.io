import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import FuturisticBackground from '../components/FuturisticBackground';

const AIFormBuilderPage: React.FC = memo(() => {
  return (
    <>
      <SEOHead
        title="Zion AI Form Builder Pro - Smart Form Creation"
        description="Create smart forms with AI assistance. Intelligent form builder with AI-powered field suggestions, validation, and analytics."
        keywords="AI form builder, smart forms, form creation, lead generation, form analytics"
        canonicalUrl="https://ziontechgroup.com/ai-form-builder"
      />
      
      <div className="min-h-screen futuristic-bg relative">
        <FuturisticBackground />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold neon-text mb-6">
              Zion AI Form Builder Pro
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Create smart forms with AI assistance. Intelligent form builder with AI-powered 
              field suggestions, validation, and analytics.
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

AIFormBuilderPage.displayName = 'AIFormBuilderPage';

export default AIFormBuilderPage;