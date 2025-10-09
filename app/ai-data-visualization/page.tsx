'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIDataVisualizationPage: React.FC = () => {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="container mx-auto px-4 py-16 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
              AI Data Visualization Platform
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8">
              Transform data into actionable insights with AI
            </p>
            <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
              Our AI-powered data visualization platform helps businesses make data-driven decisions 
              with interactive dashboards, intelligent insights, and 100+ data source integrations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <a
                href="tel:+13024640950"
                className="cyber-button flex items-center space-x-2"
              >
                <span>Call (302) 464-0950</span>
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="cyber-button flex items-center space-x-2"
                style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
              >
                <span>Get Free Demo</span>
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AIDataVisualizationPage;
