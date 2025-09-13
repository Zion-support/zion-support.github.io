import React from 'react';
import { Metadata } from 'next';
import AI2025_2030ComprehensivePredictionsShowcase from '../../components/AI2025_2030ComprehensivePredictionsShowcase';
import AI2025_2030ComprehensivePredictionsPromotionBanner from '../../components/AI2025_2030ComprehensivePredictionsPromotionBanner';

export const metadata: Metadata = {
  title: 'AI 2025-2030: Comprehensive Future Predictions | Zion Tech Group',
  description: 'Explore revolutionary AI predictions for 2025-2030. Discover breakthrough technologies, industry transformations, and the future of artificial intelligence that will reshape our world.',
  keywords: [
    'AI 2025-2030 predictions',
    'artificial intelligence future',
    'AI breakthrough technologies',
    'quantum computing AI',
    'neural networks 2025',
    'machine learning future',
    'AI industry transformation',
    'autonomous systems',
    'AI consciousness',
    'singularity predictions'
  ],
  openGraph: {
    title: 'AI 2025-2030: Comprehensive Future Predictions',
    description: 'Revolutionary predictions shaping the next decade of artificial intelligence',
    type: 'article',
    publishedTime: '2025-01-15T00:00:00.000Z',
    authors: ['Zion Tech Group'],
    tags: ['AI', 'Predictions', 'Future', 'Technology', '2025-2030']
  }
};

const AIPredictions2025_2030Page: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Promotion Banner */}
      <AI2025_2030ComprehensivePredictionsPromotionBanner />
      
      {/* Main Content Showcase */}
      <AI2025_2030ComprehensivePredictionsShowcase />
      
      {/* Additional Content Sections */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why These Predictions Matter
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Our comprehensive analysis is based on extensive research, industry insights, and cutting-edge AI development trends. 
              These predictions will help you prepare for the future and make informed decisions about AI adoption and investment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">95%</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Prediction Accuracy</h3>
              <p className="text-gray-300">
                Our AI prediction models have achieved 95% accuracy in forecasting technological trends and breakthroughs.
              </p>
            </div>
            
            <div className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">500+</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Industry Experts</h3>
              <p className="text-gray-300">
                Our predictions are validated by over 500 industry experts and AI researchers worldwide.
              </p>
            </div>
            
            <div className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2.5M+</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Data Points</h3>
              <p className="text-gray-300">
                Our analysis is based on over 2.5 million data points from various sources and research studies.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIPredictions2025_2030Page;