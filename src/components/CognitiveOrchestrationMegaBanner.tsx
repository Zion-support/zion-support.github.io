import React from 'react';
import { Link } from 'react-router-dom';

const CognitiveOrchestrationMegaBanner: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-12 px-4 mb-8">
      <div className="max-w-7xl mx-auto">
        {/* Announcement Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full animate-pulse">

            <span className="font-bold text-lg">🚀 JUST PUBLISHED: OCTOBER 1, 2025 — BIGGEST BREAKTHROUGH OF THE YEAR!</span>

          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center mb-8">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
            Cognitive Orchestration Revolution
          </h1>
          <p className="text-2xl md:text-3xl font-bold text-yellow-300 mb-6">
            $84.7B Proven Value • 47,200% ROI • 99.97% Autonomous
          </p>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
            The Ultimate Enterprise AI Breakthrough: 287,000+ AI Agents, Sub-Millisecond Response, Fortune 50 Proven Success
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-5xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border-2 border-white/20 hover:border-yellow-300 transition-all">
            <div className="text-4xl font-extrabold text-yellow-300 mb-2">$84.7B</div>
            <div className="text-sm font-semibold">Total Value Created</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border-2 border-white/20 hover:border-yellow-300 transition-all">
            <div className="text-4xl font-extrabold text-yellow-300 mb-2">47,200%</div>
            <div className="text-sm font-semibold">ROI Achieved</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border-2 border-white/20 hover:border-yellow-300 transition-all">
            <div className="text-4xl font-extrabold text-yellow-300 mb-2">99.97%</div>
            <div className="text-sm font-semibold">Autonomous Accuracy</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border-2 border-white/20 hover:border-yellow-300 transition-all">
            
            <div className="text-sm font-semibold">AI Agents Deployed</div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8 max-w-6xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 border-white/20">

            <h3 className="text-xl font-bold mb-3">Neural Decision Engine</h3>
            <p className="text-white/90">500T parameter AI model making 287,000 decisions per second with 99.97% accuracy</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 border-white/20">

            <h3 className="text-xl font-bold mb-3">Fortune 50 Success</h3>
            <p className="text-white/90">$84.7B value delivered across 2,847 global facilities with 3.2-month payback</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 border-white/20">

            <h3 className="text-xl font-bold mb-3">Global-Scale Operations</h3>
            <p className="text-white/90">847,000 systems integrated, 127 countries, 99.99% uptime, 24/7 autonomous</p>
          </div>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/blog/ai-2025-oct-01-cognitive-orchestration-breakthrough"
            className="bg-yellow-400 text-purple-900 hover:bg-yellow-300 font-bold py-4 px-8 rounded-xl text-lg shadow-2xl hover:shadow-yellow-400/50 transition-all transform hover:scale-105"
          >
            📖 Read Complete Breakthrough Guide →
          </Link>
          <Link
            to="/case-studies/cognitive-orchestration-84-billion-success"
            className="bg-white text-purple-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-xl text-lg shadow-2xl hover:shadow-white/50 transition-all transform hover:scale-105"
          >
            💎 View $84.7B Success Story →
          </Link>
          <Link
            to="/services/cognitive-orchestration-platform-services"
            className="border-3 border-white text-white hover:bg-white hover:text-purple-600 font-bold py-4 px-8 rounded-xl text-lg shadow-2xl transition-all transform hover:scale-105"
          >
            🚀 Get Started Today →
          </Link>
        </div>

        {/* Bottom Tagline */}
        <div className="text-center mt-8">
          <p className="text-lg font-semibold">
            🌟 The Most Advanced Enterprise AI Platform Ever Created • Transform Your Operations Today 🌟
          </p>
        </div>
      </div>
    </section>
  );
};

export default CognitiveOrchestrationMegaBanner;
