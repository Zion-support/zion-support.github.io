import React from 'react';
import { Link } from 'react-router-dom';

const ComprehensiveAIServicesShowcaseBanner: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 via-indigo-600/90 to-purple-600/90"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            {/* Badge */}
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6 border border-white/30">
              <span className="text-white text-sm font-medium">🚀 COMPREHENSIVE AI SERVICES</span>
            </div>

            {/* Main Content */}
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Revolutionary AI Services Showcase
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Transform your business with our comprehensive suite of AI services including machine learning, natural language processing, computer vision, automation, and quantum computing solutions.
            </p>

            {/* Service Categories */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">🧠</span>
                </div>
                <span className="text-white font-medium">Machine Learning</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">💬</span>
                </div>
                <span className="text-white font-medium">NLP</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">👁️</span>
                </div>
                <span className="text-white font-medium">Computer Vision</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">🤖</span>
                </div>
                <span className="text-white font-medium">Automation</span>
              </div>
            </div>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/ai-services-comprehensive-showcase"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
              >
                Explore Services
              </Link>
              <Link 
                to="/contact"
                className="bg-white/20 hover:bg-white/30 text-white px-8 py-3 rounded-lg font-semibold transition-colors border border-white/30 text-center"
              >
                Get Consultation
              </Link>
            </div>
          </div>

          <div className="space-y-6">
            {/* Service Cards */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🧠</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Machine Learning</h3>
                  <p className="text-blue-100 text-sm">
                    Advanced ML algorithms for predictive analytics, pattern recognition, and intelligent decision-making systems.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">💬</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Natural Language Processing</h3>
                  <p className="text-blue-100 text-sm">
                    Advanced NLP solutions for text analysis, sentiment analysis, and conversational AI systems.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">👁️</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Computer Vision</h3>
                  <p className="text-blue-100 text-sm">
                    Advanced image and video analysis solutions for object detection, facial recognition, and visual intelligence.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">⚛️</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Quantum Computing</h3>
                  <p className="text-blue-100 text-sm">
                    Revolutionary quantum computing solutions for complex problem-solving, optimization, and advanced simulations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Industry Applications */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold text-white mb-2">Serving Industries Worldwide</h3>
            <p className="text-blue-100 text-sm">Healthcare • Finance • Manufacturing • E-commerce • Automotive • Agriculture</p>
          </div>
          
          {/* Success Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-white mb-1">500+</div>
              <div className="text-blue-200 text-sm">Projects Completed</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-1">98%</div>
              <div className="text-blue-200 text-sm">Success Rate</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-1">15K%</div>
              <div className="text-blue-200 text-sm">Average ROI</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-1">24/7</div>
              <div className="text-blue-200 text-sm">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComprehensiveAIServicesShowcaseBanner;