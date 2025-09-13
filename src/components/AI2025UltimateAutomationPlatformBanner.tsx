import React from 'react';
import { Link } from 'react-router-dom';

const AI2025UltimateAutomationPlatformBanner: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/90 via-indigo-600/90 to-cyan-600/90"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            {/* Badge */}
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6 border border-white/30">
              <span className="text-white text-sm font-medium">🚀 ULTIMATE PLATFORM</span>
            </div>

            {/* Main Content */}
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              AI 2025 Ultimate Automation Platform
            </h2>
            <p className="text-xl text-indigo-100 mb-8">
              Transform your entire business with our revolutionary AI-powered automation platform. Achieve 15,000x faster operations, 99.9% accuracy, and up to 5,000% ROI through autonomous business processes.
            </p>

            {/* Key Benefits */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">15K</span>
                </div>
                <span className="text-white font-medium">15,000x Faster</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">99.9%</span>
                </div>
                <span className="text-white font-medium">Accuracy Rate</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">5K%</span>
                </div>
                <span className="text-white font-medium">ROI Achieved</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">24/7</span>
                </div>
                <span className="text-white font-medium">Autonomous</span>
              </div>
            </div>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/ai-2025-ultimate-automation-platform"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
              >
                Explore Platform
              </Link>
              <Link 
                to="/contact"
                className="bg-white/20 hover:bg-white/30 text-white px-8 py-3 rounded-lg font-semibold transition-colors border border-white/30 text-center"
              >
                Get Started
              </Link>
            </div>
          </div>

          <div className="space-y-6">
            {/* Feature Cards */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🤖</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Autonomous Operations</h3>
                  <p className="text-indigo-100 text-sm">
                    Self-managing systems that operate 24/7 without human intervention, making intelligent decisions and adapting to changing conditions.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">⚡</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Lightning-Fast Processing</h3>
                  <p className="text-indigo-100 text-sm">
                    Achieve unprecedented processing speeds with quantum-enhanced AI algorithms that handle complex operations in milliseconds.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🎯</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">99.9% Accuracy</h3>
                  <p className="text-indigo-100 text-sm">
                    Near-perfect accuracy in all automated processes, reducing errors to virtually zero and ensuring consistent, reliable operations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-wrap justify-center items-center gap-8 text-indigo-200 text-sm">
            <div className="flex items-center space-x-2">
              <span>✓</span>
              <span>Fortune 500 Proven</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>✓</span>
              <span>Enterprise Security</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>✓</span>
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>✓</span>
              <span>Scalable Infrastructure</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI2025UltimateAutomationPlatformBanner;