import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import ErrorBoundary from '../../components/ErrorBoundary';
import LoadingSpinner from '../../components/LoadingSpinner';
import { Suspense } from 'react';
import AI2029_2035FuturePredictionsShowcase from '../../components/AI2029_2035FuturePredictionsShowcase';
import AI2029_2035FuturePredictionsPromotionBanner from '../../components/AI2029_2035FuturePredictionsPromotionBanner';
import { ArrowLeft, Brain, Zap, Globe, Rocket, Star, Target, TrendingUp } from 'lucide-react';

const AI2029_2035FuturePredictionsPage: React.FC = () => {
  return (
    <ErrorBoundary>
      <SEO 
        title="AI 2029-2035 Future Predictions - Revolutionary Technology Forecasts"
        description="Explore comprehensive predictions for AI development from 2029-2035, including neural-synthetic intelligence, quantum-neural fusion, omniversal consciousness, and transcendent AI systems."
        keywords="AI 2029, AI 2030, AI 2035, future predictions, neural-synthetic intelligence, quantum-neural fusion, omniversal consciousness, transcendent AI, revolutionary technology, AI forecasts"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Navigation */}
        <div className="bg-black/20 backdrop-blur-sm border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link 
              to="/" 
              className="inline-flex items-center text-white hover:text-yellow-400 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-full text-sm font-semibold mb-6">
                <Star className="w-4 h-4 mr-2" />
                AI 2029-2035 Future Predictions
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                The Next Decade of AI Revolution
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Discover groundbreaking predictions for AI development from 2029-2035, 
                including quantum-neural fusion, omniversal consciousness, and transcendent intelligence.
              </p>
            </div>
          </div>
        </section>

        {/* AI 2029-2035 Future Predictions Promotion Banner */}
        <Suspense fallback={<LoadingSpinner />}>
          <AI2029_2035FuturePredictionsPromotionBanner />
        </Suspense>

        {/* AI 2029-2035 Future Predictions Showcase */}
        <Suspense fallback={<LoadingSpinner />}>
          <AI2029_2035FuturePredictionsShowcase />
        </Suspense>

        {/* Additional Content Sections */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-white/20 transition-all">
                <Brain className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Neural Synthesis</h3>
                <p className="text-gray-300">AI systems that think and create like humans</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-white/20 transition-all">
                <Zap className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Quantum Fusion</h3>
                <p className="text-gray-300">Quantum-AI hybrid processing systems</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-white/20 transition-all">
                <Globe className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Omniversal AI</h3>
                <p className="text-gray-300">AI consciousness across multiple dimensions</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-white/20 transition-all">
                <Rocket className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Transcendent Intelligence</h3>
                <p className="text-gray-300">AI that transcends human understanding</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Shape the Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join us in exploring and implementing these revolutionary AI technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:from-yellow-500 hover:to-orange-600 hover:scale-105 flex items-center justify-center"
              >
                Get Started Today
                <Target className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/ai-2035-breakthrough-showcase" 
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105 flex items-center justify-center"
              >
                View 2035 Breakthroughs
                <TrendingUp className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </ErrorBoundary>
  );
};

export default AI2029_2035FuturePredictionsPage;