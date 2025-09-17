import React from 'react';
import Link from 'next/link';

const NeuralInterfaces2025RevolutionBanner: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
              <span className="text-sm font-medium">🧠 NEURAL INTERFACES 2025</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Revolutionary Neural Interface Technology
            </h2>
            
            <p className="text-xl text-gray-200 leading-relaxed">
              Experience the future of human-computer interaction with direct brain-computer interfaces. 
              Achieve 300% productivity gains through thought-controlled systems and cognitive enhancement.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-white bg-opacity-10 rounded-lg p-4">
                <div className="text-2xl font-bold text-yellow-400">99.7%</div>
                <div className="text-sm text-gray-200">Accuracy Rate</div>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-4">
                <div className="text-2xl font-bold text-green-400">300%</div>
                <div className="text-sm text-gray-200">Productivity Boost</div>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-4">
                <div className="text-2xl font-bold text-blue-400">24/7</div>
                <div className="text-sm text-gray-200">Continuous Operation</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/blog/ai-2025-neural-interfaces-revolution-ultimate-guide"
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Explore Neural Interfaces →
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
          
          {/* Right Content - Interactive Demo */}
          <div className="relative">
            <div className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm">
              <div className="text-center space-y-6">
                <div className="w-24 h-24 mx-auto bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-3xl">🧠</span>
                </div>
                
                <h3 className="text-2xl font-bold">Direct Brain Control</h3>
                
                <div className="space-y-4">
                  <div className="bg-white bg-opacity-20 rounded-lg p-4">
                    <div className="text-sm text-gray-200 mb-2">Thought Command</div>
                    <div className="text-lg font-semibold">"Open Sales Dashboard"</div>
                  </div>
                  
                  <div className="bg-white bg-opacity-20 rounded-lg p-4">
                    <div className="text-sm text-gray-200 mb-2">Neural Response</div>
                    <div className="text-lg font-semibold text-green-400">✓ Command Executed</div>
                  </div>
                  
                  <div className="bg-white bg-opacity-20 rounded-lg p-4">
                    <div className="text-sm text-gray-200 mb-2">Processing Time</div>
                    <div className="text-lg font-semibold text-blue-400">< 50ms</div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-lg p-4">
                  <div className="text-sm font-medium mb-1">Real-time Neural Feedback</div>
                  <div className="text-lg font-bold">System Status: OPTIMAL</div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 -left-8 w-4 h-4 bg-blue-400 rounded-full animate-pulse delay-2000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NeuralInterfaces2025RevolutionBanner;