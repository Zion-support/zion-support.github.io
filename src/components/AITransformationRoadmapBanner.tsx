import React from 'react';
import { Link } from 'react-router-dom';

const AITransformationRoadmapBanner: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 via-cyan-600/90 to-teal-600/90"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            {/* Badge */}
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6 border border-white/30">
              <span className="text-white text-sm font-medium">🗺️ AI TRANSFORMATION ROADMAP 2025</span>
            </div>

            {/* Main Content */}
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              AI Transformation Roadmap 2025
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Navigate your AI transformation journey with our comprehensive roadmap covering strategy, implementation, optimization, and achieving unprecedented ROI.
            </p>

            {/* Transformation Phases */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">1</span>
                </div>
                <span className="text-white font-medium">Assessment</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">2</span>
                </div>
                <span className="text-white font-medium">Foundation</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">3</span>
                </div>
                <span className="text-white font-medium">Pilot</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">4</span>
                </div>
                <span className="text-white font-medium">Scale</span>
              </div>
            </div>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/ai-transformation-roadmap-2025"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
              >
                View Complete Roadmap
              </Link>
              <Link 
                to="/contact"
                className="bg-white/20 hover:bg-white/30 text-white px-8 py-3 rounded-lg font-semibold transition-colors border border-white/30 text-center"
              >
                Start Transformation
              </Link>
            </div>
          </div>

          <div className="space-y-6">
            {/* Phase Cards */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">📊</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Phase 1: Assessment & Strategy</h3>
                  <p className="text-blue-100 text-sm">
                    Comprehensive evaluation of your current state, identification of AI opportunities, and development of a strategic roadmap.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🏗️</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Phase 2: Foundation & Infrastructure</h3>
                  <p className="text-blue-100 text-sm">
                    Building the technical foundation with robust infrastructure, data pipelines, and security frameworks.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🚀</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Phase 3: Pilot Implementation</h3>
                  <p className="text-blue-100 text-sm">
                    Starting with focused pilot projects to validate concepts, refine approaches, and demonstrate early value.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">⚡</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Phase 4: Scale & Optimize</h3>
                  <p className="text-blue-100 text-sm">
                    Scaling successful pilots across the organization and optimizing performance for maximum impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold text-white mb-2">Proven Results</h3>
            <p className="text-blue-100 text-sm">Measurable outcomes achieved through our transformation methodology</p>
          </div>
          
          {/* Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-white mb-1">15K%</div>
              <div className="text-blue-200 text-sm">Average ROI</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">99.9%</div>
              <div className="text-blue-200 text-sm">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">75%</div>
              <div className="text-blue-200 text-sm">Cost Reduction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">90%</div>
              <div className="text-blue-200 text-sm">Efficiency Gain</div>
            </div>
          </div>
        </div>

        {/* Implementation Timeline */}
        <div className="mt-8 pt-6 border-t border-white/20">
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold text-white mb-2">Implementation Timeline</h3>
            <p className="text-blue-100 text-sm">Typical timelines for different organization sizes</p>
          </div>
          
          {/* Timeline Preview */}
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-lg font-bold text-white mb-1">Small (1-50)</div>
              <div className="text-blue-200 text-sm">5-7 months</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-lg font-bold text-white mb-1">Medium (51-500)</div>
              <div className="text-blue-200 text-sm">10-14 months</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-lg font-bold text-white mb-1">Large (500+)</div>
              <div className="text-blue-200 text-sm">19-29 months</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AITransformationRoadmapBanner;