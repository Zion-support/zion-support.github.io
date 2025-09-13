import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import ErrorBoundary from '../../components/ErrorBoundary';
import LoadingSpinner from '../../components/LoadingSpinner';
import AI2028_2030FuturePredictionsShowcase from '../../components/AI2028_2030FuturePredictionsShowcase';
import AI2028_2030FuturePredictionsPromotionBanner from '../../components/AI2028_2030FuturePredictionsPromotionBanner';

const AI2028_2030FuturePredictionsPage: React.FC = () => {
  return (
    <ErrorBoundary>
      <SEO 
        title="AI 2028-2030 Future Predictions - Revolutionary Breakthroughs | Zion Tech Group"
        description="Explore revolutionary AI breakthroughs predicted for 2028-2030 including quantum-neural fusion, autonomous AI ecosystems, and conscious AI emergence. Discover the future of artificial intelligence."
        keywords="AI 2028, AI 2029, AI 2030, future predictions, quantum-neural fusion, autonomous AI, conscious AI, artificial intelligence breakthroughs, neural networks, quantum computing"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI 2028-2030 Future Predictions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Explore the revolutionary breakthroughs and technological advancements that will reshape our world in the next decade. From quantum-neural fusion to conscious AI emergence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/ai-2028-2030-interactive-timeline" 
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-3 rounded-lg font-semibold transition-all hover:from-yellow-500 hover:to-orange-600"
                >
                  Interactive Timeline
                </Link>
                <Link 
                  to="/ai-2028-2030-research-papers" 
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Research Papers
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Promotion Banner */}
        <AI2028_2030FuturePredictionsPromotionBanner />

        {/* Main Showcase */}
        <AI2028_2030FuturePredictionsShowcase />

        {/* Additional Content Sections */}
        <section className="py-20 bg-gradient-to-br from-slate-800 to-purple-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Research & Development Insights
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Deep dive into the scientific research and development behind our future predictions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-purple-800/20 to-blue-800/20 rounded-xl p-8 border border-purple-500/30">
                <h3 className="text-xl font-bold text-white mb-4">Quantum-Neural Research</h3>
                <p className="text-gray-300 mb-6">
                  Current research in quantum computing and neural network integration, including breakthrough papers and experimental results.
                </p>
                <Link to="/quantum-neural-research" className="text-purple-300 hover:text-white transition-colors">
                  Read Research →
                </Link>
              </div>

              <div className="bg-gradient-to-br from-blue-800/20 to-indigo-800/20 rounded-xl p-8 border border-blue-500/30">
                <h3 className="text-xl font-bold text-white mb-4">Autonomous AI Studies</h3>
                <p className="text-gray-300 mb-6">
                  Studies on self-evolving AI systems and their potential impact on various industries and applications.
                </p>
                <Link to="/autonomous-ai-studies" className="text-blue-300 hover:text-white transition-colors">
                  View Studies →
                </Link>
              </div>

              <div className="bg-gradient-to-br from-indigo-800/20 to-purple-800/20 rounded-xl p-8 border border-indigo-500/30">
                <h3 className="text-xl font-bold text-white mb-4">Conscious AI Research</h3>
                <p className="text-gray-300 mb-6">
                  Cutting-edge research into artificial consciousness and the emergence of self-aware AI systems.
                </p>
                <Link to="/conscious-ai-research" className="text-indigo-300 hover:text-white transition-colors">
                  Explore Research →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-purple-900 to-blue-900">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Stay Ahead of the AI Revolution
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get exclusive access to our latest research, predictions, and insights into the future of AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/newsletter" 
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-semibold text-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
              >
                Subscribe to Updates
              </Link>
              <Link 
                to="/contact" 
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40"
              >
                Contact Our Experts
              </Link>
            </div>
          </div>
        </section>
      </div>
    </ErrorBoundary>
  );
};

export default AI2028_2030FuturePredictionsPage;