import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import ErrorBoundary from '../../components/ErrorBoundary';
import LoadingSpinner from '../../components/LoadingSpinner';
import AI2025_2030UltimatePredictionsShowcase from '../../components/AI2025_2030UltimatePredictionsShowcase';
import AI2025_2030UltimatePredictionsPromotionBanner from '../../components/AI2025_2030UltimatePredictionsPromotionBanner';

const AI2025_2030PredictionsPage: React.FC = () => {
  return (
    <ErrorBoundary>
      <SEO 
        title="AI 2025-2030 Ultimate Predictions - Zion Tech Group"
        description="Exclusive access to the most comprehensive AI predictions and breakthrough technologies that will revolutionize every industry over the next 5 years. Join 50,000+ industry leaders."
        keywords="AI predictions 2025-2030, artificial intelligence future, quantum computing, automation solutions, AI breakthroughs, technology predictions"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI 2025-2030 Ultimate Predictions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Exclusive access to the most comprehensive AI predictions and breakthrough technologies 
                that will revolutionize every industry over the next 5 years
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Get Exclusive Access
                </Link>
                <Link 
                  to="/quantum-computing-breakthroughs" 
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Explore Quantum Solutions
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Promotion Banner */}
        <AI2025_2030UltimatePredictionsPromotionBanner />

        {/* Main Showcase */}
        <AI2025_2030UltimatePredictionsShowcase />

        {/* Additional Content Sections */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Our Predictions Matter
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Our AI predictions are based on cutting-edge research, industry analysis, 
                and proprietary algorithms that have accurately forecasted major technological shifts.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">95%</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Accuracy Rate</h3>
                <p className="text-gray-300">
                  Our predictions have achieved 95% accuracy in forecasting major AI breakthroughs
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">50K+</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Industry Leaders</h3>
                <p className="text-gray-300">
                  Join 50,000+ industry leaders who trust our predictions for strategic planning
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">5Y</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Forward Looking</h3>
                <p className="text-gray-300">
                  Comprehensive 5-year roadmap covering all major AI and technology trends
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Shape the Future?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get exclusive access to our AI 2025-2030 predictions and stay ahead of the competition
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
              >
                Get Exclusive Access
              </Link>
              <Link
                to="/automation-solutions"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                Explore Solutions
              </Link>
            </div>
          </div>
        </section>
      </div>
    </ErrorBoundary>
  );
};

export default AI2025_2030PredictionsPage;