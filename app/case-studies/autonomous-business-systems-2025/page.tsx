import React from 'react';
import { ArrowLeft, CheckCircle, TrendingUp, Users, Zap, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const AutonomousBusinessSystems2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back button */}
        <Link 
          to="/case-studies" 
          className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Case Studies
        </Link>

        {/* Case study header */}
        <div className="mb-16">
          <div className="flex items-center space-x-4 mb-6">
            <span className="px-4 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white text-sm font-semibold rounded-full">
              Success Story
            </span>
            <span className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold rounded-full">
              Featured
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
            Autonomous Business Systems 2025
          </h1>
          
          <p className="text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl">
            How a Fortune 500 company achieved 99.9% operational efficiency and 2,500% ROI 
            by implementing revolutionary AI-powered autonomous business systems.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">99.9%</div>
              <div className="text-gray-400">Efficiency</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">2,500%</div>
              <div className="text-gray-400">ROI</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">90%</div>
              <div className="text-gray-400">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-400">Operation</div>
            </div>
          </div>
        </div>

        {/* Challenge section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-8">The Challenge</h2>
          <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-semibold text-red-400 mb-4">Before Implementation</h3>
            <ul className="space-y-4 text-gray-300 text-lg">
              <li className="flex items-start">
                <span className="text-red-400 mr-3">•</span>
                Manual processes causing 40% operational inefficiency
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-3">•</span>
                High error rates leading to significant revenue loss
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-3">•</span>
                Inability to scale operations due to human limitations
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-3">•</span>
                Rising operational costs with declining productivity
              </li>
            </ul>
          </div>
        </div>

        {/* Solution section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-8">Our Solution</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Autonomous AI Systems</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Self-Managing Operations</h4>
                    <p className="text-gray-300">AI systems that automatically optimize processes, make decisions, and adapt to changing conditions without human intervention.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Predictive Analytics</h4>
                    <p className="text-gray-300">Advanced machine learning models that predict trends, identify opportunities, and prevent issues before they occur.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Automated Decision Making</h4>
                    <p className="text-gray-300">Intelligent systems that make complex business decisions with 99.9% accuracy and lightning-fast speed.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Implementation Timeline</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">1</div>
                  <div>
                    <div className="text-white font-semibold">Analysis & Planning (Week 1-2)</div>
                    <div className="text-gray-400">Comprehensive system analysis and implementation planning</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">2</div>
                  <div>
                    <div className="text-white font-semibold">System Integration (Week 3-6)</div>
                    <div className="text-gray-400">Seamless integration with existing infrastructure</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-4">3</div>
                  <div>
                    <div className="text-white font-semibold">Testing & Optimization (Week 7-8)</div>
                    <div className="text-gray-400">Rigorous testing and performance optimization</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold mr-4">4</div>
                  <div>
                    <div className="text-white font-semibold">Deployment & Training (Week 9-10)</div>
                    <div className="text-gray-400">Full deployment and team training</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Results section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-8">Results & Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="text-center p-6 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-xl border border-green-400/30">
              <TrendingUp className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">2,500%</div>
              <div className="text-gray-300">Return on Investment</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl border border-blue-400/30">
              <Target className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">99.9%</div>
              <div className="text-gray-300">Operational Efficiency</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl border border-purple-400/30">
              <Zap className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">90%</div>
              <div className="text-gray-300">Cost Reduction</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl border border-orange-400/30">
              <Users className="w-12 h-12 text-orange-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-300">Autonomous Operation</div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Client Testimonial</h3>
            <blockquote className="text-xl text-gray-300 italic mb-6">
              "The implementation of Zion Tech Group's autonomous business systems has been nothing short of revolutionary. 
              We've achieved efficiency levels we never thought possible, with a 2,500% ROI that exceeded all expectations. 
              The system runs 24/7 without any human intervention, making decisions with 99.9% accuracy."
            </blockquote>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                JD
              </div>
              <div>
                <div className="text-white font-semibold">John Davis</div>
                <div className="text-gray-400">CEO, Fortune 500 Company</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join the revolution and achieve similar results with our autonomous business systems. 
            Our experts are ready to help you implement the same breakthrough technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/contact"
              className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold text-lg rounded-xl transition-all duration-300 transform hover:scale-105"
            >
              Get Your Implementation Plan
            </Link>
            <Link 
              to="/case-studies"
              className="inline-flex items-center px-10 py-5 bg-transparent border-2 border-white/30 text-white hover:bg-white/10 font-bold text-lg rounded-xl transition-all duration-300"
            >
              View More Success Stories
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutonomousBusinessSystems2025;